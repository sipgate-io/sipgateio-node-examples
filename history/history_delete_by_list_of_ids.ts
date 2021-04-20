import * as dotenv from 'dotenv';
import { createHistoryModule, sipgateIO } from 'sipgateio';
dotenv.config();

const tokenId = process.env.SIPGATE_TOKEN_ID || '';
const token = process.env.SIPGATE_TOKEN || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username: tokenId, password: token });
const historyModule = createHistoryModule(client);

const entryIds = ['5005048075', '5005048101'];

historyModule
	.deleteByListOfIds(entryIds)
	.then(console.log)
	.catch(console.error);
