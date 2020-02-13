import { createSettingsModule, sipgateIO } from 'sipgateio';

(async (): Promise<void> => {
	const username = process.env.SIPGATE_USERNAME || '';
	const password = process.env.SIPGATE_PASSWORD || '';

	/**
	 * For details on how to instantiate the client, see 'examples/client/client.ts'
	 */
	const client = sipgateIO({ username, password });
	const webhookSettings = createSettingsModule(client);

	await webhookSettings.setIncomingUrl('https://example.com/my/incoming/url2');
	console.log('Incoming URL updated.');
})();
