"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[64830],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var r=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),u=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(i.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(g,n(n({ref:a},c),{},{components:t})):r.createElement(g,n({ref:a},c))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=t.length,n=new Array(l);n[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[p]="string"==typeof e?e:o,n[1]=s;for(var u=2;u<l;u++)n[u]=t[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87029:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});t(96540);var r=t(15680);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function n(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"DataHub Concepts",sidebar_label:"Concepts",slug:"/what-is-datahub/datahub-concepts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what-is-datahub/datahub-concepts.md"},i="DataHub Concepts",u={unversionedId:"docs/what-is-datahub/datahub-concepts",id:"version-0.15.0/docs/what-is-datahub/datahub-concepts",title:"DataHub Concepts",description:"Explore key concepts of DataHub to take full advantage of its capabilities in managing your data.",source:"@site/versioned_docs/version-0.15.0/docs/what-is-datahub/datahub-concepts.md",sourceDirName:"docs/what-is-datahub",slug:"/what-is-datahub/datahub-concepts",permalink:"/docs/0.15.0/what-is-datahub/datahub-concepts",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what-is-datahub/datahub-concepts.md",tags:[],version:"0.15.0",frontMatter:{title:"DataHub Concepts",sidebar_label:"Concepts",slug:"/what-is-datahub/datahub-concepts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what-is-datahub/datahub-concepts.md"},sidebar:"overviewSidebar",previous:{title:"Quickstart Guide",permalink:"/docs/0.15.0/quickstart"},next:{title:"Features",permalink:"/docs/0.15.0/category/features"}},c={},p=[{value:"General Concepts",id:"general-concepts",level:2},{value:"URN (Uniform Resource Name)",id:"urn-uniform-resource-name",level:3},{value:"Policy",id:"policy",level:3},{value:"Role",id:"role",level:3},{value:"Access Token (Personal Access Token)",id:"access-token-personal-access-token",level:3},{value:"View",id:"view",level:3},{value:"Deprecation",id:"deprecation",level:3},{value:"Ingestion Source",id:"ingestion-source",level:3},{value:"Container",id:"container",level:3},{value:"Data Platform",id:"data-platform",level:3},{value:"Dataset",id:"dataset",level:3},{value:"Chart",id:"chart",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Data Job",id:"data-job",level:3},{value:"Data Flow",id:"data-flow",level:3},{value:"Glossary Term",id:"glossary-term",level:3},{value:"Glossary Term Group",id:"glossary-term-group",level:3},{value:"Tag",id:"tag",level:3},{value:"Domain",id:"domain",level:3},{value:"Owner",id:"owner",level:3},{value:"Users (CorpUser)",id:"users-corpuser",level:3},{value:"Groups (CorpGroup)",id:"groups-corpgroup",level:3},{value:"Metadata Model",id:"metadata-model",level:2},{value:"Entity",id:"entity",level:3},{value:"Aspect",id:"aspect",level:3},{value:"Relationships",id:"relationships",level:3}],d={toc:p},m="wrapper";function g(e){var{components:a}=e,t=n(e,["components"]);return(0,r.yg)(m,l(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(a){o(e,a,t[a])}))}return e}({},d,t),{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"datahub-concepts"},"DataHub Concepts"),(0,r.yg)("p",null,"Explore key concepts of DataHub to take full advantage of its capabilities in managing your data."),(0,r.yg)("h2",{id:"general-concepts"},"General Concepts"),(0,r.yg)("h3",{id:"urn-uniform-resource-name"},"URN (Uniform Resource Name)"),(0,r.yg)("p",null,"URN (Uniform Resource Name) is the chosen scheme of URI to uniquely define any resource in DataHub. It has the following form."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"urn:<Namespace>:<Entity Type>:<ID>\n")),(0,r.yg)("p",null,"Examples include ",(0,r.yg)("inlineCode",{parentName:"p"},"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"urn:li:corpuser:jdoe"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/what/urn"},"What is URN?")))),(0,r.yg)("h3",{id:"policy"},"Policy"),(0,r.yg)("p",null,"Access policies in DataHub define who can do what to which resources."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/authorization/policies"},"Authorization: Policies Guide")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/datahubpolicy"},"Developer Guides: DataHubPolicy")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/authorization/access-policies-guide"},"Feature Guides: About DataHub Access Policies")))),(0,r.yg)("h3",{id:"role"},"Role"),(0,r.yg)("p",null,"DataHub provides the ability to use Roles to manage permissions."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/authorization/roles"},"Authorization: About DataHub Roles")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/datahubrole"},"Developer Guides: DataHubRole")))),(0,r.yg)("h3",{id:"access-token-personal-access-token"},"Access Token (Personal Access Token)"),(0,r.yg)("p",null,"Personal Access Tokens, or PATs for short, allow users to represent themselves in code and programmatically use DataHub's APIs in deployments where security is a concern.\nUsed along-side with ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.15.0/authentication/introducing-metadata-service-authentication"},"authentication-enabled metadata service"),", PATs add a layer of protection to DataHub where only authorized users are able to perform actions in an automated way."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/authentication/personal-access-tokens"},"Authentication: About DataHub Personal Access Tokens")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/datahubaccesstoken"},"Developer Guides: DataHubAccessToken")))),(0,r.yg)("h3",{id:"view"},"View"),(0,r.yg)("p",null,"Views allow you to save and share sets of filters for reuse when browsing DataHub. A view can either be public or personal."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/datahubview"},"DataHubView")))),(0,r.yg)("h3",{id:"deprecation"},"Deprecation"),(0,r.yg)("p",null,"Deprecation is an aspect that indicates the deprecation status of an entity. Typically it is expressed as a Boolean value."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/dataset#deprecation"},"Deprecation of a dataset")))),(0,r.yg)("h3",{id:"ingestion-source"},"Ingestion Source"),(0,r.yg)("p",null,"Ingestion sources refer to the data systems that we are extracting metadata from. For example, we have sources for BigQuery, Looker, Tableau and many others."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/metadata-ingestion#sources"},"Sources")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/integrations"},"DataHub Integrations")))),(0,r.yg)("h3",{id:"container"},"Container"),(0,r.yg)("p",null,"A container of related data assets."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/container"},"Developer Guides: Container")))),(0,r.yg)("h3",{id:"data-platform"},"Data Platform"),(0,r.yg)("p",null,"Data Platforms are systems or tools that contain Datasets, Dashboards, Charts, and all other kinds of data assets modeled in the metadata graph."),(0,r.yg)("details",null,(0,r.yg)("summary",null,"List of Data Platforms"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Azure Data Lake (Gen 1)"),(0,r.yg)("li",{parentName:"ul"},"Azure Data Lake (Gen 2)"),(0,r.yg)("li",{parentName:"ul"},"Airflow"),(0,r.yg)("li",{parentName:"ul"},"Ambry"),(0,r.yg)("li",{parentName:"ul"},"ClickHouse"),(0,r.yg)("li",{parentName:"ul"},"Couchbase"),(0,r.yg)("li",{parentName:"ul"},"External Source"),(0,r.yg)("li",{parentName:"ul"},"HDFS"),(0,r.yg)("li",{parentName:"ul"},"SAP HANA"),(0,r.yg)("li",{parentName:"ul"},"Hive"),(0,r.yg)("li",{parentName:"ul"},"Iceberg"),(0,r.yg)("li",{parentName:"ul"},"AWS S3"),(0,r.yg)("li",{parentName:"ul"},"Kafka"),(0,r.yg)("li",{parentName:"ul"},"Kafka Connect"),(0,r.yg)("li",{parentName:"ul"},"Kusto"),(0,r.yg)("li",{parentName:"ul"},"Mode"),(0,r.yg)("li",{parentName:"ul"},"MongoDB"),(0,r.yg)("li",{parentName:"ul"},"MySQL"),(0,r.yg)("li",{parentName:"ul"},"MariaDB"),(0,r.yg)("li",{parentName:"ul"},"OpenAPI"),(0,r.yg)("li",{parentName:"ul"},"Oracle"),(0,r.yg)("li",{parentName:"ul"},"Pinot"),(0,r.yg)("li",{parentName:"ul"},"PostgreSQL"),(0,r.yg)("li",{parentName:"ul"},"Presto"),(0,r.yg)("li",{parentName:"ul"},"Tableau"),(0,r.yg)("li",{parentName:"ul"},"Vertica")),(0,r.yg)("p",null,"Reference : ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-service/configuration/src/main/resources/bootstrap_mcps/data-platforms.yaml"},"data_platforms.yaml"))),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/dataplatform"},"Developer Guides: Data Platform")))),(0,r.yg)("h3",{id:"dataset"},"Dataset"),(0,r.yg)("p",null,"Datasets represent collections of data that are typically represented as Tables or Views in a database (e.g. BigQuery, Snowflake, Redshift etc.), Streams in a stream-processing environment (Kafka, Pulsar etc.), bundles of data found as Files or Folders in data lake systems (S3, ADLS, etc.)."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/dataset"},"Developer Guides: Dataset")))),(0,r.yg)("h3",{id:"chart"},"Chart"),(0,r.yg)("p",null,"A single data vizualization derived from a Dataset. A single Chart can be a part of multiple Dashboards. Charts can have tags, owners, links, glossary terms, and descriptions attached to them. Examples include a Superset or Looker Chart."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/chart"},"Developer Guides: Chart")))),(0,r.yg)("h3",{id:"dashboard"},"Dashboard"),(0,r.yg)("p",null,"A collection of Charts for visualization. Dashboards can have tags, owners, links, glossary terms, and descriptions attached to them. Examples include a Superset or Mode Dashboard."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/dashboard"},"Developer Guides: Dashboard")))),(0,r.yg)("h3",{id:"data-job"},"Data Job"),(0,r.yg)("p",null,'An executable job that processes data assets, where "processing" implies consuming data, producing data, or both.\nIn orchestration systems, this is sometimes referred to as an individual "Task" within a "DAG". Examples include an Airflow Task.'),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/datajob"},"Developer Guides: Data Job")))),(0,r.yg)("h3",{id:"data-flow"},"Data Flow"),(0,r.yg)("p",null,'An executable collection of Data Jobs with dependencies among them, or a DAG.\nSometimes referred to as a "Pipeline". Examples include an Airflow DAG.'),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/dataflow"},"Developer Guides: Data Flow")))),(0,r.yg)("h3",{id:"glossary-term"},"Glossary Term"),(0,r.yg)("p",null,"Shared vocabulary within the data ecosystem."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/glossary/business-glossary"},"Feature Guides: Glossary")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/glossaryterm"},"Developer Guides: GlossaryTerm")))),(0,r.yg)("h3",{id:"glossary-term-group"},"Glossary Term Group"),(0,r.yg)("p",null,"Glossary Term Group is similar to a folder, containing Terms and even other Term Groups to allow for a nested structure."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/glossary/business-glossary#terms--term-groups"},"Feature Guides: Term & Term Group")))),(0,r.yg)("h3",{id:"tag"},"Tag"),(0,r.yg)("p",null,"Tags are informal, loosely controlled labels that help in search & discovery. They can be added to datasets, dataset schemas, or containers, for an easy way to label or categorize entities \u2013 without having to associate them to a broader business glossary or vocabulary."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/tags"},"Feature Guides: About DataHub Tags")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/tag"},"Developer Guides: Tags")))),(0,r.yg)("h3",{id:"domain"},"Domain"),(0,r.yg)("p",null,"Domains are curated, top-level folders or categories where related assets can be explicitly grouped."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/domains"},"Feature Guides: About DataHub Domains")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/domain"},"Developer Guides: Domain")))),(0,r.yg)("h3",{id:"owner"},"Owner"),(0,r.yg)("p",null,"Owner refers to the users or groups that has ownership rights over entities. For example, owner can be acceessed to dataset or a column or a dataset."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/api/tutorials/owners#add-owners"},"Getting Started : Adding Owners On Datasets/Columns")))),(0,r.yg)("h3",{id:"users-corpuser"},"Users (CorpUser)"),(0,r.yg)("p",null,"CorpUser represents an identity of a person (or an account) in the enterprise."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/corpuser"},"Developer Guides: CorpUser")))),(0,r.yg)("h3",{id:"groups-corpgroup"},"Groups (CorpGroup)"),(0,r.yg)("p",null,"CorpGroup represents an identity of a group of users in the enterprise."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/generated/metamodel/entities/corpgroup"},"Developer Guides: CorpGroup")))),(0,r.yg)("h2",{id:"metadata-model"},"Metadata Model"),(0,r.yg)("h3",{id:"entity"},"Entity"),(0,r.yg)("p",null,"An entity is the primary node in the metadata graph. For example, an instance of a Dataset or a CorpUser is an Entity."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/metadata-modeling/metadata-model"},"How does DataHub model metadata?")))),(0,r.yg)("h3",{id:"aspect"},"Aspect"),(0,r.yg)("p",null,'An aspect is a collection of attributes that describes a particular facet of an entity.\nAspects can be shared across entities, for example "Ownership" is an aspect that is re-used across all the Entities that have owners.'),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/what/aspect"},"What is a metadata aspect?")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/metadata-modeling/metadata-model"},"How does DataHub model metadata?")))),(0,r.yg)("h3",{id:"relationships"},"Relationships"),(0,r.yg)("p",null,"A relationship represents a named edge between 2 entities. They are declared via foreign key attributes within Aspects along with a custom annotation (@Relationship)."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/what/relationship"},"What is a relationship?")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/0.15.0/metadata-modeling/metadata-model"},"How does DataHub model metadata?")))))}g.isMDXComponent=!0}}]);