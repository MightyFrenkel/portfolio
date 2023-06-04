import Link, { LinkProps } from "next/link";

export interface NavItemProps extends LinkProps {
  label: string;
  color?: keyof typeof colors;
}

const colors: Record<string, string> = {
  orange: "text-orange-400",
  white: "text-white",
};

export function NavItem({ label, color = "white", ...rest }: NavItemProps) {
  return (
    <Link {...rest} className={`text-xl font-bold ${colors[color]}`}>
      {label}
    </Link>
  );
}
