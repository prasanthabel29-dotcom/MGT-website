import React from "react";

import {
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";

import "./admin.css";

export default function AdminLayout() {

  const location = useLocation();

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    window.location.href =
      "/admin/login";
  };

  return (

    <div className="admin-layout">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <h2 className="logo">
          Admin Panel
        </h2>

        <nav className="menu">

          <Link
            to="/admin"
            className={
              location.pathname ===
              "/admin"
                ? "active"
                : ""
            }
          >
            Dashboard
          </Link>

          <Link
            to="/admin/contacts"
            className={
              location.pathname ===
              "/admin/contacts"
                ? "active"
                : ""
            }
          >
            Contacts
          </Link>

        </nav>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </aside>

      {/* CONTENT */}

      <main className="main-content">

        <div className="topbar">

          <h1>
            Admin Dashboard
          </h1>

        </div>

        <div className="page-content">

          <Outlet />

        </div>

      </main>

    </div>
  );
}