"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[185],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(p,".").concat(d)]||s[d]||A[d]||a;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},34630:function(e,t,n){n.d(t,{Z:function(){return l}});n(59496);var o=n(45924),r="tabItem_Fp8l",a=n(4637);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n,children:t})}},82312:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(59496),r=n(45924),a=n(36258),l=n(28932),i=n(5301),p=n(61121),u="tabList_eANZ",c="tabItem_yCyO",A=n(4637);function s(e){var t,n,a=e.lazy,s=e.block,d=e.defaultValue,m=e.values,g=e.groupId,k=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.l)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!f.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.U)(),P=b.tabGroupChoices,B=b.setTabGroupChoices,E=(0,o.useState)(y),C=E[0],N=E[1],S=[],H=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var R=P[g];null!=R&&R!==C&&f.some((function(e){return e.value===R}))&&N(R)}var w=function(e){var t=e.currentTarget,n=S.indexOf(t),o=f[n].value;o!==C&&(H(t),N(o),null!=g&&B(g,String(o)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,r=S.indexOf(e.currentTarget)+1;n=null!=(o=S[r])?o:S[0];break;case"ArrowLeft":var a,l=S.indexOf(e.currentTarget)-1;n=null!=(a=S[l])?a:S[S.length-1]}null==(t=n)||t.focus()};return(0,A.jsxs)("div",{className:(0,r.Z)("tabs-container",u),children:[(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},k),children:f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,A.jsx)("li",Object.assign({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,ref:function(e){return S.push(e)},onKeyDown:I,onFocus:w,onClick:w},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":C===t}),children:null!=n?n:t}),t)}))}),a?(0,o.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):(0,A.jsx)("div",{className:"margin-top--md",children:v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))})]})}function d(e){var t=(0,a.Z)();return(0,A.jsx)(s,Object.assign({},e),String(t))}},28765:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"\u672c\u7bc7\u6559\u7a0b\u9ed8\u8ba4\u4f60\u5df2\u7ecf\u5728\u7ba1\u7406\u754c\u9762\u4e2d\u6210\u529f\u521b\u5efa\u4e86\u4e00\u4e2a\u300c",n.type,"\u300d\u7c7b\u578b\u7684\u5e94\u7528\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b8c\u6210\u8fd9\u4e00\u6b65\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"\u8fd9\u7bc7\u6559\u7a0b"),"\uff0c\u521b\u5efa\u5e94\u7528\u4e4b\u540e\u518d\u7ee7\u7eed\u3002")))}p.isMDXComponent=!0},52004:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6839\u636e\u7528\u6237\u7684\u6743\u9650\u53ca\u767b\u5f55\u72b6\u6001\uff0cLogto \u4f1a\u6388\u6743\u5e76\u9881\u53d1\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"JWT")," \u683c\u5f0f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," \u52a0\u5bc6\u4ee4\u724c\u3002\u8be5\u4ee4\u724c\u643a\u5e26\u4e86\u6240\u6709 API \u6388\u6743\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u7528\u6237\u4fe1\u606f\uff0c\u4ee4\u724c\u7684\u9881\u53d1\u8005\uff0c\u4ee4\u724c\u7684\u6307\u5b9a\u53d7\u4f17\uff0c\u4ee5\u53ca\u8fc7\u671f\u65f6\u95f4\u7b49\u3002"),(0,a.kt)("p",null,"\u5c06\u8be5\u9881\u53d1\u7684\u4ee4\u724c\u4f5c\u4e3a Bearer \u4ee4\u724c\u9644\u52a0\u5230\u4f60\u7684\u8bf7\u6c42\u5934\u4e2d\uff1a"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Bearer \u4ee4\u724c\u7684\u96c6\u6210\u6d41\u7a0b\u53ef\u80fd\u56e0\u4f7f\u7528\u7684\u6846\u67b6\u6216\u8bf7\u6c42\u65b9\u5f0f\u800c\u5f02\u3002\u8bf7\u6309\u9700\u9009\u62e9\u4f60\u81ea\u5df1\u9002\u7528\u7684\u65b9\u5f0f\u6765\u5e94\u7528\u6388\u6743\u5230\u8bf7\u6c42\u5934\u4e2d\u3002")),(0,a.kt)("p",null,"\u4f8b\u5982\u6700\u7ec8\u5f62\u6210\u7684\u8bf7\u6c42\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GET https://logto.dev/api/users\n\n--header Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek\n\n")))}p.isMDXComponent=!0},99583:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u5728\u8fd9\u91cc\u5207\u6362\u5230\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u7684\u5e94\u7528\u8be6\u60c5\u9875\u3002\u6dfb\u52a0\u4e00\u4e2a\u503c\u4e3a ",(0,a.kt)("code",null,n.redirectUri)," \u7684 Redirect URI \u5e76\u70b9\u6309\u300c\u4fdd\u5b58\u53d8\u66f4\u300d\u3002"),(0,a.kt)("img",{alt:"\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u7684 Redirect URI",src:n.figureSrc,width:"600px"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," \u662f\u4e00\u4e2a OAuth 2.0 \u7684\u6982\u5ff5\uff0c\u7528\u4e8e\u8868\u660e\u5728 authentication \u540e\u91cd\u5b9a\u5411\u81f3\u7684\u4f4d\u7f6e\u3002"))}p.isMDXComponent=!0},43544:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/customize-sie/"},"\u81ea\u5b9a\u4e49\u767b\u5f55\u4f53\u9a8c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-passcode-sign-in"},"\u542f\u7528\u77ed\u4fe1\u6216\u90ae\u4ef6\u9a8c\u8bc1\u7801\u767b\u5f55")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-social-sign-in"},"\u542f\u7528\u793e\u4ea4\u767b\u5f55"))))}p.isMDXComponent=!0},53482:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Logto \u8fd8\u63d0\u4f9b\u4e86 API \u8bf7\u6c42\u7684\u6388\u6743\u670d\u52a1\uff0c\u4ee5\u5e2e\u52a9\u4f60\u66f4\u597d\u7684\u4fdd\u62a4\u4f60\u7684\u540e\u7aef\u5e94\u7528\u3002 \u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u5728\u540e\u7aef\u5904\u7406 Logto \u7684\u6388\u6743\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/recipes/protect-your-api/"},"\u4fdd\u62a4\u4f60\u7684 API")," \u96c6\u6210\u6307\u5357\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 Logto SDK \u8f7b\u677e\u7684\u4e3a\u53d7\u4fdd\u62a4 API \u8d44\u6e90\u7533\u8bf7\u4e00\u4e2a\u8bbf\u95ee\u6388\u6743\u4ee4\u724c\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u80fd\u8ba9 Logto \u7cbe\u51c6\u9881\u53d1\u4e00\u4e2a\u9488\u5bf9\u7279\u5b9a API \u8d44\u6e90\u7684\u6388\u6743\u4ee4\u724c\uff0c\u8bf7\u5148\u786e\u4fdd\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/recipes/protect-your-api/#%E5%9C%A8-logto-%E7%AE%A1%E6%8E%A7%E5%88%B6%E5%8F%B0%E5%86%85%E6%B3%A8%E5%86%8C-api-%E8%B5%84%E6%BA%90"},"Logto \u7684 \u7ba1\u7406\u63a7\u5236\u53f0\u4e2d\u6ce8\u518c\u8be5\u8d44\u6e90"),"\u3002")))}p.isMDXComponent=!0},94619:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,"\u5728\u8c03\u7528 ",(0,a.kt)("code",null,n.calling)," \u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u5728\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u6b63\u786e\u914d\u7f6e\u4e86 Redirect URI\u3002")))}p.isMDXComponent=!0},36596:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u767b\u5f55\u6d41\u7a0b\u53ef\u4ee5\u88ab\u7b80\u5316\u4e3a\uff1a"),(0,a.kt)("img",{alt:"Web \u767b\u5f55\u6d41\u7a0b",src:"data:image/png;base64,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",width:"700pt"}))}p.isMDXComponent=!0},95747:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".signOut()")," \u5c06\u6e05\u7406\u5185\u5b58\u4e0e localStorage \u4e2d\u7684\u6240\u6709 Logto \u6570\u636e\uff08\u5982\u679c\u6709\uff09\u3002"),(0,a.kt)("p",null,"\u5728\u9000\u51fa\u767b\u5f55\u540e\uff0c\u8ba9\u4f60\u7684\u7528\u6237\u91cd\u65b0\u56de\u5230\u4f60\u7684\u7f51\u7ad9\u662f\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002\u8ba9\u6211\u4eec\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," \u6dfb\u52a0\u81f3\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u91cc\u7684 Post Sign-out URIs \u4e2d\uff08\u4f4d\u4e8e Redirect URIs \u4e0b\u65b9\uff09\uff0c\u5e76\u5c06\u5176\u4f5c\u4e3a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".signOut()")," \u7684\u53c2\u6570\u3002"))}p.isMDXComponent=!0},62276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return E},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return P}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),l=n(34630),i=n(82312),p=n(92612),u=n(28765),c=n(52004),A=n(99583),s=n(43544),d=n(53482),m=n(94619),g=n(36596),k=n(95747),v=["components"],f={sidebar_label:"\u539f\u751f JS"},h="\u539f\u751f JS\uff1a\u96c6\u6210 `@logto/browser`",y={unversionedId:"docs/recipes/integrate-logto/vanilla-js",id:"docs/recipes/integrate-logto/vanilla-js",title:"\u539f\u751f JS\uff1a\u96c6\u6210 `@logto/browser`",description:"Browser SDK \u662f \u6846\u67b6\u65e0\u5173 \u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u8981\u4f60\u5199\u4e00\u5c42\u9002\u914d\u6846\u67b6\u7684 SDK \u5305\u88c5\uff0c\u5373\u53ef\u5728\u4efb\u610f\u4e00\u79cd\u524d\u7aef\u6846\u67b6\u4e2d\u4f7f\u7528\u3002\u8fd9\u4e5f\u662f @logto/react \u548c @logto/vue \u505a\u7684\u4e8b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/vanilla-js.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/vanilla-js",permalink:"/zh-cn/docs/recipes/integrate-logto/vanilla-js",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/vanilla-js.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"\u539f\u751f JS"},sidebar:"docsSidebar",previous:{title:"\u4f20\u7edf Web",permalink:"/zh-cn/docs/recipes/integrate-logto/traditional"},next:{title:"Vue",permalink:"/zh-cn/docs/recipes/integrate-logto/vue"}},b={},P=[{value:"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56",id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56",level:2},{value:"\u521d\u59cb\u5316 LogtoClient",id:"\u521d\u59cb\u5316-logtoclient",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u914d\u7f6e Redirect URI",id:"\u914d\u7f6e-redirect-uri",level:3},{value:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae",id:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae",level:3},{value:"\u5904\u7406\u91cd\u5b9a\u5411",id:"\u5904\u7406\u91cd\u5b9a\u5411",level:3},{value:"\u9000\u51fa\u767b\u5f55",id:"\u9000\u51fa\u767b\u5f55",level:2},{value:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae",id:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae",level:3},{value:"\u4e3a\u540e\u7aef API \u8bf7\u6c42\u6388\u6743",id:"\u4e3a\u540e\u7aef-api-\u8bf7\u6c42\u6388\u6743",level:2},{value:"\u5ef6\u5c55\u9605\u8bfb",id:"\u5ef6\u5c55\u9605\u8bfb",level:2}],B={toc:P};function E(e){var t=e.components,n=(0,r.Z)(e,v);return(0,a.kt)("wrapper",(0,o.Z)({},B,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u539f\u751f-js\u96c6\u6210-logtobrowser"},"\u539f\u751f JS\uff1a\u96c6\u6210 ",(0,a.kt)("inlineCode",{parentName:"h1"},"@logto/browser")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Browser SDK \u662f ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/64725017/what-does-it-mean-by-framework-agnostic"},"\u6846\u67b6\u65e0\u5173")," \u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u53ea\u8981\u4f60\u5199\u4e00\u5c42\u9002\u914d\u6846\u67b6\u7684 SDK \u5305\u88c5\uff0c\u5373\u53ef\u5728\u4efb\u610f\u4e00\u79cd\u524d\u7aef\u6846\u67b6\u4e2d\u4f7f\u7528\u3002\u8fd9\u4e5f\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"@logto/react")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"@logto/vue")," \u505a\u7684\u4e8b\u3002")),(0,a.kt)(u.ZP,{type:"\u5355\u9875\u5e94\u7528",mdxType:"AppNote"}),(0,a.kt)("h2",{id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56"},"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/browser\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/browser\n"))),(0,a.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/browser\n")))),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316-logtoclient"},"\u521d\u59cb\u5316 LogtoClient"),(0,a.kt)("p",null,"\u5f15\u5165\u5e76\u901a\u8fc7\u914d\u7f6e\u521d\u59cb\u5316 ",(0,a.kt)("inlineCode",{parentName:"p"},"LogtoClient"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import LogtoClient from '@logto/browser';\n\nconst logtoClient = new LogtoClient({\n  endpoint: '<your-logto-endpoint>', // \u4f8b\u5982 http://localhost:3001\n  appId: '<your-application-id>',\n});\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u63a5\u4e0b\u6765\u7684\u4ee3\u7801\u7247\u6bb5\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u7684\u5e94\u7528\u8fd0\u884c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"\u3002")),(0,a.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,a.kt)(g.ZP,{mdxType:"SignInFlowSummary"}),(0,a.kt)("h3",{id:"\u914d\u7f6e-redirect-uri"},"\u914d\u7f6e Redirect URI"),(0,a.kt)(A.ZP,{figureSrc:p.Z,redirectUri:"http://localhost:3000/callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae"},"\u5b9e\u73b0\u767b\u5f55\u6309\u94ae"),(0,a.kt)(m.ZP,{calling:".signIn()",mdxType:"SignInNote"}),(0,a.kt)("p",null,"\u8fd4\u56de\u4f60\u7684 IDE \u6216\u7f16\u8f91\u5668\uff0c\u4f7f\u7528\u5982\u4e0b\u4ee3\u7801\u6765\u5b9e\u73b0\u4e00\u4e2a\u767b\u5f55\u6309\u94ae\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<button onclick=\"logtoClient.signIn('http://localhost:3000/callback')\">\u767b\u5f55</button>\n")),(0,a.kt)("h3",{id:"\u5904\u7406\u91cd\u5b9a\u5411"},"\u5904\u7406\u91cd\u5b9a\u5411"),(0,a.kt)("p",null,"\u9a6c\u4e0a\u5c31\u8981\u5927\u529f\u544a\u6210\uff01\u5728\u4e0a\u4e00\u6b65\uff0c\u6211\u4eec\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/callback")," \u7528\u4f5c Redirect URI\uff0c\u73b0\u5728\u6211\u4eec\u9700\u8981\u5bf9\u5176\u59a5\u5584\u5904\u7406\u3002\u5728\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/callback")," \u8def\u7531\u4e0b\u63d2\u5165\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  await logtoClient.handleSignInCallback();\n  console.log(logtoClient.isAuthenticated); // true\n} catch {\n  // \u5904\u7406\u9519\u8bef\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u6d4b\u8bd5\u767b\u5f55\u6d41\u7a0b\u4e86\u3002"),(0,a.kt)("h2",{id:"\u9000\u51fa\u767b\u5f55"},"\u9000\u51fa\u767b\u5f55"),(0,a.kt)(k.ZP,{mdxType:"SignOutNote"}),(0,a.kt)("h3",{id:"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae"},"\u5b9e\u73b0\u9000\u51fa\u767b\u5f55\u6309\u94ae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<button onclick=\"logtoClient.signOut('http://localhost:3000')\">\u9000\u51fa\u767b\u5f55</button>\n")),(0,a.kt)("h2",{id:"\u4e3a\u540e\u7aef-api-\u8bf7\u6c42\u6388\u6743"},"\u4e3a\u540e\u7aef API \u8bf7\u6c42\u6388\u6743"),(0,a.kt)(d.ZP,{mdxType:"GetAuthorizationToken"}),(0,a.kt)("p",null,"\u5728\u542f\u52a8\u65f6\u5c06\u8fd9\u4e9b\u8d44\u6e90\u7684 ",(0,a.kt)("strong",{parentName:"p"},"API Identifier")," \u4f5c\u4e3a\u914d\u7f6e\u4f20\u7ed9 SDK\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import LogtoClient from '@logto/browser';\n\nconst logtoClient = new LogtoClient({\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  appId: '<your-application-id>',\n  resources: ['<your-api-resource>'],\n});\n")),(0,a.kt)("p",null,"\u5728\u53d1\u51fa API \u8bf7\u6c42\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u4ece Logto \u5904\u83b7\u53d6\u6388\u6743\u4ee4\u724c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const token = await logtoClient.getAccessToken('<your-target-api-resource>');\n")),(0,a.kt)(c.ZP,{mdxType:"ApplyAuthorizationToken"}),(0,a.kt)("h2",{id:"\u5ef6\u5c55\u9605\u8bfb"},"\u5ef6\u5c55\u9605\u8bfb"),(0,a.kt)(s.ZP,{mdxType:"FurtherReadings"}))}E.isMDXComponent=!0},92612:function(e,t){t.Z="data:image/png;base64,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"}}]);