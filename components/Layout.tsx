import { ReactNode } from "react";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import Navbar from "./Navbar/Navbar";
interface ChildrenProps {
  children: ReactNode;
}

function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Navbar />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
