import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Anthony portfolio" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#f5f5f5"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#0f1116"
        />

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
        <link rel="manifest" href="manifest.json" />
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
