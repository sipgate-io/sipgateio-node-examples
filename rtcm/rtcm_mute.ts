import { createRTCMModule, sipgateIO } from 'sipgateio';

const username = process.env.SIPGATE_USERNAME || '';
const password = process.env.SIPGATE_PASSWORD || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });
const rtcmModule = createRTCMModule(client);
const callID =
	'54516B150B0C0D3A5D54445D5758725F545753535B5E54597C5E515245514351474D425A5A5554';

(async (): Promise<void> => {
	const calls = await rtcmModule.getEstablishedCalls();
	const call = calls.find(call => call.callId === callID);
	if (call !== undefined) rtcmModule.mute(call, true);
})();
