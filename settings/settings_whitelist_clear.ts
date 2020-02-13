import { createSettingsModule, sipgateIO } from 'sipgateio';

(async (): Promise<void> => {
	const username = process.env.SIPGATE_USERNAME || '';
	const password = process.env.SIPGATE_PASSWORD || '';

	/**
	 * For details on how to instantiate the client, see 'examples/client/client.ts'
	 */
	const client = sipgateIO({ username, password });
	const webhookSettings = createSettingsModule(client);

	await webhookSettings.clearWhitelist();
	console.log('Whitelist cleared.');
})();
