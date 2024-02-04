"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[75424],{47767:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return s},metadata:function(){return r},toc:function(){return c}});var t=i(11527),o=i(17279);const s={sidebar_position:6},a="\ud83d\ude9d Interact with Management API",r={id:"docs/recipes/interact-with-management-api/README",title:"\ud83d\ude9d Interact with Management API",description:"What is Logto Management API",source:"@site/docs/docs/recipes/interact-with-management-api/README.md",sourceDirName:"docs/recipes/interact-with-management-api",slug:"/docs/recipes/interact-with-management-api/",permalink:"/docs/recipes/interact-with-management-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/interact-with-management-api/README.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Guide to implement connectors",permalink:"/docs/recipes/configure-connectors/create-your-connector/connector-implementation-guide"},next:{title:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users",permalink:"/docs/recipes/manage-users/"}},l={},c=[{value:"What is Logto Management API",id:"what-is-logto-management-api",level:2},{value:"Some typical scenarios",id:"some-typical-scenarios",level:2},{value:"Implement user profile on your own",id:"implement-user-profile-on-your-own",level:3},{value:"Advanced user search",id:"advanced-user-search",level:3},{value:"How to?",id:"how-to",level:2},{value:"Using pagination",id:"using-pagination",level:2},{value:"Using link headers",id:"using-link-headers",level:3},{value:"Using total-number header",id:"using-total-number-header",level:3},{value:"Changing page number and page size",id:"changing-page-number-and-page-size",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-interact-with-management-api",children:"\ud83d\ude9d Interact with Management API"}),"\n",(0,t.jsx)(n.h2,{id:"what-is-logto-management-api",children:"What is Logto Management API"}),"\n",(0,t.jsx)(n.p,{children:"The Logto Management API is a comprehensive collection of APIs that empower administrators to manage identity-related tasks, enforce security policies, and comply with regulations and standards."}),"\n",(0,t.jsx)(n.p,{children:"With the Logto Management API, you can access Logto's robust backend services, which are highly scalable and can be utilized in a multitude of scenarios. It goes beyond what's possible with the Admin Console's low-code capabilities."}),"\n",(0,t.jsx)(n.p,{children:"Some frequently used APIs are listed below:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"User"}),"\n",(0,t.jsx)(n.li,{children:"Application"}),"\n",(0,t.jsx)(n.li,{children:"Logs"}),"\n",(0,t.jsx)(n.li,{children:"Roles"}),"\n",(0,t.jsx)(n.li,{children:"Resources"}),"\n",(0,t.jsx)(n.li,{children:"Connectors"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about the APIs that are available, please visit ",(0,t.jsx)(n.a,{href:"https://openapi.logto.io/",children:"https://openapi.logto.io/"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Wondering what you can do with the Logto Management API? Here are a few examples of scenarios that are not possible with the Logto Admin Console but can be achieved through the Management API."}),"\n",(0,t.jsx)(n.h2,{id:"some-typical-scenarios",children:"Some typical scenarios"}),"\n",(0,t.jsx)(n.p,{children:"Our Management API can be leveraged in several scenarios. For instance,"}),"\n",(0,t.jsx)(n.h3,{id:"implement-user-profile-on-your-own",children:"Implement user profile on your own"}),"\n",(0,t.jsx)(n.p,{children:"Logto currently does not provide a pre-built UI solution for user profiles. We recognize that user profiles are closely tied to business and product attributes, which raises questions about the value of offering pre-built solutions, particularly from Logto's perspective. While we work on determining the best approach, we suggest using our APIs to create your own solution. For instance, you can utilize our interaction API, profile API, and verification code API to develop a custom solution that meets your needs."}),"\n",(0,t.jsxs)(n.p,{children:["Check out ",(0,t.jsx)(n.a,{href:"/docs/recipes/user-profile/",children:"User Profile"})," for more information."]}),"\n",(0,t.jsx)(n.h3,{id:"advanced-user-search",children:"Advanced user search"}),"\n",(0,t.jsxs)(n.p,{children:["You can certainly use Logto's user management feature in the console for some tasks, our Management API offers additional functions that support more advanced user search scenarios. Check out ",(0,t.jsx)(n.a,{href:"../manage-users/advanced-user-search/",children:"Advanced User Search"})," for more information."]}),"\n",(0,t.jsx)(n.p,{children:"Our developers have implemented many additional features using our Management API. We believe that our API is highly scalable and can support a wide range of your needs. Additionally, we have continued distilling some use cases and incorporated them into our low-code platform to boost productivity and enhance the developer experience."}),"\n",(0,t.jsx)(n.h2,{id:"how-to",children:"How to?"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a machine-to-machine app in Admin Console."}),"\n",(0,t.jsxs)(n.li,{children:["Follow the guide ",(0,t.jsx)(n.a,{href:"/sdk/m2m",children:"Machine-to-machine: Auth with Logto"})," to fetch an Access Token for the API identifier ",(0,t.jsx)(n.code,{children:"https://[your-tenant-id].logto.app/api"})," (indicates Management API) and scope ",(0,t.jsx)(n.code,{children:"all"})," (all permissions)."]}),"\n",(0,t.jsx)(n.li,{children:"Interact with Management API with Bearer authorization using the Access Token."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"Usually the Access Token has a short expiration. If you have a local cache, remember to check and fetch a new Access Token if needed before sending requests."})}),"\n",(0,t.jsx)(n.h2,{id:"using-pagination",children:"Using pagination"}),"\n",(0,t.jsx)(n.p,{children:"Some of the API responses may include many results, the results will be paginated. Logto provides 2 kinds of pagination info."}),"\n",(0,t.jsx)(n.h3,{id:"using-link-headers",children:"Using link headers"}),"\n",(0,t.jsx)(n.p,{children:"A paginated response header will be like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The link header provides the URL for the previous, next, first, and last page of results:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'The URL for the previous page is followed by rel="prev".'}),"\n",(0,t.jsx)(n.li,{children:'The URL for the next page is followed by rel="next".'}),"\n",(0,t.jsx)(n.li,{children:'The URL for the last page is followed by rel="last".'}),"\n",(0,t.jsx)(n.li,{children:'The URL for the first page is followed by rel="first".'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"using-total-number-header",children:"Using total-number header"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to the standard link headers, Logto will also add a ",(0,t.jsx)(n.code,{children:"Total-Number"})," header:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Total-Number: 216\n"})}),"\n",(0,t.jsx)(n.p,{children:"That would be very convenient and useful to show page numbers."}),"\n",(0,t.jsx)(n.h3,{id:"changing-page-number-and-page-size",children:"Changing page number and page size"}),"\n",(0,t.jsx)(n.p,{children:"There are 2 optional query parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"page"}),": indicates the page number, starts from 1, the default value is 1."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"page_size"}),": indicates the number of items per page, the default value is 20."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},17279:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return a}});var t=i(50959);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);