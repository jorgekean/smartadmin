import{b as o,j as e,W as n,C as i,R as s,c as r}from"./main-3b59557c.js";import{R as c}from"./chartjs-8bcccd15.js";import{C as t}from"./Code-57d0620b.js";import"./googlemaps-1f79ff89.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";/* empty css              */import"./toConsumableArray-876078cf.js";const a=()=>o("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),e("p",{className:"text-lg",children:"Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Apple, Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0 and OpenID Connect."})]}),l=()=>o("div",{className:"mb-5",children:[e("h3",{children:"Quick start"}),e("p",{className:"text-lg",children:"Follow these steps if you want to enable Amazon Cognito authentication in your application."}),e("h4",{children:"1. Enable AuthProvider"}),o("p",{className:"text-lg",children:["Enable Cognito's ",e("code",{children:"AuthProvider"})," in ",e("code",{children:"/src/App.js"}),"."]}),e(t,{children:`import { AuthProvider } from "./contexts/CognitoContext";
        
function App() {
  return (
    <AuthProvider>
      {content}
    </AuthProvider>;
  )
}`}),e("h4",{children:"2. Enable useAuth hook"}),o("p",{className:"text-lg",children:["Enable Cognito's ",e("code",{children:"useAuth"})," hook in"," ",e("code",{children:"/src/hooks/useAuth.js"}),"."]}),e(t,{children:`import { AuthContext } from "../contexts/CognitoContext";
        
const useAuth = () => {
  return useContext(AuthContext);
};`})]}),h=()=>o("div",{className:"mb-5",children:[e("h3",{children:"How to use"}),e("p",{className:"text-lg",children:"Learn how to use Cognito authentication. There are multiple examples included, including sign in, sign up and sign out."}),e("h4",{children:"Retrieve user info"}),e(t,{children:`import useAuth from '../hooks/useAuth';

const App = () => {
  const { displayName } = useAuth();

  return (
    <span>
      {user.displayName}
    </span>
  );
};`}),e("h4",{children:"Execute actions"}),e(t,{children:`import useAuth from '../hooks/useAuth';

const App = () => {
  const { signIn } = useAuth();

  return (
    <button onClick={() => signIn()}>
      Sign in
    </button>
  );
};`})]}),b=()=>o(c.Fragment,{children:[e(n,{title:"Cognito"}),e(i,{fluid:!0,className:"p-0",children:e(s,{children:o(r,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"Cognito"}),e("hr",{className:"my-4"}),e(a,{}),e(l,{}),e(h,{})]})})})]});export{b as default};
