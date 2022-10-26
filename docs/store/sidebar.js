module.exports = [
  { type: "doc", id: "store/open-api-api-store-documentation" },
  {
    type: "category",
    label: "carriers",
    items: [
      {
        type: "doc",
        id: "store/get-shipping-carriers",
        label: "Get shipping carriers",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "orders",
    items: [
      {
        type: "doc",
        id: "store/get-order-by-isu-id",
        label: "Get order by Isendu Id",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "store/get-order-by-id",
        label: "Get order by Id",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "store/add-order",
        label: "Add or update an order",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "store/set-shipping-carrier-for-order",
        label: "Set shipping carrier for order",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "store/add-shipping-parcels-to-order",
        label: "Add shipping parcels to order",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "store/get-shipment-tracking",
        label: "Get shipment tracking",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "shipments",
    items: [
      {
        type: "doc",
        id: "store/get-shipping-rate",
        label: "Get shipping rate",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "store/ship-order",
        label: "Ship order",
        className: "api-method post",
      },
      {
        type: "doc",
        id: "store/delete-shipment",
        label: "Delete a shipment",
        className: "api-method delete",
      },
      {
        type: "doc",
        id: "store/get-shipment",
        label: "Get a data shipment",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "store/get-shipment-by-store-order-id",
        label: "Get a shipment data using",
        className: "api-method get",
      },
      {
        type: "doc",
        id: "store/delete-shipment-by-store-order-id",
        label: "Delete a shipment",
        className: "api-method delete",
      },
    ],
  },
  {
    type: "category",
    label: "shipment",
    items: [
      {
        type: "doc",
        id: "store/get-shipment-tracking",
        label: "Get shipment tracking",
        className: "api-method get",
      },
    ],
  },
  {
    type: "category",
    label: "parcels",
    items: [
      {
        type: "doc",
        id: "store/get-shipping-parcels",
        label: "Get shipping parcels",
        className: "api-method get",
      },
    ],
  },
];
