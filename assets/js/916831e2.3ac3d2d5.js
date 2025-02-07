"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[29450],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>p});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(r),m=a,p=y["".concat(s,".").concat(m)]||y[m]||d[m]||o;return r?n.createElement(p,i(i({ref:t},u),{},{components:r})):n.createElement(p,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>y});r(96540);var n=r(15680);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"DataHub Telemetry",sidebar_label:"Telemetry",slug:"/deploy/telemetry",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/telemetry.md"},s="DataHub Telemetry",c={unversionedId:"docs/deploy/telemetry",id:"version-0.14.1/docs/deploy/telemetry",title:"DataHub Telemetry",description:"Overview of DataHub Telemetry",source:"@site/versioned_docs/version-0.14.1/docs/deploy/telemetry.md",sourceDirName:"docs/deploy",slug:"/deploy/telemetry",permalink:"/docs/0.14.1/deploy/telemetry",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/telemetry.md",tags:[],version:"0.14.1",frontMatter:{title:"DataHub Telemetry",sidebar_label:"Telemetry",slug:"/deploy/telemetry",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/deploy/telemetry.md"},sidebar:"overviewSidebar",previous:{title:"Monitoring DataHub",permalink:"/docs/0.14.1/advanced/monitoring"},next:{title:"Configuring Kafka",permalink:"/docs/0.14.1/how/kafka-config"}},u={},y=[{value:"Overview of DataHub Telemetry",id:"overview-of-datahub-telemetry",level:2},{value:"DataHub Backend Telemetry",id:"datahub-backend-telemetry",level:2},{value:"Ingestion Framework Telemetry",id:"ingestion-framework-telemetry",level:2},{value:"Disabling Telemetry",id:"disabling-telemetry",level:2}],d={toc:y},m="wrapper";function p(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(m,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"datahub-telemetry"},"DataHub Telemetry"),(0,n.yg)("h2",{id:"overview-of-datahub-telemetry"},"Overview of DataHub Telemetry"),(0,n.yg)("p",null,"To effectively build and maintain the DataHub Project, we must understand how end-users work within DataHub. Beginning in version 0.8.35, DataHub collects anonymous usage statistics and errors to inform our roadmap priorities and to enable us to proactively address errors."),(0,n.yg)("p",null,"Both the DataHub backend and the ingestion framework collect telemetry."),(0,n.yg)("h2",{id:"datahub-backend-telemetry"},"DataHub Backend Telemetry"),(0,n.yg)("p",null,"Deployments are assigned a UUID which is sent along with event details, Java version, OS, and timestamp.\nThe source code is available ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/factories/src/main/java/com/linkedin/gms/factory/telemetry/TelemetryUtils.java"},"here"),"."),(0,n.yg)("h2",{id:"ingestion-framework-telemetry"},"Ingestion Framework Telemetry"),(0,n.yg)("p",null,"The ingestion framework collects telemetry including CLI invocations, source/sink types, error types, versions, and timestamps. If you run with ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub --debug"),", all telemetry calls will be logged."),(0,n.yg)("p",null,"On first invocation, the CLI will generate a randomized UUID, which will be sent alongside every telemetry event. This config is stored in ",(0,n.yg)("inlineCode",{parentName:"p"},"~/.datahub/telemetry-config.json"),"."),(0,n.yg)("p",null,"The source code is available ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/telemetry/telemetry.py"},"here"),"."),(0,n.yg)("h2",{id:"disabling-telemetry"},"Disabling Telemetry"),(0,n.yg)("p",null,"Telemetry is enabled by default. While we are careful to anonymize all telemetry data and encourage users to keep it enabled so that we can improve DataHub, we understand that some users may wish to disable it."),(0,n.yg)("p",null,"You can disable backend telemetry by setting the ",(0,n.yg)("inlineCode",{parentName:"p"},"DATAHUB_TELEMETRY_ENABLED")," environment variable to ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),". You'll need to set this on both the datahub-gms and datahub-actions containers."),(0,n.yg)("p",null,"If you're using the DataHub CLI, ingestion framework telemetry will be disabled when the ",(0,n.yg)("inlineCode",{parentName:"p"},"DATAHUB_TELEMETRY_ENABLED")," environment variable is set to ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),". To persist this change for your machine, run ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub telemetry disable"),"."))}p.isMDXComponent=!0}}]);