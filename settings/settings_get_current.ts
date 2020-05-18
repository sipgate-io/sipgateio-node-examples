import {createSettingsModule, sipgateIO} from "sipgateio";
import * as dotenv from "dotenv";
dotenv.config();

const username = process.env.SIPGATE_USERNAME || '';
const password = process.env.SIPGATE_PASSWORD || '';
/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });
const webhookSettings = createSettingsModule(client);

webhookSettings.getWebhookSettings().then(console.log).catch(console.error);
