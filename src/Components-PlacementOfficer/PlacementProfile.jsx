import React from "react";
import "./PlacementProfile.css";
import Search from "../assets/PlacementProfileAssets/Search.png";
import Notification from "../assets/PlacementProfileAssets/Notifiction.png";
import Message from "../assets/PlacementProfileAssets/Message.png";
import Profile1 from "../assets/PlacementProfileAssets/Profile1.png";
import Profile2 from "../assets/PlacementProfileAssets/Profile2.png";
import Editprofile from "../assets/PlacementProfileAssets/EditProfile.png";
import Professional from "../assets/PlacementProfileAssets/Professional.png";
import Personal from "../assets/PlacementProfileAssets/Personal.png";
import Institute from "../assets/PlacementProfileAssets/Institute.png";
import Document from "../assets/PlacementProfileAssets/Document.png";
import Employee from "../assets/PlacementProfileAssets/Employee.png";
import Appointment from "../assets/PlacementProfileAssets/Appointment.png";
import Certificate from "../assets/PlacementProfileAssets/Certificate.png";

const PlacementProfile = () => {
  return (
    <div className="placement-profile-page">
      <header className="placement-header">
        <div className="placement-search">
          <img src={Search} alt="Search" />
          <input type="text" placeholder="Search companies, drives..." />
        </div>
       <div className="placement-header-right">
           <div className="placement-header-icon">
              <img src={Notification} alt="Notifications" />
            
            </div>

            <div className="placement-header-icon">
             <img src={Message} alt="Messages" />
             
            </div>

           <div className="placement-header-profile">
               <img src={Profile2} alt="Priyanka" />
               <div className="placement-header-profile-info">
                  <h4>Priyanka</h4>
                  <p>Placement Officer</p>
              </div>
           </div>
      </div>
      </header>

      <div className="placement-page-title">
        <h1>My Profile</h1>
        <p>Manage your personal information, preferences &amp; view your performance.</p>
      </div>

      <div className="placement-profile-content">
        <aside className="placement-left-column">
          <div className="placement-profile-card">
            <div className="placement-profile-gradient"></div>
            <div className="placement-profile-image-wrapper">
              <img src={Profile1} alt="Priyanka" className="placement-profile-image" />
            </div>
            <h2>Priyanka</h2>
            <p>Placement Officer</p>
          </div>

          <button type="button" className="placement-edit-btn">
            <img src={Editprofile} alt="Edit" />
            <span>Edit Profile</span>
          </button>

          <div className="placement-professional-card">
            <div className="placement-section-heading">
              <img src={Professional} alt="Professional" />
              <h3>Professional Information</h3>
            </div>

            <div className="placement-professional-details">
              <div className="placement-detail-item">
                <label>Employee Id</label>
                <span>PO-2024-2349</span>
              </div>

              <div className="placement-detail-item">
                <label>Joined On</label>
                <span>Apr 15, 2024</span>
              </div>

              <div className="placement-detail-item">
                <label>Designation</label>
                <span>Placement Officer</span>
              </div>

              <div className="placement-detail-item">
                <label>Experience</label>
                <span>6+ years</span>
              </div>

              <div className="placement-detail-item">
                <label>Institute Address</label>
                <span>745 OMR Road, Chennai - 105215</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="placement-right-column">
          <section className="placement-info-card">
            <div className="placement-section-heading">
              <img src={Personal} alt="Personal" />
              <h3>Personal Information</h3>
            </div>

            <div className="placement-personal-grid">
              <div className="placement-info-item">
                <label>Name</label>
                <span>Priyanka J</span>
              </div>

              <div className="placement-info-item">
                <label>Date of birth</label>
                <span>October 14, 1988</span>
              </div>

              <div className="placement-info-item">
                <label>Email</label>
                <span>priya5@eduhire.com</span>
              </div>

              <div className="placement-info-item">
                <label>Gender</label>
                <span>Female</span>
              </div>

              <div className="placement-info-item">
                <label>Phone no</label>
                <span>+1 (555) 012-3456</span>
              </div>

              <div className="placement-info-item full-width">
                <label>Address</label>
                <span>745 ECR Road, Chennai - 100010</span>
              </div>
            </div>
          </section>

          <section className="placement-info-card institute-card">
            <div className="placement-section-heading">
              <img src={Institute} alt="Institute" />
              <h3>Institute Details</h3>
            </div>

            <div className="placement-institute-grid">
              <div className="placement-info-item">
                <label>College/University</label>
                <span>Govt. Eng. College, CBE</span>
              </div>

              <div className="placement-info-item">
                <label></label>
                <span></span>
              </div>

              <div className="placement-info-item">
                <label>Affiliated University</label>
                <span>Anna University</span>
              </div>

              <div className="placement-info-item">
                <label>Institution Website</label>
                <span>www.gec.in</span>
              </div>

              <div className="placement-info-item">
                <label>Phone no</label>
                <span>+1 (555) 012-3456</span>
              </div>

              <div className="placement-info-item">
                <label>Institution Address</label>
                <span>745 ECR Road, Coimbatore - 100010</span>
              </div>
            </div>
          </section>

          <section className="placement-documents-card">
            <div className="placement-section-heading">
              <img src={Document} alt="Documents" />
              <h3>Documents</h3>
            </div>

            <div className="placement-document-list">
              <div className="placement-document-item">
                <div className="placement-document-name">
                  <img src={Employee} alt="Employee ID" />
                  <span>Employee ID Card</span>
                </div>
                <button type="button">View</button>
              </div>

              <div className="placement-document-item">
                <div className="placement-document-name">
                  <img src={Appointment} alt="Appointment Letter" />
                  <span>Appointment Letter</span>
                </div>
                <button type="button">View</button>
              </div>

              <div className="placement-document-item">
                <div className="placement-document-name">
                  <img src={Certificate} alt="Certificates" />
                  <span>Certificates</span>
                </div>
                <button type="button">View</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PlacementProfile;