import{Q as k,D as S}from"./Dashboard.1549ac4a.js";import{b as r,Q as h}from"./QBtn.2eb04cc3.js";import{Q as V,a as w}from"./QSelect.86c9b910.js";import{m as B,Q as I,l as N}from"./QItem.5514b1e5.js";import{u as C,Q as b}from"./use-quasar.bee57809.js";import{Q as L}from"./QSeparator.91faa7af.js";import{Q as D}from"./QInput.02edcf5a.js";import{Q as A}from"./QPage.fd2b715d.js";import{r as m,F as l,G as F,H as t,R as a,I as e,a7 as y,N as i,O as n,Q as f,P as p,J as _,K as M,L as P}from"./index.3ecbbb62.js";import"./render.f059d1ce.js";import"./use-form.c24191b0.js";const T=a("div",{class:"text-subtitle1 text-weight-bold text-left"},"Q&A",-1),U=a("div",{class:"text-caption text-left"},"\uC9C8\uBB38 \uBC0F \uB2F5\uBCC0",-1),$={key:0,class:"row q-gutter-y-sm text-grey-6 justify-between"},j={class:"q-gutter-x-sm"},z={key:1,class:"text-grey-6 q-gutter-y-xs"},E={class:"q-gutter-x-sm"},G={class:"q-gutter-x-sm"},H={key:2},oe={__name:"Questions",setup(J){const Q=["\uCD5C\uC2E0\uC21C","\uCD94\uCC9C\uC21C","\uB2F5\uBCC0\uC21C","\uC870\uD68C\uC21C"],g=m("\uCD5C\uC2E0\uC21C"),x=["\uAE30\uC220","\uCEE4\uB9AC\uC5B4","\uAE30\uD0C0","\uC804\uCCB4"],o=C();console.log("$q.screen",o.screen);const v=m(""),d=m(!1),q=()=>{d.value=!d.value};return(K,c)=>(l(),F(A,{class:"q-pa-md"},{default:t(()=>[a("div",{style:{"max-width":"723px"},class:y(["column q-mx-auto",i(o).screen.xs?"q-gutter-y-sm":"q-gutter-y-md"])},[e(k,{rounded:"",class:y(i(o).dark.isActive?"target":"bg-grey-4")},{default:t(()=>[T,U]),_:1},8,["class"]),i(o).screen.xs?_("",!0):(l(),n("div",$,[a("div",null,[e(r,{flat:"",icon:"edit",class:"bg-primary",color:"white",label:"\uC9C8\uBB38\uD558\uAE30",to:"/questions/new"})]),a("div",j,[(l(),n(f,null,p(x,(s,u)=>e(r,{key:u,flat:"",label:s},null,8,["label"])),64))]),a("div",null,[e(V,{outlined:"",modelValue:g.value,"onUpdate:modelValue":c[0]||(c[0]=s=>g.value=s),options:Q,dense:"","options-dense":""},{prepend:t(()=>[e(h,{name:"sort"})]),_:1},8,["modelValue"])])])),i(o).screen.xs?(l(),n("div",z,[a("div",E,[(l(),n(f,null,p(x,(s,u)=>e(r,{key:u,flat:"",label:s},null,8,["label"])),64))]),a("div",G,[e(r,{flat:"",icon:"edit",class:"bg-primary float-left",color:"white",label:"\uC9C8\uBB38\uD558\uAE30",to:"/questions/new"}),e(r,{outline:"",icon:"sort",class:"float-right"},{default:t(()=>[e(w,null,{default:t(()=>[e(b,null,{default:t(()=>[(l(),n(f,null,p(Q,(s,u)=>e(B,{clickable:"",key:u},{default:t(()=>[e(I,null,{default:t(()=>[e(N,null,{default:t(()=>[M(P(s),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),e(r,{outline:"",icon:"search",class:"float-right",onClick:q})])])):_("",!0),e(L),d.value||!i(o).screen.xs?(l(),n("div",H,[e(D,{rounded:"",outlined:"",dense:"",modelValue:v.value,"onUpdate:modelValue":c[1]||(c[1]=s=>v.value=s),icon:"search",label:"\uAC80\uC0C9"},{prepend:t(()=>[e(h,{name:"search"})]),_:1},8,["modelValue"])])):_("",!0),a("div",null,[e(b,{separator:"",bordered:""},{default:t(()=>[e(S)]),_:1})])],2)]),_:1}))}};export{oe as default};