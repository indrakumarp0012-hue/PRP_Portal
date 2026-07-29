import React from "react";
import "./Sidebar.css";

import admin_home_i from "../assets/AdminAssets/admin_home_i.png";
import user_management_i from "../assets/AdminAssets/user_management_i.png";
import company_verification_i from "../assets/AdminAssets/company_verification_i.png";
import settings_i from "../assets/AdminAssets/settings_i.png";
import analytics_i from "../assets/AdminAssets/analytics_i.png";

const menuItems = [
  { label: "Dashboard", icon: admin_home_i, active: true },
  { label: "User Management", icon: user_management_i },
  { label: "Company Verification", icon: company_verification_i },
  { label: "Platform Settings", icon: settings_i },
  { label: "Analytics", icon: analytics_i },
];

const Sidebar = () => {
  return (
    <div className="Sidebar-container">
      <div className="Sidebar-top" />

      <div className="Sidebar-menu">
        {menuItems.map((item) => (
          <div
            className={`Sidebar-menuItem ${item.active ? "Sidebar-menuItemActive" : ""}`}
            key={item.label}
          >
            <img src={item.icon} alt={item.label} className="Sidebar-icon" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
