import * as dotenv from 'dotenv';
import { RejectReason } from 'sipgateio/dist/webhook';
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
			const businessHours = { begin: 8, end: 16 };
			const now = new Date().getHours();

			console.log(`New call from ${newCallEvent.from} to ${newCallEvent.to}`);

			if (now < businessHours.begin || now > businessHours.end) {
				console.log(
					`Call from ${newCallEvent.from} rejected outside business hours`
				);
				return WebhookResponse.rejectCall({ reason: RejectReason.REJECTED });
			}
		});
	});
