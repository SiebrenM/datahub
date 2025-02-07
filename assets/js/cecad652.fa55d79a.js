"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[90848],{22416:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>b,frontMatter:()=>p,metadata:()=>g,toc:()=>c});t(96540);var n=t(15680),i=t(53720),s=t(5400);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const p={sidebar_position:35,title:"Metabase",slug:"/generated/ingestion/sources/metabase",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md"},d="Metabase",g={unversionedId:"docs/generated/ingestion/sources/metabase",id:"version-0.15.0/docs/generated/ingestion/sources/metabase",title:"Metabase",description:"Certified",source:"@site/versioned_docs/version-0.15.0/docs/generated/ingestion/sources/metabase.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/metabase",permalink:"/docs/0.15.0/generated/ingestion/sources/metabase",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md",tags:[],version:"0.15.0",sidebarPosition:35,frontMatter:{sidebar_position:35,title:"Metabase",slug:"/generated/ingestion/sources/metabase",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md"},sidebar:"overviewSidebar",previous:{title:"MariaDB",permalink:"/docs/0.15.0/generated/ingestion/sources/mariadb"},next:{title:"Metadata File",permalink:"/docs/0.15.0/generated/ingestion/sources/metadata-file"}},m={},c=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Collection",id:"collection",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Chart",id:"chart",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Config Details",id:"config-details",level:3},{value:"Compatibility",id:"compatibility",level:2},{value:"Code Coordinates",id:"code-coordinates",level:3}],y={toc:c},u="wrapper";function b(e){var{components:a}=e,t=o(e,["components"]);return(0,n.yg)(u,r(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){l(e,a,t[a])}))}return e}({},y,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"metabase"},"Metabase"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,n.yg)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Capability"),(0,n.yg)("th",{parentName:"tr",align:null},"Status"),(0,n.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.15.0/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Detect Deleted Entities")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Optionally enabled via ",(0,n.yg)("inlineCode",{parentName:"td"},"stateful_ingestion.remove_stale_metadata"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.15.0/platform-instances"},"Platform Instance")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Enabled by default")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Table-Level Lineage"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Supported by default")))),(0,n.yg)("p",null,"This plugin extracts Charts, dashboards, and associated metadata. This plugin is in beta and has only been tested\non PostgreSQL and H2 database."),(0,n.yg)("h3",{id:"collection"},"Collection"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api/collection"},"/api/collection")," endpoint is used to\nretrieve the available collections."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api/collection#get-apicollectioniditems"},"/api/collection/<COLLECTION_ID>/items?models=dashboard")," endpoint is used to retrieve a given collection and list their dashboards."),(0,n.yg)("h3",{id:"dashboard"},"Dashboard"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api/dashboard"},"/api/dashboard/<DASHBOARD_ID>")," endpoint is used to retrieve a given Dashboard and grab its information."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Title and description"),(0,n.yg)("li",{parentName:"ul"},"Last edited by"),(0,n.yg)("li",{parentName:"ul"},"Owner"),(0,n.yg)("li",{parentName:"ul"},"Link to the dashboard in Metabase"),(0,n.yg)("li",{parentName:"ul"},"Associated charts")),(0,n.yg)("h3",{id:"chart"},"Chart"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#card"},"/api/card")," endpoint is used to\nretrieve the following information."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Title and description"),(0,n.yg)("li",{parentName:"ul"},"Last edited by"),(0,n.yg)("li",{parentName:"ul"},"Owner"),(0,n.yg)("li",{parentName:"ul"},"Link to the chart in Metabase"),(0,n.yg)("li",{parentName:"ul"},"Datasource and lineage")),(0,n.yg)("p",null,"The following properties for a chart are ingested in DataHub."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Dimensions")),(0,n.yg)("td",{parentName:"tr",align:null},"Column names")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Filters")),(0,n.yg)("td",{parentName:"tr",align:null},"Any filters applied to the chart")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"Metrics")),(0,n.yg)("td",{parentName:"tr",align:null},"All columns that are being used for aggregation")))),(0,n.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"metabase")," source works out of the box with ",(0,n.yg)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,n.yg)("h3",{id:"config-details"},"Config Details"),(0,n.yg)(i.A,{mdxType:"Tabs"},(0,n.yg)(s.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"Note that a ",(0,n.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.yg)("div",{className:"config-table"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"connect_uri"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Metabase host URL. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"localhost:3000")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"database_alias_map"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"object"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Database name map to use when constructing dataset URN.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"database_id_to_instance_map"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"map(str,string)"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"default_schema"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Default schema name to use when schema is not provided in an SQL query ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"public")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"display_uri"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"optional URL to use in links (if ",(0,n.yg)("inlineCode",{parentName:"td"},"connect_uri")," is only for ingestion)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"engine_platform_map"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"map(str,string)"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"exclude_other_user_collections"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Flag that if true, exclude other user collections ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"password"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string(password)"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Metabase password.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"platform_instance_map"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"map(str,string)"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"username"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Metabase username.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"env"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"PROD")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"stateful_ingestion"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"StatefulStaleMetadataRemovalConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Base specialized config for Stateful Ingestion with stale metadata removal capability.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether or not to enable stateful ingest. Default: True if a pipeline_name is set and either a datahub-rest sink or ",(0,n.yg)("inlineCode",{parentName:"td"},"datahub_api")," is specified, otherwise False ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"stateful_ingestion."),(0,n.yg)("span",{className:"path-main"},"remove_stale_metadata"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))))))),(0,n.yg)(s.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "MetabaseConfig",\n  "description": "Any non-Dataset source that produces lineage to Datasets should inherit this class.\\ne.g. Orchestrators, Pipelines, BI Tools etc.",\n  "type": "object",\n  "properties": {\n    "stateful_ingestion": {\n      "$ref": "#/definitions/StatefulStaleMetadataRemovalConfig"\n    },\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance_map": {\n      "title": "Platform Instance Map",\n      "description": "A holder for platform -> platform_instance mappings to generate correct dataset urns",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Metabase host URL.",\n      "default": "localhost:3000",\n      "type": "string"\n    },\n    "display_uri": {\n      "title": "Display Uri",\n      "description": "optional URL to use in links (if `connect_uri` is only for ingestion)",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "Metabase username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Metabase password.",\n      "type": "string",\n      "writeOnly": true,\n      "format": "password"\n    },\n    "database_alias_map": {\n      "title": "Database Alias Map",\n      "description": "Database name map to use when constructing dataset URN.",\n      "type": "object"\n    },\n    "engine_platform_map": {\n      "title": "Engine Platform Map",\n      "description": "Custom mappings between metabase database engines and DataHub platforms",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "database_id_to_instance_map": {\n      "title": "Database Id To Instance Map",\n      "description": "Custom mappings between metabase database id and DataHub platform instance",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "default_schema": {\n      "title": "Default Schema",\n      "description": "Default schema name to use when schema is not provided in an SQL query",\n      "default": "public",\n      "type": "string"\n    },\n    "exclude_other_user_collections": {\n      "title": "Exclude Other User Collections",\n      "description": "Flag that if true, exclude other user collections",\n      "default": false,\n      "type": "boolean"\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "DynamicTypedStateProviderConfig": {\n      "title": "DynamicTypedStateProviderConfig",\n      "type": "object",\n      "properties": {\n        "type": {\n          "title": "Type",\n          "description": "The type of the state provider to use. For DataHub use `datahub`",\n          "type": "string"\n        },\n        "config": {\n          "title": "Config",\n          "description": "The configuration required for initializing the state provider. Default: The datahub_api config if set at pipeline level. Otherwise, the default DatahubClientConfig. See the defaults (https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19).",\n          "default": {},\n          "type": "object"\n        }\n      },\n      "required": [\n        "type"\n      ],\n      "additionalProperties": false\n    },\n    "StatefulStaleMetadataRemovalConfig": {\n      "title": "StatefulStaleMetadataRemovalConfig",\n      "description": "Base specialized config for Stateful Ingestion with stale metadata removal capability.",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether or not to enable stateful ingest. Default: True if a pipeline_name is set and either a datahub-rest sink or `datahub_api` is specified, otherwise False",\n          "default": false,\n          "type": "boolean"\n        },\n        "remove_stale_metadata": {\n          "title": "Remove Stale Metadata",\n          "description": "Soft-deletes the entities present in the last successful run but missing in the current run with stateful_ingestion enabled.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.yg)("p",null,"Metabase databases will be mapped to a DataHub platform based on the engine listed in the\n",(0,n.yg)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#database"},"api/database")," response. This mapping can be\ncustomized by using the ",(0,n.yg)("inlineCode",{parentName:"p"},"engine_platform_map")," config option. For example, to map databases using the ",(0,n.yg)("inlineCode",{parentName:"p"},"athena")," engine to\nthe underlying datasets in the ",(0,n.yg)("inlineCode",{parentName:"p"},"glue")," platform, the following snippet can be used:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},"  engine_platform_map:\n    athena: glue\n")),(0,n.yg)("p",null,"DataHub will try to determine database name from Metabase ",(0,n.yg)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#database"},"api/database"),"\npayload. However, the name can be overridden from ",(0,n.yg)("inlineCode",{parentName:"p"},"database_alias_map")," for a given database connected to Metabase."),(0,n.yg)("p",null,"If several platform instances with the same platform (e.g. from several distinct clickhouse clusters) are present in DataHub,\nthe mapping between database id in Metabase and platform instance in DataHub may be configured with the following map:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yml"},'  database_id_to_instance_map:\n    "42": platform_instance_in_datahub\n')),(0,n.yg)("p",null,"The key in this map must be string, not integer although  Metabase API provides ",(0,n.yg)("inlineCode",{parentName:"p"},"id")," as number.\nIf ",(0,n.yg)("inlineCode",{parentName:"p"},"database_id_to_instance_map")," is not specified, ",(0,n.yg)("inlineCode",{parentName:"p"},"platform_instance_map")," is used for platform instance mapping. If none of the above are specified, platform instance is not used when constructing ",(0,n.yg)("inlineCode",{parentName:"p"},"urn")," when searching for dataset relations."),(0,n.yg)("p",null,"If needed it is possible to exclude collections from other users by setting the following configuration:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},"exclude_other_user_collections: true\n")),(0,n.yg)("h2",{id:"compatibility"},"Compatibility"),(0,n.yg)("p",null,"Metabase version ",(0,n.yg)("a",{parentName:"p",href:"https://www.metabase.com/start/oss/"},"v0.48.3")),(0,n.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Class Name: ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.metabase.MetabaseSource")),(0,n.yg)("li",{parentName:"ul"},"Browse on ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/metabase.py"},"GitHub"))),(0,n.yg)("h2",null,"Questions"),(0,n.yg)("p",null,"If you've got any questions on configuring ingestion for Metabase, feel free to ping us on ",(0,n.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}b.isMDXComponent=!0}}]);