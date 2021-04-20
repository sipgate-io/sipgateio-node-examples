import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { createFaxModule, sipgateIO } from 'sipgateio';
dotenv.config();

(async (): Promise<void> => {
	const tokenId = process.env.SIPGATE_TOKEN_ID || '';
	const token = process.env.SIPGATE_TOKEN || '';

	/**
	 *
	 * For details on how to instantiate the client, see 'examples/client/client.ts'
	 */
	 const client = sipgateIO({ username: tokenId, password: token });

	const faxlineId = process.env.SIPGATE_FAX_EXTENSION || '';
	const to = process.env.SIPGATE_FAX_RECIPIENT || '';

	const filePath = './fax/testpage.pdf';
	const { name: filename } = path.parse(path.basename(filePath));
	const fileContent = fs.readFileSync(filePath);

	const fax = createFaxModule(client);

	const faxSendResponsePromise = fax.send({
		to,
		fileContent,
		filename,
		faxlineId,
	});

	faxSendResponsePromise
		.then(sendFaxResponse => {
			console.log(`Fax sent with id: ${sendFaxResponse.sessionId}`);
			const faxStatusPromise = fax.getFaxStatus(sendFaxResponse.sessionId);
			faxStatusPromise
				.then(faxStatus => {
					console.log(`Fax status: ${faxStatus}`);
				})
				.catch(error => {
					console.error('Fax status could not be retrieved: ', error);
				});
		})
		.catch(error => {
			console.error('Fax could not be sent with Error: ', error);
		});
})();
