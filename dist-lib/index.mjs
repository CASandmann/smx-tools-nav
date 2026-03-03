import{useEffect as _,useRef as $}from"react";var r=[{label:"Home",url:"https://smx.tools",description:"SMX Tools home"},{label:"Web Config",url:"https://smx.tools",description:"Web configuration tools"},{label:"OBS Plugin",url:"https://obs.smx.tools",description:"OBS streaming plugin"},{label:"Chart Voter",url:"https://vote.smx.tools",description:"Vote on charts"}];var e="smx-nav",c=`
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
`;import{jsx as o,jsxs as l}from"react/jsx-runtime";var y=()=>o("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o("path",{d:"M4 6h16M4 12h16M4 18h10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});function k({items:p=r,activeUrl:g,logo:d,logoText:f="smx.tools",className:v="",position:h="top",theme:m="auto",onNavigate:x}){let i=$(!1);_(()=>{if(i.current)return;if(document.getElementById("smx-nav-styles")){i.current=!0;return}let s=document.createElement("style");s.id="smx-nav-styles",s.textContent=c,document.head.appendChild(s),i.current=!0},[]);let a=g??(typeof window<"u"?window.location.origin:""),b=t=>{try{let s=new URL(t).origin,n=a.startsWith("http")?new URL(a).origin:a;return s===n}catch{return t===a}},u=(t,s)=>{x&&(s.preventDefault(),x(t))};return l("nav",{className:`${e} ${m==="dark"?"smx-nav--dark":m==="auto"?"smx-nav--auto":""} ${h==="left"?"smx-nav--left":""} ${v}`.trim(),"data-testid":"smx-nav",children:[l("a",{href:"https://smx.tools",className:`${e}__logo`,"data-testid":"smx-nav-logo",children:[d||o(y,{}),o("span",{children:f})]}),o("ul",{className:`${e}__items`,"data-testid":"smx-nav-items",children:p.map(t=>{let s=b(t.url);return o("li",{className:`${e}__item`,children:l("a",{href:t.url,className:`${e}__link ${s?`${e}__link--active`:""}`,title:t.description,onClick:n=>u(t.url,n),"data-testid":`smx-nav-link-${t.label.toLowerCase().replace(/\s+/g,"-")}`,children:[t.icon&&o("span",{className:`${e}__link-icon`,children:t.icon}),t.label]})},t.url+t.label)})})]})}export{k as SmxNav,r as defaultItems};
//# sourceMappingURL=index.mjs.map
