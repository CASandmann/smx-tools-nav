# smx-tools-nav

A lightweight navigation drawer for smx.tools applications. Items are loaded automatically from `https://smx.tools/directory.json`.

## Install

```bash
npm install smx-tools-nav
```

## Usage

```tsx
import { SmxNav } from "smx-tools-nav";

// Basic usage — items load from smx.tools/directory.json
<SmxNav />

// With theme and active URL highlighting
<SmxNav
  activeUrl="https://obs.smx.tools"
  theme="dark"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| activeUrl | string | window.location.origin | URL to highlight as active |
| logo | ReactNode | Default SVG | Custom logo element |
| logoText | string | "smx.tools" | Text next to logo |
| className | string | "" | Additional CSS class |
| theme | "light" \| "dark" \| "auto" | "auto" | Color theme |
| defaultOpen | boolean | false | Whether drawer starts open |
| directoryUrl | string | "https://smx.tools/directory.json" | URL to fetch nav items from |
| onNavigate | (url: string) => void | undefined | Custom navigation handler |
