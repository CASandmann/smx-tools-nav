"use strict";var f=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var E=Object.prototype.hasOwnProperty;var M=(a,o)=>{for(var l in o)f(a,l,{get:o[l],enumerable:!0})},I=(a,o,l,d)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of S(o))!E.call(a,n)&&n!==l&&f(a,n,{get:()=>o[n],enumerable:!(d=C(o,n))||d.enumerable});return a};var L=a=>I(f({},"__esModule",{value:!0}),a);var W={};M(W,{SmxNav:()=>_,defaultItems:()=>p});module.exports=L(W);var i=require("react");var p=[{label:"Home",url:"https://smx.tools",description:"SMX Tools home"},{label:"Web Config",url:"https://smx.tools",description:"Web configuration tools"},{label:"OBS Plugin",url:"https://obs.smx.tools",description:"OBS streaming plugin"},{label:"Chart Voter",url:"https://vote.smx.tools",description:"Vote on charts"}];var e="smx-nav",u=`
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

/* Nav items */
.${e}__items {
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 0 8px;
  flex: 1;
  overflow-y: auto;
  scrollbar-width: thin;
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
`;var t=require("react/jsx-runtime"),z=()=>(0,t.jsx)("svg",{viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M3 4.5h12M3 9h12M3 13.5h12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),A=()=>(0,t.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),B=()=>(0,t.jsxs)("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("rect",{x:"1",y:"1",width:"18",height:"18",rx:"4",stroke:"currentColor",strokeWidth:"1.5"}),(0,t.jsx)("path",{d:"M6 7h8M6 10h5M6 13h7",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})]});function _({items:a=p,activeUrl:o,logo:l,logoText:d="smx.tools",className:n="",theme:b="auto",defaultOpen:y=!1,onNavigate:h}){let m=(0,i.useRef)(!1),[g,c]=(0,i.useState)(y);(0,i.useEffect)(()=>{if(m.current)return;if(document.getElementById("smx-nav-styles")){m.current=!0;return}let s=document.createElement("style");s.id="smx-nav-styles",s.textContent=u,document.head.appendChild(s),m.current=!0},[]),(0,i.useEffect)(()=>{if(!g)return;let r=s=>{s.key==="Escape"&&c(!1)};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[g]);let x=o??(typeof window<"u"?window.location.origin:""),k=(0,i.useCallback)(r=>{try{let s=new URL(r).origin,v=x.startsWith("http")?new URL(x).origin:x;return s===v}catch{return r===x}},[x]),w=(r,s)=>{h&&(s.preventDefault(),h(r))},$=b==="dark"?"smx-nav--dark":b==="auto"?"smx-nav--auto":"",N=g?`${e}--open`:"";return(0,t.jsxs)("div",{className:`${e} ${$} ${N} ${n}`.trim(),"data-testid":"smx-nav",children:[(0,t.jsx)("button",{className:`${e}__trigger`,onClick:()=>c(!0),"aria-label":"Open navigation","data-testid":"smx-nav-trigger",children:(0,t.jsx)(z,{})}),(0,t.jsx)("div",{className:`${e}__backdrop`,onClick:()=>c(!1),"data-testid":"smx-nav-backdrop"}),(0,t.jsxs)("nav",{className:`${e}__drawer`,"data-testid":"smx-nav-drawer",children:[(0,t.jsxs)("div",{className:`${e}__header`,children:[(0,t.jsxs)("a",{href:"https://smx.tools",className:`${e}__logo`,"data-testid":"smx-nav-logo",children:[l||(0,t.jsx)(B,{}),(0,t.jsx)("span",{children:d})]}),(0,t.jsx)("button",{className:`${e}__close`,onClick:()=>c(!1),"aria-label":"Close navigation","data-testid":"smx-nav-close",children:(0,t.jsx)(A,{})})]}),(0,t.jsx)("div",{className:`${e}__divider`}),(0,t.jsx)("ul",{className:`${e}__items`,"data-testid":"smx-nav-items",children:a.map(r=>{let s=k(r.url);return(0,t.jsx)("li",{className:`${e}__item`,children:(0,t.jsxs)("a",{href:r.url,className:`${e}__link ${s?`${e}__link--active`:""}`,title:r.description,onClick:v=>w(r.url,v),"data-testid":`smx-nav-link-${r.label.toLowerCase().replace(/\s+/g,"-")}`,children:[r.icon&&(0,t.jsx)("span",{className:`${e}__link-icon`,children:r.icon}),r.label]})},r.url+r.label)})}),(0,t.jsx)("div",{className:`${e}__footer`,children:(0,t.jsx)("p",{className:`${e}__footer-text`,children:"smx.tools"})})]})]})}
//# sourceMappingURL=index.cjs.map
