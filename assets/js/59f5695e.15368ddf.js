"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[46750],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(m,c(c({ref:t},u),{},{components:n})):o.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81907:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),c=["components"],s={sidebar_label:"Connector file structure",sidebar_position:1},a="Connector file structure",l={unversionedId:"docs/recipes/configure-connectors/create-your-connector/connector-file-structure",id:"version-1.x/docs/recipes/configure-connectors/create-your-connector/connector-file-structure",title:"Connector file structure",description:"Attached is a file tree to demonstrate how are connectors' files organized as a TypeScript project.",source:"@site/versioned_docs/version-1.x/docs/recipes/configure-connectors/create-your-connector/connector-file-structure.mdx",sourceDirName:"docs/recipes/configure-connectors/create-your-connector",slug:"/docs/recipes/configure-connectors/create-your-connector/connector-file-structure",permalink:"/docs/recipes/configure-connectors/create-your-connector/connector-file-structure",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/configure-connectors/create-your-connector/connector-file-structure.mdx",tags:[],version:"1.x",sidebarPosition:1,frontMatter:{sidebar_label:"Connector file structure",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Create your connector",permalink:"/docs/recipes/configure-connectors/create-your-connector/"},next:{title:"Guide to implement connectors",permalink:"/docs/recipes/configure-connectors/create-your-connector/connector-implementation-guide"}},u={},p=[{value:"package.json",id:"packagejson",level:2},{value:"README.md",id:"readmemd",level:2},{value:"logo.svg",id:"logosvg",level:2},{value:"logo-dark.svg",id:"logo-darksvg",level:2},{value:"index.ts",id:"indexts",level:2},{value:"index.test.ts",id:"indextestts",level:2},{value:"types.ts",id:"typests",level:2},{value:"constant.ts",id:"constantts",level:2},{value:"mock.ts",id:"mockts",level:2},{value:"utils.ts",id:"utilsts",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connector-file-structure"},"Connector file structure"),(0,i.kt)("p",null,"Attached is a file tree to demonstrate how are connectors' files organized as a TypeScript project."),(0,i.kt)("p",null,"Files whose name ends up with ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," refer to an optional file, otherwise are required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ConnectorRootDir/\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 logo.svg\n\u251c\u2500\u2500 logo-dark.svg^\n\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 index.test.ts\n    \u251c\u2500\u2500 types.ts\n    \u251c\u2500\u2500 constant.ts\n    \u251c\u2500\u2500 mock.ts^\n    \u251c\u2500\u2500 utils.ts^\n    \u251c\u2500\u2500 utils.test.ts^\n    \u2514\u2500\u2500 ...\n")),(0,i.kt)("p",null,"Based on the connector file structure, let's go through each file and figure out how they work together as a whole system."),(0,i.kt)("h2",{id:"packagejson"},"package.json"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," contains configurations of this connector repo. It will be merged with a sharing ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", which contains common dependencies and attributes."),(0,i.kt)("h2",{id:"readmemd"},"README.md"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," is an elaborated guide for setting up the connector's config."),(0,i.kt)("h2",{id:"logosvg"},"logo.svg"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"logo.svg")," is a file that stores the connector's logo in vector image format."),(0,i.kt)("h2",{id:"logo-darksvg"},"logo-dark.svg"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"logo-dark.svg")," file contains vector graphic of connector's dark mode logo."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/connectors/#logo"},"connector logo")," to know more about the relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"logo.svg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"logo-dark.svg"),".")),(0,i.kt)("h2",{id:"indexts"},"index.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," is the file for connector class implementation."),(0,i.kt)("h2",{id:"indextestts"},"index.test.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"index.test.ts")," is a file containing corresponding unit tests (UTs) for implementations in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts"),"."),(0,i.kt)("h2",{id:"typests"},"types.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"types.ts")," is where you should define variables' types."),(0,i.kt)("h2",{id:"constantts"},"constant.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"constant.ts")," is where you should put constants related to the connector, including endpoints, connector metadata, etc."),(0,i.kt)("h2",{id:"mockts"},"mock.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mock.ts")," is the file you may put mocked values for testing purposes."),(0,i.kt)("h2",{id:"utilsts"},"utils.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"utils.ts")," is the file where developers put utility functions, and ",(0,i.kt)("inlineCode",{parentName:"p"},"utils.test.ts")," should contain relating UTs."))}f.isMDXComponent=!0}}]);