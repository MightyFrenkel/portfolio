import { NavigationItem } from "@/app/config";
import { NavItem } from "./nav-item";

export interface NavbarProps {
  items: NavigationItem[];
}

export function Navbar({ items }: NavbarProps) {
  return (
    <nav className="bg-gray-800 flex">
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto py-4">
        <div className="flex items-center">
          <NavItem label="Frank Hartman" href="/" />
        </div>
        <div className="flex items-center">
          {items.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </div>
      </div>
    </nav>
  );
}
