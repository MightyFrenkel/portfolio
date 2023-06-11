import Link, { LinkProps } from "next/link";
import { roboto_mono } from "../fonts";

export interface NavItemProps extends LinkProps {
  label: string;
}

export function NavItem({ label, ...rest }: NavItemProps) {
  return (
    <Link {...rest} className={`${roboto_mono.className} text-xl font-bold `}>
      {label}
    </Link>
  );
}
