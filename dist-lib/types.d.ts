export interface SmxDirectoryItem {
    label: string;
    description?: string;
    href: string;
}
export interface SmxDirectory {
    sites: SmxDirectoryItem[];
    others: SmxDirectoryItem[];
}
export interface SmxNavProps {
    activeUrl?: string;
    logo?: React.ReactNode;
    logoText?: string;
    className?: string;
    theme?: "light" | "dark" | "auto";
    defaultOpen?: boolean;
    directoryUrl?: string;
    onNavigate?: (url: string) => void;
}
