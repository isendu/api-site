"use strict";(self.webpackChunkstore_api=self.webpackChunkstore_api||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"mainSideBar":[{"type":"category","label":"API","items":[{"type":"category","label":"isendu API","items":[{"type":"category","label":"Store API","items":[{"type":"category","label":"Order","items":[{"type":"link","label":"Order Items","href":"/docs/api/store/order-items","docId":"api/store/order-items"},{"type":"link","label":"Order Statuses","href":"/docs/api/store/order-status","docId":"api/store/order-status"},{"type":"category","label":"Shipping Information","items":[{"type":"link","label":"Addresses","href":"/docs/api/store/shipping-info/addresses","docId":"api/store/shipping-info/addresses"},{"type":"link","label":"Shipping Details","href":"/docs/api/store/shipping-info/details","docId":"api/store/shipping-info/details"},{"type":"link","label":"Shipping Services","href":"/docs/api/store/shipping-info/services","docId":"api/store/shipping-info/services"}],"collapsed":true,"collapsible":true,"href":"/docs/api/store/shipping-info/"},{"type":"category","label":"Tracking Information","items":[{"type":"link","label":"Tracking Statuses","href":"/docs/api/store/tracking-info/tracking-statuses","docId":"api/store/tracking-info/tracking-statuses"}],"collapsed":true,"collapsible":true,"href":"/docs/api/store/tracking-info/"}],"collapsed":true,"collapsible":true,"href":"/docs/api/store/order"},{"type":"link","label":"Carrier","href":"/docs/api/store/carrier","docId":"api/store/carrier"},{"type":"link","label":"Parcel","href":"/docs/api/store/parcel","docId":"api/store/parcel"}],"collapsed":true,"collapsible":true,"href":"/docs/api/store/"}],"collapsed":true,"collapsible":true,"href":"/docs/api/intro"},{"type":"category","label":"Reference","items":[{"type":"category","label":"Store API","items":[{"type":"link","label":"Authentication schemas","href":"/docs/api/reference/store/openapi-schema-for-isendu-api","docId":"api/reference/store/openapi-schema-for-isendu-api"},{"type":"link","label":"Get shipping carriers","href":"/docs/api/reference/store/get-shipping-carriers","className":"api-method get","docId":"api/reference/store/get-shipping-carriers"},{"type":"link","label":"Get order by Isendu Id","href":"/docs/api/reference/store/get-order-by-isu-id","className":"api-method get","docId":"api/reference/store/get-order-by-isu-id"},{"type":"link","label":"Get order by Id","href":"/docs/api/reference/store/get-order-by-id","className":"api-method get","docId":"api/reference/store/get-order-by-id"},{"type":"link","label":"Add or update an order","href":"/docs/api/reference/store/add-order","className":"api-method post","docId":"api/reference/store/add-order"},{"type":"link","label":"Set shipping carrier for order","href":"/docs/api/reference/store/set-shipping-carrier-for-order","className":"api-method post","docId":"api/reference/store/set-shipping-carrier-for-order"},{"type":"link","label":"Add shipping parcels to order","href":"/docs/api/reference/store/add-shipping-parcels-to-order","className":"api-method post","docId":"api/reference/store/add-shipping-parcels-to-order"},{"type":"link","label":"Get shipment tracking","href":"/docs/api/reference/store/get-shipment-tracking","className":"api-method get","docId":"api/reference/store/get-shipment-tracking"},{"type":"link","label":"Get shipping parcels","href":"/docs/api/reference/store/get-shipping-parcels","className":"api-method get","docId":"api/reference/store/get-shipping-parcels"}],"collapsed":true,"collapsible":true,"href":"/docs/api/reference/store"}],"collapsed":true,"collapsible":true}],"collapsed":true,"collapsible":true,"href":"/docs/api/"}]},"docs":{"api/index":{"id":"api/index","title":"isendu API","description":"APIs are the main system for personalized access to the isendu platform.","sidebar":"mainSideBar"},"api/intro":{"id":"api/intro","title":"What you can do with APIs?","description":"Our APIs can be used to manage certain aspects of your interaction with the isendu platform.","sidebar":"mainSideBar"},"api/reference/store/add-order":{"id":"api/reference/store/add-order","title":"Add or update an order","description":"Add a new order or update an existing one using storeOrderId as key","sidebar":"mainSideBar"},"api/reference/store/add-shipping-parcels-to-order":{"id":"api/reference/store/add-shipping-parcels-to-order","title":"Add shipping parcels to order","description":"Add shipping parcels to order, using id of a pre loaded parcel or using raw data of a parcel","sidebar":"mainSideBar"},"api/reference/store/get-order-by-id":{"id":"api/reference/store/get-order-by-id","title":"Get order by Id","description":"Get order data using the order Id","sidebar":"mainSideBar"},"api/reference/store/get-order-by-isu-id":{"id":"api/reference/store/get-order-by-isu-id","title":"Get order by Isendu Id","description":"Get order data using the Isendu order Id","sidebar":"mainSideBar"},"api/reference/store/get-shipment-tracking":{"id":"api/reference/store/get-shipment-tracking","title":"Get shipment tracking","description":"Get shipment tracking data using the order Id","sidebar":"mainSideBar"},"api/reference/store/get-shipping-carriers":{"id":"api/reference/store/get-shipping-carriers","title":"Get shipping carriers","description":"Get available shipping carriers for the current company","sidebar":"mainSideBar"},"api/reference/store/get-shipping-parcels":{"id":"api/reference/store/get-shipping-parcels","title":"Get shipping parcels","description":"Get available shipping parcels for the current company","sidebar":"mainSideBar"},"api/reference/store/openapi-schema-for-isendu-api":{"id":"api/reference/store/openapi-schema-for-isendu-api","title":"OpenApi Schema for isendu API","description":"isendu API available for all customers","sidebar":"mainSideBar"},"api/reference/store/set-shipping-carrier-for-order":{"id":"api/reference/store/set-shipping-carrier-for-order","title":"Set shipping carrier for order","description":"Set shipping carrier and relative service for order","sidebar":"mainSideBar"},"api/store/carrier":{"id":"api/store/carrier","title":"Carrier","description":"For \\"isendu\\" the carrier is the combination of the specific courier (\\"UPS\\", \\"DHL\\", etc..) and the customer\'s own configuration.","sidebar":"mainSideBar"},"api/store/index":{"id":"api/store/index","title":"Getting start","description":"First get your credentials on isendu dashboard","sidebar":"mainSideBar"},"api/store/order":{"id":"api/store/order","title":"What is an order?","description":"The basic entity in isendu is order.","sidebar":"mainSideBar"},"api/store/order-items":{"id":"api/store/order-items","title":"Order Items","description":"Each item must be described with some basic information that will be used, both for automatic weight calculation by isendu and to convey information regarding the order to the customer.","sidebar":"mainSideBar"},"api/store/order-status":{"id":"api/store/order-status","title":"Order Statuses","description":"| status             | meaning                                                                                                    |","sidebar":"mainSideBar"},"api/store/parcel":{"id":"api/store/parcel","title":"Parcel","description":"Parcel describe the conformation of package in a shipment with characteristics such as weight and size.","sidebar":"mainSideBar"},"api/store/shipping-info/addresses":{"id":"api/store/shipping-info/addresses","title":"Addresses","description":"An address is information about any party involved in the shipping process.","sidebar":"mainSideBar"},"api/store/shipping-info/details":{"id":"api/store/shipping-info/details","title":"Shipping Details","description":"Shipping details are the complementary information about the shipment that is sent to the courier.","sidebar":"mainSideBar"},"api/store/shipping-info/index":{"id":"api/store/shipping-info/index","title":"What are Shipping Information?","description":"Shipping information is the information about the shipment that is sent to the courier.","sidebar":"mainSideBar"},"api/store/shipping-info/services":{"id":"api/store/shipping-info/services","title":"Shipping Services","description":"Shipping services are the additional services that can be added to a shipment through isendu dashboard.","sidebar":"mainSideBar"},"api/store/tracking-info/index":{"id":"api/store/tracking-info/index","title":"What is the tracking information?","description":"After a shipment is created, the tracking information is the information about the shipment delivery steps.","sidebar":"mainSideBar"},"api/store/tracking-info/tracking-statuses":{"id":"api/store/tracking-info/tracking-statuses","title":"Tracking Statuses","description":"Tracking statuses are the different steps of a shipment delivery.","sidebar":"mainSideBar"}}}')}}]);