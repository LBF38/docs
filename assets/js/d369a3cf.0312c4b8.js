"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[67132],{86286:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return d}});var o=i(11527),t=i(17279);const r={sidebar_position:2},a="Configure organizations",s={id:"docs/recipes/organizations/configuration",title:"Configure organizations",description:"Configure via Console",source:"@site/docs/docs/recipes/organizations/configuration.mdx",sourceDirName:"docs/recipes/organizations",slug:"/docs/recipes/organizations/configuration",permalink:"/docs/recipes/organizations/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/organizations/configuration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Understand how organizations work",permalink:"/docs/recipes/organizations/understand-how-it-works"},next:{title:"Impact on end-user sign-in experience",permalink:"/docs/recipes/organizations/impact-on-end-users"}},l={},d=[{value:"Configure via Console",id:"configure-via-console",level:2},{value:"Start setting up your organization feature",id:"start-setting-up-your-organization-feature",level:3},{value:"Configure organization template",id:"configure-organization-template",level:3},{value:"Adding members and assigning organization roles",id:"adding-members-and-assigning-organization-roles",level:3},{value:"Configure via Management API",id:"configure-via-management-api",level:2},{value:"Example: Develop a platform or interface that enables your clients to manage identities within their organization",id:"example-develop-a-platform-or-interface-that-enables-your-clients-to-manage-identities-within-their-organization",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configure-organizations",children:"Configure organizations"}),"\n",(0,o.jsx)(n.h2,{id:"configure-via-console",children:"Configure via Console"}),"\n",(0,o.jsxs)(n.p,{children:["We'll go through the process of configuring the organizations feature via Logto Console (",(0,o.jsx)(n.a,{href:"https://cloud.logto.io/",children:"https://cloud.logto.io/"}),")."]}),"\n",(0,o.jsx)(n.h3,{id:"start-setting-up-your-organization-feature",children:"Start setting up your organization feature"}),"\n",(0,o.jsx)(n.p,{children:"When you activate the organization feature, you'll be guided through essential settings like setting up organization permissions, roles, and creating your first organization. You will gain a clearer understanding of how organizations function within Logto. After the initial setup, you can add members, assign roles within the organization, or refine your organization template."}),"\n",(0,o.jsx)(n.p,{children:"In the organization list, you can create an organization and configure its details. On the organization details page, you can:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Modify the organization's name and description."}),"\n",(0,o.jsx)(n.li,{children:"Add members and assign them organization roles."}),"\n",(0,o.jsx)(n.li,{children:"Remove a user's membership in the organization."}),"\n",(0,o.jsx)(n.li,{children:"Delete the organization."}),"\n",(0,o.jsx)(n.li,{children:"Access a guide to understand more about organizations and the organization template."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-organization-template",children:"Configure organization template"}),"\n",(0,o.jsx)(n.p,{children:"The organization template consists of permissions and roles, which can be edited freely; any changes will affect users with those roles across all organizations."}),"\n",(0,o.jsx)(n.h3,{id:"adding-members-and-assigning-organization-roles",children:"Adding members and assigning organization roles"}),"\n",(0,o.jsx)(n.p,{children:"Users can hold one or more roles. When adding members to an organization, you have the option to assign roles to multiple users at once. If you leave this assignment blank, the added users will not receive any roles."}),"\n",(0,o.jsx)(n.p,{children:"In the user management section, on the user detail page, you can see which organizations the users belong to and what organization roles they have."}),"\n",(0,o.jsx)(n.h2,{id:"configure-via-management-api",children:"Configure via Management API"}),"\n",(0,o.jsx)(n.p,{children:"Everything you can do in Console can also be done through Management API. This includes, but not limited to:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Create, delete, or edit an organization."}),"\n",(0,o.jsx)(n.li,{children:"Add users to the organization."}),"\n",(0,o.jsx)(n.li,{children:"Remove users from the organization."}),"\n",(0,o.jsx)(n.li,{children:"Manage organization template:"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Add, delete, or edit organization roles."}),"\n",(0,o.jsx)(n.li,{children:"Add, delete, or edit organization permissions."}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"Assign or remove user's organization roles."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For a complete list of capabilities, please refer to our ",(0,o.jsx)(n.a,{href:"https://openapi.logto.io/group/endpoint-organizations",children:"API references"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"example-develop-a-platform-or-interface-that-enables-your-clients-to-manage-identities-within-their-organization",children:"Example: Develop a platform or interface that enables your clients to manage identities within their organization"}),"\n",(0,o.jsx)(n.p,{children:"A common scenario for your product involves having both admins and members. They will manage resources and identities at different levels."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Role"}),(0,o.jsx)(n.th,{children:"Permissions"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Admin"}),(0,o.jsx)(n.td,{children:"Able to invite users to and remove users from the organization."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Member"}),(0,o.jsx)(n.td,{children:"Only able to invite users to the organization."})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"So we can define the following organization template:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Organization permissions: ",(0,o.jsx)(n.code,{children:"invite:users"}),", ",(0,o.jsx)(n.code,{children:"remove:users"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Organization roles:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"admin"})," with permissions ",(0,o.jsx)(n.code,{children:"invite:users"})," and ",(0,o.jsx)(n.code,{children:"remove:users"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"member"})," with permission ",(0,o.jsx)(n.code,{children:"remove:users"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"POST /organization-scopes"})," in Management API to create the organization permissions first, then use ",(0,o.jsx)(n.code,{children:"POST /organization-roles"})," to create roles."]}),"\n",(0,o.jsx)(n.p,{children:"After organization template is set, you may also create two APIs in your service that call Management API under the hood for inviting and removing users in a specific organization. The APIs in your service should check organizaiton acces token to ensure the user has the right access. See Organization RBAC for details."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},17279:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return a}});var o=i(50959);const t={},r=o.createContext(t);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);