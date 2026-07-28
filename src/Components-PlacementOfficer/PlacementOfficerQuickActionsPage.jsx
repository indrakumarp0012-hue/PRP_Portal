import React from "react";
import "./PlacementOfficerQuickActionsPage.css";

import AddProfilesIcon from "../assets/PlacementOfficerAssets/hugeicons_new-job.png";
import MockInterviewIcon from "../assets/PlacementOfficerAssets/Frame 198.png";
import ScheduleDriveIcon from "../assets/PlacementOfficerAssets/mdi-light_calendar.png";
import SendNoticeIcon from "../assets/PlacementOfficerAssets/material-symbols-light_send-outline.png";

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: "Add Profiles",
      icon: AddProfilesIcon,
      bg: "#edf4ff",
      color: "#2684FC1A",
    },
    {
      id: 2,
      title: "Mock Interview",
      icon: MockInterviewIcon,
      bg: "#fff0f0",
      color: "rgba(233, 66, 53, 0.1)",
    },
    {
      id: 3,
      title: "Schedule Drive",
      icon: ScheduleDriveIcon,
      bg: "#ecfbf4",
      color: "rgba(0, 172, 71, 0.1)",
    },
    {
      id: 4,
      title: "Send Notice",
      icon: SendNoticeIcon,
      bg: "#f5f3ff",
      color: "rgba(203, 195, 213, 0.2)",
    },
  ];

  return (
    <div className="po-quick-actions">
      <h3 className="po-quick-actions-title">Quick Actions</h3>

      <div className="po-quick-actions-grid">
        {actions.map((action) => (
          <button
            key={action.id}
            className="po-quick-actions-card"
            style={{ background: action.bg }}
          >
            <span
              className="po-quick-actions-icon"
              style={{ backgroundColor: action.color }}
            >
              <img
                src={action.icon}
                alt={action.title}
                className="po-quick-actions-icon-img"
              />
            </span>

            <span className="po-quick-actions-card-title">
              {action.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
