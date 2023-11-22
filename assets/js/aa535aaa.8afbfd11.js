"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[663],{49613:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,g=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39842:function(e,n,t){t.d(n,{Z:function(){return l}});t(59496);var r=t(45924),a="tabItem_rXKf",o=t(4637);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:t,children:n})}},16833:function(e,n,t){t.d(n,{Z:function(){return I}});var r=t(59496),a=t(45924),o=t(70632),l=t(5734),u=t(37401),i=t(80587),s=t(32131);function c(e){return function(e){var n,t;return null!=(n=null==(t=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:c(t);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,l.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function g(e){var n,t,a,o,l=e.defaultValue,u=e.queryString,i=void 0!==u&&u,c=e.groupId,g=p(e),m=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:g})})),b=m[0],v=m[1],h=f({queryString:i,groupId:c}),y=h[0],k=h[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),I=w[0],x=w[1],L=function(){var e=null!=y?y:I;return d({value:e,tabValues:g})?e:null}();return(0,r.useLayoutEffect)((function(){L&&v(L)}),[L]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),x(e)}),[k,x,g]),tabValues:g}}var m=t(15800),b="tabList_p_G8",v="tabItem_prV4",h=t(4637);function y(e){var n=e.className,t=e.block,r=e.selectedValue,l=e.selectValue,u=e.tabValues,i=[],s=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=i.indexOf(n),a=u[t].value;a!==r&&(s(n),l(a))},p=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;t=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var o,l=i.indexOf(e.currentTarget)-1;t=null!=(o=i[l])?o:i[i.length-1]}null==(n=t)||n.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:u.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,h.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return i.push(e)},onKeyDown:p,onClick:c},o,{className:(0,a.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function k(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=o.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=g(e);return(0,h.jsxs)("div",{className:(0,a.Z)("tabs-container",b),children:[(0,h.jsx)(y,Object.assign({},e,n)),(0,h.jsx)(k,Object.assign({},e,n))]})}function I(e){var n=(0,m.Z)();return(0,h.jsx)(w,Object.assign({},e),String(n))}},88722:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var r=t(665),a=t(40151),o=(t(59496),t(49613)),l=t(39842),u=t(16833),i=["components"],s={sidebar_position:3.1},c="\ud83d\udda5 Using Logto CLI",p={unversionedId:"docs/references/using-cli/README",id:"version-1.x/docs/references/using-cli/README",title:"\ud83d\udda5 Using Logto CLI",description:"Logto CLI applies to Logto OSS only. If you are using Logto Cloud, you don't need to install Logto CLI.",source:"@site/versioned_docs/version-1.x/docs/references/using-cli/README.mdx",sourceDirName:"docs/references/using-cli",slug:"/docs/references/using-cli/",permalink:"/docs/references/using-cli/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/references/using-cli/README.mdx",tags:[],version:"1.x",sidebarPosition:3.1,frontMatter:{sidebar_position:3.1},sidebar:"docsSidebar",previous:{title:"\ud83c\udff7\ufe0f Tenant type",permalink:"/docs/recipes/tenant-type/"},next:{title:"Install Logto",permalink:"/docs/references/using-cli/install-logto"}},d={},f=[{value:"Get started",id:"get-started",level:2},{value:"Install CLI globally",id:"install-cli-globally",level:3},{value:"Local CLI",id:"local-cli",level:3},{value:"Use CLI by <code>npx</code>",id:"use-cli-by-npx",level:3}],g={toc:f};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-using-logto-cli"},"\ud83d\udda5 Using Logto CLI"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Logto CLI applies to Logto OSS only. If you are using Logto Cloud, you don't need to install Logto CLI.")),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"Logto CLI provide a conveneient way to install, maintain, and update your Logto instance without handling those boring tech stuff manually."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently we don't ship binaries, thus Node.js ",(0,o.kt)("inlineCode",{parentName:"p"},"^18.12.0")," is required in the environment.")),(0,o.kt)("h3",{id:"install-cli-globally"},"Install CLI globally"),(0,o.kt)("p",null,"Install via your preferred package manager to use ",(0,o.kt)("inlineCode",{parentName:"p"},"logto")," command globally:"),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/cli -g\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add @logto/cli\n"))),(0,o.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -g @logto/cli\n")))),(0,o.kt)("p",null,"You can always append ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," to show the help info of each command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto --help\nlogto db seed --help\n")),(0,o.kt)("h3",{id:"local-cli"},"Local CLI"),(0,o.kt)("p",null,"A built-in version of CLI is shipped with every Logto release since v1.0.0-beta.11. Say you already have a Logto instance in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/logto"),", then you can run the commands below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/logto\nnpm run cli # Invoke the local CLI\n")),(0,o.kt)("p",null,"Note if you want to execute with options, you need to prepend a ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," BEFORE the options for Logto CLI, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run cli db seed -- --db-url postgresql://your-database-url\n")),(0,o.kt)("h3",{id:"use-cli-by-npx"},"Use CLI by ",(0,o.kt)("inlineCode",{parentName:"h3"},"npx")),(0,o.kt)("p",null,"Another way to use Logto CLI is ",(0,o.kt)("inlineCode",{parentName:"p"},"npx"),", which can execute a package without installation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli\n")),(0,o.kt)("p",null,"This will be helpful for one-off invocations, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db seed --db-url postgresql://your-database-url\n")))}m.isMDXComponent=!0}}]);