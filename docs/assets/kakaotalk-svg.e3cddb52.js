import{e as Ce,w as j,o as de,a as oe,a0 as Me,g as X,r as D,c as y,a1 as Se,a2 as ke,a3 as Re,s as qe,d as Y,p as _e,a4 as Ae,i as Ve,h as M,x as J,Y as Fe,a5 as Ee,k as Be,y as fe}from"./index.fc7bd4ea.js";import{Q as ce,h as Te}from"./QBtn.056421a5.js";import{u as $e,a as Oe,b as Ie,d as Pe}from"./use-form.0b73dfac.js";import{h as G,c as De}from"./render.e8d89c8a.js";function je({validate:e,resetValidation:t,requiresQForm:u}){const i=Ce(Me,!1);if(i!==!1){const{props:f,proxy:d}=X();Object.assign(d,{validate:e,resetValidation:t}),j(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),de(()=>{f.disable!==!0&&i.bindComponent(d)}),oe(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const ve=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ge=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,me=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ee=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,te=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ae={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ve.test(e),hexaColor:e=>ge.test(e),hexOrHexaColor:e=>me.test(e),rgbColor:e=>ee.test(e),rgbaColor:e=>te.test(e),rgbOrRgbaColor:e=>ee.test(e)||te.test(e),hexOrRgbColor:e=>ve.test(e)||ee.test(e),hexaOrRgbaColor:e=>ge.test(e)||te.test(e),anyColor:e=>me.test(e)||ee.test(e)||te.test(e)},ze=[!0,!1,"ondemand"],Ne={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>ze.includes(e)}};function Le(e,t){const{props:u,proxy:i}=X(),f=D(!1),d=D(null),c=D(null);je({validate:$,resetValidation:F});let k=0,B;const R=y(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),x=y(()=>u.disable!==!0&&R.value===!0),p=y(()=>u.error===!0||f.value===!0),H=y(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);j(()=>u.modelValue,()=>{L()}),j(()=>u.reactiveRules,P=>{P===!0?B===void 0&&(B=j(()=>u.rules,()=>{L(!0)})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),j(e,P=>{P===!0?c.value===null&&(c.value=!1):c.value===!1&&(c.value=!0,x.value===!0&&u.lazyRules!=="ondemand"&&t.value===!1&&I())});function F(){k++,t.value=!1,c.value=null,f.value=!1,d.value=null,I.cancel()}function $(P=u.modelValue){if(x.value!==!0)return!0;const _=++k,Q=t.value!==!0?()=>{c.value=!0}:()=>{},N=(S,w)=>{S===!0&&Q(),f.value=S,d.value=w||null,t.value=!1},z=[];for(let S=0;S<u.rules.length;S++){const w=u.rules[S];let E;if(typeof w=="function"?E=w(P,ae):typeof w=="string"&&ae[w]!==void 0&&(E=ae[w](P)),E===!1||typeof E=="string")return N(!0,E),!1;E!==!0&&E!==void 0&&z.push(E)}return z.length===0?(N(!1),!0):(t.value=!0,Promise.all(z).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return _===k&&N(!1),!0;const w=S.find(E=>E===!1||typeof E=="string");return _===k&&N(w!==void 0,w),w===void 0},S=>(_===k&&(console.error(S),N(!0)),!1)))}function L(P){x.value===!0&&u.lazyRules!=="ondemand"&&(c.value===!0||u.lazyRules!==!0&&P!==!0)&&I()}const I=Se($,0);return oe(()=>{B!==void 0&&B(),I.cancel()}),Object.assign(i,{resetValidation:F,validate:$}),ke(i,"hasError",()=>p.value),{isDirtyModel:c,hasRules:R,hasError:p,errorMessage:H,validate:$,resetValidation:F}}const he=/^on[A-Z]/;function Ue(e,t){const u={listeners:D({}),attributes:D({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&he.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)he.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return Re(i),i(),u}let re,le=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const Ze=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const u=new Uint8Array(t);return e.getRandomValues(u),u}}return t=>{const u=[];for(let i=t;i>0;i--)u.push(Math.floor(Math.random()*256));return u}})(),pe=4096;function Ke(){(re===void 0||le+16>pe)&&(le=0,re=Ze(pe));const e=Array.prototype.slice.call(re,le,le+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}let ue=[],He=[];function xe(e){He.length===0?e():ue.push(e)}function Qe(e){ue=ue.filter(t=>t!==e)}function ie(e){return e===void 0?`f_${Ke()}`:e}function se(e){return e!=null&&(""+e).length!==0}const Ye={...$e,...Ne,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},We=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function Je(){const{props:e,attrs:t,proxy:u,vnode:i}=X();return{isDark:Oe(e,u.$q),editable:y(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:D(!1),focused:D(!1),hasPopupOpen:!1,splitAttrs:Ue(t,i),targetUid:D(ie(e.for)),rootRef:D(null),targetRef:D(null),controlRef:D(null)}}function Xe(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=X(),{$q:c}=d;let k=null;e.hasValue===void 0&&(e.hasValue=y(()=>se(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{u("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:o}),Object.assign(e,{clearValue:s,onControlFocusin:r,onControlFocusout:o,focus:w}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:B,hasRules:R,hasError:x,errorMessage:p,resetValidation:H}=Le(e.focused,e.innerLoading),F=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),$=y(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),L=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=y(()=>`q-field row no-wrap items-start q-field--${L.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(F.value===!0?" q-field--float":"")+(_.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&$.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),P=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),_=y(()=>t.labelSlot===!0||t.label!==void 0),Q=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),N=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:F.value,modelValue:t.modelValue,emitValue:e.emitValue})),z=y(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});j(()=>t.for,l=>{e.targetUid.value=ie(l)});function S(){const l=document.activeElement;let h=e.targetRef!==void 0&&e.targetRef.value;h&&(l===null||l.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h&&h!==l&&h.focus({preventScroll:!0}))}function w(){xe(S)}function E(){Qe(S);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function r(l){k!==null&&(clearTimeout(k),k=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",l))}function o(l,h){k!==null&&clearTimeout(k),k=setTimeout(()=>{k=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",l)),h!==void 0&&h())})}function s(l){qe(l),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),u("clear",t.modelValue),Y(()=>{H(),c.platform.is.mobile!==!0&&(B.value=!1)})}function a(){const l=[];return i.prepend!==void 0&&l.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:J},i.prepend())),l.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},g())),x.value===!0&&t.noErrorIcon===!1&&l.push(C("error",[M(ce,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(C("inner-loading-append",i.loading!==void 0?i.loading():[M(Te,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(C("inner-clearable-append",[M(ce,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&l.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:J},i.append())),e.getInnerAppend!==void 0&&l.push(C("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function g(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):i.rawControl!==void 0?l.push(i.rawControl()):i.control!==void 0&&l.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(N.value))),_.value===!0&&l.push(M("div",{class:Q.value},G(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(G(i.default))}function v(){let l,h;x.value===!0?p.value!==null?(l=[M("div",{role:"alert"},p.value)],h=`q--slot-error-${p.value}`):(l=G(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[M("div",t.hint)],h=`q--slot-hint-${t.hint}`):(l=G(i.hint),h="q--slot-hint"));const Z=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&Z===!1&&l===void 0)return;const b=M("div",{key:h,class:"q-field__messages col"},l);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:J},[t.hideBottomSpace===!0?b:M(Fe,{name:"q-transition--field-message"},()=>b),Z===!0?M("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function C(l,h){return h===null?null:M("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let m=!1;return _e(()=>{m=!0}),Ae(()=>{m===!0&&t.autofocus===!0&&d.focus()}),de(()=>{Ve.value===!0&&t.for===void 0&&(e.targetUid.value=ie()),t.autofocus===!0&&d.focus()}),oe(()=>{k!==null&&clearTimeout(k)}),Object.assign(d,{focus:w,blur:E}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...z.value}:z.value;return M("label",{ref:e.rootRef,class:[I.value,f.class],style:f.style,...h},[i.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:J},i.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:P.value,tabindex:-1,...e.controlEvents},a()),$.value===!0?v():null]),i.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:J},i.after()):null])}}const be={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ne={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},we=Object.keys(ne);we.forEach(e=>{ne[e].regex=new RegExp(ne[e].pattern)});const Ge=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+we.join("")+"])|(.)","g"),ye=/[.*+?^${}()|[\]\\]/g,A=String.fromCharCode(1),et={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function tt(e,t,u,i){let f,d,c,k,B,R;const x=D(null),p=D(F());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}j(()=>e.type+e.autogrow,L),j(()=>e.mask,r=>{if(r!==void 0)I(p.value,!0);else{const o=w(p.value);L(),e.modelValue!==o&&t("update:modelValue",o)}}),j(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&I(p.value,!0)}),j(()=>e.unmaskedValue,()=>{x.value===!0&&I(p.value)});function F(){if(L(),x.value===!0){const r=z(w(e.modelValue));return e.fillMask!==!1?E(r):r}return e.modelValue}function $(r){if(r<f.length)return f.slice(-r);let o="",s=f;const a=s.indexOf(A);if(a>-1){for(let g=r-s.length;g>0;g--)o+=A;s=s.slice(0,a)+o+s.slice(a)}return s}function L(){if(x.value=e.mask!==void 0&&e.mask.length!==0&&H(),x.value===!1){k=void 0,f="",d="";return}const r=be[e.mask]===void 0?e.mask:be[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=o.replace(ye,"\\$&"),a=[],g=[],v=[];let C=e.reverseFillMask===!0,m="",l="";r.replace(Ge,(V,n,q,K,U)=>{if(K!==void 0){const O=ne[K];v.push(O),l=O.negate,C===!0&&(g.push("(?:"+l+"+)?("+O.pattern+"+)?(?:"+l+"+)?("+O.pattern+"+)?"),C=!1),g.push("(?:"+l+"+)?("+O.pattern+")?")}else if(q!==void 0)m="\\"+(q==="\\"?"":q),v.push(q),a.push("([^"+m+"]+)?"+m+"?");else{const O=n!==void 0?n:U;m=O==="\\"?"\\\\\\\\":O.replace(ye,"\\\\$&"),v.push(O),a.push("([^"+m+"]+)?"+m+"?")}});const h=new RegExp("^"+a.join("")+"("+(m===""?".":"[^"+m+"]")+"+)?"+(m===""?"":"["+m+"]*")+"$"),Z=g.length-1,b=g.map((V,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+V):n===Z?new RegExp("^"+V+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+V));c=v,k=V=>{const n=h.exec(e.reverseFillMask===!0?V:V.slice(0,v.length+1));n!==null&&(V=n.slice(1).join(""));const q=[],K=b.length;for(let U=0,O=V;U<K;U++){const W=b[U].exec(O);if(W===null)break;O=O.slice(W.shift().length),q.push(...W)}return q.length!==0?q.join(""):V},f=v.map(V=>typeof V=="string"?V:A).join(""),d=f.split(A).join(o)}function I(r,o,s){const a=i.value,g=a.selectionEnd,v=a.value.length-g,C=w(r);o===!0&&L();const m=z(C),l=e.fillMask!==!1?E(m):m,h=p.value!==l;a.value!==l&&(a.value=l),h===!0&&(p.value=l),document.activeElement===a&&Y(()=>{if(l===d){const b=e.reverseFillMask===!0?d.length:0;a.setSelectionRange(b,b,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const b=a.selectionEnd;let V=g-1;for(let n=B;n<=V&&n<b;n++)f[n]!==A&&V++;_.right(a,V);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const b=e.reverseFillMask===!0?g===0?l.length>m.length?1:0:Math.max(0,l.length-(l===d?0:Math.min(m.length,v)+1))+1:g;a.setSelectionRange(b,b,"forward");return}if(e.reverseFillMask===!0)if(h===!0){const b=Math.max(0,l.length-(l===d?0:Math.min(m.length,v+1)));b===1&&g===1?a.setSelectionRange(b,b,"forward"):_.rightReverse(a,b)}else{const b=l.length-v;a.setSelectionRange(b,b,"backward")}else if(h===!0){const b=Math.max(0,f.indexOf(A),Math.min(m.length,g)-1);_.right(a,b)}else{const b=g-1;_.right(a,b)}});const Z=e.unmaskedValue===!0?w(l):l;String(e.modelValue)!==Z&&u(Z,!0)}function P(r,o,s){const a=z(w(r.value));o=Math.max(0,f.indexOf(A),Math.min(a.length,o)),B=o,r.setSelectionRange(o,s,"forward")}const _={left(r,o){const s=f.slice(o-1).indexOf(A)===-1;let a=Math.max(0,o-1);for(;a>=0;a--)if(f[a]===A){o=a,s===!0&&o++;break}if(a<0&&f[o]!==void 0&&f[o]!==A)return _.right(r,0);o>=0&&r.setSelectionRange(o,o,"backward")},right(r,o){const s=r.value.length;let a=Math.min(s,o+1);for(;a<=s;a++)if(f[a]===A){o=a;break}else f[a-1]===A&&(o=a);if(a>s&&f[o-1]!==void 0&&f[o-1]!==A)return _.left(r,s);r.setSelectionRange(o,o,"forward")},leftReverse(r,o){const s=$(r.value.length);let a=Math.max(0,o-1);for(;a>=0;a--)if(s[a-1]===A){o=a;break}else if(s[a]===A&&(o=a,a===0))break;if(a<0&&s[o]!==void 0&&s[o]!==A)return _.rightReverse(r,0);o>=0&&r.setSelectionRange(o,o,"backward")},rightReverse(r,o){const s=r.value.length,a=$(s),g=a.slice(0,o+1).indexOf(A)===-1;let v=Math.min(s,o+1);for(;v<=s;v++)if(a[v-1]===A){o=v,o>0&&g===!0&&o--;break}if(v>s&&a[o-1]!==void 0&&a[o-1]!==A)return _.leftReverse(r,s);r.setSelectionRange(o,o,"forward")}};function Q(r){t("click",r),R=void 0}function N(r){if(t("keydown",r),Ee(r)===!0)return;const o=i.value,s=o.selectionStart,a=o.selectionEnd;if(r.shiftKey||(R=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&R===void 0&&(R=o.selectionDirection==="forward"?s:a);const g=_[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),g(o,R===s?a:s),r.shiftKey){const v=o.selectionStart;o.setSelectionRange(Math.min(R,v),Math.max(R,v),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&s===a?(_.left(o,s),o.setSelectionRange(o.selectionStart,a,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&s===a&&(_.rightReverse(o,a),o.setSelectionRange(s,o.selectionEnd,"forward"))}function z(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return S(r);const o=c;let s=0,a="";for(let g=0;g<o.length;g++){const v=r[s],C=o[g];if(typeof C=="string")a+=C,v===C&&s++;else if(v!==void 0&&C.regex.test(v))a+=C.transform!==void 0?C.transform(v):v,s++;else return a}return a}function S(r){const o=c,s=f.indexOf(A);let a=r.length-1,g="";for(let v=o.length-1;v>=0&&a>-1;v--){const C=o[v];let m=r[a];if(typeof C=="string")g=C+g,m===C&&a--;else if(m!==void 0&&C.regex.test(m))do g=(C.transform!==void 0?C.transform(m):m)+g,a--,m=r[a];while(s===v&&m!==void 0&&C.regex.test(m));else return g}return g}function w(r){return typeof r!="string"||k===void 0?typeof r=="number"?k(""+r):r:k(r)}function E(r){return d.length-r.length<=0?r:e.reverseFillMask===!0&&r.length!==0?d.slice(0,-r.length)+r:r+d.slice(r.length)}return{innerValue:p,hasMask:x,moveCursorForPaste:P,updateMaskValue:I,onMaskedKeydown:N,onMaskedClick:Q}}function lt(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return u()}):y(u)}const nt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ot=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,at=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,rt=/[a-z0-9_ -]$/i;function ut(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Be.is.firefox===!0?rt.test(u.data)===!1:nt.test(u.data)===!0||ot.test(u.data)===!0||at.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}var ct=De({name:"QInput",inheritAttrs:!1,props:{...Ye,...et,...Ie,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...We,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=X(),{$q:f}=i,d={};let c=NaN,k,B,R=null,x;const p=D(null),H=Pe(e),{innerValue:F,hasMask:$,moveCursorForPaste:L,updateMaskValue:I,onMaskedKeydown:P,onMaskedClick:_}=tt(e,t,m,p),Q=lt(e,!0),N=y(()=>se(F.value)),z=ut(v),S=Je(),w=y(()=>e.type==="textarea"||e.autogrow===!0),E=y(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),r=y(()=>{const n={...S.splitAttrs.listeners.value,onInput:v,onPaste:g,onChange:h,onBlur:Z,onFocus:fe};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=z,$.value===!0&&(n.onKeydown=P,n.onClick=_),e.autogrow===!0&&(n.onAnimationend=C),n}),o=y(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});j(()=>e.type,()=>{p.value&&(p.value.value=e.modelValue)}),j(()=>e.modelValue,n=>{if($.value===!0){if(B===!0&&(B=!1,String(n)===c))return;I(n)}else F.value!==n&&(F.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(k===!0?k=!1:delete d.value));e.autogrow===!0&&Y(l)}),j(()=>e.autogrow,n=>{n===!0?Y(l):p.value!==null&&u.rows>0&&(p.value.style.height="auto")}),j(()=>e.dense,()=>{e.autogrow===!0&&Y(l)});function s(){xe(()=>{const n=document.activeElement;p.value!==null&&p.value!==n&&(n===null||n.id!==S.targetUid.value)&&p.value.focus({preventScroll:!0})})}function a(){p.value!==null&&p.value.select()}function g(n){if($.value===!0&&e.reverseFillMask!==!0){const q=n.target;L(q,q.selectionStart,q.selectionEnd)}t("paste",n)}function v(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const q=n.target.value;if(n.target.qComposing===!0){d.value=q;return}if($.value===!0)I(q,!1,n.inputType);else if(m(q),E.value===!0&&n.target===document.activeElement){const{selectionStart:K,selectionEnd:U}=n.target;K!==void 0&&U!==void 0&&Y(()=>{n.target===document.activeElement&&q.indexOf(n.target.value)===0&&n.target.setSelectionRange(K,U)})}e.autogrow===!0&&l()}function C(n){t("animationend",n),l()}function m(n,q){x=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,q===!0&&(B=!0),t("update:modelValue",n),Y(()=>{c===n&&(c=NaN)})),x=void 0},e.type==="number"&&(k=!0,d.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=n,R=setTimeout(x,e.debounce)):x()}function l(){requestAnimationFrame(()=>{const n=p.value;if(n!==null){const q=n.parentNode.style,{scrollTop:K}=n,{overflowY:U,maxHeight:O}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),W=U!==void 0&&U!=="scroll";W===!0&&(n.style.overflowY="hidden"),q.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",W===!0&&(n.style.overflowY=parseInt(O,10)<n.scrollHeight?"auto":"hidden"),q.marginBottom="",n.scrollTop=K}})}function h(n){z(n),R!==null&&(clearTimeout(R),R=null),x!==void 0&&x(),t("change",n.target.value)}function Z(n){n!==void 0&&fe(n),R!==null&&(clearTimeout(R),R=null),x!==void 0&&x(),k=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{p.value!==null&&(p.value.value=F.value!==void 0?F.value:"")})}function b(){return d.hasOwnProperty("value")===!0?d.value:F.value!==void 0?F.value:""}oe(()=>{Z()}),de(()=>{e.autogrow===!0&&l()}),Object.assign(S,{innerValue:F,fieldClass:y(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:p,emitValue:m,hasValue:N,floatingLabel:y(()=>N.value===!0&&(e.type!=="number"||isNaN(F.value)===!1)||se(e.displayValue)),getControl:()=>M(w.value===!0?"textarea":"input",{ref:p,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...r.value,...e.type!=="file"?{value:b()}:Q.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},b()),M("span",e.shadowText)])});const V=Xe(S);return Object.assign(i,{focus:s,select:a,getNativeElement:()=>p.value}),ke(i,"nativeEl",()=>p.value),V}}),vt="/front/assets/google-svg.687c297a.svg",gt="/front/assets/naver-svg.3f7dbc5c.svg",mt="/front/assets/kakaotalk-svg.78655764.svg";export{ct as Q,vt as _,gt as a,mt as b};