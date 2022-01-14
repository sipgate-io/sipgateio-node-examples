Examples for the [sipgate-io node library](https://github.com/sipgate-io/sipgateio-node):

- [Setup](#setup)
- [Call](#call)
  - [Performing a Call](#performing-a-call)
- [Contacts](#contacts)
  - [Delete Contact by id](#delete-contact-by-id)
  - [Delete all Shared Contacts](#delete-all-shared-contacts)
  - [Delete all Private Contacts](#delete-all-private-contacts)
  - [Import Contacts from Vcard as Shared](#import-contacts-from-vcard-as-shared)
  - [Import Contacts from Vcard as Private](#import-contacts-from-vcard-as-private)
  - [Import Contacts from Object](#import-contacts-from-object)
  - [Import Contacts from CSV](#import-contacts-from-csv)
  - [Export Contacts as CSV](#export-contacts-as-csv)
  - [Export Contacts as multiple VCards](#export-contacts-as-multiple-vcards)
- [Fax](#fax)
  - [Sending Fax](#sending-fax)
- [Fluent APIs](#fluent-apis)
  - [Fluent Webhook Server](#fluent-webhook-server)
- [Webhooks](#webhooks)
  - [Log Incoming Calls](#log-incoming-calls)
  - [Reject Calls](#reject-calls)
  - [Send Calls to Voicemail](#send-calls-to-voicemail)
  - [Play Audio](#play-audio)
  - [Play Audio and HangUp](#play-audio-and-hangup)
  - [Gather DTMF Tones](#gather-dtmf-tones)
- [Webhooks Settings](#webhooks-settings)
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
- [History](#history)
  - [Fetch all](#fetch-all)
  - [Fetch by id](#fetch-by-id)
  - [Delete by id](#delete-by-id)
  - [Delete by list of ids](#delete-by-list-of-ids)
- [Real Time Call Manipulation](#real-time-call-manipulation)
  - [List all currently established calls](#list-all-currently-established-calls)
  - [Play announcements](#play-announcements)
  - [Hold running calls](#hold-running-calls)
  - [Mute yourself in a present call](#mute-yourself-in-a-present-call)
  - [Start a recording](#start-a-recording)
  - [Sending dtmf sequences](#sending-dtmf-sequences)
  - [Transferring a call](#transferring-a-call)
  - [Hangup a call](#hangup-a-call)

# Setup

To run all examples fluently please copy the `.env.example` and name it to `.env`. After that configure the placeholders to match your preferred account settings.

# Call

## Performing a Call

Perform a call to a phone-number:  
`npm run call`

# Contacts

## Delete Contact by id

Delete a contact from your sipgate contacts by id.  
`npm run contacts:delete:by:id`

## Delete all Shared Contacts

Delete all contacts with `SHARED` scope.  
`npm run contacts:delete:all:shared`

## Delete all Private Contacts

Delete all contacts with `PRIVATE` scope.  
`npm run contacts:delete:all:private`

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

# Fluent APIs

## Fluent Webhook Server

Start a webhook receiver which listens to all available call events.
`npm run fluent:webhook`.

# Webhooks

## Log Incoming Calls

Log all event types to the console:
`npm run webhook:log:incoming:calls`

## Reject Calls

Reject calls (e.g. outside of business hours):
`npm run webhook:reject`

## Send Calls to Voicemail

Send calls to voicemail:
`npm run webhook:voicemail`

## Play Audio

Play an announcement to a caller:
`npm run webhook:play:audio`

## Play Audio and HangUp

Play an announcement to a caller and hangup afterwards:
`npm run webhook:play:audio:and:hangup`

## Gather DTMF Tones

Get DTMF input from a caller and perform different actions (e.g. redirect or hang up calls) in response:
`npm run webhook:gather`

# Webhooks Settings

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

# History

## Fetch all

You can fetch multiple history entries:  
`npm run history:fetch:all`

## Fetch by id

You can fetch a specific history entry:  
`npm run history:fetch:by:id`

## Delete by id

You can delete a specific history entry:  
`npm run history:delete:by:id`

## Delete by list of ids

You can delete multiple history entries:  
`npm run history:delete:by:list:of:ids`

# Real Time Call Manipulation

## List all currently established calls

You can list all currently established calls by running `npm run rtcm:list:all:established:calls`

## Play announcements

You can play an announcement by running `npm run rtcm:announce`

## Hold running calls

A call can be hold by executing `npm run rtcm:hold`

## Mute yourself in a present call

You can mute yourself in a present call by running the following npm script: `npm run rtcm:mute`

## Start a recording

A recording can be started with the following script: `npm run rtcm:record`

## Sending dtmf sequences

You can send any dtmf sequence by running `npm run rtcm:send:dtmf`

## Transferring a call

Transferring a call can be achieved by running this npm command: `npm run rtcm:transfer`

## Hangup a call

A call can be hungup by running: `npm run rtcm:hangup`
