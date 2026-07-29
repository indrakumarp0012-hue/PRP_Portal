import React from "react";
import "./AdminDashboard.css";

import Sidebar from "./Sidebar";
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

const stats = [
  {
    title: "TOTAL PLACEMENTS",
    value: "4,120",
    sub: "82% of Annual Goal",
    color: "#00a86b",
    icon: placement_i,
    nameIcon: green_arrow_i,
  },
  {
    title: "ACTIVE STUDENTS",
    value: "12,482",
    sub: "+12% vs last month",
    color: "#8b5cf6",
    icon: student_i,
    nameIcon: purple_arrow_i,
  },
  {
    title: "VERIFIED RECRUITERS",
    value: "3,142",
    sub: "14 pending review",
    color: "#ff8c00",
    icon: recruiter_i,
    nameIcon: orange_pending_i,
  },
  {
    title: "PARTNER COMPANIES",
    value: "312",
    sub: "Stable Growth",
    color: "#555",
    icon: partner_i,
    nameIcon: growth_i,
  },
];

const months = [
  { month: "Jan", height: 95 },
  { month: "Feb", height: 140 },
  { month: "Mar", height: 120 },
  { month: "Apr", height: 180 },
  { month: "May", height: 160 },
  { month: "Jun", height: 230, active: true },
];

const logs = [
  {
    title: "New User Registration",
    metaSource: "Alex Morgan",
    metaTime: "2 mins ago",
    image: activity_user_i,
    color: "#d8f9e6",
  },
  {
    title: "Company Document Uploaded",
    metaSource: "Nexus Dynamics",
    metaTime: "45 mins ago",
    image: activity_company_i,
    color: "#ede3ff",
  },
  {
    title: "Recruiter Verified",
    metaSource: "Global Tech Sol.",
    metaTime: "3 hrs ago",
    image: activity_verified_i,
    color: "#ffe8b3",
  },
  {
    title: "Security Policy Updated",
    metaSource: "Applied globally",
    metaTime: "5 hrs ago",
    image: activity_security_i,
    color: "#dceeff",
  },
  {
    title: "Failed Login Attempt",
    metaSource: "IP: 192.168.1.45",
    metaTime: "8 hrs ago",
    image: activity_failed_i,
    color: "#ffe2e2",
  },
];

const users = [
  {
    initials: "SK",
    name: "Sarah K. Jenkins",
    email: "sarah.j@globalhr.com",
    role: "RECRUITER",
    activity: 'Published "Senior AI Architect" role',
    time: "2 mins ago",
  },
  {
    initials: "DL",
    name: "David Lee",
    email: "d.lee@candidate.me",
    role: "CANDIDATE",
    activity: "Submitted portfolio via AI matching",
    time: "1 hour ago",
  },
];

const Header = () => (
  <div className="AdminDashboard-topbar">
    <div className="AdminDashboard-search">
      <img src={search_i} alt="search" className="AdminDashboard-searchIcon" />
      <input type="text" placeholder="Search resources, users, or logs..." />
    </div>

    <div className="AdminDashboard-headerRight">
      <img src={notification_i} alt="notifications" className="AdminDashboard-icon" />
      <img src={quation_i} alt="help" className="AdminDashboard-icon" />
      <img src={settings_i} alt="settings" className="AdminDashboard-icon" />

      <div className="AdminDashboard-profile">
        <img src={admin_profile_i} alt="Admin User" />
        <div>
          <h4>Admin User</h4>
          <span>SUPER ADMIN</span>
        </div>
      </div>
    </div>
  </div>
);

const StatsSection = () => (
  <section className="AdminDashboard-cards">
    {stats.map((card) => (
      <div className="AdminDashboard-card" key={card.title}>
        <div className="AdminDashboard-cardTop">
          <span>{card.title}</span>
          <div className="AdminDashboard-cardIcon">
            <img src={card.icon} alt={card.title} />
          </div>
        </div>
        <h2>{card.value}</h2>
        <p style={{ color: card.color }}>
          <img src={card.nameIcon} alt="" className="AdminDashboard-cardNameIcon" />
          {card.sub}
        </p>
      </div>
    ))}
  </section>
);

const PerformanceSection = () => (
  <div className="AdminDashboard-chartCard">
    <div className="AdminDashboard-chartHeader">
      <div>
        <h2>Placement Performance</h2>
        <span>Monthly placement success trends</span>
      </div>
      <p className="AdminDashboard-legend">
        <span className="AdminDashboard-legendDot" />
        Placements
      </p>
    </div>

    <div className="AdminDashboard-bars">
      {months.map((item) => (
        <div className="AdminDashboard-barBox" key={item.month}>
          <div
            className={`AdminDashboard-bar ${item.active ? "AdminDashboard-barActive" : ""}`}
            style={{ height: `${item.height}px` }}
          />
          <span>{item.month}</span>
        </div>
      ))}
    </div>
  </div>
);

const ActivitySection = () => (
  <div className="AdminDashboard-activity">
    <h2>Admin Activity Log</h2>
    {logs.map((log) => (
      <div className="AdminDashboard-activityItem" key={log.title}>
        <img
          src={log.image}
          alt={log.title}
          className="AdminDashboard-activityIcon"
          style={{ background: log.color }}
        />
        <div>
          <h4>{log.title}</h4>
          <p className="AdminDashboard-activityMeta">
            <span>{log.metaSource}</span>
            <span className="AdminDashboard-activityMetaDot" />
            <span>{log.metaTime}</span>
          </p>
        </div>
      </div>
    ))}
    <a href="/">View Full History</a>
  </div>
);

const UserTable = () => (
  <section className="AdminDashboard-tableCard">
    <div className="AdminDashboard-tableHeader">
      <h2>User Management &amp; Recent Activity</h2>
      <div className="AdminDashboard-tableActions">
        <span>
          <img src={filter_i} alt="" /> Filter
        </span>
        <span>
          <img src={sort_i} alt="" /> Sort
        </span>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Role</th>
          <th>Activity</th>
          <th>Timestamp</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.email}>
            <td>
              <div className="AdminDashboard-user">
                <div className="AdminDashboard-avatar">{user.initials}</div>
                <div>
                  <h4>{user.name}</h4>
                  <span>{user.email}</span>
                </div>
              </div>
            </td>
            <td>
              <span className="AdminDashboard-badge">{user.role}</span>
            </td>
            <td>{user.activity}</td>
            <td>{user.time}</td>
            <td>
              <img src={admin_more_i} alt="more actions" className="AdminDashboard-rowActionIcon" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

const AdminDashboard = () => {
  return (
    <div className="AdminDashboard-page">
      <Sidebar />
      <div className="AdminDashboard-container">
        <Header />
        <StatsSection />
        <div className="AdminDashboard-middle">
          <PerformanceSection />
          <ActivitySection />
        </div>
        <UserTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
