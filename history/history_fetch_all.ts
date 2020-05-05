import * as dotenv from 'dotenv';
import { createHistoryModule, sipgateIO } from 'sipgateio';
dotenv.config();

const username = process.env.SIPGATE_USERNAME || '';
const password = process.env.SIPGATE_PASSWORD || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });
const historyModule = createHistoryModule(client);

historyModule
	.fetchAll(
		{ connectionIds: ['s0', 's1'], archived: false },
		{ limit: 5, offset: 5 }
	)
	.then(console.log)
	.catch(console.error);
