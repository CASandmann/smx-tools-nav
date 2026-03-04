import { useEffect, useRef, useState, useCallback } from "react";
import type { SmxNavProps, SmxDirectory, SmxDirectoryItem } from "./types";
import { styles, CSS_NAMESPACE } from "./styles";

const DIRECTORY_URL = "https://smx.tools/directory.json";
const HOME_URL = "https://smx.tools";

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

const HomeIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 6.5L8 2l5.5 4.5V13a1 1 0 01-1 1h-10a1 1 0 01-1-1V6.5z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6 14V9h4v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function useDirectory(directoryUrl: string): { directory: SmxDirectory; loading: boolean } {
  const [directory, setDirectory] = useState<SmxDirectory>({ sites: [], others: [] });
  const [loading, setLoading] = useState(true);
  const lastUrlRef = useRef("");

  useEffect(() => {
    if (lastUrlRef.current === directoryUrl) return;
    lastUrlRef.current = directoryUrl;
    setLoading(true);

    fetch(directoryUrl)
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.json();
      })
      .then((data) => {
        setDirectory({
          sites: Array.isArray(data?.sites) ? data.sites : [],
          others: Array.isArray(data?.others) ? data.others : [],
        });
        setLoading(false);
      })
      .catch(() => {
        setDirectory({ sites: [], others: [] });
        setLoading(false);
      });
  }, [directoryUrl]);

  return { directory, loading };
}

export function SmxNav({
  activeUrl,
  logo,
  logoText = "smx.tools",
  className = "",
  theme = "auto",
  defaultOpen = false,
  directoryUrl = DIRECTORY_URL,
  onNavigate,
}: SmxNavProps) {
  const styleInjectedRef = useRef(false);
  const [open, setOpen] = useState(defaultOpen);
  const { directory, loading } = useDirectory(directoryUrl);

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
        const itemUrl = new URL(url);
        const currentUrl = resolvedActive.startsWith("http")
          ? new URL(resolvedActive)
          : null;
        if (!currentUrl) return url === resolvedActive;
        const normPath = (p: string) => p.replace(/\/+$/, "") || "/";
        return itemUrl.origin === currentUrl.origin && normPath(itemUrl.pathname) === normPath(currentUrl.pathname);
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

  const renderLink = (item: SmxDirectoryItem) => {
    const active = isActive(item.href);
    return (
      <li key={item.href + item.label} className={`${CSS_NAMESPACE}__item`}>
        <a
          href={item.href}
          className={`${CSS_NAMESPACE}__link ${active ? `${CSS_NAMESPACE}__link--active` : ""}`}
          title={item.description}
          onClick={(e) => handleClick(item.href, e)}
          data-testid={`smx-nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {item.label}
        </a>
      </li>
    );
  };

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

        <div className={`${CSS_NAMESPACE}__sections`} data-testid="smx-nav-sections">
          <ul className={`${CSS_NAMESPACE}__items`} data-testid="smx-nav-items-home">
            <li className={`${CSS_NAMESPACE}__item`}>
              <a
                href={HOME_URL}
                className={`${CSS_NAMESPACE}__link ${CSS_NAMESPACE}__link--home ${isActive(HOME_URL) ? `${CSS_NAMESPACE}__link--active` : ""}`}
                onClick={(e) => handleClick(HOME_URL, e)}
                data-testid="smx-nav-link-home"
              >
                <span className={`${CSS_NAMESPACE}__link-icon`}>
                  <HomeIcon />
                </span>
                Home
              </a>
            </li>
          </ul>

          {loading && (
            <div className={`${CSS_NAMESPACE}__loading`} data-testid="smx-nav-loading">
              <div className={`${CSS_NAMESPACE}__loading-dot`} />
              <div className={`${CSS_NAMESPACE}__loading-dot`} />
              <div className={`${CSS_NAMESPACE}__loading-dot`} />
            </div>
          )}

          {directory.sites.length > 0 && (
            <ul className={`${CSS_NAMESPACE}__items`} data-testid="smx-nav-items-sites">
              {directory.sites.map(renderLink)}
            </ul>
          )}

          {directory.others.length > 0 && (
            <>
              <div className={`${CSS_NAMESPACE}__section-divider`} />
              <div className={`${CSS_NAMESPACE}__section-label`} data-testid="smx-nav-label-others">
                Other apps
              </div>
              <ul className={`${CSS_NAMESPACE}__items`} data-testid="smx-nav-items-others">
                {directory.others.map(renderLink)}
              </ul>
            </>
          )}
        </div>

        <div className={`${CSS_NAMESPACE}__footer`}>
          <p className={`${CSS_NAMESPACE}__footer-text`}>smx.tools</p>
        </div>
      </nav>
    </div>
  );
}
