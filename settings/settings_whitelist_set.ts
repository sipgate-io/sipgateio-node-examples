import * as dotenv from 'dotenv';
import { createSettingsModule, sipgateIO } from 'sipgateio';
dotenv.config();

(async (): Promise<void> => {
	const personalAccessTokenId = process.env.SIPGATE_TOKEN_ID || '';
	const personalAccessToken = process.env.SIPGATE_TOKEN || '';

	/**
	 * For details on how to instantiate the client, see 'examples/client/client.ts'
	 */
	const client = sipgateIO({
		tokenId: personalAccessTokenId,
		token: personalAccessToken,
	});
	const webhookSettings = createSettingsModule(client);

	await webhookSettings.setWhitelist(['p2', 'g10']);
	console.log('Whitelist updated.');
})();
