"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4332],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(y,s(s({ref:t},p),{},{components:a})):n.createElement(y,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},63219:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={},l="Paystack",c={unversionedId:"integrations/sources/paystack",id:"integrations/sources/paystack",title:"Paystack",description:"Overview",source:"@site/../docs/integrations/sources/paystack.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/paystack",permalink:"/airbyte/integrations/sources/paystack",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/paystack.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Paypal Transaction",permalink:"/airbyte/integrations/sources/paypal-transaction"},next:{title:"PersistIq",permalink:"/airbyte/integrations/sources/persistiq"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Note on Incremental Syncs",id:"note-on-incremental-syncs",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"paystack"},"Paystack"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Paystack source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"This Source is capable of syncing the following core streams:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://paystack.com/docs/api/#customer-list"},"Customers")," ","(","Incremental",")","\n",(0,i.kt)("a",{parentName:"p",href:"https://paystack.com/docs/api/#dispute-list"},"Disputes")," ","(","Incremental",")","\n",(0,i.kt)("a",{parentName:"p",href:"https://paystack.com/docs/api/#invoice-list"},"Invoices")," ","(","Incremental",")","\n",(0,i.kt)("a",{parentName:"p",href:"https://paystack.com/docs/api/#refund-list"},"Refunds")," ","(","Incremental",")","\n",(0,i.kt)("a",{parentName:"p",href:"https://paystack.com/docs/api/#settlement"},"Settlements")," ","(","Incremental",")","\n",(0,i.kt)("a",{parentName:"p",href:"https://paystack.com/docs/api/#subscription-list"},"Subscriptions")," ","(","Incremental",")","\n",(0,i.kt)("a",{parentName:"p",href:"https://paystack.com/docs/api/#transaction-list"},"Transactions")," ","(","Incremental",")","\n",(0,i.kt)("a",{parentName:"p",href:"https://paystack.com/docs/api/#transfer-list"},"Transfers")," ","(","Incremental",")"),(0,i.kt)("h3",{id:"note-on-incremental-syncs"},"Note on Incremental Syncs"),(0,i.kt)("p",null,"The Paystack API does not allow querying objects which were updated since the last sync. Therefore, this connector uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"createdAt")," field to query for new data in your Paystack account."),(0,i.kt)("p",null,"If your data is updated after creation, you can use the Loockback Window option when configuring the connector to always reload data from the past N days. This will allow you to pick up updates to the data."),(0,i.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://paystack.com/docs/api"},"Paystack API")," is compatible with the ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/reference/index.html"},"JSONSchema")," types that Airbyte uses internally ","(",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"date-time"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),")",", so no type conversions happen as part of this source."),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Dedupe Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"The Paystack connector should not run into Paystack API limitations under normal usage. Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Paystack API Secret Key")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.paystack.com/#/settings/developer"},"Paystack dashboard settings page")," with developer level access or more to see the secret key for your account. Secret keys for the live Paystack environment will be prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"sk_live_"),"."),(0,i.kt)("p",null,"Unfortunately Paystack does not yet support restricted permission levels on secret keys. This means that you will have to use the same secret key here that you use for charging customers. Use at your own risk. In the future Paystack might support restricted access levels and in that case Airbyte only requires a read-only access level key."),(0,i.kt)("p",null,"If you would like to test Airbyte using test data on Paystack, ",(0,i.kt)("inlineCode",{parentName:"p"},"sk_test_")," API keys are also supported."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8582"},"8582")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-20"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7214"},"7214")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add Paystack source connector")))))}m.isMDXComponent=!0}}]);