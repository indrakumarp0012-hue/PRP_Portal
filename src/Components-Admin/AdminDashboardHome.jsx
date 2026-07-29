import React from "react";
import "./AdminDashboardHome.css";

import search_i from "../assets/AdminAssets/search_i.png";
import notification_i from "../assets/AdminAssets/notification_i.png";
import quation_i from "../assets/AdminAssets/quation_i.png";
import settings_i from "../assets/AdminAssets/settings_i.png";
import admin_profile_i from "../assets/AdminAssets/admin_profile_i.png";

import placement_i from "../assets/AdminAssets/placement_i.png";
import student_i from "../assets/AdminAssets/student_i.png";
import recruiter_i from "../assets/AdminAssets/recruiter_i.png";
import partner_i from "../assets/AdminAssets/partner_i.png";
import green_arrow_i from "../assets/AdminAssets/green_arrow_i.png";
import purple_arrow_i from "../assets/AdminAssets/purple_arrow_i.png";
import orange_pending_i from "../assets/AdminAssets/orange_pending_i.png";
import growth_i from "../assets/AdminAssets/growth_i.png";

import activity_user_i from "../assets/AdminAssets/activity_user_i.png";
import activity_company_i from "../assets/AdminAssets/activity_company_i.png";
import activity_verified_i from "../assets/AdminAssets/activity_verified_i.png";
import activity_security_i from "../assets/AdminAssets/activity_security_i.png";
import activity_failed_i from "../assets/AdminAssets/activity_failed_i.png";

import usermanagement_recruiter_i from "../assets/AdminAssets/usermanagement_recruiter_i.png";
import usermanagement_candidate_i from "../assets/AdminAssets/usermanagement_candidate_i.png";
import filter_i from "../assets/AdminAssets/filter_i.png";
import sort_i from "../assets/AdminAssets/sort_i.png";
import admin_more_i from "../assets/AdminAssets/more_i.png";
import sarah_i from "../assets/AdminAssets/sarah_i.png";
import david_i from "../assets/AdminAssets/david_i.png";

const Header = () => (
  <div className="admin-header">
    <div className="search-box">
      <img src={search_i} alt="Search" />
      <input type="text" placeholder="Search resources, users, or logs..." />
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

        <img src={admin_profile_i} alt="Profile" className="profile-image" />
      </div>
    </div>
  </div>
);

const Stats = () => {
  const stats = [
    {
      title: "TOTAL PLACEMENTS",
      value: "4,120",
      subtitle: "82% of Annual Goal",
      color: "#16A34A",
      topIcon: placement_i,
      bottomIcon: green_arrow_i,
    },
    {
      title: "ACTIVE STUDENTS",
      value: "12,482",
      subtitle: "+12% vs last month",
      color: "#7C3AED",
      topIcon: student_i,
      bottomIcon: purple_arrow_i,
    },
    {
      title: "VERIFIED RECRUITERS",
      value: "3,142",
      subtitle: "14 pending review",
      color: "#F59E0B",
      topIcon: recruiter_i,
      bottomIcon: orange_pending_i,
    },
    {
      title: "PARTNER COMPANIES",
      value: "312",
      subtitle: "Stable Growth",
      color: "#6B7280",
      topIcon: partner_i,
      bottomIcon: growth_i,
    },
  ];

  return (
    <div className="stats-container">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-top">
            <span className="stat-title">{item.title}</span>
            <img src={item.topIcon} alt={item.title} className="stat-icon" />
          </div>
          <h2 className="stat-value">{item.value}</h2>
          <div className="stat-bottom">
            <img src={item.bottomIcon} alt="" className="bottom-icon" />
            <span className="stat-subtitle" style={{ color: item.color }}>{item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const PerformanceChart = () => {
  const data = [
    { month: "Jan", value: 50 },
    { month: "Feb", value: 70 },
    { month: "Mar", value: 60},
    { month: "Apr", value: 90 },
    { month: "May", value: 85 },
    { month: "Jun", value: 110 },
  ];

  return (
    <div className="performance-card">
      <div className="performance-header">
        <div>
          <h3>Placement Performance</h3>
          <p>Monthly placement success trends</p>
        </div>

        <div className="legend">
          <span className="dot"></span>
          <span>Placements</span>
        </div>
      </div>

      <div className="chart">
        {data.map((item, index) => (
          <div className="bar-group" key={index}>
            <div className={`bar ${index === data.length - 1 ? "active" : ""}`} style={{ height: `${item.value * 1.6}px` }}></div>
            <span>{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ActivityLog = () => {
  const activities = [
    { icon: activity_user_i, title: "New User Registration", subtitle: "Alex Morgan • 2 mins ago" },
    { icon: activity_company_i, title: "Company Document Uploaded", subtitle: "Nexus Dynamics • 45 mins ago" },
    { icon: activity_verified_i, title: "Recruiter Verified", subtitle: "Global Tech Co. • 3 hrs ago" },
    { icon: activity_security_i, title: "Security Policy Updated", subtitle: "Applied globally • 5 hrs ago" },
    { icon: activity_failed_i, title: "Failed Login Attempt", subtitle: "IP: 192.168.1.45 • 8 hrs ago" },
  ];

  return (
    <div className="activity-card">
      <h2 className="activity-title">Admin Activity Log</h2>
      <div className="activity-list">
        {activities.map((item, index) => (
          <div className="activity-item" key={index}>
            <img src={item.icon} alt={item.title} className="activity-icon" />
            <div className="activity-content">
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="history-btn">View Full History</button>
    </div>
  );
};

const UserManagement = () => {
  const users = [
    { image: sarah_i, name: "Sarah K. Jenkins", email: "sarah.j@globalhr.com", role: "RECRUITER", roleIcon: usermanagement_recruiter_i, activity: 'Published "Senior AI Architect" role', time: "2 mins ago" },
    { image: david_i, name: "David Lee", email: "d.lee@candidate.me", role: "CANDIDATE", roleIcon: usermanagement_candidate_i, activity: "Submitted portfolio via AI matching", time: "1 hour ago" },
  ];

  return (
    <div className="user-table-card">
      <div className="table-header">
        <h3>User Management & Recent Activity</h3>
        <div className="table-actions">
          <div className="action-item"><img src={filter_i} alt="Filter" /><span>Filter</span></div>
          <div className="action-item"><img src={sort_i} alt="Sort" /><span>Sort</span></div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>USER</th>
            <th>ROLE</th>
            <th>ACTIVITY</th>
            <th>TIMESTAMP</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <div className="user-info">
                  <div className="user-avatar"><img src={user.image} alt={user.name} width={"100%"} height={"100%"} /></div>
                  <div><h4>{user.name}</h4><p>{user.email}</p></div>
                </div>
              </td>
              <td><img src={user.roleIcon} alt={user.role} className="role-tag" /></td>
              <td>{user.activity}</td>
              <td className="time">{user.time}</td>
              <td><img src={admin_more_i} alt="More" className="menu-icon" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AdminDashboardHome = () => {
  return (
    <div className="dashboard-content">
      <Header />
      <Stats />
      <div className="dashboard-middle">
        <PerformanceChart />
        <ActivityLog />
      </div>
      <UserManagement />
    </div>
  );
};

export default AdminDashboardHome;
