import { createSMSModule, sipgateIO } from 'sipgateio';

const username = process.env.SIPGATE_USERNAME || '';
const password = process.env.SIPGATE_PASSWORD || '';

/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });

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
