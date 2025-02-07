"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[93021],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||g[d]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(96540);var a=n(15680);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"CLI Ingestion",slug:"/metadata-ingestion/cli-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/cli-ingestion.md"},l="CLI Ingestion",c={unversionedId:"metadata-ingestion/cli-ingestion",id:"metadata-ingestion/cli-ingestion",title:"CLI Ingestion",description:"Batch ingestion involves extracting metadata from a source system in bulk. Typically, this happens on a predefined schedule using the Metadata Ingestion framework.",source:"@site/genDocs/metadata-ingestion/cli-ingestion.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/cli-ingestion",permalink:"/docs/metadata-ingestion/cli-ingestion",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/cli-ingestion.md",tags:[],version:"current",frontMatter:{title:"CLI Ingestion",slug:"/metadata-ingestion/cli-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/cli-ingestion.md"},sidebar:"overviewSidebar",previous:{title:"Dataset",permalink:"/docs/metadata-ingestion/docs/transformer/dataset_transformer"},next:{title:"Overview",permalink:"/docs/quick-ingestion-guides/bigquery/overview"}},u={},p=[{value:"Installing DataHub CLI",id:"installing-datahub-cli",level:2},{value:"Installing Connector Plugins",id:"installing-connector-plugins",level:2},{value:"Configuring a Recipe",id:"configuring-a-recipe",level:2},{value:"Using Recipes with Authentication",id:"using-recipes-with-authentication",level:3},{value:"Ingesting Metadata",id:"ingesting-metadata",level:2},{value:"Scheduling Ingestion",id:"scheduling-ingestion",level:2},{value:"Reference",id:"reference",level:2}],g={toc:p},d="wrapper";function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(d,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cli-ingestion"},"CLI Ingestion"),(0,a.yg)("p",null,"Batch ingestion involves extracting metadata from a source system in bulk. Typically, this happens on a predefined schedule using the ",(0,a.yg)("a",{parentName:"p",href:"/docs/components#ingestion-framework"},"Metadata Ingestion")," framework.\nThe metadata that is extracted includes point-in-time instances of dataset, chart, dashboard, pipeline, user, group, usage, and task metadata."),(0,a.yg)("h2",{id:"installing-datahub-cli"},"Installing DataHub CLI"),(0,a.yg)("admonition",{title:"Required Python Version",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Installing DataHub CLI requires Python 3.6+.")),(0,a.yg)("p",null,"Run the following commands in your terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"python3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub\npython3 -m datahub version\n")),(0,a.yg)("p",null,"Your command line should return the proper version of DataHub upon executing these commands successfully."),(0,a.yg)("p",null,"Check out the ",(0,a.yg)("a",{parentName:"p",href:"/docs/cli#installation"},"CLI Installation Guide")," for more installation options and troubleshooting tips."),(0,a.yg)("h2",{id:"installing-connector-plugins"},"Installing Connector Plugins"),(0,a.yg)("p",null,"Our CLI follows a plugin architecture. You must install connectors for different data sources individually.\nFor a list of all supported data sources, see ",(0,a.yg)("a",{parentName:"p",href:"/docs/cli#sources"},"the open source docs"),".\nOnce you've found the connectors you care about, simply install them using ",(0,a.yg)("inlineCode",{parentName:"p"},"pip install"),".\nFor example, to install the ",(0,a.yg)("inlineCode",{parentName:"p"},"mysql")," connector, you can run"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"pip install --upgrade 'acryl-datahub[mysql]'\n")),(0,a.yg)("p",null,"Check out the ",(0,a.yg)("a",{parentName:"p",href:"/docs/cli#alternate-installation-options"},"alternative installation options")," for more reference."),(0,a.yg)("h2",{id:"configuring-a-recipe"},"Configuring a Recipe"),(0,a.yg)("p",null,"Create a ",(0,a.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion/recipe_overview"},"Recipe")," yaml file that defines the source and sink for metadata, as shown below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'# example-recipe.yml\n\n# MySQL source configuration\nsource:\n  type: mysql\n  config:\n    username: root\n    password: password\n    host_port: localhost:3306\n\n# Recipe sink configuration.\nsink:\n  type: "datahub-rest"\n  config:\n    server: "https://<your domain name>.acryl.io/gms"\n    token: <Your API key>\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"source")," configuration block defines where to extract metadata from. This can be an OLTP database system, a data warehouse, or something as simple as a file. Each source has custom configuration depending on what is required to access metadata from the source. To see configurations required for each supported source, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion/source_overview"},"Sources")," documentation."),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"sink")," configuration block defines where to push metadata into. Each sink type requires specific configurations, the details of which are detailed in the ",(0,a.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion/sink_overview"},"Sinks")," documentation."),(0,a.yg)("p",null,'To configure your instance of DataHub as the destination for ingestion, set the "server" field of your recipe to point to your DataHub Cloud instance\'s domain suffixed by the path ',(0,a.yg)("inlineCode",{parentName:"p"},"/gms"),", as shown below.\nA complete example of a DataHub recipe file, which reads from MySQL and writes into a DataHub instance:"),(0,a.yg)("p",null,"For more information and examples on configuring recipes, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion/recipe_overview"},"Recipes"),"."),(0,a.yg)("h3",{id:"using-recipes-with-authentication"},"Using Recipes with Authentication"),(0,a.yg)("p",null,"In DataHub Cloud deployments, only the ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub-rest")," sink is supported, which simply means that metadata will be pushed to the REST endpoints exposed by your DataHub instance. The required configurations for this sink are"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"server"),": the location of the REST API exposed by your instance of DataHub"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"token"),": a unique API key used to authenticate requests to your instance's REST API")),(0,a.yg)("p",null,"The token can be retrieved by logging in as admin. You can go to Settings page and generate a Personal Access Token with your desired expiration date."),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/saas/home-(1).png"})),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/saas/settings.png"})),(0,a.yg)("admonition",{title:"Secure Your API Key",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"Please keep Your API key secure & avoid sharing it.\nIf you are on DataHub Cloud and your key is compromised for any reason, please reach out to the Acryl team at ",(0,a.yg)("a",{parentName:"p",href:"mailto:support@acryl.io"},"support@acryl.io"),".")),(0,a.yg)("h2",{id:"ingesting-metadata"},"Ingesting Metadata"),(0,a.yg)("p",null,"The final step requires invoking the DataHub CLI to ingest metadata based on your recipe configuration file.\nTo do so, simply run ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub ingest")," with a pointer to your YAML recipe file:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"datahub ingest -c <path/to/recipe.yml>\n")),(0,a.yg)("h2",{id:"scheduling-ingestion"},"Scheduling Ingestion"),(0,a.yg)("p",null,"Ingestion can either be run in an ad-hoc manner by a system administrator or scheduled for repeated executions. Most commonly, ingestion will be run on a daily cadence.\nTo schedule your ingestion job, we recommend using a job schedule like ",(0,a.yg)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Apache Airflow"),". In cases of simpler deployments, a CRON job scheduled on an always-up machine can also work.\nNote that each source system will require a separate recipe file. This allows you to schedule ingestion from different sources independently or together.\nLearn more about scheduling ingestion in the ",(0,a.yg)("a",{parentName:"p",href:"/docs/metadata-ingestion/schedule_docs/intro"},"Scheduling Ingestion Guide"),"."),(0,a.yg)("h2",{id:"reference"},"Reference"),(0,a.yg)("p",null,"Please refer the following pages for advanced guids on CLI ingestion."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/cli#ingest"},"Reference for ",(0,a.yg)("inlineCode",{parentName:"a"},"datahub ingest")," command")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/ui-ingestion"},"UI Ingestion Guide"))),(0,a.yg)("admonition",{title:"Compatibility",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"DataHub server uses a 3 digit versioning scheme, while the CLI uses a 4 digit scheme. For example, if you're using DataHub server version 0.10.0, you should use CLI version 0.10.0.x, where x is a patch version.\nWe do this because we do CLI releases at a much higher frequency than server releases, usually every few days vs twice a month."),(0,a.yg)("p",{parentName:"admonition"},"For ingestion sources, any breaking changes will be highlighted in the ",(0,a.yg)("a",{parentName:"p",href:"/docs/how/updating-datahub"},"release notes"),". When fields are deprecated or otherwise changed, we will try to maintain backwards compatibility for two server releases, which is about 4-6 weeks. The CLI will also print warnings whenever deprecated options are used.")))}m.isMDXComponent=!0}}]);