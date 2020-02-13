import { createContactsModule, sipgateIO } from 'sipgateio';

const password = process.env.SIPGATE_PASSWORD || '';
const username = process.env.SIPGATE_USERNAME || '';

/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });
const contacts = createContactsModule(client);

contacts
	.exportAsCsv('INTERNAL')
	.then(data => {
		console.log(data);
	})
	.catch(error => {
		console.error(error.message);
	});
