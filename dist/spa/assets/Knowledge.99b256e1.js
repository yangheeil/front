import{Q as w,D as q}from"./Dashboard.e5ff4cae.js";import{b as r,Q as v}from"./QBtn.a6eae3b0.js";import{Q as S,a as V}from"./QSelect.799310b0.js";import{m as B,Q as I,l as N}from"./QItem.7a0026b6.js";import{u as C,Q as b}from"./use-quasar.8a8841aa.js";import{Q as L}from"./QSeparator.077cf1d0.js";import{Q as D}from"./QInput.e2c62c90.js";import{Q as T}from"./QPage.42c01990.js";import{r as m,F as l,G as F,H as t,R as a,I as e,a7 as y,N as u,O as n,Q as f,P as p,J as _,K,L as M}from"./index.ac9648ac.js";import"./render.4aca14de.js";import"./use-form.9c788c0b.js";const P=a("div",{class:"text-subtitle1 text-weight-bold text-left"},"\uC9C0\uC2DD",-1),U=a("div",{class:"text-caption text-left"},"\uC9C0\uC2DD\uACFC \uC0C8\uB85C\uC6B4 \uC544\uC774\uB514\uC5B4",-1),$={key:0,class:"row q-gutter-y-sm text-grey-6 justify-between"},j={class:"q-gutter-x-sm"},z={key:1,class:"text-grey-6 q-gutter-y-xs"},A={class:"q-gutter-x-sm"},E={class:"q-gutter-x-sm"},G={key:2},oe={__name:"Knowledge",setup(H){const g=["\uCD5C\uC2E0\uC21C","\uCD94\uCC9C\uC21C","\uB2F5\uBCC0\uC21C","\uC870\uD68C\uC21C"],x=m("\uCD5C\uC2E0\uC21C"),Q=["Tech","\uD301","\uCE7C\uB7FC","\uC804\uCCB4"],o=C();console.log("$q.screen",o.screen);const h=m(""),i=m(!1),k=()=>{i.value=!i.value};return(J,d)=>(l(),F(T,{class:"q-pa-md"},{default:t(()=>[a("div",{style:{"max-width":"723px"},class:y(["column q-mx-auto",u(o).screen.xs?"q-gutter-y-sm":"q-gutter-y-md"])},[e(w,{rounded:"",class:y(u(o).dark.isActive?"target":"bg-grey-4")},{default:t(()=>[P,U]),_:1},8,["class"]),u(o).screen.xs?_("",!0):(l(),n("div",$,[a("div",null,[e(r,{flat:"",icon:"edit",class:"bg-primary",color:"white",label:"\uC791\uC131\uD558\uAE30",to:"/knowledge/new"})]),a("div",j,[(l(),n(f,null,p(Q,(s,c)=>e(r,{key:c,flat:"",label:s},null,8,["label"])),64))]),a("div",null,[e(S,{outlined:"",modelValue:x.value,"onUpdate:modelValue":d[0]||(d[0]=s=>x.value=s),options:g,dense:"","options-dense":""},{prepend:t(()=>[e(v,{name:"sort"})]),_:1},8,["modelValue"])])])),u(o).screen.xs?(l(),n("div",z,[a("div",A,[(l(),n(f,null,p(Q,(s,c)=>e(r,{key:c,flat:"",label:s},null,8,["label"])),64))]),a("div",E,[e(r,{flat:"",icon:"edit",class:"bg-primary float-left",color:"white",label:"\uC791\uC131\uD558\uAE30",to:"/knowledge/new"}),e(r,{outline:"",icon:"sort",class:"float-right"},{default:t(()=>[e(V,null,{default:t(()=>[e(b,null,{default:t(()=>[(l(),n(f,null,p(g,(s,c)=>e(B,{clickable:"",key:c},{default:t(()=>[e(I,null,{default:t(()=>[e(N,null,{default:t(()=>[K(M(s),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),e(r,{outline:"",icon:"search",class:"float-right",onClick:k})])])):_("",!0),e(L),i.value||!u(o).screen.xs?(l(),n("div",G,[e(D,{rounded:"",outlined:"",dense:"",modelValue:h.value,"onUpdate:modelValue":d[1]||(d[1]=s=>h.value=s),icon:"search",label:"\uAC80\uC0C9"},{prepend:t(()=>[e(v,{name:"search"})]),_:1},8,["modelValue"])])):_("",!0),a("div",null,[e(b,{separator:"",bordered:""},{default:t(()=>[e(q)]),_:1})])],2)]),_:1}))}};export{oe as default};
