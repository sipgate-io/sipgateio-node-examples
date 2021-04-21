import { createRTCMModule, sipgateIO } from 'sipgateio';

const personalAccessTokenId = process.env.SIPGATE_TOKEN_ID || '';
const personalAccessToken = process.env.SIPGATE_TOKEN || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({
	tokenId: personalAccessTokenId,
	token: personalAccessToken,
});
const rtcmModule = createRTCMModule(client);

rtcmModule
	.getEstablishedCalls()
	.then(console.log)
	.catch(console.error);
