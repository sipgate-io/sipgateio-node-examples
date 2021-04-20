import * as dotenv from 'dotenv';
import {
	HistoryDirection,
	HistoryEntryType,
	createHistoryModule,
	sipgateIO,
} from 'sipgateio';

dotenv.config();

const tokenId = process.env.SIPGATE_TOKEN_ID || '';
const token = process.env.SIPGATE_TOKEN || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username: tokenId, password: token });
const historyModule = createHistoryModule(client);

historyModule
	.fetchAll({
		directions: [HistoryDirection.INCOMING],
		types: [HistoryEntryType.SMS],
		startDate: new Date("08-11-2020"),
		endDate: new Date(),
	})
	.then(console.log)
	.catch(console.error);
