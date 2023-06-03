import Link, { LinkProps } from "next/link";

export interface NavItemProps extends LinkProps {
  label: string;
}

export function NavItem({ label, ...rest }: NavItemProps) {
  return (
    <Link {...rest} className="text-white text-xl font-bold">
      {label}
    </Link>
  );
}
