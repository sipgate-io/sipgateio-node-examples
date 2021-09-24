import * as dotenv from 'dotenv';
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
			console.log(`New call from ${newCallEvent.from} to ${newCallEvent.to}`);

			console.log('Redirecting...');
			return WebhookResponse.redirectCall({
				anonymous: true,
				numbers: ['+49123456789'],
			});
		});
	});
