import React from "react";
import "./Sidebar.css";

import admin_home from "../assets/AdminAssets/admin_home.png";
import user_management from "../assets/AdminAssets/user_management.png";
import company_verification from "../assets/AdminAssets/company_verification.png";
import settings from "../assets/AdminAssets/settings.png";
import analytics from "../assets/AdminAssets/analytics.png";

const menuItems = [
  { label: "Dashboard", icon: admin_home, active: true },
  { label: "User Management", icon: user_management },
  { label: "Company Verification", icon: company_verification },
  { label: "Platform Settings", icon: settings },
  { label: "Analytics", icon: analytics },
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
