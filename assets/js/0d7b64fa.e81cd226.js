"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[63317],{49613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var i=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),g=a,f=c["".concat(l,".").concat(g)]||c[g]||m[g]||o;return t?i.createElement(f,r(r({ref:n},p),{},{components:t})):i.createElement(f,r({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},32114:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var i=t(665),a=t(40151),o=(t(59496),t(49613)),r=t.p+"assets/images/organization-example-afa2da085d6afd66d90ecece13bedd5c.webp",s=t.p+"assets/images/organization-role-ae60e0000282d30a23f9c694c4074d5f.webp",l=["components"],d={sidebar_position:1},p="Understand how organizations work",m={unversionedId:"docs/recipes/organizations/understand-how-it-works",id:"version-1.x/docs/recipes/organizations/understand-how-it-works",title:"Understand how organizations work",description:"Organization",source:"@site/versioned_docs/version-1.x/docs/recipes/organizations/understand-how-it-works.mdx",sourceDirName:"docs/recipes/organizations",slug:"/docs/recipes/organizations/understand-how-it-works",permalink:"/docs/recipes/organizations/understand-how-it-works",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/organizations/understand-how-it-works.mdx",tags:[],version:"1.x",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83c\udfe2 Organizations (Multi-tenancy)",permalink:"/docs/recipes/organizations/"},next:{title:"Configure organizations",permalink:"/docs/recipes/organizations/configuration"}},c={},g=[{value:"Organization",id:"organization",level:2},{value:"Organization member",id:"organization-member",level:2},{value:"Organization permission",id:"organization-permission",level:2},{value:"Organization role",id:"organization-role",level:2},{value:"Organization template",id:"organization-template",level:2},{value:"Managing identities in organizations",id:"managing-identities-in-organizations",level:2}],f={toc:g};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"understand-how-organizations-work"},"Understand how organizations work"),(0,o.kt)("h2",{id:"organization"},"Organization"),(0,o.kt)("p",null,"Organization consists of a group of users (identities). It can represent the teams, business customers, and partner companies who can access to your application."),(0,o.kt)("p",null,"The introduction of an organization as an entity is important, as it not only groups users but also provides a context for tenant isolation in multi-tenant apps. To learn more about tenant isolation, check out our multi-tenant application best practice."),(0,o.kt)("h2",{id:"organization-member"},"Organization member"),(0,o.kt)("p",null,"In Logto, a user who has the membership of an organization is referred to as an organization member (i.e. member) within that organization's context."),(0,o.kt)("center",null,(0,o.kt)("img",{alt:"Organization member",src:"data:image/webp;base64,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",width:720})),(0,o.kt)("h2",{id:"organization-permission"},"Organization permission"),(0,o.kt)("p",null,"Organization permission refers to the authorization to perform an action in the context of organization. An organization permission should be represented as a meaningful string, also serving as the name and unique identifier."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"edit:resource"),"."),(0,o.kt)("center",null,(0,o.kt)("img",{alt:"Organization permission",src:"data:image/webp;base64,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",width:720})),(0,o.kt)("p",null,"Organization permissions are not meaningful without the context of an organization. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"edit:resource")," in the context of organization ",(0,o.kt)("inlineCode",{parentName:"p"},"org1")," is different from ",(0,o.kt)("inlineCode",{parentName:"p"},"edit:resource")," in the context of organization ",(0,o.kt)("inlineCode",{parentName:"p"},"org2"),"."),(0,o.kt)("h2",{id:"organization-role"},"Organization role"),(0,o.kt)("p",null,"Organization role is a grouping of organization permissions that can be assigned to users. The permissions must come from the predefined organization permissions."),(0,o.kt)("center",null,(0,o.kt)("img",{alt:"Organization role",src:s,width:720})),(0,o.kt)("p",null,"Organization roles are not meaningful without the context of an organization. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," in the context of organization ",(0,o.kt)("inlineCode",{parentName:"p"},"org1")," is different from ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," in the context of organization ",(0,o.kt)("inlineCode",{parentName:"p"},"org2"),"."),(0,o.kt)("h2",{id:"organization-template"},"Organization template"),(0,o.kt)("p",null,"Organization template refers to a collection of organization permissions and roles that apply to every organization."),(0,o.kt)("p",null,'Think of a typical collaboration app, and they naturally share the same access control \u201ctemplate\u201d that defines access levels and what users can do in the organization. We call it "organization template\u201d in Logto.'),(0,o.kt)("p",null,"Let\u2019s take an example to understand how everything connects:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"John"),", ",(0,o.kt)("strong",{parentName:"p"},"Sarah")," are in different organizations with different roles in the context of different organizations."),(0,o.kt)("img",{alt:"Organization example with template",src:r,style:{padding:"12px 24px",background:"white"}}),(0,o.kt)("p",null,"From this diagram, here are some info you need to know:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"John"),' is affiliated with two organizations, using the email "',(0,o.kt)("a",{parentName:"li",href:"mailto:john@email.com"},"john@email.com"),'" as his unique identifier. He holds the position of ',(0,o.kt)("inlineCode",{parentName:"li"},"admin")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"Organization A")," and is a ",(0,o.kt)("inlineCode",{parentName:"li"},"guest")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"Organization B"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Sarah"),' is associated with a single organization and uses the email "',(0,o.kt)("a",{parentName:"li",href:"mailto:sarah@email.com"},"sarah@email.com"),'" as her unique identifier. She is the ',(0,o.kt)("inlineCode",{parentName:"li"},"admin")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"Organization B"),"."),(0,o.kt)("li",{parentName:"ol"},"The roles of ",(0,o.kt)("inlineCode",{parentName:"li"},"Admin"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Member"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"Guest")," are designated within organizations and these roles are consistent across various organizations."),(0,o.kt)("li",{parentName:"ol"},"Additional roles can be created within the organization template settings. These newly created roles will be applied and shared across all organizations.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udca1 In Logto, the organization template serves as an access control model tailored for organizations. While it's based on the RBAC (role-based access control) model, it differs from the API resource RBAC feature."),(0,o.kt)("p",{parentName:"admonition"},"When you need to design roles and permissions specific to an organization, use the organization template (organization RBAC)."),(0,o.kt)("p",{parentName:"admonition"},"You can use both organization RBAC and API resource RBAC in Logto, allowing a more robust approach to meet your specific business and product requirements. For details on API resource RBAC, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.logto.io/docs/recipes/rbac/"},"this section"),".")),(0,o.kt)("h2",{id:"managing-identities-in-organizations"},"Managing identities in organizations"),(0,o.kt)("p",null,"The organization template in Logto is intended to secure isolated resources at the organizational level, ensuring users in different roles have the right access."),(0,o.kt)("p",null,"You may notice that the organization template doesn\u2019t define identity management, such as which role can invite or remove users in an organization, since it varis for different products and business needs."),(0,o.kt)("p",null,"While we are working on a productized solution for organization idenitty management, you can use the Management API to tailor a solution. For detailed guidance on using the management API for this, please refer to this section."))}u.isMDXComponent=!0}}]);