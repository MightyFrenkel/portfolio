import "./globals.css";
import { Navbar } from "@/components/navbar";
import { NAVIGATION_ITEMS } from "./config";
import { roboto } from "@/components/fonts";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Html } from "@/components/html";

export const metadata = {
  title: "Frank Hartman",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Html>
        <body className={`${roboto.className} min-h-screen flex flex-col`}>
          <Navbar items={NAVIGATION_ITEMS} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </Html>
    </ThemeProvider>
  );
}
