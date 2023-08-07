import{u as D,R as c,c as v,b as l,F as f,j as e,G as o,S as k,B as b,h as N,e as T,T as w}from"./index-4bbca3b0.js";import{u as F,D as H}from"./DataGrid-87243675.js";import{D as m}from"./Dialog-227ac254.js";import{P as x}from"./PageHeader-7a080ab0.js";import"./Checkbox-ff3f9a33.js";const R=()=>{const i=D(),[y,g]=c.useState(""),[t,s]=c.useState([]),[d,u]=c.useState(),[h,I]=c.useState(""),C=async()=>{try{if(console.log({categoryId:d}),d===void 0)return;await v.helpDesk.set.mutate({tittle:y,categoryId:d,description:h})}catch(a){N(a,i),console.log(a)}},p={id:"create-helpdesk",labelId:"create-helpdesk-label"};return c.useEffect(()=>{(async()=>{const a=await v.helpDeskCategories.getMany.query();s(a);const[r]=a;r!==void 0&&u(r.id)})()},[]),l(f,{children:[e(m.Trigger,{...p,variant:"primary",children:"Add HeskDesk"}),l(m,{...p,children:[e(m.Header,{color:"primary",title:"HELP DESK"}),e(m.Body,{children:e(o,{children:e(k,{gap:"5",children:l(o.Row,{gutters:"5",children:[l(o.Col,{cols:["12","lg-6"],children:[e("label",{htmlFor:"name",children:"Tittle"}),e("input",{type:"text",className:"form-control",id:"tittle",value:y,onChange:a=>g(a.target.value)})]}),l(o.Col,{cols:["12","lg-6"],children:[e("label",{htmlFor:"username",children:"Category"}),e("div",{children:l("select",{className:"form-control",value:d,onChange:a=>u(parseInt(a.target.value)),children:[e("option",{value:void 0,children:"Select Category"}),t.map(a=>e("option",{value:a.id,children:a.name}))]})})]}),l(o.Col,{cols:["12","xl-12"],children:[e("label",{htmlFor:"description",children:"Description"}),e("div",{className:"form-floating",children:e("input",{type:"text",className:"form-control",id:"description",value:h,onChange:a=>I(a.target.value)})})]})]})})})}),e(m.Footer,{children:e("div",{style:{width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:e(b,{variant:"primary",className:"center",onClick:C,"data-bs-toggle":"modal","data-bs-target":`#${p.id}`,children:"Confirm"})})})]})]})},A=i=>{const y=D(),[g,t]=c.useState([]),[s,d]=c.useState(),[u,h]=c.useState(""),[I,C]=c.useState(""),p=i.variant==="admin"?{labelId:"update-helpdesk-status-model",id:"update-helpdesk-status-model"}:{labelId:"update-helpdesk-model",id:"update-helpdesk-model"},a=async()=>{try{if(s===void 0)return;const r={id:i.helpDeskId,remarks:u,statusId:s},S=await v.helpDesk.adminUpdate.mutate(r)}catch(r){N(r,y)}};return c.useEffect(()=>{C(i.variant)},[i.variant]),c.useEffect(()=>{(async()=>{const r=await v.helpDeskStatus.getMany.query();t(r);const[S]=r;S!==void 0&&d(S.id)})()},[]),l(f,{children:[e(m.Trigger,{...p,variant:"primary",children:i.variant==="admin"?"AddHelpDeskStatus":"Edit"}),e(m,{...p,children:l("form",{onSubmit:a,className:"was-validated",children:[e(m.Header,{title:"Add Helpdesk Status"}),e(m.Body,{children:l(k,{gap:"3",children:[l(k,{children:[e("label",{children:"Remarks"}),e("input",{type:"text",className:"form-control",placeholder:"Remarks",value:u,onChange:r=>h(r.target.value),required:!0})]}),l(k,{children:[e("label",{htmlFor:"status",children:"Status"}),e("select",{className:"form-control",value:s,onChange:r=>d(parseInt(r.target.value)),children:g.map(r=>e("option",{value:r.id,children:r.name}))})]})]})}),e(m.Footer,{children:e("div",{style:{width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:e(b,{variant:"primary",className:"center",type:"submit","data-bs-toggle":"modal","data-bs-target":`#${p.id}`,children:"Confirm"})})})]})})]})},n={uid:"1",id:"1210",date:"18/04/2023",tittle:"Work",category:"Salary Issue",description:"My last month Salary Was not Credit My Account",remarks:"pls Clear my Issue Quickly",status:"Pending"},q=[n,{...n,uid:"2"},{...n,uid:"3"},{...n,uid:"4"},{...n,uid:"5"},{...n,uid:"6"},{...n,uid:"7"},{...n,uid:"8"},{...n,uid:"9"},{...n,uid:"10"},{...n,uid:"11"},{...n,uid:"12"},{...n,uid:"13"}],G=()=>{const i=D(),y=F({load:async({states:t})=>{var s,d;try{const u={sortBy:(s=t.sortState)==null?void 0:s.sortBy,sortOrder:(d=t.sortState)==null?void 0:d.sortOrder,limit:t.paginationState.limit,page:t.paginationState.page};console.log({inputParameters:u});const h=await v.helpDesk.getMany.mutate(u);return console.log({result:h}),{totalCount:h.totalCount,items:h.items}}catch(u){return N(u,i),{error:Error("Something went wrong")}}}}),g=[{id:"1",key:"",label:"Id",renderCell:t=>e(f,{children:t.user.id})},{id:"2",key:"",label:"Date",renderCell:t=>e(f,{children:t.date?new Intl.DateTimeFormat("en-US",{year:"numeric",month:"numeric",day:"numeric"}).format(new Date(t.date)):""})},{id:"3",key:"tittle",label:"Tittle"},{id:"4",key:"category",label:"Category",renderCell:t=>e(w,{children:t.category.name})},{id:"5",key:"description",label:"Description"},{id:"6",key:"remarks",label:"Remarks"},{id:"7",key:"status",label:"Status",renderCell:t=>e(w,{transform:"capitalize",color:t.status.name==="resolved"?"success":t.status.name==="cancelled"?"danger":"warning",children:t.status.name})},{id:"8",key:"",label:"Action",renderCell:t=>{var s;return e(f,{children:e(A,{variant:((s=i.state.user)==null?void 0:s.role.name)==="admin"?"admin":"employee",helpDeskId:t.id})})}}];return l(k,{gap:"3",children:[e(x,{title:e(x.Title,{}),actions:e(R,{})}),l(o.Row,{children:[e(o.Col,{className:"py-2",cols:["12","md-2"],children:e("input",{type:"text",className:"form-control form-control-sm",placeholder:"ID"})}),e(o.Col,{className:"py-2",cols:["12","md-2"],children:e("input",{type:"text",className:"form-control form-control-sm",placeholder:"Tittle"})}),l(o.Row,{children:[e(o.Col,{className:"py-2",cols:["12","md-2"],children:e("input",{type:"text",className:"form-control form-control-sm",placeholder:"From"})}),e(o.Col,{className:"py-2",cols:["12","md-2"],children:e("input",{type:"text",className:"form-control form-control-sm",placeholder:"To"})}),e(o.Col,{className:"py-2",cols:["12","md-2"],children:e(b,{variant:"primary",className:"w-100",children:"Search"})})]})]}),e(T,{children:e(H,{...y,columns:g.filter(t=>{var s;return console.log({auth:i}),t.label!=="Action"||((s=i.state.user)==null?void 0:s.role.name)==="admin"})})})]})};export{G as HelpDeskPage,G as default,n as helpDesk,q as helpDesks};
