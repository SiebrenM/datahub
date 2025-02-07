"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2222],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>b});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,b=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11964:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>d});a(96540);var n=a(15680);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const l={title:"metadata-jobs:mae-consumer-job",sidebar_label:"metadata-jobs:mae-consumer-job",slug:"/metadata-jobs/mae-consumer-job",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job/README.md"},s="Metadata Audit Event Consumer Job",c={unversionedId:"metadata-jobs/mae-consumer-job/README",id:"version-0.15.0/metadata-jobs/mae-consumer-job/README",title:"metadata-jobs:mae-consumer-job",description:"The Metadata Audit Event Consumer is a Spring job which can be deployed by itself, or as part of the Metadata Service.",source:"@site/versioned_docs/version-0.15.0/metadata-jobs/mae-consumer-job/README.md",sourceDirName:"metadata-jobs/mae-consumer-job",slug:"/metadata-jobs/mae-consumer-job",permalink:"/docs/0.15.0/metadata-jobs/mae-consumer-job",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job/README.md",tags:[],version:"0.15.0",frontMatter:{title:"metadata-jobs:mae-consumer-job",sidebar_label:"metadata-jobs:mae-consumer-job",slug:"/metadata-jobs/mae-consumer-job",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job/README.md"},sidebar:"overviewSidebar",previous:{title:"metadata-service",permalink:"/docs/0.15.0/metadata-service"},next:{title:"metadata-jobs:mce-consumer-job",permalink:"/docs/0.15.0/metadata-jobs/mce-consumer-job"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build",id:"build",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Start via Docker image",id:"start-via-docker-image",level:2},{value:"Start via command line",id:"start-via-command-line",level:2},{value:"Endpoints",id:"endpoints",level:2}],m={toc:d},p="wrapper";function b(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(p,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"metadata-audit-event-consumer-job"},"Metadata Audit Event Consumer Job"),(0,n.yg)("p",null,"The Metadata Audit Event Consumer is a Spring job which can be deployed by itself, or as part of the Metadata Service."),(0,n.yg)("p",null,"Its main function is to listen to change log events emitted as a result of changes made to the Metadata Graph, converting changes in the metadata model into updates\nagainst secondary search & graph indexes (among other things)"),(0,n.yg)("p",null,"Today the job consumes from two important Kafka topics:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"MetadataChangeLog_Versioned_v1")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("inlineCode",{parentName:"li"},"MetadataChangeLog_Timeseries_v1"))),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Where does the name ",(0,n.yg)("strong",{parentName:"p"},"Metadata Audit Event")," come from? Well, history. Previously, this job consumed\na single ",(0,n.yg)("inlineCode",{parentName:"p"},"MetadataAuditEvent")," topic which has been deprecated and removed from the critical path. Hence, the name!")),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("p",null,"Follow the ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.15.0/developers"},"main developer guide")," to set up your development environment and install the required dependencies."),(0,n.yg)("h2",{id:"build"},"Build"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Metadata Audit Event Consumer Job")," is already built as part of top level build:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"./gradlew build\n")),(0,n.yg)("p",null,"However, if you only want to build ",(0,n.yg)("inlineCode",{parentName:"p"},"MAE Consumer Job")," specifically:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"./gradlew :metadata-jobs:mae-consumer-job:build\n")),(0,n.yg)("h2",{id:"dependencies"},"Dependencies"),(0,n.yg)("p",null,"Before starting ",(0,n.yg)("inlineCode",{parentName:"p"},"Metadata Audit Event Consumer Job"),", you need to make sure that all backend services, including Kafka and ElasticSearch, are up and running. If GMS is healthy, then Kafka and ElasticSearch should be healthy as well."),(0,n.yg)("h2",{id:"start-via-docker-image"},"Start via Docker image"),(0,n.yg)("p",null,"The quickest way to try out ",(0,n.yg)("inlineCode",{parentName:"p"},"Metadata Audit Event Consumer Job")," is running the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/docker/datahub-mae-consumer"},"Docker image"),"."),(0,n.yg)("h2",{id:"start-via-command-line"},"Start via command line"),(0,n.yg)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",(0,n.yg)("a",{parentName:"p",href:"#build"},"build"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"MCL_CONSUMER_ENABLED=true ./gradlew :metadata-jobs:mae-consumer-job:bootRun\n")),(0,n.yg)("h2",{id:"endpoints"},"Endpoints"),(0,n.yg)("p",null,"Spring boot actuator has been enabled for MAE Application.\n",(0,n.yg)("inlineCode",{parentName:"p"},"healthcheck"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"metrics")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"info")," web endpoints are enabled by default."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"healthcheck")," - http://localhost:9091/actuator/health"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"metrics")," - http://localhost:9091/actuator/metrics"),(0,n.yg)("p",null,"To retrieve a specific metric - http://localhost:9091/actuator/metrics/process.uptime"))}b.isMDXComponent=!0}}]);