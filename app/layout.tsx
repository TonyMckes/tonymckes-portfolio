import { Open_Sans } from "next/font/google";
import Footer from "components/Footer";
import Navbar from "components/Navbar/Navbar";
import ThemeLoader from "components/ThemeLoader";
import "./globals.css";

export const metadata = {
  title: "Anthony Mackensen",
  description: "Anthony Mackensen’s portfolio",
  manifest: "manifest.json",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1116" },
  ],
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      "/favicon.ico",
      { type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      { type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    ],
    other: { rel: "mask-icon", url: "/safari-pinned-tab.svg" },
  },
};

const openSans = Open_Sans({
  display: "optional",
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`scroll-smooth ${openSans.className}`}>
      <head />
      <body className="bg-neutral-100 text-neutral-900 dark:bg-night-900 dark:text-neutral-100">
        <Navbar />
        {children}
        <Footer />
        <ThemeLoader />
      </body>
    </html>
  );
}
