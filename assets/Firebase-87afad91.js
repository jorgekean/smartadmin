import{b as t,j as e,W as i,C as s,R as o,c as r}from"./main-3b59557c.js";import{R as a}from"./chartjs-8bcccd15.js";import{C as n}from"./Code-57d0620b.js";import"./googlemaps-1f79ff89.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";/* empty css              */import"./toConsumableArray-876078cf.js";const c=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),e("p",{className:"text-lg",children:"Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more."})]}),l=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Quick start"}),e("p",{className:"text-lg",children:"Follow these steps if you want to enable Firebase authentication in your application."}),e("h4",{children:"1. Enable AuthProvider"}),t("p",{className:"text-lg",children:["Enable Firebase's ",e("code",{children:"AuthProvider"})," in ",e("code",{children:"/src/App.js"}),"."]}),e(n,{children:`import { AuthProvider } from "./contexts/FirebaseContext";
        
function App() {
  return (
    <AuthProvider>
      {content}
    </AuthProvider>;
  )
}`}),e("h4",{children:"2. Enable useAuth hook"}),t("p",{className:"text-lg",children:["Enable Firebase's ",e("code",{children:"useAuth"})," hook in"," ",e("code",{children:"/src/hooks/useAuth.js"}),"."]}),e(n,{children:`import { AuthContext } from "../contexts/FirebaseContext";
        
const useAuth = () => {
  return useContext(AuthContext);
};`})]}),h=()=>t("div",{className:"mb-5",children:[e("h3",{children:"How to use"}),e("p",{className:"text-lg",children:"Learn how to use Firebase authentication. There are multiple examples included, including sign in, sign up and sign out."}),e("h4",{children:"Retrieve user info"}),e(n,{children:`import useAuth from '../hooks/useAuth';

const App = () => {
  const { displayName } = useAuth();

  return (
    <span>
      {user.displayName}
    </span>
  );
};`}),e("h4",{children:"Execute actions"}),e(n,{children:`import useAuth from '../hooks/useAuth';

const App = () => {
  const { signIn, signInWithGoogle } = useAuth();

  return (
    <React.Fragment>
      <button onClick={() => signIn()}>
        Sign in
      </button>
      <button onClick={() => signInWithGoogle()}>
        Sign in with Google
      </button>
    </React.Fragment>
  );
};`})]}),F=()=>t(a.Fragment,{children:[e(i,{title:"Firebase"}),e(s,{fluid:!0,className:"p-0",children:e(o,{children:t(r,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"Firebase"}),e("hr",{className:"my-4"}),e(c,{}),e(l,{}),e(h,{})]})})})]});export{F as default};
