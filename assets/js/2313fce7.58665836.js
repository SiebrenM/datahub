"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[62803],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(a),p=n,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},17579:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const c={title:"Overview",sidebar_label:"Overview",slug:"/architecture/architecture",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/architecture.md"},s="DataHub Architecture Overview",l={unversionedId:"docs/architecture/architecture",id:"version-0.14.1/docs/architecture/architecture",title:"Overview",description:"DataHub is a 3rd generation data catalog that enables Data Discovery, Collaboration, Governance, and end-to-end Observability",source:"@site/versioned_docs/version-0.14.1/docs/architecture/architecture.md",sourceDirName:"docs/architecture",slug:"/architecture/architecture",permalink:"/docs/0.14.1/architecture/architecture",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/architecture.md",tags:[],version:"0.14.1",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/architecture/architecture",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/architecture/architecture.md"},sidebar:"overviewSidebar",previous:{title:"Debugging by Jattach",permalink:"/docs/0.14.1/how/jattach-guide"},next:{title:"Components",permalink:"/docs/0.14.1/components"}},u={},d=[{value:"Architecture Highlights",id:"architecture-highlights",level:2},{value:"Schema-first approach to Metadata Modeling",id:"schema-first-approach-to-metadata-modeling",level:3},{value:"Stream-based Real-time Metadata Management Platform",id:"stream-based-real-time-metadata-management-platform",level:3},{value:"Federated Metadata Serving",id:"federated-metadata-serving",level:3}],h={toc:d},p="wrapper";function m(e){var{components:t}=e,a=i(e,["components"]);return(0,r.yg)(p,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"datahub-architecture-overview"},"DataHub Architecture Overview"),(0,r.yg)("p",null,"DataHub is a ",(0,r.yg)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/datahub-popular-metadata-architectures-explained"},"3rd generation")," data catalog that enables Data Discovery, Collaboration, Governance, and end-to-end Observability\nthat is built for the Modern Data Stack. DataHub employs a model-first philosophy, with a focus on unlocking interoperability between\ndisparate tools & systems."),(0,r.yg)("p",null,"The figures below describe the high-level architecture of DataHub."),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/datahub-architecture.png"})),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/saas/DataHub-Architecture.png"})),(0,r.yg)("p",null,"For a more detailed look at the components that make up the Architecture, check out ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.14.1/components"},"Components"),"."),(0,r.yg)("h2",{id:"architecture-highlights"},"Architecture Highlights"),(0,r.yg)("p",null,"There are three main highlights of DataHub's architecture."),(0,r.yg)("h3",{id:"schema-first-approach-to-metadata-modeling"},"Schema-first approach to Metadata Modeling"),(0,r.yg)("p",null,"DataHub's metadata model is described using a ",(0,r.yg)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"serialization agnostic language"),". Both ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service"},"REST")," as well as ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/datahub-web-react/src/graphql"},"GraphQL API-s")," are supported. In addition, DataHub supports an ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-events"},"AVRO-based API")," over Kafka to communicate metadata changes and subscribe to them. Our ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.14.1/roadmap"},"roadmap")," includes a milestone to support no-code metadata model edits very soon, which will allow for even more ease of use, while retaining all the benefits of a typed API. Read about metadata modeling at ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.14.1/metadata-modeling/metadata-model"},"metadata modeling"),"."),(0,r.yg)("h3",{id:"stream-based-real-time-metadata-management-platform"},"Stream-based Real-time Metadata Management Platform"),(0,r.yg)("p",null,"DataHub's metadata infrastructure is stream-oriented, which allows for changes in metadata to be communicated and reflected within the platform within seconds. You can also subscribe to changes happening in DataHub's metadata, allowing you to build real-time metadata-driven systems. For example, you can build an access-control system that can observe a previously world-readable dataset adding a new schema field which contains PII, and locks down that dataset for access control reviews."),(0,r.yg)("h3",{id:"federated-metadata-serving"},"Federated Metadata Serving"),(0,r.yg)("p",null,"DataHub comes with a single ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service"},"metadata service (gms)")," as part of the open source repository. However, it also supports federated metadata services which can be owned and operated by different teams \u2013\u2013 in fact, that is how LinkedIn runs DataHub internally. The federated services communicate with the central search index and graph using Kafka, to support global search and discovery while still enabling decoupled ownership of metadata. This kind of architecture is very amenable for companies who are implementing ",(0,r.yg)("a",{parentName:"p",href:"https://martinfowler.com/articles/data-monolith-to-mesh.html"},"data mesh"),"."))}m.isMDXComponent=!0}}]);