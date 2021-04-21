import * as dotenv from 'dotenv';
import { createContactsModule, sipgateIO } from 'sipgateio';
import { readFileSync } from 'fs';
dotenv.config();

const filePath = './contacts/contacts.csv';
const fileContent = readFileSync(filePath).toString();

const personalAccessTokenId = process.env.SIPGATE_TOKEN_ID || '';
const personalAccessToken = process.env.SIPGATE_TOKEN || '';

/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({
	tokenId: personalAccessTokenId,
	token: personalAccessToken,
});
const contacts = createContactsModule(client);

contacts
	.importFromCsvString(fileContent)
	.then(() => {
		console.log('Contacts were imported successfully');
	})
	.catch(error => {
		console.error(error.message);
	});
