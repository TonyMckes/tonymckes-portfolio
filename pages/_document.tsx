import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <Script id="theme-initialize" strategy="beforeInteractive">
          {`
          const THEME_COLOR = localStorage.getItem("theme-color");
          const OS_COLOR_SCHEME = window.matchMedia("(prefers-color-scheme: dark)");
          

          if (THEME_COLOR === "dark" || (!THEME_COLOR && OS_COLOR_SCHEME.matches)) {
            document.documentElement.dataset.theme = "dark";
          }
          `}
        </Script>
      </body>
    </Html>
  );
}

export default Document;
