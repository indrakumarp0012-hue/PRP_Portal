import React from "react";
import "./AdminDashboard_PerformanceChart.css";

const data = [
  { month: "Jan", value: 50 },
  { month: "Feb", value: 70 },
  { month: "Mar", value: 60},
  { month: "Apr", value: 90 },
  { month: "May", value: 85 },
  { month: "Jun", value: 110 },
];

const AdminDashboard_PerformanceChart = () => {
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
            <div
              className={`bar ${index === data.length - 1 ? "active" : ""}`}
              style={{ height: `${item.value * 1.6}px` }}
            ></div>

            <span>{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard_PerformanceChart;