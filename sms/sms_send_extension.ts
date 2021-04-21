import * as dotenv from 'dotenv';
import { createSMSModule, sipgateIO } from 'sipgateio';
dotenv.config();

const personalAccessTokenId = process.env.SIPGATE_TOKEN_ID || '';
const personalAccessToken = process.env.SIPGATE_TOKEN || '';

/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({
	tokenId: personalAccessTokenId,
	token: personalAccessToken,
});

const to = process.env.SIPGATE_SMS_RECIPIENT || '';
const smsExtension = process.env.SIPGATE_SMS_EXTENSION || '';
const message = 'This is a test message.';

const shortMessage = {
	message,
	to,
	smsId: smsExtension,
};
const sms = createSMSModule(client);

sms
	.send(shortMessage)
	.then(() => {
		console.log('Sms sent.');
	})
	.catch(console.error);
