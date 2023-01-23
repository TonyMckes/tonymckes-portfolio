import { Open_Sans } from "@next/font/google";
import Footer from "components/Footer";
import Navbar from "components/Navbar/Navbar";
import "./globals.css";

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
    <html className={`${openSans.className}`}>
      <head />
      <body className="bg-neutral-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
