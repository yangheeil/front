import{b as d,Q as p}from"./QBtn.14378673.js";import{Q as i}from"./QInput.38e1f8e2.js";import{Q as c}from"./QSeparator.4077b79e.js";import{Q as f}from"./QPage.51f2a415.js";import{_,a as y,b as x}from"./kakaotalk-svg.f557cd76.js";import{r as V,L as v,E as g,F as w,G as a,Q as o,H as t,J as r}from"./index.73a28f89.js";import"./render.c7f7b015.js";import"./use-form.cb6acc90.js";const b={style:{"max-width":"1023px"},class:"q-gutter-y-md column"},Q=o("div",{class:"text-h5 text-weight-bold"},"WithJK\uC5D0 \uC624\uC2E0\uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4.",-1),q=o("div",{class:"text-subtilte1"}," WithJK\uB294 \uC624\uC9D5\uC5B4 \uAF34\uB69C\uAE30 \uB300\uAD6C\uBA85\uD0DC \uAC70\uBD81\uC774 \uC785\uB2C8\uB2E4. ",-1),h=o("div",{class:"line"},"SNS \uD68C\uC6D0\uAC00\uC785",-1),k={class:"row q-gutter-x-md"},P=o("img",{src:_,style:{width:"24px"}},null,-1),U=o("img",{src:y,style:{width:"24px"}},null,-1),B=o("img",{src:x,style:{width:"24px"}},null,-1),C=o("div",{class:"line"},"\uD68C\uC6D0\uAC00\uC785\uC5D0 \uD544\uC694\uD55C \uAE30\uBCF8\uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",-1),N={class:"row flex flex-center"},G={__name:"Signup",setup(S){const n=V(""),m=()=>{this.$axios.post("/sign_up",{userId:n}).then(e=>{console.log(e)})};return(e,l)=>{const u=v("router-link");return g(),w(f,{class:"text-center flex flex-center q-pa-xl"},{default:a(()=>[o("div",b,[Q,q,h,o("div",k,[t(d,{class:"col q-py-sm q-px-sm target"},{default:a(()=>[P]),_:1}),t(d,{class:"col q-py-sm q-px-sm target"},{default:a(()=>[U]),_:1}),t(d,{class:"col q-py-sm q-px-sm target"},{default:a(()=>[B]),_:1})]),C,t(i,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=s=>n.value=s),outlined:"",type:"text",label:"\uC544\uC774\uB514"},null,8,["modelValue"]),t(i,{modelValue:e.password,"onUpdate:modelValue":l[2]||(l[2]=s=>e.password=s),outlined:"",type:e.isPwd?"password":"text",label:"\uBE44\uBE4C\uBC88\uD638"},{append:a(()=>[t(p,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[1]||(l[1]=s=>e.isPwd=!e.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type"]),t(i,{modelValue:e.email,"onUpdate:modelValue":l[3]||(l[3]=s=>e.email=s),outlined:"",type:"email",label:"\uC774\uBA54\uC77C"},null,8,["modelValue"]),t(i,{modelValue:e.username,"onUpdate:modelValue":l[4]||(l[4]=s=>e.username=s),outlined:"",type:"text",label:"\uC2E4\uBA85"},null,8,["modelValue"]),t(i,{modelValue:e.usernickname,"onUpdate:modelValue":l[5]||(l[5]=s=>e.usernickname=s),outlined:"",type:"text",label:"\uB2C9\uB124\uC784"},null,8,["modelValue"]),o("div",N,[t(u,{to:"#",style:{"text-decoration-line":"none"},class:"col"},{default:a(()=>[r("\uC11C\uBE44\uC2A4\uC774\uC6A9\uC57D\uAD00")]),_:1}),t(c,{vertical:"",inset:"",size:"2px"}),t(u,{to:"#",style:{"text-decoration-line":"none"},class:"col"},{default:a(()=>[r("\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68")]),_:1})]),t(d,{color:"primary",label:"\uD68C\uC6D0\uAC00\uC785",class:"glossy",disable:n.value,onClick:l[6]||(l[6]=s=>m())},null,8,["disable"]),o("div",null,[r(" \uC774\uBBF8 \uD68C\uC6D0\uC774\uC2E0\uAC00\uC694? "),t(u,{to:"/login"},{default:a(()=>[r("\uB85C\uADF8\uC778")]),_:1})])])]),_:1})}}};export{G as default};
