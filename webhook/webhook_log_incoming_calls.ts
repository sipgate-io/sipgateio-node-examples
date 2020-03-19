import {
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

settingsModule.setIncomingUrl(serverAddress);

const webhookModule = createWebhookModule();
webhookModule
	.createServer({
		port,
		serverAddress,
	})
	.then(webhookServer => {
		console.log(`Server running at ${serverAddress}\nReady for calls 📞`);
		webhookServer.onNewCall(newCallEvent => {
			console.log(`New call from ${newCallEvent.from} to ${newCallEvent.to}`);
		});

		webhookServer.onAnswer(answerEvent => {
			console.log(`The call was anwered by ${answerEvent.user}`);
		});

		webhookServer.onHangUp(hangUpEvent => {
			console.log(`The call was hung up with reason ${hangUpEvent.cause}`);
		});
	});
