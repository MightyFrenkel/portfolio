"use client";

import { isBrowser } from "framer-motion";
import { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(
    isBrowser && localStorage.getItem("isDarkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isDarkMode", String(isDarkMode));
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const context = useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode: () => {
        setIsDarkMode((prev) => !prev);
      },
    }),
    [isDarkMode]
  );

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}
