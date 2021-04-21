import { createSettingsModule, sipgateIO } from 'sipgateio';
import * as dotenv from 'dotenv';
dotenv.config();

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

webhookSettings
	.getWebhookSettings()
	.then(console.log)
	.catch(console.error);
