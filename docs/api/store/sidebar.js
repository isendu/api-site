module.exports = {
    type: "category",
    label: "Store API",
    link: {
        type: "doc",
        id:"api/store/index"
    },
    items: [
        {
            type: "category",
            label: "Order",
            link: {
                type: "doc",
                id:"api/store/order"
            },
            items: [
                "api/store/order-items",
                "api/store/order-status",
                {
                    type: "category",
                    label: "Shipping Information",
                    link: {
                        type: "doc",
                        id:"api/store/shipping-info/index"
                    },
                    items: [
                        "api/store/shipping-info/addresses",
                        "api/store/shipping-info/details",
                        "api/store/shipping-info/services",
                    ],
                },
                {
                    type: "category",
                    label: "Tracking Information",
                    link: {
                        type: "doc",
                        id:"api/store/tracking-info/index"
                    },
                    items: [
                        "api/store/tracking-info/tracking-statuses"
                    ],
                },
            ]
        },
        "api/store/carrier",
        "api/store/parcel"
    ],
};