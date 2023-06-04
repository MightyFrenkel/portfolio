import { NavigationItem } from "@/app/config";
import { NavItem } from "./nav-item";

export interface NavbarProps {
  items: NavigationItem[];
}

export function Navbar({ items }: NavbarProps) {
  return (
    <nav className="bg-zinc-900 px-4 flex">
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto py-4">
        <div className="flex items-center">
          <NavItem color="orange" label="Frank Hartman" href="/" />
        </div>
        <div className="flex items-center space-x-4">
          {items.map(({ label, href }) => (
            <NavItem key={label} label={label} href={href} />
          ))}
        </div>
      </div>
    </nav>
  );
}
