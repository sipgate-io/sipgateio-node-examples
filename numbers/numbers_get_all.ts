import * as dotenv from 'dotenv';
import { createNumbersModule, sipgateIO } from 'sipgateio';
dotenv.config();

const username = process.env.SIPGATE_USERNAME || '';
const password = process.env.SIPGATE_PASSWORD || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });
const numbersModule = createNumbersModule(client);

numbersModule
	.getAllNumbers({ offset: 5, limit: 10 })
	.then(console.log)
	.catch(console.error);
