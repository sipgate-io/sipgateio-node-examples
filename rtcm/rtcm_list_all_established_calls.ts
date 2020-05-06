import { createRTCMModule, sipgateIO } from 'sipgateio';

const username = process.env.SIPGATE_USERNAME || '';
const password = process.env.SIPGATE_PASSWORD || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });
const rtcmModule = createRTCMModule(client);

rtcmModule
	.getEstablishedCalls()
	.then(console.log)
	.catch(console.error);
