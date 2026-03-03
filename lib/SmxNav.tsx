import { useEffect, useRef, useState, useCallback } from "react";
import type { SmxNavProps } from "./types";
import { defaultItems } from "./defaultItems";
import { styles, CSS_NAMESPACE } from "./styles";

const HamburgerIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 4.5h12M3 9h12M3 13.5h12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 4l8 8M12 4l-8 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DefaultLogo = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 7h8M6 10h5M6 13h7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

export function SmxNav({
  items = defaultItems,
  activeUrl,
  logo,
  logoText = "smx.tools",
  className = "",
  theme = "auto",
  defaultOpen = false,
  onNavigate,
}: SmxNavProps) {
  const styleInjectedRef = useRef(false);
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    if (styleInjectedRef.current) return;
    const existingStyle = document.getElementById("smx-nav-styles");
    if (existingStyle) {
      styleInjectedRef.current = true;
      return;
    }
    const styleEl = document.createElement("style");
    styleEl.id = "smx-nav-styles";
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
    styleInjectedRef.current = true;
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const resolvedActive =
    activeUrl ?? (typeof window !== "undefined" ? window.location.origin : "");

  const isActive = useCallback(
    (url: string) => {
      try {
        const itemOrigin = new URL(url).origin;
        const currentOrigin = resolvedActive.startsWith("http")
          ? new URL(resolvedActive).origin
          : resolvedActive;
        return itemOrigin === currentOrigin;
      } catch {
        return url === resolvedActive;
      }
    },
    [resolvedActive],
  );

  const handleClick = (url: string, e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(url);
    }
  };

  const themeClass =
    theme === "dark"
      ? "smx-nav--dark"
      : theme === "auto"
        ? "smx-nav--auto"
        : "";

  const openClass = open ? `${CSS_NAMESPACE}--open` : "";

  return (
    <div
      className={`${CSS_NAMESPACE} ${themeClass} ${openClass} ${className}`.trim()}
      data-testid="smx-nav"
    >
      <button
        className={`${CSS_NAMESPACE}__trigger`}
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        data-testid="smx-nav-trigger"
      >
        <HamburgerIcon />
      </button>

      <div
        className={`${CSS_NAMESPACE}__backdrop`}
        onClick={() => setOpen(false)}
        data-testid="smx-nav-backdrop"
      />

      <nav className={`${CSS_NAMESPACE}__drawer`} data-testid="smx-nav-drawer">
        <div className={`${CSS_NAMESPACE}__header`}>
          <a
            href="https://smx.tools"
            className={`${CSS_NAMESPACE}__logo`}
            data-testid="smx-nav-logo"
          >
            {logo || <DefaultLogo />}
            <span>{logoText}</span>
          </a>
          <button
            className={`${CSS_NAMESPACE}__close`}
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
            data-testid="smx-nav-close"
          >
            <CloseIcon />
          </button>
        </div>

        <div className={`${CSS_NAMESPACE}__divider`} />

        <ul className={`${CSS_NAMESPACE}__items`} data-testid="smx-nav-items">
          {items.map((item) => {
            const active = isActive(item.url);
            return (
              <li key={item.url + item.label} className={`${CSS_NAMESPACE}__item`}>
                <a
                  href={item.url}
                  className={`${CSS_NAMESPACE}__link ${active ? `${CSS_NAMESPACE}__link--active` : ""}`}
                  title={item.description}
                  onClick={(e) => handleClick(item.url, e)}
                  data-testid={`smx-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.icon && (
                    <span className={`${CSS_NAMESPACE}__link-icon`}>
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className={`${CSS_NAMESPACE}__footer`}>
          <p className={`${CSS_NAMESPACE}__footer-text`}>smx.tools</p>
        </div>
      </nav>
    </div>
  );
}
