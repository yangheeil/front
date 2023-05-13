import{c as C,h as M,a as F}from"./render.f72ddc4f.js";import{a as K,u as j}from"./use-form.9c854d7d.js";import{c as d,h as L,g as B,a as N,U as A,w as I,o as G,d as Q,k as b,l as m,s as O,V as J,W as Z,X as ee,r as R,S as te,e as oe,Y as le}from"./index.5d24abff.js";import{v as ie,g as ne,c as $,d as re,e as se,f as ae}from"./QBtn.9e0a6a07.js";var ge=C({name:"QList",props:{...K,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const o=B(),l=j(e,o.proxy.$q),i=d(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:i.value},M(t.default))}});function qe(e,t,o){let l;function i(){l!==void 0&&(A.remove(l),l=void 0)}return N(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>o.value===!0,handler:t},A.add(l)}}}const Le={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Te=["beforeShow","show","beforeHide","hide"];function ke({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:i,processOnMount:f}){const s=B(),{props:a,emit:c,proxy:T}=s;let u;function p(n){e.value===!0?y(n):h(n)}function h(n){if(a.disable===!0||n!==void 0&&n.qAnchorHandled===!0||t!==void 0&&t(n)!==!0)return;const r=a["onUpdate:modelValue"]!==void 0;r===!0&&(c("update:modelValue",!0),u=n,Q(()=>{u===n&&(u=void 0)})),(a.modelValue===null||r===!1)&&v(n)}function v(n){e.value!==!0&&(e.value=!0,c("beforeShow",n),l!==void 0?l(n):c("show",n))}function y(n){if(a.disable===!0)return;const r=a["onUpdate:modelValue"]!==void 0;r===!0&&(c("update:modelValue",!1),u=n,Q(()=>{u===n&&(u=void 0)})),(a.modelValue===null||r===!1)&&k(n)}function k(n){e.value!==!1&&(e.value=!1,c("beforeHide",n),i!==void 0?i(n):c("hide",n))}function E(n){a.disable===!0&&n===!0?a["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):n===!0!==e.value&&(n===!0?v:k)(u)}I(()=>a.modelValue,E),o!==void 0&&ie(s)===!0&&I(()=>T.$route.fullPath,()=>{o.value===!0&&e.value===!0&&y()}),f===!0&&G(()=>{E(a.modelValue)});const S={show:h,hide:y,toggle:p};return Object.assign(T,S),S}const ue=[null,document,document.body,document.scrollingElement,document.documentElement];function Ee(e,t){let o=ne(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return ue.includes(o)?window:o}function ce(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function de(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let x;function Se(){if(x!==void 0)return x;const e=document.createElement("p"),t=document.createElement("div");$(e,{width:"100%",height:"200px"}),$(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let l=e.offsetWidth;return o===l&&(l=t.clientWidth),t.remove(),x=o-l,x}function fe(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let g=0,V,H,q,P=!1,U,X,Y,w=null;function ve(e){me(e)&&O(e)}function me(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=J(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=o||l?e.deltaY:e.deltaX;for(let f=0;f<t.length;f++){const s=t[f];if(fe(s,l))return l?i<0&&s.scrollTop===0?!0:i>0&&s.scrollTop+s.clientHeight===s.scrollHeight:i<0&&s.scrollLeft===0?!0:i>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function z(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function _(e){P!==!0&&(P=!0,requestAnimationFrame(()=>{P=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=o-t,document.scrollingElement.scrollTop=l),l>q&&(document.scrollingElement.scrollTop-=Math.ceil((l-q)/8))}))}function D(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:i}=window.getComputedStyle(t);V=de(window),H=ce(window),U=t.style.left,X=t.style.top,Y=window.location.href,t.style.left=`-${V}px`,t.style.top=`-${H}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,b.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",_,m.passiveCapture),window.visualViewport.addEventListener("scroll",_,m.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",z,m.passiveCapture))}b.is.desktop===!0&&b.is.mac===!0&&window[`${e}EventListener`]("wheel",ve,m.notPassive),e==="remove"&&(b.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",_,m.passiveCapture),window.visualViewport.removeEventListener("scroll",_,m.passiveCapture)):window.removeEventListener("scroll",z,m.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=U,t.style.top=X,window.location.href===Y&&window.scrollTo(V,H),q=void 0)}function we(e){let t="add";if(e===!0){if(g++,w!==null){clearTimeout(w),w=null;return}if(g>1)return}else{if(g===0||(g--,g>0))return;if(t="remove",b.is.ios===!0&&b.is.nativeMobile===!0){w!==null&&clearTimeout(w),w=setTimeout(()=>{D(t),w=null},100);return}}D(t)}function xe(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,we(t))}}}function _e(){let e=null;const t=B();function o(){e!==null&&(clearTimeout(e),e=null)}return Z(o),N(o),{removeTimeout:o,registerTimeout(l,i){o(),re(t)===!1&&(e=setTimeout(l,i))}}}function Ce(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ee.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Be(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function Ve(e,t,o){if(o<=t)return t;const l=o-t+1;let i=t+(e-t)%l;return i<t&&(i=l+i),i===0?0:i}var He=C({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:o.value},M(t.default))}}),Pe=C({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=d(()=>parseInt(e.lines,10)),l=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),i=d(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>L("div",{style:i.value,class:l.value},M(t.default))}}),Me=C({name:"QItem",props:{...K,...se,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=B(),i=j(e,l),{hasLink:f,linkAttrs:s,linkClass:a,linkTag:c,navigateOnClick:T}=ae(),u=R(null),p=R(null),h=d(()=>e.clickable===!0||f.value===!0||e.tag==="label"),v=d(()=>e.disable!==!0&&h.value===!0),y=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?a.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),k=d(()=>{if(e.insetLevel===void 0)return null;const r=l.lang.rtl===!0?"Right":"Left";return{["padding"+r]:16+e.insetLevel*56+"px"}});function E(r){v.value===!0&&(p.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===u.value?p.value.focus():document.activeElement===p.value&&u.value.focus()),T(r))}function S(r){if(v.value===!0&&te(r,13)===!0){O(r),r.qKeyEvent=!0;const W=new MouseEvent("click",r);W.qKeyEvent=!0,u.value.dispatchEvent(W)}o("keyup",r)}function n(){const r=F(t.default,[]);return v.value===!0&&r.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:p})),r}return()=>{const r={ref:u,class:y.value,style:k.value,role:"listitem",onClick:E,onKeyup:S};return v.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,s.value)):h.value===!0&&(r["aria-disabled"]="true"),L(c.value,r,n())}}});function We(){return oe(le)}export{He as Q,Te as a,_e as b,Ce as c,ke as d,qe as e,Be as f,xe as g,Ee as h,ce as i,de as j,Se as k,Pe as l,Me as m,We as n,ge as o,Ve as p,Le as u};