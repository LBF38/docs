"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5214],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},A=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),A=c(n),d=r,g=A["".concat(u,".").concat(d)]||A[d]||s[d]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=A;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}A.displayName="MDXCreateElement"},28482:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(59496),r=n(45924),a="tabItem_G5LH";function i(e){var t=e.children,n=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},t)}},38142:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(665),r=n(59496),a=n(45924),i=n(46971),l=n(21),u=n(73962),c=n(15469),p="tabList_A7qg",s="tabItem_Keco";function A(e){var t,n,i=e.lazy,A=e.block,d=e.defaultValue,g=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var I=(0,u.U)(),S=I.tabGroupChoices,B=I.setTabGroupChoices,N=(0,r.useState)(b),R=N[0],E=N[1],y=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var w=S[m];null!=w&&w!==R&&h.some((function(e){return e.value===w}))&&E(w)}var C=function(e){var t=e.currentTarget,n=y.indexOf(t),o=h[n].value;o!==R&&(P(t),E(o),null!=m&&B(m,String(o)))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,r=y.indexOf(e.currentTarget)+1;n=null!=(o=y[r])?o:y[0];break;case"ArrowLeft":var a,i=y.indexOf(e.currentTarget)-1;n=null!=(a=y[i])?a:y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":A},f)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return y.push(e)},onKeyDown:T,onFocus:C,onClick:C},i,{className:(0,a.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":R===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function d(e){var t=(0,i.Z)();return r.createElement(A,(0,o.Z)({key:String(t)},e))}},73483:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,'This tutorial assumes you have created an Application of type "',n.type,'" in Admin Console. If you are not ready,'," ",(0,a.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"read this")," before continuing.")))}u.isMDXComponent=!0},31336:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI",(0,a.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,a.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}u.isMDXComponent=!0},45294:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/recipes/customize-sie/"},"Customize sign-in experience")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-passcode-sign-in"},"Enable SMS or email passcode sign-in")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-social-sign-in"},"Enable social sign-in")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/recipes/protect-your-api/"},"Protect your API"))))}u.isMDXComponent=!0},78424:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"Before calling ",(0,a.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}u.isMDXComponent=!0},88242:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In the following code snippets, we assume your app is running on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1234"),".")))}u.isMDXComponent=!0},1025:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The sign-in flow can be simplied as:"),(0,a.kt)("img",{alt:"Web sign-in flow",src:"data:image/png;base64,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",width:"700pt"}))}u.isMDXComponent=!0},70586:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Calling ",(0,a.kt)("inlineCode",{parentName:"p"},".signOut()")," will clear all the Logto data in memory and localStorage if they exist."),(0,a.kt)("p",null,"After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1234")," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs), and use the URL as the parameter when calling ",(0,a.kt)("inlineCode",{parentName:"p"},".signOut()"),"."))}u.isMDXComponent=!0},8076:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return B},frontMatter:function(){return v},metadata:function(){return k},toc:function(){return I}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=n(28482),l=n(38142),u=n(83937),c=n(73483),p=n(31336),s=n(45294),A=n(78424),d=n(88242),g=n(1025),m=n(70586),f=["components"],v={sidebar_label:"React"},h="React: Integrate `@logto/react`",k={unversionedId:"docs/recipes/integrate-logto/react",id:"docs/recipes/integrate-logto/react",title:"React: Integrate `@logto/react`",description:"Add Logto SDK as a dependency",source:"@site/docs/docs/recipes/integrate-logto/react.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/react",permalink:"/docs/recipes/integrate-logto/react",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/react.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"React"},sidebar:"docsSidebar",previous:{title:"iOS",permalink:"/docs/recipes/integrate-logto/ios"},next:{title:"Traditional Web",permalink:"/docs/recipes/integrate-logto/traditional"}},b={},I=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Implement a sign-in button",id:"implement-a-sign-in-button",level:3},{value:"Handle redirect",id:"handle-redirect",level:3},{value:"Sign out",id:"sign-out",level:2},{value:"Implement a sign-out button",id:"implement-a-sign-out-button",level:3},{value:"Further readings",id:"further-readings",level:2}],S={toc:I};function B(e){var t=e.components,n=(0,r.Z)(e,f);return(0,a.kt)("wrapper",(0,o.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-integrate-logtoreact"},"React: Integrate ",(0,a.kt)("inlineCode",{parentName:"h1"},"@logto/react")),(0,a.kt)(c.ZP,{type:"Single Page App",mdxType:"AppNote"}),(0,a.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/react\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/react\n"))),(0,a.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/react\n")))),(0,a.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,a.kt)("p",null,"Import and use ",(0,a.kt)("inlineCode",{parentName:"p"},"LogtoProvider")," to provide a Logto context:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LogtoProvider, LogtoConfig } from '@logto/react';\n\nconst config: LogtoConfig = {\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n")),(0,a.kt)(d.ZP,{mdxType:"AssumingUrl"}),(0,a.kt)("h2",{id:"sign-in"},"Sign in"),(0,a.kt)(g.ZP,{mdxType:"SignInFlowSummary"}),(0,a.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,a.kt)(p.ZP,{figureSrc:u.Z,redirectUri:"http://localhost:1234/callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)("h3",{id:"implement-a-sign-in-button"},"Implement a sign-in button"),(0,a.kt)("p",null,"We provide two hooks ",(0,a.kt)("inlineCode",{parentName:"p"},"useHandleSignInCallback()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogto()")," which can help you easily manage the authentication flow."),(0,a.kt)(A.ZP,{calling:".signIn()",mdxType:"SignInNote"}),(0,a.kt)("p",null,"Go back to your IDE/editor, use the following code to implement the sign-in button:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLogto } from '@logto/react';\n\nconst SignIn = () => {\n  const { signIn, isAuthenticated } = useLogto();\n\n  if (isAuthenticated) {\n    return <div>Signed in</div>;\n  }\n\n  return <button onClick={() => signIn('http://localhost:1234/callback')}>Sign In</button>;\n};\n")),(0,a.kt)("h3",{id:"handle-redirect"},"Handle redirect"),(0,a.kt)("p",null,"We're almost there! In the last step, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1234/callback")," as the Redirect URI, and now we need to handle it properly."),(0,a.kt)("p",null,"First let's create a callback component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useHandleSignInCallback } from '@logto/react';\n\nconst Callback = () => {\n  const { isLoading } = useHandleSignInCallback(() => {\n    // Navigate to root path when finished\n  });\n\n  // When it's working in progress\n  if (isLoading) {\n    return <div>Redirecting...</div>;\n  }\n};\n")),(0,a.kt)("p",null,"Finally insert the code below to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"/callback")," route which does NOT require authentication:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// Assuming react-router\n<Route path="/callback" element={<Callback />} />\n')),(0,a.kt)("h2",{id:"sign-out"},"Sign out"),(0,a.kt)(m.ZP,{mdxType:"SignOutNote"}),(0,a.kt)("h3",{id:"implement-a-sign-out-button"},"Implement a sign-out button"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const SignOut = () => {\n  const { signOut } = useLogto();\n\n  return <button onClick={() => signOut('http://localhost:1234')}>Sign out</button>;\n};\n")),(0,a.kt)("h2",{id:"further-readings"},"Further readings"),(0,a.kt)(s.ZP,{mdxType:"FurtherReadings"}))}B.isMDXComponent=!0},83937:function(e,t){t.Z="data:image/png;base64,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"}}]);