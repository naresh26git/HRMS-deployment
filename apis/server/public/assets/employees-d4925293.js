import{u as l,j as e,F as o,b as n,S as i,e as m,T as c,c as d,h as u}from"./index-4bbca3b0.js";import{u as p,D as y}from"./DataGrid-87243675.js";import{C as h}from"./CreateUserDialog-672d94fd.js";import{P as r}from"./PageHeader-7a080ab0.js";import"./Checkbox-ff3f9a33.js";import"./Dialog-227ac254.js";const w=()=>{const t=l(),s=p({load:async()=>{try{const a=await d.user.getMany.query();return{totalCount:a.length,items:a}}catch(a){return u(a,t),{error:new Error("Something went wrong")}}}});return e(o,{children:n(i,{gap:"3",children:[e(r,{title:e(r.Title,{children:"Employees"}),actions:e(h,{})}),e(m,{children:e(y,{...s,columns:[{id:"1",key:"name",label:"Name"},{id:"2",key:"username",label:"Username"},{id:"3",key:"",label:"Role",renderCell:a=>e(c,{as:"span",transform:"capitalize",children:a.role.name})},{id:"4",key:"email",label:"Email"},{id:"5",key:"mobile",label:"Mobile"}]})})]})})};export{w as EmployeesPage,w as default};
