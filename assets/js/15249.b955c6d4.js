"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[15249],{15249:(e,r,t)=>{t.r(r),t.d(r,{SearchView:()=>y});var a=t(74848),s=t(23854),n=t(96540),i=t(3610);const c=(0,n.memo)((function({value:e,match:r}){if(!r||""===r)return(0,a.jsx)(a.Fragment,{children:e});const t=e?e.split(""):[],s=r.trim().replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"),i=RegExp("("+s.replaceAll(" ","|")+")","ig");let c,o=0,l=0;const u=[];if(e)for(;null!==(c=i.exec(e));)u.push((0,a.jsxs)(n.Fragment,{children:[t.splice(0,c.index-l).join(""),(0,a.jsx)("span",{className:"MarkpromptMatch",children:t.splice(0,i.lastIndex-c.index).join("")})]},o++)),l=i.lastIndex;return(0,a.jsxs)(a.Fragment,{children:[u,t.join("")]})})),o=(0,n.forwardRef)(((e,r)=>{const{href:t,title:s,heading:n,subtitle:o,onMouseMove:l,onClick:u,searchQuery:p,linkAs:d,...h}=e,m=d??"a";return(0,a.jsx)("li",{...h,ref:r,className:"MarkpromptSearchResult",children:(0,a.jsx)(m,{href:t,className:"MarkpromptSearchResultLink",children:(0,a.jsxs)("div",{onMouseMove:l,onClick:u,className:"MarkpromptSearchResultContainer",children:[(0,a.jsx)("div",{className:"MarkpromptSearchResultIconWrapper MarkpromptSearchResultIconWrapperBordered",children:t?.includes("#")?(0,a.jsx)(i.Se,{className:"MarkpromptSearchResultIcon"}):(0,a.jsx)(i.ds,{className:"MarkpromptSearchResultIcon"})}),(0,a.jsxs)("div",{className:"MarkpromptSearchResultContentWrapper",children:[n&&(0,a.jsx)("div",{className:"MarkpromptSearchResultHeading",children:(0,a.jsx)(c,{value:n,match:p})}),(0,a.jsx)("div",{className:"MarkpromptSearchResultTitle",children:(0,a.jsx)(c,{value:s,match:p})}),o&&(0,a.jsx)("div",{className:"MarkpromptSearchResultSubtitle",children:(0,a.jsx)(c,{value:o,match:p})})]})]})})})}));o.displayName="Markprompt.SearchResult";var l=t(58849);const u={limit:8,apiUrl:"https://api.markprompt.com/search"};const p=(e,r,t={})=>{if(!Number.isFinite(r))throw new TypeError("Expected `wait` to be a finite number");let a,s,n=[];return function(...i){return new Promise((c=>{const o=t.before&&!s;clearTimeout(s),s=setTimeout((()=>{s=null;const r=t.before?a:e.apply(this,i);for(c of n)c(r);n=[]}),r),o?(a=e.apply(this,i),c(a)):n.push(c)}))}};p.promise=e=>{let r;return async function(...t){if(r)return r;try{return r=e.apply(this,t),await r}finally{r=void 0}}};const d=p;var h=t(86645),m=t(37505);function k({debug:e,projectKey:r,searchOptions:t}){const[a,s]=(0,n.useState)("indeterminate"),[i,c]=(0,n.useState)(""),[o,p]=(0,n.useState)([]),{ref:k,abort:f}=(0,m.I)(),g=(0,n.useCallback)((a=>{if(f(),""===a)return k.current&&k.current.abort(),p([]),void s("indeterminate");s("preload");const n=new AbortController;let i;k.current=n,i="algolia"===t?.provider?.name?async function(e,r){try{const t=r?.provider;if("algolia"!==t?.name)throw new Error(`Unknown provider: ${t?.name}`);const{limit:a=u.limit}=r??{},s=await fetch(`https://${t.appId}-dsn.algolia.net/1/indexes/${t.indexName}/query`,{method:"POST",body:JSON.stringify({query:e,hitsPerPage:a,getRankingInfo:1,...r?.provider?.searchParameters}),signal:r?.signal,headers:{"X-Algolia-API-Key":t.apiKey,"X-Algolia-Application-Id":t.appId}});if(!s.ok){const e=await(0,l.u1)(s);throw new Error(`Failed to fetch search results: ${e||"Unknown error"}`)}return s.json()}catch(t){if((0,l.zf)(t))return;throw t}}(a,{...t,signal:n.signal}).then((e=>e?.hits||[])):async function(e,r,t){try{const{limit:a=u.limit,apiUrl:s=u.apiUrl}=t??{},n=new URLSearchParams({query:e,projectKey:r,limit:String(a)}),i=await fetch(`${s}?${n.toString()}`,{method:"GET",signal:t?.signal,headers:new Headers({"X-Markprompt-API-Version":"2023-12-01"})});if(!i.ok){const e=await(0,l.u1)(i);throw new Error(`Failed to fetch search results: ${e||"Unknown error"}`)}return i.json()}catch(a){if((0,l.zf)(a))return;throw a}}(a,r,{...t,signal:n.signal}).then((r=>(e&&console.debug(JSON.stringify(r?.debug,null,2)),r?.data||[]))),i.then((e=>{n.signal.aborted||e&&(p(function(e,r,t){return r.map((r=>({href:(t?.getHref||h.V.search.getHref)?.(r),heading:(t?.getHeading||h.V.search.getHeading)?.(r,e),title:(t?.getTitle||h.V.search.getTitle)?.(r,e)||"Untitled",subtitle:(t?.getSubtitle||h.V.search.getSubtitle)?.(r,e)})))}(a,e,t)??[]),s("done"))})),i?.catch((e=>{(0,l.zf)(e)||console.error(e)})),i?.finally((()=>{k.current===n&&(k.current=void 0)}))}),[t,f,k,r,e]);return{state:a,searchResults:o,searchQuery:i,setSearchQuery:c,submitSearchQuery:d(g,220),abort:f}}var f=t(83668),g=t(16881);const S="markprompt-search";function y(e){const{activeView:r,debug:t,onDidSelectResult:c,onDidSelectAsk:o,projectKey:l}=e;if(!l)throw new Error("Markprompt: a project key is required. Make sure to pass your Markprompt project key to <SearchView />.");const u=(0,g.o)({...e.searchOptions},h.V.search),p=(0,n.useRef)(null),{abort:d,searchResults:m,searchQuery:y,state:v,setSearchQuery:j,submitSearchQuery:w}=k({debug:t,projectKey:l,searchOptions:u}),[x,M]=(0,n.useState)(),R="panels"===e.layout&&y.trim().includes(" "),N=(0,n.useMemo)((()=>"ask"===x?.id),[x?.id]);(0,n.useEffect)((()=>{R||N||M(void 0)}),[y,R,N]),(0,n.useEffect)((()=>{R?M({id:"ask"}):m.length>0&&M({id:"markprompt-result-0"})}),[m,R]),(0,n.useEffect)((()=>{p.current?.focus()}),[r]),(0,n.useEffect)((()=>(r&&"search"!==r&&d(),()=>d())),[d,r]);const A=(0,n.useCallback)((e=>{switch(e.key){case"ArrowDown":{if(!x)return;const r=u?.defaultView?.searches||[],t=m.length+r.length;if("ask"!==x.id&&x.id?.endsWith(""+(t-1)))return;let a;e.preventDefault(),a="ask"===x.id?"markprompt-result-0":x.id?.replace(/\d+$/,(e=>String(Number(e)+1))),M({id:a,trigger:"keyboard"});if(!document.querySelector(`#${a} > a`))return;break}case"ArrowUp":{if(!x)return;if(x.id?.endsWith("-0"))return void(R&&(e.preventDefault(),M({id:"ask",trigger:"keyboard"})));e.preventDefault();const r=x.id?.replace(/\d+$/,(e=>String(Number(e)-1)));M({id:r,trigger:"keyboard"});if(!document.querySelector(`#${r} > a`))return;break}case"Enter":{if(e.ctrlKey||e.metaKey)return;if(!x&&!R)return;if(e.preventDefault(),!x||"ask"===x.id){const e=document.querySelector("#ask");return void e?.click()}if(!x)return;const r=document.querySelector(`#${x.id} a`);if(!r)return;r.click();break}}}),[x,m.length,u?.defaultView?.searches,R]),I=(0,n.useCallback)((e=>{j(e.target.value),w(e.target.value)}),[j,w]),C=(0,n.useCallback)((async e=>{e.preventDefault(),await w(y)}),[y,w]);return(0,a.jsxs)("div",{className:"MarkpromptSearchView",children:[(0,a.jsx)(f.lV,{className:"MarkpromptForm",onSubmit:C,children:(0,a.jsxs)("div",{className:"MarkpromptPromptWrapper",children:[(0,a.jsx)(f.XG,{ref:p,className:"MarkpromptPrompt",name:S,placeholder:u?.placeholder,labelClassName:"MarkpromptPromptLabel",value:y,onChange:I,onKeyDown:A,showSubmitButton:!1,"aria-controls":"markprompt-search-results","aria-activedescendant":x?.id,label:(0,a.jsx)(s.b,{label:u?.label,children:(0,a.jsx)(i.WI,{className:"MarkpromptSearchIconAccented"})})}),(0,a.jsxs)("button",{className:u.askLabel?"MarkpromptBorderedButton":"MarkpromptGhostButton",type:"button",style:{flexGrow:"none",marginRight:"0.25rem"},onClick:()=>o?.(),children:[(0,a.jsx)(i.BZ,{style:u.askLabel?{width:16,height:16,opacity:.4}:{width:18,height:18}}),u.askLabel&&(0,a.jsx)("span",{children:u.askLabel})]})]})}),(0,a.jsx)(b,{activeSearchResult:x,onDidSelectResult:c,onDidSelectAsk:()=>o?.(y),searchQuery:y,searchResults:m,searchOptions:u,linkAs:e.linkAs,setActiveSearchResult:M,state:v,isAskVisible:R})]})}function b(e){const{searchQuery:r,searchResults:t,state:s,activeSearchResult:c,setActiveSearchResult:l,onDidSelectResult:u,onDidSelectAsk:p,searchOptions:d,linkAs:h,isAskVisible:m}=e,k=(0,n.useRef)(null);return(0,n.useEffect)((()=>{const e=e=>{if("ArrowDown"===e.key&&void 0===c&&(t.length>0||(d?.defaultView?.searches||[]).length>0)){l({id:"markprompt-result-0",trigger:"keyboard"});const e=document.querySelector(`#${S}`);e instanceof HTMLInputElement&&e.focus()}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[c,t,l,d?.defaultView?.searches]),(0,n.useEffect)((()=>{if(!c?.id||"keyboard"!==c.trigger)return;const e=document.getElementById(c.id);e?.focus(),e?.scrollIntoView({block:"nearest"})}),[c,t]),(0,a.jsxs)("div",{className:"MarkpromptSearchResultsContainer",children:[m&&(0,a.jsx)("div",{className:"MarkpromptSearchResult","aria-selected":!c?.id||"ask"===c.id,id:"ask",style:{cursor:"pointer"},onMouseMove:()=>{if("ask"!==k?.current)return k.current="ask",l({id:"ask",trigger:"mouse"}),!0},onClick:p,children:(0,a.jsx)("div",{className:"MarkpromptSearchResultLink",children:(0,a.jsxs)("div",{className:"MarkpromptSearchResultContainer",children:[(0,a.jsx)("div",{className:"MarkpromptSearchResultIconWrapper MarkpromptSearchResultIconWrapperBordered",children:(0,a.jsx)(i.BZ,{className:"MarkpromptSearchResultIcon"})}),(0,a.jsx)("div",{className:"MarkpromptSearchResultContentWrapper",children:(0,a.jsxs)("div",{className:"MarkpromptSearchResultTitle",children:[(0,a.jsxs)("span",{className:"MarkpromptSearchResultTitleAccent",children:[d?.askLabel??"Ask AI",":"]})," ",r]})}),(0,a.jsx)(i.vK,{className:"MarkpromptSearchResultIcon"})]})})}),"done"===s&&0===t.length&&r.trim().length>0&&(0,a.jsx)("div",{className:"MarkpromptNoSearchResults",children:(0,a.jsxs)("p",{children:["No matches found for ",(0,a.jsxs)("span",{children:["\u201c",r,"\u201d"]})]})}),(0,a.jsx)(f.LT,{searchResults:t,searchOptions:d,className:"MarkpromptSearchResults",headingClassName:"MarkpromptSearchResultSectionHeading",SearchResultComponent:({index:e,...t})=>{const s=`markprompt-result-${e}`;return(0,a.jsx)(o,{...t,id:s,searchQuery:r,onMouseMove:()=>(k?.current===s||(k.current=s,l({id:s,trigger:"mouse"})),!0),onClick:()=>{u?.()},"aria-selected":s===c?.id,linkAs:h})}})]})}}}]);