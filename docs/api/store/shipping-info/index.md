# What are Shipping Information?

Shipping information is the information about the shipment that is sent to the courier.
This includes both the number and size of packages, the notes and value of the shipment, and insurance and COD information. 

It is composed of the following fields:

| field              | type     | description                                                                          |
|--------------------|----------|--------------------------------------------------------------------------------------|
| parcels            | object[] | [packages](../parcel) information                                                    |
| shipmentDetails    | object[] | contains [shipment details](./details) as notes and value of the shipment            |
| additionalServices | object[] | contains [shipment additional services](./services) as insurance and COD information |
| selectedCarrierId  | number   | Id of selected [carrier](../carrier) for order shipment                              |
| serviceCode        | string   | Code of carriers service selected for order shipment                                 |
| addressTo          | object   | [Address](../address) of the recipient                                               |
| addressFrom        | object   | [Address](../address) of the sender                                                  |
| addressDelivery    | object   | [Address](../address) of the delivery point                                          |
| pudoId             | number   | Id of the delivery point selected for order shipment                                 |
