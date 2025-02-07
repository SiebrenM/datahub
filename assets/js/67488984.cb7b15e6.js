"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[21439],{15680:(e,o,t)=>{t.d(o,{xA:()=>c,yg:()=>m});var r=t(96540);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),u=function(e){var o=r.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},c=function(e){var o=u(e.components);return r.createElement(s.Provider,{value:o},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(t),d=n,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||i;return t?r.createElement(m,a(a({ref:o},c),{},{components:t})):r.createElement(m,a({ref:o},c))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[g]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87553:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>g});t(96540);var r=t(15680);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})),e}function a(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const l={title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/looker/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/overview.md"},s="Looker & LookML Ingestion Guide: Overview",u={unversionedId:"docs/quick-ingestion-guides/looker/overview",id:"version-0.14.1/docs/quick-ingestion-guides/looker/overview",title:"Overview",description:"What You Will Get Out of This Guide",source:"@site/versioned_docs/version-0.14.1/docs/quick-ingestion-guides/looker/overview.md",sourceDirName:"docs/quick-ingestion-guides/looker",slug:"/quick-ingestion-guides/looker/overview",permalink:"/docs/0.14.1/quick-ingestion-guides/looker/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/overview.md",tags:[],version:"0.14.1",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/looker/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/looker/overview.md"},sidebar:"overviewSidebar",previous:{title:"Configuration",permalink:"/docs/0.14.1/quick-ingestion-guides/powerbi/configuration"},next:{title:"Setup",permalink:"/docs/0.14.1/quick-ingestion-guides/looker/setup"}},c={},g=[{value:"What You Will Get Out of This Guide",id:"what-you-will-get-out-of-this-guide",level:2},{value:"Looker",id:"looker",level:3},{value:"LookML",id:"lookml",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Reference",id:"reference",level:3}],p={toc:g},d="wrapper";function m(e){var{components:o}=e,t=a(e,["components"]);return(0,r.yg)(d,i(function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(o){n(e,o,t[o])}))}return e}({},p,t),{components:o,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"looker--lookml-ingestion-guide-overview"},"Looker & LookML Ingestion Guide: Overview"),(0,r.yg)("h2",{id:"what-you-will-get-out-of-this-guide"},"What You Will Get Out of This Guide"),(0,r.yg)("p",null,"This guide will help you set up the Looker & LookML connectors to begin ingesting metadata into DataHub.\nUpon completing this guide, you will have a recurring ingestion pipeline to extract metadata from Looker & LookML and load it into DataHub. "),(0,r.yg)("h3",{id:"looker"},"Looker"),(0,r.yg)("p",null,"Looker connector will ingest Looker asset types:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/dashboards"},"Dashboards")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/creating-visualizations"},"Charts")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-explore-explore"},"Explores")," "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://developers.looker.com/api/explorer/4.0/methods/Metadata/connection_schemas"},"Schemas")," "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/creating-user-defined-dashboards"},"Owners of Dashboards"))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"To get complete Looker metadata integration (including Looker views and lineage to the underlying warehouse tables), you must also use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/looker#module-lookml"},"lookml")," connector.")),(0,r.yg)("h3",{id:"lookml"},"LookML"),(0,r.yg)("p",null,"LookMl connector will include the following LookML asset types:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-view-view"},"LookML views from model files in a project")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-field-dimension"},"Metadata for dimensions")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-measure-types"},"Metadata for measures")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://cloud.google.com/looker/docs/reference/param-field-dimension-group"},"Dimension Groups as tag"))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"To get complete Looker metadata integration (including Looker views and lineage to the underlying warehouse tables), you must also use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/looker#module-looker"},"looker")," connector.")),(0,r.yg)("h2",{id:"next-steps"},"Next Steps"),(0,r.yg)("p",null,"Please continue to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.14.1/quick-ingestion-guides/looker/setup"},"setup guide"),", where we'll describe the prerequisites."),(0,r.yg)("h3",{id:"reference"},"Reference"),(0,r.yg)("p",null,"If you want to ingest metadata from Looker using the DataHub CLI, check out the following resources:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn about CLI Ingestion in the ",(0,r.yg)("a",{parentName:"li",href:"/docs/0.14.1/metadata-ingestion"},"Introduction to Metadata Ingestion")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/Looker"},"Looker Ingestion Source"))))}m.isMDXComponent=!0}}]);