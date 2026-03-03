import esbuild from "esbuild";
import { execSync } from "child_process";
import fs from "fs";

const outDir = "dist-lib";

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true });
}
fs.mkdirSync(outDir, { recursive: true });

async function build() {
  const sharedConfig: esbuild.BuildOptions = {
    entryPoints: ["lib/index.ts"],
    bundle: true,
    external: ["react", "react-dom", "react/jsx-runtime"],
    target: "es2020",
    sourcemap: true,
    minify: true,
    jsx: "automatic",
  };

  await Promise.all([
    esbuild.build({
      ...sharedConfig,
      format: "esm",
      outfile: `${outDir}/index.mjs`,
    }),
    esbuild.build({
      ...sharedConfig,
      format: "cjs",
      outfile: `${outDir}/index.cjs`,
    }),
  ]);

  execSync(
    `npx tsc lib/index.ts lib/SmxNav.tsx lib/types.ts lib/defaultItems.ts lib/styles.ts --declaration --emitDeclarationOnly --outDir ${outDir} --jsx react-jsx --moduleResolution bundler --module ESNext --target ES2020 --esModuleInterop --skipLibCheck --strict`,
    { stdio: "inherit" }
  );

  fs.copyFileSync("lib/package.json", `${outDir}/package.json`);

  const readme = `# @smx-tools/nav

A lightweight, extensible navigation pane for smx.tools applications.

## Install

\`\`\`bash
npm install @smx-tools/nav
\`\`\`

## Usage

\`\`\`tsx
import { SmxNav } from "@smx-tools/nav";

// Basic usage with default navigation items
<SmxNav />

// With options
<SmxNav
  activeUrl="https://obs.smx.tools"
  theme="dark"
  position="top"
/>

// Extend with additional items
import { defaultItems } from "@smx-tools/nav";

const items = [
  ...defaultItems,
  { label: "My App", url: "https://myapp.smx.tools" },
];

<SmxNav items={items} />
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | SmxNavItem[] | defaultItems | Navigation items to display |
| activeUrl | string | window.location.origin | URL to highlight as active |
| logo | ReactNode | Default SVG | Custom logo element |
| logoText | string | "smx.tools" | Text next to logo |
| className | string | "" | Additional CSS class |
| position | "top" \\| "left" | "top" | Bar position |
| theme | "light" \\| "dark" \\| "auto" | "auto" | Color theme |
| onNavigate | (url: string) => void | undefined | Custom navigation handler |

## SmxNavItem

\`\`\`ts
interface SmxNavItem {
  label: string;
  url: string;
  icon?: ReactNode;
  description?: string;
}
\`\`\`
`;

  fs.writeFileSync(`${outDir}/README.md`, readme);

  console.log("Library built successfully to", outDir);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
