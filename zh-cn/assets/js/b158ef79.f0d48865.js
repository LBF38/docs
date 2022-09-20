"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7798],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var i=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),k=l,g=p["".concat(c,".").concat(k)]||p[k]||d[k]||r;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},27360:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var i=n(665),l=n(40151),r=(n(59496),n(49613)),a=["components"],o={},c=void 0,s={unversionedId:"sdk/Swift/LogtoClient/Classes/LogtoClient",id:"sdk/Swift/LogtoClient/Classes/LogtoClient",title:"LogtoClient",description:"\u7c7b",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Swift/LogtoClient/Classes/LogtoClient.md",sourceDirName:"sdk/Swift/LogtoClient/Classes",slug:"/sdk/Swift/LogtoClient/Classes/LogtoClient",permalink:"/zh-cn/sdk/Swift/LogtoClient/Classes/LogtoClient",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/sdk/Swift/LogtoClient/Classes/LogtoClient.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"LogtoClient \u6a21\u5757",permalink:"/zh-cn/sdk/Swift/LogtoClient/"},next:{title:"AccessToken",permalink:"/zh-cn/sdk/Swift/LogtoClient/Structs/AccessToken"}},u={},d=[{value:"\u7ed3\u6784\u4f53",id:"\u7ed3\u6784\u4f53",level:2},{value:"NotificationObject",id:"notificationobject",level:3},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"<code>HandleNotification</code>",id:"handlenotification",level:3},{value:"<code>idToken</code>",id:"idtoken",level:3},{value:"<code>refreshToken</code>",id:"refreshtoken",level:3},{value:"<code>oidcConfig</code>",id:"oidcconfig",level:3},{value:"<code>isAuthenticated</code>",id:"isauthenticated",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>handle(forAppId:url:)</code>",id:"handleforappidurl",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"<code>init(useConfig:socialPlugins:session:)</code>",id:"inituseconfigsocialpluginssession",level:3},{value:"<code>signInWithBrowser(redirectUri:)</code>",id:"signinwithbrowserredirecturi",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"<code>signOut()</code>",id:"signout",level:3},{value:"<code>getAccessToken(for:)</code>",id:"getaccesstokenfor",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"<code>fetchUserInfo()</code>",id:"fetchuserinfo",level:3},{value:"<code>getIdTokenClaims()</code>",id:"getidtokenclaims",level:3},{value:"<code>handle(url:)</code>",id:"handleurl",level:3}],p={toc:d};function k(e){var t=e.components,n=(0,l.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7c7b")),(0,r.kt)("h1",{id:"logtoclient"},(0,r.kt)("inlineCode",{parentName:"h1"},"LogtoClient")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public class LogtoClient\n")),(0,r.kt)("h2",{id:"\u7ed3\u6784\u4f53"},"\u7ed3\u6784\u4f53"),(0,r.kt)("h3",{id:"notificationobject"},(0,r.kt)("a",{parentName:"h3",href:"/zh-cn/sdk/Swift/LogtoClient/Structs/LogtoClient.NotificationObject"},"NotificationObject")),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("h3",{id:"handlenotification"},(0,r.kt)("inlineCode",{parentName:"h3"},"HandleNotification")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'public static let HandleNotification = Notification.Name("Logto Handle")\n')),(0,r.kt)("p",null,"\u4f9b LogtoClient \u5904\u7406\u7684\u901a\u77e5\u540d\u79f0\u3002"),(0,r.kt)("h3",{id:"idtoken"},(0,r.kt)("inlineCode",{parentName:"h3"},"idToken")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public internal(set) var idToken: String?\n")),(0,r.kt)("p",null,"\u7ecf\u8fc7\u7f13\u5b58\u7684\u539f\u59cb ID Token \u5b57\u7b26\u4e32\u3002\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},".getIdTokenClaims()")," \u4ee5\u83b7\u5f97\u7ed3\u6784\u5316\u6570\u636e\u3002"),(0,r.kt)("h3",{id:"refreshtoken"},(0,r.kt)("inlineCode",{parentName:"h3"},"refreshToken")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public internal(set) var refreshToken: String?\n")),(0,r.kt)("p",null,"\u7ecf\u8fc7\u7f13\u5b58\u7684 Refresh Token\u3002"),(0,r.kt)("h3",{id:"oidcconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"oidcConfig")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public internal(set) var oidcConfig: LogtoCore.OidcConfigResponse?\n")),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-discovery-1_0.html"},"OIDC Discovery")," \u63a5\u53e3\u83b7\u5f97\u7684\u914d\u7f6e\u3002"),(0,r.kt)("h3",{id:"isauthenticated"},(0,r.kt)("inlineCode",{parentName:"h3"},"isAuthenticated")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public var isAuthenticated: Bool\n")),(0,r.kt)("p",null,"\u7528\u6237\u662f\u5426\u5df2\u7ecf\u767b\u5f55\u3002"),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"handleforappidurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"handle(forAppId:url:)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public static func handle(forAppId appId: String? = nil, url: URL)\n")),(0,r.kt)("p",null,"\u53d1\u9001\u4e00\u4e2a\u901a\u77e5\u8ba9 Logto \u5ba2\u6237\u7aef\u5904\u7406\u8be5 URL\u3002\u901a\u5e38\u8be5\u51fd\u6570\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"onOpenURL(perform:)")," (SwiftUI) \u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"application(_:open:options:)")," (AppDelegate) \u88ab\u8c03\u7528\u3002\u8be6\u60c5\u89c1\u96c6\u6210\u6307\u5357\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forAppId"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u901a\u77e5\u662f\u5426\u4ec5\u4f9b\u7279\u5b9a\u7684\u5ba2\u6237\u7aef ID\u3002\u5f53\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"nil")," \u65f6\uff0c\u6240\u6709\u7684 Logto \u5ba2\u6237\u7aef\u4f1a\u5c1d\u8bd5\u5904\u7406\u8be5\u901a\u77e5\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u88ab\u5904\u7406\u7684 URL\u3002")))),(0,r.kt)("h3",{id:"inituseconfigsocialpluginssession"},(0,r.kt)("inlineCode",{parentName:"h3"},"init(useConfig:socialPlugins:session:)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public init(\n    useConfig config: LogtoConfig,\n    socialPlugins: [LogtoSocialPlugin] = [],\n    session: NetworkSession = URLSession.shared\n)\n")),(0,r.kt)("h3",{id:"signinwithbrowserredirecturi"},(0,r.kt)("inlineCode",{parentName:"h3"},"signInWithBrowser(redirectUri:)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public func signInWithBrowser(\n    redirectUri: String\n) async throws\n")),(0,r.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a\u57fa\u4e8e WKWebView \u7684\u767b\u5f55\u4f1a\u8bdd\u3002\u5982\u679c\u8be5\u51fd\u6570\u5728\u6ca1\u6709\u629b\u51fa\u9519\u8bef\u7684\u60c5\u51b5\u4e0b\u8fd4\u56de\uff0c\u8bf4\u660e\u7528\u6237\u5df2\u7ecf\u6210\u529f\u767b\u5f55\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u629b\u51fa\uff1a\u4e00\u4e2a\u9519\u8bef\u5982\u679c\u4f1a\u8bdd\u65e0\u6cd5\u6210\u529f\u5b8c\u6210\u3002")),(0,r.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirectUri"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u5e94\u7528\u7684 Redirect URI \u5217\u8868\u4e2d\u7684\u4e00\u9879\u3002")))),(0,r.kt)("h3",{id:"signout"},(0,r.kt)("inlineCode",{parentName:"h3"},"signOut()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"func signOut() async -> Errors.SignOut?\n")),(0,r.kt)("p",null,"\u6e05\u7406\u6240\u6709\u5728\u5185\u5b58\u4e0e Keychain \u4e2d\u7684 token\u3002\u540c\u65f6\u5c1d\u8bd5\u540a\u9500\u5728 OIDC provider \u4e2d\u7684 Refresh Token\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\uff1a\u4e00\u4e2a\u9519\u8bef\u5982\u679c\u540a\u9500 token \u5931\u8d25\u3002\u901a\u5e38\u8be5\u9519\u8bef\u53ef\u4ee5\u88ab\u5b89\u5168\u5730\u5ffd\u7565\u3002")),(0,r.kt)("h3",{id:"getaccesstokenfor"},(0,r.kt)("inlineCode",{parentName:"h3"},"getAccessToken(for:)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"@MainActor public func getAccessToken(for resource: String?) async throws -> String\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u63d0\u4f9b\u7684 resource \u83b7\u53d6\u4e00\u4e2a Access Token\u3002\u5982\u679c resource \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),"\uff0c\u5219\u8fd4\u56de\u7528\u4e8e\u7528\u6237\u4fe1\u606f\u63a5\u53e3\u7684 Access Token\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u7f13\u5b58\u7684 Access Token \u5df2\u8fc7\u671f\uff0c\u8be5\u51fd\u6570\u4f1a\u5c1d\u8bd5\u4f7f\u7528 Refresh Token \u53bb OIDC provider \u83b7\u5f97\u4e00\u4e2a\u65b0\u7684 Access Token\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u629b\u51fa\uff1a\u4e00\u4e2a\u9519\u8bef\u5982\u679c\u65e0\u6cd5\u83b7\u53d6\u5230\u4e00\u4e2a\u6709\u6548\u7684 Access Token\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\uff1aAccess Token \u5b57\u7b26\u4e32\u3002")),(0,r.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u6307\u793a\u5668\uff08Resource indicator\uff09\u3002")))),(0,r.kt)("h3",{id:"fetchuserinfo"},(0,r.kt)("inlineCode",{parentName:"h3"},"fetchUserInfo()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public func fetchUserInfo() async throws -> LogtoCore.UserInfoResponse\n")),(0,r.kt)("h3",{id:"getidtokenclaims"},(0,r.kt)("inlineCode",{parentName:"h3"},"getIdTokenClaims()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public func getIdTokenClaims() throws -> IdTokenClaims\n")),(0,r.kt)("p",null,"\u83b7\u53d6\u7ed3\u6784\u5316\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#IDToken"},"ID Token \u58f0\u660e"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u629b\u51fa\uff1a\u4e00\u4e2a\u9519\u8bef\u5982\u679c\u6ca1\u6709 ID Token \u6216\u8005\u89e3\u7801\u5931\u8d25\u3002")),(0,r.kt)("h3",{id:"handleurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"handle(url:)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"public func handle(url: URL) -> Bool\n")),(0,r.kt)("p",null,"\u5c1d\u8bd5\u901a\u8fc7\u904d\u5386\u6240\u6709\u7684\u793e\u4f1a\u5316\u767b\u5f55\u63d2\u4ef6\u4ee5\u5904\u7406\u7ed9\u5b9a\u7684 URL\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6709\u4e00\u4e2a\u793e\u4f1a\u5316\u767b\u5f55\u63d2\u4ef6\u5904\u7406\u4e86\u8be5 URL\uff0c\u5219\u904d\u5386\u4f1a\u7acb\u5373\u505c\u6b62\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"true")," \u5982\u679c\u6709\u4e00\u4e2a\u793e\u4f1a\u5316\u767b\u5f55\u63d2\u4ef6\u5904\u7406\u4e86\u8be5 URL\u3002")))}k.isMDXComponent=!0}}]);