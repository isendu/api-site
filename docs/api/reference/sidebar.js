module.exports = {
    type: "category",
    label: "Reference",
    items: [
        {
            type: "category",
            label: "Store API",
            link: {
                type: "generated-index",
                title: "Store API",
                description: "The Store API is the main API for the isendu platform. It is used to create, update and delete, orders, etc.",
                slug: "/api/reference/store",
            },
            items: require("./store/sidebar.js"),
        }
    ]
};