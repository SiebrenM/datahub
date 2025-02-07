"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[42476],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},88195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});t(96540);var r=t(15680);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={title:"Developing a Transformer",slug:"/actions/guides/developing-a-transformer",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/guides/developing-a-transformer.md"},s="Developing a Transformer",c={unversionedId:"docs/actions/guides/developing-a-transformer",id:"docs/actions/guides/developing-a-transformer",title:"Developing a Transformer",description:"In this guide, we will outline each step to developing a custom Transformer for the DataHub Actions Framework.",source:"@site/genDocs/docs/actions/guides/developing-a-transformer.md",sourceDirName:"docs/actions/guides",slug:"/actions/guides/developing-a-transformer",permalink:"/docs/actions/guides/developing-a-transformer",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/actions/guides/developing-a-transformer.md",tags:[],version:"current",frontMatter:{title:"Developing a Transformer",slug:"/actions/guides/developing-a-transformer",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/actions/guides/developing-a-transformer.md"},sidebar:"overviewSidebar",previous:{title:"Microsoft Teams",permalink:"/docs/actions/actions/teams"},next:{title:"Developing an Action",permalink:"/docs/actions/guides/developing-an-action"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"Step 1: Defining a Transformer",id:"step-1-defining-a-transformer",level:2},{value:"Step 2: Installing the Transformer",id:"step-2-installing-the-transformer",level:2},{value:"Advanced: Installing as a Package",id:"advanced-installing-as-a-package",level:3},{value:"Step 3: Running the Action",id:"step-3-running-the-action",level:2},{value:"(Optional) Step 4: Contributing the Transformer",id:"optional-step-4-contributing-the-transformer",level:3},{value:"Prerequisites:",id:"prerequisites",level:4}],m={toc:u},f="wrapper";function d(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(f,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"developing-a-transformer"},"Developing a Transformer"),(0,r.yg)("p",null,"In this guide, we will outline each step to developing a custom Transformer for the DataHub Actions Framework."),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"Developing a DataHub Actions Transformer is a matter of extending the ",(0,r.yg)("inlineCode",{parentName:"p"},"Transformer")," base class in Python, installing your\nTransformer to make it visible to the framework, and then configuring the framework to use the new Transformer."),(0,r.yg)("h2",{id:"step-1-defining-a-transformer"},"Step 1: Defining a Transformer"),(0,r.yg)("p",null,"To implement an Transformer, we'll need to extend the ",(0,r.yg)("inlineCode",{parentName:"p"},"Transformer")," base class and override the following functions:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"create()")," - This function is invoked to instantiate the action, with a free-form configuration dictionary\nextracted from the Actions configuration file as input."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"transform()")," - This function is invoked when an Event is received. It should contain the core logic of the Transformer.\nand will return the transformed Event, or ",(0,r.yg)("inlineCode",{parentName:"li"},"None")," if the Event should be filtered.")),(0,r.yg)("p",null,"Let's start by defining a new implementation of Transformer called ",(0,r.yg)("inlineCode",{parentName:"p"},"CustomTransformer"),". We'll keep it simple-- this Transformer will\nprint the configuration that is provided when it is created, and print any Events that it receives."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'# custom_transformer.py\nfrom datahub_actions.transform.transformer import Transformer\nfrom datahub_actions.event.event_envelope import EventEnvelope\nfrom datahub_actions.pipeline.pipeline_context import PipelineContext\nfrom typing import Optional\n\nclass CustomTransformer(Transformer):\n    @classmethod\n    def create(cls, config_dict: dict, ctx: PipelineContext) -> "Transformer":\n        # Simply print the config_dict.\n        print(config_dict)\n        return cls(config_dict, ctx)\n\n    def __init__(self, ctx: PipelineContext):\n        self.ctx = ctx\n\n    def transform(self, event: EventEnvelope) -> Optional[EventEnvelope]:\n        # Simply print the received event.\n        print(event)\n        # And return the original event (no-op)\n        return event\n')),(0,r.yg)("h2",{id:"step-2-installing-the-transformer"},"Step 2: Installing the Transformer"),(0,r.yg)("p",null,"Now that we've defined the Transformer, we need to make it visible to the framework by making\nit available in the Python runtime environment."),(0,r.yg)("p",null,"The easiest way to do this is to just place it in the same directory as your configuration file, in which case the module name is the same as the file\nname - in this case it will be ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_transformer"),"."),(0,r.yg)("h3",{id:"advanced-installing-as-a-package"},"Advanced: Installing as a Package"),(0,r.yg)("p",null,"Alternatively, create a ",(0,r.yg)("inlineCode",{parentName:"p"},"setup.py")," file in the same directory as the new Transformer to convert it into a package that pip can understand."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'from setuptools import find_packages, setup\n\nsetup(\n    name="custom_transformer_example",\n    version="1.0",\n    packages=find_packages(),\n    # if you don\'t already have DataHub Actions installed, add it under install_requires\n    # install_requires=["acryl-datahub-actions"]\n)\n')),(0,r.yg)("p",null,"Next, install the package"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pip install -e .\n")),(0,r.yg)("p",null,"inside the module. (alt.",(0,r.yg)("inlineCode",{parentName:"p"},"python setup.py"),")."),(0,r.yg)("p",null,"Once we have done this, our class will be referencable via ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_transformer_example.custom_transformer:CustomTransformer"),"."),(0,r.yg)("h2",{id:"step-3-running-the-action"},"Step 3: Running the Action"),(0,r.yg)("p",null,"Now that we've defined our Transformer, we can create an Action configuration file that refers to the new Transformer.\nWe will need to provide the fully-qualified Python module & class name when doing so."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Example Configuration")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'# custom_transformer_action.yaml\nname: "custom_transformer_test"\nsource:\n  type: "kafka"\n  config:\n    connection:\n      bootstrap: ${KAFKA_BOOTSTRAP_SERVER:-localhost:9092}\n      schema_registry_url: ${SCHEMA_REGISTRY_URL:-http://localhost:8081}\ntransform:\n  - type: "custom_transformer_example.custom_transformer:CustomTransformer"\n    config:\n      # Some sample configuration which should be printed on create.\n      config1: value1\naction:\n  # Simply reuse the default hello_world action\n  type: "hello_world"\n')),(0,r.yg)("p",null,"Next, run the ",(0,r.yg)("inlineCode",{parentName:"p"},"datahub actions")," command as usual:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"datahub actions -c custom_transformer_action.yaml\n")),(0,r.yg)("p",null,"If all is well, your Transformer should now be receiving & printing Events."),(0,r.yg)("h3",{id:"optional-step-4-contributing-the-transformer"},"(Optional) Step 4: Contributing the Transformer"),(0,r.yg)("p",null,"If your Transformer is generally applicable, you can raise a PR to include it in the core Transformer library\nprovided by DataHub. All Transformers will live under the ",(0,r.yg)("inlineCode",{parentName:"p"},"datahub_actions/plugin/transform")," directory inside the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/acryldata/datahub-actions"},"datahub-actions")," repository."),(0,r.yg)("p",null,"Once you've added your new Transformer there, make sure that you make it discoverable by updating the ",(0,r.yg)("inlineCode",{parentName:"p"},"entry_points")," section\nof the ",(0,r.yg)("inlineCode",{parentName:"p"},"setup.py")," file. This allows you to assign a globally unique name for you Transformer, so that people can use\nit without defining the full module path."),(0,r.yg)("h4",{id:"prerequisites"},"Prerequisites:"),(0,r.yg)("p",null,"Prerequisites to consideration for inclusion in the core Transformer library include"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Testing")," Define unit tests for your Transformer"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Deduplication")," Confirm that no existing Transformer serves the same purpose, or can be easily extended to serve the same purpose")))}d.isMDXComponent=!0}}]);