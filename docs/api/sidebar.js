
const referenceSideBar = require("./reference/sidebar");

const storeAPISideBar = require("./store/sidebar");
module.exports = {
    type: "category",
    label: "API",
    link: {
        type: "doc",
        id: "api/index",
    },
    items: [
        {
            type: "category",
            label: "isendu API",
            link: {
                type: "doc",
                id: "api/intro",
            },
            items: [
                storeAPISideBar
            ]
        },
        referenceSideBar
    ],
}
