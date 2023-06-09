import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-zinc-900 px-4 flex pb-16 pt-8 mt-auto">
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto py-4">
        <Logo />
      </div>
    </footer>
  );
}
