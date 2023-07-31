import{bn as c,bo as h,bp as u,b as t,j as e,W as m,C as p,R as f,c as x,bq as g,d as i,o,br as b,bs as v,bt as k,bu as w,bv as y}from"./main-3b59557c.js";import{r as N,R}from"./chartjs-8bcccd15.js";import{C as n}from"./Code-57d0620b.js";import"./googlemaps-1f79ff89.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";/* empty css              */import"./toConsumableArray-876078cf.js";function l(s=c){const r=s===c?h:()=>N.useContext(s);return function(){const{store:a}=r();return a}}const C=l();function S(s=c){const r=s===c?C:l(s);return function(){return r().dispatch}}const A=S(),T=u,D=()=>A(),j=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),t("p",{className:"text-lg",children:["Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. AppStack leverages"," ",e("a",{href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noreferrer noopener",children:"Redux Toolkit"}),", to keep the amount of boilerplate code and complexity to a minimum."]})]}),z=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Usage"}),e("p",{className:"text-lg",children:"AppStack contains the following folders/files to store any Redux related logic:"}),t("ul",{className:"text-lg",children:[t("li",{children:[e("code",{children:"src/redux/store.js"})," where reducers are combined and the store is initialized"]}),t("li",{children:[e("code",{children:"src/redux/slices/"})," where reducers are implemented"]})]})]}),I=()=>t("div",{className:"mb-5",children:[e("h4",{children:"1. Creating a new slice"}),t("p",{className:"text-lg",children:["If you want to create a new slice, pleae add a file to the"," ",e("code",{children:"/src/redux/slices/"})," folder. Quick example:"]}),e(n,{children:`import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, payload) {
      state.products = [
        {
          id: '1',
          slug: 'my-first-product',
          title: 'My first product'
        }
      ];
    }
  }
});

export const { reducer } = slice;

export default slice;

export function getProducts() {
  return async dispatch => {
    const response = await axios.get('/api/products');
    dispatch(slice.actions.setProducts(response.data.products));
  };
}`})]}),P=()=>t("div",{className:"mb-5",children:[e("h4",{children:"2. Add slice to root reducer"}),t("p",{className:"text-lg",children:["Open the ",e("code",{children:"/src/redux/store.ts"})," file and add the new slice:"]}),e(n,{children:`import productsReducer from "./slices/products";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});`})]}),_=()=>t("div",{className:"mb-5",children:[e("h4",{children:"3. Using the slice"}),e(n,{children:`import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/slices/products';

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.name}</div>
        </div>
      ))}
    </div>
  );
}`})]});function E(){const s=T(g),r=D();return e(i,{children:t(i.Body,{children:[e(i.Title,{className:"mb-0",children:"Example"}),t("div",{className:"my-3",children:[e(o,{variant:"primary",size:"sm","aria-label":"Decrement value",onClick:()=>r(b()),children:"-"}),e("div",{className:"d-inline-block mx-2",children:s}),e(o,{variant:"primary",size:"sm","aria-label":"Increment value",onClick:()=>r(v()),children:"+"})]}),t("div",{className:"my-3",children:[e(o,{variant:"primary",size:"sm",onClick:()=>r(k(1)),className:"me-2",children:"Add Amount"}),e(o,{variant:"primary",size:"sm",onClick:()=>r(w(1)),className:"me-2",children:"Add Async"}),e(o,{variant:"primary",size:"sm",onClick:()=>r(y(1)),className:"me-2",children:"Add If Odd"})]})]})})}const U=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Real-life example"}),t("p",{className:"text-lg",children:["The example below includes various methods, including"," ",e("code",{children:"createSlice"})," and ",e("code",{children:"createAsyncThunk"}),'. Any time you click the "Increment" and "Decrement buttons in the example below, the following happens:']}),t("ul",{className:"text-lg",children:[e("li",{children:"The corresponding Redux action will be dispatched to the store"}),e("li",{children:"The counter slice reducer will see the actions and update its state"}),t("li",{children:["The ",e("code",{children:"<Counter>"})," component will see the new state value from the store and re-render itself with the new data"]})]}),e(E,{})]}),B=()=>t("div",{className:"mb-5",children:[e("h3",{children:"Redux DevTools"}),e("p",{className:"text-lg",children:"Redux DevTools offers developer tools to power-up Redux development workflow or any other architecture which handles the state change (see integrations)."}),t("p",{className:"text-lg",children:["It can be used as a browser extension (for"," ",e("a",{href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd",target:"_blank",rel:"nofollow noreferrer",children:"Chrome"}),","," ",e("a",{href:"https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nnkgneoiohoecpdiaponcejilbhhikei",target:"_blank",rel:"nofollow noreferrer",children:"Edge"})," ","and"," ",e("a",{href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/",target:"_blank",rel:"nofollow noreferrer",children:"Firefox"}),"), as"," ",e("a",{href:"https://github.com/zalmoxisus/remotedev-app",target:"_blank",rel:"nofollow noreferrer",children:"a standalone app"})," ","or as"," ",e("a",{href:"https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools",target:"_blank",rel:"nofollow noreferrer",children:"a React component"})," ","integrated in the client app."]})]}),W=()=>t(R.Fragment,{children:[e(m,{title:"Redux"}),e(p,{fluid:!0,className:"p-0",children:e(f,{children:t(x,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"Redux"}),e("hr",{className:"my-4"}),e(j,{}),e(z,{}),e(I,{}),e(P,{}),e(_,{}),e(U,{}),e(B,{})]})})})]});export{W as default};
