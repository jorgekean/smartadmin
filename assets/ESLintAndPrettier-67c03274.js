import{b as t,j as e,W as i,C as o,R as n,c as a}from"./main-2dc2308b.js";import{R as l}from"./chartjs-8bcccd15.js";import{C as r}from"./Code-b4146ff8.js";import"./googlemaps-1f79ff89.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";/* empty css              */import"./toConsumableArray-56ac013a.js";const s=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),e("p",{className:"text-lg",children:"To format code automatically, we've included a basic ESLint & Prettier configuration. ESLint statically analyzes your code to quickly find problems. Prettier is used to automatically format the code you write to ensure a consistent code style withing your projects."}),e("p",{className:"text-lg",children:"Included ESLint configuration:"}),e(r,{children:`{
  "extends": ["react-app", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}`})]}),c=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Usage"}),e("p",{className:"text-lg",children:"Format all source files in the /src folder:"}),e(r,{children:"npm run lint"})]}),d=()=>t("div",{className:"mb-5",children:[e("h3",{children:"VSCode integration"}),t("p",{className:"text-lg",children:["To use ESLint & Prettier in combination with VSCode, we suggest installing the"," ",e("a",{target:"_blank",rel:"noreferrer noopener",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",children:"VSCode ESLint extension"}),". After installing the extension, the code will automatically be formatted. The following configuration is included, which can be enabled/disabled or adjusted to your needs."]}),e(r,{children:`{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}`})]}),S=()=>t(l.Fragment,{children:[e(i,{title:"Support"}),e(o,{fluid:!0,className:"p-0",children:e(n,{children:t(a,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"ESLint & Prettier"}),e("hr",{className:"my-4"}),e(s,{}),e(c,{}),e(d,{})]})})})]});export{S as default};
