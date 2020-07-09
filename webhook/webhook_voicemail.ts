import * as dotenv from 'dotenv';
import { WebhookResponse, createWebhookModule } from 'sipgateio';
dotenv.config();

const port = 8080;
const serverAddress =
	process.env.SIPGATE_WEBHOOK_SERVER_ADDRESS || 'https://example.com:8080';

const webhookModule = createWebhookModule();
webhookModule
	.createServer({
		port,
		serverAddress,
	})
	.then(webhookServer => {
		console.log(
			`Server running at ${serverAddress}\n` +
				'Please set this URL for incoming calls at https://console.sipgate.com/webhooks/urls\n' +
				"ProTip: To see how to do that automatically, check out the example at 'examples/settings/settings_set_url_incoming.ts'\n" +
				'Ready for calls 📞'
		);

		webhookServer.onNewCall(newCallEvent => {
			console.log(
				`New call from ${newCallEvent.from} to ${newCallEvent.to} (${newCallEvent['user']})`
			);

			return WebhookResponse.sendToVoicemail();
		});

		webhookServer.onAnswer(answerEvent => {
			console.log(`The call was answered by ${answerEvent.user}`);
		});

		webhookServer.onHangUp(hangUpEvent => {
			console.log(`The call has been hung up with cause ${hangUpEvent.cause}`);
		});
	});
