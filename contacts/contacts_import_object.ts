import * as dotenv from 'dotenv';
import { createContactsModule, sipgateIO } from 'sipgateio';
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
const contacts = createContactsModule(client);

contacts
	.create(
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
			organization: [['example'], ['org']],
		},
		'PRIVATE'
	)
	.then(() => {
		console.log('Contact imported successfully');
	})
	.catch(error => {
		console.error(error.message);
	});
