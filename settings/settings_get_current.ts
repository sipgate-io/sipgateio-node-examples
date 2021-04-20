import {createSettingsModule, sipgateIO} from "sipgateio";
import * as dotenv from "dotenv";
dotenv.config();

const tokenId = process.env.SIPGATE_TOKEN_ID || '';
const token = process.env.SIPGATE_TOKEN || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username: tokenId, password: token });
const webhookSettings = createSettingsModule(client);

webhookSettings.getWebhookSettings().then(console.log).catch(console.error);
