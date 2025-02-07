"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[10224],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,y=p["".concat(c,".").concat(m)]||p[m]||g[m]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>p});r(96540);var n=r(15680);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={title:"Sources",slug:"/metadata-ingestion/source_overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_overview.md"},c="Sources",u={unversionedId:"metadata-ingestion/source_overview",id:"version-0.15.0/metadata-ingestion/source_overview",title:"Sources",description:"Sources are the data systems that we are extracting metadata from.",source:"@site/versioned_docs/version-0.15.0/metadata-ingestion/source_overview.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/source_overview",permalink:"/docs/0.15.0/metadata-ingestion/source_overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_overview.md",tags:[],version:"0.15.0",frontMatter:{title:"Sources",slug:"/metadata-ingestion/source_overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_overview.md"},sidebar:"overviewSidebar",previous:{title:"Configuration",permalink:"/docs/0.15.0/quick-ingestion-guides/looker/configuration"},next:{title:"Airflow Integration",permalink:"/docs/0.15.0/lineage/airflow"}},l={},p=[{value:"Types of Source",id:"types-of-source",level:2},{value:"Metadata Ingestion Source Status",id:"metadata-ingestion-source-status",level:2}],g={toc:p},m="wrapper";function y(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(m,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"sources"},"Sources"),(0,n.yg)("p",null,"Sources are ",(0,n.yg)("strong",{parentName:"p"},"the data systems that we are extracting metadata from.")," "),(0,n.yg)("p",{align:"center"},(0,n.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/sources-sinks.png"})),(0,n.yg)("p",null,"In general, the source will be defined at the top of the ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.15.0/metadata-ingestion/recipe_overview"},"recipe")," like below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"#my_recipe.yml\nsource: \n  type: <source_name>\n  config: \n    option_1: <value>\n    ...\n")),(0,n.yg)("h2",{id:"types-of-source"},"Types of Source"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"Sources")," tab on the left in the sidebar shows you all the sources that are available for you to ingest metadata from. For example, we have sources for ",(0,n.yg)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/bigquery"},"BigQuery"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/looker"},"Looker"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/tableau"},"Tableau")," and many others."),(0,n.yg)("admonition",{title:"Find an Integration Source",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"See the full ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/integrations"},"list of integrations"))," and filter on their features.")),(0,n.yg)("h2",{id:"metadata-ingestion-source-status"},"Metadata Ingestion Source Status"),(0,n.yg)("p",null,"We apply a Support Status to each Metadata Source to help you understand the integration reliability at a glance."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"}),": Certified Sources are well-tested & widely-adopted by the DataHub Community. We expect the integration to be stable with few user-facing issues."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"}),": Incubating Sources are ready for DataHub Community adoption but have not been tested for a wide variety of edge-cases. We eagerly solicit feedback from the Community to streghten the connector; minor version changes may arise in future releases."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-testing-lightgrey",alt:"Testing"}),": Testing Sources are available for experiementation by DataHub Community members, but may change without notice."))}y.isMDXComponent=!0}}]);