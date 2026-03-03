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
    theme?: "light" | "dark" | "auto";
    defaultOpen?: boolean;
    onNavigate?: (url: string) => void;
}
