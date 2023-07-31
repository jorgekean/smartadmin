import{b as o,j as e,W as t,C as n,R as r,c as l}from"./main-3b59557c.js";import{R as i}from"./chartjs-8bcccd15.js";import{C as a}from"./Code-57d0620b.js";import"./googlemaps-1f79ff89.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";/* empty css              */import"./toConsumableArray-876078cf.js";const c=()=>o("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),e("p",{className:"text-lg",children:"The package includes an implementation of React Router DOM, using the programmatic routing model."})]}),m=()=>o("div",{className:"mb-5",children:[e("h3",{children:"How to add routes"}),o("p",{className:"text-lg",children:["Open ",e("code",{children:"/src/routes.js"})," and add your new route to the"," ",e("code",{children:"routes"})," variable. The example below will result in the"," ",e("code",{children:"<NewPage />"})," element being called on the"," ",e("code",{children:"http://localhost:3000/pages/new"})," route."]}),e(a,{children:`import DashboardLayout from "./layouts/Dashboard";
import NewPage from "./pages/NewPage";

const routes = [
  {
    path: "pages",
    element: <DashboardLayout />,
    children: [
      {
        path: "new",
        element: <NewPage />,
      },
    ],
  },
];

export default routes;`})]}),d=()=>o("div",{className:"mb-5",children:[e("h3",{children:"How to add a link"}),e("p",{className:"text-lg",children:"Learn how to add a link to a component."}),e(a,{children:`import { Link } from "react-router-dom";

function ExampleComponent() {
  return (
    <Link to="pages/new">
      New page
    </Link>
  );
}

export default ExampleComponent;`})]}),s=()=>o("div",{className:"mb-5",children:[e("h3",{children:"How to navigate programmatically"}),o("p",{className:"text-lg",children:["The example code below includes an example on how to navigate programmatically using the ",e("code",{children:"useNavigate"})," hook."]}),e(a,{children:`import { useNavigate } from "react-router-dom";

function ExampleComponent() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/pages/new");
  };

  return (
    <form onSubmit={handleSubmit}>
      ...
    </form>
  );
}

export default ExampleComponent;
`})]}),b=()=>o(i.Fragment,{children:[e(t,{title:"Routing"}),e(n,{fluid:!0,className:"p-0",children:e(r,{children:o(l,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"Routing"}),e("hr",{className:"my-4"}),e(c,{}),e(m,{}),e(d,{}),e(s,{})]})})})]});export{b as default};
