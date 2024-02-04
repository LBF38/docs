"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[82566],{58442:function(e,n,o){o.r(n),o.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return l}});var t=o(11527),r=o(17279);const i={sidebar_position:9},s="\ud83d\ude80 Deployment",a={id:"docs/recipes/deployment/README",title:"\ud83d\ude80 Deployment",description:"Environment Variables",source:"@site/docs/docs/recipes/deployment/README.md",sourceDirName:"docs/recipes/deployment",slug:"/docs/recipes/deployment/",permalink:"/docs/recipes/deployment/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/deployment/README.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Use custom domain",permalink:"/docs/recipes/custom-domain/use-custom-domain"},next:{title:"\ud83d\udcbe File storage provider",permalink:"/docs/recipes/configure-storage-providers/"}},c={},l=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"Essentials",id:"essentials",level:3},{value:"HTTPS",id:"https",level:3},{value:"Reverse proxy",id:"reverse-proxy",level:3},{value:"How can I upgrade Logto safely?",id:"how-can-i-upgrade-logto-safely",level:2},{value:"Database alteration",id:"database-alteration",level:3},{value:"Containerization",id:"containerization",level:2},{value:"Shared connectors folder",id:"shared-connectors-folder",level:3},{value:"Database alteration",id:"database-alteration-1",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-deployment",children:"\ud83d\ude80 Deployment"}),"\n",(0,t.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsxs)(n.p,{children:["We use a generated preset of environment variables in our demo (",(0,t.jsx)(n.code,{children:"docker-compose.yml"}),"), which you should replace with your own and maintain consistency across multiple Logto instances."]}),"\n",(0,t.jsxs)(n.p,{children:["You can set env directly or put a ",(0,t.jsx)(n.code,{children:".env"})," file inside the Logto project root. If you are testing with Docker, check out the image's generated ",(0,t.jsx)(n.code,{children:".env"})," in ",(0,t.jsx)(n.code,{children:"/etc/logto"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"essentials",children:"Essentials"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DB_URL"})," The ",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6",children:"Postgres DSN"})," for Logto database."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"PORT"})," The port that Logto listens to. Default ",(0,t.jsx)(n.code,{children:"3001"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ENDPOINT"})," You may specify a URL with your custom domain for production (E.g. ",(0,t.jsx)(n.code,{children:"ENDPOINT=https://logto.domain.com"}),"). This will also affect the value of the ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier",children:"OIDC issuer identifier"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Enable Admin Console"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ADMIN_PORT"})," The port that Logto Admin Console listens to. Default ",(0,t.jsx)(n.code,{children:"3002"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," You may specify a URL with your custom domain for production (E.g. ",(0,t.jsx)(n.code,{children:"ADMIN_ENDPOINT=https://admin.domain.com"}),"). This will also affect the value of Admin Console Redirect URIs."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Disable Admin Console"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ADMIN_DISABLE_LOCALHOST"})," Set it to ",(0,t.jsx)(n.code,{children:"1"})," or ",(0,t.jsx)(n.code,{children:"true"})," to close the port for Admin Console. With ",(0,t.jsx)(n.code,{children:"ADMIN_ENDPOINT"})," unset, it'll completely disable the Admin Console."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more details about environment variables, see ",(0,t.jsx)(n.a,{href:"/docs/references/core/configuration",children:"Configuration"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"https",children:"HTTPS"}),"\n",(0,t.jsxs)(n.p,{children:["You may use Node.js to serve HTTPS directly or set up an HTTPS proxy / balancer in front of Node.js. See ",(0,t.jsx)(n.a,{href:"/docs/references/core/configuration#enabling-https",children:"Enabling HTTPS"})," for details."]}),"\n",(0,t.jsx)(n.h3,{id:"reverse-proxy",children:"Reverse proxy"}),"\n",(0,t.jsx)(n.p,{children:"If you want to use reverse proxy on your server, for example Nginx or Apache, you need to map 3001 and 3002 ports separately in your proxy pass settings.\nAssuming you are using Nginx, your Logto auth endpoint is running on port 3001, and your Logto admin console is running on 3002, put the following config in nginx.conf:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"server {\n  listen 443 ssl;\n  server_name <your_endpoint_url>; // e.g. auth.your-domain.com\n  ...\n\n  location / {\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto https;\n\n    proxy_pass http://127.0.0.1:3001;\n  }\n\n  ssl_certificate <path-to-your-certificate-for-auth-endpoint>;\n  ssl_certificate_key <path-to-your-certificate-key-for-auth-endpoint>\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then add the similar config for your admin console:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"server {\n  listen 443 ssl;\n  server_name <your_admin_endpoint_url>; // e.g. admin.your-domain.com\n  ...\n\n  location / {\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto https;\n\n    proxy_pass http://127.0.0.1:3002;\n  }\n\n  ssl_certificate <path-to-your-certificate-for-admin-endpoint>;\n  ssl_certificate_key <path-to-your-certificate-key-for-admin-endpoint>\n  ...\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Reload Nginx config to pick up the latest changes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nginx -s reload\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You are all set. Open the browser and visit ",(0,t.jsx)(n.code,{children:"https://admin.your-domain.com"}),", you should be able to see Logto welcome page."]}),"\n",(0,t.jsx)(n.h2,{id:"how-can-i-upgrade-logto-safely",children:"How can I upgrade Logto safely?"}),"\n",(0,t.jsxs)(n.p,{children:["If we don't mention it in the changelog, you can feel free to upgrade Logto without changing your code or database schema. Our API follows ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"semver"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"database-alteration",children:"Database alteration"}),"\n",(0,t.jsxs)(n.p,{children:["If a schema change is inevitable, we will provide an alteration script. Simply run ",(0,t.jsx)(n.code,{children:"npm run alteration deploy"})," in the Logto project root with ease to upgrade your database schema."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/docs/references/using-cli/database-alteration",children:"Database alteration"})," for details about the alteration command."]}),"\n",(0,t.jsx)(n.h2,{id:"containerization",children:"Containerization"}),"\n",(0,t.jsx)(n.p,{children:"For production, you may use Docker to containerize Logto. You can find the Dockerfile in the root directory of the project. If you want to run multiple instances of Logto, for instance, deploy Logto in a Kubernetes cluster, There are some additional steps you need to take."}),"\n",(0,t.jsx)(n.h3,{id:"shared-connectors-folder",children:"Shared connectors folder"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Logto will create a ",(0,t.jsx)(n.code,{children:"connectors"})," folder in the root directory of the ",(0,t.jsx)(n.code,{children:"core"})," folder. We recommend sharing the folder between multiple instances of Logto, you need to mount the ",(0,t.jsx)(n.code,{children:"packages/core/connectors"})," folder to the container and run ",(0,t.jsx)(n.code,{children:"npm run cli connector add -- --official"})," to deploy the connectors."]}),"\n",(0,t.jsxs)(n.p,{children:["There is a minimum example ",(0,t.jsx)(n.code,{children:"deployment"})," for Kubernetes:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: logto\n  namespace: default\nspec:\n  template:\n    spec:\n      volumes:\n        - name: connectors\n          emptyDir: {}\n      initContainers:\n        - image: ghcr.io/logto-io/logto\n          command:\n            - /bin/sh\n          args:\n            - '-c'\n            - 'npm run cli connector add -- --official'\n          name: init\n          volumeMounts:\n            - name: connectors\n              mountPath: /etc/logto/packages/core/connectors\n      containers:\n        - image: ghcr.io/logto-io/logto\n          name: logto\n          volumeMounts:\n            - name: connectors\n              mountPath: /etc/logto/packages/core/connectors\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we create an empty directory as a volume and mount it to containers. Then we run ",(0,t.jsx)(n.code,{children:"npm run cli connector add -- --official"})," in the init container to download the connectors. Finally, every container will share the same connectors folder with our official connectors already inside."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This is an example yaml, in order to run Logto, you need to set envs properly."})}),"\n",(0,t.jsx)(n.p,{children:'For production, you can replace the "empty dir" volume with a persistent volume, and do the "init" job by your own way, you know what you are doing!'}),"\n",(0,t.jsx)(n.h3,{id:"database-alteration-1",children:"Database alteration"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to connectors, the database alteration need to run in a single instance. You can use a job to run the alteration script.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"CI=true"})," environment variable is necessary when alteration is ran noninteractive."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: alteration\nspec:\n  template:\n    spec:\n      containers:\n        - name: alteration\n          image: ghcr.io/logto-io/logto\n          imagePullPolicy: Always\n          env:\n            - name: CI\n              value: 'true'\n            - name: DB_URL\n              value: postgresql://user:password@localhost:5432/logto\n          command:\n            - /bin/sh\n          args:\n            - '-c'\n            - 'npm run alteration deploy latest'\n      restartPolicy: Never\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/docs/references/using-cli/database-alteration",children:"Database alteration"})," for details about the alteration command."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},17279:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return s}});var t=o(50959);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);