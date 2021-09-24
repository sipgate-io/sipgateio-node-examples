import * as dotenv from 'dotenv';
import { RejectReason } from 'sipgateio/dist/webhook';
import { WebhookResponse, createWebhookModule } from 'sipgateio';
dotenv.config();

const port = 8080;

if (!process.env.SIPGATE_WEBHOOK_SERVER_ADDRESS) {
	console.error(
		'ERROR: You need to set a server address for the followup webhook events!\n'
	);
	process.exit();
}

const serverAddress = process.env.SIPGATE_WEBHOOK_SERVER_ADDRESS;
const hostname = process.env.HOSTNAME || 'localhost';

const webhookModule = createWebhookModule();
webhookModule
	.createServer({
		port,
		serverAddress,
		hostname,
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
