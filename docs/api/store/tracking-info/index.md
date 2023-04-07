# What is the tracking information?

After a shipment is created, the tracking information is the information about the shipment delivery steps.

The basic information about the tracking is composed of the following fields:

| field          | type     | description                                                                      |
| -------------- | -------- | -------------------------------------------------------------------------------- |
| trackingNumber | string   | tracking number of the shipment                                                  |
| trackingUrl    | string   | Url for retrieving information about shipment tracking                           |
| status         | object   | Current [status](/docs/api/store/tracking-info/tracking-statuses.md) of shipment |
| delivered      | boolean  | shipment delivered                                                               |
| pod            | boolean  | Proof of delivery available                                                      |
| steps          | object[] | Steps of shipment delivery                                                       |

Each step is composed of the following fields:

| field       | type   | description                                                              |
| ----------- | ------ | ------------------------------------------------------------------------ |
| date        | string | date of the step                                                         |
| description | string | description of the step                                                  |
| location    | string | location of the step                                                     |
| status      | object | [Status](/docs/api/store/tracking-info/tracking-statuses.md) of the step |
| podUrl      | string | Url for retrieving proof of delivery                                     |
| error       | object | Error information (ex delivery exception issue)                          |
