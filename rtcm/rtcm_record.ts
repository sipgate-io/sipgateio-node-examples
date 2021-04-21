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
const callID =
	'54516B150B0C0D3A5D52405454577E56555A5655555B565B7C5E515645514351474D425A5A5554';

(async (): Promise<void> => {
	const calls = await rtcmModule.getEstablishedCalls();
	const call = calls.find(call => call.callId === callID);
	if (call !== undefined)
		rtcmModule.record(call, { announcement: true, value: false });
})();
