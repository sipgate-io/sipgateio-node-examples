import * as dotenv from 'dotenv';
import { createContactsModule, sipgateIO } from 'sipgateio';
dotenv.config();

const personalAccessTokenId = process.env.SIPGATE_TOKEN_ID || '';
const personalAccessToken = process.env.SIPGATE_TOKEN || '';
const contactId = '<CONTACT-ID>';

/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({
	tokenId: personalAccessTokenId,
	token: personalAccessToken,
});
const contacts = createContactsModule(client);

contacts
	.delete(contactId)
	.then(() => {
		console.log('Contact was successfully deleted.');
	})
	.catch(console.error);
