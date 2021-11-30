import { FluentWebhookServer } from 'sipgateio';

import * as dotenv from 'dotenv';
dotenv.config();

const port = 8080;

if (!process.env.SIPGATE_WEBHOOK_SERVER_ADDRESS) {
	console.error(
		'ERROR: You need to set a server address for the followup webhook events!\n'
	);
	process.exit();
}
const serverAddress = process.env.SIPGATE_WEBHOOK_SERVER_ADDRESS;

new FluentWebhookServer()
	.setServerPort(port)
	.setServerAddress(serverAddress)
	.setOnNewCallListener(newCallEvent => {
		console.log(`New call from ${newCallEvent.from} to ${newCallEvent.to}`);
	})
	.setOnHangupListener(hangupEvent => {
		console.log(`hangup with cause: ${hangupEvent.cause}`);
	})
	.startServer();
