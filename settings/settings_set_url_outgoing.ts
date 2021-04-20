import * as dotenv from 'dotenv';
import { createSettingsModule, sipgateIO } from 'sipgateio';
dotenv.config();

(async (): Promise<void> => {
	const tokenId = process.env.SIPGATE_TOKEN_ID || '';
	const token = process.env.SIPGATE_TOKEN || '';

	/**
	 * For details on how to instantiate the client, see 'examples/client/client.ts'
	 */
	const client = sipgateIO({ username: tokenId, password: token });
	const webhookSettings = createSettingsModule(client);

	await webhookSettings.setOutgoingUrl('https://example.com/my/outgoing/url2');
	console.log('Outgoing URL updated.');
})();
