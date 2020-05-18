import * as dotenv from 'dotenv';
import { createHistoryModule, sipgateIO } from 'sipgateio';
dotenv.config();

const client = sipgateIO({
	username: process.env.SIPGATE_USERNAME || '',
	password: process.env.SIPGATE_PASSWORD || '',
});

(async (): Promise<void> => {
	const history = createHistoryModule(client);

	const entries = await history.fetchAll({}, { offset: 0, limit: 50 });

	history.batchUpdateEvents(entries, (entry) => {
		if (entry.type === "SMS") {
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
