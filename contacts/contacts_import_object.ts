import { createContactsModule, sipgateIO } from 'sipgateio';

const password = process.env.SIPGATE_PASSWORD || '';
const username = process.env.SIPGATE_USERNAME || '';

/**
 * For details on how to instantiate the client, see 'examples/client/client.ts'
 */
const client = sipgateIO({ username, password });
const contacts = createContactsModule(client);

contacts
	.import(
		{
			firstname: 'John',
			lastname: 'Doe',
			phone: { number: '+49123456789', type: ['HOME'] },
			address: {
				country: 'Germany',
				extendedAddress: 'Extended Address',
				locality: 'DE',
				poBox: 'Post Box',
				postalCode: '0000',
				region: 'region',
				streetAddress: 'street',
			},
			email: {
				email: 'John.Doe@example.org',
				type: ['HOME'],
			},
			organization: ['example', 'org'],
		},
		'PRIVATE'
	)
	.then(() => {
		console.log('Contact imported successfully');
	})
	.catch(error => {
		console.error(error.message);
	});
