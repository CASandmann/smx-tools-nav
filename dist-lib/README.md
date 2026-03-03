# @smx-tools/nav

A lightweight, extensible navigation pane for smx.tools applications.

## Install

```bash
npm install @smx-tools/nav
```

## Usage

```tsx
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
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | SmxNavItem[] | defaultItems | Navigation items to display |
| activeUrl | string | window.location.origin | URL to highlight as active |
| logo | ReactNode | Default SVG | Custom logo element |
| logoText | string | "smx.tools" | Text next to logo |
| className | string | "" | Additional CSS class |
| position | "top" \| "left" | "top" | Bar position |
| theme | "light" \| "dark" \| "auto" | "auto" | Color theme |
| onNavigate | (url: string) => void | undefined | Custom navigation handler |

## SmxNavItem

```ts
interface SmxNavItem {
  label: string;
  url: string;
  icon?: ReactNode;
  description?: string;
}
```
