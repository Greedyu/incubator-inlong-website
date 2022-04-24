"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1100],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=u(n),d=r,c=k["".concat(p,".").concat(d)]||k[d]||s[d]||l;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},87408:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"\u5feb\u901f\u5f00\u59cb",sidebar_position:1},p=void 0,u={unversionedId:"modules/tubemq/quick_start",id:"version-1.1.0/modules/tubemq/quick_start",title:"\u5feb\u901f\u5f00\u59cb",description:"1 \u90e8\u7f72\u8fd0\u884c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/modules/tubemq/quick_start.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/quick_start",permalink:"/zh-CN/docs/modules/tubemq/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.1.0/modules/tubemq/quick_start.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/tubemq/overview"},next:{title:"\u751f\u4ea7\u8005\u793a\u4f8b",permalink:"/zh-CN/docs/modules/tubemq/producer_example"}},m={},s=[{value:"1 \u90e8\u7f72\u8fd0\u884c",id:"1-\u90e8\u7f72\u8fd0\u884c",level:2},{value:"1.1 \u914d\u7f6e\u793a\u4f8b",id:"11-\u914d\u7f6e\u793a\u4f8b",level:3},{value:"1.2 \u51c6\u5907\u5de5\u4f5c",id:"12-\u51c6\u5907\u5de5\u4f5c",level:3},{value:"1.3 \u914d\u7f6eMaster",id:"13-\u914d\u7f6emaster",level:3},{value:"1.4 \u914d\u7f6eBroker",id:"14-\u914d\u7f6ebroker",level:3},{value:"1.5 \u542f\u52a8Master",id:"15-\u542f\u52a8master",level:3},{value:"1.5.1 \u914d\u7f6eBroker\u5143\u6570\u636e",id:"151-\u914d\u7f6ebroker\u5143\u6570\u636e",level:4},{value:"1.6 \u542f\u52a8Broker",id:"16-\u542f\u52a8broker",level:3},{value:"2 \u5feb\u901f\u4f7f\u7528",id:"2-\u5feb\u901f\u4f7f\u7528",level:2},{value:"2.1 \u65b0\u589e Topic",id:"21-\u65b0\u589e-topic",level:3},{value:"2.2 \u8fd0\u884cExample",id:"22-\u8fd0\u884cexample",level:3},{value:"2.2.1 \u751f\u4ea7\u6d88\u606f",id:"221-\u751f\u4ea7\u6d88\u606f",level:4},{value:"2.2.2 \u6d88\u8d39\u6d88\u606f",id:"222-\u6d88\u8d39\u6d88\u606f",level:4},{value:"3 \u90e8\u7f72 Manager",id:"3-\u90e8\u7f72-manager",level:2},{value:"4 \u7ed3\u675f",id:"4-\u7ed3\u675f",level:2}],k={toc:s};function d(e){var t=e.components,i=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u90e8\u7f72\u8fd0\u884c"},"1 \u90e8\u7f72\u8fd0\u884c"),(0,l.kt)("h3",{id:"11-\u914d\u7f6e\u793a\u4f8b"},"1.1 \u914d\u7f6e\u793a\u4f8b"),(0,l.kt)("p",null,"TubeMQ \u96c6\u7fa4\u5305\u542b\u6709\u4e24\u4e2a\u7ec4\u4ef6: ",(0,l.kt)("strong",{parentName:"p"},"Master")," \u548c ",(0,l.kt)("strong",{parentName:"p"},"Broker"),". Master \u548c Broker \u53ef\u4ee5\u90e8\u7f72\u5728\u76f8\u540c\u6216\u8005\u4e0d\u540c\u7684\u8282\u70b9\u4e0a\uff0c\u4f9d\u7167\u4e1a\u52a1\u5bf9\u673a\u5668\u7684\u89c4\u5212\u8fdb\u884c\u5904\u7406\u3002\u6211\u4eec\u901a\u8fc7\u5982\u4e0b3\u53f0\u673a\u5668\u642d\u5efa\u67092\u53f0Master\u7684\u751f\u4ea7\u3001\u6d88\u8d39\u7684\u96c6\u7fa4\u8fdb\u884c\u914d\u7f6e\u793a\u4f8b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6240\u5c5e\u89d2\u8272"),(0,l.kt)("th",{parentName:"tr",align:null},"TCP\u7aef\u53e3"),(0,l.kt)("th",{parentName:"tr",align:null},"TLS\u7aef\u53e3"),(0,l.kt)("th",{parentName:"tr",align:null},"WEB\u7aef\u53e3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Master"),(0,l.kt)("td",{parentName:"tr",align:null},"8099"),(0,l.kt)("td",{parentName:"tr",align:null},"8199"),(0,l.kt)("td",{parentName:"tr",align:null},"8080"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5143\u6570\u636e\u5b58\u50a8\u5728ZooKeeper\u7684",(0,l.kt)("inlineCode",{parentName:"td"},"/tubemq"),"\u76ee\u5f55")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Broker"),(0,l.kt)("td",{parentName:"tr",align:null},"8123"),(0,l.kt)("td",{parentName:"tr",align:null},"8124"),(0,l.kt)("td",{parentName:"tr",align:null},"8081"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u50a8\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"/stage/msg_data"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ZooKeeper"),(0,l.kt)("td",{parentName:"tr",align:null},"2181"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8Master\u5143\u6570\u636e\u53caBroker\u7684Offset\u5185\u5bb9\uff0c\u6839\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"td"},"/tubemq"))))),(0,l.kt)("h3",{id:"12-\u51c6\u5907\u5de5\u4f5c"},"1.2 \u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ZooKeeper\u96c6\u7fa4")),(0,l.kt)("p",null,"\u9009\u62e9\u5b89\u88c5\u8def\u5f84\u540e\uff0c\u5b89\u88c5\u5305\u89e3\u538b\u540e\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/INSTALL_PATH/inlong-tubemq-server/\n\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 logs\n\u2514\u2500\u2500 resources\n")),(0,l.kt)("h3",{id:"13-\u914d\u7f6emaster"},"1.3 \u914d\u7f6eMaster"),(0,l.kt)("p",null,"\u7f16\u8f91",(0,l.kt)("inlineCode",{parentName:"p"},"conf/master.ini"),"\uff0c\u6839\u636e\u96c6\u7fa4\u4fe1\u606f\u53d8\u66f4\u4ee5\u4e0b\u914d\u7f6e\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Master IP\u548c\u7aef\u53e3")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[master]\nhostName=YOUR_SERVER_IP                   // \u66ff\u6362\u4e3a\u5f53\u524d\u4e3b\u673aIP\nport=8099\nwebPort=8080\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u6388\u6743Token")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"confModAuthToken=abc                     // \u8be5token\u7528\u4e8e\u9875\u9762\u914d\u7f6e\u3001API\u8c03\u7528\u7b49\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6emeta_zookeeper\u7b56\u7565")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[meta_zookeeper]                              // \u540c\u4e00\u4e2a\u96c6\u7fa4\u91ccMaster\u5fc5\u987b\u4f7f\u7528\u540c\u4e00\u5957zookeeper\u73af\u5883\uff0c\u4e14\u914d\u7f6e\u4e00\u81f4\nzkNodeRoot=/tubemq\nzkServerAddr=localhost:2181              // \u6307\u5411zookeeper\u96c6\u7fa4\uff0c\u591a\u4e2a\u5730\u5740\u9017\u53f7\u5206\u5f00\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6emeta_bdb\u7b56\u7565\uff08\u53ef\u9009\uff09\n",(0,l.kt)("strong",{parentName:"li"},"\u6ce8\u610f"),"\uff1a\u7531\u4e8eApache\u4f9d\u8d56\u5305\u7684LICENSE\u95ee\u9898\uff0c\u4ece1.1.0\u7248\u672c\u5f00\u59cbTubeMQ\u53d1\u5e03\u7684\u5305\u4e0d\u518d\u5305\u542bBDB\u5305\uff0c\u5982\u679c\u9700\u8981BDB\u5b58\u50a8\u5143\u6570\u636e\uff0c\u4e1a\u52a1\u9700\u8981\u81ea\u884c\u4e0b\u8f7dcom.sleepycat.je-7.3.7.jar\u5305\uff0c\u8981\u4e0d\u7cfb\u7edf\u8fd0\u884c\u65f6\u4f1a\u62a5\u201c java.lang.ClassNotFoundException: com.sleepycat.je.ReplicaConsistencyPolicy\u201d\u9519\u8bef\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[meta_bdb]\nrepGroupName=tubemqGroup1                // \u540c\u4e00\u4e2a\u96c6\u7fa4\u7684Master\u5fc5\u987b\u8981\u7528\u540c\u4e00\u4e2a\u7ec4\u540d\uff0c\u4e14\u4e0d\u540c\u96c6\u7fa4\u7684\u7ec4\u540d\u5fc5\u987b\u4e0d\u540c \nrepNodeName=tubemqGroupNode1             // \u540c\u4e00\u4e2a\u96c6\u7fa4\u7684master\u8282\u70b9\u540d\u5fc5\u987b\u662f\u4e0d\u540c\u7684\u540d\u79f0\nmetaDataPath=/stage/meta_data\nrepHelperHost=FIRST_MASTER_NODE_IP:9001  // helperHost\u7528\u4e8e\u521b\u5efamaster\u96c6\u7fa4\uff0c\u4e00\u822c\u914d\u7f6e\u7b2c\u4e00\u4e2amaster\u8282\u70b9ip\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uff08\u53ef\u9009\uff09\u751f\u4ea7\u73af\u5883\uff0c\u591amaster HA\u7ea7\u522b")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HA\u7ea7\u522b"),(0,l.kt)("th",{parentName:"tr",align:null},"Master\u6570\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u9ad8"),(0,l.kt)("td",{parentName:"tr",align:null},"3 masters"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4efb\u4f55\u4e3b\u8282\u70b9\u5d29\u6e83\u540e\uff0c\u96c6\u7fa4\u5143\u6570\u636e\u4ecd\u5904\u4e8e\u8bfb/\u5199\u72b6\u6001\uff0c\u53ef\u4ee5\u63a5\u53d7\u65b0\u7684\u751f\u4ea7\u8005/\u6d88\u8d39\u8005\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"2 masters"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u4e2a\u4e3b\u8282\u70b9\u5d29\u6e83\u540e\uff0c\u96c6\u7fa4\u5143\u6570\u636e\u5904\u4e8e\u53ea\u8bfb\u72b6\u6001\u3002\u5bf9\u73b0\u6709\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u6ca1\u6709\u4efb\u4f55\u5f71\u54cd\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4e"),(0,l.kt)("td",{parentName:"tr",align:null},"1 master"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3b\u8282\u70b9\u5d29\u6e83\u540e\uff0c\u5bf9\u73b0\u6709\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u6ca1\u6709\u5f71\u54cd\u3002")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u4e8eDocker\u5bb9\u5668\u5316\u7684\u9700\u8981\uff0cmaster.ini\u6587\u4ef6\u91cc\u5bf9","[meta_zookeeper]"," \u6216 ","[meta_bdb]"," \u5982\u4e0a3\u4e2a\u53c2\u6570\u90e8\u5206\u90fd\u662f\u4f7f\u7528\u7684\u7f3a\u7701\u8bbe\u7f6e\uff0c\u5728\u5b9e\u9645\u7ec4\u7f51\u4f7f\u7528\u65f6\u9700\u8981\u4ee5Master\u8282\u70b9\u771f\u5b9e\u4fe1\u606f\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"Master\u6240\u6709\u8282\u70b9\u7684IP\u4fe1\u606f\u8981\u5728hosts\u914d\u7f6e\u6587\u4ef6\u91cc\u6784\u9020IP\u4e0ehostName\u6620\u5c04\u5173\u7cfb\uff0c\u5982\u7c7b\u4f3c\u201c192.168.0.1 192-168-0-1\u201d"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u4fdd\u8bc1Master\u6240\u6709\u8282\u70b9\u4e4b\u95f4\u7684\u65f6\u949f\u540c\u6b65")),(0,l.kt)("h3",{id:"14-\u914d\u7f6ebroker"},"1.4 \u914d\u7f6eBroker"),(0,l.kt)("p",null,"\u7f16\u8f91",(0,l.kt)("inlineCode",{parentName:"p"},"conf/broker.ini"),"\uff0c\u6839\u636e\u96c6\u7fa4\u4fe1\u606f\u53d8\u66f4\u4ee5\u4e0b\u914d\u7f6e\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Broker IP\u548c\u7aef\u53e3")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[broker]\nbrokerId=0\nhostName=YOUR_SERVER_IP                 // \u66ff\u6362\u4e3a\u5f53\u524d\u4e3b\u673aIP\uff0cbroker\u76ee\u524d\u53ea\u652f\u6301IP\nport=8123\nwebPort=8081\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Master\u5730\u5740")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"masterAddressList=YOUR_MASTER_IP1:8099,YOUR_MASTER_IP2:8099   //\u591a\u4e2amaster\u4ee5\u9017\u53f7\u5206\u9694\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u76ee\u5f55")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"primaryPath=/stage/msg_data\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ZooKeeper\u96c6\u7fa4\u5730\u5740")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[zookeeper]                             // \u540c\u4e00\u4e2a\u96c6\u7fa4\u91ccMaster\u548cBroker\u5fc5\u987b\u4f7f\u7528\u540c\u4e00\u5957zookeeper\u73af\u5883\uff0c\u4e14\u914d\u7f6e\u4e00\u81f4\nzkNodeRoot=/tubemq                      \nzkServerAddr=localhost:2181             // \u6307\u5411zookeeper\u96c6\u7fa4\uff0c\u591a\u4e2a\u5730\u5740\u9017\u53f7\u5206\u5f00\n")),(0,l.kt)("h3",{id:"15-\u542f\u52a8master"},"1.5 \u542f\u52a8Master"),(0,l.kt)("p",null,"\u8fdb\u5165Master\u8282\u70b9\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u4e0b\uff0c\u542f\u52a8\u670d\u52a1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./tubemq.sh master start\n")),(0,l.kt)("p",null,"\u8bbf\u95eeMaster\u7684\u7ba1\u63a7\u53f0 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://YOUR_MASTER_IP:8080")," \uff0c\u9875\u9762\u53ef\u67e5\u5219\u8868\u793amaster\u5df2\u6210\u529f\u542f\u52a8:\n",(0,l.kt)("img",{alt:"TubeMQ Console GUI",src:n(98758).Z,width:"1420",height:"380"})),(0,l.kt)("h4",{id:"151-\u914d\u7f6ebroker\u5143\u6570\u636e"},"1.5.1 \u914d\u7f6eBroker\u5143\u6570\u636e"),(0,l.kt)("p",null,"Broker\u542f\u52a8\u524d\uff0c\u9996\u5148\u8981\u5728Master\u4e0a\u914d\u7f6eBroker\u5143\u6570\u636e\uff0c\u589e\u52a0Broker\u76f8\u5173\u7684\u7ba1\u7406\u4fe1\u606f\u3002\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Broker List")," \u9875\u9762,  ",(0,l.kt)("inlineCode",{parentName:"p"},"Add Single Broker"),"\uff0c\u7136\u540e\u586b\u5199\u76f8\u5173\u4fe1\u606f:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add Broker 1",src:n(18817).Z,width:"1420",height:"646"})),(0,l.kt)("p",null,"\u9700\u8981\u586b\u5199\u7684\u5185\u5bb9\u5305\u62ec\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"broker IP: broker server ip"),(0,l.kt)("li",{parentName:"ol"},"authToken:  ",(0,l.kt)("inlineCode",{parentName:"li"},"conf/master.ini")," \u6587\u4ef6\u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"confModAuthToken")," \u5b57\u6bb5\u914d\u7f6e\u7684 token")),(0,l.kt)("p",null,"\u7136\u540e\u4e0a\u7ebfBroker\uff1a\n",(0,l.kt)("img",{alt:"Add Broker 2",src:n(43949).Z,width:"1407",height:"590"})),(0,l.kt)("h3",{id:"16-\u542f\u52a8broker"},"1.6 \u542f\u52a8Broker"),(0,l.kt)("p",null,"\u8fdb\u5165broker\u8282\u70b9\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u4e0b\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8Broker\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./tubemq.sh broker start\n")),(0,l.kt)("p",null,"\u5237\u65b0\u9875\u9762\u53ef\u4ee5\u770b\u5230 Broker \u5df2\u7ecf\u6ce8\u518c\uff0c\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5f53\u524d\u8fd0\u884c\u5b50\u72b6\u6001")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"idle")," \u65f6\uff0c \u53ef\u4ee5\u589e\u52a0topic:\n",(0,l.kt)("img",{alt:"Add Broker 3",src:n(1174).Z,width:"1404",height:"355"})),(0,l.kt)("h2",{id:"2-\u5feb\u901f\u4f7f\u7528"},"2 \u5feb\u901f\u4f7f\u7528"),(0,l.kt)("h3",{id:"21-\u65b0\u589e-topic"},"2.1 \u65b0\u589e Topic"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 web GUI \u6dfb\u52a0 Topic\uff0c \u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Topic\u5217\u8868"),"\u9875\u9762\u6dfb\u52a0\uff0c\u9700\u8981\u586b\u5199\u76f8\u5173\u4fe1\u606f\uff0c\u6bd4\u5982\u589e\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"demo")," topic\uff1a\n",(0,l.kt)("img",{alt:"Add Topic 1",src:n(89506).Z,width:"1414",height:"571"})),(0,l.kt)("p",null,"\u7136\u540e\u9009\u62e9\u90e8\u7f72 Topic \u7684 Broker\n",(0,l.kt)("img",{alt:"Add Topic 5",src:n(29898).Z,width:"684",height:"422"})),(0,l.kt)("p",null,"\u6b64\u65f6 Broker\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u53ef\u53d1\u5e03")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"\u53ef\u8ba2\u9605")," \u4f9d\u65e7\u662f\u7070\u8272\u7684\n",(0,l.kt)("img",{alt:"Add Topic 6",src:n(81304).Z,width:"1138",height:"125"})),(0,l.kt)("p",null,"\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Broker\u5217\u8868"),"\u9875\u9762\u91cd\u8f7dBroker \u914d\u7f6e\n",(0,l.kt)("img",{alt:"Add Topic 2",src:n(85896).Z,width:"1135",height:"119"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add Topic 3",src:n(52924).Z,width:"1137",height:"125"})),(0,l.kt)("p",null,"\u4e4b\u540e\u5c31\u53ef\u4ee5\u5728\u9875\u9762\u67e5\u770bTopic\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add Topic 4",src:n(48695).Z,width:"1133",height:"120"})),(0,l.kt)("h3",{id:"22-\u8fd0\u884cexample"},"2.2 \u8fd0\u884cExample"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4e0a\u9762\u521b\u5efa\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"demo")," topic\u6765\u6d4b\u8bd5\u96c6\u7fa4\u3002"),(0,l.kt)("h4",{id:"221-\u751f\u4ea7\u6d88\u606f"},"2.2.1 \u751f\u4ea7\u6d88\u606f"),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"YOUR_MASTER_IP:port")," \u66ff\u6362\u4e3a\u5b9e\u9645\u7684IP\u548c\u7aef\u53e3\uff0c\u7136\u540e\u8fd0\u884cproducer:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd /INSTALL_PATH/apache-inlong-tubemq-server-[TUBEMQ-VERSION]-bin\n./bin/tubemq-producer-test.sh --master-servers YOUR_MASTER_IP1:port,YOUR_MASTER_IP2:port --topicName demo\n")),(0,l.kt)("p",null,"\u5982\u679c\u80fd\u89c2\u5bdf\u4e0b\u5982\u4e0b\u65e5\u5fd7\uff0c\u5219\u8868\u793a\u6570\u636e\u53d1\u9001\u6210\u529f\uff1a\n",(0,l.kt)("img",{alt:"Demo 1",src:n(40296).Z,width:"1906",height:"251"})),(0,l.kt)("h4",{id:"222-\u6d88\u8d39\u6d88\u606f"},"2.2.2 \u6d88\u8d39\u6d88\u606f"),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"YOUR_MASTER_IP:port")," \u66ff\u6362\u4e3a\u5b9e\u9645\u7684IP\u548c\u7aef\u53e3\uff0c\u7136\u540e\u8fd0\u884cConsumer:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd /INSTALL_PATH/apache-inlong-tubemq-server-[TUBEMQ-VERSION]-bin\n./bin/tubemq-consumer-test.sh --master-servers YOUR_MASTER_IP1:port,YOUR_MASTER_IP2:port --topicName demo --groupName test_consume\n")),(0,l.kt)("p",null,"\u5982\u679c\u80fd\u89c2\u5bdf\u4e0b\u5982\u4e0b\u65e5\u5fd7\uff0c\u5219\u8868\u793a\u6570\u636e\u88ab\u6d88\u8d39\u8005\u6d88\u8d39\u5230\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Demo 2",src:n(78029).Z,width:"1900",height:"334"})),(0,l.kt)("h2",{id:"3-\u90e8\u7f72-manager"},"3 \u90e8\u7f72 Manager"),(0,l.kt)("p",null,"\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/modules/tubemq/tubemq-manager/quick_start"},"InLong TubeMQ Manager")),(0,l.kt)("h2",{id:"4-\u7ed3\u675f"},"4 \u7ed3\u675f"),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u5df2\u7ecf\u5b8c\u6210\u4e86TubeMQ\u7684\u7f16\u8bd1\uff0c\u90e8\u7f72\uff0c\u7cfb\u7edf\u914d\u7f6e\uff0c\u542f\u52a8\uff0c\u751f\u4ea7\u548c\u6d88\u8d39\u3002\u5982\u679c\u9700\u8981\u4e86\u89e3\u66f4\u6df1\u5165\u7684\u5185\u5bb9\uff0c\u8bf7\u67e5\u770b\u300aTubeMQ HTTP API\u300b\u91cc\u7684\u76f8\u5173\u5185\u5bb9\uff0c\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\u8bbe\u7f6e\u3002"),(0,l.kt)("hr",null),(0,l.kt)("a",{href:"#top"},"Back to top"))}d.isMDXComponent=!0},18817:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-broker-1-50044a59203725d7f55554cb551bed58.png"},43949:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-broker-2-ab5859b782891dbcb816f00c8ad87a58.png"},1174:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-broker-3-e1425119a14c1590281eea32e4f58f5f.png"},89506:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-1-8ab9641b011376860472b509f5f54256.png"},85896:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-2-965c75eb7881ad45f0279810f58e1dc3.png"},52924:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-3-c6d1c32e626a60def177b8fcc9646015.png"},48695:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-4-48ef9d8ba13c36a2f2b4208f062c1680.png"},29898:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-5-f0f370c770f6855fee6592a079cac1d2.png"},81304:function(e,t,n){t.Z=n.p+"assets/images/tubemq-add-topic-6-28364b9457706ac93f128184ee874fb7.png"},98758:function(e,t,n){t.Z=n.p+"assets/images/tubemq-console-gui-123e6fb030a5e6ebadf15962dcd5d284.png"},78029:function(e,t,n){t.Z=n.p+"assets/images/tubemq-consume-message-a27f49fde7c5f5bcc565ca6ed2537088.png"},40296:function(e,t,n){t.Z=n.p+"assets/images/tubemq-send-message-3ceedb761daf672ee43b0a9a67905d87.png"}}]);