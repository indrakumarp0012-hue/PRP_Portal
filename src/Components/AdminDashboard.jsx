import React from "react";
import "./AdminDashboard.css";
import home_icon from "../assets/admin_home_icon.png"
import company_icon from "../assets/admin_company_ver_icon.png"
import settings_icon from "../assets/admin_settings_icon.png"
import user_icon from "../assets/admin_user_icon.png"
import analytics_icon from "../assets/admin_analytics_icon.png"
import search_icon from "../assets/admin_search_icon.png"
import notification_icon from "../assets/admin_notification_icon.png"
import nv_settings_icon from "../assets/admin_nv_settings_icon.png"
import admin_profile_img from "../assets/admin_img.jpg"
import help_icon from "../assets/admin_help_icon.png"
import placement_icon from "../assets/admin_placement_icon.png";
import student_icon from "../assets/admin_student_icon.png";
import recruiter_icon from "../assets/admin_recruiter_icon.png";
import partner_icon from "../assets/admin_partner_icon.png";
import green_arrow from "../assets/admin_green_arrow.png";
import purple_arrow from "../assets/admin_purple_arrow.png";
import orange_pending from "../assets/admin_pending_icon.png";
import gray_growth from "../assets/admin_growth_icon.png";
import activity_user from "../assets/admin_activity_user.png";
import activity_company from "../assets/admin_activity_company.png";
import activity_verified from "../assets/admin_activity_verified.png";
import activity_security from "../assets/admin_activity_security.png";
import activity_failed from "../assets/admin_activity_failed1.jpg";
import filter_icon from "../assets/admin_filter_icon.png";
import sort_icon from "../assets/admin_sort_icon.png";
import more_icon from "../assets/admin_more_icon.png";
import sarah_img from "../assets/admin_user1.png";
import david_img from "../assets/admin_user2.png";


import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
} from "recharts";

const AdminDashboard = () => {
    const placementData = [
        { month: "Jan", placements: 22 },
        { month: "Feb", placements: 34 },
        { month: "Mar", placements: 28 },
        { month: "Apr", placements: 47 },
        { month: "May", placements: 39 },
        { month: "Jun", placements: 58 },
    ];
    return (
        <div className="admin-dashboard-container">
            <div className="admin-dashboard-sidebar">
                <div className="admin-dashboard-menu">
                    <div className="admin-dashboard-menu-item admin-dashboard-menu-active">
                        <img src={home_icon} alt="Dashboard" className="admin-dashboard-menu-icon"/>
                        <span className="admin-dashboard-menu-text">Dashboard</span>
                    </div>
                    <div className="admin-dashboard-menu-item">
                        <img src={user_icon} alt="User" className="admin-dashboard-menu-icon"/>
                        <span className="admin-dashboard-menu-text">User Management</span>
                    </div>
                    <div className="admin-dashboard-menu-item">
                        <img src={company_icon} alt="Company" className="admin-dashboard-menu-icon"/>
                        <span className="admin-dashboard-menu-text"> Company Verification </span>
                    </div>
                    <div className="admin-dashboard-menu-item">
                        <img src={settings_icon} alt="Settings" className="admin-dashboard-menu-icon"/>
                        <span className="admin-dashboard-menu-text">Platform Settings</span>
                    </div>
                    <div className="admin-dashboard-menu-item">
                        <img src={analytics_icon} alt="Analytics" className="admin-dashboard-menu-icon" />
                        <span className="admin-dashboard-menu-text"> Analytics</span>
                    </div>
                </div>
            </div>

            <div className="admin-dashboard-main">
                <div className="admin-dashboard-navbar">
                    <div className="admin-dashboard-search">
                        <img src={search_icon} alt="search" className="admin-dashboard-search-icon" />
                        <input type="text" placeholder="Search resources, users, or logs..." className="admin-dashboard-search-input" />
                    </div>
                    <div className="admin-dashboard-navbar-right">
                        <img src={notification_icon} alt="notification" className="admin-dashboard-navbar-icon" />
                        <img src={help_icon} alt="help" className="admin-dashboard-navbar-icon"/>
                        <img src={nv_settings_icon} alt="settings" className="admin-dashboard-navbar-icon"/>
                        <div className="admin-dashboard-profile">
                            <div className="admin-dashboard-profile-content">
                                <h4 className="admin-dashboard-profile-name">Admin User</h4>
                                <p className="admin-dashboard-profile-role">SUPER ADMIN</p>
                            </div>
                            <img src={admin_profile_img} alt="profile"  className="admin-dashboard-profile-image"/>
                        </div>
                    </div>
                </div>
                <div className="admin-dashboard-stats">
                    <div className="admin-dashboard-stat-card">
                        <div className="admin-dashboard-stat-header">
                            <p className="admin-dashboard-stat-title"> TOTAL PLACEMENTS</p>
                            <img src={placement_icon} alt="" className="admin-dashboard-stat-icon" />
                        </div>
                        <h2 className="admin-dashboard-stat-value">4,120</h2>
                        <div className="admin-dashboard-stat-footer">
                            <img src={green_arrow} alt="" className="admin-dashboard-stat-footer-icon"/>
                            <span className="admin-dashboard-stat-footer-green"> 82% of Annual Goal</span>
                        </div>
                    </div>
                    <div className="admin-dashboard-stat-card">
                        <div className="admin-dashboard-stat-header">
                            <p className="admin-dashboard-stat-title">ACTIVE STUDENTS</p>
                            <img src={student_icon} alt="" className="admin-dashboard-stat-icon" />
                        </div>
                        <h2 className="admin-dashboard-stat-value"> 12,482 </h2>
                        <div className="admin-dashboard-stat-footer">
                            <img src={purple_arrow}  alt="" className="admin-dashboard-stat-footer-icon"  />
                            <span className="admin-dashboard-stat-footer-purple"> +12% vs last month </span>
                        </div>
                    </div>
                    <div className="admin-dashboard-stat-card">
                        <div className="admin-dashboard-stat-header">
                            <p className="admin-dashboard-stat-title">VERIFIED RECRUITERS </p>
                            <img  src={recruiter_icon}  alt="" className="admin-dashboard-stat-icon"/>
                        </div>
                        <h2 className="admin-dashboard-stat-value"> 3,142</h2>
                        <div className="admin-dashboard-stat-footer">
                            <img src={orange_pending} alt="" className="admin-dashboard-stat-footer-icon"
                            />
                            <span className="admin-dashboard-stat-footer-orange">  14 pending review </span>
                        </div>
                    </div>
                    <div className="admin-dashboard-stat-card">
                        <div className="admin-dashboard-stat-header">
                            <p className="admin-dashboard-stat-title">  PARTNER COMPANIES </p>
                            <img src={partner_icon} alt="" className="admin-dashboard-stat-icon"/>
                        </div>
                        <h2 className="admin-dashboard-stat-value">312</h2>
                        <div className="admin-dashboard-stat-footer">
                            <img  src={gray_growth} alt=""   className="admin-dashboard-stat-footer-icon"  />
                            <span className="admin-dashboard-stat-footer-gray">Stable Growth</span>
                        </div>
                    </div>
                </div>
                <div className="admin-dashboard-middle-section">
                    <div className="admin-dashboard-chart-card">
                        <div className="admin-dashboard-chart-header">
                            <div>
                                <h2 className="admin-dashboard-chart-title"> Placement Performance</h2>
                                <p className="admin-dashboard-chart-subtitle"> Monthly placement success trends </p>
                            </div>
                            <div className="admin-dashboard-chart-legend">
                                <span className="admin-dashboard-chart-legend-dot"></span>
                                <span className="admin-dashboard-chart-legend-text"> Placements</span>
                            </div>
                        </div>
                        <div className="admin-dashboard-chart-wrapper">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={placementData}
                                    margin={{
                                        top: 10,
                                        right: 15,
                                        left: -20,
                                        bottom: 0,
                                    }}
                                    barCategoryGap="30%" >
                                    <XAxis
                                        dataKey="month"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{
                                            fill: "#5E5E5E",
                                            fontSize: 15,
                                            fontWeight: 500,
                                        }}/>
                                    <YAxis hide />
                                    <Tooltip
                                        cursor={{
                                            fill: "rgba(120,120,120,.12)",
                                        }}
                                        contentStyle={{
                                            borderRadius: "10px",
                                            border: "1px solid #E5E5E5",
                                            background: "#fff",
                                            boxShadow: "0 4px 12px rgba(0,0,0,.12)",
                                        }}
                                        formatter={(value) => [`${value}`, "Placements"]} />
                                    <Bar
                                        dataKey="placements"
                                        radius={[10, 10, 0, 0]}
                                        maxBarSize={50} >
                                        {placementData.map((item, index) => (
                                            <Cell
                                                key={index}
                                                fill={
                                                    index === placementData.length - 1
                                                        ? "#8655D9"
                                                        : "#D8CFF1"
                                                } />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="admin-dashboard-activity-card">
                        <h2 className="admin-dashboard-activity-title"> Admin Activity Log</h2>
                        <div className="admin-dashboard-activity-list">
                            <div className="admin-dashboard-activity-item">
                                <img src={activity_user} alt="" className="admin-dashboard-activity-icon"  />
                                <div>
                                    <h4 className="admin-dashboard-activity-heading">New User Registration</h4>
                                    <p className="admin-dashboard-activity-subtitle">Alex Morgan <span className="admin-dashboard-activity-dot"></span> 2 mins ago</p>
                                </div>
                            </div>
                            <div className="admin-dashboard-activity-item">
                                <img src={activity_company} alt="" className="admin-dashboard-activity-icon" />
                                <div>
                                    <h4 className="admin-dashboard-activity-heading">Company Document Uploaded</h4>
                                    <p className="admin-dashboard-activity-subtitle">Nexus Dynamics <span className="admin-dashboard-activity-dot"></span> 45 mins ago</p>
                                </div>
                            </div>
                            <div className="admin-dashboard-activity-item">
                                <img src={activity_verified} alt="" className="admin-dashboard-activity-icon" />
                                <div>
                                    <h4 className="admin-dashboard-activity-heading">Recruiter Verified</h4>
                                    <p className="admin-dashboard-activity-subtitle"> Global Tech <span className="admin-dashboard-activity-dot"></span> 3 hrs ago</p>
                                </div>
                            </div>
                            <div className="admin-dashboard-activity-item">
                                <img src={activity_security}  alt="" className="admin-dashboard-activity-icon" />
                                <div>
                                    <h4 className="admin-dashboard-activity-heading"> Security Policy Updated </h4>
                                    <p className="admin-dashboard-activity-subtitle">  Applied globally <span className="admin-dashboard-activity-dot"></span> 5 hrs ago</p>
                                </div>
                            </div>
                            <div className="admin-dashboard-activity-item">
                                <img src={activity_failed} alt="" className="admin-dashboard-activity-icon"/>
                                <div>
                                    <h4 className="admin-dashboard-activity-heading">  Failed Login Attempt</h4>
                                    <p className="admin-dashboard-activity-subtitle">
                                        IP:192.168.1.45 <span className="admin-dashboard-activity-dot"></span> 8 hrs ago
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="admin-dashboard-activity-footer"> View Full History </p>
                    </div>
                </div>
                <div className="admin-dashboard-table-card">
                    <div className="admin-dashboard-table-header">
                        <h2 className="admin-dashboard-table-title">  User Management & Recent Activity</h2>
                        <div className="admin-dashboard-table-actions">
                            <div className="admin-dashboard-filter">
                                <img src={filter_icon} alt="filter" className="admin-dashboard-table-icon"  />
                                <span>Filter</span>
                            </div>
                            <div className="admin-dashboard-sort">
                                <img src={sort_icon}  alt="sort" className="admin-dashboard-table-icon" />
                                <span>Sort</span>
                            </div>
                        </div>
                    </div>
                    <table className="admin-dashboard-table">
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
                            <tr>
                                <td>
                                    <div className="admin-dashboard-user">
                                        <img src={sarah_img} alt="Sarah" className="admin-dashboard-user-avatar" />
                                        <div className="admin-dashboard-user-info">
                                            <h4>Sarah K. Jenkins</h4>
                                            <p>sarah.j@globalhr.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="admin-dashboard-role-badge recruiter">RECRUITER</span>
                                </td>
                                <td> Published "Senior AI <br /> Architect" role </td>
                                <td> 2 mins ago</td>
                                <td>
                                    <div className="admin-dashboard-action">
                                        <img src={more_icon}/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="admin-dashboard-user">
                                        <img src={david_img} alt="David" className="admin-dashboard-user-avatar" />
                                        <div className="admin-dashboard-user-info">
                                            <h4>David Lee</h4>
                                            <p>d.lee@candidate.me</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="admin-dashboard-role-badge candidate"> CANDIDATE </span>
                                </td>
                                <td>  Submitted portfolio via AI <br /> matching </td>
                                <td>1 hour ago </td>
                                <td>
                                    <div className="admin-dashboard-action">
                                       <img src={more_icon}/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;