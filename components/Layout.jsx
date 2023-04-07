import React from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import styles from "../styles/Layout.module.css";
import AppBar from "../components/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />

      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
