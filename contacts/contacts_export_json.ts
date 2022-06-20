import * as dotenv from 'dotenv';
import { createContactsModule, sipgateIO } from 'sipgateio';
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
const contacts = createContactsModule(client);

contacts
	.paginatedExportAsJSON('PRIVATE', { offset: 0, limit: 10 })
	.then(data => {
		console.log(data.response);
	})
	.catch(error => {
		console.error(error.message);
	});
