---
title: Webhooks
---
# How to work Webhook with Store

## Introduction
When you generated your key pair for authentication and use of the store API you also entered a webhook url at which to receive notifications regarding changes in the status of your store orders from the isendu platform.

For that url to be used it must be confirmed by our platform that it is ready to receive the information from isendu.

## Confirming the webhook url
To verify the operativity of the webhook URL, a POST request with the following JSON payload will be sent after 5 minutes after registration:
    
```json
{
  "keyId": "string" // the your API key id
}
```

The webhook url must respond with a 200 status code and a payload containing the secret key of the API integration.

:::note
If the webhook url does not respond with a 200 status code within 5 seconds, the webhook url will be considered invalid and will not be used.

If the webhook url responds with a 200 status code but the payload is not the expected one, the webhook url will be considered invalid and will not be used.

If you need to change the webhook url, or resend the verification, just edit and save the API integration on isendu.
:::

## Webhook payload
Whenever there is a change on an API-generated order, or a shipment receives an update a request will be issued to the webhook URL, as this sample payload:

```json
{
    "order": [
        {
            "uuid": "string", // the order uuid
            ... // other order fields
        }
    ],
    "tracking": [
        {
            "uuid": "string", // the tracking uuid
            "status": "string", // the current tracking status
            "trackingNumber": "string", // the tracking number
            "trackingUrl": "string", // the tracking url
            "delivered": "boolean", // the order delivered flag
            "steps": [
              {
                "datetime": "string", // the step date by courier
                "timestamp": "string", // the step timestamp in UTC
                "timezone": "string", // the step timezone if available
                "description": "string", // the step description
                "location": "string", // the step location if available
                "status": "string", // the step status
                "error": {
                  "code": "string", // the error code
                  "message": "string" // the error message
                }
              }
            ]
        }
    ]
}
```

:::caution Important
The webhook events are batched and are not guaranteed to be delivered in order.
:::