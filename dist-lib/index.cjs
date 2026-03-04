"use strict";var b=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var R=Object.prototype.hasOwnProperty;var j=(r,o)=>{for(var d in o)b(r,d,{get:o[d],enumerable:!0})},z=(r,o,d,c)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of A(o))!R.call(r,i)&&i!==d&&b(r,i,{get:()=>o[i],enumerable:!(c=M(o,i))||c.enumerable});return r};var I=r=>z(b({},"__esModule",{value:!0}),r);var X={};j(X,{SmxNav:()=>S});module.exports=I(X);var a=require("react");var e="smx-nav",N=`
.${e} {
  --smx-bg: #ffffff;
  --smx-fg: #1a1a2e;
  --smx-fg-secondary: #64748b;
  --smx-border: #e2e8f0;
  --smx-active-bg: #f0f4ff;
  --smx-active-fg: #3b5bdb;
  --smx-active-border: #3b5bdb;
  --smx-hover-bg: #f8fafc;
  --smx-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
  --smx-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --smx-radius: 6px;
  --smx-transition: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --smx-drawer-width: 220px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  height: 100vh;
  box-sizing: border-box;
  font-family: var(--smx-font);
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  pointer-events: none;
}

.${e} *,
.${e} *::before,
.${e} *::after {
  box-sizing: border-box;
}

.${e}.smx-nav--dark {
  --smx-bg: #0f1117;
  --smx-fg: #e2e8f0;
  --smx-fg-secondary: #94a3b8;
  --smx-border: #1e293b;
  --smx-active-bg: #1a2340;
  --smx-active-fg: #7c9aff;
  --smx-active-border: #7c9aff;
  --smx-hover-bg: #1a1d2e;
  --smx-shadow: 0 4px 24px rgba(0,0,0,0.32), 0 1px 4px rgba(0,0,0,0.16);
}

/* Hamburger trigger button */
.${e}__trigger {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid var(--smx-border);
  background: var(--smx-bg);
  color: var(--smx-fg-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  transition: background var(--smx-transition), color var(--smx-transition), box-shadow var(--smx-transition), opacity var(--smx-transition), transform var(--smx-transition);
  pointer-events: auto;
  opacity: 1;
  transform: translateX(0);
}

.${e}__trigger:hover {
  color: var(--smx-fg);
  background: var(--smx-hover-bg);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.${e}__trigger svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.${e}--open .${e}__trigger {
  opacity: 0;
  pointer-events: none;
  transform: translateX(-8px);
}

/* Backdrop overlay */
.${e}__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.15);
  opacity: 0;
  transition: opacity var(--smx-transition), visibility 0s linear 200ms;
  pointer-events: none;
  visibility: hidden;
}

.${e}--open .${e}__backdrop {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
  transition: opacity var(--smx-transition), visibility 0s linear 0s;
}

/* Drawer panel */
.${e}__drawer {
  position: absolute;
  top: 0;
  left: 0;
  width: var(--smx-drawer-width);
  height: 100vh;
  background: var(--smx-bg);
  border-right: 1px solid var(--smx-border);
  box-shadow: var(--smx-shadow);
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform var(--smx-transition), visibility 0s linear 200ms;
  pointer-events: auto;
  overflow: hidden;
  visibility: hidden;
}

.${e}--open .${e}__drawer {
  transform: translateX(0);
  visibility: visible;
  transition: transform var(--smx-transition), visibility 0s linear 0s;
}

/* Drawer header */
.${e}__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 8px 14px;
  flex-shrink: 0;
  gap: 8px;
}

.${e}__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--smx-fg);
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
  white-space: nowrap;
  flex-shrink: 0;
}

.${e}__logo svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.${e}__close {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--smx-fg-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  flex-shrink: 0;
  transition: background var(--smx-transition), color var(--smx-transition);
}

.${e}__close:hover {
  background: var(--smx-hover-bg);
  color: var(--smx-fg);
}

.${e}__close svg {
  width: 16px;
  height: 16px;
}

/* Divider */
.${e}__divider {
  height: 1px;
  background: var(--smx-border);
  margin: 4px 12px 8px;
  flex-shrink: 0;
}

/* Sections container */
.${e}__sections {
  flex: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  padding-bottom: 8px;
}

/* Section label */
.${e}__section-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--smx-fg-secondary);
  padding: 4px 18px 6px;
  opacity: 0.7;
}

/* Section divider */
.${e}__section-divider {
  height: 1px;
  background: var(--smx-border);
  margin: 8px 12px;
  flex-shrink: 0;
}

/* Loading indicator */
.${e}__loading {
  display: flex;
  gap: 5px;
  padding: 12px 18px;
  align-items: center;
}

.${e}__loading-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--smx-fg-secondary);
  opacity: 0.4;
  animation: smx-nav-pulse 1s ease-in-out infinite;
}

.${e}__loading-dot:nth-child(2) {
  animation-delay: 0.15s;
}

.${e}__loading-dot:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes smx-nav-pulse {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.7; }
}

/* Nav items */
.${e}__items {
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 0 8px;
}

.${e}__item {
  margin: 0;
  padding: 0;
}

.${e}__link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border-radius: var(--smx-radius);
  text-decoration: none;
  color: var(--smx-fg-secondary);
  font-size: 13.5px;
  font-weight: 500;
  white-space: nowrap;
  transition: color var(--smx-transition), background-color var(--smx-transition);
  line-height: 1;
  width: 100%;
}

.${e}__link:hover {
  color: var(--smx-fg);
  background: var(--smx-hover-bg);
}

.${e}__link--active {
  color: var(--smx-active-fg);
  background: var(--smx-active-bg);
}

.${e}__link--active:hover {
  color: var(--smx-active-fg);
  background: var(--smx-active-bg);
}

.${e}__link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.${e}__link-icon > svg {
  width: 100%;
  height: 100%;
}

/* Footer */
.${e}__footer {
  padding: 12px 14px;
  border-top: 1px solid var(--smx-border);
  flex-shrink: 0;
}

.${e}__footer-text {
  font-size: 11px;
  color: var(--smx-fg-secondary);
  opacity: 0.7;
  margin: 0;
}

/* Auto dark mode */
@media (prefers-color-scheme: dark) {
  .${e}.smx-nav--auto {
    --smx-bg: #0f1117;
    --smx-fg: #e2e8f0;
    --smx-fg-secondary: #94a3b8;
    --smx-border: #1e293b;
    --smx-active-bg: #1a2340;
    --smx-active-fg: #7c9aff;
    --smx-active-border: #7c9aff;
    --smx-hover-bg: #1a1d2e;
    --smx-shadow: 0 4px 24px rgba(0,0,0,0.32), 0 1px 4px rgba(0,0,0,0.16);
  }
}
`;var t=require("react/jsx-runtime"),B="https://smx.tools/directory.json",_="https://smx.tools",W=()=>(0,t.jsx)("svg",{viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M3 4.5h12M3 9h12M3 13.5h12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),H=()=>(0,t.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),P=()=>(0,t.jsxs)("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("rect",{x:"1",y:"1",width:"18",height:"18",rx:"4",stroke:"currentColor",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M6 7h8M6 10h5M6 13h7",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]}),O=()=>(0,t.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{d:"M2.5 6.5L8 2l5.5 4.5V13a1 1 0 01-1 1h-10a1 1 0 01-1-1V6.5z",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M6 14V9h4v5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]});function U(r){let[o,d]=(0,a.useState)({sites:[],others:[]}),[c,i]=(0,a.useState)(!0),p=(0,a.useRef)("");return(0,a.useEffect)(()=>{p.current!==r&&(p.current=r,i(!0),fetch(r).then(l=>{if(!l.ok)throw new Error("fetch failed");return l.json()}).then(l=>{d({sites:Array.isArray(l?.sites)?l.sites:[],others:Array.isArray(l?.others)?l.others:[]}),i(!1)}).catch(()=>{d({sites:[],others:[]}),i(!1)}))},[r]),{directory:o,loading:c}}function S({activeUrl:r,logo:o,logoText:d="smx.tools",className:c="",theme:i="auto",defaultOpen:p=!1,directoryUrl:l=B,onNavigate:u}){let f=(0,a.useRef)(!1),[h,g]=(0,a.useState)(p),{directory:v,loading:C}=U(l);(0,a.useEffect)(()=>{if(f.current)return;if(document.getElementById("smx-nav-styles")){f.current=!0;return}let n=document.createElement("style");n.id="smx-nav-styles",n.textContent=N,document.head.appendChild(n),f.current=!0},[]),(0,a.useEffect)(()=>{if(!h)return;let s=n=>{n.key==="Escape"&&g(!1)};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[h]);let x=r??(typeof window<"u"?window.location.origin:""),y=(0,a.useCallback)(s=>{try{let n=new URL(s),m=x.startsWith("http")?new URL(x):null;if(!m)return s===x;let w=E=>E.replace(/\/+$/,"")||"/";return n.origin===m.origin&&w(n.pathname)===w(m.pathname)}catch{return s===x}},[x]),k=(s,n)=>{u&&(n.preventDefault(),u(s))},L=i==="dark"?"smx-nav--dark":i==="auto"?"smx-nav--auto":"",D=h?`${e}--open`:"",$=s=>{let n=y(s.href);return(0,t.jsx)("li",{className:`${e}__item`,children:(0,t.jsx)("a",{href:s.href,className:`${e}__link ${n?`${e}__link--active`:""}`,title:s.description,onClick:m=>k(s.href,m),"data-testid":`smx-nav-link-${s.label.toLowerCase().replace(/\s+/g,"-")}`,children:s.label})},s.href+s.label)};return(0,t.jsxs)("div",{className:`${e} ${L} ${D} ${c}`.trim(),"data-testid":"smx-nav",children:[(0,t.jsx)("button",{className:`${e}__trigger`,onClick:()=>g(!0),"aria-label":"Open navigation","data-testid":"smx-nav-trigger",children:(0,t.jsx)(W,{})}),(0,t.jsx)("div",{className:`${e}__backdrop`,onClick:()=>g(!1),"data-testid":"smx-nav-backdrop"}),(0,t.jsxs)("nav",{className:`${e}__drawer`,"data-testid":"smx-nav-drawer",children:[(0,t.jsxs)("div",{className:`${e}__header`,children:[(0,t.jsxs)("a",{href:"https://smx.tools",className:`${e}__logo`,"data-testid":"smx-nav-logo",children:[o||(0,t.jsx)(P,{}),(0,t.jsx)("span",{children:d})]}),(0,t.jsx)("button",{className:`${e}__close`,onClick:()=>g(!1),"aria-label":"Close navigation","data-testid":"smx-nav-close",children:(0,t.jsx)(H,{})})]}),(0,t.jsx)("div",{className:`${e}__divider`}),(0,t.jsxs)("div",{className:`${e}__sections`,"data-testid":"smx-nav-sections",children:[(0,t.jsx)("ul",{className:`${e}__items`,"data-testid":"smx-nav-items-home",children:(0,t.jsx)("li",{className:`${e}__item`,children:(0,t.jsxs)("a",{href:_,className:`${e}__link ${e}__link--home ${y(_)?`${e}__link--active`:""}`,onClick:s=>k(_,s),"data-testid":"smx-nav-link-home",children:[(0,t.jsx)("span",{className:`${e}__link-icon`,children:(0,t.jsx)(O,{})}),"Home"]})})}),C&&(0,t.jsxs)("div",{className:`${e}__loading`,"data-testid":"smx-nav-loading",children:[(0,t.jsx)("div",{className:`${e}__loading-dot`}),(0,t.jsx)("div",{className:`${e}__loading-dot`}),(0,t.jsx)("div",{className:`${e}__loading-dot`})]}),v.sites.length>0&&(0,t.jsx)("ul",{className:`${e}__items`,"data-testid":"smx-nav-items-sites",children:v.sites.map($)}),v.others.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:`${e}__section-divider`}),(0,t.jsx)("div",{className:`${e}__section-label`,"data-testid":"smx-nav-label-others",children:"Other apps"}),(0,t.jsx)("ul",{className:`${e}__items`,"data-testid":"smx-nav-items-others",children:v.others.map($)})]})]}),(0,t.jsx)("div",{className:`${e}__footer`,children:(0,t.jsx)("p",{className:`${e}__footer-text`,children:"smx.tools"})})]})]})}
//# sourceMappingURL=index.cjs.map
