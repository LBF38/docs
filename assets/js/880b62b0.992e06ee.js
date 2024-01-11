"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83923],{41432:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h3,{id:"set-up-azure-ad-in-the-azure-portal",children:"Set up Azure AD in the Azure Portal"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Visit the ",(0,o.jsx)(e.a,{href:"https://portal.azure.com/#home",children:"Azure Portal"})," and sign in with your Azure account. You need to have an active subscription to access Azure AD."]}),"\n",(0,o.jsxs)(e.li,{children:["Click the ",(0,o.jsx)(e.strong,{children:"Azure Active Directory"})," from the services they offer, and click the ",(0,o.jsx)(e.strong,{children:"App Registrations"})," from the left menu."]}),"\n",(0,o.jsxs)(e.li,{children:["Click ",(0,o.jsx)(e.strong,{children:"New Registration"})," at the top and enter a description, select your ",(0,o.jsx)(e.strong,{children:"access type"})," and add your ",(0,o.jsx)(e.strong,{children:"Redirect URI"}),", which redirect the user to the application after logging in. In our case, this will be ",(0,o.jsx)(e.code,{children:"${your_logto_origin}/callback/${connector_id}"}),". e.g. ",(0,o.jsx)(e.code,{children:"https://logto.dev/callback/${connector_id}"}),". You need to select Web as Platform. The ",(0,o.jsx)(e.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n",(0,o.jsxs)(e.li,{children:["If you select ",(0,o.jsx)(e.strong,{children:"Single Tenant"})," for access type then you need to enter ",(0,o.jsx)(e.strong,{children:"TenantID"}),", else you need to enter ",(0,o.jsx)(e.code,{children:"common"})," as Tenant ID."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"configure-your-client-secret",children:"Configure your client secret"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["In your newly created project, click the ",(0,o.jsx)(e.strong,{children:"Certificates & Secrets"})," to get a client secret, and click the ",(0,o.jsx)(e.strong,{children:"New client secret"})," from the top."]}),"\n",(0,o.jsx)(e.li,{children:"Enter a description and an expiration."}),"\n",(0,o.jsxs)(e.li,{children:["This will only show your client secret once. Save the ",(0,o.jsx)(e.strong,{children:"value"})," to a secure location."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Add your App Registration's ",(0,o.jsx)(e.strong,{children:"Client ID"})," into logto json."]}),"\n",(0,o.jsxs)(e.li,{children:["Add your ",(0,o.jsx)(e.strong,{children:"Client Secret"})," into logto json."]}),"\n",(0,o.jsxs)(e.li,{children:["Add your App Registration's ",(0,o.jsx)(e.strong,{children:"Tenant ID"})," into logto json."]}),"\n",(0,o.jsxs)(e.li,{children:["Add your Microsoft ",(0,o.jsx)(e.strong,{children:"Login Url"}),' into logto json. This defaults to "',(0,o.jsx)(e.a,{href:"https://login.microsoftonline.com/",children:"https://login.microsoftonline.com/"}),"\" for many applications, but you can set your custom domain if you have one. (Don't forget the trailing slash)"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsonc",children:'{\n  "clientId": "<client-id>",\n  "clientSecret": "<client-secret>",\n  "tenantId": "<tenant-id>", // use "common" if you did\'t select **Single Tenant**\n  "cloudInstance": "https://login.microsoftonline.com/"\n}\n'})}),"\n",(0,o.jsx)(e.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Type"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"clientId"}),(0,o.jsx)(e.td,{children:"string"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"clientSecret"}),(0,o.jsx)(e.td,{children:"string"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"tenantId"}),(0,o.jsx)(e.td,{children:"string"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"cloudInstance"}),(0,o.jsx)(e.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(e.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-overview?tabs=nodejs",children:"Web app that signs in users"})})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},44263:function(n,e,t){t.d(e,{ZP:function(){return p}});var o=t(11527),i=t(17279),r=t(33756),s=t(362),a=t(93907),c=t(58851),l=t(49098),d=t(33437),u=t(13994);function h(n){const e={h2:"h2",h3:"h3",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(e.h2,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(e.h2,{id:"sign-in",children:"Sign in"}),"\n",(0,o.jsx)(e.h3,{id:"configure-redirect-uri",children:"Configure Redirect URI"}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(d.ZP,{figureSrc:l.Z,redirectUri:"io.logto.android://io.logto.sample/callback"}),"\n",(0,o.jsx)(e.h3,{id:"sign-in-1",children:"Sign in"}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(u.ZP,{sdk:"Android"})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},55458:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Connector tab",src:t(10766).Z+"",width:"3352",height:"1226"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',n.connector,'" and click "Next".']}),"\n",(0,o.jsx)(e.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(e.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},32778:function(n,e,t){t.d(e,{ZP:function(){return a}});var o=t(11527),i=t(17279),r=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png";function s(n){const e={code:"code",h3:"h3",img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Get Started",src:t(50554).Z+"",width:"2354",height:"588"})}),"\n",(0,o.jsxs)(e.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,o.jsx)(e.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,o.jsx)(e.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Framework List",src:t(3108).Z+"",width:"3626",height:"2804"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['In the opening modal, scroll to the "',n.type,'" section or filter all the available "\n',n.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Click the"," ","\n",n.framework.split("or").map((n=>`"${n.trim()}"`)).join(" or ")," ","\nframework card to start creating your application."]})}),"\n",(0,o.jsx)(e.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)("center",{children:(0,o.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,o.jsx)(e.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,o.jsx)(e.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(s,{...n})}):s(n)}},81057:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",img:"img",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3502",height:"1794"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',n.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',n.connector,'". Then\nyou should be able to see a button with text "Continue with ',n.connector,'" in the preview\nsection.']})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(e.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},10444:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://logto.io",children:"Logto"})," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control."]})}),"\n",(0,o.jsxs)("p",{children:[(0,o.jsxs)(e.p,{children:["In this article, we will go through the steps to quickly build the ",n.connector," sign-in\nexperience (user authentication) with"," "]}),(0,o.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk}),(0,o.jsx)("span",{children:" and "}),(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:(0,o.jsx)(e.p,{children:"Logto"})}),(0,o.jsx)(e.p,{children:"."})]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(e.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)("span",{children:[(0,o.jsxs)(e.p,{children:["Basic knowledge of"," "]}),(0,o.jsx)("a",{href:n.link,target:"_blank",rel:"noopener",children:n.sdk}),(0,o.jsx)(e.p,{children:"."})]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",n.connector," account."]}),"\n"]}),"\n"]})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},69441:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."]})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},13994:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)(e.admonition,{title:"Test your integration",type:"info",children:(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},93974:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"]})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},97335:function(n,e,t){t.r(e),t.d(e,{assets:function(){return j},connector:function(){return m},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return p},metadata:function(){return x},toc:function(){return f}});var o=t(11527),i=t(17279),r=t(10444),s=t(32778),a=t(55458),c=t(69441),l=t(81057),d=t(93974),u=t(44263),h=t(41432);const p={slug:"how-to-build-azure-ad-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","azure-ad","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Android and Logto"},g=void 0,x={permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-azure-ad.mdx",title:"How to build Azure AD sign-in with Android and Logto",description:"\x3c!--",date:"2024-01-11T02:22:04.911Z",formattedDate:"January 11, 2024",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"azure-ad",permalink:"/tutorial/tags/azure-ad"},{label:"android",permalink:"/tutorial/tags/android"},{label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.305,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-azure-ad-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","azure-ad","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Android and Logto"},unlisted:!1,prevItem:{title:"How to build Apple sign-in with Android and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-android-and-logto"},nextItem:{title:"How to build Discord sign-in with Android and Logto",permalink:"/tutorial/how-to-build-discord-sign-in-with-android-and-logto"}},j={authorsImageUrls:[void 0]},f=[{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},{value:"Add Azure AD connector",id:"add-azure-ad-connector",level:2},{value:"Set up Azure AD",id:"set-up-azure-ad",level:2},{value:"Save your configuraiton",id:"save-your-configuraiton",level:2},{value:"Enable Azure AD connector in Sign-in Experience",id:"enable-azure-ad-connector-in-sign-in-experience",level:2},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Further readings",id:"further-readings",level:2}],m="Azure AD";function b(n){const e={a:"a",h2:"h2",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.ZP,{connector:m,sdk:"Android",link:"https://developer.android.com/"}),"\n",(0,o.jsx)(e.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,o.jsx)(s.ZP,{type:"Native App",framework:"Android(kotlin) or Android(Java)"}),"\n",(0,o.jsx)(e.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,o.jsx)(u.ZP,{}),"\n",(0,o.jsx)(e.h2,{id:"add-azure-ad-connector",children:"Add Azure AD connector"}),"\n",(0,o.jsx)(a.ZP,{connector:m}),"\n",(0,o.jsx)(e.h2,{id:"set-up-azure-ad",children:"Set up Azure AD"}),"\n",(0,o.jsx)(h.ZP,{}),"\n",(0,o.jsx)(e.h2,{id:"save-your-configuraiton",children:"Save your configuraiton"}),"\n",(0,o.jsx)(c.ZP,{connector:m}),"\n",(0,o.jsx)(e.h2,{id:"enable-azure-ad-connector-in-sign-in-experience",children:"Enable Azure AD connector in Sign-in Experience"}),"\n",(0,o.jsx)(l.ZP,{connector:m}),"\n",(0,o.jsx)(e.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,o.jsx)(d.ZP,{connector:m,sdk:"Android"}),"\n",(0,o.jsx)(e.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,o.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,o.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,o.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function v(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(b,{...n})}):b(n)}},33756:function(n,e,t){t.d(e,{ZP:function(){return c}});var o=t(11527),i=t(17279),r=t(75268),s=t(67234);function a(n){const e={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"The minimum supported Android API level of Logto Andorid SDK is level 24."})}),"\n",(0,o.jsxs)(e.p,{children:["Add the ",(0,o.jsx)(e.code,{children:"mavenCentral()"})," repository to your Gradle project build file:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:"repositories {\n    mavenCentral()\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"Add Logto Android SDK to your dependencies:"}),"\n",(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'})})}),(0,o.jsx)(r.Z,{value:"groovy",label:"Groovy",children:(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-groovy",children:"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n"})})})]})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}},362:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",br:"br",code:"code",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["In Android, the Redirect URI follows the pattern: ",(0,o.jsx)(e.code,{children:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"}),"."]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.code,{children:"LOGTO_REDIRECT_SCHEME"})," should be a custom scheme in the reverse domain format.",(0,o.jsx)(e.br,{}),"\n","The ",(0,o.jsx)(e.code,{children:"YOUR_APP_PACKAGE"})," is your app package name."]})}),"\n",(0,o.jsxs)(e.p,{children:["Assuming you treat ",(0,o.jsx)(e.code,{children:"io.logto.android"})," as the custom ",(0,o.jsx)(e.code,{children:"LOGTO_REDIRECT_SCHEME"}),", and ",(0,o.jsx)(e.code,{children:"io.logto.sample"})," is your app package name, the Redirect URI should be ",(0,o.jsx)(e.code,{children:"io.logto.android://io.logto.sample/callback"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["Now you can configure the Redirect URI in the admin console (Take ",(0,o.jsx)(e.code,{children:"io.logto.android://io.logto.sample/callback"})," as an example)."]})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},93907:function(n,e,t){t.d(e,{ZP:function(){return p}});var o=t(11527),i=t(17279),r=t(75268),s=t(67234),a=t(38256);function c(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n'})})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}function d(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n'})})}function u(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}function h(n){const e={code:"code",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.ZP,{calling:".signIn(context, redirectUri, completion)"}),"\n",(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(u,{})}),(0,o.jsx)(r.Z,{value:"java",label:"Java",children:(0,o.jsx)(l,{})})]}),"\n",(0,o.jsxs)(e.p,{children:["After signing in successfully, ",(0,o.jsx)(e.code,{children:"logtoClient.isAuthenticated"})," will be ",(0,o.jsx)(e.code,{children:"true"}),"."]})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},58851:function(n,e,t){t.d(e,{ZP:function(){return h}});var o=t(11527),i=t(17279),r=t(75268),s=t(67234);function a(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n'})})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(a,{...n})}):a(n)}function l(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n'})})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}function u(n){const e={admonition:"admonition",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"Ensure the Application object has been initialized before creating a LogtoClient."})}),"\n",(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(d,{})}),(0,o.jsx)(r.Z,{value:"java",label:"Java",children:(0,o.jsx)(c,{})})]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},33437:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={a:"a",p:"p",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Let's switch to the Application details page of Admin Console in this section. Add a Redirect\nURI ",(0,o.jsx)("code",{children:n.redirectUri}),' and click "Save Changes".']})}),"\n",(0,o.jsx)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},38256:function(n,e,t){t.d(e,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(n){const e={admonition:"admonition",p:"p",...(0,i.a)(),...n.components};return(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)("p",{children:(0,o.jsxs)(e.p,{children:["Before calling ",(0,o.jsx)("code",{children:n.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},75268:function(n,e,t){t.d(e,{Z:function(){return s}});t(50959);var o=t(45924),i={tabItem:"tabItem_zBCg"},r=t(11527);function s(n){let{children:e,hidden:t,className:s}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,s),hidden:t,children:e})}},67234:function(n,e,t){t.d(e,{Z:function(){return w}});var o=t(50959),i=t(45924),r=t(58748),s=t(28903),a=t(88137),c=t(70670),l=t(91391),d=t(47841);function u(n){return o.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,o.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(n){const{values:e,children:t}=n;return(0,o.useMemo)((()=>{const n=e??function(n){return u(n).map((n=>{let{props:{value:e,label:t,attributes:o,default:i}}=n;return{value:e,label:t,attributes:o,default:i}}))}(t);return function(n){const e=(0,l.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function p(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function g(n){let{queryString:e=!1,groupId:t}=n;const i=(0,s.k6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,c._X)(r),(0,o.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(i.location.search);e.set(r,n),i.replace({...i.location,search:e.toString()})}),[r,i])]}function x(n){const{defaultValue:e,queryString:t=!1,groupId:i}=n,r=h(n),[s,c]=(0,o.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const o=t.find((n=>n.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:e,tabValues:r}))),[l,u]=g({queryString:t,groupId:i}),[x,j]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[i,r]=(0,d.Nk)(t);return[i,(0,o.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:i}),f=(()=>{const n=l??x;return p({value:n,tabValues:r})?n:null})();(0,a.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((n=>{if(!p({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);c(n),u(n),j(n)}),[u,j,r]),tabValues:r}}var j=t(77691),f={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},m=t(11527);function b(n){let{className:e,block:t,selectedValue:o,selectValue:s,tabValues:a}=n;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=n=>{const e=n.currentTarget,t=c.indexOf(e),i=a[t].value;i!==o&&(l(e),s(i))},u=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const t=c.indexOf(n.currentTarget)+1;e=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(n.currentTarget)-1;e=c[t]??c[c.length-1];break}}e?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e),children:a.map((n=>{let{value:e,label:t,attributes:r}=n;return(0,m.jsx)("li",{role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,ref:n=>c.push(n),onKeyDown:u,onClick:d,...r,className:(0,i.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":o===e}),children:t??e},e)}))})}function v(n){let{lazy:e,children:t,selectedValue:i}=n;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=r.find((n=>n.props.value===i));return n?(0,o.cloneElement)(n,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((n,e)=>(0,o.cloneElement)(n,{key:e,hidden:n.props.value!==i})))})}function y(n){const e=x(n);return(0,m.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,m.jsx)(b,{...n,...e}),(0,m.jsx)(v,{...n,...e})]})}function w(n){const e=(0,j.Z)();return(0,m.jsx)(y,{...n,children:u(n.children)},String(e))}},49098:function(n,e,t){e.Z=t.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},10766:function(n,e,t){e.Z=t.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},3108:function(n,e,t){e.Z=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},50554:function(n,e,t){e.Z=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},79120:function(n,e,t){e.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(n,e,t){e.Z=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return s}});var o=t(50959);const i={},r=o.createContext(i);function s(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);