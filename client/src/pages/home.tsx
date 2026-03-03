import { useState } from "react";
import { SmxNav } from "../../../lib";
import type { SmxNavItem } from "../../../lib";
import { Home, Settings, Monitor, BarChart3, Plus, Minus } from "lucide-react";

const itemsWithIcons: SmxNavItem[] = [
  {
    label: "Home",
    url: "https://smx.tools",
    description: "SMX Tools home",
    icon: <Home />,
  },
  {
    label: "Web Config",
    url: "https://smx.tools",
    description: "Web configuration tools",
    icon: <Settings />,
  },
  {
    label: "OBS Plugin",
    url: "https://obs.smx.tools",
    description: "OBS streaming plugin",
    icon: <Monitor />,
  },
  {
    label: "Chart Voter",
    url: "https://vote.smx.tools",
    description: "Vote on charts",
    icon: <BarChart3 />,
  },
];

const itemsPlain: SmxNavItem[] = [
  { label: "Home", url: "https://smx.tools" },
  { label: "Web Config", url: "https://smx.tools" },
  { label: "OBS Plugin", url: "https://obs.smx.tools" },
  { label: "Chart Voter", url: "https://vote.smx.tools" },
];

export default function HomePage() {
  const [theme, setTheme] = useState<"light" | "dark" | "auto">("light");
  const [useIcons, setUseIcons] = useState(true);
  const [customItems, setCustomItems] = useState<SmxNavItem[]>([]);
  const [newLabel, setNewLabel] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const baseItems = useIcons ? itemsWithIcons : itemsPlain;
  const allItems = [...baseItems, ...customItems];

  const addItem = () => {
    if (newLabel.trim() && newUrl.trim()) {
      setCustomItems((prev) => [
        ...prev,
        {
          label: newLabel.trim(),
          url: newUrl.trim().startsWith("http")
            ? newUrl.trim()
            : `https://${newUrl.trim()}`,
        },
      ]);
      setNewLabel("");
      setNewUrl("");
    }
  };

  const removeItem = (index: number) => {
    setCustomItems((prev) => prev.filter((_, i) => i !== index));
  };

  const pageBg = theme === "dark" ? "#0a0b10" : "#f8fafc";
  const pageFg = theme === "dark" ? "#e2e8f0" : "#1a1a2e";
  const dimFg = theme === "dark" ? "#94a3b8" : "#64748b";
  const borderColor = theme === "dark" ? "#1e293b" : "#e2e8f0";
  const inputBg = theme === "dark" ? "#1a1d2e" : "#fff";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: pageBg,
        color: pageFg,
        transition: "background 200ms, color 200ms",
      }}
    >
      <SmxNav
        items={allItems}
        activeUrl="https://smx.tools"
        theme={theme}
        onNavigate={(url) => window.open(url, "_blank")}
      />

      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "48px 24px 48px 72px",
        }}
      >
        <div style={{ marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}
            data-testid="text-title"
          >
            smx-tools-nav
          </h1>
          <p
            style={{
              fontSize: 15,
              color: dimFg,
              margin: 0,
              lineHeight: 1.6,
            }}
            data-testid="text-description"
          >
            A collapsible navigation drawer for smx.tools applications. Click the
            hamburger icon in the top-left corner to open the panel.
          </p>
        </div>

        <section style={{ marginBottom: 40 }}>
          <SectionTitle color={dimFg}>Options</SectionTitle>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <OptionGroup label="Theme" theme={theme}>
              {(["light", "dark", "auto"] as const).map((t) => (
                <OptionButton
                  key={t}
                  active={theme === t}
                  onClick={() => setTheme(t)}
                  theme={theme}
                  testId={`button-theme-${t}`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </OptionButton>
              ))}
            </OptionGroup>

            <OptionGroup label="Icons" theme={theme}>
              <OptionButton
                active={useIcons}
                onClick={() => setUseIcons(true)}
                theme={theme}
                testId="button-icons-on"
              >
                On
              </OptionButton>
              <OptionButton
                active={!useIcons}
                onClick={() => setUseIcons(false)}
                theme={theme}
                testId="button-icons-off"
              >
                Off
              </OptionButton>
            </OptionGroup>
          </div>

          <div>
            <h3
              style={{
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: dimFg,
                marginBottom: 12,
              }}
            >
              Add Custom Items
            </h3>
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <input
                type="text"
                placeholder="Label"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                data-testid="input-label"
                style={{
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: `1px solid ${borderColor}`,
                  background: inputBg,
                  color: pageFg,
                  fontSize: 13,
                  outline: "none",
                  width: 140,
                }}
              />
              <input
                type="text"
                placeholder="URL (e.g. app.smx.tools)"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addItem()}
                data-testid="input-url"
                style={{
                  padding: "6px 10px",
                  borderRadius: 6,
                  border: `1px solid ${borderColor}`,
                  background: inputBg,
                  color: pageFg,
                  fontSize: 13,
                  outline: "none",
                  width: 220,
                }}
              />
              <button
                onClick={addItem}
                data-testid="button-add-item"
                style={{
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "none",
                  background: "#3b5bdb",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Plus style={{ width: 14, height: 14 }} />
                Add
              </button>
            </div>

            {customItems.length > 0 && (
              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                {customItems.map((item, i) => (
                  <span
                    key={i}
                    data-testid={`tag-custom-item-${i}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "4px 10px",
                      borderRadius: 99,
                      background: theme === "dark" ? "#1a2340" : "#f0f4ff",
                      color: theme === "dark" ? "#7c9aff" : "#3b5bdb",
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                    <button
                      onClick={() => removeItem(i)}
                      data-testid={`button-remove-item-${i}`}
                      style={{
                        background: "none",
                        border: "none",
                        color: "inherit",
                        cursor: "pointer",
                        padding: 0,
                        display: "flex",
                        opacity: 0.7,
                      }}
                    >
                      <Minus style={{ width: 12, height: 12 }} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        <section>
          <SectionTitle color={dimFg}>Usage</SectionTitle>
          <CodeBlock theme={theme}>{`import { SmxNav } from "smx-tools-nav";

// Basic usage — renders a hamburger button
// that opens a collapsible drawer
<SmxNav />

// With custom active URL and theme
<SmxNav
  activeUrl="https://obs.smx.tools"
  theme="dark"
/>

// Extend with additional items
import { defaultItems } from "smx-tools-nav";

const items = [
  ...defaultItems,
  { label: "My App", url: "https://myapp.smx.tools" },
];

<SmxNav items={items} />`}</CodeBlock>
        </section>
      </div>
    </div>
  );
}

function SectionTitle({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <h2
      style={{
        fontWeight: 600,
        marginBottom: 16,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color,
        fontSize: 12,
      }}
    >
      {children}
    </h2>
  );
}

function OptionGroup({
  label,
  children,
  theme,
}: {
  label: string;
  children: React.ReactNode;
  theme: string;
}) {
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: theme === "dark" ? "#64748b" : "#94a3b8",
          marginBottom: 6,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", gap: 4 }}>{children}</div>
    </div>
  );
}

function OptionButton({
  children,
  active,
  onClick,
  theme,
  testId,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  theme: string;
  testId: string;
}) {
  return (
    <button
      onClick={onClick}
      data-testid={testId}
      style={{
        padding: "5px 12px",
        borderRadius: 6,
        border: active
          ? "1px solid #3b5bdb"
          : `1px solid ${theme === "dark" ? "#1e293b" : "#e2e8f0"}`,
        background: active
          ? theme === "dark"
            ? "#1a2340"
            : "#f0f4ff"
          : "transparent",
        color: active
          ? theme === "dark"
            ? "#7c9aff"
            : "#3b5bdb"
          : theme === "dark"
            ? "#94a3b8"
            : "#64748b",
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 150ms",
      }}
    >
      {children}
    </button>
  );
}

function CodeBlock({
  children,
  theme,
}: {
  children: string;
  theme: string;
}) {
  return (
    <pre
      data-testid="code-usage"
      style={{
        padding: 16,
        borderRadius: 8,
        background: theme === "dark" ? "#0f1117" : "#1e293b",
        color: "#e2e8f0",
        fontSize: 13,
        lineHeight: 1.6,
        overflow: "auto",
        fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
        border: `1px solid ${theme === "dark" ? "#1e293b" : "#334155"}`,
        margin: 0,
      }}
    >
      <code>{children}</code>
    </pre>
  );
}
