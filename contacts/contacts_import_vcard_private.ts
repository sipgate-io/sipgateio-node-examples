import * as dotenv from 'dotenv';
import { createContactsModule, sipgateIO } from 'sipgateio';
import { vcardExample } from './vcard';
dotenv.config();

const password = process.env.SIPGATE_PASSWORD || '';
const username = process.env.SIPGATE_USERNAME || '';

/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });
const contacts = createContactsModule(client);

contacts
	.importVCardString(vcardExample, 'PRIVATE')
	.then(() => {
		console.log('Contact imported successfully');
	})
	.catch(error => {
		console.error(error.message);
	});
