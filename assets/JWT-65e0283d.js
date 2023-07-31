import{b as t,j as e,W as o,C as s,R as i,c as r}from"./main-2dc2308b.js";import{R as c}from"./chartjs-8bcccd15.js";import{C as n}from"./Code-b4146ff8.js";import"./googlemaps-1f79ff89.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";/* empty css              */import"./toConsumableArray-56ac013a.js";const a=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),e("p",{className:"text-lg",children:"JSON web token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object."})]}),l=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Quick start"}),e("p",{className:"text-lg",children:"Follow these steps if you want to enable JWT authentication in your application."}),e("h4",{children:"1. Enable AuthProvider"}),t("p",{className:"text-lg",children:["Enable JWT's ",e("code",{children:"AuthProvider"})," in ",e("code",{children:"/src/App.js"}),"."]}),e(n,{children:`import { AuthProvider } from "./contexts/JWTContext";
        
function App() {
  return (
    <AuthProvider>
      {content}
    </AuthProvider>;
  )
}`}),e("h4",{children:"2. Enable useAuth hook"}),t("p",{className:"text-lg",children:["Enable JWT's ",e("code",{children:"useAuth"})," hook in"," ",e("code",{children:"/src/hooks/useAuth.js"}),"."]}),e(n,{children:`import { AuthContext } from "../contexts/JWTContext";
        
const useAuth = () => {
  return useContext(AuthContext);
};`})]}),h=()=>t("div",{className:"mb-5",children:[e("h3",{children:"How to use"}),e("p",{className:"text-lg",children:"Learn how to use JWT authentication. There are multiple examples included, including sign in, sign up and sign out."}),e("h4",{children:"Retrieve user info"}),e(n,{children:`import useAuth from '../hooks/useAuth';

const App = () => {
  const { displayName } = useAuth();

  return (
    <span>
      {user.displayName}
    </span>
  );
};`}),e("h4",{children:"Execute actions"}),e(n,{children:`import useAuth from '../hooks/useAuth';

const App = () => {
  const { signIn } = useAuth();

  return (
    <button onClick={() => signIn()}>
      Sign in
    </button>
  );
};`})]}),f=()=>t(c.Fragment,{children:[e(o,{title:"JSON Web Token"}),e(s,{fluid:!0,className:"p-0",children:e(i,{children:t(r,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"JSON Web Token"}),e("hr",{className:"my-4"}),e(a,{}),e(l,{}),e(h,{})]})})})]});export{f as default};
