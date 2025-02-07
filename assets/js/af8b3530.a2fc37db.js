"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[79517],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},b="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,f=b["".concat(u,".").concat(d)]||b[d]||l[d]||o;return r?a.createElement(f,c(c({ref:t},p),{},{components:r})):a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[b]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>b});r(96540);var a=r(15680);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={title:"Taking backup of DataHub",slug:"/how/backup-datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/backup-datahub.md"},u="Taking backup of DataHub",s={unversionedId:"docs/how/backup-datahub",id:"version-0.14.1/docs/how/backup-datahub",title:"Taking backup of DataHub",description:"Production",source:"@site/versioned_docs/version-0.14.1/docs/how/backup-datahub.md",sourceDirName:"docs/how",slug:"/how/backup-datahub",permalink:"/docs/0.14.1/how/backup-datahub",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/backup-datahub.md",tags:[],version:"0.14.1",frontMatter:{title:"Taking backup of DataHub",slug:"/how/backup-datahub",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/backup-datahub.md"},sidebar:"overviewSidebar",previous:{title:"SCIM Integration: Okta and DataHub",permalink:"/docs/0.14.1/managed-datahub/configuring-identity-provisioning-with-okta"},next:{title:"Restoring Search and Graph Indices from Local Database",permalink:"/docs/0.14.1/how/restore-indices"}},p={},b=[{value:"Production",id:"production",level:2},{value:"Quickstart",id:"quickstart",level:2}],l={toc:b},d="wrapper";function f(e){var{components:t}=e,r=c(e,["components"]);return(0,a.yg)(d,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},l,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"taking-backup-of-datahub"},"Taking backup of DataHub"),(0,a.yg)("h2",{id:"production"},"Production"),(0,a.yg)("p",null,"The recommended backup strategy is to periodically dump the database ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub.metadata_aspect_v2")," so it can be recreated from the dump which most managed DB services will support (e.g. AWS RDS). Then run ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/how/restore-indices"},"restore indices")," to recreate the indices. "),(0,a.yg)("p",null,"In order to back up Time Series Aspects (which power usage and dataset profiles), you'd have to do a backup of Elasticsearch, which is possible via AWS OpenSearch. Otherwise, you'd have to reingest dataset profiles from your sources in the event of a disaster scenario!"),(0,a.yg)("h2",{id:"quickstart"},"Quickstart"),(0,a.yg)("p",null,"To take a backup of your quickstart, take a look at this ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/quickstart#backing-up-your-datahub-quickstart-experimental"},"document")," on how to accomplish it."))}f.isMDXComponent=!0}}]);