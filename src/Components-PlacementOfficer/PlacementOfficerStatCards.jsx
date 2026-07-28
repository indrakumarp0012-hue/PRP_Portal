import React from "react";
import "./PlacementOfficerStatCards.css";

const stats = [
  {
    id: 1,
    value: "1250",
    title: "Total Students",
    change: "+12% this month",
    bg: "#eaf2ff",
    color: "#4f7cff",
  },
  {
    id: 2,
    value: "842",
    title: "Placed Students",
    change: "+67% this month",
    bg: "#fff1f1",
    color: "#6bc4ff",
  },
  {
    id: 3,
    value: "56",
    title: "Companies",
    change: "+6",
    bg: "#eefbf4",
    color: "#22c55e",
  },
  {
    id: 4,
    value: "11",
    title: "Upcoming Drives",
    change: "+4 this month",
    bg: "#f6f4ff",
    color: "#8b5cf6",
  },
];

const StatCards = () => {
  return (
    <div className="po-stat-cards">
      {stats.map((item) => (
        <div
          className="po-stat-card"
          key={item.id}
          style={{ background: item.bg }}
        >
          <h2 className="po-stat-card-value">{item.value}</h2>
          <p className="po-stat-card-title">{item.title}</p>
          <span
            className="po-stat-card-change"
            style={{ color: item.color }}
          >
            {item.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
