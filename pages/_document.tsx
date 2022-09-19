import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Portfolio's" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#94a3b8" />
      </Head>
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
