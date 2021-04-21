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
	'54576B150B0C0D3A5D534758505C73595553545C505C5C5A7A5F4151565341584543055F1B';

(async (): Promise<void> => {
	const calls = await rtcmModule.getEstablishedCalls();
	const call = calls.find(call => call.callId === callID);
	if (call !== undefined)
		rtcmModule.transfer(call, {
			attended: true,
			phoneNumber: '+49123456789',
		});
})();
