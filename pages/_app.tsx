import Layout from "components/Layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anthony Mackensen</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
