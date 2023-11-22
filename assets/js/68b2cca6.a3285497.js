"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[45376],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84563:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],s={sidebar_position:7.1},l="\ud83d\udc64 User Profiles",u={unversionedId:"docs/recipes/user-profile/README",id:"version-1.x/docs/recipes/user-profile/README",title:"\ud83d\udc64 User Profiles",description:"In previous sections, we demonstrated how to manage your users using Admin Console, or through management APIs. This is a straightforward process for those in the role of administrator. However, it is also important for the regular users to update their profiles on their own.",source:"@site/versioned_docs/version-1.x/docs/recipes/user-profile/README.md",sourceDirName:"docs/recipes/user-profile",slug:"/docs/recipes/user-profile/",permalink:"/docs/recipes/user-profile/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/user-profile/README.md",tags:[],version:"1.x",sidebarPosition:7.1,frontMatter:{sidebar_position:7.1},sidebar:"docsSidebar",previous:{title:"Integrate Organizations with your app",permalink:"/docs/recipes/organizations/integration"},next:{title:"\ud83d\udcdc Inspect Audit Logs",permalink:"/docs/recipes/inspect-audit-logs/"}},p={},c=[{value:"Get Started",id:"get-started",level:2},{value:"Bring your own backend service",id:"bring-your-own-backend-service",level:3},{value:"Implement a user profile page",id:"implement-a-user-profile-page",level:3},{value:"Submit profile data",id:"submit-profile-data",level:3},{value:"Basic user information",id:"basic-user-information",level:4},{value:"Verify and reset password",id:"verify-and-reset-password",level:4},{value:"Extend your business model with custom data",id:"extend-your-business-model-with-custom-data",level:4},{value:"(Optional) Validate verification code",id:"optional-validate-verification-code",level:3},{value:"Recap",id:"recap",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-user-profiles"},"\ud83d\udc64 User Profiles"),(0,a.kt)("p",null,"In previous sections, we demonstrated how to manage your users ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/admin-console"},"using Admin Console"),", or through ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/management-api"},"management APIs"),". This is a straightforward process for those in the role of administrator. However, it is also important for the regular users to update their profiles on their own."),(0,a.kt)("p",null,"To enable this, you will need to create your own profile page with the help of the management APIs."),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"In order to call Logto management APIs, a backend service is required for your app."),(0,a.kt)("li",{parentName:"ul"},"Make sure your backend service has acquired a pair of API key and API secret through the ",(0,a.kt)("a",{parentName:"li",href:"/docs/recipes/integrate-logto/machine-to-machine"},"machine-to-machine")," process."))),(0,a.kt)("p",null,"Assuming that your application has both frontend and backend, and your backend connects to Logto service through the M2M mechanism."),(0,a.kt)("p",null,"On your app's frontend, create a profile page for the user to input their profile information, such as their ",(0,a.kt)("em",{parentName:"p"},"name and email address"),". Usually it also consists of your own business model, such as ",(0,a.kt)("em",{parentName:"p"},"age, gender, social security number, mailing address, payment methods, etc"),"."),(0,a.kt)("p",null,"Then in most cases your overall flow would be like this:"),(0,a.kt)("mermaid",{value:"graph LR\n  subgraph App Frontend\n    UPP(User Profile Page)\n  end\n\n  subgraph App Backend\n    direction LR\n    S1(Fetch Profile API)\n    S2(Submit Profile API)\n\n    M1(OIDC User Model)\n    M2(Business Data Model)\n\n    S1 <---\x3e M1\n    S1 <---\x3e M2\n    S2 ---\x3e M1\n    S2 ---\x3e M2\n  end\n\n  subgraph App DB\n    DB[(Your own DB)]\n  end\n\n  subgraph Logto\n    direction LR\n    OE(OIDC Endpoint)\n    MA(Management APIs)\n\n    LD[(Logto DB)]\n\n    MA <---\x3e LD\n    OE <---\x3e LD\n  end\n\n  UPP <---\x3e S1\n  UPP ---\x3e S2\n  M2 <---\x3e DB\n  M1 <---\x3e|Logto SDK| OE\n  M1 <---\x3e|Machine To Machine| MA"}),(0,a.kt)("p",null,"Now let's consolidate the steps:"),(0,a.kt)("h3",{id:"bring-your-own-backend-service"},"Bring your own backend service"),(0,a.kt)("p",null,"Implement your own backend API services for your application, and protect your user requests with Logto. (See ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"protect your API")," for details)"),(0,a.kt)("h3",{id:"implement-a-user-profile-page"},"Implement a user profile page"),(0,a.kt)("p",null,"In your client application, create a new page for the user's profile. This can be done using a variety of front-end development frameworks. Check our ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/integrate-logto/"},"SDK integration guide")," and choose your favorite language to get started."),(0,a.kt)("p",null,"It is always recommended to fetch the profile data in prior, and pre-fill the form fields. You can do it by calling these two functions from your client app (with integration of Logto SDK):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SDK function ",(0,a.kt)("inlineCode",{parentName:"li"},"getIdTokenClaims")," to decode basic user claims cached in ID Token on client side"),(0,a.kt)("li",{parentName:"ul"},"SDK function ",(0,a.kt)("inlineCode",{parentName:"li"},"fetchUserInfo")," to fetch user data from Logto service")),(0,a.kt)("p",null,"Alternatively, you can also call the management API ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/users/:userId")," from your backend service, through the M2M mechanism."),(0,a.kt)("h3",{id:"submit-profile-data"},"Submit profile data"),(0,a.kt)("p",null,"After the user has finished editing the form on their profile page, the new changes need to be saved."),(0,a.kt)("p",null,"Typically, your app client will call your backend service and send the new data in its request body. Your backend service should then dispatch the new data to either Logto or your own database, depending on your business model."),(0,a.kt)("h4",{id:"basic-user-information"},"Basic user information"),(0,a.kt)("p",null,"For basic user information, such as user name, email address, phone number, etc., you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH /api/users/:userId")," API to update the user information in Logto. This API should be called from your backend service through M2M."),(0,a.kt)("h4",{id:"verify-and-reset-password"},"Verify and reset password"),(0,a.kt)("p",null,"Before allowing the user to update their password, you should verify their identity. To do this, call ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/users/:userId/password/verify")," to check if the user knows their current password. If the user has forgotten their current password, they can use a verification code to help with identity verification."),(0,a.kt)("p",null,"To update the user's password, simply call ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH /api/users/:userId/password"),"."),(0,a.kt)("p",null,"You might also want to check if the user has a password set up already. To do this, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/users/:userId/has-password API"),"."),(0,a.kt)("h4",{id:"extend-your-business-model-with-custom-data"},"Extend your business model with custom data"),(0,a.kt)("p",null,"In real-world scenarios, you might have specific business models associated with the user profile, such as age, gender, ethnicity, mailing address, payment methods, etc. Usually, sensitive information should be stored in your own database for security reasons. However, if no sensitive data is concerned, you can alternatively store the data in Logto using the custom data feature."),(0,a.kt)("p",null,"To fetch and update custom data, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/users/:userId/custom-data")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH /api/users/:userId/custom-data")," APIs."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Check the ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/users/custom-data"},"Custom Data")," section for more details.")),(0,a.kt)("h3",{id:"optional-validate-verification-code"},"(Optional) Validate verification code"),(0,a.kt)("p",null,"If your user wants to change either email address or phone number, you may want to validate them before submitting the entire form, as this ensures all emails and phone numbers are verified in your system, which plays a vital part if you want to enable passwordless sign-in methods (e.g. email and verification code) in your application."),(0,a.kt)("p",null,"In order to do this, you only have to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure an email or phone connector in Admin Console"),(0,a.kt)("li",{parentName:"ul"},"Make sure to add a message template with ",(0,a.kt)("inlineCode",{parentName:"li"},"Generic")," usage type in the config of the above connector")),(0,a.kt)("p",null,"Then, from your backend service, you can call the following Logto management APIs to send and validate the code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POST /api/verification-code")," to send verification code to a given email or phone"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"POST /api/verification-code/verify")," to verify the code against a given email or phone")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Check the ",(0,a.kt)("a",{parentName:"p",href:"https://openapi.logto.io/group/endpoint-verification-codes"},"API references")," for more details.")),(0,a.kt)("h2",{id:"recap"},"Recap"),(0,a.kt)("p",null,"Implementing a user profile can be a complex task. While we initially considered providing an out-of-the-box solution, we abandoned this approach after thorough consideration. User profiles typically consist of a combination of standard OpenID Connect (OIDC) user claims and the unique requirements of your business model. As a result, the best approach is to create your own custom profile page and backend services and then connect them to Logto via our Management APIs."),(0,a.kt)("p",null,"To summarize:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Develop your own custom frontend profile page and backend service."),(0,a.kt)("li",{parentName:"ul"},"Connect your backend service to Logto through Machine-to-Machine (M2M) communication."),(0,a.kt)("li",{parentName:"ul"},"Utilize Logto's Management APIs for interaction with Logto.")))}m.isMDXComponent=!0}}]);