"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6209],{43901:function(e,o,n){n.r(o),n.d(o,{assets:function(){return a},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var t=n(11527),r=n(17279);const i={sidebar_position:10},s="\ud83d\udcbe File storage provider",c={id:"docs/recipes/configure-storage-providers/README",title:"\ud83d\udcbe File storage provider",description:"By default, Logto Console uses a text input for static file URLs such as avatars. To enable a more intuitive file upload experience with drag and drop, you need to configure a storage provider.",source:"@site/docs/docs/recipes/configure-storage-providers/README.md",sourceDirName:"docs/recipes/configure-storage-providers",slug:"/docs/recipes/configure-storage-providers/",permalink:"/docs/recipes/configure-storage-providers/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-storage-providers/README.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"\ud83d\ude80 Deployment",permalink:"/docs/recipes/deployment/"},next:{title:"\ud83d\uddc4\ufe0f Enable central cache",permalink:"/docs/recipes/enable-central-cache/"}},a={},l=[{value:"Azure Storage",id:"azure-storage",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Config using CLI",id:"config-using-cli",level:3},{value:"<code>connectionString</code>",id:"connectionstring",level:4},{value:"<code>container</code>",id:"container",level:4},{value:"<code>publicUrl</code>",id:"publicurl",level:4},{value:"S3 Storage",id:"s3-storage",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Config using CLI",id:"config-using-cli-1",level:3},{value:"<code>accessKeyId</code>",id:"accesskeyid",level:4},{value:"<code>accessSecretKey</code>",id:"accesssecretkey",level:4},{value:"<code>bucket</code>",id:"bucket",level:4},{value:"<code>region</code>",id:"region",level:4},{value:"<code>endpoint</code>",id:"endpoint",level:4},{value:"<code>publicUrl</code>",id:"publicurl-1",level:4}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"-file-storage-provider",children:"\ud83d\udcbe File storage provider"}),"\n",(0,t.jsx)(o.p,{children:"By default, Logto Console uses a text input for static file URLs such as avatars. To enable a more intuitive file upload experience with drag and drop, you need to configure a storage provider."}),"\n",(0,t.jsx)(o.p,{children:"Logto supports multiple storage providers, including AWS S3, Azure Storage. This recipe will show you how to configure a storage provider for Logto."}),"\n",(0,t.jsxs)(o.p,{children:["The configuration is stored in DB's ",(0,t.jsx)(o.code,{children:"systems"}),' table, but it is recommended to use the CLI to configure the storage provider. For more information, try the "help" command:']}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-sh",children:"pnpm logto db system --help\n"})}),"\n",(0,t.jsx)(o.h2,{id:"azure-storage",children:"Azure Storage"}),"\n",(0,t.jsx)(o.p,{children:"Azure Storage is a powerful and scalable cloud storage solution that allows you to store and manage your data in the cloud. The following recipe will show you how to configure Azure Storage as a storage provider for Logto."}),"\n",(0,t.jsx)(o.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:(0,t.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview",children:"Azure Storage account"})}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"config-using-cli",children:"Config using CLI"}),"\n",(0,t.jsx)(o.p,{children:"Example usage:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'pnpm logto db system set storageProvider \'{"provider":"AzureStorage","connectionString":"DefaultEndpointsProtocol=https;AccountName=logto;AccountKey=oRhfTBHOHiBxxxxxxxxxxxxxxxxZ0se6XROftl/Xrow==;EndpointSuffix=core.windows.net","container":"logto"}\'\n'})}),"\n",(0,t.jsx)(o.h4,{id:"connectionstring",children:(0,t.jsx)(o.code,{children:"connectionString"})}),"\n",(0,t.jsx)(o.p,{children:"To access Azure Storage, you need to use a connection string, which is a string of characters that contains the necessary information for establishing a connection to your storage account."}),"\n",(0,t.jsxs)(o.p,{children:["To get the connection string, follow the official ",(0,t.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string",children:"Azure Storage connection string documentation"}),"."]}),"\n",(0,t.jsx)(o.h4,{id:"container",children:(0,t.jsx)(o.code,{children:"container"})}),"\n",(0,t.jsx)(o.p,{children:"The container is a storage resource that stores blobs. You can use the container to organize your blobs and to control access to your data."}),"\n",(0,t.jsxs)(o.p,{children:["To create a container, follow the official ",(0,t.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#containers",children:"Azure Storage container documentation"}),"."]}),"\n",(0,t.jsx)(o.h4,{id:"publicurl",children:(0,t.jsx)(o.code,{children:"publicUrl"})}),"\n",(0,t.jsx)(o.p,{children:"Optional."}),"\n",(0,t.jsxs)(o.p,{children:['The public URL is the URL that can be used to access the storage resource publicly. If you are not using CDN, you can leave it blank to use the Azure Storage\'s default "Primary endpoint" as the public URL. Logto will get this value from "connectionString" with the help of Azure SDK. To learn more about your storage account\'s primary endpoint, follow the official ',(0,t.jsx)(o.a,{href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview#primary-endpoints",children:"Azure Storage primary endpoint documentation"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"s3-storage",children:"S3 Storage"}),"\n",(0,t.jsx)(o.p,{children:"S3 Storage is a cloud storage service that offers object storage through a web service interface. The following recipe will show you how to configure S3 Storage as a storage provider for Logto."}),"\n",(0,t.jsx)(o.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html",children:"S3 Storage account"})," or other S3 compatible storage service, such as ",(0,t.jsx)(o.a,{href:"https://min.io/",children:"MinIO"})]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"config-using-cli-1",children:"Config using CLI"}),"\n",(0,t.jsx)(o.p,{children:"Example usage:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:'pnpm logto db system set storageProvider \'{"provider":"S3Storage","accessKeyId":"my-access-key-id","accessSecretKey": "my-secret-access-key","bucket":"logto","endpoint":"https://s3.us-east-2.amazonaws.com"}\'\n'})}),"\n",(0,t.jsx)(o.h4,{id:"accesskeyid",children:(0,t.jsx)(o.code,{children:"accessKeyId"})}),"\n",(0,t.jsxs)(o.p,{children:["The access key ID is an identifier for your AWS account. To find your access Key ID for your AWS account, follow the official ",(0,t.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey",children:"AWS access key ID documentation"}),"."]}),"\n",(0,t.jsx)(o.h4,{id:"accesssecretkey",children:(0,t.jsx)(o.code,{children:"accessSecretKey"})}),"\n",(0,t.jsxs)(o.p,{children:["The secret access key is used in conjunction with the access key ID to sign programmatic requests. To find your access key secret for your AWS account, follow the official ",(0,t.jsx)(o.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey",children:"AWS access key secret documentation"}),"."]}),"\n",(0,t.jsx)(o.h4,{id:"bucket",children:(0,t.jsx)(o.code,{children:"bucket"})}),"\n",(0,t.jsxs)(o.p,{children:["The bucket is a container for objects stored in Amazon S3. To create a bucket, follow the official ",(0,t.jsx)(o.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html",children:"AWS S3 bucket documentation"}),"."]}),"\n",(0,t.jsx)(o.h4,{id:"region",children:(0,t.jsx)(o.code,{children:"region"})}),"\n",(0,t.jsx)(o.p,{children:"Optional."}),"\n",(0,t.jsxs)(o.p,{children:["The region is the geographical region where the AWS S3 bucket is located. If ",(0,t.jsx)(o.code,{children:"endpoint"})," is a standard AWS S3 endpoint, it can be parsed from ",(0,t.jsx)(o.code,{children:"endpoint"}),". To find your AWS S3 region, follow the official ",(0,t.jsx)(o.a,{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html",children:"AWS S3 region documentation"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"If you are using a S3 compatible storage service, you may leave this field blank."}),"\n",(0,t.jsx)(o.h4,{id:"endpoint",children:(0,t.jsx)(o.code,{children:"endpoint"})}),"\n",(0,t.jsx)(o.p,{children:"Optional."}),"\n",(0,t.jsxs)(o.p,{children:["Endpoint is the URL that is used to access the AWS S3 service. To find your AWS S3 endpoint, follow the official ",(0,t.jsx)(o.a,{href:"https://docs.aws.amazon.com/general/latest/gr/s3.html",children:"AWS S3 endpoint documentation"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"You can leave this field blank to use the default endpoint for the region. If you are using a S3 compatible storage service, you can use the endpoint of the service."}),"\n",(0,t.jsx)(o.h4,{id:"publicurl-1",children:(0,t.jsx)(o.code,{children:"publicUrl"})}),"\n",(0,t.jsx)(o.p,{children:"Optional."}),"\n",(0,t.jsx)(o.p,{children:"The public URL is the URL that can be used to access the storage resource publicly. If you are not using CDN, you can leave it blank to use the S3 Storage's default URL."})]})}function u(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},17279:function(e,o,n){n.d(o,{Z:function(){return c},a:function(){return s}});var t=n(50959);const r={},i=t.createContext(r);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);