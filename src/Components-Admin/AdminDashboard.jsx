import React from "react";
import "./AdminDashboard.css";
import AdminDashboardHome from "./AdminDashboardHome";

import admin_home_i from "../assets/AdminAssets/admin_home_i.png";
import user_management_i from "../assets/AdminAssets/user_management_i.png";
import company_verification_i from "../assets/AdminAssets/company_verification_i.png";
import settings_i from "../assets/AdminAssets/settings_i.png";
import analytics_i from "../assets/AdminAssets/analytics_i.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top"></div>

      <ul className="sidebar-menu">
        <li className="active">
          <img src={admin_home_i} alt="" />
          <span>Dashboard</span>
        </li>

        <li>
          <img src={user_management_i} alt="" />
          <span>User Management</span>
        </li>

        <li>
          <img src={company_verification_i} alt="" />
          <span>Company Verification</span>
        </li>

        <li>
          <img src={settings_i} alt="" />
          <span>Platform Settings</span>
        </li>

        <li>
          <img src={analytics_i} alt="" />
          <span>Analytics</span>
        </li>
      </ul>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <AdminDashboardHome />
    </div>
  );
};

export default AdminDashboard;