"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[41671],{47832:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=t(11527),o=t(17279),a=t(75268),s=t(67234);const i={sidebar_position:6},l="Migrate configs from env",c={id:"docs/references/using-cli/migrate-from-env",title:"Migrate configs from env",description:"You can skip this page if your Logto version is greater than or equal to v1.0.0-beta.11.",source:"@site/docs/docs/references/using-cli/migrate-from-env.mdx",sourceDirName:"docs/references/using-cli",slug:"/docs/references/using-cli/migrate-from-env",permalink:"/docs/references/using-cli/migrate-from-env",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/using-cli/migrate-from-env.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Translation",permalink:"/docs/references/using-cli/translation"},next:{title:"Rotate signing keys",permalink:"/docs/references/using-cli/rotate-signing-keys"}},u={},d=[];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"migrate-configs-from-env",children:"Migrate configs from env"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can skip this page if your Logto version is greater than or equal to ",(0,r.jsx)(n.code,{children:"v1.0.0-beta.11"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Managing too many environment variables are not efficient and flexible, and it\u2019s hard to keep a single source of truth when you have multiple containers running."}),"\n",(0,r.jsx)(n.p,{children:"So we decided to move all possible technical configs to the database, including OIDC-related keys."}),"\n",(0,r.jsxs)(n.p,{children:["To make it smooth, make sure you have an original ",(0,r.jsx)(n.code,{children:".env"})," file, or run the command in an environment that has the following variables:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"OIDC_PRIVATE_KEYS=some_secret_key # Or OIDC_PRIVATE_KEY_PATHS\nOIDC_COOKIE_KEYS=key1,key2\nDB_URL=postgresql://localhost:5432/logto\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then run the command below:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"cmd",children:[(0,r.jsx)(a.Z,{value:"cli",label:"CLI",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"logto db seed oidc\n# Or\nlogto db seed oidc --env /your/path/to/.env\n"})})}),(0,r.jsx)(a.Z,{value:"npx",label:"npx",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db seed oidc\n# Or\nnpx @logto/cli db seed oidc --env /your/path/to/.env\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"If everything goes well, you will see the message like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[info] Read config oidc.privateKeys from env\n[info] Read config oidc.cookieKeys from env\n[info] Generated config oidc.refreshTokenReuseInterval\n[info] \u2714 Seed OIDC config\n"})}),"\n",(0,r.jsxs)(n.p,{children:["From now on, you can safely remove ",(0,r.jsx)(n.code,{children:"OIDC_PRIVATE_KEYS"})," and ",(0,r.jsx)(n.code,{children:"OIDC_COOKIE_KEYS"})," from the environment variables. Remember to restart your Logto instance to get the changes reflected."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},75268:function(e,n,t){t.d(n,{Z:function(){return s}});t(50959);var r=t(45924),o={tabItem:"tabItem_zBCg"},a=t(11527);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:t,children:n})}},67234:function(e,n,t){t.d(n,{Z:function(){return I}});var r=t(50959),o=t(45924),a=t(58748),s=t(28903),i=t(88137),l=t(70670),c=t(91391),u=t(47841);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=f(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:o}),[g,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,u.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),b=(()=>{const e=c??g;return h({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),p(e)}),[d,p,a]),tabValues:a}}var p=t(77691),b={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},v=t(11527);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),o=i[t].value;o!==r&&(c(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function I(e){const n=(0,p.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},17279:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var r=t(50959);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);