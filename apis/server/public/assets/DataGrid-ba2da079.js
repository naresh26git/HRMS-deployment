import{R as r,b as d,j as s,B as x,l as a,r as A,F as L,f as R,m as T,n as B}from"./index-06dc0186.js";import{C as N}from"./Checkbox-ee961553.js";const I=r.createContext(null),j=()=>{const e=r.useContext(I);if(!e)throw new Error("MenuContext is only accessible to the child components of the Menu component");return{props:e}},h=e=>d(I.Provider,{value:e,children:[e.trigger,e.dropdown]}),z="btn dropdown-toggle",O=e=>`${z} ${e.className}`,F=e=>{const t={...e};return s(x,{...t,type:"button",className:O(e),"data-bs-toggle":"dropdown","aria-expanded":"false",tabIndex:0})},W="dropdown-menu",_=e=>`${W} ${e.className}`,G=e=>{const t=j(),o={...e};return s(a,{as:"ul",...o,className:_(e),children:t.props.options.map(n=>A.createElement(J,{...n,key:n.id}))})},H="text-nowrap",V={active:"active"},q={a:"dropdown-item",button:"dropdown-item",h6:"dropdown-header",hr:"dropdown-divider"},v=e=>`${H} ${q[e.as||"a"]} ${V[e.status]} ${e.className}`,J=e=>{const t={...e};delete t.icon,delete t.label;const o=e.as||"a";return s(a,{as:"li",children:e.as==="hr"?s(o,{...t,className:v(e)}):d(o,{...t,className:v(e),href:"#",children:[e.icon?s("span",{style:{marginRight:16},children:e.icon}):null,s("span",{children:e.label})]})})};h.Trigger=F;h.Dropdown=G;const K=(e,t)=>{switch(t.type){case"loading":return{...e,isLoading:!0};case"error":return{...t.payload,isLoading:!1,totalCount:0,items:[]};case"success":return{...t.payload,isLoading:!1};default:return{...e}}},D=e=>(e.page+1)*e.limit>=e.totalCount,M=e=>e.page*e.limit<=0,Q=(e,t)=>{switch(t.type){case"next":return D(e)?{...e}:{...e,page:e.page+1};case"previous":return M(e)?{...e}:{...e,page:e.page-1};case"update":return{...t.payload};default:return{...e}}},b=(e,t)=>{switch(e.size){case 0:return;case t:return"all";default:return e}},U=(e,t)=>{switch(t.type){case"none":return;case"item":{if(!e)return new Set([t.payload.uid]);if(e==="all"){const n=new Set([...t.payload.items.map(l=>l.uid).filter(l=>l!==t.payload.uid)]);return b(n,t.payload.items.length)}if(!e.has(t.payload.uid)){const n=new Set([...e,t.payload.uid]);return b(n,t.payload.items.length)}const o=new Set([...e].filter(n=>n!==t.payload.uid));return b(o,t.payload.items.length)}case"all":return"all";default:return e?e==="all"?"all":{...e}:void 0}},X=(e,t)=>{switch(t.type){case"sort":return{...t.payload};default:return e?{...e}:void 0}},k=r.createContext(null),p=()=>{const e=r.useContext(k);if(!e)throw new Error("Could not find the AsyncListContext. Make sure you have a AsyncListContext.Provider defined above the current component.");return e};let m=!0;const Y={totalCount:0,items:[],isLoading:!1},Z={totalCount:0,page:0,limit:5},ye=({load:e,defaultListState:t=Y,defaultPaginationState:o=Z,...n})=>{const[l,f]=r.useReducer(K,t),[i,g]=r.useReducer(Q,o),[$,C]=r.useReducer(U,void 0),[c,P]=r.useReducer(X,void 0),S={states:{listState:l,paginationState:i,selectionState:$,sortState:c},dispatchers:{listDispatcher:f,paginationDispatcher:g,selectionDispatcher:C,sortDispatcher:P},...n},y=r.useCallback(async()=>{f({type:"loading"});const u=await e(S);u&&"error"in u&&f({type:"error",payload:u}),u&&"totalCount"in u&&"items"in u&&f({type:"success",payload:u})},[c==null?void 0:c.sortBy,c==null?void 0:c.sortOrder,i.page,i.limit]);return r.useEffect(()=>{m||C({type:"none"})},[c,i]),r.useEffect(()=>{m||g({type:"update",payload:{...i,page:0}})},[c]),r.useEffect(()=>{m||g({type:"update",payload:{...i,totalCount:l.totalCount}})},[l.totalCount]),r.useEffect(()=>{m||y()},[i.page,i.limit]),r.useEffect(()=>{m||i.page===0&&y()},[c==null?void 0:c.sortBy,c==null?void 0:c.sortOrder]),r.useEffect(()=>{m&&(m=!1,y())},[]),S},be=e=>(r.useEffect(()=>{e.onSelection&&e.onSelection(e.states.selectionState)},[e.states.selectionState]),s(k.Provider,{value:e,children:s(ee,{})})),ee=()=>{const t={...p()};return delete t.states,delete t.dispatchers,delete t.allowSelection,delete t.columns,delete t.defaultSelection,delete t.onRowClick,delete t.onSelection,s(a,{as:"div",className:"overflow-auto",children:d(a,{as:"table",className:"table table-striped table-hover mb-0",...t,children:[s(ne,{}),s(re,{}),s(ue,{})]})})},te=()=>{const e=r.useRef(null),t=p(),o=t.states.selectionState==="all",n=t.states.selectionState===void 0;return r.useEffect(()=>{if(e.current&&(o||n)){e.current.indeterminateOff();return}if(e.current){e.current.indeterminateOn();return}},[t.states.selectionState]),t.allowSelection?s(a,{as:"th",scope:"col",style:{maxWidth:"fit-content"},children:s(N,{ref:e,name:"selectAllRows",checked:o,onClick:()=>o?t.dispatchers.selectionDispatcher({type:"none"}):t.dispatchers.selectionDispatcher({type:"all"})})}):null},se=({label:e,sortOrder:t})=>d(a,{as:"span",className:"text-nowrap",children:[e," ",t==="asc"?"↑":t==="desc"?"↓":""]}),ne=()=>{const e=p(),{columns:t}=e;return s(a,{as:"thead",children:d(a,{as:"tr",tabIndex:0,children:[s(te,{}),t.map(({id:o,label:n,options:l,sortOrder:f})=>s(a,{as:"th",scope:"col",tabIndex:0,children:l!=null&&l.length?s(L,{children:d(a,{as:"div",className:"d-flex gap-2 justify-content-between align-items-end",children:[se({label:n,sortOrder:f}),s(h,{dropdown:s(h.Dropdown,{}),trigger:s(h.Trigger,{size:"sm"}),options:l,name:n})]})}):s(a,{as:"div",className:"d-flex gap-2 justify-content-between align-items-end",children:n})},o))]})})},E=(e,t)=>e instanceof Set&&e.has(t),oe=({uid:e})=>{const t=p(),o=w(t.states.selectionState),n=E(t.states.selectionState,e);return t.allowSelection?s(a,{as:"td",scope:"row",style:{maxWidth:"fit-content"},children:s(N,{name:"selectRow",checked:o||n,style:{marginRight:8},onClick:()=>{t.dispatchers.selectionDispatcher({type:"item",payload:{items:t.states.listState.items,uid:e}})}})}):null},ae=(e,t)=>{const o=w(e.states.selectionState),n=E(e.states.selectionState,t);return`${o||n?"table-info":""}`},re=()=>{const e=p();return s(a,{as:"tbody",children:e.states.listState.items.map((t,o)=>d(a,{as:"tr",className:ae(e,t.uid),tabIndex:0,onClick:()=>{var n;return(n=e.onRowClick)==null?void 0:n.call(e,t)},children:[s(oe,{uid:t.uid}),e.columns.map(n=>s(a,{as:"td",scope:!e.allowSelection&&o===0?"row":"",tabIndex:0,children:n.renderCell?n.renderCell(t):t[n.key]},n.id))]},t.uid))})},w=e=>e==="all",le=e=>e===void 0,ce=(e,t)=>w(e)&&t>1?!0:e instanceof Set&&e.size>1,ie=e=>{const t=le(e.states.selectionState),o=w(e.states.selectionState);return t?"":`${o?e.states.listState.items.length:e.states.selectionState.size} row${ce(e.states.selectionState,e.states.listState.items.length)?"s":""} selected`},de=e=>e.columns.length+(e.allowSelection?1:0),ue=()=>{const e=p();return s(a,{as:"tfoot",children:s(a,{as:"tr",tabIndex:0,children:s(a,{as:"td",colSpan:de(e),scope:"row",tabIndex:0,className:"border-bottom-0",children:s(he,{title:ie(e)})})})})},me=e=>e.page*e.limit+1,pe=e=>Math.min(e.totalCount,e.page*e.limit+e.limit),fe=e=>{const t=me(e),o=pe(e);return`${t} - ${o} of ${e.totalCount}`},he=({title:e})=>{const t=p(),o=fe(t.states.paginationState),n=M(t.states.paginationState),l=D(t.states.paginationState);return d(a,{as:"div",className:`d-flex gap-2 ${e?"justify-content-between":"justify-content-end"} align-items-center`,children:[e,d(a,{as:"div",className:"d-flex gap-2 align-items-center",children:[o,s(x,{disabled:n,onClick:n?void 0:()=>{t.dispatchers.paginationDispatcher({type:"previous"})},tabIndex:0,size:"sm",children:s(R,{icon:T})}),s(x,{disabled:l,onClick:l?void 0:()=>{t.dispatchers.paginationDispatcher({type:"next"})},tabIndex:0,size:"sm",children:s(R,{icon:B})})]})]})};export{be as D,ye as u};
