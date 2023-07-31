import{b as t,j as e,W as i,C as s,R as l,c as n}from"./main-2dc2308b.js";import{R as a}from"./chartjs-8bcccd15.js";import{C as r}from"./Code-b4146ff8.js";import"./googlemaps-1f79ff89.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";/* empty css              */import"./toConsumableArray-56ac013a.js";const o=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),t("p",{className:"text-lg",children:[e("code",{children:"npm run build"})," creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like"," ",e("code",{children:"/static/js/main.<hash>.js"})," are served with the contents of the ",e("code",{children:"/static/js/main.<hash>.js"})," file."]})]}),c=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Static Server"}),t("p",{className:"text-lg",children:["For environments using"," ",e("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noreferrer noopener",children:"Node"}),", the easiest way to handle this would be to install"," ",e("a",{href:"https://github.com/zeit/serve",target:"_blank",rel:"noreferrer noopener",children:"serve"})," ","and let it handle the rest:"]}),e(r,{children:`npm install -g serve
serve -s build`}),t("p",{className:"text-lg",children:["The last command shown above will serve your static site on the port 5000. Like many of",e("a",{href:"https://github.com/vercel/serve",target:"_blank",rel:"noreferrer noopener",children:"serve"}),"’s internal settings, the port can be adjusted using the ",e("code",{children:"-l"})," ","or ",e("code",{children:"--listen"})," flags:"]}),e(r,{children:"serve -s build -l 4000"}),e("p",{className:"text-lg",children:"Run this command to get a full list of the options available:"}),e(r,{children:"serve -h"})]}),d=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Other Solutions"}),e("p",{className:"text-lg",children:"You don’t necessarily need a static server in order to run a Create React App project in production. It also works well when integrated into an existing server side app."})]}),h=()=>t("div",{className:"mb-5",children:[e("h4",{children:"Express"}),e("p",{className:"text-lg",children:"Express is a fast, unopinionated, minimalist web framework for Node.js. Here’s a programmatic example:"}),e(r,{children:`const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(9000);`})]}),p=()=>t("div",{className:"mb-5",children:[e("h4",{children:"Netlify"}),e("p",{className:"text-lg",children:"Deploy modern static websites with Netlify. Get CDN, Continuous deployment, 1-click HTTPS, and all the services you need."}),e("p",{className:"text-lg",children:"To do a manual deploy to Netlify’s CDN:"}),e(r,{children:`npm install netlify-cli -g
netlify deploy`}),t("p",{className:"text-lg",children:["Choose ",e("code",{children:"build"})," as the path to deploy."]}),t("p",{className:"text-lg",children:["To setup continuous delivery:",e("br",{}),"With this setup Netlify will build and deploy when you push to git or open a pull request:"]}),t("ol",{className:"text-lg",children:[e("li",{children:e("a",{href:"https://app.netlify.com/signup",target:"_blank",rel:"noopener noreferrer",children:"Start a new netlify project"})}),e("li",{children:"Pick your Git hosting service and select your repository"}),t("li",{children:["Click ",e("code",{children:"Build your site"})]})]})]}),N=()=>t(a.Fragment,{children:[e(i,{title:"Deployment"}),e(s,{fluid:!0,className:"p-0",children:e(l,{children:t(n,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"Deployment"}),e("hr",{className:"my-4"}),e(o,{}),e(c,{}),e(d,{}),e(h,{}),e(p,{})]})})})]});export{N as default};
