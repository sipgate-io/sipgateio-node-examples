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

	await webhookSettings.setIncomingUrl('https://example.com/my/incoming/url2');
	console.log('Incoming URL updated.');
})();
