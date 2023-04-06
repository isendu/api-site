---
title: Order Items
---
# What are order items?

Each item must be described with some basic information that will be used, both for automatic weight calculation by isendu and to convey information regarding the order to the customer.

| field      | type   | description                     |
|------------|--------|---------------------------------|
| name       | string | item's name or item description |
| price      | number | item's price                    |
| imageUrl   | string | Public url of an item image     |
| quantity   | number | number of units for this item   |
| weight     | number |                                 |
| weightUnit | enum   | kg or lb                        |
| productId  | string | item identifier                 |
| sku        | string |                                 |


