"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[39656],{15680:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>g});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),m=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=m(a),f=n,g=c["".concat(d,".").concat(f)]||c[f]||p[f]||o;return a?r.createElement(g,s(s({ref:t},l),{},{components:a})):r.createElement(g,s({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var m=2;m<o;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},29609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>m,toc:()=>c});a(96540);var r=a(15680);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const i={title:"Introduction",sidebar_label:"Introduction",slug:"/metadata-ingestion/docs/transformer/intro",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/transformer/intro.md"},d="Transformers",m={unversionedId:"metadata-ingestion/docs/transformer/intro",id:"metadata-ingestion/docs/transformer/intro",title:"Introduction",description:"What\u2019s a transformer?",source:"@site/genDocs/metadata-ingestion/docs/transformer/intro.md",sourceDirName:"metadata-ingestion/docs/transformer",slug:"/metadata-ingestion/docs/transformer/intro",permalink:"/docs/metadata-ingestion/docs/transformer/intro",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/transformer/intro.md",tags:[],version:"current",frontMatter:{title:"Introduction",sidebar_label:"Introduction",slug:"/metadata-ingestion/docs/transformer/intro",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/transformer/intro.md"},sidebar:"overviewSidebar",previous:{title:"Metadata File",permalink:"/docs/metadata-ingestion/sink_docs/metadata-file"},next:{title:"Dataset",permalink:"/docs/metadata-ingestion/docs/transformer/dataset_transformer"}},l={},c=[{value:"What\u2019s a transformer?",id:"whats-a-transformer",level:2},{value:"Provided transformers",id:"provided-transformers",level:2}],p={toc:c},f="wrapper";function g(e){var{components:t}=e,a=s(e,["components"]);return(0,r.yg)(f,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"transformers"},"Transformers"),(0,r.yg)("h2",{id:"whats-a-transformer"},"What\u2019s a transformer?"),(0,r.yg)("p",null,"Oftentimes we want to modify metadata before it reaches the ingestion sink \u2013 for instance, we might want to add custom tags, ownership, properties, or patch some fields. A transformer allows us to do exactly these things."),(0,r.yg)("p",null,"Moreover, a transformer allows one to have fine-grained control over the metadata that\u2019s ingested without having to modify the ingestion framework's code yourself. Instead, you can write your own module that can transform metadata events however you like. To include a transformer into a recipe, all that's needed is the name of the transformer as well as any configuration that the transformer needs."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Providing urns for metadata that does not already exist will result in unexpected behavior. Ensure any tags, terms, domains, etc. urns that you want to apply in your transformer already exist in your DataHub instance."),(0,r.yg)("p",{parentName:"admonition"},"For example, adding a domain urn in your transformer to apply to datasets will not create the domain entity if it doesn't exist. Therefore, you can't add documentation to it and it won't show up in Advanced Search. This goes for any metadata you are applying in transformers.")),(0,r.yg)("h2",{id:"provided-transformers"},"Provided transformers"),(0,r.yg)("p",null,"Aside from the option of writing your own transformer (see below), we provide some simple transformers for the use cases of adding: tags, glossary terms, properties and ownership information."),(0,r.yg)("p",null,"DataHub provided transformers for dataset are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-ownership"},"Simple Add Dataset ownership")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-ownership"},"Pattern Add Dataset ownership")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-remove-dataset-ownership"},"Simple Remove Dataset ownership")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#extract-ownership-from-tags"},"Extract Ownership from Tags")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#clean-suffix-prefix-from-ownership"},"Clean suffix prefix from Ownership")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#mark-dataset-status"},"Mark Dataset Status")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-globaltags"},"Simple Add Dataset globalTags")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-globaltags"},"Pattern Add Dataset globalTags")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#add-dataset-globaltags"},"Add Dataset globalTags")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#set-dataset-browsepath"},"Set Dataset browsePath")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-glossaryterms"},"Simple Add Dataset glossaryTerms")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-glossaryterms"},"Pattern Add Dataset glossaryTerms")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#add-dataset-globaltags"},"Add Dataset globalTags")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-schema-field-glossaryterms"},"Pattern Add Dataset Schema Field glossaryTerms")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-schema-field-globaltags"},"Pattern Add Dataset Schema Field globalTags")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-datasetproperties"},"Simple Add Dataset datasetProperties")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#add-dataset-datasetproperties"},"Add Dataset datasetProperties")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-domains"},"Simple Add Dataset domains")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-domains"},"Pattern Add Dataset domains")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#domain-mapping-based-on-tags"},"Domain Mapping Based on Tags"),"  "),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-dataproduct"},"Simple Add Dataset dataProduct ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-dataproduct"},"Pattern Add Dataset dataProduct")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#add-dataset-dataproduct"},"Add Dataset dataProduct"))))}g.isMDXComponent=!0}}]);