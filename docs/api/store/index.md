# Getting start

## First get your credentials on isendu dashboard

Search for the API integration section on your dashboard.

![api-integration-column.jpg](../../../assets/api-integration-column.jpg)

Then click on the "Generate API key" button.

![api-generate-key-1.jpg](../../../assets/api-generate-key-1.jpg)

Complete the form with the name of your integration, description, and the webook url.

![api-generate-key-2.jpg](../../../assets/api-generate-key-2.jpg)

:::caution Important
Webhook url is mandatory. For more information about webhook, see [Webhook](./webhook.md).
:::

Finally, copy the credentials and save them in a secure place.

![api-generate-key-3.jpg](../../../assets/api-generate-key-3.jpg)

:::caution Important
Secret ID key os unique and cannot be regenerated. If you lose this, you will have to create a new integration.
:::

## Second: get a token for your requests

Each request on API server **must** be authenticated through a token JWT released in Oauth2 mode client credential. 

```mermaid
sequenceDiagram
    Client->>API Server: Request on /api-store/oauth/token ?
    API Server-->>Client: JWT Token
    Client->>API Server: Request on /api-store/v1/* with Header "Autorization: Bearer {JWT Token}"
    API Server -) Client: Response as Json
```

:::caution Important
Token route is rate limited: best practice **requires** that the same token be used until its expiration time.
:::