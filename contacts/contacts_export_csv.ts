import * as dotenv from 'dotenv';
import { createContactsModule, sipgateIO } from 'sipgateio';
dotenv.config();

const tokenId = process.env.SIPGATE_TOKEN_ID || '';
const token = process.env.SIPGATE_TOKEN || '';

/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username: tokenId, password: token });
const contacts = createContactsModule(client);

contacts
	.exportAsCsv('INTERNAL')
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.error(error.message);
	});
