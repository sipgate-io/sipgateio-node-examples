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
	.get('PRIVATE') //PRIVATE, SHARED, INTERNAL
	.then(response => {
		console.log(response);
	})
	.catch(console.error);
