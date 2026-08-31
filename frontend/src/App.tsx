import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AdminLayout } from "./components/admin/AdminLayout";
import { ProtectedRoute } from "./components/admin/ProtectedRoute";
import { WhatsAppButton } from "./components/common/WhatsAppButton";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { AdminContactsPage } from "./pages/admin/AdminContactsPage";
import { AdminDashboardPage } from "./pages/admin/AdminDashboardPage";
import { AdminInquiriesPage } from "./pages/admin/AdminInquiriesPage";
import { AdminLoginPage } from "./pages/admin/AdminLoginPage";
import { AdminUsersPage } from "./pages/admin/AdminUsersPage";
import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return null;
}

function MainLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollManager />
      {!isAdminRoute && <WhatsAppButton />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/student-login" element={<LoginPage type="student" />} />
        <Route path="/teacher-login" element={<LoginPage type="teacher" />} />

        {/* Admin Login Route */}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Admin Protected Dashboard Routes */}
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<AdminDashboardPage />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="inquiries" element={<AdminInquiriesPage />} />
            <Route path="messages" element={<AdminContactsPage />} />
            <Route path="users" element={<AdminUsersPage />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AdminAuthProvider>
      <MainLayout />
    </AdminAuthProvider>
  );
}
