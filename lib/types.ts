export interface SmxNavItem {
  label: string;
  url: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface SmxNavProps {
  items?: SmxNavItem[];
  activeUrl?: string;
  logo?: React.ReactNode;
  logoText?: string;
  className?: string;
  position?: "top" | "left";
  theme?: "light" | "dark" | "auto";
  onNavigate?: (url: string) => void;
}
