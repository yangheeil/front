import{c as O,h as j,a as rt,b as ut,d as $t,e as Ie}from"./render.3c524ffa.js";import{c as f,h as k,r as _,i as st,o as G,a as U,n as Qe,d as Z,g as M,l as A,e as be,f as I,w as C,j as ye,t as J,s as oe,H as We,k as H,m as Et,p as Bt,P as Vt,q as zt,u as se,v as Se,x as Fe,y as Te,z as Pe,A as Le,B as Ot,C as ct,D as Pt,E as ce,F as Mt,G as Qt,I as ne,J as he,K as z,L as $,M as Rt,N as ge,O as Ne,Q as Ht,R as At,S as Dt,T as It,U as Wt,V as Ft,W as Nt,X as jt}from"./index.448c300a.js";import{u as Xt,a as Kt,Q as dt,v as Ut,g as Yt,c as je,b as Jt,d as Gt,e as Zt,f as de}from"./QBtn.23a979e2.js";var Xe=O({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const l=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>k("div",{class:l.value},j(n.default))}}),Ke=O({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const l=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>k("div",{class:l.value,role:"toolbar"},j(n.default))}});function el(){const e=_(!st.value);return e.value===!1&&G(()=>{e.value=!0}),e}const ft=typeof ResizeObserver!="undefined",Ue=ft===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Me=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let l=null,a,t={width:-1,height:-1};function o(d){d===!0||e.debounce===0||e.debounce==="0"?r():l===null&&(l=setTimeout(r,e.debounce))}function r(){if(l!==null&&(clearTimeout(l),l=null),a){const{offsetWidth:d,offsetHeight:s}=a;(d!==t.width||s!==t.height)&&(t={width:d,height:s},n("resize",t))}}const{proxy:v}=M();if(ft===!0){let d;const s=i=>{a=v.$el.parentNode,a?(d=new ResizeObserver(o),d.observe(a),r()):i!==!0&&Z(()=>{s(!0)})};return G(()=>{s()}),U(()=>{l!==null&&clearTimeout(l),d!==void 0&&(d.disconnect!==void 0?d.disconnect():a&&d.unobserve(a))}),Qe}else{let i=function(){l!==null&&(clearTimeout(l),l=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",o,A.passive),s=void 0)},q=function(){i(),a&&a.contentDocument&&(s=a.contentDocument.defaultView,s.addEventListener("resize",o,A.passive),r())};const d=el();let s;return G(()=>{Z(()=>{a=v.$el,a&&q()})}),U(i),v.trigger=o,()=>{if(d.value===!0)return k("object",{style:Ue.style,tabindex:-1,type:"text/html",data:Ue.url,"aria-hidden":"true",onLoad:q})}}}}),tl=O({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:l}){const{proxy:{$q:a}}=M(),t=be(ye,I);if(t===I)return console.error("QHeader needs to be child of QLayout"),I;const o=_(parseInt(e.heightHint,10)),r=_(!0),v=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||a.platform.is.ios&&t.isContainer.value===!0),d=f(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return r.value===!0?o.value:0;const c=o.value-t.scroll.value.position;return c>0?c:0}),s=f(()=>e.modelValue!==!0||v.value===!0&&r.value!==!0),i=f(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),q=f(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=f(()=>{const c=t.rows.value.top,g={};return c[0]==="l"&&t.left.space===!0&&(g[a.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),c[2]==="r"&&t.right.space===!0&&(g[a.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),g});function m(c,g){t.update("header",c,g)}function h(c,g){c.value!==g&&(c.value=g)}function T({height:c}){h(o,c),m("size",c)}function S(c){i.value===!0&&h(r,!0),l("focusin",c)}C(()=>e.modelValue,c=>{m("space",c),h(r,!0),t.animate()}),C(d,c=>{m("offset",c)}),C(()=>e.reveal,c=>{c===!1&&h(r,e.modelValue)}),C(r,c=>{t.animate(),l("reveal",c)}),C(t.scroll,c=>{e.reveal===!0&&h(r,c.direction==="up"||c.position<=e.revealOffset||c.position-c.inflectionPoint<100)});const p={};return t.instances.header=p,e.modelValue===!0&&m("size",o.value),m("space",e.modelValue),m("offset",d.value),U(()=>{t.instances.header===p&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const c=rt(n.default,[]);return e.elevated===!0&&c.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(k(Me,{debounce:0,onResize:T})),k("header",{class:q.value,style:y.value,onFocusin:S},c)}}});const ae={dark:{type:Boolean,default:null}};function ie(e,n){return f(()=>e.dark===null?n.dark.isActive:e.dark)}var ll=O({name:"QList",props:{...ae,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const l=M(),a=ie(e,l.proxy.$q),t=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:t.value},j(n.default))}});const nl={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},_e={xs:2,sm:4,md:8,lg:16,xl:24};var ol=O({name:"QSeparator",props:{...ae,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const n=M(),l=ie(e,n.proxy.$q),a=f(()=>e.vertical===!0?"vertical":"horizontal"),t=f(()=>` q-separator--${a.value}`),o=f(()=>e.inset!==!1?`${t.value}-${nl[e.inset]}`:""),r=f(()=>`q-separator${t.value}${o.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(l.value===!0?" q-separator--dark":"")),v=f(()=>{const d={};if(e.size!==void 0&&(d[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const s=e.spaced===!0?`${_e.md}px`:e.spaced in _e?`${_e[e.spaced]}px`:e.spaced,i=e.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${i[0]}`]=d[`margin${i[1]}`]=s}return d});return()=>k("hr",{class:r.value,style:v.value,"aria-orientation":a.value})}});function al(e,n){const l=_(null),a=f(()=>e.disable===!0?null:k("span",{ref:l,class:"no-outline",tabindex:-1}));function t(o){const r=n.value;o!==void 0&&o.type.indexOf("key")===0?r!==null&&document.activeElement!==r&&r.contains(document.activeElement)===!0&&r.focus():l.value!==null&&(o===void 0||r!==null&&r.contains(o.target)===!0)&&l.value.focus()}return{refocusTargetEl:a,refocusTarget:t}}const il={name:String};function rl(e={}){return(n,l,a)=>{n[l](k("input",{class:"hidden"+(a||""),...e.value}))}}var ul={xs:30,sm:35,md:40,lg:50,xl:60};const sl={...ae,...Kt,...il,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},cl=["update:modelValue"];function dl(e,n){const{props:l,slots:a,emit:t,proxy:o}=M(),{$q:r}=o,v=ie(l,r),d=_(null),{refocusTargetEl:s,refocusTarget:i}=al(l,d),q=Xt(l,ul),y=f(()=>l.val!==void 0&&Array.isArray(l.modelValue)),m=f(()=>{const x=J(l.val);return y.value===!0?l.modelValue.findIndex(B=>J(B)===x):-1}),h=f(()=>y.value===!0?m.value>-1:J(l.modelValue)===J(l.trueValue)),T=f(()=>y.value===!0?m.value===-1:J(l.modelValue)===J(l.falseValue)),S=f(()=>h.value===!1&&T.value===!1),p=f(()=>l.disable===!0?-1:l.tabindex||0),c=f(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(v.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),g=f(()=>{const x=h.value===!0?"truthy":T.value===!0?"falsy":"indet",B=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?h.value===!0:T.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${x}${B}`}),b=f(()=>{const x={type:"checkbox"};return l.name!==void 0&&Object.assign(x,{".checked":h.value,"^checked":h.value===!0?"checked":void 0,name:l.name,value:y.value===!0?l.val:l.trueValue}),x}),L=rl(b),E=f(()=>{const x={tabindex:p.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":S.value===!0?"mixed":h.value===!0?"true":"false"};return l.disable===!0&&(x["aria-disabled"]="true"),x});function Q(x){x!==void 0&&(oe(x),i(x)),l.disable!==!0&&t("update:modelValue",X(),x)}function X(){if(y.value===!0){if(h.value===!0){const x=l.modelValue.slice();return x.splice(m.value,1),x}return l.modelValue.concat([l.val])}if(h.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(T.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function D(x){(x.keyCode===13||x.keyCode===32)&&oe(x)}function R(x){(x.keyCode===13||x.keyCode===32)&&Q(x)}const W=n(h,S);return Object.assign(o,{toggle:Q}),()=>{const x=W();l.disable!==!0&&L(x,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const B=[k("div",{class:g.value,style:q.value,"aria-hidden":"true"},x)];s.value!==null&&B.push(s.value);const Y=l.label!==void 0?ut(a.default,[l.label]):j(a.default);return Y!==void 0&&B.push(k("div",{class:`q-${e}__label q-anchor--skip`},Y)),k("div",{ref:d,class:c.value,...E.value,onClick:Q,onKeydown:D,onKeyup:R},B)}}var fl=O({name:"QToggle",props:{...sl,icon:String,iconColor:String},emits:cl,setup(e){function n(l,a){const t=f(()=>(l.value===!0?e.checkedIcon:a.value===!0?e.indeterminateIcon:e.uncheckedIcon)||e.icon),o=f(()=>l.value===!0?e.iconColor:null);return()=>[k("div",{class:"q-toggle__track"}),k("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},t.value!==void 0?[k(dt,{name:t.value,color:o.value})]:void 0)]}return dl("toggle",n)}});function vl(e,n,l){let a;function t(){a!==void 0&&(We.remove(a),a=void 0)}return U(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){a={condition:()=>l.value===!0,handler:n},We.add(a)}}}const ml={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},hl=["beforeShow","show","beforeHide","hide"];function gl({showing:e,canShow:n,hideOnRouteChange:l,handleShow:a,handleHide:t,processOnMount:o}){const r=M(),{props:v,emit:d,proxy:s}=r;let i;function q(c){e.value===!0?h(c):y(c)}function y(c){if(v.disable===!0||c!==void 0&&c.qAnchorHandled===!0||n!==void 0&&n(c)!==!0)return;const g=v["onUpdate:modelValue"]!==void 0;g===!0&&(d("update:modelValue",!0),i=c,Z(()=>{i===c&&(i=void 0)})),(v.modelValue===null||g===!1)&&m(c)}function m(c){e.value!==!0&&(e.value=!0,d("beforeShow",c),a!==void 0?a(c):d("show",c))}function h(c){if(v.disable===!0)return;const g=v["onUpdate:modelValue"]!==void 0;g===!0&&(d("update:modelValue",!1),i=c,Z(()=>{i===c&&(i=void 0)})),(v.modelValue===null||g===!1)&&T(c)}function T(c){e.value!==!1&&(e.value=!1,d("beforeHide",c),t!==void 0?t(c):d("hide",c))}function S(c){v.disable===!0&&c===!0?v["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):c===!0!==e.value&&(c===!0?m:T)(i)}C(()=>v.modelValue,S),l!==void 0&&Ut(r)===!0&&C(()=>s.$route.fullPath,()=>{l.value===!0&&e.value===!0&&h()}),o===!0&&G(()=>{S(v.modelValue)});const p={show:y,hide:h,toggle:q};return Object.assign(s,p),p}const bl=[null,document,document.body,document.scrollingElement,document.documentElement];function yl(e,n){let l=Yt(n);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return bl.includes(l)?window:l}function vt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function mt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let fe;function $e(){if(fe!==void 0)return fe;const e=document.createElement("p"),n=document.createElement("div");je(e,{width:"100%",height:"200px"}),je(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const l=e.offsetWidth;n.style.overflow="scroll";let a=e.offsetWidth;return l===a&&(a=n.clientWidth),n.remove(),fe=l-a,fe}function pl(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let te=0,Ee,Be,le,Ve=!1,Ye,Je,Ge,K=null;function wl(e){ql(e)&&oe(e)}function ql(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=Et(e),l=e.shiftKey&&!e.deltaX,a=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=l||a?e.deltaY:e.deltaX;for(let o=0;o<n.length;o++){const r=n[o];if(pl(r,a))return a?t<0&&r.scrollTop===0?!0:t>0&&r.scrollTop+r.clientHeight===r.scrollHeight:t<0&&r.scrollLeft===0?!0:t>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function Ze(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ve(e){Ve!==!0&&(Ve=!0,requestAnimationFrame(()=>{Ve=!1;const{height:n}=e.target,{clientHeight:l,scrollTop:a}=document.scrollingElement;(le===void 0||n!==window.innerHeight)&&(le=l-n,document.scrollingElement.scrollTop=a),a>le&&(document.scrollingElement.scrollTop-=Math.ceil((a-le)/8))}))}function et(e){const n=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:a,overflowX:t}=window.getComputedStyle(n);Ee=mt(window),Be=vt(window),Ye=n.style.left,Je=n.style.top,Ge=window.location.href,n.style.left=`-${Ee}px`,n.style.top=`-${Be}px`,t!=="hidden"&&(t==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),a!=="hidden"&&(a==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,H.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ve,A.passiveCapture),window.visualViewport.addEventListener("scroll",ve,A.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ze,A.passiveCapture))}H.is.desktop===!0&&H.is.mac===!0&&window[`${e}EventListener`]("wheel",wl,A.notPassive),e==="remove"&&(H.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",ve,A.passiveCapture),window.visualViewport.removeEventListener("scroll",ve,A.passiveCapture)):window.removeEventListener("scroll",Ze,A.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=Ye,n.style.top=Je,window.location.href===Ge&&window.scrollTo(Ee,Be),le=void 0)}function kl(e){let n="add";if(e===!0){if(te++,K!==null){clearTimeout(K),K=null;return}if(te>1)return}else{if(te===0||(te--,te>0))return;if(n="remove",H.is.ios===!0&&H.is.nativeMobile===!0){K!==null&&clearTimeout(K),K=setTimeout(()=>{et(n),K=null},100);return}}et(n)}function xl(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,kl(n))}}}function Cl(){let e=null;const n=M();function l(){e!==null&&(clearTimeout(e),e=null)}return Bt(l),U(l),{removeTimeout:l,registerTimeout(a,t){l(),Jt(n)===!1&&(e=setTimeout(a,t))}}}const Re={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Sl=Object.keys(Re);Re.all=!0;function tt(e){const n={};for(const l of Sl)e[l]===!0&&(n[l]=!0);return Object.keys(n).length===0?Re:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Tl=["INPUT","TEXTAREA"];function lt(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&Tl.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function Ll(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Vt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ze(e,n,l){const a=Pe(e);let t,o=a.left-n.event.x,r=a.top-n.event.y,v=Math.abs(o),d=Math.abs(r);const s=n.direction;s.horizontal===!0&&s.vertical!==!0?t=o<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=r<0?"up":"down":s.up===!0&&r<0?(t="up",v>d&&(s.left===!0&&o<0?t="left":s.right===!0&&o>0&&(t="right"))):s.down===!0&&r>0?(t="down",v>d&&(s.left===!0&&o<0?t="left":s.right===!0&&o>0&&(t="right"))):s.left===!0&&o<0?(t="left",v<d&&(s.up===!0&&r<0?t="up":s.down===!0&&r>0&&(t="down"))):s.right===!0&&o>0&&(t="right",v<d&&(s.up===!0&&r<0?t="up":s.down===!0&&r>0&&(t="down")));let i=!1;if(t===void 0&&l===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,i=!0,t==="left"||t==="right"?(a.left-=o,v=0,o=0):(a.top-=r,d=0,r=0)}return{synthetic:i,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:a,direction:t,isFirst:n.event.isFirst,isFinal:l===!0,duration:Date.now()-n.event.time,distance:{x:v,y:d},offset:{x:o,y:r},delta:{x:a.left-n.event.lastX,y:a.top-n.event.lastY}}}}let _l=0;var Oe=$t({name:"touch-pan",beforeMount(e,{value:n,modifiers:l}){if(l.mouse!==!0&&H.has.touch!==!0)return;function a(o,r){l.mouse===!0&&r===!0?oe(o):(l.stop===!0&&Te(o),l.prevent===!0&&Fe(o))}const t={uid:"qvtp_"+_l++,handler:n,modifiers:l,direction:tt(l),noop:Qe,mouseStart(o){lt(o,t)&&zt(o)&&(se(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(o,!0))},touchStart(o){if(lt(o,t)){const r=o.target;se(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),t.start(o)}},start(o,r){if(H.is.firefox===!0&&Se(e,!0),t.lastEvt=o,r===!0||l.stop===!0){if(t.direction.all!==!0&&(r!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=o.type.indexOf("mouse")>-1?new MouseEvent(o.type,o):new TouchEvent(o.type,o);o.defaultPrevented===!0&&Fe(s),o.cancelBubble===!0&&Te(s),Object.assign(s,{qKeyEvent:o.qKeyEvent,qClickOutside:o.qClickOutside,qAnchorHandled:o.qAnchorHandled,qClonedBy:o.qClonedBy===void 0?[t.uid]:o.qClonedBy.concat(t.uid)}),t.initialEvent={target:o.target,event:s}}Te(o)}const{left:v,top:d}=Pe(o);t.event={x:v,y:d,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:d}},move(o){if(t.event===void 0)return;const r=Pe(o),v=r.left-t.event.x,d=r.top-t.event.y;if(v===0&&d===0)return;t.lastEvt=o;const s=t.event.mouse===!0,i=()=>{a(o,s);let m;l.preserveCursor!==!0&&l.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ll(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),s===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{T(),h()},50):T()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&a(o,t.event.mouse);const{payload:m,synthetic:h}=ze(o,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(o):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(o);return}const q=Math.abs(v),y=Math.abs(d);q!==y&&(t.direction.horizontal===!0&&q>y||t.direction.vertical===!0&&q<y||t.direction.up===!0&&q<y&&d<0||t.direction.down===!0&&q<y&&d>0||t.direction.left===!0&&q>y&&v<0||t.direction.right===!0&&q>y&&v>0?(t.event.detected=!0,t.move(o)):t.end(o,!0))},end(o,r){if(t.event!==void 0){if(Le(t,"temp"),H.is.firefox===!0&&Se(e,!1),r===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ze(o===void 0?t.lastEvt:o,t).payload);const{payload:v}=ze(o===void 0?t.lastEvt:o,t,!0),d=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const o=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";se(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}H.has.touch===!0&&se(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchpan;l!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&l.end(),l.handler=n.value),l.direction=tt(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),Le(n,"main"),Le(n,"temp"),H.is.firefox===!0&&Se(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function me(e,n,l){return l<=n?n:Math.min(l,Math.max(n,e))}const nt=150;var $l=O({name:"QDrawer",inheritAttrs:!1,props:{...ml,...ae,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...hl,"onLayout","miniState"],setup(e,{slots:n,emit:l,attrs:a}){const t=M(),{proxy:{$q:o}}=t,r=ie(e,o),{preventBodyScroll:v}=xl(),{registerTimeout:d,removeTimeout:s}=Cl(),i=be(ye,I);if(i===I)return console.error("QDrawer needs to be child of QLayout"),I;let q,y=null,m;const h=_(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),T=f(()=>e.mini===!0&&h.value!==!0),S=f(()=>T.value===!0?e.miniWidth:e.width),p=_(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),c=f(()=>e.persistent!==!0&&(h.value===!0||ht.value===!0));function g(u,w){if(Q(),u!==!1&&i.animate(),P(0),h.value===!0){const V=i.instances[re.value];V!==void 0&&V.belowBreakpoint===!0&&V.hide(!1),F(1),i.isContainer.value!==!0&&v(!0)}else F(0),u!==!1&&ke(!1);d(()=>{u!==!1&&ke(!0),w!==!0&&l("show",u)},nt)}function b(u,w){X(),u!==!1&&i.animate(),F(0),P(W.value*S.value),xe(),w!==!0?d(()=>{l("hide",u)},nt):s()}const{show:L,hide:E}=gl({showing:p,hideOnRouteChange:c,handleShow:g,handleHide:b}),{addToHistory:Q,removeFromHistory:X}=vl(p,E,c),D={belowBreakpoint:h,hide:E},R=f(()=>e.side==="right"),W=f(()=>(o.lang.rtl===!0?-1:1)*(R.value===!0?1:-1)),x=_(0),B=_(!1),Y=_(!1),He=_(S.value*W.value),re=f(()=>R.value===!0?"left":"right"),pe=f(()=>p.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),we=f(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(R.value?"R":"L")>-1||o.platform.is.ios===!0&&i.isContainer.value===!0),ee=f(()=>e.overlay===!1&&p.value===!0&&h.value===!1),ht=f(()=>e.overlay===!0&&p.value===!0&&h.value===!1),gt=f(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&B.value===!1?" hidden":"")),bt=f(()=>({backgroundColor:`rgba(0,0,0,${x.value*.4})`})),Ae=f(()=>R.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),yt=f(()=>R.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),pt=f(()=>{const u={};return i.header.space===!0&&Ae.value===!1&&(we.value===!0?u.top=`${i.header.offset}px`:i.header.space===!0&&(u.top=`${i.header.size}px`)),i.footer.space===!0&&yt.value===!1&&(we.value===!0?u.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(u.bottom=`${i.footer.size}px`)),u}),wt=f(()=>{const u={width:`${S.value}px`,transform:`translateX(${He.value}px)`};return h.value===!0?u:Object.assign(u,pt.value)}),qt=f(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),kt=f(()=>`q-drawer q-drawer--${e.side}`+(Y.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(B.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(we.value===!0||ee.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Ae.value===!0?" q-drawer--top-padding":""))),xt=f(()=>{const u=o.lang.rtl===!0?e.side:re.value;return[[Oe,Lt,void 0,{[u]:!0,mouse:!0}]]}),Ct=f(()=>{const u=o.lang.rtl===!0?re.value:e.side;return[[Oe,De,void 0,{[u]:!0,mouse:!0}]]}),St=f(()=>{const u=o.lang.rtl===!0?re.value:e.side;return[[Oe,De,void 0,{[u]:!0,mouse:!0,mouseAllDir:!0}]]});function qe(){_t(h,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}C(h,u=>{u===!0?(q=p.value,p.value===!0&&E(!1)):e.overlay===!1&&e.behavior!=="mobile"&&q!==!1&&(p.value===!0?(P(0),F(0),xe()):L(!1))}),C(()=>e.side,(u,w)=>{i.instances[w]===D&&(i.instances[w]=void 0,i[w].space=!1,i[w].offset=0),i.instances[u]=D,i[u].size=S.value,i[u].space=ee.value,i[u].offset=pe.value}),C(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&qe()}),C(()=>e.behavior+e.breakpoint,qe),C(i.isContainer,u=>{p.value===!0&&v(u!==!0),u===!0&&qe()}),C(i.scrollbarWidth,()=>{P(p.value===!0?0:void 0)}),C(pe,u=>{N("offset",u)}),C(ee,u=>{l("onLayout",u),N("space",u)}),C(R,()=>{P()}),C(S,u=>{P(),Ce(e.miniToOverlay,u)}),C(()=>e.miniToOverlay,u=>{Ce(u,S.value)}),C(()=>o.lang.rtl,()=>{P()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Tt(),i.animate())}),C(T,u=>{l("miniState",u)});function P(u){u===void 0?Z(()=>{u=p.value===!0?0:S.value,P(W.value*u)}):(i.isContainer.value===!0&&R.value===!0&&(h.value===!0||Math.abs(u)===S.value)&&(u+=W.value*i.scrollbarWidth.value),He.value=u)}function F(u){x.value=u}function ke(u){const w=u===!0?"remove":i.isContainer.value!==!0?"add":"";w!==""&&document.body.classList[w]("q-body--drawer-toggle")}function Tt(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),Y.value=!0,y=setTimeout(()=>{y=null,Y.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Lt(u){if(p.value!==!1)return;const w=S.value,V=me(u.distance.x,0,w);if(u.isFinal===!0){V>=Math.min(75,w)===!0?L():(i.animate(),F(0),P(W.value*w)),B.value=!1;return}P((o.lang.rtl===!0?R.value!==!0:R.value)?Math.max(w-V,0):Math.min(0,V-w)),F(me(V/w,0,1)),u.isFirst===!0&&(B.value=!0)}function De(u){if(p.value!==!0)return;const w=S.value,V=u.direction===e.side,ue=(o.lang.rtl===!0?V!==!0:V)?me(u.distance.x,0,w):0;if(u.isFinal===!0){Math.abs(ue)<Math.min(75,w)===!0?(i.animate(),F(1),P(0)):E(),B.value=!1;return}P(W.value*ue),F(me(1-ue/w,0,1)),u.isFirst===!0&&(B.value=!0)}function xe(){v(!1),ke(!0)}function N(u,w){i.update(e.side,u,w)}function _t(u,w){u.value!==w&&(u.value=w)}function Ce(u,w){N("size",u===!0?e.miniWidth:w)}return i.instances[e.side]=D,Ce(e.miniToOverlay,S.value),N("space",ee.value),N("offset",pe.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),G(()=>{l("onLayout",ee.value),l("miniState",T.value),q=e.showIfAbove===!0;const u=()=>{(p.value===!0?g:b)(!1,!0)};if(i.totalWidth.value!==0){Z(u);return}m=C(i.totalWidth,()=>{m(),m=void 0,p.value===!1&&e.showIfAbove===!0&&h.value===!1?L(!1):u()})}),U(()=>{m!==void 0&&m(),y!==null&&(clearTimeout(y),y=null),p.value===!0&&xe(),i.instances[e.side]===D&&(i.instances[e.side]=void 0,N("size",0),N("offset",0),N("space",!1))}),()=>{const u=[];h.value===!0&&(e.noSwipeOpen===!1&&u.push(Ot(k("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),xt.value)),u.push(Ie("div",{ref:"backdrop",class:gt.value,style:bt.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>St.value)));const w=T.value===!0&&n.mini!==void 0,V=[k("div",{...a,key:""+w,class:[qt.value,a.class]},w===!0?n.mini():j(n.default))];return e.elevated===!0&&p.value===!0&&V.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(Ie("aside",{ref:"content",class:kt.value,style:wt.value},V,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>Ct.value)),k("div",{class:"q-drawer-container"},u)}}}),El=O({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:l}}=M(),a=be(ye,I);if(a===I)return console.error("QPageContainer needs to be child of QLayout"),I;ct(Pt,!0);const t=f(()=>{const o={};return a.header.space===!0&&(o.paddingTop=`${a.header.size}px`),a.right.space===!0&&(o[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${a.right.size}px`),a.footer.space===!0&&(o.paddingBottom=`${a.footer.size}px`),a.left.space===!0&&(o[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${a.left.size}px`),o});return()=>k("div",{class:"q-page-container",style:t.value},j(n.default))}});const{passive:ot}=A,Bl=["both","horizontal","vertical"];var Vl=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Bl.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let a=null,t,o;C(()=>e.scrollTarget,()=>{d(),v()});function r(){a!==null&&a();const q=Math.max(0,vt(t)),y=mt(t),m={top:q-l.position.top,left:y-l.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";l.position={top:q,left:y},l.directionChanged=l.direction!==h,l.delta=m,l.directionChanged===!0&&(l.direction=h,l.inflectionPoint=l.position),n("scroll",{...l})}function v(){t=yl(o,e.scrollTarget),t.addEventListener("scroll",s,ot),s(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",s,ot),t=void 0)}function s(q){if(q===!0||e.debounce===0||e.debounce==="0")r();else if(a===null){const[y,m]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];a=()=>{m(y),a=null}}}const{proxy:i}=M();return C(()=>i.$q.lang.rtl,r),G(()=>{o=i.$el.parentNode,v()}),U(()=>{a!==null&&a(),d()}),Object.assign(i,{trigger:s,getPosition:()=>l}),Qe}}),zl=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:l}){const{proxy:{$q:a}}=M(),t=_(null),o=_(a.screen.height),r=_(e.container===!0?0:a.screen.width),v=_({position:0,direction:"down",inflectionPoint:0}),d=_(0),s=_(st.value===!0?0:$e()),i=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),q=f(()=>e.container===!1?{minHeight:a.screen.height+"px"}:null),y=f(()=>s.value!==0?{[a.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),m=f(()=>s.value!==0?{[a.lang.rtl===!0?"right":"left"]:0,[a.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function h(b){if(e.container===!0||document.qScrollPrevented!==!0){const L={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};v.value=L,e.onScroll!==void 0&&l("scroll",L)}}function T(b){const{height:L,width:E}=b;let Q=!1;o.value!==L&&(Q=!0,o.value=L,e.onScrollHeight!==void 0&&l("scrollHeight",L),p()),r.value!==E&&(Q=!0,r.value=E),Q===!0&&e.onResize!==void 0&&l("resize",b)}function S({height:b}){d.value!==b&&(d.value=b,p())}function p(){if(e.container===!0){const b=o.value>d.value?$e():0;s.value!==b&&(s.value=b)}}let c=null;const g={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:o,containerHeight:d,scrollbarWidth:s,totalWidth:f(()=>r.value+s.value),rows:f(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ce({size:0,offset:0,space:!1}),right:ce({size:300,offset:0,space:!1}),footer:ce({size:0,offset:0,space:!1}),left:ce({size:300,offset:0,space:!1}),scroll:v,animate(){c!==null?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{c=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,L,E){g[b][L]=E}};if(ct(ye,g),$e()>0){let E=function(){b=null,L.classList.remove("hide-scrollbar")},Q=function(){if(b===null){if(L.scrollHeight>a.screen.height)return;L.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(E,300)},X=function(D){b!==null&&D==="remove"&&(clearTimeout(b),E()),window[`${D}EventListener`]("resize",Q)},b=null;const L=document.body;C(()=>e.container!==!0?"add":"remove",X),e.container!==!0&&X("add"),Mt(()=>{X("remove")})}return()=>{const b=ut(n.default,[k(Vl,{onScroll:h}),k(Me,{onResize:T})]),L=k("div",{class:i.value,style:q.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:t},[k(Me,{onResize:S}),k("div",{class:"absolute-full",style:y.value},[k("div",{class:"scroll",style:m.value},[L])])]):L}}}),at=O({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const l=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>k("div",{class:l.value},j(n.default))}}),it=O({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const l=f(()=>parseInt(e.lines,10)),a=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),t=f(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>k("div",{style:t.value,class:a.value},j(n.default))}}),Ol=O({name:"QItem",props:{...ae,...Gt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:l}){const{proxy:{$q:a}}=M(),t=ie(e,a),{hasLink:o,linkAttrs:r,linkClass:v,linkTag:d,navigateOnClick:s}=Zt(),i=_(null),q=_(null),y=f(()=>e.clickable===!0||o.value===!0||e.tag==="label"),m=f(()=>e.disable!==!0&&y.value===!0),h=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(o.value===!0&&e.active===null?v.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=f(()=>{if(e.insetLevel===void 0)return null;const g=a.lang.rtl===!0?"Right":"Left";return{["padding"+g]:16+e.insetLevel*56+"px"}});function S(g){m.value===!0&&(q.value!==null&&(g.qKeyEvent!==!0&&document.activeElement===i.value?q.value.focus():document.activeElement===q.value&&i.value.focus()),s(g))}function p(g){if(m.value===!0&&Qt(g,13)===!0){oe(g),g.qKeyEvent=!0;const b=new MouseEvent("click",g);b.qKeyEvent=!0,i.value.dispatchEvent(b)}l("keyup",g)}function c(){const g=rt(n.default,[]);return m.value===!0&&g.unshift(k("div",{class:"q-focus-helper",tabindex:-1,ref:q})),g}return()=>{const g={ref:i,class:h.value,style:T.value,role:"listitem",onClick:S,onKeyup:p};return m.value===!0?(g.tabindex=e.tabindex||"0",Object.assign(g,r.value)):y.value===!0&&(g["aria-disabled"]="true"),k(d.value,g,c())}}});const Pl={__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},to:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){return(n,l)=>(ne(),he(Ol,{clickable:"",tag:"a",to:e.to},{default:z(()=>[e.icon?(ne(),he(at,{key:0,avatar:""},{default:z(()=>[$(dt,{name:e.icon},null,8,["name"])]),_:1})):Rt("",!0),$(at,null,{default:z(()=>[$(it,{lines:"",class:"text-subtitle1"},{default:z(()=>[ge(Ne(e.title),1)]),_:1}),$(it,{caption:"",lines:""},{default:z(()=>[ge(Ne(e.caption),1)]),_:1})]),_:1})]),_:1},8,["to"]))}};function Ml(){return be(Ht)}const Ql={class:"q-px-md q-py-sm q-gutter-md"},Rl=[{title:"Q&A",caption:"\uAE30\uC220, \uCEE4\uB9AC\uC5B4, \uAE30\uD0C0",icon:"question_answer",to:""},{title:"\uC9C0\uC2DD",caption:"Tech, \uD301, \uCE7C\uB7FC",icon:"school",to:""},{title:"\uCEE4\uBBA4\uB2C8\uD2F0",caption:"\uC0AC\uB294\uC598\uAE30, \uC2A4\uD130\uB514",icon:"groups",to:""},{title:"\uACF5\uC9C0\uC0AC\uD56D",caption:"\uACF5\uC9C0\uC0AC\uD56D",icon:"campaign",to:""}],Wl={__name:"MainLayout",setup(e){const n=Ml(),l=_(!1),a=_(!1),t=Rl,o=()=>a.value=!a.value,r=()=>n.dark.toggle();return(v,d)=>{const s=At("router-view");return ne(),he(zl,{view:"lHh Lpr lFf",class:"shadow-2 rounded-borders"},{default:z(()=>[$(tl,{elevated:""},{default:z(()=>[$(Ke,null,{default:z(()=>[$(Xe,null,{default:z(()=>[ge(" WithJK ")]),_:1}),$(de,{icon:"menu",onClick:o,class:"glossy",dense:""})]),_:1})]),_:1}),$($l,{side:"right",modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=i=>a.value=i),elevated:""},{default:z(()=>[$(Ke,{class:"bg-primary text-white"},{default:z(()=>[$(Xe,null,{default:z(()=>[ge(" WithJK ")]),_:1}),$(de,{icon:"close",onClick:o,class:"bg-primary glossy",dense:""})]),_:1}),$(ll,null,{default:z(()=>[(ne(!0),Dt(Ft,null,It(Wt(t),i=>(ne(),he(Pl,jt({key:i.title},i),null,16))),128))]),_:1}),$(ol),Nt("div",Ql,[$(de,{color:"white","text-color":"black",label:"\uB85C\uADF8\uC778",rounded:"",class:"text-caption glossy"}),$(de,{color:"primary",label:"\uD68C\uC6D0\uAC00\uC785",rounded:"",class:"text-caption glossy"}),$(fl,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=i=>l.value=i),"checked-icon":"dark_mode",color:"primary",size:"lg","unchecked-icon":"wb_sunny",onClick:r},null,8,["modelValue"])])]),_:1},8,["modelValue"]),$(El,null,{default:z(()=>[$(s)]),_:1})]),_:1})}}};export{Wl as default};