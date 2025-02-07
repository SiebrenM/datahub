"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[97707],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,y=d["".concat(u,".").concat(b)]||d[b]||p[b]||o;return r?a.createElement(y,s(s({ref:t},c),{},{components:r})):a.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},77926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>d});r(96540);var a=r(15680);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={title:"Assertions",slug:"/managed-datahub/observe/assertions",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/observe/assertions.md"},u="Assertions",l={unversionedId:"docs/managed-datahub/observe/assertions",id:"version-0.14.1/docs/managed-datahub/observe/assertions",title:"Assertions",description:"Currently we support Snowflake, Redshift, BigQuery, and Databricks for out-of-the-box contract monitoring as part of Acryl Observe.",source:"@site/versioned_docs/version-0.14.1/docs/managed-datahub/observe/assertions.md",sourceDirName:"docs/managed-datahub/observe",slug:"/managed-datahub/observe/assertions",permalink:"/docs/0.14.1/managed-datahub/observe/assertions",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/observe/assertions.md",tags:[],version:"0.14.1",frontMatter:{title:"Assertions",slug:"/managed-datahub/observe/assertions",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/observe/assertions.md"},sidebar:"overviewSidebar",previous:{title:"Features",permalink:"/docs/0.14.1/category/features"},next:{title:"Column Assertions",permalink:"/docs/0.14.1/managed-datahub/observe/column-assertions"}},c={},d=[{value:"How to Create and Run Assertions",id:"how-to-create-and-run-assertions",level:2},{value:"Acryl Observe",id:"acryl-observe",level:3},{value:"3rd Party Runners",id:"3rd-party-runners",level:3},{value:"Alerts",id:"alerts",level:2},{value:"Cost",id:"cost",level:2}],p={toc:d},b="wrapper";function y(e){var{components:t}=e,r=s(e,["components"]);return(0,a.yg)(b,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},p,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"assertions"},"Assertions"),(0,a.yg)("admonition",{title:"Contract Monitoring Support",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Currently we support Snowflake, Redshift, BigQuery, and Databricks for out-of-the-box contract monitoring as part of Acryl Observe.")),(0,a.yg)("p",null,"An assertion is ",(0,a.yg)("strong",{parentName:"p"},"a data quality test that finds data that violates a specified rule."),"\nAssertions serve as the building blocks of ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/managed-datahub/observe/data-contract"},"Data Contracts")," \u2013 this is how we verify the contract is met."),(0,a.yg)("h2",{id:"how-to-create-and-run-assertions"},"How to Create and Run Assertions"),(0,a.yg)("p",null,"Data quality tests (a.k.a. assertions) can be created and run by Acryl or ingested from a 3rd party tool."),(0,a.yg)("h3",{id:"acryl-observe"},"Acryl Observe"),(0,a.yg)("p",null,"For Acryl-provided assertion runners, we can deploy an agent in your environment to hit your sources and DataHub. Acryl Observe offers out-of-the-box evaluation of the following kinds of assertions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/managed-datahub/observe/freshness-assertions"},"Freshness")," (SLAs)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/managed-datahub/observe/volume-assertions"},"Volume")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/managed-datahub/observe/custom-sql-assertions"},"Custom SQL")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/managed-datahub/observe/column-assertions"},"Column"))),(0,a.yg)("p",null,"These can be defined through the DataHub API or the UI. "),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/observe/assertions/assertion-ui.png"})),(0,a.yg)("h3",{id:"3rd-party-runners"},"3rd Party Runners"),(0,a.yg)("p",null,"You can integrate 3rd party tools as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/generated/ingestion/sources/dbt#integrating-with-dbt-test"},"DBT Test")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/metadata-ingestion/integration_docs/great-expectations"},"Great Expectations"))),(0,a.yg)("p",null,"If you opt for a 3rd party tool, it will be your responsibility to ensure the assertions are run based on the Data Contract spec stored in DataHub. With 3rd party runners, you can get the Assertion Change events by subscribing to our Kafka topic using the ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/actions"},"DataHub Actions Framework"),"."),(0,a.yg)("h2",{id:"alerts"},"Alerts"),(0,a.yg)("p",null,"Beyond the ability to see the results of the assertion checks (and history of the results) both on the physical asset\u2019s page in the DataHub UI and as the result of DataHub API calls, you can also get notified via ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/managed-datahub/slack/saas-slack-setup"},"Slack messages")," (DMs or to a team channel) based on your ",(0,a.yg)("a",{parentName:"p",href:"https://youtu.be/VNNZpkjHG_I?t=79"},"subscription")," to an assertion change event. In the future, we\u2019ll also provide the ability to subscribe directly to contracts."),(0,a.yg)("p",null,"With Acryl Observe, you can get the Assertion Change event by getting API events via ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/managed-datahub/operator-guide/setting-up-events-api-on-aws-eventbridge"},"AWS EventBridge")," (the availability and simplicity of setup of each solution dependent on your current Acryl setup \u2013 chat with your Acryl representative to learn more)."),(0,a.yg)("h2",{id:"cost"},"Cost"),(0,a.yg)("p",null,"We provide a plethora of ways to run your assertions, aiming to allow you to use the cheapest possible means to do so and/or the most accurate means to do so, depending on your use case. For example, for Freshness (SLA) assertions, it is relatively cheap to use either their Audit Log or Information Schema as a means to run freshness checks, and we support both of those as well as Last Modified Column, High Watermark Column, and DataHub Operation (",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/managed-datahub/observe/freshness-assertions#3-change-source"},"see the docs for more details"),")."))}y.isMDXComponent=!0}}]);