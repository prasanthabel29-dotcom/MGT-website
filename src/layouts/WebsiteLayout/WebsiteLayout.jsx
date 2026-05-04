import React from "react";
import { Outlet } from "react-router-dom";
import WebsiteHeader from "../../components/WebsiteHeader/WebsiteHeader";
import WebsiteFooter from "../../components/WebsiteFooter/WebsiteFooter";

function WebsiteLayout() {
  return (
    <>
      <WebsiteHeader />
      <Outlet /> {/* 🔥 MUST */}
      <WebsiteFooter />
    </>
  );
}

export default WebsiteLayout;