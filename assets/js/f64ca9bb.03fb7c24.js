"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[65278],{95728:function(e,n,s){s.r(n),s.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return o},frontMatter:function(){return t},metadata:function(){return a},toc:function(){return c}});var r=s(11527),i=s(17279);const t={},d="\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users",a={id:"docs/references/users/README",title:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users",description:"The users are the main entities of the identity service.",source:"@site/docs/docs/references/users/README.md",sourceDirName:"docs/references/users",slug:"/docs/references/users/",permalink:"/docs/references/users/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/users/README.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Platform SDK",permalink:"/docs/references/sdk-convention/platform-sdk-convention"},next:{title:"Social identities",permalink:"/docs/references/users/social-identities"}},l={},c=[{value:"Profile",id:"profile",level:2},{value:"Basic data",id:"basic-data",level:2},{value:"id",id:"id",level:3},{value:"username",id:"username",level:3},{value:"primary_email",id:"primary_email",level:3},{value:"primary_phone",id:"primary_phone",level:3},{value:"name",id:"name",level:3},{value:"avatar",id:"avatar",level:3},{value:"application_id",id:"application_id",level:3},{value:"last_signed_in_at",id:"last_signed_in_at",level:3},{value:"password_encrypted",id:"password_encrypted",level:3},{value:"password_encryption_method",id:"password_encryption_method",level:3},{value:"is_suspended",id:"is_suspended",level:3},{value:"Property reference",id:"property-reference",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-users",children:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"users"})," are the main entities of the identity service.\nWe will describe the user-related concepts and details in the following."]}),"\n",(0,r.jsx)(n.h2,{id:"profile",children:"Profile"}),"\n",(0,r.jsxs)(n.p,{children:["Each user has a profile containing ",(0,r.jsx)(n.a,{href:"#property-reference",children:"all user information"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"It consists of the following types of data:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/references/users/social-identities",children:"Social identities"}),": stores the user info retrieved from social sign-in (i.e., sign-in with a social connector), such as Facebook, GitHub, and WeChat."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/references/users/custom-data",children:"Custom data"}),": stores additional user info not listed in the pre-defined user properties, such as user-preferred color and language."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#basic-data",children:"Basic data"}),": is the basic info from the user profile. It stores all other ",(0,r.jsx)(n.em,{children:"user"}),"'s properties except for ",(0,r.jsx)(n.em,{children:"identities"})," and ",(0,r.jsx)(n.em,{children:"custom_data"}),", such as user id, username, email, phone number, and when the user last signed in."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here is a sample of a user's data which is retrieved from a sign-in to Facebook:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "id": "iHXPuSb9eMzt",\n  "username": null,\n  "primaryEmail": null,\n  "primaryPhone": null,\n  "name": "John Joe",\n  "avatar": "https://example.com/avatar.png",\n  "customData": {\n    "preferences": {\n      "language": "en",\n      "color": "#f236c9"\n    }\n  },\n  "identities": {\n    "facebook": {\n      "userId": "106077000000000",\n      "details": {\n        "id": "106077000000000",\n        "name": "John Joe",\n        "email": "johnjoe@logto.io",\n        "avatar": "https://example.com/avatar.png"\n      }\n    }\n  },\n  "lastSignInAt": 1655799453171,\n  "applicationId": "admin_console"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can query the user profile using\n",(0,r.jsx)(n.a,{href:"/docs/recipes/manage-users/admin-console#view-and-update-user-profile",children:"Admin Console"})," or\n",(0,r.jsx)(n.a,{href:"/docs/recipes/manage-users/management-api",children:"Management API"}),",\nsuch as ",(0,r.jsx)("a",{href:"https://openapi.logto.io/operation/operation-get-api-users-parameter",target:"_blank",children:(0,r.jsx)(n.code,{children:"GET /api/users/:userId"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"basic-data",children:"Basic data"}),"\n",(0,r.jsxs)(n.p,{children:["Let's walk through all properties in of user's ",(0,r.jsx)(n.em,{children:"basic data"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"id",children:"id"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"id"})," is a unique auto-generated key to identify the user in Logto."]}),"\n",(0,r.jsx)(n.h3,{id:"username",children:"username"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"username"})," is used for sign-in with ",(0,r.jsx)(n.em,{children:"username"})," and password."]}),"\n",(0,r.jsxs)(n.p,{children:["Its value is from the username that the user first registered with.\nIt may be ",(0,r.jsx)(n.code,{children:"null"}),".\nIts non-null value should be no longer than 128 characters, only contain letters, numbers, and underscores (",(0,r.jsx)(n.code,{children:"_"}),"), and NOT start with a number."]}),"\n",(0,r.jsx)(n.h3,{id:"primary_email",children:"primary_email"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"primary_email"})," is the user's email address, used for sign-in with the email and passcode."]}),"\n",(0,r.jsxs)(n.p,{children:["Its value is usually from the email address that the user first registered with.\nIt may be ",(0,r.jsx)(n.code,{children:"null"}),".\nIts max length is 128."]}),"\n",(0,r.jsx)(n.h3,{id:"primary_phone",children:"primary_phone"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"primary_phone"})," is the user's phone number, used for sign-in with the phone number and passcode from SMS."]}),"\n",(0,r.jsxs)(n.p,{children:["Its value is usually from the phone number that the user first registered with.\nIt may be ",(0,r.jsx)(n.code,{children:"null"}),".\nIts non-null value should contain numbers prefixed with the\n",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_country_calling_codes",children:"country calling code"})," (excluding the plus sign ",(0,r.jsx)(n.code,{children:"+"}),")."]}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"name"})," is the user's full name.\nIts max length is 128."]}),"\n",(0,r.jsx)(n.h3,{id:"avatar",children:"avatar"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"avatar"})," is the URL pointing to the user's avatar image.\nIts max length is 2048."]}),"\n",(0,r.jsx)(n.p,{children:"If the user registers with a social connector like Facebook and WeChat, its value may be retrieved from the social user info."}),"\n",(0,r.jsx)(n.h3,{id:"application_id",children:"application_id"}),"\n",(0,r.jsxs)(n.p,{children:["The value of ",(0,r.jsx)(n.a,{href:"/docs/references/applications/#application-id",children:(0,r.jsx)(n.em,{children:"application_id"})})," is from the application the user first signed in to.\nIt may be ",(0,r.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"last_signed_in_at",children:"last_signed_in_at"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"last_signed_in_at"})," is the timestamp with the timezone when the user signed in last time."]}),"\n",(0,r.jsx)(n.h3,{id:"password_encrypted",children:"password_encrypted"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"password_encrypted"})," is used to store the user's encrypted password."]}),"\n",(0,r.jsxs)(n.p,{children:["Its value is from the password that the user first registered with.\nIt may be ",(0,r.jsx)(n.code,{children:"null"}),".\nIf its value is non-null, its original content before encryption should be at least six characters."]}),"\n",(0,r.jsx)(n.h3,{id:"password_encryption_method",children:"password_encryption_method"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"password_encryption_method"})," is used to encrypt the user's password.\nIts value is initialized when the user registers with the username and password.\nIt may be ",(0,r.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Logto uses ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Argon2",children:"Argon2"}),"'s implementation ",(0,r.jsx)(n.a,{href:"https://github.com/ranisalt/node-argon2",children:"node-argon2"})," as the encryption method by default; see the reference for details if you're interested."]}),"\n",(0,r.jsxs)(n.p,{children:["Sample a ",(0,r.jsx)(n.em,{children:"password_encrypted"})," and ",(0,r.jsx)(n.em,{children:"password_encryption_method"})," from a user whose password is ",(0,r.jsx)(n.code,{children:"123456"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "password_encryption_method": "Argon2i",\n  "password_encrypted": "$argon2i$v=19$m=4096,t=10,p=1$aZzrqpSX45DOo+9uEW6XVw$O4MdirF0mtuWWWz68eyNAt2u1FzzV3m3g00oIxmEr0U"\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"is_suspended",children:"is_suspended"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"is_suspended"})," is a boolean value that indicates whether a user is suspended or not. The value can be managed by calling the ",(0,r.jsx)(n.a,{href:"/docs/recipes/manage-users/management-api",children:"Logto Management API"})," or using ",(0,r.jsx)(n.a,{href:"/docs/recipes/manage-users/admin-console#suspend-user",children:"Admin Console"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Once a user is suspended the pre-granted refresh tokens will be revoked immediately and the user won't be able to get authenticated by Logto anymore."}),"\n",(0,r.jsx)(n.h2,{id:"property-reference",children:"Property reference"}),"\n",(0,r.jsxs)(n.p,{children:["The following properties (except ",(0,r.jsx)(n.em,{children:"password_encrypted"})," and ",(0,r.jsx)(n.em,{children:"password_encryption_method"}),") are visible on the user profile,\nwhich means you can query them using ",(0,r.jsx)(n.a,{href:"/docs/recipes/manage-users/management-api",children:"Management API"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Unique"}),(0,r.jsx)(n.th,{children:"Required"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#id",children:"id"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Unique identifier"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#username",children:"username"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Username for sign-in"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"\u274c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#primary_email",children:"primary_email"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Primary email"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"\u274c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#primary_phone",children:"primary_phone"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Primary phone number"}),(0,r.jsx)(n.td,{children:"\u2705"}),(0,r.jsx)(n.td,{children:"\u274c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#name",children:"name"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Full name"}),(0,r.jsx)(n.td,{children:"\u274c"}),(0,r.jsx)(n.td,{children:"\u274c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#avatar",children:"avatar"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"URL pointing to user's avatar image"}),(0,r.jsx)(n.td,{children:"\u274c"}),(0,r.jsx)(n.td,{children:"\u274c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/references/users/social-identities",children:"identities"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"User info retrieved from social sign-in"}),(0,r.jsx)(n.td,{children:"\u274c"}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/references/users/custom-data",children:"custom_data"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Additional info in customizable properties"}),(0,r.jsx)(n.td,{children:"\u274c"}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#application_id",children:"application_id"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Application ID that the user first registered"}),(0,r.jsx)(n.td,{children:"\u274c"}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#last_signed_in_at",children:"last_sign_in_at"})}),(0,r.jsx)(n.td,{children:"date time"}),(0,r.jsx)(n.td,{children:"Timestamp when the user signed in last time"}),(0,r.jsx)(n.td,{children:"\u274c"}),(0,r.jsx)(n.td,{children:"\u2705"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#password_encrypted",children:"password_encrypted"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Encrypted password"}),(0,r.jsx)(n.td,{children:"\u274c"}),(0,r.jsx)(n.td,{children:"\u274c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#password_encryption_method",children:"password_encryption_method"})}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Password encryption method"}),(0,r.jsx)(n.td,{children:"\u274c"}),(0,r.jsx)(n.td,{children:"\u274c"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#is_suspended",children:"is_suspended"})}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:"User suspend mark"}),(0,r.jsx)(n.td,{children:"\u274c"}),(0,r.jsx)(n.td,{children:"\u2705"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Unique"}),": Ensures the ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS",children:"uniqueness"})," of the values entered into a property of a database table."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Required"}),": Ensures that the values entered a property of a database table can NOT be ",(0,r.jsx)(n.code,{children:"NULL"}),"."]}),"\n"]})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},17279:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var r=s(50959);const i={},t=r.createContext(i);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);