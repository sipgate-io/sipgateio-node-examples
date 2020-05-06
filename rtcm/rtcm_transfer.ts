import { createRTCMModule, sipgateIO } from 'sipgateio';

const username = process.env.SIPGATE_USERNAME || '';
const password = process.env.SIPGATE_PASSWORD || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });
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
