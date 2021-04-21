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
	.exportAsCsvString(
		{ connectionIds: ['s0', 's1'], archived: false },
		{ limit: 5, offset: 5 }
	)
	.then(console.log)
	.catch(console.error);
