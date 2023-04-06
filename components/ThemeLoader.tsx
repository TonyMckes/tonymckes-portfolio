import Script from 'next/script'

function ThemeLoader() {
  return (
    <Script id="theme-initialize" strategy="beforeInteractive">
      {`
const isServer = typeof window === "undefined";

if (!isServer) {
  const THEME_COLOR = localStorage.getItem("theme-color");
  const OS_COLOR_SCHEME = window.matchMedia("(prefers-color-scheme: dark)");

  if (THEME_COLOR === "dark" || (!THEME_COLOR && OS_COLOR_SCHEME.matches)) {
    // document.documentElement.dataset.theme = "dark";
    document.documentElement.classList.add("dark");
  }
}
    `}
    </Script>
  )
}

export default ThemeLoader
