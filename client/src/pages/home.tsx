import { useState } from "react";
import { SmxNav } from "../../../lib";

export default function HomePage() {
  const [theme, setTheme] = useState<"light" | "dark" | "auto">("light");

  const pageBg = theme === "dark" ? "#0a0b10" : "#f8fafc";
  const pageFg = theme === "dark" ? "#e2e8f0" : "#1a1a2e";
  const dimFg = theme === "dark" ? "#94a3b8" : "#64748b";

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
            hamburger icon in the top-left corner to open the panel. Navigation
            items are loaded automatically from smx.tools/directory.json.
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
          </div>
        </section>

        <section>
          <SectionTitle color={dimFg}>Usage</SectionTitle>
          <CodeBlock theme={theme}>{`import { SmxNav } from "smx-tools-nav";

// Basic usage — renders a hamburger button
// that opens a collapsible drawer.
// Items are fetched from smx.tools/directory.json
<SmxNav />

// With theme and active URL
<SmxNav
  activeUrl="https://obs.smx.tools"
  theme="dark"
/>`}</CodeBlock>
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
