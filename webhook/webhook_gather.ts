import {
	WebhookResponse,
	createSettingsModule,
	createWebhookModule,
	sipgateIO,
} from 'sipgateio';

const port = 8080;
const serverAddress = process.env.SIPGATE_WEBHOOK_SERVER_ADDRESS || '';

const password = process.env.SIPGATE_PASSWORD || '';
const username = process.env.SIPGATE_USERNAME || '';

/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });

const settingsModule = createSettingsModule(client);

settingsModule.setOutgoingUrl(serverAddress);
settingsModule.setIncomingUrl(serverAddress);

const webhookModule = createWebhookModule();
webhookModule
	.createServer({
		port,
		serverAddress,
	})
	.then(webhookserver => {
		console.log(`Server running at ${serverAddress}\nReady for calls 📞`);
		webhookserver.onNewCall(newCallEvent => {
			console.log(`New call from ${newCallEvent.from} to ${newCallEvent.to}`);

			return WebhookResponse.gatherDTMF({
				maxDigits: 1,
				timeout: 5000,
				announcement: 'https://static.sipgate.com/examples/wav/example.wav',
			});
		});
		webhookserver.onData(dataEvent => {
			console.log(
				`The caller pressed ${dataEvent.dtmf ? dataEvent.dtmf : 'nothing'}`
			);
		});
	});
