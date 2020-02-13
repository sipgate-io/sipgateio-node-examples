Examples for the [sipgate-io node library](https://github.com/sipgate-io/sipgateio-node):

- [Call](#call)
  - [Performing a Call](#performing-a-call)
- [Contacts](#contacts)
  - [Import Contacts from Vcard as Shared](#import-contacts-from-vcard-as-shared)
  - [Import Contacts from Vcard as Private](#import-contacts-from-vcard-as-private)
  - [Import Contacts from Object](#import-contacts-from-object)
  - [Import Contacts from CSV](#import-contacts-from-csv)
  - [Export Contacts as CSV](#export-contacts-as-csv)
  - [Export Contacts as multiple VCards](#export-contacts-as-multiple-vcards)
- [Fax](#fax)
  - [Sending Fax](#sending-fax)
- [Webhooks](#webhooks)
  - [Debug Log for Webhooks](#debug-log-for-webhooks)
  - [Set Incoming Webhook-Url](#set-incoming-webhook-url)
  - [Set Outgoing Webhook-Url](#set-outgoing-webhook-url)
  - [Clear the Whitelist for Webhooks](#clear-the-whitelist-for-webhooks)
  - [Disable the Whitelist for Webhooks](#disable-the-whitelist-for-webhooks)
  - [Setting the Whitelist for Webhooks](#setting-the-whitelist-for-webhooks)
- [SMS](#sms)
  - [Sending a SMS by extension](#sending-a-sms-by-extension)
  - [Sending a timed SMS by extension](#sending-a-timed-sms-by-extension)
  - [Sending a timed SMS by phone](#sending-a-timed-sms-by-phone)

# Call

## Performing a Call

Perform a call to a phone-number:  
`npm run call`

# Contacts

## Import Contacts from Vcard as Shared

Import a Contact which is saved in VCard Format to your sipgate Account as a `SHARED` contact.  
`npm run contacts:import:vcard:shared`

## Import Contacts from Vcard as Private

Import a Contact which is saved in VCard Format to your sipgate Account as a `PRIVATE` contact.  
`npm run contacts:import:vcard:private`

## Import Contacts from Object

Import a Contact by using a Object to your sipgate Account:  
`npm run contacts:import:object`

## Import Contacts from CSV

Import contacts to your sipgate Account by passing a CSV-String:  
`npm run contacts:import:csv`

## Export Contacts as CSV

Export Contacts from your sipgate Account to a CSV string with a specific `SCOPE`:  
`npm run contacts:export:csv`

## Export Contacts as multiple VCards

Export Contacts from your sipgate Account wiht a specific `SCOPE` to a List of VCard Strings:  
`npm run contacts:export:vcards`

# Fax

## Sending Fax

Send a Fax which is provided as pdf File:  
`npm run fax`

# Webhooks

## Debug Log for Webhooks

You can enable and disable Logging for Webhooks:  
`npm run settings:set:log`

## Set Incoming Webhook-Url

The incoming Webhook-Url will be triggered when a new call is received from outbound:
`npm run settings:set:url:incoming`

## Set Outgoing Webhook-Url

The outgoing Webhook-Url will be triggered when a new call is performed from inbound:
`npm run settings:set:url:outgoing`

## Clear the Whitelist for Webhooks

You can clear the List which enables or disables devices for Webhooks:  
`npm run settings:whitelist:clear`

## Disable the Whitelist for Webhooks

You can completely disable the whitelist for Webhooks:
`npm run settings:whitelist:disable`

## Setting the Whitelist for Webhooks

You can set a List of devices to be enabled for Webhooks:  
`npm run settings:whitelist:set`

# SMS

## Sending a SMS by extension

You can send a SMS by passing an Extension and a number as target:
`npm run sms:send:extension`

## Sending a timed SMS by extension

You can send a timed SMS by passing an Extension and a number as target:
`npm run sms:send:extension:timed`

## Sending a timed SMS by phone

You can send a SMS by passing a phonenumber and a number as target:
`npm run sms:send:phone`
