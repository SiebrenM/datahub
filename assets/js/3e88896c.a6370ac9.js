"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[36551],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,h=d["".concat(i,".").concat(p)]||d[p]||g[p]||a;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},57496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});r(96540);var n=r(15680);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={title:"How to Extract Logs from DataHub Containers",slug:"/how/extract-container-logs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/extract-container-logs.md"},i="How to Extract Logs from DataHub Containers",s={unversionedId:"docs/how/extract-container-logs",id:"version-0.14.1/docs/how/extract-container-logs",title:"How to Extract Logs from DataHub Containers",description:"DataHub containers, datahub GMS (backend server) and datahub frontend (UI server), write log files to the local container filesystem. To extract these logs, you'll need to get them from inside the container where the services are running.",source:"@site/versioned_docs/version-0.14.1/docs/how/extract-container-logs.md",sourceDirName:"docs/how",slug:"/how/extract-container-logs",permalink:"/docs/0.14.1/how/extract-container-logs",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/extract-container-logs.md",tags:[],version:"0.14.1",frontMatter:{title:"How to Extract Logs from DataHub Containers",slug:"/how/extract-container-logs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/extract-container-logs.md"},sidebar:"overviewSidebar",previous:{title:"Deployment Environment Variables",permalink:"/docs/0.14.1/deploy/environment-vars"},next:{title:"Overview",permalink:"/docs/0.14.1/authentication"}},u={},d=[{value:"Step 1: Find the id of the container you&#39;re interested in",id:"step-1-find-the-id-of-the-container-youre-interested-in",level:2},{value:"Docker &amp; Docker Compose",id:"docker--docker-compose",level:3},{value:"Kubernetes &amp; Helm",id:"kubernetes--helm",level:3},{value:"Step 2: Find the log files",id:"step-2-find-the-log-files",level:2},{value:"Docker &amp; Docker Compose",id:"docker--docker-compose-1",level:3},{value:"Kubernetes &amp; Helm",id:"kubernetes--helm-1",level:3},{value:"Step 3: Save Container Log File to Local",id:"step-3-save-container-log-file-to-local",level:2},{value:"Docker &amp; Docker Compose",id:"docker--docker-compose-2",level:3},{value:"Kubernetes &amp; Helm",id:"kubernetes--helm-2",level:3}],g={toc:d},p="wrapper";function h(e){var{components:t}=e,r=l(e,["components"]);return(0,n.yg)(p,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"how-to-extract-logs-from-datahub-containers"},"How to Extract Logs from DataHub Containers"),(0,n.yg)("p",null,"DataHub containers, datahub GMS (backend server) and datahub frontend (UI server), write log files to the local container filesystem. To extract these logs, you'll need to get them from inside the container where the services are running."),(0,n.yg)("p",null,"You can do so easily using the Docker CLI if you're deploying with vanilla docker or compose, and kubectl if you're on K8s. "),(0,n.yg)("h2",{id:"step-1-find-the-id-of-the-container-youre-interested-in"},"Step 1: Find the id of the container you're interested in"),(0,n.yg)("p",null,"You'll first need to get the id of the container that you'd like to extract logs for. For example, datahub-gms."),(0,n.yg)("h3",{id:"docker--docker-compose"},"Docker & Docker Compose"),(0,n.yg)("p",null,"To do so, you can view all containers that Docker knows about by running the following command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'johnjoyce@Johns-MBP datahub-fork % docker container ls\nCONTAINER ID   IMAGE                                   COMMAND                  CREATED      STATUS                  PORTS                                                      NAMES\n6c4a280bc457   acryldata/datahub-frontend-react   "datahub-frontend/bi\u2026"   5 days ago   Up 46 hours (healthy)   0.0.0.0:9002->9002/tcp                                     datahub-frontend-react\n122a2488ab63   acryldata/datahub-gms              "/bin/sh -c /datahub\u2026"   5 days ago   Up 5 days (healthy)     0.0.0.0:8080->8080/tcp                                     datahub-gms\n7682dcc64afa   confluentinc/cp-schema-registry:5.4.0   "/etc/confluent/dock\u2026"   5 days ago   Up 5 days               0.0.0.0:8081->8081/tcp                                     schema-registry\n3680fcaef3ed   confluentinc/cp-kafka:5.4.0             "/etc/confluent/dock\u2026"   5 days ago   Up 5 days               0.0.0.0:9092->9092/tcp, 0.0.0.0:29092->29092/tcp           broker\n9d6730ddd4c4   neo4j:4.0.6                             "/sbin/tini -g -- /d\u2026"   5 days ago   Up 5 days               0.0.0.0:7474->7474/tcp, 7473/tcp, 0.0.0.0:7687->7687/tcp   neo4j\nc97edec663af   confluentinc/cp-zookeeper:5.4.0         "/etc/confluent/dock\u2026"   5 days ago   Up 5 days               2888/tcp, 0.0.0.0:2181->2181/tcp, 3888/tcp                 zookeeper\n150ba161cf26   mysql:8.2                               "docker-entrypoint.s\u2026"   5 days ago   Up 5 days               0.0.0.0:3306->3306/tcp, 33060/tcp                          mysql\n4b72a3eab73f   elasticsearch:7.9.3                     "/tini -- /usr/local\u2026"   5 days ago   Up 5 days (healthy)     0.0.0.0:9200->9200/tcp, 9300/tcp                           elasticsearch\n')),(0,n.yg)("p",null,"In this case, the container id we'd like to note is ",(0,n.yg)("inlineCode",{parentName:"p"},"122a2488ab63"),", which corresponds to the ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub-gms")," service."),(0,n.yg)("h3",{id:"kubernetes--helm"},"Kubernetes & Helm"),(0,n.yg)("p",null,"Find the name of the pod you're interested in using the following command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"kubectl get pods\n\n...\ndefault   datahub-frontend-1231ead-6767                        1/1     Running     0          42h\ndefault   datahub-gms-c578b47cd-7676                              1/1     Running     0          13d\n...\n")),(0,n.yg)("p",null,"In this case the pod name we'd like to note is ",(0,n.yg)("inlineCode",{parentName:"p"},"datahub-gms-c578b47cd-7676")," , which contains the GMS backend service."),(0,n.yg)("h2",{id:"step-2-find-the-log-files"},"Step 2: Find the log files"),(0,n.yg)("p",null,"The second step is to view all log files. Log files will live inside the container under the following directories for each service:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"datahub-gms:")," ",(0,n.yg)("inlineCode",{parentName:"li"},"/tmp/datahub/logs/gms")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"datahub-frontend"),": ",(0,n.yg)("inlineCode",{parentName:"li"},"/tmp/datahub/logs/datahub-frontend"))),(0,n.yg)("p",null,"There are 2 types of logs that are collected:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Info Logs"),": These include info, warn, error log lines. They are what print to stdout when the container runs."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Debug Logs"),": These files have shorter retention (past 1 day) but include more granular debug information from the DataHub code specifically. We ignore debug logs from external libraries that DataHub depends on.")),(0,n.yg)("h3",{id:"docker--docker-compose-1"},"Docker & Docker Compose"),(0,n.yg)("p",null,'Since log files are named based on the current date, you\'ll need to use "ls" to see which files currently exist. To do so, you can use the ',(0,n.yg)("inlineCode",{parentName:"p"},"docker exec")," command, using the container id recorded in step one:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"docker exec --privileged <container-id> <shell-command> \n")),(0,n.yg)("p",null,"For example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"johnjoyce@Johns-MBP datahub-fork % docker exec --privileged 122a2488ab63 ls -la /tmp/datahub/logs/gms \ntotal 4664\ndrwxr-xr-x    2 datahub  datahub       4096 Jul 28 05:14 .\ndrwxr-xr-x    3 datahub  datahub       4096 Jul 23 08:37 ..\n-rw-r--r--    1 datahub  datahub    2001112 Jul 23 23:33 gms.2021-23-07-0.log\n-rw-r--r--    1 datahub  datahub      74343 Jul 24 20:29 gms.2021-24-07-0.log\n-rw-r--r--    1 datahub  datahub      70252 Jul 25 17:56 gms.2021-25-07-0.log\n-rw-r--r--    1 datahub  datahub     626985 Jul 26 23:36 gms.2021-26-07-0.log\n-rw-r--r--    1 datahub  datahub     712270 Jul 27 23:59 gms.2021-27-07-0.log\n-rw-r--r--    1 datahub  datahub     867707 Jul 27 23:59 gms.debug.2021-27-07-0.log\n-rw-r--r--    1 datahub  datahub       3563 Jul 28 05:26 gms.debug.log\n-rw-r--r--    1 datahub  datahub     382443 Jul 28 16:16 gms.log\n")),(0,n.yg)("p",null,"Depending on your issue, you may be interested to view both debug and normal info logs."),(0,n.yg)("h3",{id:"kubernetes--helm-1"},"Kubernetes & Helm"),(0,n.yg)("p",null,'Since log files are named based on the current date, you\'ll need to use "ls" to see which files currently exist. To do so, you can use the ',(0,n.yg)("inlineCode",{parentName:"p"},"kubectl exec")," command, using the pod name recorded in step one:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"kubectl exec datahub-gms-c578b47cd-7676 -n default -- ls -la /tmp/datahub/logs/gms\n\ntotal 36388\ndrwxr-xr-x    2 datahub  datahub       4096 Jul 29 07:45 .\ndrwxr-xr-x    3 datahub  datahub         17 Jul 15 08:47 ..\n-rw-r--r--    1 datahub  datahub     104548 Jul 15 22:24 gms.2021-15-07-0.log\n-rw-r--r--    1 datahub  datahub      12684 Jul 16 14:55 gms.2021-16-07-0.log\n-rw-r--r--    1 datahub  datahub    2482571 Jul 17 14:40 gms.2021-17-07-0.log\n-rw-r--r--    1 datahub  datahub      49120 Jul 18 14:31 gms.2021-18-07-0.log\n-rw-r--r--    1 datahub  datahub      14167 Jul 19 23:47 gms.2021-19-07-0.log\n-rw-r--r--    1 datahub  datahub      13255 Jul 20 22:22 gms.2021-20-07-0.log\n-rw-r--r--    1 datahub  datahub     668485 Jul 21 19:52 gms.2021-21-07-0.log\n-rw-r--r--    1 datahub  datahub    1448589 Jul 22 20:18 gms.2021-22-07-0.log\n-rw-r--r--    1 datahub  datahub      44187 Jul 23 13:51 gms.2021-23-07-0.log\n-rw-r--r--    1 datahub  datahub      14173 Jul 24 22:59 gms.2021-24-07-0.log\n-rw-r--r--    1 datahub  datahub      13263 Jul 25 21:11 gms.2021-25-07-0.log\n-rw-r--r--    1 datahub  datahub      13261 Jul 26 19:02 gms.2021-26-07-0.log\n-rw-r--r--    1 datahub  datahub    1118105 Jul 27 21:10 gms.2021-27-07-0.log\n-rw-r--r--    1 datahub  datahub     678423 Jul 28 23:57 gms.2021-28-07-0.log\n-rw-r--r--    1 datahub  datahub    1776274 Jul 28 07:19 gms.debug.2021-28-07-0.log\n-rw-r--r--    1 datahub  datahub   27576533 Jul 29 09:55 gms.debug.log\n-rw-r--r--    1 datahub  datahub    1195940 Jul 29 14:54 gms.log\n")),(0,n.yg)("p",null,"In the next step, we'll save specific log files to our local filesystem."),(0,n.yg)("h2",{id:"step-3-save-container-log-file-to-local"},"Step 3: Save Container Log File to Local"),(0,n.yg)("p",null,"This step involves saving a copy of the container log files to your local filesystem for further investigation."),(0,n.yg)("h3",{id:"docker--docker-compose-2"},"Docker & Docker Compose"),(0,n.yg)("p",null,"Simply use the ",(0,n.yg)("inlineCode",{parentName:"p"},"docker exec"),' command to "cat" the log file(s) of interest and route them to a new file.'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"docker exec --privileged 122a2488ab63 cat /tmp/datahub/logs/gms/gms.debug.log > my-local-log-file.log\n")),(0,n.yg)("p",null,"Now you should be able to view the logs locally."),(0,n.yg)("h3",{id:"kubernetes--helm-2"},"Kubernetes & Helm"),(0,n.yg)("p",null,"There are a few ways to get files out of the pod and into a local file. You can either use ",(0,n.yg)("inlineCode",{parentName:"p"},"kubectl cp")," or simply ",(0,n.yg)("inlineCode",{parentName:"p"},"cat")," and pipe the file of interest. We'll show an example using the latter approach:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"kubectl exec datahub-gms-c578b47cd-7676 -n default -- cat /tmp/datahub/logs/gms/gms.log > my-local-gms.log\n")))}h.isMDXComponent=!0}}]);