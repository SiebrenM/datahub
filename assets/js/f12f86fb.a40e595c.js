"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[83582],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});r(96540);var n=r(15680);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"Using Airflow",slug:"/metadata-ingestion/schedule_docs/airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/airflow.md"},s="Using Airflow",c={unversionedId:"metadata-ingestion/schedule_docs/airflow",id:"version-0.15.0/metadata-ingestion/schedule_docs/airflow",title:"Using Airflow",description:"If you are using Apache Airflow for your scheduling then you might want to also use it for scheduling your ingestion recipes. For any Airflow specific questions you can go through Airflow docs for more details.",source:"@site/versioned_docs/version-0.15.0/metadata-ingestion/schedule_docs/airflow.md",sourceDirName:"metadata-ingestion/schedule_docs",slug:"/metadata-ingestion/schedule_docs/airflow",permalink:"/docs/0.15.0/metadata-ingestion/schedule_docs/airflow",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/airflow.md",tags:[],version:"0.15.0",frontMatter:{title:"Using Airflow",slug:"/metadata-ingestion/schedule_docs/airflow",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/schedule_docs/airflow.md"},sidebar:"overviewSidebar",previous:{title:"Using Cron",permalink:"/docs/0.15.0/metadata-ingestion/schedule_docs/cron"},next:{title:"Using Kubernetes",permalink:"/docs/0.15.0/metadata-ingestion/schedule_docs/kubernetes"}},u={},p=[],d={toc:p},f="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(f,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"using-airflow"},"Using Airflow"),(0,n.yg)("p",null,"If you are using Apache Airflow for your scheduling then you might want to also use it for scheduling your ingestion recipes. For any Airflow specific questions you can go through ",(0,n.yg)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/"},"Airflow docs")," for more details."),(0,n.yg)("p",null,"We've provided a few examples of how to configure your DAG:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion-modules/airflow-plugin/src/datahub_airflow_plugin/example_dags/mysql_sample_dag.py"},(0,n.yg)("inlineCode",{parentName:"a"},"mysql_sample_dag"))," embeds the full MySQL ingestion configuration inside the DAG.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion-modules/airflow-plugin/src/datahub_airflow_plugin/example_dags/snowflake_sample_dag.py"},(0,n.yg)("inlineCode",{parentName:"a"},"snowflake_sample_dag"))," avoids embedding credentials inside the recipe, and instead fetches them from Airflow's ",(0,n.yg)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/howto/connection/index.html"},"Connections")," feature. You must configure your connections in Airflow to use this approach."))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"These example DAGs use the ",(0,n.yg)("inlineCode",{parentName:"p"},"PythonVirtualenvOperator")," to run the ingestion. This is the recommended approach, since it guarantees that there will not be any conflicts between DataHub and the rest of your Airflow environment."),(0,n.yg)("p",{parentName:"admonition"},"When configuring the task, it's important to specify the requirements with your source and set the ",(0,n.yg)("inlineCode",{parentName:"p"},"system_site_packages")," option to false."),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre",className:"language-py"},'ingestion_task = PythonVirtualenvOperator(\n    task_id="ingestion_task",\n    requirements=[\n        "acryl-datahub[<your-source>]",\n    ],\n    system_site_packages=False,\n    python_callable=your_callable,\n)\n'))),(0,n.yg)("details",null,(0,n.yg)("summary",null,"Advanced: loading a recipe file"),(0,n.yg)("p",null,"In more advanced cases, you might want to store your ingestion recipe in a file and load it from your task."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Ensure the recipe file is in a folder accessible to your airflow workers. You can either specify absolute path on the machines where Airflow is installed or a path relative to ",(0,n.yg)("inlineCode",{parentName:"li"},"AIRFLOW_HOME"),"."),(0,n.yg)("li",{parentName:"ul"},"Ensure ",(0,n.yg)("a",{parentName:"li",href:"/docs/0.15.0/cli"},"DataHub CLI")," is installed in your airflow environment."),(0,n.yg)("li",{parentName:"ul"},"Create a DAG task to read your DataHub ingestion recipe file and run it. See the example below for reference."),(0,n.yg)("li",{parentName:"ul"},"Deploy the DAG file into airflow for scheduling. Typically this involves checking in the DAG file into your dags folder which is accessible to your Airflow instance.")),(0,n.yg)("p",null,"Example: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion-modules/airflow-plugin/src/datahub_airflow_plugin/example_dags/generic_recipe_sample_dag.py"},(0,n.yg)("inlineCode",{parentName:"a"},"generic_recipe_sample_dag")))))}g.isMDXComponent=!0}}]);