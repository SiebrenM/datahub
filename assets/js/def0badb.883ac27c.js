"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[75325],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=s(r),d=i,y=g["".concat(l,".").concat(d)]||g[d]||p[d]||o;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[g]="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>u,metadata:()=>s,toc:()=>g});r(96540);var n=r(15680);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const u={title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/bigquery/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/overview.md"},l="BigQuery Ingestion Guide: Overview",s={unversionedId:"docs/quick-ingestion-guides/bigquery/overview",id:"docs/quick-ingestion-guides/bigquery/overview",title:"Overview",description:"What You Will Get Out of This Guide",source:"@site/genDocs/docs/quick-ingestion-guides/bigquery/overview.md",sourceDirName:"docs/quick-ingestion-guides/bigquery",slug:"/quick-ingestion-guides/bigquery/overview",permalink:"/docs/quick-ingestion-guides/bigquery/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/bigquery/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/overview.md"},sidebar:"overviewSidebar",previous:{title:"CLI Ingestion",permalink:"/docs/metadata-ingestion/cli-ingestion"},next:{title:"Setup",permalink:"/docs/quick-ingestion-guides/bigquery/setup"}},c={},g=[{value:"What You Will Get Out of This Guide",id:"what-you-will-get-out-of-this-guide",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Advanced Guides and Reference",id:"advanced-guides-and-reference",level:2}],p={toc:g},d="wrapper";function y(e){var{components:t}=e,r=a(e,["components"]);return(0,n.yg)(d,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"bigquery-ingestion-guide-overview"},"BigQuery Ingestion Guide: Overview"),(0,n.yg)("h2",{id:"what-you-will-get-out-of-this-guide"},"What You Will Get Out of This Guide"),(0,n.yg)("p",null,"This guide will help you set up the BigQuery connector through the DataHub UI to begin ingesting metadata into DataHub."),(0,n.yg)("p",null,"Upon completing this guide, you will have a recurring ingestion pipeline that will extract metadata from BigQuery and load it into DataHub. This will include to following BigQuery asset types:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/resource-hierarchy#projects"},"Projects")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/datasets-intro"},"Datasets")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/tables-intro"},"Tables")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/views-intro"},"Views")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/materialized-views-intro"},"Materialized Views"))),(0,n.yg)("p",null,"This recurring ingestion pipeline will also extract:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Usage statistics")," to help you understand recent query activity"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Table-level lineage")," (where available) to automatically define interdependencies between datasets"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Table- and column-level profile statistics")," to help you understand the shape of the data")),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"You will NOT have extracted ",(0,n.yg)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/routines"},"Routines"),", ",(0,n.yg)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/search-intro"},"Search Indexes")," from BigQuery, as the connector does not support ingesting these assets")),(0,n.yg)("h2",{id:"next-steps"},"Next Steps"),(0,n.yg)("p",null,"If that all sounds like what you're looking for, navigate to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/bigquery/setup"},"next page"),", where we'll talk about prerequisites"),(0,n.yg)("h2",{id:"advanced-guides-and-reference"},"Advanced Guides and Reference"),(0,n.yg)("p",null,"If you're looking to do something more in-depth, want to use CLI instead of the DataHub UI, or just need to look at the reference documentation for this connector, use these links:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Learn about CLI Ingestion in the ",(0,n.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion"},"Introduction to Metadata Ingestion")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/bigquery/#module-bigquery"},"BigQuery Ingestion Reference Guide"))))}y.isMDXComponent=!0}}]);