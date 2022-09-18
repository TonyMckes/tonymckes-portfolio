import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

interface ChildrenProps {
  children: ReactNode;
}

function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
