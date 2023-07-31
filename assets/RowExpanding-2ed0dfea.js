import{j as i,b as d,W as j,C as P,d as u}from"./main-2dc2308b.js";import{r as O,R as l}from"./chartjs-8bcccd15.js";import{t as C,a as T,r as x}from"./data-fad8643b.js";import{o as s}from"./googlemaps-1f79ff89.js";import{T as R}from"./Table-0af4cab4.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";/* empty css              */function m(){return m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)}function k(e,a){if(e==null)return{};var t=z(e,a),r,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function z(e,a){if(e==null)return{};var t={},r=Object.keys(e),n,o;for(o=0;o<r.length;o++)n=r[o],!(a.indexOf(n)>=0)&&(t[n]=e[n]);return t}var g=O.forwardRef(function(e,a){var t=e.color,r=t===void 0?"currentColor":t,n=e.size,o=n===void 0?24:n,p=k(e,["color","size"]);return l.createElement("svg",m({ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),l.createElement("circle",{cx:"12",cy:"12",r:"10"}),l.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))});g.propTypes={color:s.string,size:s.oneOfType([s.string,s.number])};g.displayName="MinusCircle";const v=g;function h(){return h=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}function $(e,a){if(e==null)return{};var t=N(e,a),r,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function N(e,a){if(e==null)return{};var t={},r=Object.keys(e),n,o;for(o=0;o<r.length;o++)n=r[o],!(a.indexOf(n)>=0)&&(t[n]=e[n]);return t}var b=O.forwardRef(function(e,a){var t=e.color,r=t===void 0?"currentColor":t,n=e.size,o=n===void 0?24:n,p=$(e,["color","size"]);return l.createElement("svg",h({ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),l.createElement("circle",{cx:"12",cy:"12",r:"10"}),l.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),l.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))});b.propTypes={color:s.string,size:s.oneOfType([s.string,s.number])};b.displayName="PlusCircle";const w=b,L=e=>{const{columns:a,data:t}=e,{getTableProps:r,getTableBodyProps:n,headerGroups:o,rows:p,prepareRow:E}=x.useTable({columns:a,data:t},x.useExpanded);return d(u,{children:[d(u.Header,{children:[i(u.Title,{children:"Row Expanding"}),i("h6",{className:"card-subtitle text-muted",children:"Expandable rows by react-table"})]}),i(u.Body,{children:d(R,{striped:!0,bordered:!0,...r(),children:[i("thead",{children:o.map(c=>i("tr",{...c.getHeaderGroupProps(),children:c.headers.map(f=>i("th",{...f.getHeaderProps(),children:f.render("Header")}))}))}),i("tbody",{...n(),children:p.map((c,f)=>(E(c),i("tr",{...c.getRowProps(),children:c.cells.map(y=>i("td",{...y.getCellProps(),children:y.render("Cell")}))})))})]})})]})},W=[{id:"expander",Header:({getToggleAllRowsExpandedProps:e,isAllRowsExpanded:a})=>i("span",{...e(),children:a?i(v,{className:"feather"}):i(w,{className:"feather"})}),Cell:({row:e})=>e.canExpand?i("span",{...e.getToggleRowExpandedProps({style:{paddingLeft:`${e.depth*2}rem`}}),children:e.isExpanded?i(v,{className:"feather"}):i(w,{className:"feather"})}):null},...C],G=()=>d(l.Fragment,{children:[i(j,{title:"Row Expanding"}),d(P,{fluid:!0,className:"p-0",children:[i("h1",{className:"h3 mb-3",children:"Row Expanding"}),i(L,{columns:W,data:T.slice(0,10)})]})]});export{G as default};
