import * as dotenv from 'dotenv';
import { createContactsModule, sipgateIO } from 'sipgateio';
import { vcardExample } from './vcard';
dotenv.config();

const tokenId = process.env.SIPGATE_TOKEN_ID || '';
const token = process.env.SIPGATE_TOKEN || '';

/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username: tokenId, password: token });
const contacts = createContactsModule(client);

contacts
	.importVCardString(vcardExample, 'SHARED')
	.then(() => {
		console.log('Contact imported successfully');
	})
	.catch(error => {
		console.error(error.message);
	});
