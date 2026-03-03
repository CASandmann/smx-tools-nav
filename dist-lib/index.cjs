"use strict";var d=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var S=(a,o)=>{for(var r in o)d(a,r,{get:o[r],enumerable:!0})},C=(a,o,r,l)=>{if(o&&typeof o=="object"||typeof o=="function")for(let n of k(o))!w.call(a,n)&&n!==r&&d(a,n,{get:()=>o[n],enumerable:!(l=y(o,n))||l.enumerable});return a};var N=a=>C(d({},"__esModule",{value:!0}),a);var I={};S(I,{SmxNav:()=>b,defaultItems:()=>x});module.exports=N(I);var c=require("react");var x=[{label:"Home",url:"https://smx.tools",description:"SMX Tools home"},{label:"Web Config",url:"https://smx.tools",description:"Web configuration tools"},{label:"OBS Plugin",url:"https://obs.smx.tools",description:"OBS streaming plugin"},{label:"Chart Voter",url:"https://vote.smx.tools",description:"Vote on charts"}];var e="smx-nav",h=`
.${e} {
  --smx-bg: #ffffff;
  --smx-fg: #1a1a2e;
  --smx-fg-secondary: #64748b;
  --smx-border: #e2e8f0;
  --smx-active-bg: #f0f4ff;
  --smx-active-fg: #3b5bdb;
  --smx-active-border: #3b5bdb;
  --smx-hover-bg: #f8fafc;
  --smx-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --smx-radius: 6px;
  --smx-transition: 150ms ease;

  box-sizing: border-box;
  font-family: var(--smx-font);
  background: var(--smx-bg);
  border-bottom: 1px solid var(--smx-border);
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 48px;
  gap: 4px;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}

.${e}__logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 12px;
  text-decoration: none;
  color: var(--smx-fg);
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
  white-space: nowrap;
  flex-shrink: 0;
}

.${e}__logo svg {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.${e}__items {
  display: flex;
  align-items: center;
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: auto;
  scrollbar-width: none;
}

.${e}__items::-webkit-scrollbar {
  display: none;
}

.${e}__item {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.${e}__link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--smx-radius);
  text-decoration: none;
  color: var(--smx-fg-secondary);
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  transition: color var(--smx-transition), background-color var(--smx-transition);
  position: relative;
  line-height: 1;
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

/* Left/sidebar position variant */
.${e}.smx-nav--left {
  flex-direction: column;
  align-items: stretch;
  height: auto;
  width: 220px;
  border-bottom: none;
  border-right: 1px solid var(--smx-border);
  padding: 12px 8px;
  gap: 2px;
}

.${e}.smx-nav--left .${e}__logo {
  margin-right: 0;
  margin-bottom: 12px;
  padding: 4px 8px;
}

.${e}.smx-nav--left .${e}__items {
  flex-direction: column;
  height: auto;
  gap: 2px;
}

.${e}.smx-nav--left .${e}__item {
  height: auto;
}

.${e}.smx-nav--left .${e}__link {
  padding: 8px 10px;
  width: 100%;
}

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
  }
}
`;var s=require("react/jsx-runtime"),E=()=>(0,s.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M4 6h16M4 12h16M4 18h10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});function b({items:a=x,activeUrl:o,logo:r,logoText:l="smx.tools",className:n="",position:u="top",theme:f="auto",onNavigate:v}){let p=(0,c.useRef)(!1);(0,c.useEffect)(()=>{if(p.current)return;if(document.getElementById("smx-nav-styles")){p.current=!0;return}let i=document.createElement("style");i.id="smx-nav-styles",i.textContent=h,document.head.appendChild(i),p.current=!0},[]);let m=o??(typeof window<"u"?window.location.origin:""),_=t=>{try{let i=new URL(t).origin,g=m.startsWith("http")?new URL(m).origin:m;return i===g}catch{return t===m}},$=(t,i)=>{v&&(i.preventDefault(),v(t))};return(0,s.jsxs)("nav",{className:`${e} ${f==="dark"?"smx-nav--dark":f==="auto"?"smx-nav--auto":""} ${u==="left"?"smx-nav--left":""} ${n}`.trim(),"data-testid":"smx-nav",children:[(0,s.jsxs)("a",{href:"https://smx.tools",className:`${e}__logo`,"data-testid":"smx-nav-logo",children:[r||(0,s.jsx)(E,{}),(0,s.jsx)("span",{children:l})]}),(0,s.jsx)("ul",{className:`${e}__items`,"data-testid":"smx-nav-items",children:a.map(t=>{let i=_(t.url);return(0,s.jsx)("li",{className:`${e}__item`,children:(0,s.jsxs)("a",{href:t.url,className:`${e}__link ${i?`${e}__link--active`:""}`,title:t.description,onClick:g=>$(t.url,g),"data-testid":`smx-nav-link-${t.label.toLowerCase().replace(/\s+/g,"-")}`,children:[t.icon&&(0,s.jsx)("span",{className:`${e}__link-icon`,children:t.icon}),t.label]})},t.url+t.label)})})]})}
//# sourceMappingURL=index.cjs.map
