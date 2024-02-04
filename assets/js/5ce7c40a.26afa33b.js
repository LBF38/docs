"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[51255],{87085:function(e,n,i){i.r(n),i.d(n,{assets:function(){return a},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var s=i(11527),t=i(17279);const o={sidebar_position:1},r="Configure SSO",c={id:"docs/recipes/single-sign-on/configure-sso/README",title:"Configure SSO",description:"Enable Single Sign-On (SSO) to streamline access across your services for enterprise users. This guide outlines the steps for setting up SSO using the Logto console.",source:"@site/docs/docs/recipes/single-sign-on/configure-sso/README.md",sourceDirName:"docs/recipes/single-sign-on/configure-sso",slug:"/docs/recipes/single-sign-on/configure-sso/",permalink:"/docs/recipes/single-sign-on/configure-sso/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/single-sign-on/configure-sso/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\u2601\ufe0f Enterprise SSO (SAML & OIDC)",permalink:"/docs/recipes/single-sign-on/"},next:{title:"SAML",permalink:"/docs/recipes/single-sign-on/configure-sso/saml"}},a={},l=[{value:"Enabling SSO in sign-in experience",id:"enabling-sso-in-sign-in-experience",level:2},{value:"Configuring enterprise connectors",id:"configuring-enterprise-connectors",level:2},{value:"Step 1: Create a new enterprise connector",id:"step-1-create-a-new-enterprise-connector",level:3},{value:"Step 2: Configure connection with IdP",id:"step-2-configure-connection-with-idp",level:3},{value:"Step 3: Customize SSO experience and email domain",id:"step-3-customize-sso-experience-and-email-domain",level:3}];function d(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configure-sso",children:"Configure SSO"}),"\n",(0,s.jsx)(n.p,{children:"Enable Single Sign-On (SSO) to streamline access across your services for enterprise users. This guide outlines the steps for setting up SSO using the Logto console."}),"\n",(0,s.jsx)(n.h2,{id:"enabling-sso-in-sign-in-experience",children:"Enabling SSO in sign-in experience"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Enable enterprise SSO"}),": Go to the Logto console, and navigate to \u201cSign-in experience > Sign-in and Sign-up\u201d. Here, locate and enable the \u201cEnterprise SSO\u201d toggle. This action will display a \u201cUse Single Sign-On\u201d button in the right preview."]}),"\n",(0,s.jsx)(n.p,{children:"Once enabled, enterprise users with SSO-enabled email domains can access your services using their enterprise identity providers (IdPs). This is achieved through email domain redirection. Read the next doc to learn more about the SSO experience."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Save changes"}),": Ensure to save your settings to activate these changes."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Sign-in experience_Enable enterprise SSO.webp",src:i(73176).Z+"",width:"2880",height:"2062"})}),"\n",(0,s.jsx)(n.h2,{id:"configuring-enterprise-connectors",children:"Configuring enterprise connectors"}),"\n",(0,s.jsx)(n.p,{children:"Enterprise connectors are crucial for enabling SSO for your different enterprise clients. These connectors facilitate the authentication process between your service and the enterprise IdPs."}),"\n",(0,s.jsx)(n.h3,{id:"step-1-create-a-new-enterprise-connector",children:"Step 1: Create a new enterprise connector"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Access Enterprise SSO section"}),": In the Logto Console, select \u201cEnterprise SSO\u201d."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add connector"}),": Click \u201cAdd enterprise connector\u201c and choose a suitable one. Preferred options include built-in connectors like Okta, Azure AD, and Google Workspace. Alternatively, select SAML or OIDC for other IdPs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Name and Create"}),": Assign a unique name to the connector (e.g., \u201cIdP-name for Organization-name\u201d) and click \u201cCreate\u201d. Then you will access the configuration pages of this connector."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Create enterprise connector.webp",src:i(55541).Z+"",width:"2894",height:"1414"})}),"\n",(0,s.jsx)(n.h3,{id:"step-2-configure-connection-with-idp",children:"Step 2: Configure connection with IdP"}),"\n",(0,s.jsx)(n.p,{children:"In the \u201cConnection\u201d tab, set up the connection between your service and the chosen IdP. For assistance, refer to the \u201cConnection guide\u201d or the documentation specific to each IdP in below. The system will auto-test the connection upon saving. Incorrect configurations will not be saved."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"SAML"}),"\n",(0,s.jsx)(n.li,{children:"OIDC"}),"\n",(0,s.jsx)(n.li,{children:"Azure AD"}),"\n",(0,s.jsx)(n.li,{children:"Google workspace"}),"\n",(0,s.jsx)(n.li,{children:"Okta"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Configure SSO connection.webp",src:i(39723).Z+"",width:"2896",height:"2020"})}),"\n",(0,s.jsx)(n.h3,{id:"step-3-customize-sso-experience-and-email-domain",children:"Step 3: Customize SSO experience and email domain"}),"\n",(0,s.jsx)(n.p,{children:"In the \u201cExperience\u201d tab:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Set email domain"}),": Define the enterprise email domain to direct users to their respective IdPs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User profile sync"}),": Choose how to sync user profiles. Options include syncing only at registration or at every sign-in. Note: Frequent syncing might overwrite user data in your application."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Display customization"}),": Optionally, customize the display name and logo for the connector. This is useful when multiple connectors are associated with a single email domain."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Configure SSO experience",src:i(22736).Z+"",width:"2898",height:"1896"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"An enterprise connector becomes active in the authentication flow after completing the \u201cConnection\u201d settings and adding the \u201cEnterprise email domain\u201d."})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},39723:function(e,n,i){n.Z=i.p+"assets/images/configure-sso-connection-a8a3551079c4ea4f43ea3df8c9e28f8d.webp"},22736:function(e,n,i){n.Z=i.p+"assets/images/configure-sso-experience-c9b114329d440bf900a0168a0ce22abe.webp"},55541:function(e,n,i){n.Z=i.p+"assets/images/create-enterprise-connector-4717fda4e6e50cf30f633d8cb55bb268.webp"},73176:function(e,n,i){n.Z=i.p+"assets/images/sie-enable-enterprise-sso-731e8da1a585a6467297741e8bba9a8b.webp"},17279:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var s=i(50959);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);