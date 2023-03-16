---
sidebar_position: 1
---

# isendu API

APIs are the main system for personalized access to the **isendu** platform.

All of our APIs require Oauth2 authorization of the client credentials type.

All REST requests to the APIs **must** have a Bearer type authorization header with the corresponding JWT obtained from the Oauth2 procedure.

:::caution Important

All APIs have a soft rate limit at 300 calls per minute.

:::

- Available APIs [description](intro.md)
- APIs [Reference](reference)