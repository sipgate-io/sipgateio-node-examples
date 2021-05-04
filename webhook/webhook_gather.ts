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
			if (newCallEvent.users.includes('voicemail')) {
				return;
			}

			console.log(`New call from ${newCallEvent.from} to ${newCallEvent.to}`);

			return WebhookResponse.gatherDTMF({
				maxDigits: 1,
				timeout: 5000,
				announcement:
					'https://github.com/sipgate-io/sipgateio-node-examples/blob/main/static/example.wav?raw=true',
			});
		});

		webhookServer.onData(dataEvent => {
			const selection = dataEvent.dtmf;

			console.log(`The caller pressed ${selection ? selection : 'nothing'}`);

			const redirectNumbers = ['12'];

			switch (selection) {
				case '0':
					console.log('Restarting the loop');
					return WebhookResponse.gatherDTMF({
						maxDigits: 1,
						timeout: 5000,
						announcement: 'https://static.sipgate.com/examples/wav/example.wav',
					});
				case '1':
					console.log('Redirecting the call to voicemail');
					return WebhookResponse.sendToVoicemail();
				case '2':
					console.log(`Redirecting the call to ${redirectNumbers.join(', ')}`);
					return WebhookResponse.redirectCall({
						numbers: redirectNumbers,
						anonymous: true,
						callerId: '+49123456789',
					});
				case '3':
					console.log('Hanging up the call');
					return WebhookResponse.hangUpCall();
			}
		});

		webhookServer.onAnswer(answerEvent => {
			console.log(`The call was answered by ${answerEvent.user}`);
		});

		webhookServer.onHangUp(hangUpEvent => {
			console.log(`The call has been hung up with cause ${hangUpEvent.cause}`);
		});
	});
