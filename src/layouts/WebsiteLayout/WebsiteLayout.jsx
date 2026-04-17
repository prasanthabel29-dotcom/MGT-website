import React from "react";
import { Outlet } from "react-router-dom";
import WebsiteHeader from "../../components/WebsiteHeader/WebsiteHeader";
import WebsiteFooter from "../../components/WebsiteFooter/WebsiteFooter";
import styles from "./WebsiteLayout.module.scss";

function WebsiteLayout() {
  return (
    <div className={styles.websiteLayout}>
      
      <WebsiteHeader />

      <main className={styles.mainContent}>
        <Outlet />
      </main>

      <WebsiteFooter />

    </div>
  );
}

export default WebsiteLayout;