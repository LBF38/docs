"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5214],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22814:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(59496),o=n(45924),a="tabItem_UXuk";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},58198:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(665),o=n(59496),a=n(45924),i=n(21010),l=n(10061),c=n(41993),u=n(5671),s="tabList_ra65",p="tabItem_Xj8K";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,g=e.values,f=e.groupId,h=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,c.U)(),N=w.tabGroupChoices,C=w.setTabGroupChoices,I=(0,o.useState)(y),T=I[0],Z=I[1],x=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var S=N[f];null!=S&&S!==T&&b.some((function(e){return e.value===S}))&&Z(S)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==T&&(O(t),Z(r),null!=f&&C(f,String(r)))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=x.indexOf(e.currentTarget)+1;n=null!=(r=x[o])?r:x[0];break;case"ArrowLeft":var a,i=x.indexOf(e.currentTarget)-1;n=null!=(a=x[i])?a:x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},h)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:L,onFocus:P,onClick:P},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},22274:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,'This tutorial assumes you have created an Application of type "',n.type,'" in Admin Console. If you are not ready,'," ",(0,a.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"read this")," before continuing.")))}c.isMDXComponent=!0},31658:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI",(0,a.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,a.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"50%"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}c.isMDXComponent=!0},77103:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/recipes/customize-sie/"},"Customize sign-in experience")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-passcode-sign-in"},"Enable SMS or email passcode sign-in")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-social-sign-in"},"Enable social sign-in")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/recipes/protect-your-api/"},"Protect your API"))))}c.isMDXComponent=!0},51599:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"Before calling ",(0,a.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}c.isMDXComponent=!0},15830:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In the following code snippets, we assume your app is running on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1234"),".")))}c.isMDXComponent=!0},95375:function(e,t,n){n.d(t,{ZP:function(){return u}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=n.p+"assets/images/web-sign-in-flow-e0b056d8128741cf51bb6921ce76a564.png",l=["components"],c={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The sign-in flow can be simplied as:"),(0,a.kt)("center",null,(0,a.kt)("img",{alt:"Web sign-in flow",src:i,width:"80%"})))}u.isMDXComponent=!0},66528:function(e,t,n){n.d(t,{ZP:function(){return c}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Calling ",(0,a.kt)("inlineCode",{parentName:"p"},".signOut()")," will clear all the Logto data in memory and localStorage if they exist."),(0,a.kt)("p",null,"After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1234")," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs), and use the URL as the parameter when calling ",(0,a.kt)("inlineCode",{parentName:"p"},".signOut()"),"."))}c.isMDXComponent=!0},62731:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return C},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return w}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=n(22814),l=n(58198),c=n(83937),u=n(22274),s=n(31658),p=n(77103),d=n(51599),m=n(15830),g=n(95375),f=n(66528),h=["components"],k={sidebar_label:"React"},b="React: Integrate `@logto/react`",v={unversionedId:"docs/recipes/integrate-logto/react",id:"docs/recipes/integrate-logto/react",title:"React: Integrate `@logto/react`",description:"Add Logto SDK as a dependency",source:"@site/docs/docs/recipes/integrate-logto/react.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/react",permalink:"/docs/recipes/integrate-logto/react",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/react.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"React"},sidebar:"docsSidebar",previous:{title:"iOS",permalink:"/docs/recipes/integrate-logto/ios"},next:{title:"Traditional Web",permalink:"/docs/recipes/integrate-logto/traditional"}},y={},w=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Implement a sign-in button",id:"implement-a-sign-in-button",level:3},{value:"Handle redirect",id:"handle-redirect",level:3},{value:"Sign out",id:"sign-out",level:2},{value:"Implement a sign-out button",id:"implement-a-sign-out-button",level:3},{value:"Further readings",id:"further-readings",level:2}],N={toc:w};function C(e){var t=e.components,n=(0,o.Z)(e,h);return(0,a.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-integrate-logtoreact"},"React: Integrate ",(0,a.kt)("inlineCode",{parentName:"h1"},"@logto/react")),(0,a.kt)(u.ZP,{type:"Single Page App",mdxType:"AppNote"}),(0,a.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/react\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/react\n"))),(0,a.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/react\n")))),(0,a.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,a.kt)("p",null,"Import and use ",(0,a.kt)("inlineCode",{parentName:"p"},"LogtoProvider")," to provide a Logto context:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LogtoProvider, LogtoConfig } from '@logto/react';\n\nconst config: LogtoConfig = {\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  appId: '<your-application-id>',\n};\n\nconst App = () => (\n  <LogtoProvider config={config}>\n    <YourAppContent />\n  </LogtoProvider>\n);\n")),(0,a.kt)(m.ZP,{mdxType:"AssumingUrl"}),(0,a.kt)("h2",{id:"sign-in"},"Sign in"),(0,a.kt)(g.ZP,{mdxType:"SignInFlowSummary"}),(0,a.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,a.kt)(s.ZP,{figureSrc:c.Z,redirectUri:"http://localhost:1234/callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)("h3",{id:"implement-a-sign-in-button"},"Implement a sign-in button"),(0,a.kt)("p",null,"We provide two hooks ",(0,a.kt)("inlineCode",{parentName:"p"},"useHandleSignInCallback()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useLogto()")," which can help you easily manage the authentication flow."),(0,a.kt)(d.ZP,{calling:".signIn()",mdxType:"SignInNote"}),(0,a.kt)("p",null,"Go back to your IDE/editor, use the following code to implement the sign-in button:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useLogto } from '@logto/react';\n\nconst SignIn = () => {\n  const { signIn, isAuthenticated } = useLogto();\n\n  if (isAuthenticated) {\n    return <div>Signed in</div>;\n  }\n\n  return <button onClick={() => signIn('http://localhost:1234/callback')}>Sign In</button>;\n};\n")),(0,a.kt)("h3",{id:"handle-redirect"},"Handle redirect"),(0,a.kt)("p",null,"We're almost there! In the last step, we use ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:1234/callback")," as the Redirect URI, and now we need to handle it properly."),(0,a.kt)("p",null,"First let's create a callback component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useHandleSignInCallback } from '@logto/react';\n\nconst Callback = () => {\n  const { isLoading } = useHandleSignInCallback(() => {\n    // Navigate to root path when finished\n  });\n\n  // When it's working in progress\n  if (isLoading) {\n    return <div>Redirecting...</div>;\n  }\n};\n")),(0,a.kt)("p",null,"Finally insert the code below to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"/callback")," route which does NOT require authentication:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// Assuming react-router\n<Route path="/callback" element={<Callback />} />\n')),(0,a.kt)("h2",{id:"sign-out"},"Sign out"),(0,a.kt)(f.ZP,{mdxType:"SignOutNote"}),(0,a.kt)("h3",{id:"implement-a-sign-out-button"},"Implement a sign-out button"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const SignOut = () => {\n  const { signOut } = useLogto();\n\n  return <button onClick={() => signOut('http://localhost:1234')}>Sign out</button>;\n};\n")),(0,a.kt)("h2",{id:"further-readings"},"Further readings"),(0,a.kt)(p.ZP,{mdxType:"FurtherReadings"}))}C.isMDXComponent=!0},83937:function(e,t,n){t.Z=n.p+"assets/images/web-redirect-uri-b4992589015d65ea3dc15b8b8131cd26.png"}}]);