"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[19448],{46471:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=t(11527),r=t(17279),o=t(75268),s=t(67234);const l={sidebar_position:3},i="Database alteration",c={id:"docs/references/using-cli/database-alteration",title:"Database alteration",description:"When developing new features, or refactoring existing ones, sometimes it is unavoidable to change database schemas.",source:"@site/docs/docs/references/using-cli/database-alteration.mdx",sourceDirName:"docs/references/using-cli",slug:"/docs/references/using-cli/database-alteration",permalink:"/docs/references/using-cli/database-alteration",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/using-cli/database-alteration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Manage connectors",permalink:"/docs/references/using-cli/manage-connectors"},next:{title:"Manage database configs",permalink:"/docs/references/using-cli/manage-database-configs"}},u={},d=[{value:"Determine the version to deploy",id:"determine-the-version-to-deploy",level:2},{value:"Rollback alterations",id:"rollback-alterations",level:2},{value:"For contributors",id:"for-contributors",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"database-alteration",children:"Database alteration"}),"\n",(0,a.jsx)(n.p,{children:"When developing new features, or refactoring existing ones, sometimes it is unavoidable to change database schemas."}),"\n",(0,a.jsx)(n.p,{children:"Things may sound scary, as a user, usually you need to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Double check the difference between two or more versions"}),"\n",(0,a.jsx)(n.li,{children:"Alter database in a safe and backward-compatible way"}),"\n",(0,a.jsx)(n.li,{children:"Get prepared for potential failure, say have a rollback script"}),"\n",(0,a.jsx)(n.li,{children:"Gradually replace running Logto instances to the new verion"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Hey, we are also developers, and we know it feels unhappy to do all these risky but mandatory stuff."})," So why don't we give them to someone that won't make mistake, like a CLI?"]}),"\n",(0,a.jsx)(n.p,{children:"From now on, your upgrade process will be:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Run ",(0,a.jsx)(n.code,{children:"logto db alt deploy"})," from anywhere that can access to the database"]}),"\n",(0,a.jsx)(n.li,{children:"Gradually replace running Logto instances to the new verion"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Let's get started!"}),"\n",(0,a.jsx)(n.h2,{id:"determine-the-version-to-deploy",children:"Determine the version to deploy"}),"\n",(0,a.jsxs)(n.p,{children:["If you have Logto CLI installed globally, it is ",(0,a.jsx)(n.strong,{children:"highly recommended"})," to upgrade the CLI to the latest version before deploying to get full available database alterations. Then run the command:"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"cmd",children:[(0,a.jsx)(o.Z,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"logto db alteration deploy\n"})})}),(0,a.jsx)(o.Z,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"If your database is up-to-date, you'll see the message below:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"[info] Found 0 alteration to deploy\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you have undeployed alterations, the CLI will ask you to choose the desired version:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"? Choose the alteration target version (Use arrow keys)\n> 1.2.0\n  1.0.0\n"})}),"\n",(0,a.jsx)(n.p,{children:"Theoretically, the version to deploy should match the version of your Logto instance. In the meantime, you can use the command with a target version:"}),"\n",(0,a.jsxs)(s.Z,{groupId:"cmd",children:[(0,a.jsx)(o.Z,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"logto db alteration deploy 1.2.0\n"})})}),(0,a.jsx)(o.Z,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy 1.2.0\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["It is helpful when you'd like to do the alteration in a non-TTY pipeline, just remember to pass the database URL using ",(0,a.jsx)(n.code,{children:"--db-url"}),". See ",(0,a.jsx)(n.a,{href:"/docs/recipes/deployment",children:"\ud83d\ude80 Deployment"})," for setting up a alteration job in your cluster."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"For each alteration script, the Logto CLI will run the whole script in a transaction. So if a deployment is failed, you can easily continue with the same command after the issue fixed."})}),"\n",(0,a.jsx)(n.h2,{id:"rollback-alterations",children:"Rollback alterations"}),"\n",(0,a.jsxs)(n.p,{children:["Our alteration scripts also come with a ",(0,a.jsx)(n.code,{children:"down"})," script which can rollback the changes. To rollback the database status to a specific version, replace ",(0,a.jsx)(n.code,{children:"1.0.0"})," with your target version and run the command below:"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"cmd",children:[(0,a.jsx)(o.Z,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"logto db alteration rollback 1.0.0\n"})})}),(0,a.jsx)(o.Z,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db alteration rollback 1.0.0\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["You can find all alteration scripts ",(0,a.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/schemas/alterations",children:"in this directory"}),"."]})}),"\n",(0,a.jsx)(n.h2,{id:"for-contributors",children:"For contributors"}),"\n",(0,a.jsx)(n.p,{children:'The master branch of Logto repository may contain unpublished alteration scripts. You may need to manually deploy "next" alterations by running:'}),"\n",(0,a.jsxs)(s.Z,{groupId:"cmd",children:[(0,a.jsx)(o.Z,{value:"cli",label:"CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"logto db alteration deploy next\n"})})}),(0,a.jsx)(o.Z,{value:"npx",label:"npx",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli db alteration deploy next\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"If you are developing a feature that requires database alterations, rather than updating the database schema, you also need to provide a script in the following foramt:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"next-[timestamp]-what-to-do.ts\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Check ",(0,a.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/schemas/alterations",children:"this directory"})," for reference."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},75268:function(e,n,t){t.d(n,{Z:function(){return s}});t(50959);var a=t(45924),r={tabItem:"tabItem_zBCg"},o=t(11527);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},67234:function(e,n,t){t.d(n,{Z:function(){return w}});var a=t(50959),r=t(45924),o=t(58748),s=t(28903),l=t(88137),i=t(70670),c=t(91391),u=t(47841);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,d]=b({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(77691),g={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},x=t(11527);function j(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==a&&(c(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},17279:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var a=t(50959);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);