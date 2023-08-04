import{b as n,F as b,j as e,L as p,G as r,S as i,T as l,d as y}from"./index-72af6e03.js";import{D as t}from"./PageHeader-f1fba51d.js";const R=o=>{var c,d,s,h;const a={id:`payroll-details${o.payRollDetails.id}`,labelId:`payroll-details-label${o.payRollDetails.id}`};return n(b,{children:[e(t.Trigger,{...a,color:"primary",className:"border-0",children:e(p,{children:"Payslip"})}),n(t,{...a,children:[e(t.Header,{title:"",className:"border-0"}),n(t.Body,{children:[n(r.Row,{children:[e(r.Col,{cols:"4",children:n(i,{orientation:"horizontal",children:[e(l,{color:"secondary",children:"Emp Code: "}),e(l,{fontSize:"6",children:o.payRollDetails.user.id})]})}),e(r.Col,{cols:"4",children:n(i,{orientation:"horizontal",children:[e(l,{color:"secondary",children:"Name: "}),n(l,{fontSize:"6",children:[(c=o.payRollDetails.user.personalInfo)==null?void 0:c.firstName," ",(d=o.payRollDetails.user.personalInfo)==null?void 0:d.lastName]})]})}),e(r.Col,{cols:"4"}),e(r.Col,{cols:"5",children:n(i,{orientation:"horizontal",children:[e(l,{color:"secondary",children:"Department: "}),e(l,{children:(s=o.payRollDetails.user.personalInfo)==null?void 0:s.department.name})]})}),e(r.Col,{cols:"12",children:n(i,{orientation:"horizontal",children:[e(l,{color:"secondary",children:"Designation: "}),e(l,{children:(h=o.payRollDetails.user.personalInfo)==null?void 0:h.designation.name})]})})]}),e(y,{className:"border-0",children:e(y.Body,{children:n(i,{gap:"3",children:[e("div",{className:"border-bottom"}),n(r.Row,{children:[e(r.Col,{cols:"7",children:n(i,{gap:"3",children:[e(l,{color:"primary",fontWeight:"bold",children:"Earning"}),n(i,{justifyContent:"between",orientation:"horizontal",children:[e(l,{fontWeight:"bold",children:"Basic"}),e(l,{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"INR"}).format(Number(o.payRollDetails.paySlipComponents[0].amount))})]}),n(i,{justifyContent:"between",orientation:"horizontal",children:[e(l,{fontWeight:"bold",children:"HRA"}),e(l,{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"INR"}).format(Number(o.payRollDetails.paySlipComponents[1].amount))})]})]})}),e(r.Col,{cols:"5",children:n(i,{gap:"3",children:[e(l,{color:"primary",fontWeight:"bold",children:"Deductions"}),n(i,{justifyContent:"between",orientation:"horizontal",children:[e(l,{fontWeight:"bold",children:"Deductions"}),e(l,{children:new Intl.NumberFormat("en-US",{style:"currency",currency:"INR",signDisplay:"never"}).format(Number(o.payRollDetails.paySlipComponents[2].amount))})]})]})})]}),n(r.Row,{children:[e(r.Col,{cols:"7",children:n(i,{justifyContent:"between",orientation:"horizontal",children:[e(l,{fontWeight:"bold",children:"Total"}),n(l,{children:[" ",new Intl.NumberFormat("en-US",{style:"currency",currency:"INR",signDisplay:"never"}).format(parseInt(o.payRollDetails.paySlipComponents[0].amount)+parseInt(o.payRollDetails.paySlipComponents[1].amount))]})]})}),e(r.Col,{cols:"5",children:n(i,{justifyContent:"between",orientation:"horizontal",children:[e(l,{fontWeight:"bold",children:"Total"}),n(l,{children:[" ",new Intl.NumberFormat("en-US",{style:"currency",currency:"INR",signDisplay:"never"}).format(Number(o.payRollDetails.paySlipComponents[2].amount))]})]})})]}),e("div",{className:"border-bottom"}),e(r.Row,{children:e(r.Col,{cols:"7",children:n(i,{justifyContent:"between",orientation:"horizontal",children:[e(l,{fontWeight:"bold",color:"primary",children:"Net Pay"}),n(l,{children:[" ",new Intl.NumberFormat("en-US",{style:"currency",currency:"INR"}).format(Number(o.payRollDetails.paySlipComponents.reduce((m,u)=>m+Number(u.amount),0)))]})]})})})]})})})]})]})]})};export{R as P};
