import * as dotenv from 'dotenv';
import { createHistoryModule, sipgateIO } from 'sipgateio';
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
const historyModule = createHistoryModule(client);

historyModule
	.fetchById('5005047375')
	.then(console.log)
	.catch(console.error);
