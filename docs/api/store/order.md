
# What is an order?

The basic entity in isendu is order.

Each order must include the basic data necessary for the proper handling of the fulfillment of the order shipment.

The basic fields are:

| field                | type    | description                                              |
|----------------------|---------|----------------------------------------------------------|
| status               | enum    | represents the [**status**](order-status) of order       |
| storeOrderId         | string  | the public id of the order being viewed by the customer  |
| storeInternalOrderId | string  | optional internal order id, such as database sequence id |
| storeCreationDate    | string  | order creation date in ISO format                        |
| total                | number  | total order cost                                         |
| shippingTotal | number  | total order cost including shipping costs                |
| currency | string  | what else?                                               |
| shippingMethod | string  | name of shipping method                                  |
| paymentMethod | string  | name of payment method                                   |
| cod | boolean | is a ***cash on delivery*** order when is true           |

Other crucial information includes:
- Order [items](order-items)
- Shipping information

:::caution Important
After the order is created, it is not possible to modify it. Except for the status, items data, totals and COD.
:::