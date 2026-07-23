import React from "react";
import "./PlacementOfficerHeader.css";
import SearchIcon from "../assets/PlacementOfficerHeadersAssets/Vector.png";
import NotificationIcon from "../assets/PlacementOfficerHeadersAssets/Frame 353.png";
import MessageIcon from "../assets/PlacementOfficerHeadersAssets/Frame 354.png";
import ProfileImage from "../assets/PlacementOfficerHeadersAssets/Ellipse 36.png";

const PlacementOfficerHeader = () => {
  return (
    <header className="po-header">
      <div className="po-header-search">
        <img
          src={SearchIcon}
          alt="Search"
          className="po-header-search-icon"
        />

        <input
          type="text"
          placeholder="Search companies, drives..."
          className="po-header-search-input"
        />
      </div>
      <div className="po-header-right">
        <div className="po-header-icon-box">
          <img
            src={NotificationIcon}
            alt="Notifications"
            className="po-header-icon"
          />
        </div>
        <div className="po-header-icon-box">
          <img
            src={MessageIcon}
            alt="Messages"
            className="po-header-icon"
          />
        </div>

        <div className="po-header-profile">
          <img
            src={ProfileImage}
            alt="Profile"
            className="po-header-profile-img"
          />

          <div className="po-header-profile-info">
            <h4 className="po-header-name">Priyanka</h4>
            <p className="po-header-role">Placement Officer</p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default PlacementOfficerHeader;
