---
title: Order Statuses
---

# What are the order statuses?

| status             | meaning                                                                                                    |
|--------------------|------------------------------------------------------------------------------------------------------------|
| pending            | The order is ready to be processed and packaged.                                                           |
| fulfilled          | The order has been packed and the label printed and has been (or is about to be) picked up by the courier. |
| in_transit         | The order has been picked up by the courier and on its way to the final destination.                       |
| delivered          | The order was delivered to the customer.                                                                   |
| exception          | The courier had a problem with the delivery of the order.                                                  |
| cancelled          | The order has been cancelled.                                                                              |
| refunded           | The order has been refunded.                                                                               |
| externally_handled | The order is not handled by the **isendu** platform                                                        |
| error              | Generic error                                                                                              |

## Order Status on isendu when is changed by the store

| status sent        | resulting status on **isendu** |
|--------------------|--------------------------------|
| pending            |  pending                       |
| fullyfilled        | externally_handled             |
| in_transit         | externally_handled             |
| delivered          | externally_handled             |
| exception          | externally_handled             |
| refunded           | externally_handled             |
| cancelled          | externally_handled             |
| externally_handled | externally_handled             |
| error              | error                          |