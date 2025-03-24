// src/routes/AppRouter.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage"; // Admin dashboard
import SchedulePage from "../pages/SchedulePage";
import ImportPage from "../pages/ImportPage";
import SearchPage from "../pages/SearchPage";
import TeacherDashboardPage from "../pages/TeacherDashboardPage";
import StudentDashboardPage from "../pages/StudentDashboardPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Admin routes */}
      <Route path="/home" element={<DashboardPage>{/* Nội dung tổng quan cho Admin nếu cần */}</DashboardPage>} />
      <Route path="/schedule" element={<DashboardPage>{<SchedulePage />}</DashboardPage>} />
      <Route path="/import" element={<DashboardPage>{<ImportPage />}</DashboardPage>} />
      <Route path="/search" element={<DashboardPage>{<SearchPage />}</DashboardPage>} />
      {/* Teacher route */}
      <Route path="/teacher" element={<TeacherDashboardPage />} />
      {/* Student route */}
      <Route path="/student" element={<StudentDashboardPage />} />
    </Routes>
  );
};

export default AppRouter;
