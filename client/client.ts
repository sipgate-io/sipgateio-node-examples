import * as dotenv from 'dotenv';
import { sipgateIO } from 'sipgateio';
dotenv.config();

/**
 * Option 1: Creating the Client with Personal Access Token Auth credentials (recommended)
 *
 * Reference: https://www.sipgate.io/rest-api/authentication#personalAccessToken
 */
const personalAccessTokenAuthClient = sipgateIO({
	username: 'YOUR_TOKEN_ID',
	password: 'YOUR_TOKEN',
});

console.log(personalAccessTokenAuthClient);

/**
 * Option 2: Creating the Client with an OAuth Access Token
 *
 * reference: https://www.sipgate.io/rest-api/authentication#oauth2
 */
const oauthClient = sipgateIO({
	token: 'YOUR_OAUTH_ACCESS_TOKEN',
});

console.log(oauthClient);
