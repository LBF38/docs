"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[18523],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(n),u=a,m=f["".concat(p,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},41322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=n(665),a=n(40151),i=(n(59496),n(49613)),o=["components"],c={},p=void 0,s={unversionedId:"sdk/JavaScript/js/functions/fetchOidcConfig",id:"sdk/JavaScript/js/functions/fetchOidcConfig",title:"fetchOidcConfig",description:"fetchOidcConfig(endpoint, requester): Promise\\>",source:"@site/docs/sdk/JavaScript/js/functions/fetchOidcConfig.md",sourceDirName:"sdk/JavaScript/js/functions",slug:"/sdk/JavaScript/js/functions/fetchOidcConfig",permalink:"/sdk/JavaScript/js/functions/fetchOidcConfig",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/JavaScript/js/functions/fetchOidcConfig.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"decodeIdToken",permalink:"/sdk/JavaScript/js/functions/decodeIdToken"},next:{title:"fetchTokenByAuthorizationCode",permalink:"/sdk/JavaScript/js/functions/fetchTokenByAuthorizationCode"}},l={},d=[{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4}],f={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"fetchOidcConfig"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"requester"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"KeysToCamelCase"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"OidcConfigSnakeCaseResponse"),">",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"requester")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/sdk/JavaScript/js/types/Requester"},(0,i.kt)("inlineCode",{parentName:"a"},"Requester")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"KeysToCamelCase"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"OidcConfigSnakeCaseResponse"),">",">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/logto-io/js/blob/f0f78e6/packages/js/src/core/oidc-config.ts#L19"},"packages/js/src/core/oidc-config.ts:19")))}u.isMDXComponent=!0}}]);