---
title: Carrier
---

# What is a carrier?

For "isendu" the carrier is the combination of the specific courier ("UPS", "DHL", etc..) and the customer's own configuration.

Each carrier indicates the custom name, the name of the courier the active service codes and their names, and the availability of the network of delivery points.

| field        | type     | description                                    |
|--------------|----------|------------------------------------------------|
| id           | number   |                                                |  
| name         | string   | custom name                                    |
| carrierName  | string   | courier name                                   |
| internalCode | string   | isendu courier code                            |
| services     | object[] | services  codes and name available             |
| hasPudo      | boolean  | availability of the network of delivery points |