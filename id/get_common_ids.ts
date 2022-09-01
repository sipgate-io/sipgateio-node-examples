import * as dotenv from 'dotenv';
import { createDevicesModule, createFaxModule, createSMSModule, createVoicemailsModule, sipgateIO } from 'sipgateio';
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

// a utility function to print the IDs
function printIDs(array) {
    for (const obj of array) {
        console.log(obj.id);
    }
}

async function main() {
    // getAuthenticatedWebuserId() gets the ID of the administator
    const authenticatedWebuser = await client.getAuthenticatedWebuserId();
    const webUsers = await client.getWebUsers();

    const sms = createSMSModule(client);
    const smsExtensions = await sms.getSmsExtensions(authenticatedWebuser);

    const fax = createFaxModule(client);
    const faxLinesAuthenticatedWebUser = await fax.getFaxlines();
    const faxLines = await fax.getFaxlinesByWebUser(authenticatedWebuser);

    const voicemailModule = createVoicemailsModule(client);
    const voicemail = await voicemailModule.getVoicemails();

    const devicesModule = createDevicesModule(client);
    const devices = await devicesModule.getDevices(authenticatedWebuser);

    console.log("webUsers:");
    printIDs(webUsers);

    console.log("smsExtensions:");
    printIDs(smsExtensions);

    console.log("faxLines (by user ID):");
    printIDs(faxLines);
    console.log("faxLines (by authenticated web user):");
    printIDs(faxLinesAuthenticatedWebUser)

    console.log("voicemails:");
    printIDs(voicemail);

    console.log("devices:");
    printIDs(devices);
}

main();
