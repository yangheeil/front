import{c as f,h as d}from"./render.3c524ffa.js";import{e as s,f as t,c,h as g,j as h,D as p,g as y,$ as x,I as m,J as v,K as C,N as _}from"./index.448c300a.js";var $=f({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:o}){const{proxy:{$q:r}}=y(),e=s(h,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(s(p,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const i=c(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:r.screen.height;return n.styleFn(a,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":r.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":r.screen.height-a+"px"}}),l=c(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>g("main",{class:l.value,style:i.value},d(o.default))}});const P={};function Q(n,o){return m(),v($,{class:"flex flex-center"},{default:C(()=>[_(" \uAC8C\uC2DC\uD310\uB4E4 \uBCF4\uC5EC\uC8FC\uAE30 ")]),_:1})}var H=x(P,[["render",Q]]);export{H as default};