import{b as c,Q as f}from"./QBtn.65373c6f.js";import{Q as i}from"./QInput.8868a888.js";import{Q as y}from"./QSeparator.6fa2ae78.js";import{Q as V}from"./QPage.ef40842d.js";import{_ as b,a as g,b as w}from"./kakaotalk-svg.f557cd76.js";import{r as a,M as q,F as Q,G as k,H as o,R as s,I as l,K as v}from"./index.765361fd.js";import"./render.45ec4840.js";import"./use-form.c4c5aa3a.js";const N={style:{"max-width":"1023px"},class:"q-gutter-y-md column"},h=s("div",{class:"text-h5 text-weight-bold"},"WithJK\uC5D0 \uC624\uC2E0\uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4.",-1),I=s("div",{class:"text-subtilte1"}," WithJK\uB294 \uC624\uC9D5\uC5B4 \uAF34\uB69C\uAE30 \uB300\uAD6C\uBA85\uD0DC \uAC70\uBD81\uC774 \uC785\uB2C8\uB2E4. ",-1),U=s("div",{class:"line"},"SNS \uD68C\uC6D0\uAC00\uC785",-1),B={class:"row q-gutter-x-md"},C=s("img",{src:b,style:{width:"24px"}},null,-1),S=s("img",{src:g,style:{width:"24px"}},null,-1),K=s("img",{src:w,style:{width:"24px"}},null,-1),$=s("div",{class:"line"},"\uD68C\uC6D0\uAC00\uC785\uC5D0 \uD544\uC694\uD55C \uAE30\uBCF8\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",-1),J={class:"row flex flex-center"},j={__name:"Signup",setup(P){const u=a(""),n=a(""),d=a(""),r=a(""),m=a(""),p=a(!0);return(x,e)=>{const _=q("router-link");return Q(),k(V,{class:"text-center flex flex-center q-pa-xl"},{default:o(()=>[s("div",N,[h,I,U,s("div",B,[l(c,{class:"col q-py-sm q-px-sm target"},{default:o(()=>[C]),_:1}),l(c,{class:"col q-py-sm q-px-sm target"},{default:o(()=>[S]),_:1}),l(c,{class:"col q-py-sm q-px-sm target"},{default:o(()=>[K]),_:1})]),$,l(i,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t),outlined:"",type:"text",label:"\uC544\uC774\uB514"},null,8,["modelValue"]),l(i,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=t=>u.value=t),outlined:"",type:p.value?"password":"text",label:"\uBE44\uBE4C\uBC88\uD638"},{append:o(()=>[l(f,{name:p.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[1]||(e[1]=t=>p.value=!p.value)},null,8,["name"])]),_:1},8,["modelValue","type"]),l(i,{modelValue:r.value,"onUpdate:modelValue":e[3]||(e[3]=t=>r.value=t),outlined:"",type:"email",label:"\uC774\uBA54\uC77C"},null,8,["modelValue"]),l(i,{modelValue:d.value,"onUpdate:modelValue":e[4]||(e[4]=t=>d.value=t),outlined:"",type:"text",label:"\uC2E4\uBA85"},null,8,["modelValue"]),l(i,{modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=t=>m.value=t),outlined:"",type:"text",label:"\uB2C9\uB124\uC784"},null,8,["modelValue"]),s("div",J,[l(_,{to:"#",style:{"text-decoration-line":"none"},class:"col"},{default:o(()=>[v("\uC11C\uBE44\uC2A4\uC774\uC6A9\uC57D\uAD00")]),_:1}),l(y,{vertical:"",inset:"",size:"2px"}),l(_,{to:"#",style:{"text-decoration-line":"none"},class:"col"},{default:o(()=>[v("\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68")]),_:1})]),l(c,{color:"primary",label:"\uD68C\uC6D0\uAC00\uC785",class:"glossy",disable:u.value&&n.value&&d.value&&m.value&&r.value,onClick:e[6]||(e[6]=t=>x.$store.dispatch("signup",{password:u.value,userId:n.value,userName:d.value,email:r.value,userNickname:m.value}))},null,8,["disable"]),s("div",null,[v(" \uC774\uBBF8 \uD68C\uC6D0\uC774\uC2E0\uAC00\uC694? "),l(_,{to:"/login"},{default:o(()=>[v("\uB85C\uADF8\uC778")]),_:1})])])]),_:1})}}};export{j as default};