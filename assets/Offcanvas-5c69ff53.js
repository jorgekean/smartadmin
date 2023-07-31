import{b as a,j as e,W as u,C as v,R as g,c as r,d as l,o as d,aN as n,K as h}from"./main-2dc2308b.js";import{R as b,r as i}from"./chartjs-8bcccd15.js";import"./googlemaps-1f79ff89.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";/* empty css              */const y=()=>{const[t,c]=i.useState(!1),o=()=>c(!1),s=()=>c(!0);return a(l,{children:[a(l.Header,{children:[e(l.Title,{children:"Offcanvas"}),e("h6",{className:"card-subtitle text-muted",children:"Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes and our JavaScript plugin."})]}),a(l.Body,{className:"text-center",children:[e(d,{variant:"primary",onClick:s,children:"Toggle offcanvas"}),a(n,{show:t,onHide:o,children:[e(n.Header,{closeButton:!0,children:e(n.Title,{children:"Offcanvas"})}),e(n.Body,{children:"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."})]})]})]})},k=({name:t,...c})=>{const[o,s]=i.useState(!1);return a(h,{children:[e(d,{variant:"primary",onClick:()=>s(!0),className:"me-2",children:t}),a(n,{show:o,onHide:()=>s(!1),...c,children:[e(n.Header,{closeButton:!0,children:e(n.Title,{children:"Offcanvas"})}),e(n.Body,{children:"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."})]})]})},S=()=>a(l,{children:[a(l.Header,{children:[e(l.Title,{children:"Offcanvas placement"}),a("h6",{className:"card-subtitle text-muted",children:["There’s no default placement for offcanvas components, so you must set the ",e("code",{children:"placement"})," parameter."]})]}),e(l.Body,{className:"text-center",children:["start","end","top","bottom"].map((t,c)=>e(k,{placement:t,name:`Toggle ${t} offcanvas`},c))})]}),x=({name:t,...c})=>{const[o,s]=i.useState(!1);return a(h,{children:[e(d,{variant:"primary",onClick:()=>s(p=>!p),className:"me-2",children:t}),a(n,{show:o,onHide:()=>s(!1),...c,children:[e(n.Header,{closeButton:!0,children:e(n.Title,{children:"Offcanvas"})}),e(n.Body,{children:"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."})]})]})},w=[{name:"Enable backdrop (default)",scroll:!1,backdrop:!0},{name:"Disable backdrop",scroll:!1,backdrop:!1},{name:"Enable body scrolling",scroll:!0,backdrop:!1},{name:"Enable both scrolling & backdrop",scroll:!0,backdrop:!0}],O=()=>a(l,{children:[a(l.Header,{children:[e(l.Title,{children:"Offcanvas backdrop"}),a("h6",{className:"card-subtitle text-muted",children:["Scrolling the ",e("code",{children:"<body>"})," element is disabled when an offcanvas and its backdrop are visible. Use the ",e("code",{children:"scroll"})," ","parameter to toggle ",e("code",{children:"<body>"})," scrolling and"," ",e("code",{children:"backdrop"})," parameter to toggle the backdrop."]})]}),e(l.Body,{className:"text-center",children:w.map((t,c)=>e(x,{...t},c))})]}),E=()=>a(b.Fragment,{children:[e(u,{title:"Offcanvas"}),a(v,{fluid:!0,className:"p-0",children:[e("h1",{className:"h3 mb-3",children:"Offcanvas"}),a(g,{children:[e(r,{lg:"6",children:e(y,{})}),e(r,{lg:"6",children:e(S,{})}),e(r,{lg:"6",children:e(O,{})})]})]})]});export{E as default};
