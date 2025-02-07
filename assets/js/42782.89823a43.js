"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[42782],{33154:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(96540),a=r(20053),l=r(73447),o=r(9868),i=r(2775),s=r(6490);const c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m({sidebar:e}){return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,a.A)(c.sidebar,"thin-scrollbar"),"aria-label":(0,s.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,a.A)(c.sidebarItemTitle,"margin-bottom--md")},e.title),n.createElement("ul",{className:(0,a.A)(c.sidebarItemList,"clean-list")},e.items.map((e=>n.createElement("li",{key:e.permalink,className:c.sidebarItem},n.createElement(i.A,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=r(93911);function d({sidebar:e}){return n.createElement("ul",{className:"menu__list"},e.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return n.createElement(u.GX,{component:d,props:e})}function p({sidebar:e}){const t=(0,o.l)();return(null==e?void 0:e.items.length)?"mobile"===t?n.createElement(g,{sidebar:e}):n.createElement(m,{sidebar:e}):null}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function f(e){const{sidebar:t,toc:r,children:o}=e,i=b(e,["sidebar","toc","children"]),s=t&&t.items.length>0;return n.createElement(l.A,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(p,{sidebar:t}),n.createElement("main",{className:(0,a.A)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),r&&n.createElement("div",{className:"col col--2"},r))))}},38047:(e,t,r)=>{r.d(t,{A:()=>M});var n=r(96540),a=r(20053),l=r(34854),o=r(53040);function i({children:e,className:t}){const{frontMatter:r,assets:a,metadata:{description:i}}=(0,l.e)(),{withBaseUrl:s}=(0,o.h)();var c;const m=null!==(c=a.image)&&void 0!==c?c:r.image;var u;const d=null!==(u=r.keywords)&&void 0!==u?u:[];return n.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&n.createElement("meta",{itemProp:"description",content:i}),m&&n.createElement("link",{itemProp:"image",href:s(m,{absolute:!0})}),d.length>0&&n.createElement("meta",{itemProp:"keywords",content:d.join(",")}),e)}var s=r(2775);const c={title:"title_f1Hy"};function m({className:e}){const{metadata:t,isBlogPostPage:r}=(0,l.e)(),{permalink:o,title:i}=t,m=r?"h1":"h2";return n.createElement(m,{className:(0,a.A)(c.title,e),itemProp:"headline"},r?i:n.createElement(s.A,{itemProp:"url",to:o},i))}var u=r(6490),d=r(74972);const g={container:"container_mt6G"};function p({readingTime:e}){const t=function(){const{selectMessage:e}=(0,d.W)();return t=>{const r=Math.ceil(t);return e(r,(0,u.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}}();return n.createElement(n.Fragment,null,t(e))}function b({date:e,formattedDate:t}){return n.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function f(){return n.createElement(n.Fragment,null," \xb7 ")}function h({className:e}){const{metadata:t}=(0,l.e)(),{date:r,formattedDate:o,readingTime:i}=t;return n.createElement("div",{className:(0,a.A)(g.container,"margin-vert--md",e)},n.createElement(b,{date:r,formattedDate:o}),void 0!==i&&n.createElement(n.Fragment,null,n.createElement(f,null),n.createElement(p,{readingTime:i})))}function E(e){return e.href?n.createElement(s.A,e):n.createElement(n.Fragment,null,e.children)}function v({author:e,className:t}){const{name:r,title:l,url:o,imageURL:i,email:s}=e,c=o||s&&`mailto:${s}`||void 0;return n.createElement("div",{className:(0,a.A)("avatar margin-bottom--sm",t)},i&&n.createElement(E,{href:c,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:r,itemProp:"image"})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(E,{href:c,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const P={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){y(e,t,r[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function A({className:e}){const{metadata:{authors:t},assets:r}=(0,l.e)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));return n.createElement("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",o?P.imageOnlyAuthorRow:"row",e)},t.map(((e,t)=>{var l;return n.createElement("div",{className:(0,a.A)(!o&&"col col--6",o?P.imageOnlyAuthorCol:P.authorCol),key:t},n.createElement(v,{author:w(O({},e),{imageURL:null!==(l=r.authorsImageUrls[t])&&void 0!==l?l:e.imageURL})}))})))}function N(){return n.createElement("header",null,n.createElement(m,null),n.createElement(h,null),n.createElement(A,null))}var k=r(83405),_=r(38072);function j({children:e,className:t}){const{isBlogPostPage:r}=(0,l.e)();return n.createElement("div",{id:r?k.blogPostContainerID:void 0,className:(0,a.A)("markdown",t),itemProp:"articleBody"},n.createElement(_.A,null,e))}var I=r(47307),T=r(26146);function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function B(){return n.createElement("b",null,n.createElement(u.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function D(e){const{blogPostTitle:t}=e,r=L(e,["blogPostTitle"]);return n.createElement(s.A,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){F(e,t,r[t])}))}return e}({"aria-label":(0,u.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},r),n.createElement(B,null))}const x={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function C(){const{metadata:e,isBlogPostPage:t}=(0,l.e)(),{tags:r,title:o,editUrl:i,hasTruncateMarker:s}=e,c=!t&&s,m=r.length>0;return m||c||i?n.createElement("footer",{className:(0,a.A)("row docusaurus-mt-lg",t&&x.blogPostFooterDetailsFull)},m&&n.createElement("div",{className:(0,a.A)("col",{"col--9":c})},n.createElement(T.A,{tags:r})),t&&i&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(I.A,{editUrl:i})),c&&n.createElement("div",{className:(0,a.A)("col text--right",{"col--3":m})},n.createElement(D,{blogPostTitle:o,to:e.permalink}))):null}function M({children:e,className:t}){const r=function(){const{isBlogPostPage:e}=(0,l.e)();return e?void 0:"margin-bottom--xl"}();return n.createElement(i,{className:(0,a.A)(r,t)},n.createElement(N,null),n.createElement(j,null,e),n.createElement(C,null))}},34854:(e,t,r)=>{r.d(t,{e:()=>i,i:()=>o});var n=r(96540),a=r(22651);const l=n.createContext(null);function o({children:e,content:t,isBlogPostPage:r=!1}){const a=function({content:e,isBlogPostPage:t}){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:r});return n.createElement(l.Provider,{value:a},e)}function i(){const e=(0,n.useContext)(l);if(null===e)throw new a.dV("BlogPostProvider");return e}},74972:(e,t,r)=>{r.d(t,{W:()=>c});var n=r(96540),a=r(31243);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=s();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=r.select(t),l=r.pluralForms.indexOf(a);return n[Math.min(l,n.length-1)]}(r,t,e)}}}}]);