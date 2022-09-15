import { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";

interface ChildrenProps {
  children: ReactNode;
}

function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
