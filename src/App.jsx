import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import PageLoader from "./components/Loaders/PageLoader";

import MainLayout from "./layouts/MainLayout/MainLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import WebsiteLayout from "./layouts/WebsiteLayout/WebsiteLayout";

import ProtectedRoute from "./routes/ProtectedRoute";
import RoleGuard from "./routes/RoleGuard";
import { ROLES } from "./constants/roles";

// ─── Lazy Pages ─────────────────────────────
const LoginPage = React.lazy(() => import("./pages/Auth/LoginPage"));
const RegisterPage = React.lazy(() => import("./pages/Auth/RegisterPage"));

const DashboardPage = React.lazy(() => import("./pages/Dashboard/DashboardPage"));
const UsersPage = React.lazy(() => import("./pages/Users/UsersPage"));

const NotFoundPage = React.lazy(() => import("./pages/NotFound/NotFoundPage"));

const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const ServicesPage = React.lazy(() => import("./pages/Services/ServicesPage"));

// 🔥 BLOGS
const BlogsPage = React.lazy(() => import("./pages/Blogs/BlogsPage"));
const BlogDetails = React.lazy(() => import("./pages/Blogs/BlogDetails"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>

        <Routes>

          {/* 🌐 WEBSITE ROUTES */}
          <Route element={<WebsiteLayout />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />

            {/* 🔥 BLOG ROUTES */}
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />

          </Route>

          {/* 🔐 AUTH ROUTES */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* 🔒 PROTECTED ROUTES */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>

              <Route path="/dashboard" element={<DashboardPage />} />

              {/* 👑 ADMIN ONLY */}
              <Route element={<RoleGuard allowed={[ROLES.ADMIN]} />}>
                <Route path="/users" element={<UsersPage />} />
              </Route>

            </Route>
          </Route>

          {/* ❌ 404 */}
          <Route path="*" element={<NotFoundPage />} />

        </Routes>

      </Suspense>
    </ErrorBoundary>
  );
}

export default App;