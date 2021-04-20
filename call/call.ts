import * as dotenv from 'dotenv';
import { createCallModule, sipgateIO } from 'sipgateio';
dotenv.config();

const tokenId = process.env.SIPGATE_TOKEN_ID || '';
const token = process.env.SIPGATE_TOKEN || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username: tokenId, password: token });

const from = process.env.SIPGATE_CALLER || '';
const to = process.env.SIPGATE_CALLEE || '';

const call = createCallModule(client);
call
	.initiate({ to, from })
	.then(() => {
		console.log('Call initiated');
	})
	.catch(error => {
		console.error(error.message);
	});
