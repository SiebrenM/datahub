"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[49875],{15680:(e,t,i)=>{i.d(t,{xA:()=>p,yg:()=>d});var a=i(96540);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var r=a.createContext({}),c=function(e){var t=a.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(i),y=o,d=g["".concat(r,".").concat(y)]||g[y]||u[y]||n;return i?a.createElement(d,s(s({ref:t},p),{},{components:i})):a.createElement(d,s({ref:t},p))}));function d(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,s=new Array(n);s[0]=y;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[g]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<n;c++)s[c]=i[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}y.displayName="MDXCreateElement"},36920:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>g});i(96540);var a=i(15680);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function s(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}const l={title:"Access Policies",slug:"/authorization/access-policies-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/access-policies-guide.md"},r="Access Policies",c={unversionedId:"docs/authorization/access-policies-guide",id:"version-0.14.1/docs/authorization/access-policies-guide",title:"Access Policies",description:"Access Policies define who can do what to which resources. In conjunction with Roles, Access Policies determine what users are allowed to do on DataHub.",source:"@site/versioned_docs/version-0.14.1/docs/authorization/access-policies-guide.md",sourceDirName:"docs/authorization",slug:"/authorization/access-policies-guide",permalink:"/docs/0.14.1/authorization/access-policies-guide",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/access-policies-guide.md",tags:[],version:"0.14.1",frontMatter:{title:"Access Policies",slug:"/authorization/access-policies-guide",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/access-policies-guide.md"},sidebar:"overviewSidebar",previous:{title:"Custom Ownership Types",permalink:"/docs/0.14.1/ownership/ownership-types"},next:{title:"Posts",permalink:"/docs/0.14.1/posts"}},p={},g=[{value:"Policy Types",id:"policy-types",level:2},{value:"Platform",id:"platform",level:2},{value:"Metadata",id:"metadata",level:2},{value:"Using Access Policies",id:"using-access-policies",level:2},{value:"Creating a Platform Policy",id:"creating-a-platform-policy",level:3},{value:"Step 1. Provide a Name &amp; Description",id:"step-1-provide-a-name--description",level:4},{value:"Step 2: Configure Privileges",id:"step-2-configure-privileges",level:4},{value:"Step 3: Choose Policy Actors",id:"step-3-choose-policy-actors",level:4},{value:"Creating a Metadata Policy",id:"creating-a-metadata-policy",level:3},{value:"Step 1. Provide a Name &amp; Description",id:"step-1-provide-a-name--description-1",level:4},{value:"Step 2: Configure Privileges",id:"step-2-configure-privileges-1",level:4},{value:"Step 3: Choose Policy Actors",id:"step-3-choose-policy-actors-1",level:4},{value:"Updating an Existing Policy",id:"updating-an-existing-policy",level:3},{value:"Removing a Policy",id:"removing-a-policy",level:3},{value:"Deactivating a Policy",id:"deactivating-a-policy",level:3},{value:"Default Policies",id:"default-policies",level:3},{value:"REST API Authorization",id:"rest-api-authorization",level:3},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Videos",id:"videos",level:3},{value:"GraphQL",id:"graphql",level:3},{value:"FAQ and Troubleshooting",id:"faq-and-troubleshooting",level:2}],u=(y="FeatureAvailability",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var y;const d={toc:g},h="wrapper";function m(e){var{components:t}=e,i=s(e,["components"]);return(0,a.yg)(h,n(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(t){o(e,t,i[t])}))}return e}({},d,i),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"access-policies"},"Access Policies"),(0,a.yg)(u,{mdxType:"FeatureAvailability"}),(0,a.yg)("p",null,"Access Policies define who can do what to which resources. In conjunction with ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/authorization/roles"},"Roles"),", Access Policies determine what users are allowed to do on DataHub."),(0,a.yg)("h2",{id:"policy-types"},"Policy Types"),(0,a.yg)("p",null,"There are 2 types of Access Policy within DataHub:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Platform")," Policies"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Metadata")," Policies")),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-policy-type.png"})),(0,a.yg)("h2",{id:"platform"},"Platform"),(0,a.yg)("p",null,"Policies determine who has platform-level Privileges on DataHub. These include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Managing Users & Groups"),(0,a.yg)("li",{parentName:"ul"},"Viewing the DataHub Analytics Page"),(0,a.yg)("li",{parentName:"ul"},"Managing Policies themselves")),(0,a.yg)("p",null,"Platform policies can be broken down into 2 parts:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Privileges"),': Which privileges should be assigned to the Actors (e.g. "View Analytics")'),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Actors"),": Who the should be granted the privileges (Users, or Groups)")),(0,a.yg)("p",null,"A few Platform Policies in plain English include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The Data Platform team should be allowed to manage users & groups, view platform analytics, & manage policies themselves"),(0,a.yg)("li",{parentName:"ul"},"John from IT should be able to invite new users")),(0,a.yg)("h2",{id:"metadata"},"Metadata"),(0,a.yg)("p",null,"Metadata policies determine who can do what to which Metadata Entities. For example:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Who can edit Dataset Documentation & Links?"),(0,a.yg)("li",{parentName:"ul"},"Who can add Owners to a Chart?"),(0,a.yg)("li",{parentName:"ul"},"Who can add Tags to a Dashboard?")),(0,a.yg)("p",null,"Metadata policies can be broken down into 3 parts:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Privileges"),": The 'what'. What actions are being permitted by a Policy, e.g. \"Add Tags\"."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Resources"),": The 'which'. Resources that the Policy applies to, e.g. \"All Datasets\"."),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Actors"),": The 'who'. Specific users, groups, & roles that the Policy applies to.")),(0,a.yg)("p",null,"A few ",(0,a.yg)("strong",{parentName:"p"},"Metadata")," Policies in plain English include: "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Dataset Owners should be allowed to edit documentation, but not Tags."),(0,a.yg)("li",{parentName:"ul"},"Jenny, our Data Steward, should be allowed to edit Tags for any Dashboard, but no other metadata."),(0,a.yg)("li",{parentName:"ul"},"James, a Data Analyst, should be allowed to edit the Links for a specific Data Pipeline he is a downstream consumer of.")),(0,a.yg)("p",null,"Each of these can be implemented by constructing DataHub Access Policies."),(0,a.yg)("h2",{id:"using-access-policies"},"Using Access Policies"),(0,a.yg)("admonition",{title:"Required Access",type:"note"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Manage Policies")," Privilege")),(0,a.yg)("p",{parentName:"admonition"},"This Platform Privilege allows users to create, edit, and remove all Access Policies on DataHub. Therefore, it should only be\ngiven to those users who will be serving as Admins of the platform. The default ",(0,a.yg)("inlineCode",{parentName:"p"},"Admin")," role has this Privilege.")),(0,a.yg)("p",null,"Policies can be created by first navigating to ",(0,a.yg)("strong",{parentName:"p"},"Settings > Permissions > Policies"),"."),(0,a.yg)("p",null,"To begin building a new Policy, click ",(0,a.yg)("strong",{parentName:"p"},"Create new Policy"),"."),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/manage-permissions.png"})),(0,a.yg)("h3",{id:"creating-a-platform-policy"},"Creating a Platform Policy"),(0,a.yg)("h4",{id:"step-1-provide-a-name--description"},"Step 1. Provide a Name & Description"),(0,a.yg)("p",null,"In the first step, we select the ",(0,a.yg)("strong",{parentName:"p"},"Platform")," Policy type, and define a name and description for the new Policy. "),(0,a.yg)("p",null,'Good Policy names describe the high-level purpose of the Policy. For example, a Policy named\n"View DataHub Analytics - Data Governance Team" would be a great way to describe a Platform\nPolicy which grants abilities to view DataHub\'s Analytics view to anyone on the Data Governance team. '),(0,a.yg)("p",null,"You can optionally provide a text description to add richer details about the purpose of the Policy."),(0,a.yg)("h4",{id:"step-2-configure-privileges"},"Step 2: Configure Privileges"),(0,a.yg)("p",null,"In the second step, we can simply select the Privileges that this Platform Policy will grant."),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-platform-privileges.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Platform")," Privileges most often provide access to perform administrative functions on the Platform.\nRefer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/authorization/policies#platform-level-privileges"},"Policies Guide")," for a complete list of these privileges."),(0,a.yg)("h4",{id:"step-3-choose-policy-actors"},"Step 3: Choose Policy Actors"),(0,a.yg)("p",null,"In this step, we can select the actors who should be granted Privileges appearing on this Policy."),(0,a.yg)("p",null,"To do so, simply search and select the Users or Groups that the Policy should apply to."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Assigning a Policy to a User")),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-users.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Assigning a Policy to a Group")),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-groups.png"})),(0,a.yg)("h3",{id:"creating-a-metadata-policy"},"Creating a Metadata Policy"),(0,a.yg)("h4",{id:"step-1-provide-a-name--description-1"},"Step 1. Provide a Name & Description"),(0,a.yg)("p",null,"In the first step, we select the ",(0,a.yg)("strong",{parentName:"p"},"Metadata")," Policy, and define a name and description for the new Policy."),(0,a.yg)("p",null,'Good Policy names describe the high-level purpose of the Policy. For example, a Policy named\n"Full Dataset Edit Privileges - Data Platform Engineering" would be a great way to describe a Metadata\nPolicy which grants all abilities to edit Dataset Metadata to anyone in the "Data Platform" group.'),(0,a.yg)("p",null,"You can optionally provide a text description to add richer detail about the purpose of the Policy."),(0,a.yg)("h4",{id:"step-2-configure-privileges-1"},"Step 2: Configure Privileges"),(0,a.yg)("p",null,"In the second step, we can simply select the Privileges that this Metadata Policy will grant.\nTo begin, we should first determine which assets that the Privileges should be granted for (i.e. the ",(0,a.yg)("em",{parentName:"p"},"scope"),"), then\nselect the appropriate Privileges to grant."),(0,a.yg)("p",null,"Using the ",(0,a.yg)("inlineCode",{parentName:"p"},"Resource Type")," selector, we can narrow down the ",(0,a.yg)("em",{parentName:"p"},"type")," of the assets that the Policy applies to. If left blank,\nall entity types will be in scope."),(0,a.yg)("p",null,"For example, if we only want to grant access for ",(0,a.yg)("inlineCode",{parentName:"p"},"Datasets")," on DataHub, we can select\n",(0,a.yg)("inlineCode",{parentName:"p"},"Datasets"),"."),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-resource-type.png"})),(0,a.yg)("p",null,"Next, we can search for specific Entities of the that the Policy should grant privileges on.\nIf left blank, all entities of the selected types are in scope."),(0,a.yg)("p",null,"For example, if we only want to grant access for a specific sample dataset, we can search and\nselect it directly."),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-resource-urn.png"})),(0,a.yg)("p",null,"We can also limit the scope of the Policy to assets that live in a specific ",(0,a.yg)("strong",{parentName:"p"},"Domain"),". If left blank,\nentities from all Domains will be in scope."),(0,a.yg)("p",null,'For example, if we only want to grant access for assets part of a "Marketing" Domain, we can search and\nselect it.'),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-resource-domain.png"})),(0,a.yg)("p",null,"Finally, we will choose the Privileges to grant when the selected entities fall into the defined\nscope."),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-metadata-privileges.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Metadata")," Privileges grant access to change specific ",(0,a.yg)("em",{parentName:"p"},"entities")," (i.e. data assets) on DataHub.\nThese include ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/authorization/policies#platform-level-privileges"},(0,a.yg)("strong",{parentName:"a"},"common metadata privileges"))," that span across entity types, as well as ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/authorization/policies#specific-entity-level-privileges"},(0,a.yg)("strong",{parentName:"a"},"specific entity-level privileges")),"."),(0,a.yg)("h4",{id:"step-3-choose-policy-actors-1"},"Step 3: Choose Policy Actors"),(0,a.yg)("p",null,"In this step, we can select the actors who should be granted the Privileges on this Policy. Metadata Policies\ncan target specific Users & Groups, or the ",(0,a.yg)("em",{parentName:"p"},"owners")," of the Entities that are included in the scope of the Policy."),(0,a.yg)("p",null,"To do so, simply search and select the Users or Groups that the Policy should apply to."),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-users.png"})),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-groups.png"})),(0,a.yg)("p",null,"We can also grant the Privileges to the ",(0,a.yg)("em",{parentName:"p"},"owners")," of Entities (or ",(0,a.yg)("em",{parentName:"p"},"Resources"),") that are in scope for the Policy.\nThis advanced functionality allows of Admins of DataHub to closely control which actions can or cannot be performed by owners."),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/policies-select-owners.png"})),(0,a.yg)("h3",{id:"updating-an-existing-policy"},"Updating an Existing Policy"),(0,a.yg)("p",null,"To update an existing Policy, simply click the ",(0,a.yg)("strong",{parentName:"p"},"Edit")," on the Policy you wish to change."),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/edit-policy.png"})),(0,a.yg)("p",null,"Then, make the changes required and click ",(0,a.yg)("strong",{parentName:"p"},"Save"),". When you save a Policy, it may take up to 2 minutes for changes\nto be reflected."),(0,a.yg)("h3",{id:"removing-a-policy"},"Removing a Policy"),(0,a.yg)("p",null,"To remove a Policy, simply click on the trashcan icon located on the Policies list. This will remove the Policy and\ndeactivate it so that it no longer applies."),(0,a.yg)("p",null,"When you delete a Policy, it may take up to 2 minutes for changes to be reflected."),(0,a.yg)("h3",{id:"deactivating-a-policy"},"Deactivating a Policy"),(0,a.yg)("p",null,'In addition to deletion, DataHub also supports "deactivating" a Policy. This is useful if you need to temporarily disable\na particular Policy, but do not want to remove it altogether.'),(0,a.yg)("p",null,"To deactivate a Policy, simply click the ",(0,a.yg)("strong",{parentName:"p"},"Deactivate")," button on the Policy you wish to deactivate. When you change\nthe state of a Policy, it may take up to 2 minutes for the changes to be reflected."),(0,a.yg)("p",{align:"center"},(0,a.yg)("img",{width:"80%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/deactivate-policy.png"})),(0,a.yg)("p",null,"After deactivating, you can re-enable a Policy by clicking ",(0,a.yg)("strong",{parentName:"p"},"Activate"),"."),(0,a.yg)("h3",{id:"default-policies"},"Default Policies"),(0,a.yg)("p",null,"Out of the box, DataHub is deployed with a set of pre-baked Policies. This set of policies serves the\nfollowing purposes:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Assigns immutable super-user privileges for the root ",(0,a.yg)("inlineCode",{parentName:"li"},"datahub")," user account (Immutable)"),(0,a.yg)("li",{parentName:"ol"},"Assigns all Platform Privileges for all Users by default (Editable)")),(0,a.yg)("p",null,"The reason for #1 is to prevent people from accidentally deleting all policies and getting locked out (",(0,a.yg)("inlineCode",{parentName:"p"},"datahub")," super user account can be a backup)\nThe reason for #2 is to permit administrators to log in via OIDC or another means outside of the ",(0,a.yg)("inlineCode",{parentName:"p"},"datahub")," root account\nwhen they are bootstrapping with DataHub. This way, those setting up DataHub can start managing Access Policies without friction.\nNote that these Privileges ",(0,a.yg)("em",{parentName:"p"},"can")," and likely ",(0,a.yg)("em",{parentName:"p"},"should")," be changed inside the ",(0,a.yg)("strong",{parentName:"p"},"Policies")," page before onboarding\nyour company's users."),(0,a.yg)("h3",{id:"rest-api-authorization"},"REST API Authorization"),(0,a.yg)("p",null,"Policies only affect REST APIs when the environment variable ",(0,a.yg)("inlineCode",{parentName:"p"},"REST_API_AUTHORIZATION")," is set to ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," for GMS. Some policies only apply when this setting is enabled, marked above, and other Metadata and Platform policies apply to the APIs where relevant, also specified in the table above."),(0,a.yg)("h2",{id:"additional-resources"},"Additional Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/authorization"},"Authorization Overview")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/authorization/roles"},"Roles Overview")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/authorization/groups"},"Authorization using Groups"))),(0,a.yg)("h3",{id:"videos"},"Videos"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://youtu.be/19zQCznqhMI?t=282"},"Introducing DataHub Access Policies"))),(0,a.yg)("h3",{id:"graphql"},"GraphQL"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/graphql/queries#listPolicies"},"listPolicies")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/graphql/mutations#createPolicy"},"createPolicy")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/graphql/mutations#updatePolicy"},"updatePolicy")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.1/graphql/mutations#deletePolicy"},"deletePolicy"))),(0,a.yg)("h2",{id:"faq-and-troubleshooting"},"FAQ and Troubleshooting"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"How do Policies relate to Roles?")),(0,a.yg)("p",null,"Policies are the lowest level primitive for granting Privileges to users on DataHub. "),(0,a.yg)("p",null,"Roles are built for convenience on top of Policies. Roles grant Privileges to actors indirectly, driven by Policies\nbehind the scenes. Both can be used in conjunction to grant Privileges to end users. For more information on roles\nplease refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/0.14.1/authorization/roles"},"Authorization > Roles"),"."))}m.isMDXComponent=!0}}]);