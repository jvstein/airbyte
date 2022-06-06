"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3796],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,g=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84862:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],i={description:"Start syncing data in minutes with Airbyte"},c="Postgres Replication",l={unversionedId:"archive/examples/postgres-replication",id:"archive/examples/postgres-replication",title:"Postgres Replication",description:"Start syncing data in minutes with Airbyte",source:"@site/../docs/archive/examples/postgres-replication.md",sourceDirName:"archive/examples",slug:"/archive/examples/postgres-replication",permalink:"/archive/examples/postgres-replication",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/archive/examples/postgres-replication.md",tags:[],version:"current",frontMatter:{description:"Start syncing data in minutes with Airbyte"}},u={},p=[{value:"1. Set up your preferences",id:"1-set-up-your-preferences",level:2},{value:"2. Set up your first connection",id:"2-set-up-your-first-connection",level:2},{value:"<strong>Connect the Postgres database</strong>",id:"connect-the-postgres-database",level:3},{value:"3. Check the logs of your first sync",id:"3-check-the-logs-of-your-first-sync",level:2},{value:"4. Check if the syncing actually worked",id:"4-check-if-the-syncing-actually-worked",level:2}],d={toc:p};function h(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postgres-replication"},"Postgres Replication"),(0,r.kt)("p",null,"Let's see how you can spin up a local instance of Airbyte and syncing data from one Postgres database to another."),(0,r.kt)("p",null,"Here's a 6-minute video showing you how you can do it."),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Rcpt5SVsMpk%22"},'https://www.youtube.com/watch?v=Rcpt5SVsMpk"'),' caption="" %}'),(0,r.kt)("p",null,"First of all, make sure you have Docker and Docker Compose installed. If this isn't the case, follow the ",(0,r.kt)("a",{parentName:"p",href:"/deploying-airbyte/local-deployment"},"guide")," for the recommended approach to install Docker. "),(0,r.kt)("p",null,"Once Docker is installed successfully, run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,r.kt)("p",null,"Once you see an Airbyte banner, the UI is ready to go at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000/"},"http://localhost:8000/"),"."),(0,r.kt)("h2",{id:"1-set-up-your-preferences"},"1. Set up your preferences"),(0,r.kt)("p",null,"You should see an onboarding page. Enter your email and continue."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(26889).Z,width:"1704",height:"1780"})),(0,r.kt)("h2",{id:"2-set-up-your-first-connection"},"2. Set up your first connection"),(0,r.kt)("p",null,"We support a growing ",(0,r.kt)("a",{parentName:"p",href:"../../integrations/sources"},"list of source connectors"),". For now, we will start out with a Postgres source and destination."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you don't have a readily available Postgres database to sync, here are some quick instructions:"),(0,r.kt)("br",{parentName:"p"}),"\n","Run the following commands in a new terminal window to start backgrounded source and destination databases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker run --rm --name airbyte-source -e POSTGRES_PASSWORD=password -p 2000:5432 -d postgres\ndocker run --rm --name airbyte-destination -e POSTGRES_PASSWORD=password -p 3000:5432 -d postgres\n")),(0,r.kt)("p",null,"Add a table with a few rows to the source database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'docker exec -it airbyte-source psql -U postgres -c "CREATE TABLE users(id SERIAL PRIMARY KEY, col1 VARCHAR(200));"\ndocker exec -it airbyte-source psql -U postgres -c "INSERT INTO public.users(col1) VALUES(\'record1\');"\ndocker exec -it airbyte-source psql -U postgres -c "INSERT INTO public.users(col1) VALUES(\'record2\');"\ndocker exec -it airbyte-source psql -U postgres -c "INSERT INTO public.users(col1) VALUES(\'record3\');"\n')),(0,r.kt)("p",null,"You now have a Postgres database ready to be replicated!"),(0,r.kt)("h3",{id:"connect-the-postgres-database"},(0,r.kt)("strong",{parentName:"h3"},"Connect the Postgres database")),(0,r.kt)("p",null,"In the UI, you will see a wizard that allows you choose the data you want to send through Airbyte."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(27102).Z,width:"1762",height:"1482"})),(0,r.kt)("p",null,"Use the name ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte-source")," for the name and ",(0,r.kt)("inlineCode",{parentName:"p"},"Postgres"),"as the type. If you used our instructions to create a Postgres database, fill in the configuration fields as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Host: localhost\nPort: 2000\nUser: postgres\nPassword: password\nDB Name: postgres\n")),(0,r.kt)("p",null,"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Set Up Source")," and the wizard should move on to allow you to configure a destination."),(0,r.kt)("p",null,"We support a growing list of data warehouses, lakes and databases. For now, use the name ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte-destination"),", and configure the destination Postgres database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Host: localhost\nPort: 3000\nUser: postgres\nPassword: password\nDB Name: postgres\n")),(0,r.kt)("p",null,"After adding the destination, you can choose what tables and columns you want to sync."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(78667).Z,width:"1700",height:"1722"})),(0,r.kt)("p",null,'For this demo, we recommend leaving the defaults and selecting "Every 5 Minutes" as the frequency. Click ',(0,r.kt)("inlineCode",{parentName:"p"},"Set Up Connection")," to finish setting up the sync."),(0,r.kt)("h2",{id:"3-check-the-logs-of-your-first-sync"},"3. Check the logs of your first sync"),(0,r.kt)("p",null,"You should now see a list of sources with the source you just added. Click on it to find more information about your connection. This is the page where you can update any settings about this source and how it syncs. There should be a ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed")," job under the history section. If you click on that run, it will show logs from that run."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(55090).Z,width:"1742",height:"1280"})),(0,r.kt)("p",null,"One of biggest problems we've seen in tools like Fivetran is the lack of visibility when debugging. In Airbyte, allowing full log access and the ability to debug and fix connector problems is one of our highest priorities. We'll be working hard to make these logs accessible and understandable."),(0,r.kt)("h2",{id:"4-check-if-the-syncing-actually-worked"},"4. Check if the syncing actually worked"),(0,r.kt)("p",null,"Now let's verify that this worked. Let's output the contents of the destination db:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'docker exec airbyte-destination psql -U postgres -c "SELECT * FROM public.users;"\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Don't worry about the awkward ",(0,r.kt)("inlineCode",{parentName:"p"},"public_users")," name for now; we are currently working on an update to allow users to configure their destination table names!"))),(0,r.kt)("p",null,"You should see the rows from the source database inside the destination database!"),(0,r.kt)("p",null,"And there you have it. You've taken data from one database and replicated it to another. All of the actual configuration for this replication only took place in the UI."),(0,r.kt)("p",null,"That's it! This is just the beginning of Airbyte. If you have any questions at all, please reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.airbyte.io/"},"Slack"),". We\u2019re still in alpha, so if you see any rough edges or want to request a connector you need, please create an issue on our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte"},"Github")," or leave a thumbs up on an existing issue."),(0,r.kt)("p",null,"Thank you and we hope you enjoy using Airbyte."))}h.isMDXComponent=!0},27102:function(e,t,n){t.Z=n.p+"assets/images/02_set-up-sources-dd3aca836ac1d0db8a7c2fde6d5a5c46.png"},78667:function(e,t,n){t.Z=n.p+"assets/images/03_set-up-connection-2df972bda39643f094bc8c8e18a18135.png"},55090:function(e,t,n){t.Z=n.p+"assets/images/04_source-details-e00f4d36f55e50192565f2610f4bc179.png"},26889:function(e,t,n){t.Z=n.p+"assets/images/airbyte_get-started-65cd1be85b5b9e0816a8557536ea976d.png"}}]);