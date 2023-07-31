import{b as t,j as e,W as a,C as o,R as s,c as u}from"./main-3b59557c.js";import{R as n}from"./chartjs-8bcccd15.js";import{C as r}from"./Code-57d0620b.js";import"./googlemaps-1f79ff89.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";/* empty css              */import"./toConsumableArray-876078cf.js";const c=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),e("p",{className:"text-lg",children:"Guards can be used to protect private or public routes based on the current user role."})]}),d=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Auth Guard"}),e("p",{className:"text-lg",children:"The AuthGuard component can be used to protect a private route from unauthenticated users."}),e(r,{children:`import AuthGuard from "../components/guards/AuthGuard";
        
function Component() {
  return (
    <AuthGuard>
      <PrivateExampleComponent />
    </AuthGuard>
  )
}`})]}),i=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Guest Guard"}),e("p",{className:"text-lg",children:"The GuestGuard component can be used to protect a route from authenticated users."}),e(r,{children:`import GuestGuard from "../components/guards/GuestGuard";
        
function Component() {
  return (
    <GuestGuard>
      <PublicExampleComponent />
    </GuestGuard>
  )
}`})]}),C=()=>t(n.Fragment,{children:[e(a,{title:"Guards"}),e(o,{fluid:!0,className:"p-0",children:e(s,{children:t(u,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"Guards"}),e("hr",{className:"my-4"}),e(c,{}),e(d,{}),e(i,{})]})})})]});export{C as default};
