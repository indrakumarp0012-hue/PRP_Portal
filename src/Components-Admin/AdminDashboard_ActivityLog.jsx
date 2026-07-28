import React from "react";
import "./AdminDashboard_ActivityLog.css";

import activity_user_i from "../assets/AdminAssets/activity_user_i.png";
import activity_company_i from "../assets/AdminAssets/activity_company_i.png";
import activity_verified_i from "../assets/AdminAssets/activity_verified_i.png";
import activity_security_i from "../assets/AdminAssets/activity_security_i.png";
import activity_failed_i from "../assets/AdminAssets/activity_failed_i.png";

const activities = [
  {
    icon: activity_user_i,
    title: "New User Registration",
    subtitle: "Alex Morgan • 2 mins ago",
  },
  {
    icon: activity_company_i,
    title: "Company Document Uploaded",
    subtitle: "Nexus Dynamics • 45 mins ago",
  },
  {
    icon: activity_verified_i,
    title: "Recruiter Verified",
    subtitle: "Global Tech Co. • 3 hrs ago",
  },
  {
    icon: activity_security_i,
    title: "Security Policy Updated",
    subtitle: "Applied globally • 5 hrs ago",
  },
  {
    icon: activity_failed_i,
    title: "Failed Login Attempt",
    subtitle: "IP: 192.168.1.45 • 8 hrs ago",
  },
];

const AdminDashboard_ActivityLog = () => {
  return (
    <div className="activity-card">
      <h2 className="activity-title">Admin Activity Log</h2>

      <div className="activity-list">
        {activities.map((item, index) => (
          <div className="activity-item" key={index}>
            <img
              src={item.icon}
              alt={item.title}
              className="activity-icon"
            />

            <div className="activity-content">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="history-btn">
        View Full History
      </button>
    </div>
  );
};

export default AdminDashboard_ActivityLog;