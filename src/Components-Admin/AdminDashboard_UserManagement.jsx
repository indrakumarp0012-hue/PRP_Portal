import React from "react";
import "./AdminDashboard_UserManagement.css";

import usermanagement_recruiter_i from "../assets/AdminAssets/usermanagement_recruiter_i.png";
import usermanagement_candidate_i from "../assets/AdminAssets/usermanagement_candidate_i.png";

import filter_i from "../assets/AdminAssets/filter_i.png";
import sort_i from "../assets/AdminAssets/sort_i.png";
import admin_more_i from "../assets/AdminAssets/more_i.png";

import sarah_i from "../assets/AdminAssets/sarah_i.png";
import david_i from "../assets/AdminAssets/david_i.png";

const users = [
  {
    image: sarah_i,
    name: "Sarah K. Jenkins",
    email: "sarah.j@globalhr.com",
    role: "RECRUITER",
    roleIcon: usermanagement_recruiter_i,
    activity: 'Published "Senior AI Architect" role',
    time: "2 mins ago",
  },
  {
    image: david_i,
    name: "David Lee",
    email: "d.lee@candidate.me",
    role: "CANDIDATE",
    roleIcon: usermanagement_candidate_i,
    activity: "Submitted portfolio via AI matching",
    time: "1 hour ago",
  },
];

const AdminDashboard_UserManagement = () => {
  return (
    <div className="user-table-card">
      <div className="table-header">
        <h3>User Management & Recent Activity</h3>

        <div className="table-actions">
          <div className="action-item">
            <img src={filter_i} alt="Filter" />
            <span>Filter</span>
          </div>

          <div className="action-item">
            <img src={sort_i} alt="Sort" />
            <span>Sort</span>
          </div>
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
                  <div className="user-avatar">
                    <img
                    src={user.image}
                    alt={user.name}
                    width={"100%"}
                    height={"100%"}
                  />
                  </div>

                  <div>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                  </div>
                </div>
              </td>

              <td>
                <img
                  src={user.roleIcon}
                  alt={user.role}
                  className="role-tag"
                />
              </td>

              <td>{user.activity}</td>

              <td className="time">{user.time}</td>

              <td>
                <img
                  src={admin_more_i}
                  alt="More"
                  className="menu-icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard_UserManagement;