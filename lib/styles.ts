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
}

.${CSS_NAMESPACE}__logo {
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

.${CSS_NAMESPACE}__logo svg {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.${CSS_NAMESPACE}__items {
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

.${CSS_NAMESPACE}__items::-webkit-scrollbar {
  display: none;
}

.${CSS_NAMESPACE}__item {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.${CSS_NAMESPACE}__link {
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

/* Left/sidebar position variant */
.${CSS_NAMESPACE}.smx-nav--left {
  flex-direction: column;
  align-items: stretch;
  height: auto;
  width: 220px;
  border-bottom: none;
  border-right: 1px solid var(--smx-border);
  padding: 12px 8px;
  gap: 2px;
}

.${CSS_NAMESPACE}.smx-nav--left .${CSS_NAMESPACE}__logo {
  margin-right: 0;
  margin-bottom: 12px;
  padding: 4px 8px;
}

.${CSS_NAMESPACE}.smx-nav--left .${CSS_NAMESPACE}__items {
  flex-direction: column;
  height: auto;
  gap: 2px;
}

.${CSS_NAMESPACE}.smx-nav--left .${CSS_NAMESPACE}__item {
  height: auto;
}

.${CSS_NAMESPACE}.smx-nav--left .${CSS_NAMESPACE}__link {
  padding: 8px 10px;
  width: 100%;
}

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
  }
}
`;
