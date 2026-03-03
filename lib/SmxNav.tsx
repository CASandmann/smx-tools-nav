import { useEffect, useRef } from "react";
import type { SmxNavProps } from "./types";
import { defaultItems } from "./defaultItems";
import { styles, CSS_NAMESPACE } from "./styles";

const DefaultLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 6h16M4 12h16M4 18h10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function SmxNav({
  items = defaultItems,
  activeUrl,
  logo,
  logoText = "smx.tools",
  className = "",
  position = "top",
  theme = "auto",
  onNavigate,
}: SmxNavProps) {
  const styleInjectedRef = useRef(false);

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

  const resolvedActive =
    activeUrl ?? (typeof window !== "undefined" ? window.location.origin : "");

  const isActive = (url: string) => {
    try {
      const itemOrigin = new URL(url).origin;
      const currentOrigin = resolvedActive.startsWith("http")
        ? new URL(resolvedActive).origin
        : resolvedActive;
      return itemOrigin === currentOrigin;
    } catch {
      return url === resolvedActive;
    }
  };

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

  const positionClass = position === "left" ? "smx-nav--left" : "";

  return (
    <nav
      className={`${CSS_NAMESPACE} ${themeClass} ${positionClass} ${className}`.trim()}
      data-testid="smx-nav"
    >
      <a
        href="https://smx.tools"
        className={`${CSS_NAMESPACE}__logo`}
        data-testid="smx-nav-logo"
      >
        {logo || <DefaultLogo />}
        <span>{logoText}</span>
      </a>
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
    </nav>
  );
}
