"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[81782],{15452:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return a},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return l}});var s=i(11527),t=i(17279);const r={},d="Configuration",o={id:"docs/references/core/configuration",title:"Configuration",description:"Environment variables",source:"@site/docs/docs/references/core/configuration.md",sourceDirName:"docs/references/core",slug:"/docs/references/core/configuration",permalink:"/docs/references/core/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/core/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83e\uddf1 Core Service",permalink:"/docs/references/core/"},next:{title:"\ud83d\udcc1 API Resource",permalink:"/docs/references/resources/"}},c={},l=[{value:"Environment variables",id:"environment-variables",level:2},{value:"Usage",id:"usage",level:3},{value:"Variables",id:"variables",level:3},{value:"Enabling HTTPS",id:"enabling-https",level:3},{value:"Using Node",id:"using-node",level:4},{value:"Using a HTTPS proxy",id:"using-a-https-proxy",level:4},{value:"Database configs",id:"database-configs",level:2},{value:"Supported private key types",id:"supported-private-key-types",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Logto handles environment variables in the following order:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"System environment variables"}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:".env"})," file in the project root, which conforms with ",(0,s.jsx)(n.a,{href:"https://github.com/motdotla/dotenv#readme",children:"dotenv"})," format"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Thus the system environment variables will override the values in ",(0,s.jsx)(n.code,{children:".env"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"variables",children:"Variables"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["If you run Logto via ",(0,s.jsx)(n.code,{children:"npm start"})," in the project root, ",(0,s.jsx)(n.code,{children:"NODE_ENV"})," will always be ",(0,s.jsx)(n.code,{children:"production"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["In default values, ",(0,s.jsx)(n.code,{children:"protocol"})," will be either ",(0,s.jsx)(n.code,{children:"http"})," or ",(0,s.jsx)(n.code,{children:"https"})," according to your HTTPS config."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NODE_ENV"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"'production' | 'test' | undefined"})}),(0,s.jsx)(n.td,{children:"What kind of environment that Logto runs in."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PORT"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"3001"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:"The local port that Logto listens to."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ADMIN_PORT"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"3002"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:"The local port that Logto Admin Console listens to."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ADMIN_DISABLE_LOCALHOST"}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string | boolean | number"})}),(0,s.jsxs)(n.td,{children:["Set it to ",(0,s.jsx)(n.code,{children:"1"})," or ",(0,s.jsx)(n.code,{children:"true"})," to disable the port for Admin Console. With ",(0,s.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," unset, it'll completely disable the Admin Console."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DB_URL"}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6",children:"Postgres DSN"})," for Logto database."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"HTTPS_CERT_PATH"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string | undefined"})}),(0,s.jsxs)(n.td,{children:["See ",(0,s.jsx)(n.a,{href:"#enabling-https",children:"Enabling HTTPS"})," for details."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"HTTPS_KEY_PATH"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string | undefined"})}),(0,s.jsx)(n.td,{children:"Ditto."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TRUST_PROXY_HEADER"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:"Ditto."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ENDPOINT"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'protocol://localhost:$PORT'"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["You may specify a URL with your custom domain for online testing or production. This will also affect the value of the ",(0,s.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier",children:"OIDC issuer identifier"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ADMIN_ENDPOINT"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"'protocol://localhost:$ADMIN_PORT'"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["You may specify a URL with your custom domain for production (E.g. ",(0,s.jsx)(n.code,{children:"ADMIN_ENDPOINT=https://admin.domain.com"}),"). This will also affect the value of Admin Console Redirect URIs."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CASE_SENSITIVE_USERNAME"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:"Specifies whether the username is case-sensitive. Exercise caution when modifying this value; changes will not automatically adjust existing database data, requiring manual management."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"enabling-https",children:"Enabling HTTPS"}),"\n",(0,s.jsx)(n.h4,{id:"using-node",children:"Using Node"}),"\n",(0,s.jsxs)(n.p,{children:["Node natively supports HTTPS. Provide ",(0,s.jsx)(n.strong,{children:"BOTH"})," ",(0,s.jsx)(n.code,{children:"HTTPS_CERT_PATH"})," and ",(0,s.jsx)(n.code,{children:"HTTPS_KEY_PATH"})," to enable HTTPS via Node."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HTTPS_CERT_PATH"})," implies the path to your HTTPS certificate, while ",(0,s.jsx)(n.code,{children:"HTTPS_KEY_PATH"})," implies the path to your HTTPS key."]}),"\n",(0,s.jsx)(n.h4,{id:"using-a-https-proxy",children:"Using a HTTPS proxy"}),"\n",(0,s.jsx)(n.p,{children:"Another common practice is to have an HTTPS proxy in front of Node (E.g. Nginx)."}),"\n",(0,s.jsxs)(n.p,{children:["In this case, you're likely want to set ",(0,s.jsx)(n.code,{children:"TRUST_PROXY_HEADER"})," to ",(0,s.jsx)(n.code,{children:"true"})," which indicates if proxy header fields should be trusted. Logto will pass the value to ",(0,s.jsx)(n.a,{href:"https://github.com/koajs/koa/blob/master/docs/api/index.md#settings",children:"Koa app settings"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies",children:"Trusting TLS offloading proxies"})," for when to configure this field."]}),"\n",(0,s.jsx)(n.h2,{id:"database-configs",children:"Database configs"}),"\n",(0,s.jsxs)(n.p,{children:["Managing too many environment variables are not efficient and flexible, so most of our general configs are stored in the database table ",(0,s.jsx)(n.code,{children:"logto_configs"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The table is a simple key-value storage, and the key is enumerable as following:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Key"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"oidc.cookieKeys"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string[]"})}),(0,s.jsxs)(n.td,{children:["The string array of the ",(0,s.jsx)(n.a,{href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys",children:"signing cookie keys"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"oidc.privateKeys"}),(0,s.jsx)(n.td,{children:(0,s.jsx)("code",{children:"string[]"})}),(0,s.jsxs)(n.td,{children:["The string array of the private key content for ",(0,s.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#Signing",children:"OIDC JWT signing"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"supported-private-key-types",children:"Supported private key types"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"EC (P-256, secp256k1, P-384, and P-521 curves)"}),"\n",(0,s.jsx)(n.li,{children:"RSA"}),"\n",(0,s.jsx)(n.li,{children:"OKP (Ed25519, Ed448, X25519, X448 sub types)"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},17279:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return d}});var s=i(50959);const t={},r=s.createContext(t);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);