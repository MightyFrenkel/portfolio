import Link, { LinkProps } from "next/link";
import { roboto_mono } from "../fonts";

export interface NavItemProps extends LinkProps {
  label: string;
  color?: keyof typeof colors;
}

const colors: Record<string, string> = {
  orange: "text-clementine",
  white: "text-white",
};

export function NavItem({ label, color = "white", ...rest }: NavItemProps) {
  return (
    <Link
      {...rest}
      className={`${roboto_mono.className} text-xl font-bold ${colors[color]}`}
    >
      {label}
    </Link>
  );
}
