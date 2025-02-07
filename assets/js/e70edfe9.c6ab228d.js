"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[28686],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?i.createElement(d,r(r({ref:t},g),{},{components:n})):i.createElement(d,r({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(96540);var i=n(15680);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/snowflake/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/configuration.md"},c="Configuring Your Snowflake Connector to DataHub",l={unversionedId:"docs/quick-ingestion-guides/snowflake/configuration",id:"docs/quick-ingestion-guides/snowflake/configuration",title:"Configuration",description:"Now that you have created a DataHub-specific user with the relevant roles in Snowflake in the prior step, it's now time to set up a connection via the DataHub UI.",source:"@site/genDocs/docs/quick-ingestion-guides/snowflake/configuration.md",sourceDirName:"docs/quick-ingestion-guides/snowflake",slug:"/quick-ingestion-guides/snowflake/configuration",permalink:"/docs/quick-ingestion-guides/snowflake/configuration",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/configuration.md",tags:[],version:"current",frontMatter:{title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/snowflake/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/configuration.md"},sidebar:"overviewSidebar",previous:{title:"Setup",permalink:"/docs/quick-ingestion-guides/snowflake/setup"},next:{title:"Overview",permalink:"/docs/quick-ingestion-guides/tableau/overview"}},g={},u=[{value:"Configure Secrets",id:"configure-secrets",level:2},{value:"Configure Recipe",id:"configure-recipe",level:2},{value:"Schedule Execution",id:"schedule-execution",level:2},{value:"Finish Up",id:"finish-up",level:2},{value:"Validate Ingestion Runs",id:"validate-ingestion-runs",level:2}],p={toc:u},m="wrapper";function d(e){var{components:t}=e,n=r(e,["components"]);return(0,i.yg)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}({},p,n),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"configuring-your-snowflake-connector-to-datahub"},"Configuring Your Snowflake Connector to DataHub"),(0,i.yg)("p",null,"Now that you have created a DataHub-specific user with the relevant roles in Snowflake in ",(0,i.yg)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/snowflake/setup"},"the prior step"),", it's now time to set up a connection via the DataHub UI."),(0,i.yg)("h2",{id:"configure-secrets"},"Configure Secrets"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Within DataHub, navigate to the ",(0,i.yg)("strong",{parentName:"li"},"Ingestion")," tab in the top, right corner of your screen")),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:'Navigate to the "Ingestion Tab"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_ingestion_button.png"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"If you do not see the Ingestion tab, please contact your DataHub admin to grant you the correct permissions")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Navigate to the ",(0,i.yg)("strong",{parentName:"li"},"Secrets")," tab and click ",(0,i.yg)("strong",{parentName:"li"},"Create new secret"))),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:"Secrets Tab",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_secrets_tab.png"})),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a Password secret"),(0,i.yg)("p",{parentName:"li"},"This will securely store your Snowflake password within DataHub"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Enter a name like ",(0,i.yg)("inlineCode",{parentName:"li"},"SNOWFLAKE_PASSWORD")," - we will use this later to refer to the secret"),(0,i.yg)("li",{parentName:"ul"},"Enter the password configured for the DataHub user in the previous step"),(0,i.yg)("li",{parentName:"ul"},"Optionally add a description"),(0,i.yg)("li",{parentName:"ul"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Create"))))),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"70%",alt:"Snowflake Password Secret",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_password_secret.png"})),(0,i.yg)("h2",{id:"configure-recipe"},"Configure Recipe"),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Navigate to the ",(0,i.yg)("strong",{parentName:"li"},"Sources")," tab and click ",(0,i.yg)("strong",{parentName:"li"},"Create new source"))),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:'Click "Create new source"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_click_create_new_source_button.png"})),(0,i.yg)("ol",{start:5},(0,i.yg)("li",{parentName:"ol"},"Select Snowflake")),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"70%",alt:"Select Snowflake from the options",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_snowflake_source.png"})),(0,i.yg)("ol",{start:6},(0,i.yg)("li",{parentName:"ol"},"Fill out the Snowflake Recipe")),(0,i.yg)("p",null,"Enter the Snowflake Account Identifier as ",(0,i.yg)("strong",{parentName:"p"},"Account ID")," field. Account identifier is the part before ",(0,i.yg)("inlineCode",{parentName:"p"},".snowflakecomputing.com")," in your snowflake host URL:"),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"70%",alt:"Account Id Field",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_account_id.png"})),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Learn more about Snowflake Account Identifiers ",(0,i.yg)("a",{parentName:"em",href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#account-identifiers"},"here"))),(0,i.yg)("p",null,"Add the previously added Password secret to ",(0,i.yg)("strong",{parentName:"p"},"Password")," field:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Click on the Password input field"),(0,i.yg)("li",{parentName:"ul"},"Select ",(0,i.yg)("inlineCode",{parentName:"li"},"SNOWFLAKE_PASSWORD")," secret")),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"70%",alt:"Password field",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_password_secret_field.png"})),(0,i.yg)("p",null,"Populate the relevant fields using the same ",(0,i.yg)("strong",{parentName:"p"},"Username"),", ",(0,i.yg)("strong",{parentName:"p"},"Role"),", and ",(0,i.yg)("strong",{parentName:"p"},"Warehouse")," you created and/or specified in ",(0,i.yg)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/snowflake/setup"},"Snowflake Prerequisites"),"."),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"70%",alt:"Warehouse Field",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_warehouse_username_role_fields.png"})),(0,i.yg)("ol",{start:7},(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Test Connection"))),(0,i.yg)("p",null,"This step will ensure you have configured your credentials accurately and confirm you have the required permissions to extract all relevant metadata."),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:"Test Snoflake connection",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_test_connection.png"})),(0,i.yg)("p",null,"After you have successfully tested your connection, click ",(0,i.yg)("strong",{parentName:"p"},"Next"),"."),(0,i.yg)("h2",{id:"schedule-execution"},"Schedule Execution"),(0,i.yg)("p",null,"Now it's time to schedule a recurring ingestion pipeline to regularly extract metadata from your Snowflake instance."),(0,i.yg)("ol",{start:8},(0,i.yg)("li",{parentName:"ol"},"Decide how regularly you want this ingestion to run-- day, month, year, hour, minute, etc. Select from the dropdown")),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:"schedule selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_schedule.png"})),(0,i.yg)("ol",{start:9},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Ensure you've configured your correct timezone"),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:"timezone_selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_timezone.png"}))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Click ",(0,i.yg)("strong",{parentName:"p"},"Next")," when you are done"))),(0,i.yg)("h2",{id:"finish-up"},"Finish Up"),(0,i.yg)("ol",{start:11},(0,i.yg)("li",{parentName:"ol"},"Name your ingestion source, then click ",(0,i.yg)("strong",{parentName:"li"},"Save and Run"),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:"Name your ingestion",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_name_ingestion_source.png"})))),(0,i.yg)("p",null,"You will now find your new ingestion source running"),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:"ingestion_running",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_source_running.png"})),(0,i.yg)("h2",{id:"validate-ingestion-runs"},"Validate Ingestion Runs"),(0,i.yg)("ol",{start:12},(0,i.yg)("li",{parentName:"ol"},"View the latest status of ingestion runs on the Ingestion page")),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:"ingestion succeeded",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_ingestion_succeded.png"})),(0,i.yg)("ol",{start:13},(0,i.yg)("li",{parentName:"ol"},"Click the plus sign to expand the full list of historical runs and outcomes; click ",(0,i.yg)("strong",{parentName:"li"},"Details")," to see the outcomes of a specific run")),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:"ingestion_details",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_ingestion_details.png"})),(0,i.yg)("ol",{start:14},(0,i.yg)("li",{parentName:"ol"},"From the Ingestion Run Details page, pick ",(0,i.yg)("strong",{parentName:"li"},"View All")," to see which entities were ingested")),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_details_view_all.png"})),(0,i.yg)("ol",{start:15},(0,i.yg)("li",{parentName:"ol"},"Pick an entity from the list to manually validate if it contains the detail you expected  ")),(0,i.yg)("p",{align:"center"},(0,i.yg)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/snowflake/snowflake_ingestion_view_ingested_assets.png"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Congratulations!")," You've successfully set up Snowflake as an ingestion source for DataHub!"))}d.isMDXComponent=!0}}]);