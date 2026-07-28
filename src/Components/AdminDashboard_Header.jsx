import React from "react";
import "./AdminDashboard_Header.css";
import search_i from "../assets/AdminDashbordAssets/search_i.png"
import notification_i from "../assets/AdminDashbordAssets/notification_i.png"
import quation_i from "../assets/AdminDashbordAssets/quation_i.png"
import settings_i from "../assets/AdminDashbordAssets/settings_i.png"
import admin_profile_i from "../assets/AdminDashbordAssets/admin_profile_i.png";

const AdminDashboard_Header = () => {
  return (
    <div className="admin-header">

      <div className="search-box">
        <img src={search_i} alt="Search" />
        <input
          type="text"
          placeholder="Search resources, users, or logs..."
        />
      </div>

      <div className="header-right">

        <img src={notification_i} alt="Notification" className="header-icon" />

        <img src={quation_i} alt="Help" className="header-icon" />

        <img src={settings_i} alt="Settings" className="header-icon" />

        <div className="vertical-line"></div>

        <div className="profile">

          <div className="profile-text">
            <h4>Admin User</h4>
            <span>SUPER ADMIN</span>
          </div>

          <img
            src={admin_profile_i}
            alt="Profile"
            className="profile-image"
          />

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard_Header;