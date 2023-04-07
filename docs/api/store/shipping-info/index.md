# What are Shipping Information?

Shipping information is the information about the shipment that is sent to the courier.
This includes both the number and size of packages, the notes and value of the shipment, and insurance and COD information.

It is composed of the following fields:

| field              | type     | description                                                                                                      |
| ------------------ | -------- | ---------------------------------------------------------------------------------------------------------------- |
| parcels            | object[] | [packages](/docs/api/store/parcel) information                                                                   |
| shipmentDetails    | object[] | contains [shipment details](/docs/api/store/shipping-info/details) as notes and value of the shipment            |
| additionalServices | object[] | contains [shipment additional services](/docs/api/store/shipping-info/services) as insurance and COD information |
| selectedCarrierId  | number   | Id of selected [carrier](/docs/api/store/carrier) for order shipment                                             |
| serviceCode        | string   | Code of carriers service selected for order shipment                                                             |
| addressTo          | object   | [Address](/docs/api/store/shipping-info/addresses.md) of the recipient                                           |
| addressFrom        | object   | [Address](/docs/api/store/shipping-info/addresses.md) of the sender                                              |
| addressDelivery    | object   | [Address](/docs/api/store/shipping-info/addresses.md) of the delivery point                                      |
| pudoId             | number   | Id of the delivery point selected for order shipment                                                             |
