(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const Du=()=>{};var jo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ku=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ec={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|l>>4;let g=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(g=64)),r.push(e[m],e[E],e[g],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(tc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ku(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||E==null)throw new Nu;const g=o<<2|l>>4;if(r.push(g),d!==64){const S=l<<4&240|d>>2;if(r.push(S),E!==64){const k=d<<6&192|E;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Nu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xu=function(n){const t=tc(n);return ec.encodeByteArray(t,!0)},br=function(n){return xu(n).replace(/\./g,"")},Mu=function(n){try{return ec.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=()=>Ou().__FIREBASE_DEFAULTS__,Fu=()=>{if(typeof process>"u"||typeof jo>"u")return;const n=jo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Bu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Mu(n[1]);return t&&JSON.parse(t)},ci=()=>{try{return Du()||Lu()||Fu()||Bu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Uu=n=>{var t,e;return(e=(t=ci())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},$u=n=>{const t=Uu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},nc=()=>{var n;return(n=ci())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qu(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[br(JSON.stringify(e)),br(JSON.stringify(a)),""].join(".")}const wn={};function Hu(){const n={prod:[],emulator:[]};for(const t of Object.keys(wn))wn[t]?n.emulator.push(t):n.prod.push(t);return n}function Gu(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let qo=!1;function Ku(n,t){if(typeof window>"u"||typeof document>"u"||!li(window.location.host)||wn[n]===t||wn[n]||qo)return;wn[n]=t;function e(g){return`__firebase__banner__${g}`}const r="__firebase__banner",o=Hu().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function h(g,S){g.setAttribute("width","24"),g.setAttribute("id",S),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{qo=!0,a()},g}function m(g,S){g.setAttribute("id",S),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function E(){const g=Gu(r),S=e("text"),k=document.getElementById(S)||document.createElement("span"),V=e("learnmore"),D=document.getElementById(V)||document.createElement("a"),j=e("preprendIcon"),U=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const q=g.element;l(q),m(D,V);const X=d();h(U,j),q.append(U,k,D,X),document.body.appendChild(q)}o?(k.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qu(){var n;const t=(n=ci())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xu(){return!Qu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ju(){try{return typeof indexedDB=="object"}catch{return!1}}function Yu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="FirebaseError";class Ye extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Zu,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rc.prototype.create)}}class rc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?th(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ye(s,l,r)}}function th(n,t){return n.replace(eh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const eh=/\{\$([^}]+)}/g;function Rr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(zo(o)&&zo(a)){if(!Rr(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function zo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n){return n&&n._delegate?n._delegate:n}class Vn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ju;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(sh(t))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=we){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=we){return this.instances.has(t)}getOptions(t=we){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=we){return this.component?this.component.multipleInstances?t:we:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rh(n){return n===we?void 0:n}function sh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new nh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const oh={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},ah=G.INFO,ch={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},lh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=ch[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sc{constructor(t){this.name=t,this._logLevel=ah,this._logHandler=lh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in G))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?oh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...t),this._logHandler(this,G.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...t),this._logHandler(this,G.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,G.INFO,...t),this._logHandler(this,G.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,G.WARN,...t),this._logHandler(this,G.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...t),this._logHandler(this,G.ERROR,...t)}}const uh=(n,t)=>t.some(e=>n instanceof e);let Ho,Go;function hh(){return Ho||(Ho=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dh(){return Go||(Go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ic=new WeakMap,Os=new WeakMap,oc=new WeakMap,Ps=new WeakMap,ui=new WeakMap;function fh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(oe(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ic.set(e,n)}).catch(()=>{}),ui.set(t,n),t}function mh(n){if(Os.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Os.set(n,t)}let Ls={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Os.get(n);if(t==="objectStoreNames")return n.objectStoreNames||oc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return oe(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function ph(n){Ls=n(Ls)}function gh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Cs(this),t,...e);return oc.set(r,t.sort?t.sort():[t]),oe(r)}:dh().includes(n)?function(...t){return n.apply(Cs(this),t),oe(ic.get(this))}:function(...t){return oe(n.apply(Cs(this),t))}}function yh(n){return typeof n=="function"?gh(n):(n instanceof IDBTransaction&&mh(n),uh(n,hh())?new Proxy(n,Ls):n)}function oe(n){if(n instanceof IDBRequest)return fh(n);if(Ps.has(n))return Ps.get(n);const t=yh(n);return t!==n&&(Ps.set(n,t),ui.set(t,n)),t}const Cs=n=>ui.get(n);function _h(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=oe(a);return r&&a.addEventListener("upgradeneeded",h=>{r(oe(a.result),h.oldVersion,h.newVersion,oe(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Eh=["get","getKey","getAll","getAllKeys","count"],vh=["put","add","delete","clear"],Vs=new Map;function Ko(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Vs.get(t))return Vs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=vh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Eh.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&h.done]))[0]};return Vs.set(t,o),o}ph(n=>({...n,get:(t,e,r)=>Ko(t,e)||n.get(t,e,r),has:(t,e)=>!!Ko(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ih(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ih(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Fs="@firebase/app",Wo="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new sc("@firebase/app"),wh="@firebase/app-compat",Ah="@firebase/analytics-compat",bh="@firebase/analytics",Rh="@firebase/app-check-compat",Sh="@firebase/app-check",Ph="@firebase/auth",Ch="@firebase/auth-compat",Vh="@firebase/database",Dh="@firebase/data-connect",kh="@firebase/database-compat",Nh="@firebase/functions",xh="@firebase/functions-compat",Mh="@firebase/installations",Oh="@firebase/installations-compat",Lh="@firebase/messaging",Fh="@firebase/messaging-compat",Bh="@firebase/performance",Uh="@firebase/performance-compat",$h="@firebase/remote-config",jh="@firebase/remote-config-compat",qh="@firebase/storage",zh="@firebase/storage-compat",Hh="@firebase/firestore",Gh="@firebase/ai",Kh="@firebase/firestore-compat",Wh="firebase",Qh="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="[DEFAULT]",Xh={[Fs]:"fire-core",[wh]:"fire-core-compat",[bh]:"fire-analytics",[Ah]:"fire-analytics-compat",[Sh]:"fire-app-check",[Rh]:"fire-app-check-compat",[Ph]:"fire-auth",[Ch]:"fire-auth-compat",[Vh]:"fire-rtdb",[Dh]:"fire-data-connect",[kh]:"fire-rtdb-compat",[Nh]:"fire-fn",[xh]:"fire-fn-compat",[Mh]:"fire-iid",[Oh]:"fire-iid-compat",[Lh]:"fire-fcm",[Fh]:"fire-fcm-compat",[Bh]:"fire-perf",[Uh]:"fire-perf-compat",[$h]:"fire-rc",[jh]:"fire-rc-compat",[qh]:"fire-gcs",[zh]:"fire-gcs-compat",[Hh]:"fire-fst",[Kh]:"fire-fst-compat",[Gh]:"fire-vertex","fire-js":"fire-js",[Wh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Map,Jh=new Map,Us=new Map;function Qo(n,t){try{n.container.addComponent(t)}catch(e){Xt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Pr(n){const t=n.name;if(Us.has(t))return Xt.debug(`There were multiple attempts to register component ${t}.`),!1;Us.set(t,n);for(const e of Sr.values())Qo(e,n);for(const e of Jh.values())Qo(e,n);return!0}function Yh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Zh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ae=new rc("app","Firebase",td);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd=Qh;function ac(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Bs,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw ae.create("bad-app-name",{appName:String(s)});if(e||(e=nc()),!e)throw ae.create("no-options");const o=Sr.get(s);if(o){if(Rr(e,o.options)&&Rr(r,o.config))return o;throw ae.create("duplicate-app",{appName:s})}const a=new ih(s);for(const h of Us.values())a.addComponent(h);const l=new ed(e,r,a);return Sr.set(s,l),l}function rd(n=Bs){const t=Sr.get(n);if(!t&&n===Bs&&nc())return ac();if(!t)throw ae.create("no-app",{appName:n});return t}function ze(n,t,e){var r;let s=(r=Xh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xt.warn(l.join(" "));return}Pr(new Vn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="firebase-heartbeat-database",id=1,Dn="firebase-heartbeat-store";let Ds=null;function cc(){return Ds||(Ds=_h(sd,id,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Dn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ae.create("idb-open",{originalErrorMessage:n.message})})),Ds}async function od(n){try{const e=(await cc()).transaction(Dn),r=await e.objectStore(Dn).get(lc(n));return await e.done,r}catch(t){if(t instanceof Ye)Xt.warn(t.message);else{const e=ae.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Xt.warn(e.message)}}}async function Xo(n,t){try{const r=(await cc()).transaction(Dn,"readwrite");await r.objectStore(Dn).put(t,lc(n)),await r.done}catch(e){if(e instanceof Ye)Xt.warn(e.message);else{const r=ae.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(r.message)}}}function lc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=1024,cd=30;class ld{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new hd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Jo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>cd){const a=dd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jo(),{heartbeatsToSend:r,unsentEntries:s}=ud(this._heartbeatsCache.heartbeats),o=br(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Xt.warn(e),""}}}function Jo(){return new Date().toISOString().substring(0,10)}function ud(n,t=ad){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Yo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Yo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class hd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ju()?Yu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await od(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Xo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Yo(n){return br(JSON.stringify({version:2,heartbeats:n})).length}function dd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n){Pr(new Vn("platform-logger",t=>new Th(t),"PRIVATE")),Pr(new Vn("heartbeat",t=>new ld(t),"PRIVATE")),ze(Fs,Wo,n),ze(Fs,Wo,"esm2017"),ze("fire-js","")}fd("");var Zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ce,uc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,p){function _(){}_.prototype=p.prototype,I.D=p.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(v,T,A){for(var y=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)y[Dt-2]=arguments[Dt];return p.prototype[T].apply(v,y)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,_){_||(_=0);var v=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)v[T]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(T=0;16>T;++T)v[T]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=I.g[0],_=I.g[1],T=I.g[2];var A=I.g[3],y=p+(A^_&(T^A))+v[0]+3614090360&4294967295;p=_+(y<<7&4294967295|y>>>25),y=A+(T^p&(_^T))+v[1]+3905402710&4294967295,A=p+(y<<12&4294967295|y>>>20),y=T+(_^A&(p^_))+v[2]+606105819&4294967295,T=A+(y<<17&4294967295|y>>>15),y=_+(p^T&(A^p))+v[3]+3250441966&4294967295,_=T+(y<<22&4294967295|y>>>10),y=p+(A^_&(T^A))+v[4]+4118548399&4294967295,p=_+(y<<7&4294967295|y>>>25),y=A+(T^p&(_^T))+v[5]+1200080426&4294967295,A=p+(y<<12&4294967295|y>>>20),y=T+(_^A&(p^_))+v[6]+2821735955&4294967295,T=A+(y<<17&4294967295|y>>>15),y=_+(p^T&(A^p))+v[7]+4249261313&4294967295,_=T+(y<<22&4294967295|y>>>10),y=p+(A^_&(T^A))+v[8]+1770035416&4294967295,p=_+(y<<7&4294967295|y>>>25),y=A+(T^p&(_^T))+v[9]+2336552879&4294967295,A=p+(y<<12&4294967295|y>>>20),y=T+(_^A&(p^_))+v[10]+4294925233&4294967295,T=A+(y<<17&4294967295|y>>>15),y=_+(p^T&(A^p))+v[11]+2304563134&4294967295,_=T+(y<<22&4294967295|y>>>10),y=p+(A^_&(T^A))+v[12]+1804603682&4294967295,p=_+(y<<7&4294967295|y>>>25),y=A+(T^p&(_^T))+v[13]+4254626195&4294967295,A=p+(y<<12&4294967295|y>>>20),y=T+(_^A&(p^_))+v[14]+2792965006&4294967295,T=A+(y<<17&4294967295|y>>>15),y=_+(p^T&(A^p))+v[15]+1236535329&4294967295,_=T+(y<<22&4294967295|y>>>10),y=p+(T^A&(_^T))+v[1]+4129170786&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^T&(p^_))+v[6]+3225465664&4294967295,A=p+(y<<9&4294967295|y>>>23),y=T+(p^_&(A^p))+v[11]+643717713&4294967295,T=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(T^A))+v[0]+3921069994&4294967295,_=T+(y<<20&4294967295|y>>>12),y=p+(T^A&(_^T))+v[5]+3593408605&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^T&(p^_))+v[10]+38016083&4294967295,A=p+(y<<9&4294967295|y>>>23),y=T+(p^_&(A^p))+v[15]+3634488961&4294967295,T=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(T^A))+v[4]+3889429448&4294967295,_=T+(y<<20&4294967295|y>>>12),y=p+(T^A&(_^T))+v[9]+568446438&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^T&(p^_))+v[14]+3275163606&4294967295,A=p+(y<<9&4294967295|y>>>23),y=T+(p^_&(A^p))+v[3]+4107603335&4294967295,T=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(T^A))+v[8]+1163531501&4294967295,_=T+(y<<20&4294967295|y>>>12),y=p+(T^A&(_^T))+v[13]+2850285829&4294967295,p=_+(y<<5&4294967295|y>>>27),y=A+(_^T&(p^_))+v[2]+4243563512&4294967295,A=p+(y<<9&4294967295|y>>>23),y=T+(p^_&(A^p))+v[7]+1735328473&4294967295,T=A+(y<<14&4294967295|y>>>18),y=_+(A^p&(T^A))+v[12]+2368359562&4294967295,_=T+(y<<20&4294967295|y>>>12),y=p+(_^T^A)+v[5]+4294588738&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^T)+v[8]+2272392833&4294967295,A=p+(y<<11&4294967295|y>>>21),y=T+(A^p^_)+v[11]+1839030562&4294967295,T=A+(y<<16&4294967295|y>>>16),y=_+(T^A^p)+v[14]+4259657740&4294967295,_=T+(y<<23&4294967295|y>>>9),y=p+(_^T^A)+v[1]+2763975236&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^T)+v[4]+1272893353&4294967295,A=p+(y<<11&4294967295|y>>>21),y=T+(A^p^_)+v[7]+4139469664&4294967295,T=A+(y<<16&4294967295|y>>>16),y=_+(T^A^p)+v[10]+3200236656&4294967295,_=T+(y<<23&4294967295|y>>>9),y=p+(_^T^A)+v[13]+681279174&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^T)+v[0]+3936430074&4294967295,A=p+(y<<11&4294967295|y>>>21),y=T+(A^p^_)+v[3]+3572445317&4294967295,T=A+(y<<16&4294967295|y>>>16),y=_+(T^A^p)+v[6]+76029189&4294967295,_=T+(y<<23&4294967295|y>>>9),y=p+(_^T^A)+v[9]+3654602809&4294967295,p=_+(y<<4&4294967295|y>>>28),y=A+(p^_^T)+v[12]+3873151461&4294967295,A=p+(y<<11&4294967295|y>>>21),y=T+(A^p^_)+v[15]+530742520&4294967295,T=A+(y<<16&4294967295|y>>>16),y=_+(T^A^p)+v[2]+3299628645&4294967295,_=T+(y<<23&4294967295|y>>>9),y=p+(T^(_|~A))+v[0]+4096336452&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~T))+v[7]+1126891415&4294967295,A=p+(y<<10&4294967295|y>>>22),y=T+(p^(A|~_))+v[14]+2878612391&4294967295,T=A+(y<<15&4294967295|y>>>17),y=_+(A^(T|~p))+v[5]+4237533241&4294967295,_=T+(y<<21&4294967295|y>>>11),y=p+(T^(_|~A))+v[12]+1700485571&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~T))+v[3]+2399980690&4294967295,A=p+(y<<10&4294967295|y>>>22),y=T+(p^(A|~_))+v[10]+4293915773&4294967295,T=A+(y<<15&4294967295|y>>>17),y=_+(A^(T|~p))+v[1]+2240044497&4294967295,_=T+(y<<21&4294967295|y>>>11),y=p+(T^(_|~A))+v[8]+1873313359&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~T))+v[15]+4264355552&4294967295,A=p+(y<<10&4294967295|y>>>22),y=T+(p^(A|~_))+v[6]+2734768916&4294967295,T=A+(y<<15&4294967295|y>>>17),y=_+(A^(T|~p))+v[13]+1309151649&4294967295,_=T+(y<<21&4294967295|y>>>11),y=p+(T^(_|~A))+v[4]+4149444226&4294967295,p=_+(y<<6&4294967295|y>>>26),y=A+(_^(p|~T))+v[11]+3174756917&4294967295,A=p+(y<<10&4294967295|y>>>22),y=T+(p^(A|~_))+v[2]+718787259&4294967295,T=A+(y<<15&4294967295|y>>>17),y=_+(A^(T|~p))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var _=p-this.blockSize,v=this.B,T=this.h,A=0;A<p;){if(T==0)for(;A<=_;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<p;)if(v[T++]=I.charCodeAt(A++),T==this.blockSize){s(this,v),T=0;break}}else for(;A<p;)if(v[T++]=I[A++],T==this.blockSize){s(this,v),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var _=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=_&255,_/=256;for(this.u(I),I=Array(16),p=_=0;4>p;++p)for(var v=0;32>v;v+=8)I[_++]=this.g[p]>>>v&255;return I};function o(I,p){var _=l;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=p(I)}function a(I,p){this.h=p;for(var _=[],v=!0,T=I.length-1;0<=T;T--){var A=I[T]|0;v&&A==p||(_[T]=A,v=!1)}this.g=_}var l={};function h(I){return-128<=I&&128>I?o(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return E;if(0>I)return D(d(-I));for(var p=[],_=1,v=0;I>=_;v++)p[v]=I/_|0,_*=4294967296;return new a(p,0)}function m(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return D(m(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),v=E,T=0;T<I.length;T+=8){var A=Math.min(8,I.length-T),y=parseInt(I.substring(T,T+A),p);8>A?(A=d(Math.pow(p,A)),v=v.j(A).add(d(y))):(v=v.j(_),v=v.add(d(y)))}return v}var E=h(0),g=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();for(var I=0,p=1,_=0;_<this.g.length;_++){var v=this.i(_);I+=(0<=v?v:4294967296+v)*p,p*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(V(this))return"-"+D(this).toString(I);for(var p=d(Math.pow(I,6)),_=this,v="";;){var T=X(_,p).g;_=j(_,T.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=T,k(_))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function V(I){return I.h==-1}n.l=function(I){return I=j(this,I),V(I)?-1:k(I)?0:1};function D(I){for(var p=I.g.length,_=[],v=0;v<p;v++)_[v]=~I.g[v];return new a(_,~I.h).add(g)}n.abs=function(){return V(this)?D(this):this},n.add=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],v=0,T=0;T<=p;T++){var A=v+(this.i(T)&65535)+(I.i(T)&65535),y=(A>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);v=y>>>16,A&=65535,y&=65535,_[T]=y<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(I,p){return I.add(D(p))}n.j=function(I){if(k(this)||k(I))return E;if(V(this))return V(I)?D(this).j(D(I)):D(D(this).j(I));if(V(I))return D(this.j(D(I)));if(0>this.l(S)&&0>I.l(S))return d(this.m()*I.m());for(var p=this.g.length+I.g.length,_=[],v=0;v<2*p;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<I.g.length;T++){var A=this.i(v)>>>16,y=this.i(v)&65535,Dt=I.i(T)>>>16,te=I.i(T)&65535;_[2*v+2*T]+=y*te,U(_,2*v+2*T),_[2*v+2*T+1]+=A*te,U(_,2*v+2*T+1),_[2*v+2*T+1]+=y*Dt,U(_,2*v+2*T+1),_[2*v+2*T+2]+=A*Dt,U(_,2*v+2*T+2)}for(v=0;v<p;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=p;v<2*p;v++)_[v]=0;return new a(_,0)};function U(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function q(I,p){this.g=I,this.h=p}function X(I,p){if(k(p))throw Error("division by zero");if(k(I))return new q(E,E);if(V(I))return p=X(D(I),p),new q(D(p.g),D(p.h));if(V(p))return p=X(I,D(p)),new q(D(p.g),p.h);if(30<I.g.length){if(V(I)||V(p))throw Error("slowDivide_ only works with positive integers.");for(var _=g,v=p;0>=v.l(I);)_=Vt(_),v=Vt(v);var T=st(_,1),A=st(v,1);for(v=st(v,2),_=st(_,2);!k(v);){var y=A.add(v);0>=y.l(I)&&(T=T.add(_),A=y),v=st(v,1),_=st(_,1)}return p=j(I,T.j(p)),new q(T,p)}for(T=E;0<=I.l(p);){for(_=Math.max(1,Math.floor(I.m()/p.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(_),y=A.j(p);V(y)||0<y.l(I);)_-=v,A=d(_),y=A.j(p);k(A)&&(A=g),T=T.add(A),I=j(I,y)}return new q(T,I)}n.A=function(I){return X(this,I).h},n.and=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)&I.i(v);return new a(_,this.h&I.h)},n.or=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)|I.i(v);return new a(_,this.h|I.h)},n.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)^I.i(v);return new a(_,this.h^I.h)};function Vt(I){for(var p=I.g.length+1,_=[],v=0;v<p;v++)_[v]=I.i(v)<<1|I.i(v-1)>>>31;return new a(_,I.h)}function st(I,p){var _=p>>5;p%=32;for(var v=I.g.length-_,T=[],A=0;A<v;A++)T[A]=0<p?I.i(A+_)>>>p|I.i(A+_+1)<<32-p:I.i(A+_);return new a(T,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,uc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,ce=a}).apply(typeof Zo<"u"?Zo:typeof self<"u"?self:typeof window<"u"?window:{});var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hc,En,dc,_r,$s,fc,mc,pc;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,u){return i==Array.prototype||i==Object.prototype||(i[c]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof fr=="object"&&fr];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in u))break t;u=u[w]}i=i[i.length-1],f=u[i],c=c(f),c!=f&&c!=null&&t(u,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var u=0,f=!1,w={next:function(){if(!f&&u<i.length){var R=u++;return{value:c(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function m(i,c,u){return i.call.apply(i.bind,arguments)}function E(i,c,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(c,w)}}return function(){return i.apply(c,arguments)}}function g(i,c,u){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,g.apply(null,arguments)}function S(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function k(i,c){function u(){}u.prototype=c.prototype,i.aa=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,w,R){for(var N=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)N[Q-2]=arguments[Q];return c.prototype[w].apply(f,N)}}function V(i){const c=i.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=i[f];return u}return[]}function D(i,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const w=i.length||0,R=f.length||0;i.length=w+R;for(let N=0;N<R;N++)i[w+N]=f[N]}else i.push(f)}}class j{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function U(i){return/^[\s\xa0]*$/.test(i)}function q(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function X(i){return X[" "](i),i}X[" "]=function(){};var Vt=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function st(i,c,u){for(const f in i)c.call(u,i[f],f,i)}function I(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function p(i){const c={};for(const u in i)c[u]=i[u];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(i,c){let u,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(u in f)i[u]=f[u];for(let R=0;R<_.length;R++)u=_[R],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function T(i){var c=1;i=i.split(":");const u=[];for(;0<c&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function A(i){l.setTimeout(()=>{throw i},0)}function y(){var i=Gt;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class Dt{constructor(){this.h=this.g=null}add(c,u){const f=te.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var te=new j(()=>new Gn,i=>i.reset());class Gn{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let xt,ee=!1,Gt=new Dt,wt=()=>{const i=l.Promise.resolve(void 0);xt=()=>{i.then(Kn)}};var Kn=()=>{for(var i;i=y();){try{i.h.call(i.g)}catch(u){A(u)}var c=te;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}ee=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function gt(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}gt.prototype.h=function(){this.defaultPrevented=!0};var Yl=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return i})();function sn(i,c){if(gt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(Vt){t:{try{X(c.nodeName);var w=!0;break t}catch{}w=!1}w||(c=null)}}else u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Zl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&sn.aa.h.call(this)}}k(sn,gt);var Zl={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Wn="closure_listenable_"+(1e6*Math.random()|0),tu=0;function eu(i,c,u,f,w){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=w,this.key=++tu,this.da=this.fa=!1}function Qn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Xn(i){this.src=i,this.g={},this.h=0}Xn.prototype.add=function(i,c,u,f,w){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var N=os(i,c,f,w);return-1<N?(c=i[N],u||(c.fa=!1)):(c=new eu(c,this.src,R,!!f,w),c.fa=u,i.push(c)),c};function is(i,c){var u=c.type;if(u in i.g){var f=i.g[u],w=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(Qn(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function os(i,c,u,f){for(var w=0;w<i.length;++w){var R=i[w];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==f)return w}return-1}var as="closure_lm_"+(1e6*Math.random()|0),cs={};function ji(i,c,u,f,w){if(Array.isArray(c)){for(var R=0;R<c.length;R++)ji(i,c[R],u,f,w);return null}return u=Hi(u),i&&i[Wn]?i.K(c,u,d(f)?!!f.capture:!1,w):nu(i,c,u,!1,f,w)}function nu(i,c,u,f,w,R){if(!c)throw Error("Invalid event type");var N=d(w)?!!w.capture:!!w,Q=us(i);if(Q||(i[as]=Q=new Xn(i)),u=Q.add(c,u,f,N,R),u.proxy)return u;if(f=ru(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)Yl||(w=N),w===void 0&&(w=!1),i.addEventListener(c.toString(),f,w);else if(i.attachEvent)i.attachEvent(zi(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function ru(){function i(u){return c.call(i.src,i.listener,u)}const c=su;return i}function qi(i,c,u,f,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)qi(i,c[R],u,f,w);else f=d(f)?!!f.capture:!!f,u=Hi(u),i&&i[Wn]?(i=i.i,c=String(c).toString(),c in i.g&&(R=i.g[c],u=os(R,u,f,w),-1<u&&(Qn(R[u]),Array.prototype.splice.call(R,u,1),R.length==0&&(delete i.g[c],i.h--)))):i&&(i=us(i))&&(c=i.g[c.toString()],i=-1,c&&(i=os(c,u,f,w)),(u=-1<i?c[i]:null)&&ls(u))}function ls(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Wn])is(c.i,i);else{var u=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(u,f,i.capture):c.detachEvent?c.detachEvent(zi(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=us(c))?(is(u,i),u.h==0&&(u.src=null,c[as]=null)):Qn(i)}}}function zi(i){return i in cs?cs[i]:cs[i]="on"+i}function su(i,c){if(i.da)i=!0;else{c=new sn(c,this);var u=i.listener,f=i.ha||i.src;i.fa&&ls(i),i=u.call(f,c)}return i}function us(i){return i=i[as],i instanceof Xn?i:null}var hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hi(i){return typeof i=="function"?i:(i[hs]||(i[hs]=function(c){return i.handleEvent(c)}),i[hs])}function yt(){Lt.call(this),this.i=new Xn(this),this.M=this,this.F=null}k(yt,Lt),yt.prototype[Wn]=!0,yt.prototype.removeEventListener=function(i,c,u,f){qi(this,i,c,u,f)};function At(i,c){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new gt(c,i);else if(c instanceof gt)c.target=c.target||i;else{var w=c;c=new gt(f,i),v(c,w)}if(w=!0,u)for(var R=u.length-1;0<=R;R--){var N=c.g=u[R];w=Jn(N,f,!0,c)&&w}if(N=c.g=i,w=Jn(N,f,!0,c)&&w,w=Jn(N,f,!1,c)&&w,u)for(R=0;R<u.length;R++)N=c.g=u[R],w=Jn(N,f,!1,c)&&w}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var u=i.g[c],f=0;f<u.length;f++)Qn(u[f]);delete i.g[c],i.h--}}this.F=null},yt.prototype.K=function(i,c,u,f){return this.i.add(String(i),c,!1,u,f)},yt.prototype.L=function(i,c,u,f){return this.i.add(String(i),c,!0,u,f)};function Jn(i,c,u,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,R=0;R<c.length;++R){var N=c[R];if(N&&!N.da&&N.capture==u){var Q=N.listener,dt=N.ha||N.src;N.fa&&is(i.i,N),w=Q.call(dt,f)!==!1&&w}}return w&&!f.defaultPrevented}function Gi(i,c,u){if(typeof i=="function")u&&(i=g(i,u));else if(i&&typeof i.handleEvent=="function")i=g(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(i,c||0)}function Ki(i){i.g=Gi(()=>{i.g=null,i.i&&(i.i=!1,Ki(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class iu extends Lt{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ki(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(i){Lt.call(this),this.h=i,this.g={}}k(on,Lt);var Wi=[];function Qi(i){st(i.g,function(c,u){this.g.hasOwnProperty(u)&&ls(c)},i),i.g={}}on.prototype.N=function(){on.aa.N.call(this),Qi(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ds=l.JSON.stringify,ou=l.JSON.parse,au=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function fs(){}fs.prototype.h=null;function Xi(i){return i.h||(i.h=i.i())}function Ji(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ms(){gt.call(this,"d")}k(ms,gt);function ps(){gt.call(this,"c")}k(ps,gt);var Ee={},Yi=null;function Yn(){return Yi=Yi||new yt}Ee.La="serverreachability";function Zi(i){gt.call(this,Ee.La,i)}k(Zi,gt);function cn(i){const c=Yn();At(c,new Zi(c))}Ee.STAT_EVENT="statevent";function to(i,c){gt.call(this,Ee.STAT_EVENT,i),this.stat=c}k(to,gt);function bt(i){const c=Yn();At(c,new to(c,i))}Ee.Ma="timingevent";function eo(i,c){gt.call(this,Ee.Ma,i),this.size=c}k(eo,gt);function ln(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},c)}function un(){this.g=!0}un.prototype.xa=function(){this.g=!1};function cu(i,c,u,f,w,R){i.info(function(){if(i.g)if(R)for(var N="",Q=R.split("&"),dt=0;dt<Q.length;dt++){var K=Q[dt].split("=");if(1<K.length){var _t=K[0];K=K[1];var Et=_t.split("_");N=2<=Et.length&&Et[1]=="type"?N+(_t+"="+K+"&"):N+(_t+"=redacted&")}}else N=null;else N=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+u+`
`+N})}function lu(i,c,u,f,w,R,N){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+u+`
`+R+" "+N})}function Me(i,c,u,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+hu(i,u)+(f?" "+f:"")})}function uu(i,c){i.info(function(){return"TIMEOUT: "+c})}un.prototype.info=function(){};function hu(i,c){if(!i.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var N=1;N<w.length;N++)w[N]=""}}}}return ds(u)}catch{return c}}var Zn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},no={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gs;function tr(){}k(tr,fs),tr.prototype.g=function(){return new XMLHttpRequest},tr.prototype.i=function(){return{}},gs=new tr;function ne(i,c,u,f){this.j=i,this.i=c,this.l=u,this.R=f||1,this.U=new on(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ro}function ro(){this.i=null,this.g="",this.h=!1}var so={},ys={};function _s(i,c,u){i.L=1,i.v=sr(Kt(c)),i.m=u,i.P=!0,io(i,null)}function io(i,c){i.F=Date.now(),er(i),i.A=Kt(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),vo(u.i,"t",f),i.C=0,u=i.j.J,i.h=new ro,i.g=Fo(i.j,u?c:null,!i.m),0<i.O&&(i.M=new iu(g(i.Y,i,i.g),i.O)),c=i.U,u=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(Wi[0]=w.toString()),w=Wi);for(var R=0;R<w.length;R++){var N=ji(u,w[R],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),cn(),cu(i.i,i.u,i.A,i.l,i.R,i.m)}ne.prototype.ca=function(i){i=i.target;const c=this.M;c&&Wt(i)==3?c.j():this.Y(i)},ne.prototype.Y=function(i){try{if(i==this.g)t:{const Et=Wt(this.g);var c=this.g.Ba();const Fe=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||So(this.g)))){this.J||Et!=4||c==7||(c==8||0>=Fe?cn(3):cn(2)),Es(this);var u=this.g.Z();this.X=u;e:if(oo(this)){var f=So(this.g);i="";var w=f.length,R=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ve(this),hn(this);var N="";break e}this.h.i=new l.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(R&&c==w-1)});f.length=0,this.h.g+=i,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=u==200,lu(this.i,this.u,this.A,this.l,this.R,Et,u),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,dt=this.g;if((Q=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Q)){var K=Q;break e}}K=null}if(u=K)Me(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vs(this,u);else{this.o=!1,this.s=3,bt(12),ve(this),hn(this);break t}}if(this.P){u=!0;let Mt;for(;!this.J&&this.C<N.length;)if(Mt=du(this,N),Mt==ys){Et==4&&(this.s=4,bt(14),u=!1),Me(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==so){this.s=4,bt(15),Me(this.i,this.l,N,"[Invalid Chunk]"),u=!1;break}else Me(this.i,this.l,Mt,null),vs(this,Mt);if(oo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||N.length!=0||this.h.h||(this.s=1,bt(16),u=!1),this.o=this.o&&u,!u)Me(this.i,this.l,N,"[Invalid Chunked Response]"),ve(this),hn(this);else if(0<N.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),Rs(_t),_t.M=!0,bt(11))}}else Me(this.i,this.l,N,null),vs(this,N);Et==4&&ve(this),this.o&&!this.J&&(Et==4?xo(this.j,this):(this.o=!1,er(this)))}else Cu(this.g),u==400&&0<N.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),ve(this),hn(this)}}}catch{}finally{}};function oo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function du(i,c){var u=i.C,f=c.indexOf(`
`,u);return f==-1?ys:(u=Number(c.substring(u,f)),isNaN(u)?so:(f+=1,f+u>c.length?ys:(c=c.slice(f,f+u),i.C=f+u,c)))}ne.prototype.cancel=function(){this.J=!0,ve(this)};function er(i){i.S=Date.now()+i.I,ao(i,i.I)}function ao(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ln(g(i.ba,i),c)}function Es(i){i.B&&(l.clearTimeout(i.B),i.B=null)}ne.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(uu(this.i,this.A),this.L!=2&&(cn(),bt(17)),ve(this),this.s=2,hn(this)):ao(this,this.S-i)};function hn(i){i.j.G==0||i.J||xo(i.j,i)}function ve(i){Es(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,Qi(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function vs(i,c){try{var u=i.j;if(u.G!=0&&(u.g==i||Ts(u.h,i))){if(!i.K&&Ts(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)ur(u),cr(u);else break t;bs(u),bt(18)}}else u.za=w[1],0<u.za-u.T&&37500>w[2]&&u.F&&u.v==0&&!u.C&&(u.C=ln(g(u.Za,u),6e3));if(1>=uo(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Ie(u,11)}else if((i.K||u.g==i)&&ur(u),!U(c))for(w=u.Da.g.parse(c),c=0;c<w.length;c++){let K=w[c];if(u.T=K[0],K=K[1],u.G==2)if(K[0]=="c"){u.K=K[1],u.ia=K[2];const _t=K[3];_t!=null&&(u.la=_t,u.j.info("VER="+u.la));const Et=K[4];Et!=null&&(u.Aa=Et,u.j.info("SVER="+u.Aa));const Fe=K[5];Fe!=null&&typeof Fe=="number"&&0<Fe&&(f=1.5*Fe,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Mt=i.g;if(Mt){const dr=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(dr){var R=f.h;R.g||dr.indexOf("spdy")==-1&&dr.indexOf("quic")==-1&&dr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Is(R,R.h),R.h=null))}if(f.D){const Ss=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ss&&(f.ya=Ss,J(f.I,f.D,Ss))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var N=i;if(f.qa=Lo(f,f.J?f.ia:null,f.W),N.K){ho(f.h,N);var Q=N,dt=f.L;dt&&(Q.I=dt),Q.B&&(Es(Q),er(Q)),f.g=N}else ko(f);0<u.i.length&&lr(u)}else K[0]!="stop"&&K[0]!="close"||Ie(u,7);else u.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Ie(u,7):As(u):K[0]!="noop"&&u.l&&u.l.ta(K),u.v=0)}}cn(4)}catch{}}var fu=class{constructor(i,c){this.g=i,this.map=c}};function co(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function uo(i){return i.h?1:i.g?i.g.size:0}function Ts(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Is(i,c){i.g?i.g.add(c):i.h=c}function ho(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}co.prototype.cancel=function(){if(this.i=fo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function fo(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.D);return c}return V(i.i)}function mu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],u=i.length,f=0;f<u;f++)c.push(i[f]);return c}c=[],u=0;for(f in i)c[u++]=i[f];return c}function pu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var u=0;u<i;u++)c.push(u);return c}c=[],u=0;for(const f in i)c[u++]=f;return c}}}function mo(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var u=pu(i),f=mu(i),w=f.length,R=0;R<w;R++)c.call(void 0,f[R],u&&u[R],i)}var po=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gu(i,c){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),w=null;if(0<=f){var R=i[u].substring(0,f);w=i[u].substring(f+1)}else R=i[u];c(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Te(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Te){this.h=i.h,nr(this,i.j),this.o=i.o,this.g=i.g,rr(this,i.s),this.l=i.l;var c=i.i,u=new mn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),go(this,u),this.m=i.m}else i&&(c=String(i).match(po))?(this.h=!1,nr(this,c[1]||"",!0),this.o=dn(c[2]||""),this.g=dn(c[3]||"",!0),rr(this,c[4]),this.l=dn(c[5]||"",!0),go(this,c[6]||"",!0),this.m=dn(c[7]||"")):(this.h=!1,this.i=new mn(null,this.h))}Te.prototype.toString=function(){var i=[],c=this.j;c&&i.push(fn(c,yo,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(fn(c,yo,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(fn(u,u.charAt(0)=="/"?Eu:_u,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",fn(u,Tu)),i.join("")};function Kt(i){return new Te(i)}function nr(i,c,u){i.j=u?dn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function rr(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function go(i,c,u){c instanceof mn?(i.i=c,Iu(i.i,i.h)):(u||(c=fn(c,vu)),i.i=new mn(c,i.h))}function J(i,c,u){i.i.set(c,u)}function sr(i){return J(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function dn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function fn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,yu),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function yu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var yo=/[#\/\?@]/g,_u=/[#\?:]/g,Eu=/[#\?]/g,vu=/[#\?@]/g,Tu=/#/g;function mn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function re(i){i.g||(i.g=new Map,i.h=0,i.i&&gu(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=mn.prototype,n.add=function(i,c){re(this),this.i=null,i=Oe(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function _o(i,c){re(i),c=Oe(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Eo(i,c){return re(i),c=Oe(i,c),i.g.has(c)}n.forEach=function(i,c){re(this),this.g.forEach(function(u,f){u.forEach(function(w){i.call(c,w,f,this)},this)},this)},n.na=function(){re(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const w=i[f];for(let R=0;R<w.length;R++)u.push(c[f])}return u},n.V=function(i){re(this);let c=[];if(typeof i=="string")Eo(this,i)&&(c=c.concat(this.g.get(Oe(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)c=c.concat(i[u])}return c},n.set=function(i,c){return re(this),this.i=null,i=Oe(this,i),Eo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function vo(i,c,u){_o(i,c),0<u.length&&(i.i=null,i.g.set(Oe(i,c),V(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const R=encodeURIComponent(String(f)),N=this.V(f);for(f=0;f<N.length;f++){var w=R;N[f]!==""&&(w+="="+encodeURIComponent(String(N[f]))),i.push(w)}}return this.i=i.join("&")};function Oe(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Iu(i,c){c&&!i.j&&(re(i),i.i=null,i.g.forEach(function(u,f){var w=f.toLowerCase();f!=w&&(_o(this,f),vo(this,w,u))},i)),i.j=c}function wu(i,c){const u=new un;if(l.Image){const f=new Image;f.onload=S(se,u,"TestLoadImage: loaded",!0,c,f),f.onerror=S(se,u,"TestLoadImage: error",!1,c,f),f.onabort=S(se,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(se,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Au(i,c){const u=new un,f=new AbortController,w=setTimeout(()=>{f.abort(),se(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?se(u,"TestPingServer: ok",!0,c):se(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),se(u,"TestPingServer: error",!1,c)})}function se(i,c,u,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(u)}catch{}}function bu(){this.g=new au}function Ru(i,c,u){const f=u||"";try{mo(i,function(w,R){let N=w;d(w)&&(N=ds(w)),c.push(f+R+"="+encodeURIComponent(N))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function ir(i){this.l=i.Ub||null,this.j=i.eb||!1}k(ir,fs),ir.prototype.g=function(){return new or(this.l,this.j)},ir.prototype.i=(function(i){return function(){return i}})({});function or(i,c){yt.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(or,yt),n=or.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,gn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,gn(this)),this.g&&(this.readyState=3,gn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;To(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function To(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?pn(this):gn(this),this.readyState==3&&To(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,pn(this))},n.Qa=function(i){this.g&&(this.response=i,pn(this))},n.ga=function(){this.g&&pn(this)};function pn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,gn(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function gn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(or.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Io(i){let c="";return st(i,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function ws(i,c,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=Io(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):J(i,c,u))}function et(i){yt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(et,yt);var Su=/^https?$/i,Pu=["POST","PUT"];n=et.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gs.g(),this.v=this.o?Xi(this.o):Xi(gs),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){wo(this,R);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)u.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())u.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),w=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Pu,c,void 0))||f||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,N]of u)this.g.setRequestHeader(R,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ro(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){wo(this,R)}};function wo(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,Ao(i),ar(i)}function Ao(i){i.A||(i.A=!0,At(i,"complete"),At(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,At(this,"complete"),At(this,"abort"),ar(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ar(this,!0)),et.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?bo(this):this.bb())},n.bb=function(){bo(this)};function bo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Wt(i)!=4||i.Z()!=2)){if(i.u&&Wt(i)==4)Gi(i.Ea,0,i);else if(At(i,"readystatechange"),Wt(i)==4){i.h=!1;try{const N=i.Z();t:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var f;if(f=N===0){var w=String(i.D).match(po)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),f=!Su.test(w?w.toLowerCase():"")}u=f}if(u)At(i,"complete"),At(i,"success");else{i.m=6;try{var R=2<Wt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Ao(i)}}finally{ar(i)}}}}function ar(i,c){if(i.g){Ro(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||At(i,"ready");try{u.onreadystatechange=f}catch{}}}function Ro(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Wt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),ou(c)}};function So(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Cu(i){const c={};i=(i.g&&2<=Wt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(U(i[f]))continue;var u=T(i[f]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[w]||[];c[w]=R,R.push(u)}I(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function Po(i){this.Aa=0,this.i=[],this.j=new un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yn("baseRetryDelayMs",5e3,i),this.cb=yn("retryDelaySeedMs",1e4,i),this.Wa=yn("forwardChannelMaxRetries",2,i),this.wa=yn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new co(i&&i.concurrentRequestLimit),this.Da=new bu,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Po.prototype,n.la=8,n.G=1,n.connect=function(i,c,u,f){bt(0),this.W=i,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Lo(this,null,this.W),lr(this)};function As(i){if(Co(i),i.G==3){var c=i.U++,u=Kt(i.I);if(J(u,"SID",i.K),J(u,"RID",c),J(u,"TYPE","terminate"),_n(i,u),c=new ne(i,i.j,c),c.L=2,c.v=sr(Kt(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=Fo(c.j,null),c.g.ea(c.v)),c.F=Date.now(),er(c)}Oo(i)}function cr(i){i.g&&(Rs(i),i.g.cancel(),i.g=null)}function Co(i){cr(i),i.u&&(l.clearTimeout(i.u),i.u=null),ur(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function lr(i){if(!lo(i.h)&&!i.s){i.s=!0;var c=i.Ga;xt||wt(),ee||(xt(),ee=!0),Gt.add(c,i),i.B=0}}function Vu(i,c){return uo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ln(g(i.Ga,i,c),Mo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new ne(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=Do(this,w,c),u=Kt(this.I),J(u,"RID",i),J(u,"CVER",22),this.D&&J(u,"X-HTTP-Session-Id",this.D),_n(this,u),R&&(this.O?c="headers="+encodeURIComponent(String(Io(R)))+"&"+c:this.m&&ws(u,this.m,R)),Is(this.h,w),this.Ua&&J(u,"TYPE","init"),this.P?(J(u,"$req",c),J(u,"SID","null"),w.T=!0,_s(w,u,null)):_s(w,u,c),this.G=2}}else this.G==3&&(i?Vo(this,i):this.i.length==0||lo(this.h)||Vo(this))};function Vo(i,c){var u;c?u=c.l:u=i.U++;const f=Kt(i.I);J(f,"SID",i.K),J(f,"RID",u),J(f,"AID",i.T),_n(i,f),i.m&&i.o&&ws(f,i.m,i.o),u=new ne(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),c&&(i.i=c.D.concat(i.i)),c=Do(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Is(i.h,u),_s(u,f,c)}function _n(i,c){i.H&&st(i.H,function(u,f){J(c,f,u)}),i.l&&mo({},function(u,f){J(c,f,u)})}function Do(i,c,u){u=Math.min(i.i.length,u);var f=i.l?g(i.l.Na,i.l,i):null;t:{var w=i.i;let R=-1;for(;;){const N=["count="+u];R==-1?0<u?(R=w[0].g,N.push("ofs="+R)):R=0:N.push("ofs="+R);let Q=!0;for(let dt=0;dt<u;dt++){let K=w[dt].g;const _t=w[dt].map;if(K-=R,0>K)R=Math.max(0,w[dt].g-100),Q=!1;else try{Ru(_t,N,"req"+K+"_")}catch{f&&f(_t)}}if(Q){f=N.join("&");break t}}}return i=i.i.splice(0,u),c.D=i,f}function ko(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;xt||wt(),ee||(xt(),ee=!0),Gt.add(c,i),i.v=0}}function bs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ln(g(i.Fa,i),Mo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,No(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ln(g(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),cr(this),No(this))};function Rs(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function No(i){i.g=new ne(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=Kt(i.qa);J(c,"RID","rpc"),J(c,"SID",i.K),J(c,"AID",i.T),J(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&J(c,"TO",i.ja),J(c,"TYPE","xmlhttp"),_n(i,c),i.m&&i.o&&ws(c,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=sr(Kt(c)),u.m=null,u.P=!0,io(u,i)}n.Za=function(){this.C!=null&&(this.C=null,cr(this),bs(this),bt(19))};function ur(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function xo(i,c){var u=null;if(i.g==c){ur(i),Rs(i),i.g=null;var f=2}else if(Ts(i.h,c))u=c.D,ho(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var w=i.B;f=Yn(),At(f,new eo(f,u)),lr(i)}else ko(i);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&Vu(i,c)||f==2&&bs(i)))switch(u&&0<u.length&&(c=i.h,c.i=c.i.concat(u)),w){case 1:Ie(i,5);break;case 4:Ie(i,10);break;case 3:Ie(i,6);break;default:Ie(i,2)}}}function Mo(i,c){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*c}function Ie(i,c){if(i.j.info("Error code "+c),c==2){var u=g(i.fb,i),f=i.Xa;const w=!f;f=new Te(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||nr(f,"https"),sr(f),w?wu(f.toString(),u):Au(f.toString(),u)}else bt(2);i.G=0,i.l&&i.l.sa(c),Oo(i),Co(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Oo(i){if(i.G=0,i.ka=[],i.l){const c=fo(i.h);(c.length!=0||i.i.length!=0)&&(D(i.ka,c),D(i.ka,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.ra()}}function Lo(i,c,u){var f=u instanceof Te?Kt(u):new Te(u);if(f.g!="")c&&(f.g=c+"."+f.g),rr(f,f.s);else{var w=l.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var R=new Te(null);f&&nr(R,f),c&&(R.g=c),w&&rr(R,w),u&&(R.l=u),f=R}return u=i.D,c=i.ya,u&&c&&J(f,u,c),J(f,"VER",i.la),_n(i,f),f}function Fo(i,c,u){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new et(new ir({eb:u})):new et(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bo(){}n=Bo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function hr(){}hr.prototype.g=function(i,c){return new St(i,c)};function St(i,c){yt.call(this),this.g=new Po(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!U(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!U(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Le(this)}k(St,yt),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){As(this.g)},St.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=ds(i),i=u);c.i.push(new fu(c.Ya++,i)),c.G==3&&lr(c)},St.prototype.N=function(){this.g.l=null,delete this.j,As(this.g),delete this.g,St.aa.N.call(this)};function Uo(i){ms.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const u in c){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}k(Uo,ms);function $o(){ps.call(this),this.status=1}k($o,ps);function Le(i){this.g=i}k(Le,Bo),Le.prototype.ua=function(){At(this.g,"a")},Le.prototype.ta=function(i){At(this.g,new Uo(i))},Le.prototype.sa=function(i){At(this.g,new $o)},Le.prototype.ra=function(){At(this.g,"b")},hr.prototype.createWebChannel=hr.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,pc=function(){return new hr},mc=function(){return Yn()},fc=Ee,$s={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zn.NO_ERROR=0,Zn.TIMEOUT=8,Zn.HTTP_ERROR=6,_r=Zn,no.COMPLETE="complete",dc=no,Ji.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",yt.prototype.listen=yt.prototype.K,En=Ji,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,hc=et}).apply(typeof fr<"u"?fr:typeof self<"u"?self:typeof window<"u"?window:{});const ta="@firebase/firestore",ea="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ze="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new sc("@firebase/firestore");function Be(){return Pe.logLevel}function x(n,...t){if(Pe.logLevel<=G.DEBUG){const e=t.map(hi);Pe.debug(`Firestore (${Ze}): ${n}`,...e)}}function Jt(n,...t){if(Pe.logLevel<=G.ERROR){const e=t.map(hi);Pe.error(`Firestore (${Ze}): ${n}`,...e)}}function he(n,...t){if(Pe.logLevel<=G.WARN){const e=t.map(hi);Pe.warn(`Firestore (${Ze}): ${n}`,...e)}}function hi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,gc(n,r,e)}function gc(n,t,e){let r=`FIRESTORE (${Ze}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Jt(r),new Error(r)}function W(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||gc(t,s,r)}function B(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Ye{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class md{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Tt.UNAUTHENTICATED)))}shutdown(){}}class pd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class gd{constructor(t){this.t=t,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new le;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new le,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},l=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new le)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new yc(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string",2055,{h:t}),new Tt(t)}}class yd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _d{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new yd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Tt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class na{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ed{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){W(this.o===void 0,3512);const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new na(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(W(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new na(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=vd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function js(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return $(r,s);{const o=_c(),a=Td(o.encode(ra(n,e)),o.encode(ra(t,e)));return a!==0?a:$(r,s)}}e+=r>65535?2:1}return $(n.length,t.length)}function ra(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Td(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return $(n[e],t[e]);return $(n.length,t.length)}function Ke(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="__name__";class Ft{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&L(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ft.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ft?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ft.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return $(t.length,e.length)}static compareSegments(t,e){const r=Ft.isNumericId(t),s=Ft.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ft.extractNumericId(t).compare(Ft.extractNumericId(e)):js(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ce.fromString(t.substring(4,t.length-2))}}class Z extends Ft{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new Z(e)}static emptyPath(){return new Z([])}}const Id=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Ft{construct(t,e,r){return new mt(t,e,r)}static isValidIdentifier(t){return Id.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sa}static keyField(){return new mt([sa])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mt(e)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Z.fromString(t))}static fromName(t){return new O(Z.fromString(t).popFirst(5))}static empty(){return new O(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Z(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n,t,e){if(!e)throw new M(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Ad(n,t,e,r){if(t===!0&&r===!0)throw new M(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ia(n){if(!O.isDocumentKey(n))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ec(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L(12329,{type:typeof n})}function ue(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fi(n);throw new M(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n,t){const e={typeString:n};return t&&(e.value=t),e}function Un(n,t){if(!Ec(n))throw new M(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new M(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=-62135596800,aa=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*aa);return new Y(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<oa)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/aa}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Un(t,Y._jsonSchema))return new Y(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-oa;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:ot("string",Y._jsonSchemaVersion),seconds:ot("number"),nanoseconds:ot("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new Y(0,0))}static max(){return new F(new Y(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=-1;function bd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new Y(e+1,0):new Y(e,r));return new de(s,O.empty(),t)}function Rd(n){return new de(n.readTime,n.key,kn)}class de{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new de(F.min(),O.empty(),kn)}static max(){return new de(F.max(),O.empty(),kn)}}function Sd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Pd)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):P.reject(e)}static resolve(t){return new P(((e,r)=>{e(t)}))}static reject(t){return new P(((e,r)=>{r(t)}))}static waitFor(t){return new P(((e,r)=>{let s=0,o=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next((s=>s?P.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new P(((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((m=>{a[d]=m,++l,l===o&&r(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new P(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function Vd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function en(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}$r.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=-1;function jr(n){return n==null}function Cr(n){return n===0&&1/n==-1/0}function Dd(n){return typeof n=="number"&&Number.isInteger(n)&&!Cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="";function kd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ca(t)),t=Nd(n.get(e),t);return ca(t)}function Nd(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case vc:e+="";break;default:e+=o}}return e}function ca(n){return n+vc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ve(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Tc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new mr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new mr(this.root,t,this.comparator,!1)}getReverseIterator(){return new mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new mr(this.root,t,this.comparator,!0)}}class mr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=o??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ft(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw L(27949);return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ua(this.data.getIterator())}getIteratorFrom(t){return new ua(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class ua{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(mt.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new ut(mt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ke(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ic("Invalid base64 string: "+o):o}})(t);return new pt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const xd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fe(n){if(W(!!n,39018),typeof n=="string"){let t=0;const e=xd.exec(n);if(W(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:nt(n.seconds),nanos:nt(n.nanos)}}function nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function me(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="server_timestamp",Ac="__type__",bc="__previous_value__",Rc="__local_write_time__";function pi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ac])===null||e===void 0?void 0:e.stringValue)===wc}function qr(n){const t=n.mapValue.fields[bc];return pi(t)?qr(t):t}function Nn(n){const t=fe(n.mapValue.fields[Rc].timestampValue);return new Y(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,e,r,s,o,a,l,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const Vr="(default)";class xn{constructor(t,e){this.projectId=t,this.database=e||Vr}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database===Vr}isEqual(t){return t instanceof xn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="__type__",Od="__max__",pr={mapValue:{}},Pc="__vector__",Dr="value";function pe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pi(n)?4:Fd(n)?9007199254740991:Ld(n)?10:11:L(28295,{value:n})}function zt(n,t){if(n===t)return!0;const e=pe(n);if(e!==pe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Nn(n).isEqual(Nn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=fe(s.timestampValue),l=fe(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return me(s.bytesValue).isEqual(me(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return nt(s.geoPointValue.latitude)===nt(o.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return nt(s.integerValue)===nt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=nt(s.doubleValue),l=nt(o.doubleValue);return a===l?Cr(a)===Cr(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return Ke(n.arrayValue.values||[],t.arrayValue.values||[],zt);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(la(a)!==la(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!zt(a[h],l[h])))return!1;return!0})(n,t);default:return L(52216,{left:n})}}function Mn(n,t){return(n.values||[]).find((e=>zt(e,t)))!==void 0}function We(n,t){if(n===t)return 0;const e=pe(n),r=pe(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=nt(o.integerValue||o.doubleValue),h=nt(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return ha(n.timestampValue,t.timestampValue);case 4:return ha(Nn(n),Nn(t));case 5:return js(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=me(o),h=me(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const m=$(l[d],h[d]);if(m!==0)return m}return $(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=$(nt(o.latitude),nt(a.latitude));return l!==0?l:$(nt(o.longitude),nt(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return da(n.arrayValue,t.arrayValue);case 10:return(function(o,a){var l,h,d,m;const E=o.fields||{},g=a.fields||{},S=(l=E[Dr])===null||l===void 0?void 0:l.arrayValue,k=(h=g[Dr])===null||h===void 0?void 0:h.arrayValue,V=$(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0);return V!==0?V:da(S,k)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===pr.mapValue&&a===pr.mapValue)return 0;if(o===pr.mapValue)return 1;if(a===pr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const g=js(h[E],m[E]);if(g!==0)return g;const S=We(l[h[E]],d[m[E]]);if(S!==0)return S}return $(h.length,m.length)})(n.mapValue,t.mapValue);default:throw L(23264,{le:e})}}function ha(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=fe(n),r=fe(t),s=$(e.seconds,r.seconds);return s!==0?s:$(e.nanos,r.nanos)}function da(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=We(e[s],r[s]);if(o)return o}return $(e.length,r.length)}function Qe(n){return qs(n)}function qs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=fe(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return me(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return O.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=qs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${qs(e.fields[a])}`;return s+"}"})(n.mapValue):L(61005,{value:n})}function Er(n){switch(pe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=qr(n);return t?16+Er(t):16;case 5:return 2*n.stringValue.length;case 6:return me(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+Er(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ve(r.fields,((o,a)=>{s+=o.length+Er(a)})),s})(n.mapValue);default:throw L(13486,{value:n})}}function zs(n){return!!n&&"integerValue"in n}function gi(n){return!!n&&"arrayValue"in n}function fa(n){return!!n&&"nullValue"in n}function ma(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vr(n){return!!n&&"mapValue"in n}function Ld(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Sc])===null||e===void 0?void 0:e.stringValue)===Pc}function An(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ve(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=An(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=An(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Fd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Od}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.value=t}static empty(){return new kt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!vr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=An(e)}setAll(t){let e=mt.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=An(a):s.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());vr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return zt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];vr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ve(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new kt(An(this.value))}}function Cc(n){const t=[];return Ve(n.fields,((e,r)=>{const s=new mt([e]);if(vr(r)){const o=Cc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new It(t,0,F.min(),F.min(),F.min(),kt.empty(),0)}static newFoundDocument(t,e,r,s){return new It(t,1,e,F.min(),r,s,0)}static newNoDocument(t,e){return new It(t,2,e,F.min(),F.min(),kt.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,F.min(),F.min(),kt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e){this.position=t,this.inclusive=e}}function pa(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=We(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ga(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!zt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Bd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{}class at extends Vc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new $d(t,e,r):e==="array-contains"?new zd(t,r):e==="in"?new Hd(t,r):e==="not-in"?new Gd(t,r):e==="array-contains-any"?new Kd(t,r):new at(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new jd(t,r):new qd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(We(e,this.value)):e!==null&&pe(this.value)===pe(e)&&this.matchesComparison(We(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends Vc{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Ht(t,e)}matches(t){return Dc(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Dc(n){return n.op==="and"}function kc(n){return Ud(n)&&Dc(n)}function Ud(n){for(const t of n.filters)if(t instanceof Ht)return!1;return!0}function Hs(n){if(n instanceof at)return n.field.canonicalString()+n.op.toString()+Qe(n.value);if(kc(n))return n.filters.map((t=>Hs(t))).join(",");{const t=n.filters.map((e=>Hs(e))).join(",");return`${n.op}(${t})`}}function Nc(n,t){return n instanceof at?(function(r,s){return s instanceof at&&r.op===s.op&&r.field.isEqual(s.field)&&zt(r.value,s.value)})(n,t):n instanceof Ht?(function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,l)=>o&&Nc(a,s.filters[l])),!0):!1})(n,t):void L(19439)}function xc(n){return n instanceof at?(function(e){return`${e.field.canonicalString()} ${e.op} ${Qe(e.value)}`})(n):n instanceof Ht?(function(e){return e.op.toString()+" {"+e.getFilters().map(xc).join(" ,")+"}"})(n):"Filter"}class $d extends at{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class jd extends at{constructor(t,e){super(t,"in",e),this.keys=Mc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class qd extends at{constructor(t,e){super(t,"not-in",e),this.keys=Mc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Mc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>O.fromName(r.referenceValue)))}class zd extends at{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return gi(e)&&Mn(e.arrayValue,this.value)}}class Hd extends at{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Mn(this.value.arrayValue,e)}}class Gd extends at{constructor(t,e){super(t,"not-in",e)}matches(t){if(Mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Mn(this.value.arrayValue,e)}}class Kd extends at{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!gi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Mn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Pe=null}}function ya(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Wd(n,t,e,r,s,o,a)}function yi(n){const t=B(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Hs(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),jr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Qe(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Qe(r))).join(",")),t.Pe=e}return t.Pe}function _i(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Bd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Nc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ga(n.startAt,t.startAt)&&ga(n.endAt,t.endAt)}function Gs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Qd(n,t,e,r,s,o,a,l){return new zr(n,t,e,r,s,o,a,l)}function Hr(n){return new zr(n)}function _a(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Xd(n){return n.collectionGroup!==null}function bn(n){const t=B(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ut(mt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new Nr(o,r))})),e.has(mt.keyField().canonicalString())||t.Te.push(new Nr(mt.keyField(),r))}return t.Te}function Ut(n){const t=B(n);return t.Ie||(t.Ie=Jd(t,bn(n))),t.Ie}function Jd(n,t){if(n.limitType==="F")return ya(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Nr(s.field,o)}));const e=n.endAt?new kr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new kr(n.startAt.position,n.startAt.inclusive):null;return ya(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ks(n,t,e){return new zr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Gr(n,t){return _i(Ut(n),Ut(t))&&n.limitType===t.limitType}function Oc(n){return`${yi(Ut(n))}|lt:${n.limitType}`}function Ue(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>xc(s))).join(", ")}]`),jr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>Qe(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>Qe(s))).join(",")),`Target(${r})`})(Ut(n))}; limitType=${n.limitType})`}function Kr(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of bn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,h){const d=pa(a,l,h);return a.inclusive?d<=0:d<0})(r.startAt,bn(r),s)||r.endAt&&!(function(a,l,h){const d=pa(a,l,h);return a.inclusive?d>=0:d>0})(r.endAt,bn(r),s))})(n,t)}function Yd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lc(n){return(t,e)=>{let r=!1;for(const s of bn(n)){const o=Zd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Zd(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?We(h,d):L(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ve(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return Tc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=new tt(O.comparator);function Yt(){return tf}const Fc=new tt(O.comparator);function vn(...n){let t=Fc;for(const e of n)t=t.insert(e.key,e);return t}function Bc(n){let t=Fc;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function Ae(){return Rn()}function Uc(){return Rn()}function Rn(){return new De((n=>n.toString()),((n,t)=>n.isEqual(t)))}const ef=new tt(O.comparator),nf=new ut(O.comparator);function z(...n){let t=nf;for(const e of n)t=t.add(e);return t}const rf=new ut($);function sf(){return rf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cr(t)?"-0":t}}function $c(n){return{integerValue:""+n}}function of(n,t){return Dd(t)?$c(t):Ei(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this._=void 0}}function af(n,t,e){return n instanceof xr?(function(s,o){const a={fields:{[Ac]:{stringValue:wc},[Rc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&pi(o)&&(o=qr(o)),o&&(a.fields[bc]=o),{mapValue:a}})(e,t):n instanceof On?qc(n,t):n instanceof Ln?zc(n,t):(function(s,o){const a=jc(s,o),l=Ea(a)+Ea(s.Ee);return zs(a)&&zs(s.Ee)?$c(l):Ei(s.serializer,l)})(n,t)}function cf(n,t,e){return n instanceof On?qc(n,t):n instanceof Ln?zc(n,t):e}function jc(n,t){return n instanceof Mr?(function(r){return zs(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class xr extends Wr{}class On extends Wr{constructor(t){super(),this.elements=t}}function qc(n,t){const e=Hc(t);for(const r of n.elements)e.some((s=>zt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class Ln extends Wr{constructor(t){super(),this.elements=t}}function zc(n,t){let e=Hc(t);for(const r of n.elements)e=e.filter((s=>!zt(s,r)));return{arrayValue:{values:e}}}class Mr extends Wr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Ea(n){return nt(n.integerValue||n.doubleValue)}function Hc(n){return gi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function lf(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof On&&s instanceof On||r instanceof Ln&&s instanceof Ln?Ke(r.elements,s.elements,zt):r instanceof Mr&&s instanceof Mr?zt(r.Ee,s.Ee):r instanceof xr&&s instanceof xr})(n.transform,t.transform)}class uf{constructor(t,e){this.version=t,this.transformResults=e}}class Qt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Qt}static exists(t){return new Qt(void 0,t)}static updateTime(t){return new Qt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Tr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Qr{}function Gc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Wc(n.key,Qt.none()):new $n(n.key,n.data,Qt.none());{const e=n.data,r=kt.empty();let s=new ut(mt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ke(n.key,r,new Ot(s.toArray()),Qt.none())}}function hf(n,t,e){n instanceof $n?(function(s,o,a){const l=s.value.clone(),h=Ta(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof ke?(function(s,o,a){if(!Tr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Ta(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Kc(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function Sn(n,t,e,r){return n instanceof $n?(function(o,a,l,h){if(!Tr(o.precondition,a))return l;const d=o.value.clone(),m=Ia(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof ke?(function(o,a,l,h){if(!Tr(o.precondition,a))return l;const d=Ia(o.fieldTransforms,h,a),m=a.data;return m.setAll(Kc(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((E=>E.field)))})(n,t,e,r):(function(o,a,l){return Tr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function df(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=jc(r.transform,s||null);o!=null&&(e===null&&(e=kt.empty()),e.set(r.field,o))}return e||null}function va(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ke(r,s,((o,a)=>lf(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class $n extends Qr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ke extends Qr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Kc(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Ta(n,t,e){const r=new Map;W(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,cf(a,l,e[s]))}return r}function Ia(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,af(o,a,t))}return r}class Wc extends Qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ff extends Qr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&hf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Sn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Sn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Uc();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=Gc(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),z())}isEqual(t){return this.batchId===t.batchId&&Ke(this.mutations,t.mutations,((e,r)=>va(e,r)))&&Ke(this.baseMutations,t.baseMutations,((e,r)=>va(e,r)))}}class vi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){W(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=(function(){return ef})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new vi(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,H;function yf(n){switch(n){case C.OK:return L(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return L(15467,{code:n})}}function Qc(n){if(n===void 0)return Jt("GRPC error has no .code"),C.UNKNOWN;switch(n){case it.OK:return C.OK;case it.CANCELLED:return C.CANCELLED;case it.UNKNOWN:return C.UNKNOWN;case it.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case it.INTERNAL:return C.INTERNAL;case it.UNAVAILABLE:return C.UNAVAILABLE;case it.UNAUTHENTICATED:return C.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case it.NOT_FOUND:return C.NOT_FOUND;case it.ALREADY_EXISTS:return C.ALREADY_EXISTS;case it.PERMISSION_DENIED:return C.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case it.ABORTED:return C.ABORTED;case it.OUT_OF_RANGE:return C.OUT_OF_RANGE;case it.UNIMPLEMENTED:return C.UNIMPLEMENTED;case it.DATA_LOSS:return C.DATA_LOSS;default:return L(39323,{code:n})}}(H=it||(it={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new ce([4294967295,4294967295],0);function wa(n){const t=_c().encode(n),e=new uc;return e.update(t),new Uint8Array(e.digest())}function Aa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ce([e,r],0),new ce([s,o],0)]}class Ti{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Tn(`Invalid padding: ${e}`);if(r<0)throw new Tn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Tn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Tn(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=ce.fromNumber(this.fe)}pe(t,e,r){let s=t.add(e.multiply(ce.fromNumber(r)));return s.compare(_f)===1&&(s=new ce([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=wa(t),[r,s]=Aa(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);if(!this.ye(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ti(o,s,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.fe===0)return;const e=wa(t),[r,s]=Aa(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);this.we(a)}}we(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Tn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,jn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Xr(F.min(),s,new tt($),Yt(),z())}}class jn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new jn(r,e,z(),z(),z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=s}}class Xc{constructor(t,e){this.targetId=t,this.De=e}}class Jc{constructor(t,e,r=pt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ba{constructor(){this.ve=0,this.Ce=Ra(),this.Fe=pt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=z(),e=z(),r=z();return this.Ce.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L(38017,{changeType:o})}})),new jn(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=Ra()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Ef{constructor(t){this.We=t,this.Ge=new Map,this.ze=Yt(),this.je=gr(),this.Je=gr(),this.He=new tt($)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:L(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((r,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,r=t.De.count,s=this.st(e);if(s){const o=s.target;if(Gs(o))if(r===0){const a=new O(o.path);this.Xe(e,a,It.newNoDocument(a,F.min()))}else W(r===1,20013,{expectedCount:r});else{const a=this.ot(e);if(a!==r){const l=this._t(t),h=l?this.ut(l,t,a):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=me(r).toUint8Array()}catch(h){if(h instanceof Ic)return he("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Ti(a,s,o)}catch(h){return he(h instanceof Tn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.fe===0?null:l}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){const r=this.We.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Xe(e,o,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((o,a)=>{const l=this.st(a);if(l){if(o.current&&Gs(l.target)){const h=new O(l.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,It.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}}));let r=z();this.Je.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.ze.forEach(((o,a)=>a.setReadTime(t)));const s=new Xr(t,e,this.He,this.ze,r);return this.ze=Yt(),this.je=gr(),this.Je=gr(),this.He=new tt($),s}Ze(t,e){if(!this.nt(t))return;const r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new ba,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new ut($),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new ut($),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new ba),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function gr(){return new tt(O.comparator)}function Ra(){return new tt(O.comparator)}const vf={asc:"ASCENDING",desc:"DESCENDING"},Tf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},If={and:"AND",or:"OR"};class wf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ws(n,t){return n.useProto3Json||jr(t)?t:{value:t}}function Or(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Af(n,t){return Or(n,t.toTimestamp())}function $t(n){return W(!!n,49232),F.fromTimestamp((function(e){const r=fe(e);return new Y(r.seconds,r.nanos)})(n))}function Ii(n,t){return Qs(n,t).canonicalString()}function Qs(n,t){const e=(function(s){return new Z(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Zc(n){const t=Z.fromString(n);return W(sl(t),10190,{key:t.toString()}),t}function Xs(n,t){return Ii(n.databaseId,t.path)}function ks(n,t){const e=Zc(t);if(e.get(1)!==n.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(el(e))}function tl(n,t){return Ii(n.databaseId,t)}function bf(n){const t=Zc(n);return t.length===4?Z.emptyPath():el(t)}function Js(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function el(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Sa(n,t,e){return{name:Xs(n,t),fields:e.value.mapValue.fields}}function Rf(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,m){return d.useProto3Json?(W(m===void 0||typeof m=="string",58123),pt.fromBase64String(m||"")):(W(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),pt.fromUint8Array(m||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(d){const m=d.code===void 0?C.UNKNOWN:Qc(d.code);return new M(m,d.message||"")})(a);e=new Jc(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ks(n,r.document.name),o=$t(r.document.updateTime),a=r.document.createTime?$t(r.document.createTime):F.min(),l=new kt({mapValue:{fields:r.document.fields}}),h=It.newFoundDocument(s,o,a,l),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Ir(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ks(n,r.document),o=r.readTime?$t(r.readTime):F.min(),a=It.newNoDocument(s,o),l=r.removedTargetIds||[];e=new Ir([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ks(n,r.document),o=r.removedTargetIds||[];e=new Ir([],o,s,null)}else{if(!("filter"in t))return L(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new gf(s,o),l=r.targetId;e=new Xc(l,a)}}return e}function Sf(n,t){let e;if(t instanceof $n)e={update:Sa(n,t.key,t.value)};else if(t instanceof Wc)e={delete:Xs(n,t.key)};else if(t instanceof ke)e={update:Sa(n,t.key,t.data),updateMask:Of(t.fieldMask)};else{if(!(t instanceof ff))return L(16599,{Rt:t.type});e={verify:Xs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof xr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof On)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ln)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mr)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw L(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:Af(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(n,t.precondition)),e}function Pf(n,t){return n&&n.length>0?(W(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?$t(s.updateTime):$t(o);return a.isEqual(F.min())&&(a=$t(o)),new uf(a,s.transformResults||[])})(e,t)))):[]}function Cf(n,t){return{documents:[tl(n,t.path)]}}function Vf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=tl(n,s);const o=(function(d){if(d.length!==0)return rl(Ht.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((m=>(function(g){return{field:$e(g.field),direction:Nf(g.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ws(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{Vt:e,parent:s}}function Df(n){let t=bf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){W(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=(function(E){const g=nl(E);return g instanceof Ht&&kc(g)?g.getFilters():[g]})(e.where));let a=[];e.orderBy&&(a=(function(E){return E.map((g=>(function(k){return new Nr(je(k.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(k.direction))})(g)))})(e.orderBy));let l=null;e.limit&&(l=(function(E){let g;return g=typeof E=="object"?E.value:E,jr(g)?null:g})(e.limit));let h=null;e.startAt&&(h=(function(E){const g=!!E.before,S=E.values||[];return new kr(S,g)})(e.startAt));let d=null;return e.endAt&&(d=(function(E){const g=!E.before,S=E.values||[];return new kr(S,g)})(e.endAt)),Qd(t,s,a,o,l,"F",h,d)}function kf(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function nl(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=je(e.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=je(e.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=je(e.unaryFilter.field);return at.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=je(e.unaryFilter.field);return at.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(n):n.fieldFilter!==void 0?(function(e){return at.create(je(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Ht.create(e.compositeFilter.filters.map((r=>nl(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(e.compositeFilter.op))})(n):L(30097,{filter:n})}function Nf(n){return vf[n]}function xf(n){return Tf[n]}function Mf(n){return If[n]}function $e(n){return{fieldPath:n.canonicalString()}}function je(n){return mt.fromServerFormat(n.fieldPath)}function rl(n){return n instanceof at?(function(e){if(e.op==="=="){if(ma(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NAN"}};if(fa(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ma(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NOT_NAN"}};if(fa(e.value))return{unaryFilter:{field:$e(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$e(e.field),op:xf(e.op),value:e.value}}})(n):n instanceof Ht?(function(e){const r=e.getFilters().map((s=>rl(s)));return r.length===1?r[0]:{compositeFilter:{op:Mf(e.op),filters:r}}})(n):L(54877,{filter:n})}function Of(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function sl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e,r,s,o=F.min(),a=F.min(),l=pt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new ie(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ie(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t){this.gt=t}}function Ff(n){const t=Df({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ks(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.Dn=new Uf}addToCollectionParentIndex(t,e){return this.Dn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(de.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(de.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Uf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ut(Z.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ut(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},il=41943040;class Rt{static withCacheSize(t){return new Rt(t,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(il,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Xe(0)}static ur(){return new Xe(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="LruGarbageCollector",$f=1048576;function Va([n,t],[e,r]){const s=$(n,e);return s===0?$(t,r):s}class jf{constructor(t){this.Tr=t,this.buffer=new ut(Va),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Va(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class qf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){x(Ca,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){en(e)?x(Ca,"Ignoring IndexedDB error during garbage collection: ",e):await tn(e)}await this.Rr(3e5)}))}}class zf{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return P.resolve($r.ue);const r=new jf(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Pa)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pa):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,a,l,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((E=>(E>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s)))).next((E=>(r=E,l=Date.now(),this.removeTargets(t,r,e)))).next((E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((E=>(d=Date.now(),Be()<=G.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${E} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E}))))}}function Hf(n,t){return new zf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.changes=new De((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&Sn(r.mutation,s,Ot.empty(),Y.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,z()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=z()){const s=Ae();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=vn();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=Ae();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,z())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,s){let o=Yt();const a=Rn(),l=(function(){return Rn()})();return e.forEach(((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ke)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Sn(m.mutation,d,m.mutation.getFieldMask(),Y.now())):a.set(d.key,Ot.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>{var E;return l.set(d,new Kf(m,(E=a.get(d))!==null&&E!==void 0?E:null))})),l)))}recalculateAndSaveOverlays(t,e){const r=Rn();let s=new tt(((a,l)=>a-l)),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||Ot.empty();m=l.applyToLocalView(d,m),r.set(h,m);const E=(s.get(l.batchId)||z()).add(h);s=s.insert(l.batchId,E)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,m=h.value,E=Uc();m.forEach((g=>{if(!o.has(g)){const S=Gc(e.get(g),r.get(g));S!==null&&E.set(g,S),o=o.add(g)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,E))}return P.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Xd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(Ae());let l=kn,h=o;return a.next((d=>P.forEach(d,((m,E)=>(l<E.largestBatchId&&(l=E.largestBatchId),o.get(m)?P.resolve():this.remoteDocumentCache.getEntry(t,m).next((g=>{h=h.insert(m,g)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,z()))).next((m=>({batchId:l,changes:Bc(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((r=>{let s=vn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=vn();return this.indexManager.getCollectionParents(t,o).next((l=>P.forEach(l,(h=>{const d=(function(E,g){return new zr(g,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((m=>{m.forEach(((E,g)=>{a=a.insert(E,g)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,It.newInvalidDocument(m)))}));let l=vn();return a.forEach(((h,d)=>{const m=o.get(h);m!==void 0&&Sn(m.mutation,d,Ot.empty(),Y.now()),Kr(e,d)&&(l=l.insert(h,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return P.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:$t(s.createTime)}})(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:Ff(s.bundledQuery),readTime:$t(s.readTime)}})(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.overlays=new tt(O.comparator),this.kr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ae();return P.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.wt(t,e,o)})),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=Ae(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new tt(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Ae(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=Ae(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,m)=>l.set(d,m))),!(l.size()>=s)););return P.resolve(l)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new pf(e,r));let o=this.kr.get(e);o===void 0&&(o=z(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.qr=new ut(ht.Qr),this.$r=new ut(ht.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new ht(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new ht(t,e))}Gr(t,e){t.forEach((r=>this.removeReference(r,e)))}zr(t){const e=new O(new Z([])),r=new ht(e,t),s=new ht(e,t+1),o=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),o.push(a.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new O(new Z([])),r=new ht(e,t),s=new ht(e,t+1);let o=z();return this.$r.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ht(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ht{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return O.comparator(t.key,e.key)||$(t.Hr,e.Hr)}static Ur(t,e){return $(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new ut(ht.Qr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new mf(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new ht(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?mi:this.er-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ht(e,0),s=new ht(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],(a=>{const l=this.Zr(a.Hr);o.push(l)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ut($);return e.forEach((s=>{const o=new ht(s,0),a=new ht(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],(l=>{r=r.add(l.Hr)}))})),P.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new ht(new O(o),0);let l=new ut($);return this.Yr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Hr)),!0)}),a),P.resolve(this.ei(l))}ei(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){W(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return P.forEach(e.mutations,(s=>{const o=new ht(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=r}))}rr(t){}containsKey(t,e){const r=new ht(e,0),s=this.Yr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t){this.ni=t,this.docs=(function(){return new tt(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():It.newInvalidDocument(e))}getEntries(t,e){let r=Yt();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():It.newInvalidDocument(s))})),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Yt();const a=e.path,l=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Sd(Rd(m),r)<=0||(s.has(m.key)||Kr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L(9500)}ri(t,e){return P.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new tm(this)}getSize(t){return P.resolve(this.size)}}class tm extends Gf{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)})),P.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t){this.persistence=t,this.ii=new De((e=>yi(e)),_i),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.si=0,this.oi=new wi,this.targetCount=0,this._i=Xe.ar()}forEachTarget(t,e){return this.ii.forEach(((r,s)=>e(s))),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),P.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Xe(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.hr(e),P.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),P.waitFor(o).next((()=>s))}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,e){this.ai={},this.overlays={},this.ui=new $r(0),this.ci=!1,this.ci=!0,this.li=new Jf,this.referenceDelegate=t(this),this.hi=new em(this),this.indexManager=new Bf,this.remoteDocumentCache=(function(s){return new Zf(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Lf(e),this.Ti=new Qf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Xf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new Yf(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const s=new nm(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return P.or(Object.values(this.ai).map((r=>()=>r.containsKey(t,e))))}}class nm extends Cd{constructor(t){super(),this.currentSequenceNumber=t}}class Ai{constructor(t){this.persistence=t,this.Ai=new wi,this.Ri=null}static Vi(t){return new Ai(t)}get mi(){if(this.Ri)return this.Ri;throw L(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.mi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,(r=>{const s=O.fromPath(r);return this.fi(t,s).next((o=>{o||e.removeEntry(s,F.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return P.or([()=>P.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Lr{constructor(t,e){this.persistence=t,this.gi=new De((r=>kd(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Hf(this,e)}static Vi(t,e){return new Lr(t,e)}Ii(){}di(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}yr(t){let e=0;return this.gr(t,(r=>{e++})).next((()=>e))}gr(t,e){return P.forEach(this.gi,((r,s)=>this.Sr(t,r,s).next((o=>o?P.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,(a=>this.Sr(t,a,e).next((l=>{l||(r++,o.removeEntry(a,F.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),P.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),P.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Er(t.data.value)),e}Sr(t,e,r){return P.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=z(),s=z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new bi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Xu()?8:Vd(Wu())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ys(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new rm;return this.ws(t,e,a).next((l=>{if(o.result=l,this.Rs)return this.Ss(t,e,a,l.size)}))})).next((()=>o.result))}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(Be()<=G.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Ue(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(Be()<=G.DEBUG&&x("QueryEngine","Query:",Ue(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Be()<=G.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Ue(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ut(e))):P.resolve())}ps(t,e){if(_a(e))return P.resolve(null);let r=Ut(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Ks(e,null,"F"),r=Ut(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=z(...o);return this.gs.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.bs(e,l);return this.Ds(e,d,a,h.readTime)?this.ps(t,Ks(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ys(t,e,r,s){return _a(e)||s.isEqual(F.min())?P.resolve(null):this.gs.getDocuments(t,r).next((o=>{const a=this.bs(e,o);return this.Ds(e,a,r,s)?P.resolve(null):(Be()<=G.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ue(e)),this.vs(t,a,e,bd(s,kn)).next((l=>l)))}))}bs(t,e){let r=new ut(Lc(t));return e.forEach(((s,o)=>{Kr(t,o)&&(r=r.add(o))})),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return Be()<=G.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Ue(e)),this.gs.getDocumentsMatchingQuery(t,e,de.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="LocalStore",im=3e8;class om{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new tt($),this.Ms=new De((o=>yi(o)),_i),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Wf(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function am(n,t,e,r){return new om(n,t,e,r)}async function al(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function cm(n,t){const e=B(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,m){const E=d.batch,g=E.keys();let S=P.resolve();return g.forEach((k=>{S=S.next((()=>m.getEntry(h,k))).next((V=>{const D=d.docVersions.get(k);W(D!==null,48541),V.version.compareTo(D)<0&&(E.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),m.addEntry(V)))}))})),S.next((()=>l.mutationQueue.removeMutationBatch(h,E)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=z();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function cl(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function lm(n,t){const e=B(n),r=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const l=[];t.targetChanges.forEach(((m,E)=>{const g=s.get(E);if(!g)return;l.push(e.hi.removeMatchingKeys(o,m.removedDocuments,E).next((()=>e.hi.addMatchingKeys(o,m.addedDocuments,E))));let S=g.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?S=S.withResumeToken(pt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(E,S),(function(V,D,j){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=im?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(g,S,m)&&l.push(e.hi.updateTargetData(o,S))}));let h=Yt(),d=z();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))})),l.push(um(o,a,t.documentUpdates).next((m=>{h=m.Ls,d=m.ks}))),!r.isEqual(F.min())){const m=e.hi.getLastRemoteSnapshotVersion(o).next((E=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(m)}return P.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Fs=s,o)))}function um(n,t,e){let r=z(),s=z();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=Yt();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(F.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):x(Ri,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{Ls:a,ks:s}}))}function hm(n,t){const e=B(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=mi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function dm(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.hi.getTargetData(r,t).next((o=>o?(s=o,P.resolve(s)):e.hi.allocateTargetId(r).next((a=>(s=new ie(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r}))}async function Ys(n,t,e){const r=B(n),s=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!en(a))throw a;x(Ri,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function Da(n,t,e){const r=B(n);let s=F.min(),o=z();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,m){const E=B(h),g=E.Ms.get(m);return g!==void 0?P.resolve(E.Fs.get(g)):E.hi.getTargetData(d,m)})(r,a,Ut(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:F.min(),e?o:z()))).next((l=>(fm(r,Yd(t),l),{documents:l,qs:o})))))}function fm(n,t,e){let r=n.xs.get(t)||F.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.xs.set(t,r)}class ka{constructor(){this.activeTargetIds=sf()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mm{constructor(){this.Fo=new ka,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new ka,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="ConnectivityMonitor";class xa{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){x(Na,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){x(Na,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr=null;function Zs(){return yr===null?yr=(function(){return 268435456+Math.round(2147483648*Math.random())})():yr++,"0x"+yr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="RestConnection",gm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ym{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Vr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Zs(),l=this.Go(t,e.toUriEncodedString());x(Ns,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,s,o);const{host:d}=new URL(l),m=li(d);return this.jo(t,l,h,r,m).then((E=>(x(Ns,`Received RPC '${t}' ${a}: `,E),E)),(E=>{throw he(Ns,`RPC '${t}' ${a} failed with error: `,E,"url: ",l,"request:",r),E}))}Jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ze})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Go(t,e){const r=gm[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class Em extends ym{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const a=Zs();return new Promise(((l,h)=>{const d=new hc;d.setWithCredentials(!0),d.listenOnce(dc.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case _r.NO_ERROR:const E=d.getResponseJson();x(vt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(E)),l(E);break;case _r.TIMEOUT:x(vt,`RPC '${t}' ${a} timed out`),h(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const g=d.getStatus();if(x(vt,`RPC '${t}' ${a} failed with status:`,g,"response text:",d.getResponseText()),g>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const k=S==null?void 0:S.error;if(k&&k.status&&k.message){const V=(function(j){const U=j.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(U)>=0?U:C.UNKNOWN})(k.status);h(new M(V,k.message))}else h(new M(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new M(C.UNAVAILABLE,"Connection failed."));break;default:L(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{x(vt,`RPC '${t}' ${a} completed.`)}}));const m=JSON.stringify(s);x(vt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)}))}P_(t,e,r){const s=Zs(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=pc(),l=mc(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");x(vt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);this.T_(E);let g=!1,S=!1;const k=new _m({Ho:D=>{S?x(vt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(g||(x(vt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),g=!0),x(vt,`RPC '${t}' stream ${s} sending:`,D),E.send(D))},Yo:()=>E.close()}),V=(D,j,U)=>{D.listen(j,(q=>{try{U(q)}catch(X){setTimeout((()=>{throw X}),0)}}))};return V(E,En.EventType.OPEN,(()=>{S||(x(vt,`RPC '${t}' stream ${s} transport opened.`),k.s_())})),V(E,En.EventType.CLOSE,(()=>{S||(S=!0,x(vt,`RPC '${t}' stream ${s} transport closed`),k.__(),this.I_(E))})),V(E,En.EventType.ERROR,(D=>{S||(S=!0,he(vt,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),k.__(new M(C.UNAVAILABLE,"The operation could not be completed")))})),V(E,En.EventType.MESSAGE,(D=>{var j;if(!S){const U=D.data[0];W(!!U,16349);const q=U,X=(q==null?void 0:q.error)||((j=q[0])===null||j===void 0?void 0:j.error);if(X){x(vt,`RPC '${t}' stream ${s} received error:`,X);const Vt=X.status;let st=(function(_){const v=it[_];if(v!==void 0)return Qc(v)})(Vt),I=X.message;st===void 0&&(st=C.INTERNAL,I="Unknown error status: "+Vt+" with message "+X.message),S=!0,k.__(new M(st,I)),E.close()}else x(vt,`RPC '${t}' stream ${s} received:`,U),k.a_(U)}})),V(l,fc.STAT_EVENT,(D=>{D.stat===$s.PROXY?x(vt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===$s.NOPROXY&&x(vt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{k.o_()}),0),k}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function xs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(n){return new wf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="PersistentStream";class ul{constructor(t,e,r,s,o,a,l,h){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ll(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Jt(e.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===e&&this.W_(r,s)}),(r=>{t((()=>{const s=new M(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return x(Ma,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(x(Ma,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class vm extends ul{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=Rf(this.serializer,t),r=(function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?$t(a.readTime):F.min()})(t);return this.listener.J_(e,r)}H_(t){const e={};e.database=Js(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=Gs(h)?{documents:Cf(o,h)}:{query:Vf(o,h).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Yc(o,a.resumeToken);const d=Ws(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){l.readTime=Or(o,a.snapshotVersion.toTimestamp());const d=Ws(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=kf(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){const e={};e.database=Js(this.serializer),e.removeTarget=t,this.k_(e)}}class Tm extends ul{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return W(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){W(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Pf(t.writeResults,t.commitTime),r=$t(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=Js(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Sf(this.serializer,r)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{}class wm extends Im{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,Qs(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(C.UNKNOWN,o.toString())}))}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(t,Qs(e,r),s,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(C.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Am{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Jt(e),this._a=!1):x("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="RemoteStore";class bm{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Ne(this)&&(x(Ce,"Restarting streams for network reachability change."),await(async function(h){const d=B(h);d.Ia.add(4),await qn(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Yr(d)})(this))}))})),this.Aa=new Am(r,s)}}async function Yr(n){if(Ne(n))for(const t of n.da)await t(!0)}async function qn(n){for(const t of n.da)await t(!1)}function hl(n,t){const e=B(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Vi(e)?Ci(e):nn(e).x_()&&Pi(e,t))}function Si(n,t){const e=B(n),r=nn(e);e.Ta.delete(t),r.x_()&&dl(e,t),e.Ta.size===0&&(r.x_()?r.B_():Ne(e)&&e.Aa.set("Unknown"))}function Pi(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}nn(n).H_(t)}function dl(n,t){n.Ra.$e(t),nn(n).Y_(t)}function Ci(n){n.Ra=new Ef({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),nn(n).start(),n.Aa.aa()}function Vi(n){return Ne(n)&&!nn(n).M_()&&n.Ta.size>0}function Ne(n){return B(n).Ia.size===0}function fl(n){n.Ra=void 0}async function Rm(n){n.Aa.set("Online")}async function Sm(n){n.Ta.forEach(((t,e)=>{Pi(n,t)}))}async function Pm(n,t){fl(n),Vi(n)?(n.Aa.la(t),Ci(n)):n.Aa.set("Unknown")}async function Cm(n,t,e){if(n.Aa.set("Online"),t instanceof Jc&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))})(n,t)}catch(r){x(Ce,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Fr(n,r)}else if(t instanceof Ir?n.Ra.Ye(t):t instanceof Xc?n.Ra.it(t):n.Ra.et(t),!e.isEqual(F.min()))try{const r=await cl(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const l=o.Ra.Pt(a);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ta.get(d);m&&o.Ta.set(d,m.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,d)=>{const m=o.Ta.get(h);if(!m)return;o.Ta.set(h,m.withResumeToken(pt.EMPTY_BYTE_STRING,m.snapshotVersion)),dl(o,h);const E=new ie(m.target,h,d,m.sequenceNumber);Pi(o,E)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){x(Ce,"Failed to raise snapshot:",r),await Fr(n,r)}}async function Fr(n,t,e){if(!en(t))throw t;n.Ia.add(1),await qn(n),n.Aa.set("Offline"),e||(e=()=>cl(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{x(Ce,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Yr(n)}))}function ml(n,t){return t().catch((e=>Fr(n,e,t)))}async function Zr(n){const t=B(n),e=ge(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:mi;for(;Vm(t);)try{const s=await hm(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,Dm(t,s)}catch(s){await Fr(t,s)}pl(t)&&gl(t)}function Vm(n){return Ne(n)&&n.Pa.length<10}function Dm(n,t){n.Pa.push(t);const e=ge(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function pl(n){return Ne(n)&&!ge(n).M_()&&n.Pa.length>0}function gl(n){ge(n).start()}async function km(n){ge(n).na()}async function Nm(n){const t=ge(n);for(const e of n.Pa)t.X_(e.mutations)}async function xm(n,t,e){const r=n.Pa.shift(),s=vi.from(r,t,e);await ml(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Zr(n)}async function Mm(n,t){t&&ge(n).Z_&&await(async function(r,s){if((function(a){return yf(a)&&a!==C.ABORTED})(s.code)){const o=r.Pa.shift();ge(r).N_(),await ml(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Zr(r)}})(n,t),pl(n)&&gl(n)}async function Oa(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),x(Ce,"RemoteStore received new credentials");const r=Ne(e);e.Ia.add(3),await qn(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Yr(e)}async function Om(n,t){const e=B(n);t?(e.Ia.delete(2),await Yr(e)):t||(e.Ia.add(2),await qn(e),e.Aa.set("Unknown"))}function nn(n){return n.Va||(n.Va=(function(e,r,s){const o=B(e);return o.ia(),new vm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Rm.bind(null,n),e_:Sm.bind(null,n),n_:Pm.bind(null,n),J_:Cm.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),Vi(n)?Ci(n):n.Aa.set("Unknown")):(await n.Va.stop(),fl(n))}))),n.Va}function ge(n){return n.ma||(n.ma=(function(e,r,s){const o=B(e);return o.ia(),new Tm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:km.bind(null,n),n_:Mm.bind(null,n),ea:Nm.bind(null,n),ta:xm.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await Zr(n)):(await n.ma.stop(),n.Pa.length>0&&(x(Ce,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Di(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ki(n,t){if(Jt("AsyncQueue",`${t}: ${n}`),en(n))return new M(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{static emptySet(t){return new He(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=vn(),this.sortedSet=new tt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof He)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new He;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.fa=new tt(O.comparator)}track(t){const e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):L(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Je{constructor(t,e,r,s,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new Je(t,e,He.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Gr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class Fm{constructor(){this.queries=Fa(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=B(e),o=s.queries;s.queries=Fa(),o.forEach(((a,l)=>{for(const h of l.wa)h.onError(r)}))})(this,new M(C.ABORTED,"Firestore shutting down"))}}function Fa(){return new De((n=>Oc(n)),Gr)}async function yl(n,t){const e=B(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.ba()&&(r=2):(o=new Lm,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(s,!0);break;case 1:o.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=ki(a,`Initialization of query '${Ue(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&Ni(e)}async function _l(n,t){const e=B(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?s=t.ba()?0:1:!o.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Bm(n,t){const e=B(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.wa)l.Ca(s)&&(r=!0);a.ya=s}}r&&Ni(e)}function Um(n,t,e){const r=B(n),s=r.queries.get(t);if(s)for(const o of s.wa)o.onError(e);r.queries.delete(t)}function Ni(n){n.Da.forEach((t=>{t.next()}))}var ti,Ba;(Ba=ti||(ti={})).Fa="default",Ba.Cache="cache";class El{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Je(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Je.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==ti.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t){this.key=t}}class Tl{constructor(t){this.key=t}}class $m{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=z(),this.mutatedKeys=z(),this.Xa=Lc(t),this.eu=new He(this.Xa)}get tu(){return this.Ha}nu(t,e){const r=e?e.ru:new La,s=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,E)=>{const g=s.get(m),S=Kr(this.query,E)?E:null,k=!!g&&this.mutatedKeys.has(g.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;g&&S?g.data.isEqual(S.data)?k!==V&&(r.track({type:3,doc:S}),D=!0):this.iu(g,S)||(r.track({type:2,doc:S}),D=!0,(h&&this.Xa(S,h)>0||d&&this.Xa(S,d)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),D=!0):g&&!S&&(r.track({type:1,doc:g}),D=!0,(h||d)&&(l=!0)),D&&(S?(a=a.add(S),o=V?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{eu:a,ru:r,Ds:l,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort(((m,E)=>(function(S,k){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{At:D})}};return V(S)-V(k)})(m.type,E.type)||this.Xa(m.doc,E.doc))),this.su(r),s=s!=null&&s;const l=e&&!s?this.ou():[],h=this.Za.size===0&&this.current&&!s?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new Je(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new La,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=z(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const e=[];return t.forEach((r=>{this.Za.has(r)||e.push(new Tl(r))})),this.Za.forEach((r=>{t.has(r)||e.push(new vl(r))})),e}uu(t){this.Ha=t.qs,this.Za=z();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Je.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const xi="SyncEngine";class jm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class qm{constructor(t){this.key=t,this.lu=!1}}class zm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new De((l=>Oc(l)),Gr),this.Tu=new Map,this.Iu=new Set,this.du=new tt(O.comparator),this.Eu=new Map,this.Au=new wi,this.Ru={},this.Vu=new Map,this.mu=Xe.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Hm(n,t,e=!0){const r=Sl(n);let s;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await Il(r,t,e,!0),s}async function Gm(n,t){const e=Sl(n);await Il(e,t,!0,!1)}async function Il(n,t,e,r){const s=await dm(n.localStore,Ut(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await Km(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&hl(n.remoteStore,s),l}async function Km(n,t,e,r,s){n.gu=(E,g,S)=>(async function(V,D,j,U){let q=D.view.nu(j);q.Ds&&(q=await Da(V.localStore,D.query,!1).then((({documents:I})=>D.view.nu(I,q))));const X=U&&U.targetChanges.get(D.targetId),Vt=U&&U.targetMismatches.get(D.targetId)!=null,st=D.view.applyChanges(q,V.isPrimaryClient,X,Vt);return $a(V,D.targetId,st._u),st.snapshot})(n,E,g,S);const o=await Da(n.localStore,t,!0),a=new $m(t,o.qs),l=a.nu(o.documents),h=jn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);$a(n,e,d._u);const m=new jm(t,e,a);return n.Pu.set(t,m),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),d.snapshot}async function Wm(n,t,e){const r=B(n),s=r.Pu.get(t),o=r.Tu.get(s.targetId);if(o.length>1)return r.Tu.set(s.targetId,o.filter((a=>!Gr(a,t)))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ys(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Si(r.remoteStore,s.targetId),ei(r,s.targetId)})).catch(tn)):(ei(r,s.targetId),await Ys(r.localStore,s.targetId,!0))}async function Qm(n,t){const e=B(n),r=e.Pu.get(t),s=e.Tu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Si(e.remoteStore,r.targetId))}async function Xm(n,t,e){const r=rp(n);try{const s=await(function(a,l){const h=B(a),d=Y.now(),m=l.reduce(((S,k)=>S.add(k.key)),z());let E,g;return h.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let k=Yt(),V=z();return h.Os.getEntries(S,m).next((D=>{k=D,k.forEach(((j,U)=>{U.isValidDocument()||(V=V.add(j))}))})).next((()=>h.localDocuments.getOverlayedDocuments(S,k))).next((D=>{E=D;const j=[];for(const U of l){const q=df(U,E.get(U.key).overlayedDocument);q!=null&&j.push(new ke(U.key,q,Cc(q.value.mapValue),Qt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,j,l)})).next((D=>{g=D;const j=D.applyToLocalDocumentSet(E,V);return h.documentOverlayCache.saveOverlays(S,D.batchId,j)}))})).then((()=>({batchId:g.batchId,changes:Bc(E)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new tt($)),d=d.insert(l,h),a.Ru[a.currentUser.toKey()]=d})(r,s.batchId,e),await zn(r,s.changes),await Zr(r.remoteStore)}catch(s){const o=ki(s,"Failed to persist write");e.reject(o)}}async function wl(n,t){const e=B(n);try{const r=await lm(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Eu.get(o);a&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?W(a.lu,14607):s.removedDocuments.size>0&&(W(a.lu,42227),a.lu=!1))})),await zn(e,r,t)}catch(r){await tn(r)}}function Ua(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const h=B(a);h.onlineState=l;let d=!1;h.queries.forEach(((m,E)=>{for(const g of E.wa)g.va(l)&&(d=!0)})),d&&Ni(h)})(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Jm(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new tt(O.comparator);a=a.insert(o,It.newNoDocument(o,F.min()));const l=z().add(o),h=new Xr(F.min(),new Map,new tt($),a,l);await wl(r,h),r.du=r.du.remove(o),r.Eu.delete(t),Mi(r)}else await Ys(r.localStore,t,!1).then((()=>ei(r,t,e))).catch(tn)}async function Ym(n,t){const e=B(n),r=t.batch.batchId;try{const s=await cm(e.localStore,t);bl(e,r,null),Al(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await zn(e,s)}catch(s){await tn(s)}}async function Zm(n,t,e){const r=B(n);try{const s=await(function(a,l){const h=B(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return h.mutationQueue.lookupMutationBatch(d,l).next((E=>(W(E!==null,37113),m=E.keys(),h.mutationQueue.removeMutationBatch(d,E)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>h.localDocuments.getDocuments(d,m)))}))})(r.localStore,t);bl(r,t,e),Al(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await zn(r,s)}catch(s){await tn(s)}}function Al(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function bl(n,t,e){const r=B(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}function ei(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((r=>{n.Au.containsKey(r)||Rl(n,r)}))}function Rl(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Si(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Mi(n))}function $a(n,t,e){for(const r of e)r instanceof vl?(n.Au.addReference(r.key,t),tp(n,r)):r instanceof Tl?(x(xi,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||Rl(n,r.key)):L(19791,{yu:r})}function tp(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(x(xi,"New document in limbo: "+e),n.Iu.add(r),Mi(n))}function Mi(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new O(Z.fromString(t)),r=n.mu.next();n.Eu.set(r,new qm(e)),n.du=n.du.insert(e,r),hl(n.remoteStore,new ie(Ut(Hr(e.path)),r,"TargetPurposeLimboResolution",$r.ue))}}async function zn(n,t,e){const r=B(n),s=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,h)=>{a.push(r.gu(h,t,e).then((d=>{var m;if((d||e)&&r.isPrimaryClient){const E=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(d){s.push(d);const E=bi.Es(h.targetId,d);o.push(E)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(h,d){const m=B(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(E=>P.forEach(d,(g=>P.forEach(g.Is,(S=>m.persistence.referenceDelegate.addReference(E,g.targetId,S))).next((()=>P.forEach(g.ds,(S=>m.persistence.referenceDelegate.removeReference(E,g.targetId,S)))))))))}catch(E){if(!en(E))throw E;x(Ri,"Failed to update sequence numbers: "+E)}for(const E of d){const g=E.targetId;if(!E.fromCache){const S=m.Fs.get(g),k=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(k);m.Fs=m.Fs.insert(g,V)}}})(r.localStore,o))}async function ep(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){x(xi,"User change. New user:",t.toKey());const r=await al(e.localStore,t);e.currentUser=t,(function(o,a){o.Vu.forEach((l=>{l.forEach((h=>{h.reject(new M(C.CANCELLED,a))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await zn(e,r.Bs)}}function np(n,t){const e=B(n),r=e.Eu.get(t);if(r&&r.lu)return z().add(r.key);{let s=z();const o=e.Tu.get(t);if(!o)return s;for(const a of o){const l=e.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function Sl(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=wl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=np.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Jm.bind(null,t),t.hu.J_=Bm.bind(null,t.eventManager),t.hu.pu=Um.bind(null,t.eventManager),t}function rp(n){const t=B(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ym.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Zm.bind(null,t),t}class Br{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Jr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return am(this.persistence,new sm,t.initialUser,this.serializer)}Du(t){return new ol(Ai.Vi,this.serializer)}bu(t){return new mm}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Br.provider={build:()=>new Br};class sp extends Br{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){W(this.persistence.referenceDelegate instanceof Lr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new qf(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new ol((r=>Lr.Vi(r,e)),this.serializer)}}class ni{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ua(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ep.bind(null,this.syncEngine),await Om(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Fm})()}createDatastore(t){const e=Jr(t.databaseInfo.databaseId),r=(function(o){return new Em(o)})(t.databaseInfo);return(function(o,a,l,h){return new wm(o,a,l,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,l){return new bm(r,s,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>Ua(this.syncEngine,e,0)),(function(){return xa.C()?new xa:new pm})())}createSyncEngine(t,e){return(function(s,o,a,l,h,d,m){const E=new zm(s,o,a,l,h,d);return m&&(E.fu=!0),E})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=B(s);x(Ce,"RemoteStore shutting down."),o.Ia.add(5),await qn(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ni.provider={build:()=>new ni};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Jt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="FirestoreClient";class ip{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=di.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{x(ye,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(x(ye,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ki(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Ms(n,t){n.asyncQueue.verifyOperationInProgress(),x(ye,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await al(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>{he("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{x("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{he("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function ja(n,t){n.asyncQueue.verifyOperationInProgress();const e=await op(n);x(ye,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Oa(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Oa(t.remoteStore,s))),n._onlineComponents=t}async function op(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(ye,"Using user provided OfflineComponentProvider");try{await Ms(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;he("Error using user provided cache. Falling back to memory cache: "+e),await Ms(n,new Br)}}else x(ye,"Using default OfflineComponentProvider"),await Ms(n,new sp(void 0));return n._offlineComponents}async function Cl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(ye,"Using user provided OnlineComponentProvider"),await ja(n,n._uninitializedComponentsProvider._online)):(x(ye,"Using default OnlineComponentProvider"),await ja(n,new ni))),n._onlineComponents}function ap(n){return Cl(n).then((t=>t.syncEngine))}async function ri(n){const t=await Cl(n),e=t.eventManager;return e.onListen=Hm.bind(null,t.syncEngine),e.onUnlisten=Wm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Gm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Qm.bind(null,t.syncEngine),e}function cp(n,t,e={}){const r=new le;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,d){const m=new Pl({next:g=>{m.Ou(),a.enqueueAndForget((()=>_l(o,E)));const S=g.docs.has(l);!S&&g.fromCache?d.reject(new M(C.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&g.fromCache&&h&&h.source==="server"?d.reject(new M(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(g)},error:g=>d.reject(g)}),E=new El(Hr(l.path),m,{includeMetadataChanges:!0,ka:!0});return yl(o,E)})(await ri(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl="firestore.googleapis.com",za=!0;class Ha{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Dl,this.ssl=za}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:za;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=il;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<$f)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ad("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Oi{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ha({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ha(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new md;switch(r.type){case"firstParty":return new _d(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=qa.get(e);r&&(x("ComponentProvider","Removing Datastore"),qa.delete(e),r.terminate())})(this),Promise.resolve()}}function lp(n,t,e,r={}){var s;n=ue(n,Oi);const o=li(t),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(qu(`https://${h}`),Ku("Firestore",!0)),a.host!==Dl&&a.host!==h&&he("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!Rr(d,l)&&(n._setSettings(d),r.mockUserToken)){let m,E;if(typeof r.mockUserToken=="string")m=r.mockUserToken,E=Tt.MOCK_USER;else{m=zu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new M(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Tt(g)}n._authCredentials=new pd(new yc(m,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ts(this.firestore,t,this._query)}}class lt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new lt(this.firestore,t,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Un(e,lt._jsonSchema))return new lt(t,r||null,new O(Z.fromString(e.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:ot("string",lt._jsonSchemaVersion),referencePath:ot("string")};class Fn extends ts{constructor(t,e,r){super(t,e,Hr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new lt(this.firestore,null,new O(t))}withConverter(t){return new Fn(this.firestore,t,this._path)}}function es(n,t,...e){if(n=Cn(n),arguments.length===1&&(t=di.newId()),wd("doc","path",t),n instanceof Oi){const r=Z.fromString(t,...e);return ia(r),new lt(n,null,new O(r))}{if(!(n instanceof lt||n instanceof Fn))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return ia(r),new lt(n.firestore,n instanceof Fn?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="AsyncQueue";class Ka{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ll(this,"async_queue_retry"),this.oc=()=>{const r=xs();r&&x(Ga,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=xs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=xs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new le;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!en(t))throw t;x(Ga,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((r=>{throw this.tc=r,this.nc=!1,Jt("INTERNAL UNHANDLED ERROR: ",Wa(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Di.createAndSchedule(this,t,e,r,(o=>this.lc(o)));return this.ec.push(s),s}ac(){this.tc&&L(47125,{hc:Wa(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Wa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n){return(function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}class Bn extends Oi{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ka,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ka(t),this._firestoreClient=void 0,await t}}}function up(n,t){const e=typeof n=="object"?n:rd(),r=typeof n=="string"?n:Vr,s=Yh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=$u("firestore");o&&lp(s,...o)}return s}function Li(n){if(n._terminated)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hp(n),n._firestoreClient}function hp(n){var t,e,r;const s=n._freezeSettings(),o=(function(l,h,d,m){return new Md(l,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Vl(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new ip(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Nt(pt.fromBase64String(t))}catch(e){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Nt(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Un(t,Nt._jsonSchema))return Nt.fromBase64String(t.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:ot("string",Nt._jsonSchemaVersion),bytes:ot("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:jt._jsonSchemaVersion}}static fromJSON(t){if(Un(t,jt._jsonSchema))return new jt(t.latitude,t.longitude)}}jt._jsonSchemaVersion="firestore/geoPoint/1.0",jt._jsonSchema={type:ot("string",jt._jsonSchemaVersion),latitude:ot("number"),longitude:ot("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Un(t,qt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new qt(t.vectorValues);throw new M(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}qt._jsonSchemaVersion="firestore/vectorValue/1.0",qt._jsonSchema={type:ot("string",qt._jsonSchemaVersion),vectorValues:ot("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=/^__.*__$/;class fp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ke(t,this.data,this.fieldMask,e,this.fieldTransforms):new $n(t,this.data,e,this.fieldTransforms)}}function Nl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{Ec:n})}}class Bi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Bi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Ur(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Nl(this.Ec)&&dp.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class mp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Jr(t)}Dc(t,e,r,s=!1){return new Bi({Ec:t,methodName:e,bc:r,path:mt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pp(n){const t=n._freezeSettings(),e=Jr(n._databaseId);return new mp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function gp(n,t,e,r,s,o={}){const a=n.Dc(o.merge||o.mergeFields?2:0,t,e,s);Ll("Data must be an object, but it was:",a,r);const l=Ml(r,a);let h,d;if(o.merge)h=new Ot(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const g=yp(t,E,e);if(!a.contains(g))throw new M(C.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ep(m,g)||m.push(g)}h=new Ot(m),d=a.fieldTransforms.filter((E=>h.covers(E.field)))}else h=null,d=a.fieldTransforms;return new fp(new kt(l),h,d)}function xl(n,t){if(Ol(n=Cn(n)))return Ll("Unsupported field value:",t,n),Ml(n,t);if(n instanceof kl)return(function(r,s){if(!Nl(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const l of r){let h=xl(l,s.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=Cn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return of(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:Or(s.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Or(s.serializer,o)}}if(r instanceof jt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:Yc(s.serializer,r._byteString)};if(r instanceof lt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ii(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof qt)return(function(a,l){return{mapValue:{fields:{[Sc]:{stringValue:Pc},[Dr]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return Ei(l.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${fi(r)}`)})(n,t)}function Ml(n,t){const e={};return Tc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ve(n,((r,s)=>{const o=xl(s,t.Vc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Ol(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof jt||n instanceof Nt||n instanceof lt||n instanceof kl||n instanceof qt)}function Ll(n,t,e){if(!Ol(e)||!Ec(e)){const r=fi(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function yp(n,t,e){if((t=Cn(t))instanceof Fi)return t._internalPath;if(typeof t=="string")return Fl(n,t);throw Ur("Field path arguments must be of type string or ",n,!1,void 0,e)}const _p=new RegExp("[~\\*/\\[\\]]");function Fl(n,t,e){if(t.search(_p)>=0)throw Ur(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Fi(...t.split("."))._internalPath}catch{throw Ur(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ur(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new M(C.INVALID_ARGUMENT,l+n+h)}function Ep(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new vp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ul("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class vp extends Bl{data(){return super.data()}}function Ul(n,t){return typeof t=="string"?Fl(n,t):t instanceof Fi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ip{convertValue(t,e="none"){switch(pe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(me(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw L(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ve(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[Dr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>nt(a.doubleValue)));return new qt(o)}convertGeoPoint(t){return new jt(nt(t.latitude),nt(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=qr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Nn(t));default:return null}}convertTimestamp(t){const e=fe(t);return new Y(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);W(sl(r),9688,{name:t});const s=new xn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Jt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class In{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class be extends Bl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ul("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=be._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}be._jsonSchemaVersion="firestore/documentSnapshot/1.0",be._jsonSchema={type:ot("string",be._jsonSchemaVersion),bundleSource:ot("string","DocumentSnapshot"),bundleName:ot("string"),bundle:ot("string")};class wr extends be{data(t={}){return super.data(t)}}class Ge{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new In(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new wr(this._firestore,this._userDataWriter,r.key,r,new In(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const h=new wr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new In(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new wr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new In(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),m=a.indexOf(l.doc.key)),{type:Ap(l.type),doc:h,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ge._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=di.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Ap(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(n){n=ue(n,lt);const t=ue(n.firestore,Bn);return cp(Li(t),n._key).then((e=>jl(t,n,e)))}Ge._jsonSchemaVersion="firestore/querySnapshot/1.0",Ge._jsonSchema={type:ot("string",Ge._jsonSchemaVersion),bundleSource:ot("string","QuerySnapshot"),bundleName:ot("string"),bundle:ot("string")};class $l extends Ip{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new lt(this.firestore,null,e)}}function ns(n,t,e){n=ue(n,lt);const r=ue(n.firestore,Bn),s=wp(n.converter,t);return bp(r,[gp(pp(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Qt.none())])}function Xa(n,...t){var e,r,s;n=Cn(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Qa(t[a])||(o=t[a++]);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Qa(t[a])){const E=t[a];t[a]=(e=E.next)===null||e===void 0?void 0:e.bind(E),t[a+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),t[a+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let h,d,m;if(n instanceof lt)d=ue(n.firestore,Bn),m=Hr(n._key.path),h={next:E=>{t[a]&&t[a](jl(d,n,E))},error:t[a+1],complete:t[a+2]};else{const E=ue(n,ts);d=ue(E.firestore,Bn),m=E._query;const g=new $l(d);h={next:S=>{t[a]&&t[a](new Ge(d,g,E,S))},error:t[a+1],complete:t[a+2]},Tp(n._query)}return(function(g,S,k,V){const D=new Pl(V),j=new El(S,D,k);return g.asyncQueue.enqueueAndForget((async()=>yl(await ri(g),j))),()=>{D.Ou(),g.asyncQueue.enqueueAndForget((async()=>_l(await ri(g),j)))}})(Li(d),m,l,h)}function bp(n,t){return(function(r,s){const o=new le;return r.asyncQueue.enqueueAndForget((async()=>Xm(await ap(r),s,o))),o.promise})(Li(n),t)}function jl(n,t,e){const r=e.docs.get(t._key),s=new $l(n);return new be(n,s,t._key,r,new In(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Ze=s})(nd),Pr(new Vn("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Bn(new gd(r.getProvider("auth-internal")),new Ed(a,r.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(d.options.projectId,m)})(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),ze(ta,ea,t),ze(ta,ea,"esm2017")})();var Rp="firebase",Sp="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(Rp,Sp,"app");const Pp={apiKey:"AIzaSyCERd9rAdFL4j55BG_6q1sFebMBPlQV0Kk",authDomain:"ghino-86139.firebaseapp.com",projectId:"ghino-86139",storageBucket:"ghino-86139.firebasestorage.app",messagingSenderId:"251610009825",appId:"1:251610009825:web:584a352bd985e5b5e3e7a0",measurementId:"G-MGGWZS4FDM"},Cp=ac(Pp),rs=up(Cp),si=es(rs,"ghino","main"),ql=es(rs,"ghino","score"),zl=es(rs,"ghino","audit"),Hl=es(rs,"ghino","passwords"),Ct=["Mạnh","Hùng","Tú","Duy","Trâm"],Bt={manh:"Mạnh",hung:"Hùng",tu:"Tú",duy:"Duy",tram:"Trâm"};function ct(n){return!n&&n!==0?"0đ":Math.round(n).toLocaleString("vi-VN")+"đ"}function rt(n,t){const e=document.getElementById("toast");e&&(e.textContent=n,e.style.background=t?"var(--accent2)":"var(--accent3)",e.style.color="#111",e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2500))}function Gl(n,t=800,e=800,r=.7){return new Promise((s,o)=>{const a=new FileReader;a.readAsDataURL(n),a.onload=l=>{const h=new Image;h.src=l.target.result,h.onload=()=>{const d=document.createElement("canvas");let m=h.width,E=h.height;m>E?m>t&&(E=Math.round(E*t/m),m=t):E>e&&(m=Math.round(m*e/E),E=e),d.width=m,d.height=E,d.getContext("2d").drawImage(h,0,0,m,E);const S=d.toDataURL("image/jpeg",r);s(S)},h.onerror=d=>o(d)},a.onerror=l=>o(l)})}const b={db:{transactions:[],settlements:[]},dbReady:!1,currentUser:null,auditLog:[],scorePlayers:[{id:crypto.randomUUID(),name:"Hùng",score:0},{id:crypto.randomUUID(),name:"Duy",score:0},{id:crypto.randomUUID(),name:"Mạnh",score:0},{id:crypto.randomUUID(),name:"Tú",score:0}],scoreHistory:[],accounts:{manh:"123",hung:"123",tu:"123",duy:"123",tram:"123"},cardMode:"532",cardSlotSelection:{50:[],30:[],20:[],40:[],"30b":[],"20b":[],10:[]},foodSelected:[...Ct],foodPurpose:"",randomPlayers:["Tú","Mạnh","Hùng","Duy","Trâm"],currentRotation:0};function qe(n,t=!0){const e=document.getElementById("sync-status");e&&(e.textContent=n,e.style.color=t?"var(--accent3)":"var(--accent2)")}async function rn(n){b.db=n;try{await ns(si,n),qe("✔ Đã lưu")}catch(t){qe("✘ Lỗi lưu: "+t.message,!1)}}async function Vp(){try{const n=await Ui(zl);n.exists()&&(b.auditLog=n.data().log||[])}catch{b.auditLog=[]}}async function ii(n){b.auditLog.push(n);try{await ns(zl,{log:b.auditLog})}catch(t){console.error("Lỗi khi lưu audit log:",t)}}function Zt(n,t=""){if(!b.currentUser||["score_add","score_undo","score_delete"].includes(n))return;const e={id:crypto.randomUUID(),user:b.currentUser,userLabel:Bt[b.currentUser],type:n,detail:t,ts:Date.now(),date:new Date().toISOString()};return ii(e),e}const Dp={login:{icon:"🔑",label:"Đăng nhập",color:"#4ae8a0"},login_fail:{icon:"❌",label:"Đăng nhập thất bại",color:"#e84a4a"},logout:{icon:"🚪",label:"Đăng xuất",color:"#888"},change_password:{icon:"🔒",label:"Đổi mật khẩu",color:"#9a4ae8"},save_food:{icon:"💵",label:"Lưu chia tiền",color:"#e8c84a"},save_card:{icon:"🃏",label:"Lưu đánh bài",color:"#e89a4a"},settle:{icon:"✅",label:"Thanh toán nợ",color:"#4a9ae8"},delete_tx:{icon:"🗑",label:"Xóa giao dịch",color:"#e84a4a"},score_reset:{icon:"🎲",label:"Reset điểm số",color:"#e84a4a"},clear_logs:{icon:"🗑",label:"Xóa sạch lịch sử",color:"#e84a4a"}};function oi(){var o,a;const n=((o=document.getElementById("audit-filter-user"))==null?void 0:o.value)||"",t=((a=document.getElementById("audit-filter-type"))==null?void 0:a.value)||"";let e=[...b.auditLog].reverse();n&&(e=e.filter(l=>l.user===n)),t&&(e=e.filter(l=>l.type===t));const r=document.getElementById("audit-count");r&&(r.textContent=e.length+" sự kiện");const s=document.getElementById("audit-list");if(s){if(e.length===0){s.innerHTML='<div class="empty">Không có dữ liệu</div>';return}s.innerHTML=e.map(l=>{const h=Dp[l.type]||{icon:"•",label:l.type,color:"#888"},m=new Date(l.ts).toLocaleString("vi-VN",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"});return`
      <div style="display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid #1e1e1e;">
        <div style="font-size:1.1rem;margin-top:1px;flex-shrink:0;">${h.icon}</div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span style="font-family:'IBM Plex Mono',monospace;font-size:0.8rem;font-weight:700;color:${h.color};">${h.label}</span>
            <span style="font-family:'IBM Plex Mono',monospace;font-size:0.72rem;background:#222;border-radius:3px;padding:2px 7px;color:#ccc;">${l.userLabel||l.user}</span>
          </div>
          ${l.detail?`<div style="font-family:'IBM Plex Sans',sans-serif;font-size:0.78rem;color:#888;margin-top:3px;">${l.detail}</div>`:""}
          <div style="font-family:'IBM Plex Mono',monospace;font-size:0.65rem;color:#444;margin-top:4px;letter-spacing:0.5px;">${m}</div>
        </div>
      </div>`}).join("")}}async function kp(){try{const n=await Ui(Hl);n.exists()&&Object.assign(b.accounts,n.data())}catch(n){console.error("Lỗi tải mật khẩu:",n)}}async function Np(){try{await ns(Hl,b.accounts)}catch(n){console.error("Lỗi lưu mật khẩu:",n)}}async function xp(){if(!b.currentUser)return;const n=prompt("Mật khẩu hiện tại:");if(n===null)return;if(b.accounts[b.currentUser]!==n){rt("Sai mật khẩu hiện tại!",!0);return}const t=prompt("Mật khẩu mới (tối thiểu 2 ký tự):");if(!t||t.length<2){rt("Mật khẩu quá ngắn!",!0);return}const e=prompt("Nhập lại mật khẩu mới:");if(t!==e){rt("Mật khẩu không khớp!",!0);return}b.accounts[b.currentUser]=t,await Np(),Zt("change_password",`${Bt[b.currentUser]} đổi mật khẩu`),rt("Đổi mật khẩu thành công!")}let $i="";function Mp(n){$i=n,document.querySelectorAll(".login-chip").forEach(t=>{t.classList.toggle("active",t.getAttribute("data-user")===n)})}async function Ja(){const n=$i,t=document.getElementById("login-password").value,e=document.getElementById("login-error");if(!n){e.textContent="Vui lòng chọn tài khoản!",e.style.display="block";return}if(!t){e.textContent="Vui lòng nhập mật khẩu!",e.style.display="block";return}if(b.accounts[n]!==t){e.textContent="Sai mật khẩu!",e.style.display="block",document.getElementById("login-password").value="",await ii({id:crypto.randomUUID(),user:n,userLabel:Bt[n],type:"login_fail",detail:"Sai mật khẩu",ts:Date.now(),date:new Date().toISOString()});return}b.currentUser=n,sessionStorage.setItem("ghino_user",n),document.getElementById("login-overlay").style.display="none",document.getElementById("current-user-badge").style.display="flex",document.getElementById("current-user-name").textContent=Bt[n].toUpperCase(),await ii({id:crypto.randomUUID(),user:n,userLabel:Bt[n],type:"login",detail:"Đăng nhập thành công",ts:Date.now(),date:new Date().toISOString()}),rt("Xin chào "+Bt[n]+"!")}async function Op(){confirm("Đăng xuất?")&&(Zt("logout","Đăng xuất"),await new Promise(n=>setTimeout(n,300)),b.currentUser=null,sessionStorage.removeItem("ghino_user"),document.getElementById("login-overlay").style.display="flex",document.getElementById("current-user-badge").style.display="none",document.getElementById("login-password").value="",$i="",document.querySelectorAll(".login-chip").forEach(n=>n.classList.remove("active")))}function Lp(){const n=sessionStorage.getItem("ghino_user");n&&b.accounts[n]&&(b.currentUser=n,document.getElementById("login-overlay").style.display="none",document.getElementById("current-user-badge").style.display="flex",document.getElementById("current-user-name").textContent=Bt[n].toUpperCase())}function Re(){const n=b.db,t={};Ct.forEach(g=>t[g]=0),n.transactions.forEach(g=>{if(g.type==="food"){const S=Math.round(g.amount/g.participants.length);g.participants.forEach(k=>{k!==g.payer&&(t[k]-=S,t[g.payer]+=S)})}else g.type==="card"&&g.breakdown.forEach(S=>{S.person!==g.payer&&(t[S.person]-=S.amount,t[g.payer]+=S.amount)})}),n.settlements.forEach(g=>{t[g.from]+=g.amount,t[g.to]-=g.amount});const e=Ct.filter(g=>t[g]<0).map(g=>({name:g,amt:t[g]})),r=Ct.filter(g=>t[g]>0).map(g=>({name:g,amt:t[g]})),s=[],o=e.map(g=>({...g})),a=r.map(g=>({...g}));let l=0,h=0;for(;h<o.length&&l<a.length;){const g=Math.min(-o[h].amt,a[l].amt);g>0&&s.push({from:o[h].name,to:a[l].name,amount:g}),o[h].amt+=g,a[l].amt-=g,o[h].amt===0&&h++,a[l].amt===0&&l++}let d="";Ct.forEach(g=>{const S=t[g];let k="";const V=s.filter(D=>D.from===g||D.to===g);Math.abs(S)<1?k='<div class="debt-row"><span>Không nợ ai</span><span class="amount-zero">✔ Hòa</span></div>':V.forEach(D=>{D.from===g?k+=`<div class="debt-row"><span>→ Cần trả <strong>${D.to}</strong></span><span class="amount-pos">${ct(D.amount)}</span></div>`:k+=`<div class="debt-row"><span>← Được nhận từ <strong>${D.from}</strong></span><span class="amount-neg">${ct(D.amount)}</span></div>`}),d+=`
      <div class="debt-result">
        <div class="debt-name">${g} <span style="font-size:0.85rem;color:${S>0?"var(--accent3)":S<0?"var(--accent2)":"var(--muted)"}">
          [${S>0?"+"+ct(S):ct(S)}]
        </span></div>
        ${k}
      </div>`});const m=document.getElementById("debt-results");m&&(m.innerHTML=d||'<div class="empty">Không có dữ liệu</div>');const E=document.getElementById("suggest-box");E&&(s.length>0?(E.style.display="block",E.innerHTML=`
        <div class="summary-box">
          <div class="summary-title">💡 Cần thanh toán</div>
          ${s.map(g=>`
            <div class="transfer-row" style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
              <div>
                <strong>${g.from}</strong>
                <span class="arrow">→</span>
                <strong>${g.to}</strong>
              </div>
              <div style="display:flex; align-items:center; gap:10px; margin-left:auto;">
                <span class="amount-pos">${ct(g.amount)}</span>
                <button class="btn btn-ghost show-qr-btn" data-to="${g.to}" style="padding: 4px 10px; font-size: 0.72rem; text-transform:none; font-family:sans-serif; letter-spacing:0.5px; border-radius:3px;">Xem QR</button>
              </div>
            </div>`).join("")}
        </div>`,E.querySelectorAll(".show-qr-btn").forEach(g=>{g.onclick=()=>{const S=g.getAttribute("data-to");Up(S)}})):E.style.display="none")}async function Fp(){const n=document.getElementById("settle-from").value,t=document.getElementById("settle-to").value,e=parseFloat(document.getElementById("settle-amount").value)||0,r=document.getElementById("settle-purpose").value.trim(),s=document.getElementById("settle-bill");if(n===t){rt("Người trả và nhận phải khác nhau!",!0);return}if(!e){rt("Nhập số tiền!",!0);return}let o=null;if(s&&s.files&&s.files[0])try{rt("Đang nén ảnh bill thanh toán..."),o=await Gl(s.files[0],800,800,.7)}catch(h){console.error("Lỗi nén ảnh bill:",h),rt("Lỗi nén ảnh, giao dịch sẽ không lưu kèm ảnh bill!",!0)}const a=Date.now();b.db.settlements.push({id:a,date:new Date().toISOString(),from:n,to:t,amount:e,purpose:r,billImage:o}),b.db.transactions.push({id:a,type:"settle",date:new Date().toISOString(),amount:e,payer:n,purpose:r,details:`${n} trả ${t} ${ct(e)}${r?" — "+r:""}`,billImage:o}),document.getElementById("settle-amount").value="",document.getElementById("settle-purpose").value="",s&&(s.value=""),rt(`${n} đã trả ${t} ${ct(e)}`),Zt("settle",`${n} → ${t}: ${ct(e)}${r?" ("+r+")":""}`),Re(),Se();const l=new CustomEvent("dbUpdated");window.dispatchEvent(l),await rn(b.db)}function Se(){const n=b.db;let t=0,e=0,r=0;n.transactions.forEach(h=>{h.type==="food"&&(e+=h.amount,t+=h.amount),h.type==="card"&&(r+=h.amount,t+=h.amount)});const s=document.getElementById("stat-total"),o=document.getElementById("stat-food"),a=document.getElementById("stat-card"),l=document.getElementById("stat-txns");s&&(s.textContent=ct(t)),o&&(o.textContent=ct(e)),a&&(a.textContent=ct(r)),l&&(l.textContent=n.transactions.length)}function Bp(){const n=t=>{const e=document.getElementById(t);e&&(e.innerHTML=Ct.map(r=>`<option value="${r}">${r}</option>`).join(""))};n("settle-from"),n("settle-to")}function Up(n){const t=document.getElementById("qr-modal"),e=document.getElementById("qr-modal-body"),r=document.getElementById("qr-modal-desc"),s=document.getElementById("qr-modal-title");if(!t||!e)return;b.db.bankQRs=b.db.bankQRs||{};const o=b.db.bankQRs[n];s.textContent=`QR THANH TOÁN CỦA ${n.toUpperCase()}`,o?(e.innerHTML=`<img src="${o}" alt="QR ${n}" style="max-width:100%; max-height:280px; border-radius:4px; object-fit:contain;" />`,r.textContent=`Vui lòng quét mã để chuyển khoản cho ${n}.`):(e.innerHTML=`<div class="empty" style="padding:20px; font-size:0.85rem;">${n} chưa cấu hình mã QR ngân hàng.</div>`,r.textContent=`Vui lòng liên hệ ${n} thêm mã QR tại tab Tài Khoản.`),t.style.display="flex"}function Kl(){const n=document.getElementById("food-participants");n&&(n.innerHTML=Ct.map(t=>`
    <div class="person-chip ${b.foodSelected.includes(t)?"selected":""}"
         data-name="${t}">${t}</div>
  `).join(""),n.querySelectorAll(".person-chip").forEach(t=>{t.onclick=()=>{const e=t.getAttribute("data-name");$p(e,t)}}))}function $p(n,t){b.foodSelected.includes(n)?(b.foodSelected=b.foodSelected.filter(e=>e!==n),t.classList.remove("selected")):(b.foodSelected.push(n),t.classList.add("selected")),Ar()}function Ar(){const n=document.getElementById("food-amount"),t=n&&parseFloat(n.value)||0,e=document.getElementById("food-preview");if(!e)return;if(!t||b.foodSelected.length===0){e.style.display="none";return}const r=Math.round(t/b.foodSelected.length),s=document.getElementById("food-payer").value,o=document.getElementById("food-purpose-custom").value.trim();let a="";o&&(a+=`<div style="font-size:0.82rem;color:var(--accent3);font-family:'IBM Plex Mono',monospace;margin-bottom:10px;letter-spacing:0.5px;">${o}</div>`),a+=b.foodSelected.map(h=>{const d=h===s?0:r;return`<div class="debt-row"><span>${h}</span><span class="${d>0?"amount-pos":"amount-zero"}">${d>0?"→ "+ct(d):"✔ đã trả"}</span></div>`}).join("");const l=document.getElementById("food-preview-content");l&&(l.innerHTML=a),e.style.display="block"}async function jp(){const n=document.getElementById("food-amount"),t=n&&parseFloat(n.value)||0;if(!t){rt("Nhập số tiền!",!0);return}if(b.foodSelected.length<2){rt("Chọn ít nhất 2 người!",!0);return}const e=document.getElementById("food-payer").value,r=document.getElementById("food-purpose-custom").value.trim(),s=Math.round(t/b.foodSelected.length),o=r?r+" — ":"",a=Bt[b.currentUser]||b.currentUser||"Hệ thống";b.db.transactions.push({id:Date.now(),type:"food",date:new Date().toISOString(),amount:t,payer:e,purpose:r,participants:[...b.foodSelected],share:s,details:`${o}${e} trả — Chia đều ${b.foodSelected.join(", ")} — ${ct(s)}/người (Nhập bởi: ${a})`}),rt("Đã chia tiền!"),Zt("save_food",`${ct(t)} — ${e} trả — ${b.foodSelected.join(", ")}`),Wl(),window.dispatchEvent(new CustomEvent("dbUpdated")),await rn(b.db)}function Wl(){const n=document.getElementById("food-amount");n&&(n.value="");const t=document.getElementById("food-purpose-custom");t&&(t.value=""),b.foodSelected=[...Ct],Kl();const e=document.getElementById("food-preview");e&&(e.style.display="none")}function qp(){const n=document.getElementById("food-payer");n&&(n.innerHTML=Ct.map(t=>`<option value="${t}">${t}</option>`).join(""))}function Ya(n){b.cardMode=n;const t=document.getElementById("mode-532"),e=document.getElementById("mode-4321"),r=document.getElementById("card-slots-532"),s=document.getElementById("card-slots-4321");t&&t.classList.toggle("active",n==="532"),e&&e.classList.toggle("active",n==="4321"),r&&(r.style.display=n==="532"?"":"none"),s&&(s.style.display=n==="4321"?"":"none"),Object.keys(b.cardSlotSelection).forEach(a=>b.cardSlotSelection[a]=[]),ss();const o=document.getElementById("card-preview");o&&(o.style.display="none")}function ss(){const n=[{id:"slot-50",key:"50",cls:"p50"},{id:"slot-30",key:"30",cls:"p30"},{id:"slot-20",key:"20",cls:"p20"}],t=[{id:"slot-40",key:"40",cls:"p40"},{id:"slot-30b",key:"30b",cls:"p30"},{id:"slot-20b",key:"20b",cls:"p20"},{id:"slot-10",key:"10",cls:"p10"}];(b.cardMode==="532"?n:t).forEach(r=>{const s=document.getElementById(r.id);s&&(s.innerHTML=Ct.map(o=>{var a;return`
      <div class="person-chip ${(a=b.cardSlotSelection[r.key])!=null&&a.includes(o)?r.cls:""}"
           data-name="${o}">${o}</div>
    `}).join(""),s.querySelectorAll(".person-chip").forEach(o=>{o.onclick=()=>{const a=o.getAttribute("data-name");zp(a,r.key,r.cls)}}))})}function zp(n,t,e){const r=["50","30","20"],s=["40","30b","20b","10"];(b.cardMode==="532"?r:s).forEach(a=>{b.cardSlotSelection[a]=b.cardSlotSelection[a].filter(l=>l!==n)}),b.cardSlotSelection[t].push(n),ss(),ai()}function ai(){const n=document.getElementById("card-amount"),t=n&&parseFloat(n.value)||0,e=document.getElementById("card-preview");if(!e)return;if(!t){e.style.display="none";return}const r=document.getElementById("card-payer").value;let s="";b.cardMode==="532"?[{key:"50",pct:.5,label:"50%"},{key:"30",pct:.3,label:"30%"},{key:"20",pct:.2,label:"20%"}].forEach(l=>{b.cardSlotSelection[l.key].forEach(h=>{const d=Math.round(t*l.pct);s+=`<div class="debt-row"><span>${h} <small style="color:var(--muted)">(${l.label})</small></span><span class="${h===r?"amount-zero":"amount-pos"}">${h===r?"✔ đã trả":ct(d)}</span></div>`})}):[{key:"40",pct:.4,label:"40%"},{key:"30b",pct:.3,label:"30%"},{key:"20b",pct:.2,label:"20%"},{key:"10",pct:.1,label:"10%"}].forEach(l=>{b.cardSlotSelection[l.key].forEach(h=>{const d=Math.round(t*l.pct);s+=`<div class="debt-row"><span>${h} <small style="color:var(--muted)">(${l.label})</small></span><span class="${h===r?"amount-zero":"amount-pos"}">${h===r?"✔ đã trả":ct(d)}</span></div>`})}),s||(s='<div class="empty" style="padding:10px">Chọn người cho từng mức</div>');const o=document.getElementById("card-preview-content");o&&(o.innerHTML=s),e.style.display="block"}async function Hp(){const n=document.getElementById("card-amount"),t=n&&parseFloat(n.value)||0;if(!t){rt("Nhập số tiền!",!0);return}const e=document.getElementById("card-payer").value;let r=[];if(b.cardMode==="532"?[["50",.5],["30",.3],["20",.2]].forEach(([o,a])=>{b.cardSlotSelection[o].forEach(l=>r.push({person:l,pct:a,amount:Math.round(t*a)}))}):[["40",.4],["30b",.3],["20b",.2],["10",.1]].forEach(([o,a])=>{b.cardSlotSelection[o].forEach(l=>r.push({person:l,pct:a,amount:Math.round(t*a)}))}),r.length===0){rt("Chọn người chơi!",!0);return}const s=Bt[b.currentUser]||b.currentUser||"Hệ thống";b.db.transactions.push({id:Date.now(),type:"card",date:new Date().toISOString(),amount:t,payer:e,mode:b.cardMode,breakdown:r,details:`${r.map(o=>`${o.person}:${Math.round(o.pct*100)}%`).join(", ")} (Nhập bởi: ${s})`}),rt("Đã lưu đánh bài!"),Zt("save_card",`${ct(t)} — ${e} trả — ${r.map(o=>o.person+":"+Math.round(o.pct*100)+"%").join(", ")}`),Ql(),window.dispatchEvent(new CustomEvent("dbUpdated")),await rn(b.db)}function Ql(){const n=document.getElementById("card-amount");n&&(n.value=""),Object.keys(b.cardSlotSelection).forEach(e=>b.cardSlotSelection[e]=[]),ss();const t=document.getElementById("card-preview");t&&(t.style.display="none")}function Gp(){const n=document.getElementById("card-payer");n&&(n.innerHTML=Ct.map(t=>`<option value="${t}">${t}</option>`).join(""))}async function xe(){try{await ns(ql,{players:b.scorePlayers,history:b.scoreHistory})}catch(n){console.error("Lỗi khi lưu dữ liệu điểm:",n)}}function _e(){const n=document.getElementById("score-players");n&&(n.innerHTML=b.scorePlayers.map(t=>`
    <div class="score-player" data-id="${t.id}">
      <input
        class="score-add"
        type="number"
        placeholder="+"
        enterkeyhint="done"
      />
      <input
        class="score-name"
        type="text"
        value="${t.name}"
      />
      <input
        class="score-total"
        type="number"
        value="${t.score}"
      />
    </div>
  `).join(""),n.querySelectorAll(".score-player").forEach(t=>{const e=t.getAttribute("data-id"),r=t.querySelector(".score-add"),s=t.querySelector(".score-name"),o=t.querySelector(".score-total");t.onclick=a=>{b.scoreDeleteMode&&a.target!==r&&a.target!==s&&a.target!==o&&Yp(e)},r.onkeydown=a=>{a.key==="Enter"&&r.blur()},r.onblur=()=>{Kp(e,r)},s.onchange=()=>{Wp(e,s.value)},o.onchange=()=>{Qp(e,o.value)}}),tg())}async function Kp(n,t){const e=parseInt(t.value);if(isNaN(e)){t.value="";return}const r=b.scorePlayers.find(o=>o.id===n);if(!r)return;r.score+=e;const s=b.currentUser?Bt[b.currentUser]||b.currentUser:"Hệ thống";b.scoreHistory.push({type:"add",entryId:crypto.randomUUID(),id:n,value:e,date:Date.now(),addedByName:s}),Zt("score_add",`+${e} cho ${r.name}`),t.value="",await xe(),_e(),window.dispatchEvent(new CustomEvent("scoreUpdated"))}async function Wp(n,t){const e=b.scorePlayers.find(r=>r.id===n);e&&(e.name=t,await xe(),window.dispatchEvent(new CustomEvent("scoreUpdated")))}async function Qp(n,t){const e=b.scorePlayers.find(s=>s.id===n);if(!e)return;const r=parseInt(t);isNaN(r)||(e.score=r,await xe())}async function Xp(){b.scorePlayers.push({id:crypto.randomUUID(),name:"New",score:0}),await xe(),_e(),window.dispatchEvent(new CustomEvent("scoreUpdated"))}function Jp(){b.scoreDeleteMode=!b.scoreDeleteMode;const n=document.getElementById("score-delete-btn");n&&(n.style.opacity=b.scoreDeleteMode?"1":"0.6"),_e()}async function Yp(n){b.scoreDeleteMode&&Xl()&&confirm("Xóa người này?")&&(b.scorePlayers=b.scorePlayers.filter(t=>t.id!==n),b.scoreHistory=b.scoreHistory.filter(t=>t.id!==n),await xe(),_e(),window.dispatchEvent(new CustomEvent("scoreUpdated")))}function Xl(){const n=prompt("Nhập mật khẩu tài khoản của bạn:");return!b.currentUser||b.accounts[b.currentUser]!==n?(rt("Sai mật khẩu!",!0),!1):!0}async function Zp(n){const t=b.scoreHistory.find(s=>s.entryId===n);if(!t||b.scoreHistory.some(s=>s.type==="undo"&&s.target===n))return;const r=b.scorePlayers.find(s=>s.id===t.id);r&&(r.score-=t.value),b.scoreHistory.push({type:"undo",target:n,id:t.id,value:t.value,date:Date.now()}),await xe(),_e(),window.dispatchEvent(new CustomEvent("scoreUpdated"))}function tg(){const n=document.getElementById("score-history");if(!n)return;const t=b.scoreHistory.filter(s=>s.type==="add"||!s.type),e=new Set(b.scoreHistory.filter(s=>s.type==="delete").map(s=>s.target)),r=new Set(b.scoreHistory.filter(s=>s.type==="undo").map(s=>s.target));if(t.length===0){n.innerHTML='<div class="empty">Chưa có lịch sử</div>';return}n.innerHTML=t.slice().reverse().map(s=>{const o=b.scorePlayers.find(S=>S.id===s.id),a=e.has(s.entryId),l=r.has(s.entryId);let h="";a?h=`<span style="font-family:'IBM Plex Mono',monospace;font-size:0.65rem;color:var(--accent2);margin-left:6px;">DELETED</span>`:l&&(h=`<span style="font-family:'IBM Plex Mono',monospace;font-size:0.65rem;color:var(--muted);margin-left:6px;">↩ UNDONE</span>`);const d=a||l?"text-decoration:line-through;opacity:0.4;":"";let m='<span style="width:62px;display:inline-block;"></span>';!a&&!l&&(m=`<button class="btn btn-ghost score-undo-btn" style="font-size:0.7rem;padding:5px 10px;color:var(--muted);" data-entry-id="${s.entryId}">↩ Undo</button>`);const E=s.date?new Date(s.date).toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"}):"",g=s.addedByName?`<span style="font-size:0.68rem;color:var(--muted);margin-left:8px;">(Ghi bởi: ${s.addedByName})</span>`:"";return`
      <div class="score-history-item" style="${a||l?"opacity:0.5;":""}">
        <div style="${d}">
          <strong>${o?o.name:"?"}</strong>
          <span style="font-family:'IBM Plex Mono',monospace;color:var(--accent3);margin-left:4px;">+${s.value}</span>
          ${h}
          ${g}
          ${E?`<span style="font-size:0.68rem;color:var(--muted);margin-left:8px;">${E}</span>`:""}
        </div>
        ${m}
      </div>
    `}).join(""),n.querySelectorAll(".score-undo-btn").forEach(s=>{s.onclick=()=>{const o=s.getAttribute("data-entry-id");Zp(o)}})}async function eg(){Xl()&&confirm("Reset toàn bộ điểm và lịch sử?")&&(Zt("score_reset","Reset toàn bộ điểm và lịch sử"),b.scorePlayers=[],b.scoreHistory=[],await xe(),_e(),window.dispatchEvent(new CustomEvent("scoreUpdated")))}function Hn(){const n=document.getElementById("random-list");n&&(n.innerHTML=b.randomPlayers.map((t,e)=>`
    <div class="random-row" data-index="${e}">
      <input
        type="text"
        value="${t}"
        class="random-name-input"
      />
      <div class="random-percent">
        🎲
      </div>
      <button class="btn btn-danger delete-random-btn">
        X
      </button>
    </div>
  `).join(""),n.querySelectorAll(".random-row").forEach(t=>{const e=parseInt(t.getAttribute("data-index")),r=t.querySelector(".random-name-input"),s=t.querySelector(".delete-random-btn");r.onchange=()=>{sg(e,r.value)},s.onclick=()=>{rg(e)}}),og())}function ng(){b.randomPlayers.push("New"),Hn()}function rg(n){b.randomPlayers.splice(n,1),Hn()}function sg(n,t){b.randomPlayers[n]=t,Hn()}function ig(){const n={};if(b.randomPlayers.length===0)return n;const t=100/b.randomPlayers.length;return b.randomPlayers.forEach(e=>{n[e]=t}),n}function og(){const n=document.getElementById("wheel");if(!n)return;const t=n.getContext("2d"),e=n.width,r=e/2,s=r-8;t.clearRect(0,0,e,e);const o=["#e84a4a","#4ae8a0","#e8c84a","#9a4ae8","#4a9ae8","#e89a4a","#ff6b81","#2ed573"],a=b.randomPlayers.length;if(a===0)return;const l=Math.PI*2/a;for(let h=0;h<a;h++){const d=-Math.PI/2+h*l,m=d+l,E=d+l/2;t.beginPath(),t.moveTo(r,r),t.arc(r,r,s,d,m),t.closePath(),t.fillStyle=o[h%o.length],t.fill(),t.strokeStyle="#111",t.lineWidth=3,t.stroke(),t.save(),t.translate(r,r),t.rotate(E),t.fillStyle="#ffffff",t.font="bold 18px sans-serif",t.textAlign="left",t.textBaseline="middle",t.fillText(b.randomPlayers[h],s*.45,0),t.restore()}}function ag(n){const t=Math.random()*100;let e=0;for(const r in n)if(e+=n[r],t<=e)return r;return Object.keys(n)[0]}function cg(){if(b.randomPlayers.length===0)return;const n=ig(),t=ag(n),e=document.getElementById("wheel");if(!e)return;const r=b.randomPlayers.indexOf(t),s=360/b.randomPlayers.length,o=(Math.random()*.8+.1)*s,a=360-r*s-o,l=Math.floor(b.currentRotation/360)*360,h=360*5;b.currentRotation=l+h+a,e.style.transform=`rotate(${b.currentRotation}deg)`,setTimeout(()=>{const d=document.getElementById("random-result");d&&(d.innerHTML=`🎉 ${t}`),rt(`Random ra: ${t}`)},5200)}function Jl(){b.randomPlayers=b.scorePlayers.map(n=>n.name),Hn()}function Pt(){var m,E,g,S,k;let t=[...b.db.transactions];const e=((m=document.getElementById("log-filter-keyword"))==null?void 0:m.value.toLowerCase().trim())||"",r=((E=document.getElementById("log-filter-type"))==null?void 0:E.value)||"",s=((g=document.getElementById("log-filter-payer"))==null?void 0:g.value)||"",o=((S=document.getElementById("log-filter-start-date"))==null?void 0:S.value)||"",a=((k=document.getElementById("log-filter-end-date"))==null?void 0:k.value)||"";if(e&&(t=t.filter(V=>V.details&&V.details.toLowerCase().includes(e)||V.purpose&&V.purpose.toLowerCase().includes(e)||V.payer&&V.payer.toLowerCase().includes(e))),r&&(t=t.filter(V=>V.type===r)),s&&(t=t.filter(V=>V.payer===s)),o){const V=new Date(o);V.setHours(0,0,0,0),t=t.filter(D=>new Date(D.date)>=V)}if(a){const V=new Date(a);V.setHours(23,59,59,999),t=t.filter(D=>new Date(D.date)<=V)}t.reverse();const l=document.getElementById("log-count");l&&(l.textContent=t.length+" bản ghi");const h=document.getElementById("log-table-wrap");if(!h)return;if(t.length===0){h.innerHTML='<div class="empty">Không tìm thấy giao dịch nào phù hợp</div>';return}const d=t.map(V=>{const j=new Date(V.date).toLocaleString("vi-VN"),U=V.type==="food"?"tag-food":V.type==="card"?"tag-card":"tag-settle",q=V.type==="food"?"💵 Chia tiền":V.type==="card"?"🃏 Bài":"💸 Trả",X=V.billImage?`<div class="bill-thumbnail" style="margin-top:6px; cursor:pointer;" data-bill="${V.billImage}"><img src="${V.billImage}" alt="Bill" style="max-width:80px; max-height:60px; border-radius:4px; border:1px solid var(--border);" /></div>`:"";return`<tr>
      <td style="color:var(--muted);font-size:0.78rem;font-family:'IBM Plex Mono',monospace;white-space:nowrap">${j}</td>
      <td><span class="tag ${U}">${q}</span></td>
      <td style="font-family:'IBM Plex Mono',monospace;font-weight:600;color:var(--accent)">${ct(V.amount)}</td>
      <td style="font-size:0.8rem;color:var(--muted)">
        <div>${V.details||""}</div>
        ${X}
      </td>
      <td><button class="btn btn-danger delete-tx-btn" data-id="${V.id}">✕</button></td>
    </tr>`}).join("");h.innerHTML=`
    <table class="log-table">
      <thead><tr>
        <th>Ngày</th><th>Loại</th><th>Số tiền</th><th>Chi tiết</th><th></th>
      </tr></thead>
      <tbody>${d}</tbody>
    </table>`,h.querySelectorAll(".delete-tx-btn").forEach(V=>{V.onclick=()=>{const D=parseInt(V.getAttribute("data-id"));ug(D)}}),h.querySelectorAll(".bill-thumbnail").forEach(V=>{V.onclick=()=>{const D=V.getAttribute("data-bill");lg(D)}})}function lg(n){const t=document.getElementById("lightbox-modal"),e=document.getElementById("lightbox-img");!t||!e||(e.src=n,t.style.display="flex")}async function ug(n){if(!confirm("Xóa giao dịch này?"))return;const t=b.db.transactions.find(e=>e.id===n);Zt("delete_tx",t?`${t.type} — ${ct(t.amount)} — ${t.details||""}`:`id:${n}`),t&&t.type==="settle"&&(b.db.settlements=b.db.settlements.filter(e=>!(e.id===n||e.from===t.payer&&e.amount===t.amount))),b.db.transactions=b.db.transactions.filter(e=>e.id!==n),Pt(),Re(),Se(),await rn(b.db)}async function hg(){confirm("Xóa TOÀN BỘ lịch sử? Không thể hoàn tác!")&&(b.db={transactions:[],settlements:[]},Zt("clear_logs","Xóa toàn bộ lịch sử giao dịch và thanh toán"),Pt(),Re(),Se(),await rn(b.db))}function dg(){const n=document.getElementById("log-filter-payer");n&&(n.innerHTML='<option value="">Tất cả người trả</option>'+Ct.map(t=>`<option value="${t}">${t}</option>`).join(""))}function fg(){const n=document.getElementById("log-filter-keyword"),t=document.getElementById("log-filter-type"),e=document.getElementById("log-filter-payer"),r=document.getElementById("log-filter-start-date"),s=document.getElementById("log-filter-end-date");n&&(n.value=""),t&&(t.value=""),e&&(e.value=""),r&&(r.value=""),s&&(s.value=""),Pt()}function Pn(){const n=document.getElementById("qr-manager-list");n&&(b.db.bankQRs=b.db.bankQRs||{},n.innerHTML=Ct.map(t=>{const e=b.db.bankQRs[t]||"";return`
      <div class="card" style="display:flex; flex-direction:column; gap:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-family:'Bebas Neue',sans-serif; font-size:1.4rem; letter-spacing:1px; color:var(--accent);">${t}</h3>
          <label class="btn btn-ghost" style="padding: 6px 14px; font-size: 0.72rem; margin:0; display:inline-block; text-align:center; cursor:pointer;">
            TẢI QR LÊN
            <input type="file" class="qr-upload-input" data-person="${t}" accept="image/*" style="display:none;" />
          </label>
        </div>
        <div style="display:flex; justify-content:center; align-items:center; background:#111; border:1px dashed var(--border); border-radius:6px; min-height:180px; padding:10px;">
          ${e?`<img src="${e}" alt="QR ${t}" style="max-width:100%; max-height:220px; border-radius:4px; object-fit:contain;" />`:'<div class="empty" style="padding:20px;">Chưa có ảnh QR</div>'}
        </div>
      </div>
    `}).join(""),n.querySelectorAll(".qr-upload-input").forEach(t=>{t.onchange=async e=>{const r=e.target.files[0];if(!r)return;const s=t.getAttribute("data-person");try{rt(`Đang xử lý ảnh QR cho ${s}...`);const o=await Gl(r,800,800,.7);b.db.bankQRs[s]=o,Pn(),rt(`Đã cập nhật ảnh QR cho ${s}`),await rn(b.db)}catch(o){console.error("Lỗi tải ảnh QR:",o),rt("Lỗi tải ảnh QR!",!0)}}}))}function mg(n,t){document.querySelectorAll(".tab-panel").forEach(r=>r.classList.remove("active")),document.querySelectorAll(".tab-btn").forEach(r=>r.classList.remove("active"));const e=document.getElementById("tab-"+n);e&&e.classList.add("active"),t&&t.classList.add("active"),n==="home"&&(Re(),Se()),n==="log"&&Pt(),n==="audit"&&oi(),n==="qr"&&Pn()}async function Za(){const n=new Date,t=document.getElementById("date-display");t&&(t.textContent=n.toLocaleDateString("vi-VN",{weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}).toUpperCase()),await Vp(),await kp(),Lp(),qp(),Gp(),Bp(),dg(),Kl(),ss(),_e(),Hn(),Pn(),qe("⟳ Đang kết nối...",!0);try{const e=await Ui(si);e.exists()&&(b.db=e.data()),qe("✔ Đã kết nối"),b.dbReady=!0,Pt(),Re(),Se(),Pn(),Xa(si,r=>{r.exists()&&(b.db=r.data(),Pt(),Re(),Se(),Pn(),qe("🔄 Đồng bộ xong"))}),Xa(ql,r=>{if(r.exists()){const s=r.data();b.scorePlayers=s.players||[],b.scoreHistory=s.history||[],_e(),Jl()}})}catch(e){qe("✘ Không kết nối được: "+e.message,!1),b.dbReady=!0,Pt(),Re(),Se()}pg()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Za):Za();function pg(){const n=document.getElementById("app-tabs");n&&n.querySelectorAll(".tab-btn").forEach(wt=>{wt.onclick=Kn=>{const Lt=wt.getAttribute("data-tab");mg(Lt,wt)}});const t=document.getElementById("login-user-chips");t&&t.querySelectorAll(".login-chip").forEach(wt=>{wt.onclick=()=>{const Kn=wt.getAttribute("data-user");Mp(Kn)}});const e=document.getElementById("login-password");e&&(e.onkeydown=wt=>{wt.key==="Enter"&&Ja()});const r=document.getElementById("login-submit-btn");r&&(r.onclick=()=>Ja());const s=document.getElementById("change-password-btn");s&&(s.onclick=()=>xp());const o=document.getElementById("logout-btn");o&&(o.onclick=()=>Op());const a=document.getElementById("settle-btn");a&&(a.onclick=()=>Fp());const l=document.getElementById("food-amount");l&&(l.oninput=()=>Ar());const h=document.getElementById("food-payer");h&&(h.onchange=()=>Ar());const d=document.getElementById("food-purpose-custom");d&&(d.oninput=()=>Ar());const m=document.getElementById("food-reset-btn");m&&(m.onclick=()=>Wl());const E=document.getElementById("food-save-btn");E&&(E.onclick=()=>jp());const g=document.getElementById("card-amount");g&&(g.oninput=()=>ai());const S=document.getElementById("card-payer");S&&(S.onchange=()=>ai());const k=document.getElementById("card-reset-btn");k&&(k.onclick=()=>Ql());const V=document.getElementById("card-save-btn");V&&(V.onclick=()=>Hp());const D=document.getElementById("mode-532");D&&(D.onclick=()=>Ya("532"));const j=document.getElementById("mode-4321");j&&(j.onclick=()=>Ya("4321"));const U=document.getElementById("score-add-player-btn");U&&(U.onclick=()=>Xp());const q=document.getElementById("score-delete-btn");q&&(q.onclick=()=>Jp());const X=document.getElementById("score-reset-btn");X&&(X.onclick=()=>eg());const Vt=document.getElementById("spin-wheel-btn");Vt&&(Vt.onclick=()=>cg());const st=document.getElementById("add-random-person-btn");st&&(st.onclick=()=>ng());const I=document.getElementById("log-filter-keyword");I&&(I.oninput=()=>Pt());const p=document.getElementById("log-filter-type");p&&(p.onchange=()=>Pt());const _=document.getElementById("log-filter-payer");_&&(_.onchange=()=>Pt());const v=document.getElementById("log-filter-start-date");v&&(v.onchange=()=>Pt());const T=document.getElementById("log-filter-end-date");T&&(T.onchange=()=>Pt());const A=document.getElementById("log-filter-reset-btn");A&&(A.onclick=()=>fg());const y=document.getElementById("clear-all-logs-btn");y&&(y.onclick=()=>hg());const Dt=document.getElementById("audit-filter-user");Dt&&(Dt.onchange=()=>oi());const te=document.getElementById("audit-filter-type");te&&(te.onchange=()=>oi());const Gn=document.getElementById("close-qr-modal"),xt=document.getElementById("qr-modal");Gn&&xt&&(Gn.onclick=()=>{xt.style.display="none"},xt.onclick=wt=>{wt.target===xt&&(xt.style.display="none")});const ee=document.getElementById("close-lightbox"),Gt=document.getElementById("lightbox-modal");ee&&Gt&&(ee.onclick=()=>{Gt.style.display="none"},Gt.onclick=wt=>{wt.target===Gt&&(Gt.style.display="none")})}window.addEventListener("dbUpdated",()=>{Pt()});window.addEventListener("scoreUpdated",()=>{Jl()});
