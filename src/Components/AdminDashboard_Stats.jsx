import React from "react";
import "./AdminDashboard_Stats.css";

import placement_i from "../assets/AdminDashbordAssets/placement_i.png";
import student_i from "../assets/AdminDashbordAssets/student_i.png";
import recruiter_i from "../assets/AdminDashbordAssets/recruiter_i.png";
import partner_i from "../assets/AdminDashbordAssets/partner_i.png";

import green_arrow_i from "../assets/AdminDashbordAssets/green_arrow_i.png";
import purple_arrow_i from "../assets/AdminDashbordAssets/purple_arrow_i.png";
import orange_pending_i from "../assets/AdminDashbordAssets/orange_pending_i.png";
import growth_i from "../assets/AdminDashbordAssets/growth_i.png";

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

const AdminDashboard_Stats = () => {
  return (
    <div className="stats-container">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          
          <div className="stat-top">
            <span className="stat-title">{item.title}</span>

            <img
              src={item.topIcon}
              alt={item.title}
              className="stat-icon"
            />
          </div>


          <h2 className="stat-value">{item.value}</h2>

        
          <div className="stat-bottom">
            <img
              src={item.bottomIcon}
              alt=""
              className="bottom-icon"
            />

            <span
              className="stat-subtitle"
              style={{ color: item.color }}
            >
              {item.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard_Stats;