import{b as r,j as e,W as o,C as t,R as a,c as n}from"./main-3b59557c.js";import{R as i}from"./chartjs-8bcccd15.js";import{C as s}from"./Code-57d0620b.js";import"./googlemaps-1f79ff89.js";import"./apexcharts-65e52e7e.js";import"./vectormaps-5a12ad1d.js";/* empty css              */import"./toConsumableArray-876078cf.js";const l=()=>r("div",{className:"mb-5",children:[e("h3",{children:"Introduction"}),r("p",{className:"text-lg",children:["A common use case for code actions is to make API calls to external services. AppStack includes"," ",e("a",{href:"https://github.com/axios/axios",target:"_blank",rel:"noreferrer noopener",children:"Axios"})," ","for making XMLHttpRequests from the browser."," ",e("a",{href:"https://github.com/ctimmerm/axios-mock-adapter#readme",target:"_blank",rel:"noreferrer noopener",children:"Axios Mock Adapter"})," ","is also included to mock those requests."," ",e("a",{href:"https://github.com/axios/axios",target:"_blank",rel:"noreferrer noopener",children:"Learn more"}),"."]})]}),c=()=>r("div",{className:"mb-5",children:[e("h3",{children:"Axios"}),e("p",{className:"text-lg",children:"Performing a GET request:"}),e(s,{children:`axios.get('/api/user?id=12345')
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`}),e("p",{className:"text-lg",children:"Performing a POST request:"}),e(s,{children:`axios.post('/api/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
});`})]}),m=()=>r("div",{className:"mb-5",children:[e("h3",{children:"Axios Mock Adapter"}),r("p",{className:"text-lg",children:["Axios adapter that allows to easily mock requests."," ",e("a",{href:"https://github.com/ctimmerm/axios-mock-adapter#readme",target:"_blank",rel:"noreferrer noopener",children:"Learn more"}),"."]}),e("p",{className:"text-lg",children:"Mocking a GET request:"}),e(s,{children:`mock.onGet("/api/user").reply((config) => {
  return [
    200,
    {
      users: [{ id: 12345, firstName: "Fred", lastName: "Flintstone" }],
    },
  ];
});`}),e("p",{className:"text-lg",children:"Mocking a POST request:"}),e(s,{children:`mock.onPost("/api/user").reply((config) => {
  const { firstName, lastName } = JSON.parse(config.data);

  if (firstName && lastName) {
    return [200, {
      id: "12345",
      firstName: "Fred",
      lastName: "Flintstone",
    };];
  }

  return [400, { message: "Looks like you didn't provide the required data." }];
});`})]}),k=()=>r(i.Fragment,{children:[e(o,{title:"API Calls"}),e(t,{fluid:!0,className:"p-0",children:e(a,{children:r(n,{lg:10,xl:8,className:"col-xxl-7 mx-auto",children:[e("h1",{children:"API Calls"}),e("hr",{className:"my-4"}),e(l,{}),e(c,{}),e(m,{})]})})})]});export{k as default};
