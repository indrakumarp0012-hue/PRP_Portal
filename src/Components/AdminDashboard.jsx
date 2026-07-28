import React from "react";
import "./AdminDashboard.css";

import AdminDashboard_Sidebar from "./AdminDashboard_Sidebar";
import AdminDashboard_Header from "./AdminDashboard_Header";
import AdminDashboard_Stats from "./AdminDashboard_Stats";
import AdminDashboard_PerformanceChart from "./AdminDashboard_PerformanceChart";
import AdminDashboard_ActivityLog from "./AdminDashboard_ActivityLog";
import AdminDashboard_UserManagement from "./AdminDashboard_UserManagement";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">

      <AdminDashboard_Sidebar />

      <div className="dashboard-content">

        <AdminDashboard_Header />

        <AdminDashboard_Stats />

        <div className="dashboard-middle">
          <AdminDashboard_PerformanceChart />
          <AdminDashboard_ActivityLog />
        </div>

        <AdminDashboard_UserManagement />

      </div>

    </div>
  );
};

export default AdminDashboard;