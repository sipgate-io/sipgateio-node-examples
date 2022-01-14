import * as dotenv from 'dotenv';
import { WebhookResponse, createWebhookModule, sipgateIO } from 'sipgateio';
dotenv.config();

const port = 8080;

if (!process.env.SIPGATE_WEBHOOK_SERVER_ADDRESS) {
	console.error(
		'ERROR: You need to set a server address for the followup webhook events!\n'
	);
	process.exit();
}

const personalAccessTokenId = process.env.SIPGATE_TOKEN_ID || '';
const personalAccessToken = process.env.SIPGATE_TOKEN || '';
const client = sipgateIO({
	tokenId: personalAccessTokenId,
	token: personalAccessToken,
});

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

			console.log('Playing audio and hangup...');

			return WebhookResponse.playAudioAndHangUp(
				{
					announcement: 'https://static.sipgate.com/examples/wav/example.wav',
				},
				client,
				newCallEvent.callId
			);
		});
	});
