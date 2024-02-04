"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2696],{92303:function(e,s,n){n.r(s),n.d(s,{assets:function(){return u},contentTitle:function(){return a},default:function(){return x},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return p}});var i=n(11527),r=n(17279),o=n.p+"assets/images/bookstore-roles-0b0ab0165df2b97cd953c522b9634dc8.png",d=n.p+"assets/images/bookstore-setup-2ecd9416e0a72b8af773c79ed5d213df.png",t=n.p+"assets/images/permissions-130d7c9cd4ec9f6f55b810deadacc754.png",c=n.p+"assets/images/role-order-admin-a8c318597a9cc8929f3028cf2f4ca765.png";const l={sidebar_position:8},a="\ud83d\udd10 Role-based access control (RBAC)",h={id:"docs/recipes/rbac/README",title:"\ud83d\udd10 Role-based access control (RBAC)",description:"Intro",source:"@site/docs/docs/recipes/rbac/README.mdx",sourceDirName:"docs/recipes/rbac",slug:"/docs/recipes/rbac/",permalink:"/docs/recipes/rbac/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/rbac/README.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Secure your webhooks",permalink:"/docs/recipes/webhooks/securing-your-webhooks"},next:{title:"Manage permissions and roles",permalink:"/docs/recipes/rbac/manage-permissions-and-roles"}},u={},p=[{value:"Intro",id:"intro",level:2},{value:"RBAC in Logto",id:"rbac-in-logto",level:2},{value:"Permissions (Scopes)",id:"permissions-scopes",level:3},{value:"Roles",id:"roles",level:3},{value:"Example: An online bookstore",id:"example-an-online-bookstore",level:2},{value:"Recap",id:"recap",level:2}];function m(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"-role-based-access-control-rbac",children:"\ud83d\udd10 Role-based access control (RBAC)"}),"\n",(0,i.jsx)(s.h2,{id:"intro",children:"Intro"}),"\n",(0,i.jsx)(s.p,{children:"Role-based access control (RBAC) is a method of assigning permissions to users based on their roles. By controlling access to resources through role authorization, RBAC can help in different perspectives:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Improved security"})})," By assigning permissions based on roles, RBAC limits access to resources only to those who need it. This reduces the risk of unauthorized access and data breaches."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Greater efficiency"})})," RBAC allows for quick and easy addition and modification of roles and permissions and implementing them across APIs, making it easy to manage access rights for large numbers of users."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Reduced administrative overhead"})})," RBAC eliminates the need for manual assignment of permissions and reduces the potential errors."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Better compliance"})})," RBAC can help organizations comply with regulatory and statutory requirements for confidentiality and privacy by ensuring that only authorized users have access to sensitive data."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Flexibility"})})," RBAC can be easily customized and adapted to suit the specific needs of an organization, making it a versatile access control method."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Scalability"})})," RBAC can be implemented in an organization of any size, from small businesses to large enterprises, and can be easily scaled up or down as necessary."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"rbac-in-logto",children:"RBAC in Logto"}),"\n",(0,i.jsx)(s.p,{children:"In Logto, we have implemented RBAC using the most standard and scalable method, allowing for a wide range of scenarios. To understand how it works, it's important to familiarize yourself with key terms:"}),"\n",(0,i.jsx)(s.h3,{id:"permissions-scopes",children:"Permissions (Scopes)"}),"\n",(0,i.jsxs)(s.p,{children:["Permission refers to the authorization to access a resource (we call it ",(0,i.jsx)(s.a,{href:"/docs/references/resources/",children:"API Resource"}),"). In the real world, entities such as orders, products, and documents can be designated as resources, and various actions can be assigned."]}),"\n",(0,i.jsx)(s.admonition,{title:"note",type:"info",children:(0,i.jsxs)(s.p,{children:['"Permission" is identical to "scope" in ',(0,i.jsx)(s.a,{href:"https://oauth.net/2/scope/",children:"OAuth 2.0"}),'. We use the word "permission" in Admin Console since it\'s more intuitive for business.']})}),"\n",(0,i.jsx)(s.p,{children:"Examples of permissions, including the ability to edit an order, read a document, and delete a product, are as follows:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"write:orders"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"read:documents"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"delete:products"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["In Logto, a permission ",(0,i.jsx)(s.strong,{children:"ALWAYS"})," belongs to an API Resource."]}),"\n",(0,i.jsx)("img",{width:"500",src:t,alt:"Permissions"}),"\n",(0,i.jsxs)(s.p,{children:["The above figure shows the permission ",(0,i.jsx)(s.code,{children:"read:item"})," in resource ",(0,i.jsx)(s.code,{children:"https://api-1.store.io"})," is different from the permission ",(0,i.jsx)(s.code,{children:"read:item"})," in resource ",(0,i.jsx)(s.code,{children:"https://api-2.store.io"}),"."]}),"\n",(0,i.jsx)(s.p,{children:'If no API Resource is provided, permission will be treated as "for OIDC". Usually this is not what you want in RBAC.'}),"\n",(0,i.jsx)(s.h3,{id:"roles",children:"Roles"}),"\n",(0,i.jsxs)(s.p,{children:["Roles are ",(0,i.jsx)(s.em,{children:"a grouping of permissions"})," that can be assigned to users. They also provide a way to aggregate permissions defined for different APIs, making adding, removing, or adjusting permissions more efficient than assigning them individually to users."]}),"\n",(0,i.jsxs)(s.p,{children:["Here's an example of an ",(0,i.jsx)(s.code,{children:"order_admin"})," role with several permissions for two resources:"]}),"\n",(0,i.jsx)("img",{width:"550",src:c,alt:"Role order_admin"}),"\n",(0,i.jsx)(s.p,{children:"Also, it's OK to have permission overlap between roles."}),"\n",(0,i.jsx)(s.h2,{id:"example-an-online-bookstore",children:"Example: An online bookstore"}),"\n",(0,i.jsx)(s.p,{children:"Let's say you have an online bookstore to manage. Here, we greatly simplify the access control model for demonstration purpose."}),"\n",(0,i.jsx)(s.p,{children:"The model is divided to two major API Resources: orders and products. They have different resource indicators as below:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Orders: ",(0,i.jsx)(s.code,{children:"https://api.store.io/orders"})]}),"\n",(0,i.jsxs)(s.li,{children:["Products: ",(0,i.jsx)(s.code,{children:"https://api.store.io/products"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"For each resource, you'd like to separate permissions into read, write, and delete. So you define six permissions in total:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"https://api.store.io/orders"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Permission ",(0,i.jsx)(s.code,{children:"read:order"})]}),"\n",(0,i.jsxs)(s.li,{children:["Permission ",(0,i.jsx)(s.code,{children:"write:order"})]}),"\n",(0,i.jsxs)(s.li,{children:["Permission ",(0,i.jsx)(s.code,{children:"delete:order"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"https://api.store.io/products"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Permission ",(0,i.jsx)(s.code,{children:"read:product"})]}),"\n",(0,i.jsxs)(s.li,{children:["Permission ",(0,i.jsx)(s.code,{children:"write:product"})]}),"\n",(0,i.jsxs)(s.li,{children:["Permission ",(0,i.jsx)(s.code,{children:"delete:product"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Here's the illustration of this model:"}),"\n",(0,i.jsx)("img",{width:"500",src:d,alt:"Bookstore setup"}),"\n",(0,i.jsx)(s.p,{children:"You want to have two types of admin, order admin and product admin:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Order admin"})})," can manage orders and see products (as orders consist of products), but cannot manage products."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Product admin"})})," can manage products, and they should not be aware of any orders."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["So you create two roles, ",(0,i.jsx)(s.code,{children:"order_admin"})," and ",(0,i.jsx)(s.code,{children:"product_admin"}),", with the permissions:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"order_admin"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"https://api.store.io/orders"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"read:order"}),", ",(0,i.jsx)(s.code,{children:"write:order"}),", ",(0,i.jsx)(s.code,{children:"delete:order"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"https://api.store.io/products"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"read:product"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"product_admin"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"https://api.store.io/products"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"read:product"}),", ",(0,i.jsx)(s.code,{children:"write:product"}),", ",(0,i.jsx)(s.code,{children:"delete:product"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Here's the illustration of these two roles:"}),"\n",(0,i.jsx)("img",{width:"800",src:o,alt:"Bookstore roles"}),"\n",(0,i.jsxs)(s.p,{children:["It's OK to assign both ",(0,i.jsx)(s.code,{children:"order_admin"})," and ",(0,i.jsx)(s.code,{children:"product_admin"})," to a user, then they will have all six permissions you just defined."]}),"\n",(0,i.jsxs)(s.p,{children:["Note the order admin shares the permission ",(0,i.jsx)(s.code,{children:"read:product"})," with the product admin, and the final permissions that a user holds is the union of all permissions from the roles they has been assigned."]}),"\n",(0,i.jsx)(s.h2,{id:"recap",children:"Recap"}),"\n",(0,i.jsx)(s.p,{children:"We introduced two new terms: permission and role. To summarize:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"An API resource can hold multiple permissions."}),"\n",(0,i.jsx)(s.li,{children:'When we talk about a permission, we are actually talking about "a permission of an API Resource".'}),"\n",(0,i.jsx)(s.li,{children:"A role is a group of permissions."}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},17279:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return d}});var i=n(50959);const r={},o=i.createContext(r);function d(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);