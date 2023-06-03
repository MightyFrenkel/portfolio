export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
];

export interface NavigationItem {
  label: string;
  href: string;
}
