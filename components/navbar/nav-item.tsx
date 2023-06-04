import Link, { LinkProps } from "next/link";

export interface NavItemProps extends LinkProps {
  label: string;
  className?: string;
}

export function NavItem({ label, className, ...rest }: NavItemProps) {
  return (
    <Link
      {...rest}
      className={`text-white text-xl font-bold ${className ?? ""}`}
    >
      {label}
    </Link>
  );
}
