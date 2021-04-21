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
const from = process.env.SIPGATE_SMS_FROM || '';

const sms = createSMSModule(client);

sms
	.send({
		message: 'lorem',
		to,
		from,
	})
	.then(() => {
		console.log('with phone number sent');
	})
	.catch(console.error);
