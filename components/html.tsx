import Script from "next/script";

const setInitialTheme = `
(function() {
  function getInitialTheme() {
    const isDarkMode = window.localStorage.getItem('isDarkMode');
    return isDarkMode === 'true' ? 'dark' : 'light';
  }
  const theme = getInitialTheme();
  document.documentElement.classList.add(theme);
})();
    `;

export function Html({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script
        id="dark-mode"
        dangerouslySetInnerHTML={{
          __html: setInitialTheme,
        }}
      ></Script>
      {children}
    </html>
  );
}
