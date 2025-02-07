"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6656],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>m});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(t),d=r,m=g["".concat(o,".").concat(d)]||g[d]||c[d]||i;return t?n.createElement(m,l(l({ref:a},u),{},{components:t})):n.createElement(m,l({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[g]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46556:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>g});t(96540);var n=t(15680);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={title:"Spark (Legacy)",slug:"/metadata-integration/java/spark-lineage-legacy",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/spark-lineage-legacy/README.md"},o="Spark (Legacy)",p={unversionedId:"metadata-integration/java/spark-lineage-legacy/README",id:"version-0.15.0/metadata-integration/java/spark-lineage-legacy/README",title:"Spark (Legacy)",description:"This is our legacy Spark Integration which is replaced by Acryl Spark Lineage",source:"@site/versioned_docs/version-0.15.0/metadata-integration/java/spark-lineage-legacy/README.md",sourceDirName:"metadata-integration/java/spark-lineage-legacy",slug:"/metadata-integration/java/spark-lineage-legacy",permalink:"/docs/0.15.0/metadata-integration/java/spark-lineage-legacy",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/spark-lineage-legacy/README.md",tags:[],version:"0.15.0",frontMatter:{title:"Spark (Legacy)",slug:"/metadata-integration/java/spark-lineage-legacy",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/spark-lineage-legacy/README.md"}},u={},g=[{value:"Configuring Spark agent",id:"configuring-spark-agent",level:2},{value:"Before you begin: Versions and Release Notes",id:"before-you-begin-versions-and-release-notes",level:3},{value:"Configuration Instructions: spark-submit",id:"configuration-instructions-spark-submit",level:3},{value:"Configuration Instructions:  Amazon EMR",id:"configuration-instructions--amazon-emr",level:3},{value:"Configuration Instructions: Notebooks",id:"configuration-instructions-notebooks",level:3},{value:"Configuration Instructions: Standalone Java Applications",id:"configuration-instructions-standalone-java-applications",level:3},{value:"Configuration Instructions:  Databricks",id:"configuration-instructions--databricks",level:3},{value:"Configuration Options",id:"configuration-options",level:2},{value:"What to Expect: The Metadata Model",id:"what-to-expect-the-metadata-model",level:2},{value:"Custom properties &amp; relating to Spark UI",id:"custom-properties--relating-to-spark-ui",level:3},{value:"Spark versions supported",id:"spark-versions-supported",level:3},{value:"Environments tested with",id:"environments-tested-with",level:3},{value:"Spark commands supported",id:"spark-commands-supported",level:3},{value:"Spark commands not yet supported",id:"spark-commands-not-yet-supported",level:3},{value:"Important notes on usage",id:"important-notes-on-usage",level:3},{value:"Debugging",id:"debugging",level:3},{value:"Known limitations",id:"known-limitations",level:2}],c={toc:g},d="wrapper";function m(e){var{components:a}=e,t=l(e,["components"]);return(0,n.yg)(d,i(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){r(e,a,t[a])}))}return e}({},c,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"spark-legacy"},"Spark (Legacy)"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"This is our legacy Spark Integration which is replaced by ",(0,n.yg)("a",{parentName:"p",href:"/docs/metadata-integration/java/acryl-spark-lineage"},"Acryl Spark Lineage"))),(0,n.yg)("p",null,"To integrate Spark with DataHub, we provide a lightweight Java agent that listens for Spark application and job events and pushes metadata out to DataHub in real-time. The agent listens to events such application start/end, and SQLExecution start/end to create pipelines (i.e. DataJob) and tasks (i.e. DataFlow) in Datahub along with lineage to datasets that are being read from and written to. Read on to learn how to configure this for different Spark scenarios."),(0,n.yg)("h2",{id:"configuring-spark-agent"},"Configuring Spark agent"),(0,n.yg)("p",null,"The Spark agent can be configured using a config file or while creating a Spark Session. If you are using Spark on Databricks, refer ",(0,n.yg)("a",{parentName:"p",href:"#configuration-instructions--databricks"},"Configuration Instructions for Databricks"),"."),(0,n.yg)("h3",{id:"before-you-begin-versions-and-release-notes"},"Before you begin: Versions and Release Notes"),(0,n.yg)("p",null,"Versioning of the jar artifact will follow the semantic versioning of the main ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub"},"DataHub repo")," and release notes will be available ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/releases"},"here"),".\nAlways check ",(0,n.yg)("a",{parentName:"p",href:"https://search.maven.org/search?q=a:datahub-spark-lineage"},"the Maven central repository")," for the latest released version."),(0,n.yg)("h3",{id:"configuration-instructions-spark-submit"},"Configuration Instructions: spark-submit"),(0,n.yg)("p",null,"When running jobs using spark-submit, the agent needs to be configured in the config file."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"#Configuring DataHub spark agent jar\nspark.jars.packages                          io.acryl:datahub-spark-lineage:0.8.23\nspark.extraListeners                         datahub.spark.DatahubSparkListener\nspark.datahub.rest.server                    http://localhost:8080\n")),(0,n.yg)("h3",{id:"configuration-instructions--amazon-emr"},"Configuration Instructions:  Amazon EMR"),(0,n.yg)("p",null,"Set the following spark-defaults configuration properties as it stated ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-spark-configure.html"},"here")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"spark.jars.packages                          io.acryl:datahub-spark-lineage:0.8.23\nspark.extraListeners                         datahub.spark.DatahubSparkListener\nspark.datahub.rest.server                    https://your_datahub_host/gms\n#If you have authentication set up then you also need to specify the Datahub access token\nspark.datahub.rest.token                     yourtoken\n")),(0,n.yg)("h3",{id:"configuration-instructions-notebooks"},"Configuration Instructions: Notebooks"),(0,n.yg)("p",null,"When running interactive jobs from a notebook, the listener can be configured while building the Spark Session."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'spark = SparkSession.builder \\\n          .master("spark://spark-master:7077") \\\n          .appName("test-application") \\\n          .config("spark.jars.packages","io.acryl:datahub-spark-lineage:0.8.23") \\\n          .config("spark.extraListeners","datahub.spark.DatahubSparkListener") \\\n          .config("spark.datahub.rest.server", "http://localhost:8080") \\\n          .enableHiveSupport() \\\n          .getOrCreate()\n')),(0,n.yg)("h3",{id:"configuration-instructions-standalone-java-applications"},"Configuration Instructions: Standalone Java Applications"),(0,n.yg)("p",null,"The configuration for standalone Java apps is very similar."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'spark = SparkSession.builder()\n        .appName("test-application")\n        .config("spark.master", "spark://spark-master:7077")\n        .config("spark.jars.packages","io.acryl:datahub-spark-lineage:0.8.23")\n        .config("spark.extraListeners", "datahub.spark.DatahubSparkListener")\n        .config("spark.datahub.rest.server", "http://localhost:8080")\n        .enableHiveSupport()\n        .getOrCreate();\n')),(0,n.yg)("h3",{id:"configuration-instructions--databricks"},"Configuration Instructions:  Databricks"),(0,n.yg)("p",null,"The Spark agent can be configured using Databricks Cluster ",(0,n.yg)("a",{parentName:"p",href:"https://docs.databricks.com/clusters/configure.html#spark-configuration"},"Spark configuration")," and ",(0,n.yg)("a",{parentName:"p",href:"https://docs.databricks.com/clusters/configure.html#init-scripts"},"Init script"),"."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://docs.databricks.com/security/secrets/secrets.html"},"Databricks Secrets")," can be leveraged to store sensitive information like tokens."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Download ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub-spark-lineage")," jar from ",(0,n.yg)("a",{parentName:"p",href:"https://search.maven.org/search?q=a:datahub-spark-lineage"},"the Maven central repository"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Create ",(0,n.yg)("inlineCode",{parentName:"p"},"init.sh")," with below content"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"#!/bin/bash\ncp /dbfs/datahub/datahub-spark-lineage*.jar /databricks/jars\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Install and configure ",(0,n.yg)("a",{parentName:"p",href:"https://docs.databricks.com/dev-tools/cli/index.html"},"Databricks CLI"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Copy jar and init script to Databricks File System(DBFS) using Databricks CLI."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"databricks fs mkdirs dbfs:/datahub\ndatabricks fs cp --overwrite datahub-spark-lineage*.jar dbfs:/datahub\ndatabricks fs cp --overwrite init.sh dbfs:/datahub\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Open Databricks Cluster configuration page. Click the ",(0,n.yg)("strong",{parentName:"p"},"Advanced Options")," toggle. Click the ",(0,n.yg)("strong",{parentName:"p"},"Spark")," tab. Add below configurations under ",(0,n.yg)("inlineCode",{parentName:"p"},"Spark Config"),"."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"spark.extraListeners                datahub.spark.DatahubSparkListener\nspark.datahub.rest.server           http://localhost:8080\nspark.datahub.databricks.cluster    cluster-name<any preferred cluster identifier>\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Click the ",(0,n.yg)("strong",{parentName:"p"},"Init Scripts")," tab. Set cluster init script as ",(0,n.yg)("inlineCode",{parentName:"p"},"dbfs:/datahub/init.sh"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Configuring DataHub authentication token"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Add below config in cluster spark config."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"spark.datahub.rest.token <token>\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Alternatively, Databricks secrets can be used to secure token."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Create secret using Databricks CLI."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"databricks secrets create-scope --scope datahub --initial-manage-principal users\ndatabricks secrets put --scope datahub --key rest-token\ndatabricks secrets list --scope datahub &lt;&lt;Edit prompted file with token value&gt;&gt;\n"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Add in spark config"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-text"},"spark.datahub.rest.token {{secrets/datahub/rest-token}}\n")))))))),(0,n.yg)("h2",{id:"configuration-options"},"Configuration Options"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Field"),(0,n.yg)("th",{parentName:"tr",align:null},"Required"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.jars.packages"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"Set with latest/required version  io.acryl:datahub-spark-lineage:0.8.23")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.extraListeners"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"datahub.spark.DatahubSparkListener")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.datahub.rest.server"),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"Datahub server url  eg:",(0,n.yg)("a",{parentName:"td",href:"http://localhost:8080"},"http://localhost:8080"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.datahub.rest.token"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"Authentication token.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.datahub.rest.disable_ssl_verification"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Disable SSL certificate validation. Caution: Only use this if you know what you are doing!")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.datahub.metadata.pipeline.platformInstance"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"Pipeline level platform instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.datahub.metadata.dataset.platformInstance"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"dataset level platform instance")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.datahub.metadata.dataset.env"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"PROD"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/graphql/enums#fabrictype"},"Supported values"),". In all other cases, will fallback to PROD")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.datahub.metadata.table.hive_platform_alias"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"hive"),(0,n.yg)("td",{parentName:"tr",align:null},"By default, datahub assigns Hive-like tables to the Hive platform. If you are using Glue as your Hive metastore, set this config flag to ",(0,n.yg)("inlineCode",{parentName:"td"},"glue"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.datahub.metadata.include_scheme"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"true"),(0,n.yg)("td",{parentName:"tr",align:null},"Include scheme from the path URI (e.g. hdfs://, s3://) in the dataset URN. We recommend setting this value to false, it is set to true for backwards compatibility with previous versions")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.datahub.metadata.remove_partition_pattern"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"Remove partition pattern. (e.g. /partition=\\d+) It change database/table/partition=123 to database/table")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.datahub.coalesce_jobs"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"false"),(0,n.yg)("td",{parentName:"tr",align:null},"Only one datajob(task) will be emitted containing all input and output datasets for the spark application")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"spark.datahub.parent.datajob_urn"),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null}),(0,n.yg)("td",{parentName:"tr",align:null},"Specified dataset will be set as upstream dataset for datajob created. Effective only when spark.datahub.coalesce_jobs is set to true")))),(0,n.yg)("h2",{id:"what-to-expect-the-metadata-model"},"What to Expect: The Metadata Model"),(0,n.yg)("p",null,"As of current writing, the Spark agent produces metadata related to the Spark job, tasks and lineage edges to datasets."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A pipeline is created per Spark <master, appName>."),(0,n.yg)("li",{parentName:"ul"},"A task is created per unique Spark query execution within an app.")),(0,n.yg)("p",null,"For Spark on Databricks,"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A pipeline is created per",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"cluster_identifier: specified with spark.datahub.databricks.cluster"),(0,n.yg)("li",{parentName:"ul"},"applicationID: on every restart of the cluster new spark applicationID will be created."))),(0,n.yg)("li",{parentName:"ul"},"A task is created per unique Spark query execution.")),(0,n.yg)("h3",{id:"custom-properties--relating-to-spark-ui"},"Custom properties & relating to Spark UI"),(0,n.yg)("p",null,"The following custom properties in pipelines and tasks relate to the Spark UI:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"appName and appId in a pipeline can be used to determine the Spark application"),(0,n.yg)("li",{parentName:"ul"},"description and SQLQueryId in a task can be used to determine the Query Execution within the application on the SQL tab of Spark UI"),(0,n.yg)("li",{parentName:"ul"},"Other custom properties of pipelines and tasks capture the start and end times of execution etc."),(0,n.yg)("li",{parentName:"ul"},"The query plan is captured in the ",(0,n.yg)("em",{parentName:"li"},"queryPlan")," property of a task.")),(0,n.yg)("p",null,"For Spark on Databricks, pipeline start time is the cluster start time."),(0,n.yg)("h3",{id:"spark-versions-supported"},"Spark versions supported"),(0,n.yg)("p",null,"The primary version tested is Spark/Scala version 2.4.8/2_11.\nThis library has also been tested to work with Spark versions(2.2.0 - 2.4.8) and Scala versions(2.10 - 2.12).\nFor the Spark 3.x series, this has been tested to work with Spark 3.1.2 and 3.2.0 with Scala 2.12. Other combinations are not guaranteed to work currently.\nSupport for other Spark versions is planned in the very near future."),(0,n.yg)("h3",{id:"environments-tested-with"},"Environments tested with"),(0,n.yg)("p",null,"This initial release has been tested with the following environments:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"spark-submit of Python/Java applications to local and remote servers"),(0,n.yg)("li",{parentName:"ul"},"Jupyter notebooks with pyspark code"),(0,n.yg)("li",{parentName:"ul"},"Standalone Java applications"),(0,n.yg)("li",{parentName:"ul"},"Databricks Standalone Cluster")),(0,n.yg)("p",null,"Testing with Databricks Standard and High-concurrency Cluster is not done yet."),(0,n.yg)("h3",{id:"spark-commands-supported"},"Spark commands supported"),(0,n.yg)("p",null,"Below is a list of Spark commands that are parsed currently:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"InsertIntoHadoopFsRelationCommand"),(0,n.yg)("li",{parentName:"ul"},"SaveIntoDataSourceCommand (jdbc)"),(0,n.yg)("li",{parentName:"ul"},"SaveIntoDataSourceCommand (Delta Lake)"),(0,n.yg)("li",{parentName:"ul"},"CreateHiveTableAsSelectCommand"),(0,n.yg)("li",{parentName:"ul"},"InsertIntoHiveTable")),(0,n.yg)("p",null,"Effectively, these support data sources/sinks corresponding to Hive, HDFS, JDBC, and Delta Lake."),(0,n.yg)("p",null,"DataFrame.persist command is supported for below LeafExecNodes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"FileSourceScanExec"),(0,n.yg)("li",{parentName:"ul"},"HiveTableScanExec"),(0,n.yg)("li",{parentName:"ul"},"RowDataSourceScanExec"),(0,n.yg)("li",{parentName:"ul"},"InMemoryTableScanExec")),(0,n.yg)("h3",{id:"spark-commands-not-yet-supported"},"Spark commands not yet supported"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"View related commands"),(0,n.yg)("li",{parentName:"ul"},"Cache commands and implications on lineage"),(0,n.yg)("li",{parentName:"ul"},"RDD jobs")),(0,n.yg)("h3",{id:"important-notes-on-usage"},"Important notes on usage"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"It is advisable to ensure appName is used appropriately to ensure you can trace lineage from a pipeline back to your source code."),(0,n.yg)("li",{parentName:"ul"},"If multiple apps with the same appName run concurrently, dataset-lineage will be captured correctly but the custom-properties e.g. app-id, SQLQueryId would be unreliable. We expect this to be quite rare."),(0,n.yg)("li",{parentName:"ul"},"If spark execution fails, then an empty pipeline would still get created, but it may not have any tasks."),(0,n.yg)("li",{parentName:"ul"},"For HDFS sources, the folder (name) is regarded as the dataset (name) to align with typical storage of parquet/csv formats.")),(0,n.yg)("h3",{id:"debugging"},"Debugging"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Following info logs are generated")),(0,n.yg)("p",null,"On Spark context startup"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"YY/MM/DD HH:mm:ss INFO DatahubSparkListener: DatahubSparkListener initialised.\nYY/MM/DD HH:mm:ss INFO SparkContext: Registered listener datahub.spark.DatahubSparkListener\n")),(0,n.yg)("p",null,"On application start"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"YY/MM/DD HH:mm:ss INFO DatahubSparkListener: Application started: SparkListenerApplicationStart(AppName,Some(local-1644489736794),1644489735772,user,None,None)\nYY/MM/DD HH:mm:ss INFO McpEmitter: REST Emitter Configuration: GMS url <rest.server>\nYY/MM/DD HH:mm:ss INFO McpEmitter: REST Emitter Configuration: Token XXXXX\n")),(0,n.yg)("p",null,"On pushing data to server"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},'YY/MM/DD HH:mm:ss INFO McpEmitter: MetadataWriteResponse(success=true, responseContent={"value":"<URN>"}, underlyingResponse=HTTP/1.1 200 OK [Date: day, DD month year HH:mm:ss GMT, Content-Type: application/json, X-RestLi-Protocol-Version: 2.0.0, Content-Length: 97, Server: Jetty(9.4.46.v20220331)] [Content-Length: 97,Chunked: false])\n')),(0,n.yg)("p",null,"On application end"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"YY/MM/DD HH:mm:ss INFO DatahubSparkListener: Application ended : AppName AppID\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To enable debugging logs, add below configuration in log4j.properties file")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-properties"},"log4j.logger.datahub.spark=DEBUG\nlog4j.logger.datahub.client.rest=DEBUG\n")),(0,n.yg)("h2",{id:"known-limitations"},"Known limitations"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Only postgres supported for JDBC sources in this initial release. Support for other driver URL formats will be added in future."),(0,n.yg)("li",{parentName:"ul"},"Behavior with cached datasets is not fully specified/defined in context of lineage."),(0,n.yg)("li",{parentName:"ul"},"There is a possibility that very short-lived jobs that run within a few milliseconds may not be captured by the listener. This should not cause an issue for realistic Spark applications.")))}m.isMDXComponent=!0}}]);