import{u as l,j as e,F as o,b as n,S as i,d as m,T as c,c as d,h as u}from"./index-06dc0186.js";import{u as y,D as p}from"./DataGrid-ba2da079.js";import{C as h}from"./CreateUserDialog-c5d0ecdf.js";import{P as r}from"./PageHeader-66f595bc.js";import"./Checkbox-ee961553.js";const E=()=>{const t=l(),s=y({load:async()=>{try{const a=await d.user.getMany.query();return{totalCount:a.length,items:a}}catch(a){return u(a,t),{error:new Error("Something went wrong")}}}});return e(o,{children:n(i,{gap:"3",children:[e(r,{title:e(r.Title,{children:"Employees"}),actions:e(h,{})}),e(m,{children:e(p,{...s,columns:[{id:"1",key:"name",label:"Name"},{id:"2",key:"username",label:"Username"},{id:"3",key:"",label:"Role",renderCell:a=>e(c,{as:"span",transform:"capitalize",children:a.role.name})},{id:"4",key:"email",label:"Email"},{id:"5",key:"mobile",label:"Mobile"}]})})]})})};export{E as EmployeesPage,E as default};
