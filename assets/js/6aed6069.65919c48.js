"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[56842],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>d});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),h=s(a),g=n,d=h["".concat(l,".").concat(g)]||h[g]||c[g]||o;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[h]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},37176:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>h});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const p={title:"How To Set Up GraphQL",slug:"/api/graphql/how-to-set-up-graphql",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/how-to-set-up-graphql.md"},l="How To Set Up GraphQL",s={unversionedId:"docs/api/graphql/how-to-set-up-graphql",id:"version-0.14.1/docs/api/graphql/how-to-set-up-graphql",title:"How To Set Up GraphQL",description:"Preparing Local Datahub Deployment",source:"@site/versioned_docs/version-0.14.1/docs/api/graphql/how-to-set-up-graphql.md",sourceDirName:"docs/api/graphql",slug:"/api/graphql/how-to-set-up-graphql",permalink:"/docs/0.14.1/api/graphql/how-to-set-up-graphql",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/how-to-set-up-graphql.md",tags:[],version:"0.14.1",frontMatter:{title:"How To Set Up GraphQL",slug:"/api/graphql/how-to-set-up-graphql",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/how-to-set-up-graphql.md"},sidebar:"overviewSidebar",previous:{title:"Scalars",permalink:"/docs/0.14.1/graphql/scalars"},next:{title:"Getting Started With GraphQL",permalink:"/docs/0.14.1/api/graphql/getting-started"}},u={},h=[{value:"Preparing Local Datahub Deployment",id:"preparing-local-datahub-deployment",level:2},{value:"Querying the GraphQL API",id:"querying-the-graphql-api",level:2},{value:"GraphQL Explorer (GraphiQL)",id:"graphql-explorer-graphiql",level:3},{value:"CURL",id:"curl",level:3},{value:"Postman",id:"postman",level:3},{value:"Authentication + Authorization",id:"authentication--authorization",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}],c={toc:h},g="wrapper";function d(e){var{components:t}=e,a=i(e,["components"]);return(0,r.yg)(g,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"how-to-set-up-graphql"},"How To Set Up GraphQL"),(0,r.yg)("h2",{id:"preparing-local-datahub-deployment"},"Preparing Local Datahub Deployment"),(0,r.yg)("p",null,"The first thing you'll need to use the GraphQL API is a deployed instance of DataHub with some metadata ingested.\nFor more information, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.14.1/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.yg)("h2",{id:"querying-the-graphql-api"},"Querying the GraphQL API"),(0,r.yg)("p",null,"DataHub's GraphQL endpoint is served at the path ",(0,r.yg)("inlineCode",{parentName:"p"},"/api/graphql"),", e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"https://my-company.datahub.com/api/graphql"),".\nThere are a few options when it comes to querying the GraphQL endpoint."),(0,r.yg)("p",null,"For ",(0,r.yg)("strong",{parentName:"p"},"Testing"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"GraphQL Explorer (GraphiQL)"),(0,r.yg)("li",{parentName:"ul"},"CURL"),(0,r.yg)("li",{parentName:"ul"},"Postman")),(0,r.yg)("p",null,"For ",(0,r.yg)("strong",{parentName:"p"},"Production"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"GraphQL ",(0,r.yg)("a",{parentName:"li",href:"https://graphql.org/code/"},"Client SDK")," for the language of your choice"),(0,r.yg)("li",{parentName:"ul"},"Basic HTTP client")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Notice: The DataHub GraphQL endpoint only supports POST requests at this time.")),(0,r.yg)("h3",{id:"graphql-explorer-graphiql"},"GraphQL Explorer (GraphiQL)"),(0,r.yg)("p",null,"DataHub provides a browser-based GraphQL Explorer Tool (",(0,r.yg)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL"),") for live interaction with the GraphQL API. This tool is available at the path ",(0,r.yg)("inlineCode",{parentName:"p"},"/api/graphiql")," (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"https://my-company.datahub.com/api/graphiql"),")\nThis interface allows you to easily craft queries and mutations against real metadata stored in your live DataHub deployment."),(0,r.yg)("p",null,"To experiment with GraphiQL before deploying it in your live DataHub deployment, you can access a demo site provided by DataHub at ",(0,r.yg)("a",{parentName:"p",href:"https://demo.datahubproject.io/api/graphiql"},"https://demo.datahubproject.io/api/graphiql"),".\nFor instance, you can create a tag by posting the following query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'mutation createTag {\n    createTag(input:\n    {\n      name: "Deprecated",\n      description: "Having this tag means this column or table is deprecated."\n    })\n}\n')),(0,r.yg)("p",null,"For a detailed usage guide, check out ",(0,r.yg)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/"},"How to use GraphiQL"),"."),(0,r.yg)("h3",{id:"curl"},"CURL"),(0,r.yg)("p",null,"CURL is a command-line tool used for transferring data using various protocols including HTTP, HTTPS, and others.\nTo query the DataHub GraphQL API using CURL, you can send a ",(0,r.yg)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/api/graphql")," endpoint with the GraphQL query in the request body.\nHere is an example CURL command to create a tag via GraphQL API:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation createTag { createTag(input: { name: \\"Deprecated\\", description: \\"Having this tag means this column or table is deprecated.\\" }) }", "variables":{}}\'\n')),(0,r.yg)("h3",{id:"postman"},"Postman"),(0,r.yg)("p",null,"Postman is a popular API client that provides a graphical user interface for sending requests and viewing responses.\nWithin Postman, you can create a ",(0,r.yg)("inlineCode",{parentName:"p"},"POST")," request and set the request URL to the ",(0,r.yg)("inlineCode",{parentName:"p"},"/api/graphql")," endpoint.\nIn the request body, select the ",(0,r.yg)("inlineCode",{parentName:"p"},"GraphQL")," option and enter your GraphQL query in the request body."),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/postman-graphql.png"})),(0,r.yg)("p",null,"Please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://learning.postman.com/docs/sending-requests/graphql/graphql-overview/"},"Querying with GraphQL")," in the Postman documentation for more information."),(0,r.yg)("h3",{id:"authentication--authorization"},"Authentication + Authorization"),(0,r.yg)("p",null,"In general, you'll need to provide an ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.14.1/authentication/personal-access-tokens"},"Access Token")," when querying the GraphQL by\nproviding an ",(0,r.yg)("inlineCode",{parentName:"p"},"Authorization")," header containing a ",(0,r.yg)("inlineCode",{parentName:"p"},"Bearer")," token. The header should take the following format:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"Authorization: Bearer <access-token>\n")),(0,r.yg)("p",null,"Authorization for actions exposed by the GraphQL endpoint will be performed based on the actor making the request.\nFor Personal Access Tokens, the token will carry the user's privileges. Please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.14.1/api/graphql/token-management"},"Access Token Management")," for more information."),(0,r.yg)("h2",{id:"whats-next"},"What's Next?"),(0,r.yg)("p",null,"Now that you are ready with GraphQL, how about browsing through some use cases?\nPlease refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.14.1/api/graphql/getting-started"},"Getting Started With GraphQL")," for more information."))}d.isMDXComponent=!0}}]);