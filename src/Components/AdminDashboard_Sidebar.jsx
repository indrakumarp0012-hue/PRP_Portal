import React from "react";
import "./AdminDashboard_Sidebar.css";
import admin_home_i from "../assets/AdminDashbordAssets/admin_home_i.png"
import user_management_i from "../assets/AdminDashbordAssets/user_management_i.png"
import company_verification_i from "../assets/AdminDashbordAssets/company_verification_i.png"
import settings_i from "../assets/AdminDashbordAssets/settings_i.png"
import analytics_i from "../assets/AdminDashbordAssets/analytics_i.png"

const dashboardIcon = admin_home_i;     
const userIcon = user_management_i;
const companyIcon = company_verification_i;
const settingsIcon = settings_i;
const analyticsIcon = analytics_i;  


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top"></div>

      <ul className="sidebar-menu">
        <li className="active">
          <img src={dashboardIcon} alt="" />
          <span>Dashboard</span>
        </li>

        <li>
          <img src={userIcon} alt="" />
          <span>User Management</span>
        </li>

        <li>
          <img src={companyIcon} alt="" />
          <span>Company Verification</span>
        </li>

        <li>
          <img src={settingsIcon} alt="" />
          <span>Platform Settings</span>
        </li>

        <li>
          <img src={analyticsIcon} alt="" />
          <span>Analytics</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;