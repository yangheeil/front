import{n as He,c as y,h as f,r as H,w as L,o as re,g as G,x as ye,d as K,z as se,q as ue,U as Le,s as be,a6 as we,v as ce,Y as de,aa as $e,e as Ee}from"./index.3ecbbb62.js";import{k as ke,Q as Ce,b as _,l as Ae,v as Ne}from"./QBtn.2eb04cc3.js";import{c as X,h as Y}from"./render.f059d1ce.js";import{u as Se,a as _e,b as Re,v as fe,c as De,p as he,d as Fe,e as je,f as Me,g as Ie,h as Qe,r as ge,s as Ue,i as We}from"./QSelect.86c9b910.js";import{h as Ke,i as Ge,e as Xe}from"./QInput.02edcf5a.js";import{u as Ye,a as Je,b as Ze,d as Ve,c as me,h as et,Q as pe,m as tt}from"./QItem.5514b1e5.js";import{a as ot,u as nt}from"./use-form.c24191b0.js";function Te(e,t){if(t&&e===t)return null;const o=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return e;const i=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,r=i.display;return r==="block"||r==="table"?e:Te(e.parentNode)}function ie(e,t,o){return!e||e===document.body?!1:o===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function xe(e,t,o){if(o||(o=document.createRange(),o.selectNode(e),o.setStart(e,0)),t.count===0)o.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(o.setEnd(e,t.count),t.count=0);else for(let i=0;t.count!==0&&i<e.childNodes.length;i++)o=xe(e.childNodes[i],t,o);return o}const it=/^https?:\/\//;class lt{constructor(t,o){this.el=t,this.eVm=o,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(ie(t.anchorNode,this.el,!0)&&ie(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const o=t.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?Te(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const o=document.createRange(),i=document.getSelection();t!==null?(o.setStart(t.startContainer,t.startOffset),o.setEnd(t.endContainer,t.endOffset),i.removeAllRanges(),i.addRange(o)):(i.selectAllChildren(this.el),i.collapseToEnd())}savePosition(){let t=-1,o;const i=document.getSelection(),r=this.el.parentNode;if(i.focusNode&&ie(i.focusNode,r))for(o=i.focusNode,t=i.focusOffset;o&&o!==r;)o!==this.el&&o.previousSibling?(o=o.previousSibling,t+=o.textContent.length):o=o.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const o=window.getSelection(),i=xe(this.el,{count:this.savedPos});i&&(i.collapse(!1),o.removeAllRanges(),o.addRange(i))}}hasParent(t,o){const i=o?this.parent:this.blockParent;return i!==null?i.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,o,i=this.parent){return i===null?!1:t.includes(i.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(t,o,i.parentNode):!1}is(t,o){if(this.selection===null)return!1;switch(t){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===o;case"fontName":const i=document.queryCommandValue(t);return i===`"${o}"`||i===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const r=document.queryCommandState(t);return o!==void 0?r===o:r}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,o,i=He){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(t,o)&&(t="outdent",o=null),o==="PRE"&&this.is(t,"PRE")&&(o="P");else if(t==="print"){i();const r=window.open();r.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),r.print(),r.close();return}else if(t==="link"){const r=this.getParentAttribute("href");if(r===null){const s=this.selectWord(this.selection),a=s?s.toString():"";if(!a.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=it.test(a)?a:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(s.getRangeAt(0))}else this.eVm.editLinkUrl.value=r,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),i();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),i();return}document.execCommand(t,!1,o),i()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const o=document.createRange();o.setStart(t.anchorNode,t.anchorOffset),o.setEnd(t.focusNode,t.focusOffset);const i=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const r=t.focusNode,s=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",i[0],"character"),t.modify("move",i[1],"word"),t.extend(r,s),t.modify("extend",i[1],"character"),t.modify("extend",i[0],"word"),t}}var rt=X({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const o=y(()=>{const i=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(r=>e[r]===!0).map(r=>`q-btn-group--${r}`).join(" ");return`q-btn-group row no-wrap${i.length!==0?" "+i:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>f("div",{class:o.value},Y(t.default))}});const at=Object.keys(ke),st=e=>at.reduce((t,o)=>{const i=e[o];return i!==void 0&&(t[o]=i),t},{});var ut=X({name:"QBtnDropdown",props:{...ke,...Se,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:o}){const{proxy:i}=G(),r=H(e.modelValue),s=H(null),a=Ke(),u=y(()=>{const d={"aria-expanded":r.value===!0?"true":"false","aria-haspopup":"true","aria-controls":a,"aria-label":e.toggleAriaLabel||i.$q.lang.label[r.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(d["aria-disabled"]="true"),d}),g=y(()=>"q-btn-dropdown__arrow"+(r.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),b=y(()=>Ae(e)),c=y(()=>st(e));L(()=>e.modelValue,d=>{s.value!==null&&s.value[d?"show":"hide"]()}),L(()=>e.split,z);function k(d){r.value=!0,o("beforeShow",d)}function p(d){o("show",d),o("update:modelValue",!0)}function m(d){r.value=!1,o("beforeHide",d)}function B(d){o("hide",d),o("update:modelValue",!1)}function x(d){o("click",d)}function $(d){ye(d),z(),o("click",d)}function q(d){s.value!==null&&s.value.toggle(d)}function P(d){s.value!==null&&s.value.show(d)}function z(d){s.value!==null&&s.value.hide(d)}return Object.assign(i,{show:P,hide:z,toggle:q}),re(()=>{e.modelValue===!0&&P()}),()=>{const d=[f(Ce,{class:g.value,name:e.dropdownIcon||i.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&d.push(f(_e,{ref:s,id:a,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:k,onShow:p,onBeforeHide:m,onHide:B},t.default)),e.split===!1?f(_,{class:"q-btn-dropdown q-btn-dropdown--simple",...c.value,...u.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:x},{default:()=>Y(t.label,[]).concat(d),loading:t.loading}):f(rt,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...b.value,glossy:e.glossy,stretch:e.stretch},()=>[f(_,{class:"q-btn-dropdown--current",...c.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:$},{default:t.label,loading:t.loading}),f(_,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...u.value,...b.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>d)])}}}),ct=X({name:"QTooltip",inheritAttrs:!1,props:{...Re,...Ye,...Se,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:fe},self:{type:String,default:"top middle",validator:fe},offset:{type:Array,default:()=>[14,14],validator:De},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Je],setup(e,{slots:t,emit:o,attrs:i}){let r,s;const a=G(),{proxy:{$q:u}}=a,g=H(null),b=H(!1),c=y(()=>he(e.anchor,u.lang.rtl)),k=y(()=>he(e.self,u.lang.rtl)),p=y(()=>e.persistent!==!0),{registerTick:m,removeTick:B}=Fe(),{registerTimeout:x}=Ze(),{transitionProps:$,transitionStyle:q}=je(e),{localScrollTarget:P,changeScrollEvent:z,unconfigureScrollTarget:d}=Me(e,Q),{anchorEl:T,canShow:F,anchorEvents:w}=Ie({showing:b,configureAnchorEl:ne}),{show:J,hide:R}=Ve({showing:b,canShow:F,handleShow:V,handleHide:ee,hideOnRouteChange:p,processOnMount:!0});Object.assign(w,{delayShow:te,delayHide:oe});const{showPortal:j,hidePortal:M,renderPortal:Z}=Qe(a,g,W,"tooltip");if(u.platform.is.mobile===!0){const v={anchorEl:T,innerRef:g,onClickOutside(S){return R(S),S.target.classList.contains("q-dialog__backdrop")&&be(S),!0}},A=y(()=>e.modelValue===null&&e.persistent!==!0&&b.value===!0);L(A,S=>{(S===!0?We:ge)(v)}),K(()=>{ge(v)})}function V(v){j(),m(()=>{s=new MutationObserver(()=>E()),s.observe(g.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),E(),Q()}),r===void 0&&(r=L(()=>u.screen.width+"|"+u.screen.height+"|"+e.self+"|"+e.anchor+"|"+u.lang.rtl,E)),x(()=>{j(!0),o("show",v)},e.transitionDuration)}function ee(v){B(),M(),I(),x(()=>{M(!0),o("hide",v)},e.transitionDuration)}function I(){s!==void 0&&(s.disconnect(),s=void 0),r!==void 0&&(r(),r=void 0),d(),se(w,"tooltipTemp")}function E(){const v=g.value;T.value===null||!v||Ue({el:v,offset:e.offset,anchorEl:T.value,anchorOrigin:c.value,selfOrigin:k.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function te(v){if(u.platform.is.mobile===!0){me(),document.body.classList.add("non-selectable");const A=T.value,S=["touchmove","touchcancel","touchend","click"].map(N=>[A,N,"delayHide","passiveCapture"]);ue(w,"tooltipTemp",S)}x(()=>{J(v)},e.delay)}function oe(v){u.platform.is.mobile===!0&&(se(w,"tooltipTemp"),me(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),x(()=>{R(v)},e.hideDelay)}function ne(){if(e.noParentEvent===!0||T.value===null)return;const v=u.platform.is.mobile===!0?[[T.value,"touchstart","delayShow","passive"]]:[[T.value,"mouseenter","delayShow","passive"],[T.value,"mouseleave","delayHide","passive"]];ue(w,"anchor",v)}function Q(){if(T.value!==null||e.scrollTarget!==void 0){P.value=et(T.value,e.scrollTarget);const v=e.noParentEvent===!0?E:R;z(P.value,v)}}function U(){return b.value===!0?f("div",{...i,ref:g,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",i.class],style:[i.style,q.value],role:"tooltip"},Y(t.default)):null}function W(){return f(Le,$.value,U)}return K(I),Object.assign(a.proxy,{updatePosition:E}),Z}});function Be(e,t,o){t.handler?t.handler(e,o,o.caret):o.runCmd(t.cmd,t.param)}function ae(e){return f("div",{class:"q-editor__toolbar-group"},e)}function qe(e,t,o,i=!1){const r=i||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),s=[];if(t.tip&&e.$q.platform.is.desktop){const a=t.key?f("div",[f("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;s.push(f(ct,{delay:1e3},()=>[f("div",{innerHTML:t.tip}),a]))}return f(_,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:r?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:r&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(a){o&&o(),Be(a,t,e)}},()=>s)}function dt(e,t){const o=t.list==="only-icons";let i=t.label,r=t.icon!==null?t.icon:void 0,s,a;function u(){b.component.proxy.hide()}if(o)a=t.options.map(c=>{const k=c.type===void 0?e.caret.is(c.cmd,c.param):!1;return k&&(i=c.tip,r=c.icon!==null?c.icon:void 0),qe(e,c,u,k)}),s=e.toolbarBackgroundClass.value,a=[ae(a)];else{const c=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,k=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,p=t.list==="no-icons";a=t.options.map(m=>{const B=m.disable?m.disable(e):!1,x=m.type===void 0?e.caret.is(m.cmd,m.param):!1;x&&(i=m.tip,r=m.icon!==null?m.icon:void 0);const $=m.htmlTip;return f(tt,{active:x,activeClass:c,clickable:!0,disable:B,dense:!0,onClick(q){u(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),Be(q,m,e)}},()=>[p===!0?null:f(pe,{class:x?c:k,side:!0},()=>f(Ce,{name:m.icon!==null?m.icon:void 0})),f(pe,$?()=>f("div",{class:"text-no-wrap",innerHTML:m.htmlTip}):m.tip?()=>f("div",{class:"text-no-wrap"},m.tip):void 0)])}),s=[e.toolbarBackgroundClass.value,k]}const g=t.highlight&&i!==t.label,b=f(ut,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:g?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:g&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:i,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:r,contentClass:s,onShow:c=>e.emit("dropdownShow",c),onHide:c=>e.emit("dropdownHide",c),onBeforeShow:c=>e.emit("dropdownBeforeShow",c),onBeforeHide:c=>e.emit("dropdownBeforeHide",c)},()=>a);return b}function ft(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(o=>o.cmd==="viewsource")).map(t=>ae(t.map(o=>e.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?Y(e.slots[o.slot]):o.type==="dropdown"?dt(e,o):qe(e,o))))}function ht(e,t,o,i={}){const r=Object.keys(i);if(r.length===0)return{};const s={default_font:{cmd:"fontName",param:e,icon:o,tip:t}};return r.forEach(a=>{const u=i[a];s[a]={cmd:"fontName",param:u,icon:o,tip:u,htmlTip:`<font face="${u}">${u}</font>`}}),s}function gt(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let o=e.editLinkUrl.value;const i=()=>{e.caret.restore(),o!==e.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),e.editLinkUrl.value=null};return[f("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),f("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:r=>{ye(r),o=r.target.value},onKeydown:r=>{if(we(r)!==!0)switch(r.keyCode){case 13:return ce(r),i();case 27:ce(r),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),ae([f(_,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),f(_,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:i})])]}}let D=0;const mt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},pt=["update:fullscreen","fullscreen"];function vt(){const e=G(),{props:t,emit:o,proxy:i}=e;let r,s,a;const u=H(!1);Ne(e)===!0&&L(()=>i.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&c()}),L(()=>t.fullscreen,k=>{u.value!==k&&g()}),L(u,k=>{o("update:fullscreen",k),o("fullscreen",k)});function g(){u.value===!0?c():b()}function b(){u.value!==!0&&(u.value=!0,a=i.$el.parentNode,a.replaceChild(s,i.$el),document.body.appendChild(i.$el),D++,D===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:c},de.add(r))}function c(){u.value===!0&&(r!==void 0&&(de.remove(r),r=void 0),a.replaceChild(i.$el,s),u.value=!1,D=Math.max(0,D-1),D===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return $e(()=>{s=document.createElement("span")}),re(()=>{t.fullscreen===!0&&b()}),K(c),Object.assign(i,{toggleFullscreen:g,setFullscreen:b,exitFullscreen:c}),{inFullscreen:u,toggleFullscreen:g}}const yt=Object.prototype.toString,le=Object.prototype.hasOwnProperty,bt=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function ve(e){if(e!==Object(e)||bt.has(yt.call(e))===!0||e.constructor&&le.call(e,"constructor")===!1&&le.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||le.call(e,t)}function Pe(){let e,t,o,i,r,s,a=arguments[0]||{},u=1,g=!1;const b=arguments.length;for(typeof a=="boolean"&&(g=a,a=arguments[1]||{},u=2),Object(a)!==a&&typeof a!="function"&&(a={}),b===u&&(a=this,u--);u<b;u++)if((e=arguments[u])!==null)for(t in e)o=a[t],i=e[t],a!==i&&(g===!0&&i&&((r=Array.isArray(i))||ve(i)===!0)?(r===!0?s=Array.isArray(o)===!0?o:[]:s=ve(o)===!0?o:{},a[t]=Pe(g,s,i)):i!==void 0&&(a[t]=i));return a}var qt=X({name:"QEditor",props:{...ot,...mt,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default(){return[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]}},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...pt,"update:modelValue","keydown","click","mouseup","keyup","touchend","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(e,{slots:t,emit:o,attrs:i}){const{proxy:r,vnode:s}=G(),{$q:a}=r,u=nt(e,a),{inFullscreen:g,toggleFullscreen:b}=vt(),c=Ge(i,s),k=H(null),p=H(null),m=H(null),B=H(!1),x=y(()=>!e.readonly&&!e.disable);let $,q,P=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),$=window.getComputedStyle(document.body).fontFamily;const z=y(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),d=y(()=>{const n=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:n,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!x.value,size:"sm"}}),T=y(()=>{const n=a.lang.editor,l=a.iconSet.editor;return{bold:{cmd:"bold",icon:l.bold,tip:n.bold,key:66},italic:{cmd:"italic",icon:l.italic,tip:n.italic,key:73},strike:{cmd:"strikeThrough",icon:l.strikethrough,tip:n.strikethrough,key:83},underline:{cmd:"underline",icon:l.underline,tip:n.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:l.unorderedList,tip:n.unorderedList},ordered:{cmd:"insertOrderedList",icon:l.orderedList,tip:n.orderedList},subscript:{cmd:"subscript",icon:l.subscript,tip:n.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:l.superscript,tip:n.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:h=>h.caret&&!h.caret.can("link"),icon:l.hyperlink,tip:n.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:l.toggleFullscreen,tip:n.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:l.viewSource,tip:n.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:l.quote,tip:n.quote,key:81},left:{cmd:"justifyLeft",icon:l.left,tip:n.left},center:{cmd:"justifyCenter",icon:l.center,tip:n.center},right:{cmd:"justifyRight",icon:l.right,tip:n.right},justify:{cmd:"justifyFull",icon:l.justify,tip:n.justify},print:{type:"no-state",cmd:"print",icon:l.print,tip:n.print,key:80},outdent:{type:"no-state",disable:h=>h.caret&&!h.caret.can("outdent"),cmd:"outdent",icon:l.outdent,tip:n.outdent},indent:{type:"no-state",disable:h=>h.caret&&!h.caret.can("indent"),cmd:"indent",icon:l.indent,tip:n.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:l.removeFormat,tip:n.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:l.hr,tip:n.hr},undo:{type:"no-state",cmd:"undo",icon:l.undo,tip:n.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:l.redo,tip:n.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:l.heading1||l.heading,tip:n.heading1,htmlTip:`<h1 class="q-ma-none">${n.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:l.heading2||l.heading,tip:n.heading2,htmlTip:`<h2 class="q-ma-none">${n.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:l.heading3||l.heading,tip:n.heading3,htmlTip:`<h3 class="q-ma-none">${n.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:l.heading4||l.heading,tip:n.heading4,htmlTip:`<h4 class="q-ma-none">${n.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:l.heading5||l.heading,tip:n.heading5,htmlTip:`<h5 class="q-ma-none">${n.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:l.heading6||l.heading,tip:n.heading6,htmlTip:`<h6 class="q-ma-none">${n.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:l.heading,tip:n.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:l.code,htmlTip:`<code>${n.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:l.size1||l.size,tip:n.size1,htmlTip:`<font size="1">${n.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:l.size2||l.size,tip:n.size2,htmlTip:`<font size="2">${n.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:l.size3||l.size,tip:n.size3,htmlTip:`<font size="3">${n.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:l.size4||l.size,tip:n.size4,htmlTip:`<font size="4">${n.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:l.size5||l.size,tip:n.size5,htmlTip:`<font size="5">${n.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:l.size6||l.size,tip:n.size6,htmlTip:`<font size="6">${n.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:l.size7||l.size,tip:n.size7,htmlTip:`<font size="7">${n.size7}</font>`}}}),F=y(()=>{const n=e.definitions||{},l=e.definitions||e.fonts?Pe(!0,{},T.value,n,ht($,a.lang.editor.defaultFont,a.iconSet.editor.font,e.fonts)):T.value;return e.toolbar.map(h=>h.map(C=>{if(C.options)return{type:"dropdown",icon:C.icon,label:C.label,size:"sm",dense:!0,fixedLabel:C.fixedLabel,fixedIcon:C.fixedIcon,highlight:C.highlight,list:C.list,options:C.options.map(Oe=>l[Oe])};const O=l[C];return O?O.type==="no-state"||n[C]&&(O.cmd===void 0||T.value[O.cmd]&&T.value[O.cmd].type==="no-state")?O:Object.assign({type:"toggle"},O):{type:"slot",slot:C}}))}),w={$q:a,props:e,slots:t,emit:o,inFullscreen:g,toggleFullscreen:b,runCmd:A,isViewingSource:B,editLinkUrl:m,toolbarBackgroundClass:z,buttonProps:d,contentRef:p,buttons:F,setContent:v};L(()=>e.modelValue,n=>{P!==n&&(P=n,v(n,!0))}),L(m,n=>{o(`link-${n?"Show":"Hide"}`)});const J=y(()=>e.toolbar&&e.toolbar.length!==0),R=y(()=>{const n={},l=h=>{h.key&&(n[h.key]={cmd:h.cmd,param:h.param})};return F.value.forEach(h=>{h.forEach(C=>{C.options?C.options.forEach(l):l(C)})}),n}),j=y(()=>g.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),M=y(()=>`q-editor q-editor--${B.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(g.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(u.value===!0?" q-editor--dark q-dark":"")),Z=y(()=>[e.contentClass,"q-editor__content",{col:g.value,"overflow-auto":g.value||e.maxHeight}]),V=y(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});function ee(){if(p.value!==null){const n=`inner${B.value===!0?"Text":"HTML"}`,l=p.value[n];l!==e.modelValue&&(P=l,o("update:modelValue",l))}}function I(n){if(o("keydown",n),n.ctrlKey!==!0||we(n)===!0){S();return}const l=n.keyCode,h=R.value[l];if(h!==void 0){const{cmd:C,param:O}=h;be(n),A(C,O,!1)}}function E(n){S(),o("click",n)}function te(n){if(p.value!==null){const{scrollTop:l,scrollHeight:h}=p.value;q=h-l}w.caret.save(),o("blur",n)}function oe(n){Ee(()=>{p.value!==null&&q!==void 0&&(p.value.scrollTop=p.value.scrollHeight-q)}),o("focus",n)}function ne(n){const l=k.value;if(l!==null&&l.contains(n.target)===!0&&(n.relatedTarget===null||l.contains(n.relatedTarget)!==!0)){const h=`inner${B.value===!0?"Text":"HTML"}`;w.caret.restorePosition(p.value[h].length),S()}}function Q(n){const l=k.value;l!==null&&l.contains(n.target)===!0&&(n.relatedTarget===null||l.contains(n.relatedTarget)!==!0)&&(w.caret.savePosition(),S())}function U(){q=void 0}function W(n){w.caret.save()}function v(n,l){if(p.value!==null){l===!0&&w.caret.savePosition();const h=`inner${B.value===!0?"Text":"HTML"}`;p.value[h]=n,l===!0&&(w.caret.restorePosition(p.value[h].length),S())}}function A(n,l,h=!0){N(),w.caret.restore(),w.caret.apply(n,l,()=>{N(),w.caret.save(),h&&S()})}function S(){setTimeout(()=>{m.value=null,r.$forceUpdate()},1)}function N(){Xe(()=>{p.value!==null&&p.value.focus({preventScroll:!0})})}function ze(){return p.value}return re(()=>{w.caret=r.caret=new lt(p.value,w),v(e.modelValue),S(),document.addEventListener("selectionchange",W)}),K(()=>{document.removeEventListener("selectionchange",W)}),Object.assign(r,{runCmd:A,refreshToolbar:S,focus:N,getContentEl:ze}),()=>{let n;if(J.value){const l=[f("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+z.value},ft(w))];m.value!==null&&l.push(f("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+z.value},gt(w))),n=f("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},l)}return f("div",{ref:k,class:M.value,style:{height:g.value===!0?"100%":null},...V.value,onFocusin:ne,onFocusout:Q},[n,f("div",{ref:p,style:j.value,class:Z.value,contenteditable:x.value,placeholder:e.placeholder,...c.listeners.value,onInput:ee,onKeydown:I,onClick:E,onBlur:te,onFocus:oe,onMousedown:U,onTouchstartPassive:U})])}}});export{qt as Q};