export const CSS_NAMESPACE = "smx-nav";

export const styles = `
.${CSS_NAMESPACE} {
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

.${CSS_NAMESPACE} *,
.${CSS_NAMESPACE} *::before,
.${CSS_NAMESPACE} *::after {
  box-sizing: border-box;
}

.${CSS_NAMESPACE}.smx-nav--dark {
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
.${CSS_NAMESPACE}__trigger {
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

.${CSS_NAMESPACE}__trigger:hover {
  color: var(--smx-fg);
  background: var(--smx-hover-bg);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.${CSS_NAMESPACE}__trigger svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.${CSS_NAMESPACE}--open .${CSS_NAMESPACE}__trigger {
  opacity: 0;
  pointer-events: none;
  transform: translateX(-8px);
}

/* Backdrop overlay */
.${CSS_NAMESPACE}__backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.15);
  opacity: 0;
  transition: opacity var(--smx-transition), visibility 0s linear 200ms;
  pointer-events: none;
  visibility: hidden;
}

.${CSS_NAMESPACE}--open .${CSS_NAMESPACE}__backdrop {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
  transition: opacity var(--smx-transition), visibility 0s linear 0s;
}

/* Drawer panel */
.${CSS_NAMESPACE}__drawer {
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

.${CSS_NAMESPACE}--open .${CSS_NAMESPACE}__drawer {
  transform: translateX(0);
  visibility: visible;
  transition: transform var(--smx-transition), visibility 0s linear 0s;
}

/* Drawer header */
.${CSS_NAMESPACE}__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 12px 8px 14px;
  flex-shrink: 0;
  gap: 8px;
}

.${CSS_NAMESPACE}__logo {
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

.${CSS_NAMESPACE}__logo svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.${CSS_NAMESPACE}__close {
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

.${CSS_NAMESPACE}__close:hover {
  background: var(--smx-hover-bg);
  color: var(--smx-fg);
}

.${CSS_NAMESPACE}__close svg {
  width: 16px;
  height: 16px;
}

/* Divider */
.${CSS_NAMESPACE}__divider {
  height: 1px;
  background: var(--smx-border);
  margin: 4px 12px 8px;
  flex-shrink: 0;
}

/* Sections container */
.${CSS_NAMESPACE}__sections {
  flex: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  padding-bottom: 8px;
}

/* Section label */
.${CSS_NAMESPACE}__section-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--smx-fg-secondary);
  padding: 4px 18px 6px;
  opacity: 0.7;
}

/* Section divider */
.${CSS_NAMESPACE}__section-divider {
  height: 1px;
  background: var(--smx-border);
  margin: 8px 12px;
  flex-shrink: 0;
}

/* Loading indicator */
.${CSS_NAMESPACE}__loading {
  display: flex;
  gap: 5px;
  padding: 12px 18px;
  align-items: center;
}

.${CSS_NAMESPACE}__loading-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--smx-fg-secondary);
  opacity: 0.4;
  animation: smx-nav-pulse 1s ease-in-out infinite;
}

.${CSS_NAMESPACE}__loading-dot:nth-child(2) {
  animation-delay: 0.15s;
}

.${CSS_NAMESPACE}__loading-dot:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes smx-nav-pulse {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.7; }
}

/* Nav items */
.${CSS_NAMESPACE}__items {
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 0 8px;
}

.${CSS_NAMESPACE}__item {
  margin: 0;
  padding: 0;
}

.${CSS_NAMESPACE}__link {
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

.${CSS_NAMESPACE}__link:hover {
  color: var(--smx-fg);
  background: var(--smx-hover-bg);
}

.${CSS_NAMESPACE}__link--active {
  color: var(--smx-active-fg);
  background: var(--smx-active-bg);
}

.${CSS_NAMESPACE}__link--active:hover {
  color: var(--smx-active-fg);
  background: var(--smx-active-bg);
}

.${CSS_NAMESPACE}__link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.${CSS_NAMESPACE}__link-icon > svg {
  width: 100%;
  height: 100%;
}

/* Footer */
.${CSS_NAMESPACE}__footer {
  padding: 12px 14px;
  border-top: 1px solid var(--smx-border);
  flex-shrink: 0;
}

.${CSS_NAMESPACE}__footer-text {
  font-size: 11px;
  color: var(--smx-fg-secondary);
  opacity: 0.7;
  margin: 0;
}

/* Auto dark mode */
@media (prefers-color-scheme: dark) {
  .${CSS_NAMESPACE}.smx-nav--auto {
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
`;
