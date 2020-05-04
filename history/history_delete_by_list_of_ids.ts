import { createHistoryModule, sipgateIO } from 'sipgateio';

const username = process.env.SIPGATE_USERNAME || '';
const password = process.env.SIPGATE_PASSWORD || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });
const historyModule = createHistoryModule(client);

const entryIds = ['5005048075', '5005048101'];

historyModule
	.deleteByListOfIds(entryIds)
	.then(console.log)
	.catch(console.error);
