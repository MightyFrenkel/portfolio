"use client";

import { useContext } from "react";
import { ThemeContext } from "./theme-provider";

export function Html({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <html lang="en" className={isDarkMode ? "dark" : "light"}>
      {children}
    </html>
  );
}
