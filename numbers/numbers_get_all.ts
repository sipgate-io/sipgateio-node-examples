import * as dotenv from 'dotenv';
import { createNumbersModule, sipgateIO } from 'sipgateio';
dotenv.config();

const tokenId = process.env.SIPGATE_TOKEN_ID || '';
const token = process.env.SIPGATE_TOKEN || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username: tokenId, password: token });
const numbersModule = createNumbersModule(client);

numbersModule
	.getAllNumbers({ offset: 5, limit: 10 })
	.then(console.log)
	.catch(console.error);
