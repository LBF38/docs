"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4879],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),k=i,m=p["".concat(c,".").concat(k)]||p[k]||u[k]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8816:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(665),i=n(40151),o=(n(59496),n(49613)),a=["components"],l={},c=void 0,s={unversionedId:"sdk/Swift/Logto/Enums/LogtoUtilities",id:"sdk/Swift/Logto/Enums/LogtoUtilities",title:"LogtoUtilities",description:"\u679a\u4e3e",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Swift/Logto/Enums/LogtoUtilities.md",sourceDirName:"sdk/Swift/Logto/Enums",slug:"/sdk/Swift/Logto/Enums/LogtoUtilities",permalink:"/zh-cn/sdk/Swift/Logto/Enums/LogtoUtilities",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Swift/Logto/Enums/LogtoUtilities.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"LogtoRequest.HttpMethod",permalink:"/zh-cn/sdk/Swift/Logto/Enums/LogtoRequest.HttpMethod"},next:{title:"IdTokenClaims",permalink:"/zh-cn/sdk/Swift/Logto/Structs/IdTokenClaims"}},d={},u=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>withReservedScopes(_:)</code>",id:"withreservedscopes_",level:3},{value:"<code>generateState()</code>",id:"generatestate",level:3},{value:"<code>generateCodeVerifier()</code>",id:"generatecodeverifier",level:3},{value:"<code>generateCodeChallenge(codeVerifier:)</code>",id:"generatecodechallengecodeverifier",level:3},{value:"<code>decodeIdToken(_:)</code>",id:"decodeidtoken_",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"<code>verifyIdToken(_:issuer:clientId:jwks:forTimeInterval:)</code>",id:"verifyidtoken_issuerclientidjwksfortimeinterval",level:3}],p={toc:u};function k(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u679a\u4e3e")),(0,o.kt)("h1",{id:"logtoutilities"},(0,o.kt)("inlineCode",{parentName:"h1"},"LogtoUtilities")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public enum LogtoUtilities\n")),(0,o.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,o.kt)("h3",{id:"withreservedscopes_"},(0,o.kt)("inlineCode",{parentName:"h3"},"withReservedScopes(_:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public static func withReservedScopes(_ scopes: [String]) -> [String]\n")),(0,o.kt)("h3",{id:"generatestate"},(0,o.kt)("inlineCode",{parentName:"h3"},"generateState()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public static func generateState() -> String\n")),(0,o.kt)("h3",{id:"generatecodeverifier"},(0,o.kt)("inlineCode",{parentName:"h3"},"generateCodeVerifier()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public static func generateCodeVerifier() -> String\n")),(0,o.kt)("h3",{id:"generatecodechallengecodeverifier"},(0,o.kt)("inlineCode",{parentName:"h3"},"generateCodeChallenge(codeVerifier:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public static func generateCodeChallenge(codeVerifier: String) -> String\n")),(0,o.kt)("h3",{id:"decodeidtoken_"},(0,o.kt)("inlineCode",{parentName:"h3"},"decodeIdToken(_:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"static func decodeIdToken(_ idToken: String) throws -> IdTokenClaims\n")),(0,o.kt)("p",null,"Decode ID Token claims WITHOUT validation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Returns: A set of ID Token claims.")),(0,o.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"token"),(0,o.kt)("td",{parentName:"tr",align:null},"The JWT to decode.")))),(0,o.kt)("h3",{id:"verifyidtoken_issuerclientidjwksfortimeinterval"},(0,o.kt)("inlineCode",{parentName:"h3"},"verifyIdToken(_:issuer:clientId:jwks:forTimeInterval:)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"static func verifyIdToken(\n    _ idToken: String,\n    issuer: String,\n    clientId: String,\n    jwks: JWKSet,\n    forTimeInterval: TimeInterval = Date().timeIntervalSince1970\n) throws\n")),(0,o.kt)("p",null,"Verify the give ID Token:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One of the JWKs matches the token."),(0,o.kt)("li",{parentName:"ul"},"Issuer matches token payload ",(0,o.kt)("inlineCode",{parentName:"li"},"iss"),"."),(0,o.kt)("li",{parentName:"ul"},"Client ID matches token payload ",(0,o.kt)("inlineCode",{parentName:"li"},"aud"),"."),(0,o.kt)("li",{parentName:"ul"},"The token is not expired."),(0,o.kt)("li",{parentName:"ul"},"The token is issued in +/- 1min.")))}k.isMDXComponent=!0}}]);