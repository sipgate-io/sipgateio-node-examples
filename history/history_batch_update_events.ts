import * as dotenv from 'dotenv';
import { createHistoryModule, sipgateIO } from 'sipgateio';
dotenv.config();

const personalAccessTokenId = process.env.SIPGATE_TOKEN_ID || '';
const personalAccessToken = process.env.SIPGATE_TOKEN || '';

const client = sipgateIO({
	tokenId: personalAccessTokenId,
	token: personalAccessToken,
});

(async (): Promise<void> => {
	const history = createHistoryModule(client);

	const entries = await history.fetchAll({}, { offset: 0, limit: 50 });

	history.batchUpdateEvents(entries, entry => {
		if (entry.type === 'SMS') {
			return {
				starred: true,
				note: 'This is an important sms',
			};
		}

		return {
			archived: true,
		};
	});
})();
