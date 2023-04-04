"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[46797],{86829:function(e,r,t){t.d(r,{Z:function(){return P}});var a=t(40151),n=(t(59496),t(45924)),s=t(44245),l=t(2620),i=t(51513),o=t(90352),c="sidebar_xpl1",m="sidebarItemTitle_i1ve",u="sidebarItemList_p2zL",d="sidebarItem_nrpe",h="sidebarItemLink_nSRt",g="sidebarItemLinkActive_F8yM",v=t(4637);function f(e){var r=e.sidebar;return(0,v.jsx)("aside",{className:"col col--3",children:(0,v.jsxs)("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,v.jsx)("div",{className:(0,n.Z)(m,"margin-bottom--md"),children:r.title}),(0,v.jsx)("ul",{className:(0,n.Z)(u,"clean-list"),children:r.items.map((function(e){return(0,v.jsx)("li",{className:d,children:(0,v.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:h,activeClassName:g,children:e.title})},e.permalink)}))})]})})}var p=t(22442);function x(e){var r=e.sidebar;return(0,v.jsx)("ul",{className:"menu__list",children:r.items.map((function(e){return(0,v.jsx)("li",{className:"menu__list-item",children:(0,v.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function j(e){return(0,v.jsx)(p.Zo,{component:x,props:e})}function b(e){var r=e.sidebar,t=(0,l.i)();return null!=r&&r.items.length?"mobile"===t?(0,v.jsx)(j,{sidebar:r}):(0,v.jsx)(f,{sidebar:r}):null}var N=["sidebar","toc","children"];function P(e){var r=e.sidebar,t=e.toc,l=e.children,i=(0,a.Z)(e,N),o=r&&r.items.length>0;return(0,v.jsx)(s.Z,Object.assign({},i,{children:(0,v.jsx)("div",{className:"container margin-vert--lg",children:(0,v.jsxs)("div",{className:"row",children:[(0,v.jsx)(b,{sidebar:r}),(0,v.jsx)("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog",children:l}),t&&(0,v.jsx)("div",{className:"col col--2",children:t})]})})}))}},85322:function(e,r,t){t.d(r,{Z:function(){return R}});t(59496);var a=t(45924),n=t(47359),s=t(5285),l=t(4637);function i(e){var r,t=e.children,a=e.className,i=(0,n.C)(),o=i.frontMatter,c=i.assets,m=(0,s.C)().withBaseUrl,u=null!=(r=c.image)?r:o.image;return(0,l.jsxs)("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[u&&(0,l.jsx)("meta",{itemProp:"image",content:m(u,{absolute:!0})}),t]})}var o=t(35426),c=t(90352),m=t(93298),u="container_sMeG";function d(e){var r,t=e.readingTime,a=(r=(0,m.c)().selectMessage,function(e){var t=Math.ceil(e);return r(t,(0,c.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))});return(0,l.jsx)(l.Fragment,{children:a(t)})}function h(e){var r=e.date,t=e.formattedDate;return(0,l.jsx)("time",{dateTime:r,itemProp:"datePublished",children:t})}function g(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function v(e){var r=e.className,t=(0,n.C)().metadata,s=t.date,i=t.formattedDate,o=t.readingTime;return(0,l.jsxs)("div",{className:(0,a.Z)(u,"margin-vert--md",r),children:[(0,l.jsx)(h,{date:s,formattedDate:i}),void 0!==o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g,{}),(0,l.jsx)(d,{readingTime:o})]})]})}var f=t(51513);function p(e){return e.href?(0,l.jsx)(f.Z,Object.assign({},e)):(0,l.jsx)(l.Fragment,{children:e.children})}function x(e){var r=e.author,t=e.className,n=r.name,s=r.title,i=r.url,o=r.imageURL,c=r.email,m=i||c&&"mailto:"+c||void 0;return(0,l.jsxs)("div",{className:(0,a.Z)("avatar margin-bottom--sm",t),children:[o&&(0,l.jsx)(p,{href:m,className:"avatar__photo-link",children:(0,l.jsx)("img",{className:"avatar__photo",src:o,alt:n})}),n&&(0,l.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,l.jsx)("div",{className:"avatar__name",children:(0,l.jsx)(p,{href:m,itemProp:"url",children:(0,l.jsx)("span",{itemProp:"name",children:n})})}),s&&(0,l.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:s})]})]})}var j="authorCol_WSO7",b="imageOnlyAuthorRow_Z_Mg",N="imageOnlyAuthorCol_mYle";function P(e){var r=e.className,t=(0,n.C)(),s=t.metadata.authors,i=t.assets;if(0===s.length)return null;var o=s.every((function(e){return!e.name}));return(0,l.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",o?b:"row",r),children:s.map((function(e,r){var t;return(0,l.jsx)("div",{className:(0,a.Z)(!o&&"col col--6",o?N:j),children:(0,l.jsx)(x,{author:Object.assign({},e,{imageURL:null!=(t=i.authorsImageUrls[r])?t:e.imageURL})})},r)}))})}function _(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(o.Z,{}),(0,l.jsx)(v,{}),(0,l.jsx)(P,{})]})}var Z=t(40713),k=t(54832);function T(e){var r=e.children,t=e.className,s=(0,n.C)().isBlogPostPage;return(0,l.jsx)("div",{id:s?Z.blogPostContainerID:void 0,className:(0,a.Z)("markdown",t),itemProp:"articleBody",children:(0,l.jsx)(k.Z,{children:r})})}var C=t(84885),w=t(8173),M=t(40151),F=["blogPostTitle"];function B(){return(0,l.jsx)("b",{children:(0,l.jsx)(c.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function I(e){var r=e.blogPostTitle,t=(0,M.Z)(e,F);return(0,l.jsx)(f.Z,Object.assign({"aria-label":(0,c.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:r})},t,{children:(0,l.jsx)(B,{})}))}var y="blogPostFooterDetailsFull_BanY";function L(){var e=(0,n.C)(),r=e.metadata,t=e.isBlogPostPage,s=r.tags,i=r.title,o=r.editUrl,c=r.hasTruncateMarker,m=!t&&c,u=s.length>0;return u||m||o?(0,l.jsxs)("footer",{className:(0,a.Z)("row docusaurus-mt-lg",t&&y),children:[u&&(0,l.jsx)("div",{className:(0,a.Z)("col",{"col--9":m}),children:(0,l.jsx)(w.Z,{tags:s})}),t&&o&&(0,l.jsx)("div",{className:"col margin-top--sm",children:(0,l.jsx)(C.Z,{editUrl:o})}),m&&(0,l.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":u}),children:(0,l.jsx)(I,{blogPostTitle:i,to:r.permalink})})]}):null}function R(e){var r=e.children,t=e.className,s=(0,n.C)().isBlogPostPage?void 0:"margin-bottom--xl";return(0,l.jsxs)(i,{className:(0,a.Z)(s,t),children:[(0,l.jsx)(_,{}),(0,l.jsx)(T,{children:r}),(0,l.jsx)(L,{})]})}},47359:function(e,r,t){t.d(r,{C:function(){return o},n:function(){return i}});var a=t(59496),n=t(687),s=t(4637),l=a.createContext(null);function i(e){var r=e.children,t=e.content,n=e.isBlogPostPage,i=function(e){var r=e.content,t=e.isBlogPostPage;return(0,a.useMemo)((function(){return{metadata:r.metadata,frontMatter:r.frontMatter,assets:r.assets,toc:r.toc,isBlogPostPage:t}}),[r,t])}({content:t,isBlogPostPage:void 0!==n&&n});return(0,s.jsx)(l.Provider,{value:i,children:r})}function o(){var e=(0,a.useContext)(l);if(null===e)throw new n.i6("BlogPostProvider");return e}},93298:function(e,r,t){t.d(r,{c:function(){return c}});var a=t(59496),n=t(57308),s=["zero","one","two","few","many","other"];function l(e){return s.filter((function(r){return e.includes(r)}))}var i={locale:"en",pluralForms:l(["one","other"]),select:function(e){return 1===e?"one":"other"}};function o(){var e=(0,n.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return r=e,t=new Intl.PluralRules(r),{locale:r,pluralForms:l(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),i}var r,t}),[e])}function c(){var e=o();return{selectMessage:function(r,t){return function(e,r,t){var a=e.split("|");if(1===a.length)return a[0];a.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var n=t.select(r),s=t.pluralForms.indexOf(n);return a[Math.min(s,a.length-1)]}(t,r,e)}}}}}]);