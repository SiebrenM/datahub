"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[41776],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(96540);var a=n(15680);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Restoring Search and Graph Indices from Local Database",slug:"/how/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/restore-indices.md"},l="Restoring Search and Graph Indices from Local Database",c={unversionedId:"docs/how/restore-indices",id:"docs/how/restore-indices",title:"Restoring Search and Graph Indices from Local Database",description:"If search or graph services go down or you have made changes to them that require reindexing, you can restore them from",source:"@site/genDocs/docs/how/restore-indices.md",sourceDirName:"docs/how",slug:"/how/restore-indices",permalink:"/docs/how/restore-indices",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/restore-indices.md",tags:[],version:"current",frontMatter:{title:"Restoring Search and Graph Indices from Local Database",slug:"/how/restore-indices",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/restore-indices.md"},sidebar:"overviewSidebar",previous:{title:"Taking backup of DataHub",permalink:"/docs/how/backup-datahub"},next:{title:"Configuring Database Retention",permalink:"/docs/advanced/db-retention"}},d={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Time-Based Filtering",id:"time-based-filtering",level:3},{value:"Pagination and Performance Options",id:"pagination-and-performance-options",level:3},{value:"Content Filtering",id:"content-filtering",level:3},{value:"Nuclear option",id:"nuclear-option",level:3},{value:"Helm",id:"helm",level:3},{value:"Quickstart",id:"quickstart",level:2},{value:"Docker-compose",id:"docker-compose",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Through API",id:"through-api",level:2}],p={toc:u},h="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,a.yg)(h,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"restoring-search-and-graph-indices-from-local-database"},"Restoring Search and Graph Indices from Local Database"),(0,a.yg)("p",null,"If search or graph services go down or you have made changes to them that require reindexing, you can restore them from\nthe aspects stored in the local database."),(0,a.yg)("p",null,"When a new version of the aspect gets ingested, GMS initiates an MAE event for the aspect which is consumed to update\nthe search and graph indices. As such, we can fetch the latest version of each aspect in the local database and produce\nMAE events corresponding to the aspects to restore the search and graph indices."),(0,a.yg)("p",null,"By default, restoring the indices from the local database will not remove any existing documents in\nthe search and graph indices that no longer exist in the local database, potentially leading to inconsistencies\nbetween the search and graph indices and the local database."),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"The upgrade jobs take arguments as command line args to the job itself rather than environment variables for job specific configuration. The RestoreIndices job is specified through the ",(0,a.yg)("inlineCode",{parentName:"p"},"-u RestoreIndices")," upgrade ID parameter and then additional parameters are specified like ",(0,a.yg)("inlineCode",{parentName:"p"},"-a batchSize=1000"),".\nThe following configurations are available:"),(0,a.yg)("h3",{id:"time-based-filtering"},"Time-Based Filtering"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"lePitEpochMs"),": Restore records created before this timestamp (in milliseconds)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"gePitEpochMs"),": Restore records created after this timestamp (in milliseconds)")),(0,a.yg)("h3",{id:"pagination-and-performance-options"},"Pagination and Performance Options"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"urnBasedPagination"),": Enable key-based pagination instead of offset-based pagination. Recommended for large datasets as it's typically more efficient."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"startingOffset"),": When using default pagination, start from this offset"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"lastUrn"),": Resume from a specific URN when using URN-based pagination"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"lastAspect"),": Used with lastUrn to resume from a specific aspect, preventing reprocessing"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"numThreads"),": Number of concurrent threads for processing restoration, only used with default offset based paging"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"batchSize"),": Configures the size of each batch as the job pages through rows"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"batchDelayMs"),": Adds a delay in between each batch to avoid overloading backend systems")),(0,a.yg)("h3",{id:"content-filtering"},"Content Filtering"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"aspectNames"),': Comma-separated list of aspects to restore (e.g., "ownership,status")'),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"urnLike"),': SQL LIKE pattern to filter URNs (e.g., "urn:li:dataset%")')),(0,a.yg)("h3",{id:"nuclear-option"},"Nuclear option"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"clean"),": This option wipes out the current indices by running deletes of all the documents to guarantee a consistent state with SQL. This is generally not recommended unless there is significant data corruption on the instance.")),(0,a.yg)("h3",{id:"helm"},"Helm"),(0,a.yg)("p",null,"These are available in the helm charts as configurations for Kubernetes deployments under the ",(0,a.yg)("inlineCode",{parentName:"p"},"datahubUpgrade.restoreIndices.args")," path which will set them up as args to the pod command."),(0,a.yg)("h2",{id:"quickstart"},"Quickstart"),(0,a.yg)("p",null,"If you're using the quickstart images, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub")," cli to restore the indices."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"datahub docker quickstart --restore-indices\n")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Using the ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub")," CLI to restore the indices when using the quickstart images will also clear the search and graph indices before restoring.")),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"/docs/quickstart#restore-datahub"},"this section")," for more information. "),(0,a.yg)("h2",{id:"docker-compose"},"Docker-compose"),(0,a.yg)("p",null,"If you are on a custom docker-compose deployment, run the following command (you need to checkout ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub"},"the source repository"),") from the root of the repo to send MAE for each aspect in the local database."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./docker/datahub-upgrade/datahub-upgrade.sh -u RestoreIndices\n")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"By default this command will not clear the search and graph indices before restoring, thous potentially leading to inconsistencies between the local database and the indices, in case aspects were previously deleted in the local database but were not removed from the correponding index.")),(0,a.yg)("p",null,"If you need to clear the search and graph indices before restoring, add ",(0,a.yg)("inlineCode",{parentName:"p"},"-a clean")," to the end of the command. Please take note that the search and graph services might not be fully functional during reindexing when the indices are cleared."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./docker/datahub-upgrade/datahub-upgrade.sh -u RestoreIndices -a clean\n")),(0,a.yg)("p",null,"Refer to this ",(0,a.yg)("a",{parentName:"p",href:"/docs/docker/datahub-upgrade#environment-variables"},"doc")," on how to set environment variables\nfor your environment."),(0,a.yg)("h2",{id:"kubernetes"},"Kubernetes"),(0,a.yg)("p",null,"Run ",(0,a.yg)("inlineCode",{parentName:"p"},"kubectl get cronjobs")," to see if the restoration job template has been deployed. If you see results like below, you\nare good to go."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"NAME                                          SCHEDULE    SUSPEND   ACTIVE   LAST SCHEDULE   AGE\ndatahub-datahub-cleanup-job-template          * * * * *   True      0        <none>          2d3h\ndatahub-datahub-restore-indices-job-template  * * * * *   True      0        <none>          2d3h\n")),(0,a.yg)("p",null,"If not, deploy latest helm charts to use this functionality."),(0,a.yg)("p",null,"Once restore indices job template has been deployed, run the following command to start a job that restores indices."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl create job --from=cronjob/datahub-datahub-restore-indices-job-template datahub-restore-indices-adhoc\n")),(0,a.yg)("p",null,"Once the job completes, your indices will have been restored."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"By default the restore indices job template will not clear the search and graph indices before restoring, thous potentially leading to inconsistencies between the local database and the indices, in case aspects were previously deleted in the local database but were not removed from the correponding index.")),(0,a.yg)("p",null,"If you need to clear the search and graph indices before restoring, modify the ",(0,a.yg)("inlineCode",{parentName:"p"},"values.yaml")," for your deployment and overwrite the default arguments of the restore indices job template to include the ",(0,a.yg)("inlineCode",{parentName:"p"},"-a clean")," argument. Please take note that the search and graph services might not be fully functional during reindexing when the indices are cleared."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'datahubUpgrade:\n  restoreIndices:\n    image:\n      args:\n        - "-u"\n        - "RestoreIndices"\n        - "-a"\n        - "batchSize=1000" # default value of datahubUpgrade.batchSize\n        - "-a"\n        - "batchDelayMs=100" # default value of datahubUpgrade.batchDelayMs\n        - "-a"\n        - "clean"\n')),(0,a.yg)("h2",{id:"through-api"},"Through API"),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/restli/restore-indices"},"Restore Indices API"),"."))}g.isMDXComponent=!0}}]);