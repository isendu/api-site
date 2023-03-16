---
title: Parcel
---

# What are parcels?

Parcel describe the conformation of package in a shipment with characteristics such as weight and size.

Through the isendu dashboard you can create wrapping templates that will be used to assign to any shipment.

It is composed of the following fields:

| field           | type     | description                                                                               |
|-----------------|----------|-------------------------------------------------------------------------------------------|
| name            | string   | short name of the packaging                                                               |
| description     | string   | description of the packaging                                                              |
| weight          | number   | weight of the package                                                                     |
| packagingWeight | number   | weight of the packaging                                                                   |
| length          | number   | length of the package                                                                     |
| width           | number   | width of the package                                                                      |
| height          | number   | height of the package                                                                     |
| weightUnit      | string   | weigth unit (g, kg, oz, lb)                                                               |
| lengthUnit      | string   | length unit (cm, in)                                                                      |
| isWeightDynamic | boolean  | Indicates whether the weight is dynamic, that is, calculated from the weight of the items |
