import * as dotenv from 'dotenv';
import {
	HistoryDirection,
	HistoryEntryType,
	createHistoryModule,
	sipgateIO,
} from 'sipgateio';

dotenv.config();

const username = process.env.SIPGATE_USERNAME || '';
const password = process.env.SIPGATE_PASSWORD || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });
const historyModule = createHistoryModule(client);

historyModule
	.fetchAll({
		directions: [HistoryDirection.INCOMING],
		types: [HistoryEntryType.SMS],
	})
	.then(console.log)
	.catch(console.error);
