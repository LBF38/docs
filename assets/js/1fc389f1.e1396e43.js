"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[35814],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82189:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],s={toc:[]};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",null,'This tutorial assumes you have created an Application of type "',n.type,'" in Admin Console.')))}c.isMDXComponent=!0},99677:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n.p+"assets/images/api-identifier-ee920efff60f2af5efc6c726244393c1.png",s=n.p+"assets/images/app-id-secret-af29845d7768be05909995293bef45d9.png",c=n(82189),p=["components"],l={sidebar_label:"Machine-to-machine"},u="Machine-to-machine: Auth with Logto",d={unversionedId:"docs/recipes/integrate-logto/machine-to-machine",id:"version-1.x/docs/recipes/integrate-logto/machine-to-machine",title:"Machine-to-machine: Auth with Logto",description:"Intro",source:"@site/versioned_docs/version-1.x/docs/recipes/integrate-logto/machine-to-machine.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/machine-to-machine",permalink:"/docs/recipes/integrate-logto/machine-to-machine",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/integrate-logto/machine-to-machine.mdx",tags:[],version:"1.x",frontMatter:{sidebar_label:"Machine-to-machine"},sidebar:"docsSidebar",previous:{title:"iOS",permalink:"/docs/recipes/integrate-logto/ios/"},next:{title:"Next.js 13 App Router",permalink:"/docs/recipes/integrate-logto/next-js-13/"}},h={},m=[{value:"Intro",id:"intro",level:2},{value:"Fetch an Access Token",id:"fetch-an-access-token",level:2},{value:"Locate the App ID and App Secret",id:"locate-the-app-id-and-app-secret",level:3},{value:"Locate the API Resource",id:"locate-the-api-resource",level:3},{value:"Access Logto Management API",id:"access-logto-management-api",level:4},{value:"Compose and send the request",id:"compose-and-send-the-request",level:3},{value:"Token response",id:"token-response",level:3},{value:"Access resource using Access Token",id:"access-resource-using-access-token",level:2},{value:"Authentication",id:"authentication",level:2}],g={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"machine-to-machine-auth-with-logto"},"Machine-to-machine: Auth with Logto"),(0,r.kt)(c.ZP,{type:"Machine-to-machine",mdxType:"AppNote"}),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Machine-to-machine (M2M) is a common practice to authenticate if you have an app that needs to directly talks to resources. E.g., an API service that updates users' custom data in Logto, a statistic service that pulls daily orders, etc."),(0,r.kt)("p",null,"Usually, an M2M app doesn't need user interactions, i.e., it has no UI."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Logto does not currently support the M2M app to represent a user. The ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," of the Access Token will be the App ID.")),(0,r.kt)("p",null,"This recipe assumes you have already created a machine-to-machine app in Logto."),(0,r.kt)("h2",{id:"fetch-an-access-token"},"Fetch an Access Token"),(0,r.kt)("h3",{id:"locate-the-app-id-and-app-secret"},"Locate the App ID and App Secret"),(0,r.kt)("p",null,"On the application details page, locate the App ID and App Secret."),(0,r.kt)("img",{alt:"App ID and App Secret",src:s,width:"600px"}),(0,r.kt)("h3",{id:"locate-the-api-resource"},"Locate the API Resource"),(0,r.kt)("p",null,"In the API Resource tab, find the API identifier that the app needs to access. If you haven't added the API Resource in Logto or don't know what API Resource is, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/resources"},"API Resource"),"."),(0,r.kt)("img",{alt:"API identifier",src:i,width:"600px",style:{paddingBottom:"12px"}}),(0,r.kt)("h4",{id:"access-logto-management-api"},"Access Logto Management API"),(0,r.kt)("p",null,"If you want to use this app for accessing ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/core/#management-api"},"Management API"),", remember to create a role with the Management API access and assign the role to the app. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/rbac/manage-permissions-and-roles"},"Manage permissions and roles")," to learn more."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Logto Management API is a built-in resource with the fixed identifier ",(0,r.kt)("inlineCode",{parentName:"p"},"https://[your-tenant-id].logto.app/api"),".")),(0,r.kt)("h3",{id:"compose-and-send-the-request"},"Compose and send the request"),(0,r.kt)("p",null,"Then compose them into a request (",(0,r.kt)("strong",{parentName:"p"},"all mandatory"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use Token Endpoint (",(0,r.kt)("inlineCode",{parentName:"li"},"https://your.logto.endpoint/oidc/token"),") as the request endpoint, and use ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," as the method."),(0,r.kt)("li",{parentName:"ul"},"Set header ",(0,r.kt)("inlineCode",{parentName:"li"},"Content-Type: application/x-www-form-urlencoded")),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication"},"Basic authentication"),", where username is the App ID, and password is the App Secret."),(0,r.kt)("li",{parentName:"ul"},"Carry the body data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "grant_type": "client_credentials",\n  "resource": "https://shopping.api", // Replace with your API identitfier\n  "scope": "scope_1 scope_2" // Replace with your desired scope(s) if you\'re using RBAC\n}\n')),(0,r.kt)("p",null,"If you are using cURL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location \\\n  --request POST 'https://your.logto.endpoint/oidc/token' \\\n  --header 'Authorization: Basic eW91ci1hcHAtaWQ6eW91ci1hcHAtc2VjcmV0' \\\n  --header 'Content-Type: application/x-www-form-urlencoded' \\\n  --data-urlencode 'grant_type=client_credentials' \\\n  --data-urlencode 'resource=https://shopping.api' \\\n  --data-urlencode 'scope=scope_1 scope_2'\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"https://your.logto.endpoint")," with the Logto endpoint you are targeting. For Logto Cloud, it will be ",(0,r.kt)("inlineCode",{parentName:"p"},"https://[tenant-id].logto.app"),"."),(0,r.kt)("h3",{id:"token-response"},"Token response"),(0,r.kt)("p",null,"A successful response body would be like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "eyJhbG...2g", // Use this token for accessing the resource\n  "expires_in": 3600, // Token expiration in seconds\n  "token_type": "Bearer" // Auth type for your request when using the Access Token\n}\n')),(0,r.kt)("h2",{id:"access-resource-using-access-token"},"Access resource using Access Token"),(0,r.kt)("p",null,"You may notice the token response has a ",(0,r.kt)("inlineCode",{parentName:"p"},"token_type")," field, which it's fixed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer"),". Thus you should put the Access Token in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," field of HTTP headers with the Bearer format (",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer YOUR_TOKEN"),")."),(0,r.kt)("p",null,"For example, if you have requested an Access Token with the resource ",(0,r.kt)("inlineCode",{parentName:"p"},"https://[your-tenant-id].logto.app/api"),", to get all applications in Logto:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location \\\n  --request GET 'https://your.logto.endpoint/api/applications' \\\n  --header 'Authorization: Bearer eyJhbG...2g' # Access Token\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"https://your.logto.endpoint")," with the Logto endpoint you are targeting. For Logto Cloud, it will be ",(0,r.kt)("inlineCode",{parentName:"p"},"https://[tenant-id].logto.app"),"."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"If you are protecting your own API Resources other than Logto Management API, remember to implement the authentication in your resource. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api#validate-the-api-requests-authorization-token"},"Protect your API")," for details."))}k.isMDXComponent=!0}}]);