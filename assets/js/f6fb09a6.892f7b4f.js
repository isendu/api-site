"use strict";(self.webpackChunkstore_api=self.webpackChunkstore_api||[]).push([[555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"Webhooks"},a="How to work Webhook with Store",s={unversionedId:"api/store/webhook",id:"api/store/webhook",title:"Webhooks",description:"Introduction",source:"@site/docs/api/store/webhook.md",sourceDirName:"api/store",slug:"/api/store/webhook",permalink:"/docs/api/store/webhook",draft:!1,tags:[],version:"current",frontMatter:{title:"Webhooks"},sidebar:"mainSideBar",previous:{title:"Parcel",permalink:"/docs/api/store/parcel"},next:{title:"Store API",permalink:"/docs/api/reference/store"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Confirming the webhook url",id:"confirming-the-webhook-url",level:2},{value:"Webhook payload",id:"webhook-payload",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-work-webhook-with-store"},"How to work Webhook with Store"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"When you generated your key pair for authentication and use of the store API you also entered a webhook url at which to receive notifications regarding changes in the status of your store orders from the isendu platform."),(0,o.kt)("p",null,"For that url to be used it must be confirmed by our platform that it is ready to receive the information from isendu."),(0,o.kt)("h2",{id:"confirming-the-webhook-url"},"Confirming the webhook url"),(0,o.kt)("p",null,"To verify the operativity of the webhook URL, a POST request with the following JSON payload will be sent after 5 minutes after registration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "keyId": "string" // the your API key id\n}\n')),(0,o.kt)("p",null,"The webhook url must respond with a 200 status code and the following JSON payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "response": "string" // the your API secret key\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If the webhook url does not respond with a 200 status code within 5 seconds, the webhook url will be considered invalid and will not be used."),(0,o.kt)("p",{parentName:"admonition"},"If the webhook url responds with a 200 status code but the payload is not the expected one, the webhook url will be considered invalid and will not be used."),(0,o.kt)("p",{parentName:"admonition"},"If you need to change the webhook url, or resend the verification, just edit and save the API integration on isendu.")),(0,o.kt)("h2",{id:"webhook-payload"},"Webhook payload"),(0,o.kt)("p",null,"Whenever there is a change on an API-generated order, or a shipment receives an update a request will be issued to the webhook URL, as this sample payload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "order": [\n        {\n            "uuid": "string", // the order uuid\n            ... // other order fields\n        }\n    ],\n    "tracking": [\n        {\n            "uuid": "string", // the tracking uuid\n            "status": "string", // the current tracking status\n            "trackingNumber": "string", // the tracking number\n            "trackingUrl": "string", // the tracking url\n            "delivered": "boolean", // the order delivered flag\n            "steps": [\n              {\n                "datetime": "string", // the step date by courier\n                "timestamp": "string", // the step timestamp in UTC\n                "timezone": "string", // the step timezone if available\n                "description": "string", // the step description\n                "location": "string", // the step location if available\n                "status": "string", // the step status\n                "error": {\n                  "code": "string", // the error code\n                  "message": "string" // the error message\n                }\n              }\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The webhook events are batched and are not guaranteed to be delivered in order.")))}c.isMDXComponent=!0}}]);