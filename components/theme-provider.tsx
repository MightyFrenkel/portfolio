"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode: () => setIsDarkMode((prev) => !prev),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
