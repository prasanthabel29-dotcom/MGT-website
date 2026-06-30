import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import WebsiteHeader from "../../components/WebsiteHeader/WebsiteHeader";
import WebsiteFooter from "../../components/WebsiteFooter/WebsiteFooter";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import styles from "./WebsiteLayout.module.scss";

function WebsiteLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <ScrollToTop />
      <WebsiteHeader />
      <main className={isHome ? styles.pageHome : styles.pageContent}>
        <Outlet />
      </main>
      <WebsiteFooter />
    </>
  );
}

export default WebsiteLayout;
