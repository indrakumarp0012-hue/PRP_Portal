import React, { useEffect, useRef, useState } from "react";
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
  const initialFormData = {
    name: "Priyanka J",
    dateOfBirth: "1988-10-14",
    email: "priya5@eduhire.com",
    gender: "Female",
    phone: "+1 (555) 012-3456",
    address: "745 ECR Road, Chennai - 100010",

    college: "Govt. Eng. College, CBE",
    university: "Anna University",
    website: "www.gec.in",
    institutePhone: "+1 (555) 012-3456",
    instituteAddress: "745 ECR Road, Coimbatore - 100010",

    employeeId: "PO-2024-2349",
    joinedOn: "Apr 15, 2024",
    designation: "Placement Officer",
    experience: "6+ years",
    professionalAddress: "745 OMR Road, Chennai - 105215",
  };


  const initialDocuments = [
    {
      id: 1,
      name: "Employee ID Card",
      icon: Employee,
      file: null,
      url: null,
    },
    {
      id: 2,
      name: "Appointment Letter",
      icon: Appointment,
      file: null,
      url: null,
    },
    {
      id: 3,
      name: "Certificates",
      icon: Certificate,
      file: null,
      url: null,
    },
  ];


  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const [savedFormData, setSavedFormData] =
    useState(initialFormData);

  const [documents, setDocuments] =
    useState(initialDocuments);

  const [savedDocuments, setSavedDocuments] =
    useState(initialDocuments);

  const [errors, setErrors] = useState({});

  const [documentError, setDocumentError] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showMessages, setShowMessages] =
    useState(false);


  const [profilePicture, setProfilePicture] =
    useState(Profile2);

  
  const [savedProfilePicture, setSavedProfilePicture] =
    useState(Profile2);

  const [profilePictureError, setProfilePictureError] =
    useState("");

  const notificationRef = useRef(null);
  const messageRef = useRef(null);

  const notifications = [
    {
      id: 1,
      title: "New placement drive",
      text: "A new placement drive has been added.",
      time: "5 min ago",
    },
    {
      id: 2,
      title: "Profile update",
      text: "Your profile information was viewed.",
      time: "20 min ago",
    },
    {
      id: 3,
      title: "Interview scheduled",
      text: "An interview has been scheduled.",
      time: "1 hour ago",
    },
  ];

  const messages = [
    {
      id: 1,
      name: "Placement Team",
      text: "Please review the latest placement updates.",
      time: "10 min ago",
    },
    {
      id: 2,
      name: "HR Department",
      text: "New candidate documents are available.",
      time: "30 min ago",
    },
    {
      id: 3,
      name: "Anna University",
      text: "Placement coordination meeting reminder.",
      time: "2 hours ago",
    },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }

      if (
        messageRef.current &&
        !messageRef.current.contains(event.target)
      ) {
        setShowMessages(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);


  const handleNotificationClick = () => {
    setShowNotifications((prev) => !prev);
    setShowMessages(false);
  };


  const handleMessageClick = () => {
    setShowMessages((prev) => !prev);
    setShowNotifications(false);
  };


  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name =
        "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "Phone number is required";
    } else if (
      !/^\+?[\d\s\-()]{10,}$/.test(
        formData.phone
      )
    ) {
      newErrors.phone =
        "Please enter a valid phone number";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth =
        "Date of birth is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    } else if (
      formData.address.trim().length < 5
    ) {
      newErrors.address =
        "Address must be at least 5 characters";
    }

    if (!formData.college.trim()) {
      newErrors.college =
        "College/University is required";
    }

    if (formData.website.trim()) {
      if (
        !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(
          formData.website
        )
      ) {
        newErrors.website =
          "Please enter a valid website URL";
      }
    }

    if (!formData.institutePhone.trim()) {
      newErrors.institutePhone =
        "Institute phone is required";
    } else if (
      !/^\+?[\d\s\-()]{10,}$/.test(
        formData.institutePhone
      )
    ) {
      newErrors.institutePhone =
        "Please enter a valid phone number";
    }

    if (!formData.instituteAddress.trim()) {
      newErrors.instituteAddress =
        "Institute address is required";
    } else if (
      formData.instituteAddress.trim().length < 5
    ) {
      newErrors.instituteAddress =
        "Address must be at least 5 characters";
    }

    if (!formData.employeeId.trim()) {
      newErrors.employeeId =
        "Employee ID is required";
    }

    if (!formData.joinedOn.trim()) {
      newErrors.joinedOn =
        "Joined On is required";
    }

    if (!formData.designation.trim()) {
      newErrors.designation =
        "Designation is required";
    } else if (
      formData.designation.trim().length < 2
    ) {
      newErrors.designation =
        "Designation must be at least 2 characters";
    }

    if (!formData.experience.trim()) {
      newErrors.experience =
        "Experience is required";
    }

    if (!formData.professionalAddress.trim()) {
      newErrors.professionalAddress =
        "Institute address is required";
    } else if (
      formData.professionalAddress.trim().length < 5
    ) {
      newErrors.professionalAddress =
        "Institute address must be at least 5 characters";
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };


  const handleEditClick = () => {
    setIsEditing(true);
    setErrors({});
    setDocumentError("");
    setProfilePictureError("");
    setSuccessMessage("");
  };
  const handleProfilePictureChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    setProfilePictureError("");

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    const allowedExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
    ];

    const fileName = file.name.toLowerCase();

    const hasValidExtension =
      allowedExtensions.some((extension) =>
        fileName.endsWith(extension)
      );

    if (
      !allowedTypes.includes(file.type) &&
      !hasValidExtension
    ) {
      setProfilePictureError(
        "Only JPG, JPEG or PNG files are allowed."
      );

      e.target.value = "";
      return;
    }
    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setProfilePictureError(
        "Profile photo must be less than or equal to 5 MB."
      );

      e.target.value = "";
      return;
    }

  
    const imageUrl = URL.createObjectURL(file);

    setProfilePicture(imageUrl);

    setProfilePictureError("");

    e.target.value = "";
  };


  const handleDeleteProfilePicture = () => {
    setProfilePicture(null);
    setProfilePictureError("");
  };
  const handleCancel = () => {
    setFormData(savedFormData);
    setDocuments(savedDocuments);

    setProfilePicture(savedProfilePicture);

    setIsEditing(false);

    setErrors({});
    setDocumentError("");
    setProfilePictureError("");
    setSuccessMessage("");
  };
  const handleSaveChanges = () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSavedFormData(formData);
    setSavedDocuments(documents);

   
    setSavedProfilePicture(profilePicture);

    setSuccessMessage(
      "Profile updated successfully!"
    );

    setIsEditing(false);

    setErrors({});
    setDocumentError("");
    setProfilePictureError("");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const handleAddDocument = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setDocumentError("");

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    const allowedExtensions = [
      ".pdf",
      ".jpg",
      ".jpeg",
      ".png",
    ];

    const fileName = file.name.toLowerCase();

    const hasValidExtension =
      allowedExtensions.some((extension) =>
        fileName.endsWith(extension)
      );

    if (
      !allowedTypes.includes(file.type) &&
      !hasValidExtension
    ) {
      setDocumentError(
        "Only PDF, JPG, JPEG or PNG files are allowed."
      );

      e.target.value = "";
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      setDocumentError(
        "File size must be less than or equal to 5 MB."
      );

      e.target.value = "";
      return;
    }

    const fileUrl =
      URL.createObjectURL(file);

    let documentIcon = Certificate;

    if (
      file.type === "application/pdf" ||
      fileName.endsWith(".pdf")
    ) {
      documentIcon = Document;
    } else if (
      fileName.includes("employee") ||
      fileName.includes("id")
    ) {
      documentIcon = Employee;
    } else if (
      fileName.includes("appointment")
    ) {
      documentIcon = Appointment;
    }

    const newDocument = {
      id: Date.now() + Math.random(),
      name: file.name,
      icon: documentIcon,
      file,
      url: fileUrl,
    };

    setDocuments((prev) => [
      ...prev,
      newDocument,
    ]);

    setDocumentError("");

    e.target.value = "";
  };

  const handleDeleteDocument = (documentId) => {
    setDocuments((prev) =>
      prev.filter(
        (doc) => doc.id !== documentId
      )
    );

    setDocumentError("");
  };


  const handleViewDocument = (doc) => {
    if (doc.url) {
      window.open(
        doc.url,
        "_blank",
        "noopener,noreferrer"
      );

      return;
    }

    alert(
      `${doc.name} is currently available as a document record, but no file has been uploaded yet.`
    );
  };


  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(
      `${dateString}T00:00:00`
    );

    return date.toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  return (
    <div className="placement-profile-page">


      <header className="placement-header">

        <div className="placement-search">
          <img
            src={Search}
            alt="Search"
          />

          <input
            type="text"
            placeholder="Search companies, drives..."
          />
        </div>

        <div className="placement-header-right">


          <div
            className="placement-header-action"
            ref={notificationRef}
          >
            <button
              type="button"
              className={`placement-header-icon ${
                showNotifications
                  ? "active"
                  : ""
              }`}
              onClick={handleNotificationClick}
              aria-label="Notifications"
            >
              <img
                src={Notification}
                alt="Notifications"
              />
            </button>

            {showNotifications && (
              <div className="placement-dropdown placement-notification-dropdown">

                <div className="placement-dropdown-header">

                  <div>
                    <h4>Notifications</h4>
                    <span>
                      5 new notifications
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setShowNotifications(false)
                    }
                  >
                    ×
                  </button>

                </div>

                <div className="placement-dropdown-list">

                  {notifications.map(
                    (notification) => (
                      <div
                        className="placement-notification-item"
                        key={notification.id}
                      >

                        <div className="placement-notification-dot">
                          !
                        </div>

                        <div className="placement-dropdown-content">

                          <strong>
                            {notification.title}
                          </strong>

                          <p>
                            {notification.text}
                          </p>

                          <small>
                            {notification.time}
                          </small>

                        </div>

                      </div>
                    )
                  )}

                </div>

                <button
                  type="button"
                  className="placement-dropdown-footer"
                  onClick={() =>
                    setShowNotifications(false)
                  }
                >
                  View all notifications
                </button>

              </div>
            )}
          </div>

      

          <div
            className="placement-header-action"
            ref={messageRef}
          >
            <button
              type="button"
              className={`placement-header-icon ${
                showMessages
                  ? "active"
                  : ""
              }`}
              onClick={handleMessageClick}
              aria-label="Messages"
            >
              <img
                src={Message}
                alt="Messages"
              />
            </button>

            {showMessages && (
              <div className="placement-dropdown placement-message-dropdown">

                <div className="placement-dropdown-header">

                  <div>
                    <h4>Messages</h4>
                    <span>
                      3 unread messages
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setShowMessages(false)
                    }
                  >
                    ×
                  </button>

                </div>

                <div className="placement-dropdown-list">

                  {messages.map((message) => (
                    <div
                      className="placement-message-item"
                      key={message.id}
                    >

                      <div className="placement-message-avatar">
                        {message.name
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <div className="placement-dropdown-content">

                        <strong>
                          {message.name}
                        </strong>

                        <p>
                          {message.text}
                        </p>

                        <small>
                          {message.time}
                        </small>

                      </div>

                    </div>
                  ))}

                </div>

                <button
                  type="button"
                  className="placement-dropdown-footer"
                  onClick={() =>
                    setShowMessages(false)
                  }
                >
                  View all messages
                </button>

              </div>
            )}
          </div>

         

          <div className="placement-header-profile">

            <img
              src={Profile1}
              alt="Priyanka"
            />

            <div className="placement-header-profile-info">
              <h4>Priyanka</h4>
              <p>Placement Officer</p>
            </div>

          </div>

        </div>

      </header>

      <div className="placement-page-title">

        <h1>My Profile</h1>

        <p>
          Manage your personal information,
          preferences &amp; view your performance.
        </p>

      </div>

     

      {successMessage && (
        <div className="placement-success-message">
          {successMessage}
        </div>
      )}


      <div className="placement-profile-content">


        <aside className="placement-left-column">

          <div className="placement-profile-card">

            <div className="placement-profile-gradient"></div>

            <div className="placement-profile-image-wrapper">

              <img
                src={
                  profilePicture ||
                  Profile2
                }
                alt="Priyanka"
                className="placement-profile-image"
              />

              {isEditing && (
                <label
                  className="placementOffProfilePhotoEditOverlay"
                  htmlFor="placementOffProfilePhotoInput"
                  title="Change photo"
                >

                  <img
                    src={Editprofile}
                    alt="Change photo"
                    className="placementOffProfilePhotoEditIcon"
                  />

                  <input
                    id="placementOffProfilePhotoInput"
                    type="file"
                    accept="image/jpeg,image/png,image/jpg"
                    onChange={
                      handleProfilePictureChange
                    }
                    className="placementOffProfilePhotoEditInput"
                  />

                </label>
              )}

            </div>

            <h2>
              {savedFormData.name}
            </h2>

            <p>
              {savedFormData.designation}
            </p>

          </div>

          <button
            type="button"
            className="placement-edit-btn"
            onClick={handleEditClick}
          >
            <img
              src={Editprofile}
              alt="Edit"
            />

            <span>
              Edit Profile
            </span>
          </button>


          {isEditing && (
            <button
              type="button"
              className="placementOffProfileDeletePhotoButton"
              onClick={handleDeleteProfilePicture}
            >
              Delete Photo
            </button>
          )}

          {isEditing &&
            profilePictureError && (
              <span className="placementOffProfileDocumentError">
                {profilePictureError}
              </span>
            )}

          <div className="placement-professional-card">

            <div className="placement-section-heading">

              <img
                src={Professional}
                alt="Professional"
              />

              <h3>
                Professional Information
              </h3>

            </div>

            <div className="placement-professional-details">

            

              <div className="placement-detail-item">

                <label>
                  Employee Id
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="employeeId"
                      value={
                        formData.employeeId
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.employeeId
                          ? "input-error"
                          : ""
                      }
                    />

                    {errors.employeeId && (
                      <span className="error-text">
                        {errors.employeeId}
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formData.employeeId}
                  </span>
                )}

              </div>

              <div className="placement-detail-item">

                <label>
                  Joined On
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="joinedOn"
                      value={
                        formData.joinedOn
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.joinedOn
                          ? "input-error"
                          : ""
                      }
                    />

                    {errors.joinedOn && (
                      <span className="error-text">
                        {errors.joinedOn}
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formData.joinedOn}
                  </span>
                )}

              </div>

              <div className="placement-detail-item">

                <label>
                  Designation
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="designation"
                      value={
                        formData.designation
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.designation
                          ? "input-error"
                          : ""
                      }
                    />

                    {errors.designation && (
                      <span className="error-text">
                        {errors.designation}
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formData.designation}
                  </span>
                )}

              </div>

      
              <div className="placement-detail-item">

                <label>
                  Experience
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="experience"
                      value={
                        formData.experience
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.experience
                          ? "input-error"
                          : ""
                      }
                    />

                    {errors.experience && (
                      <span className="error-text">
                        {errors.experience}
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formData.experience}
                  </span>
                )}

              </div>

              <div className="placement-detail-item">

                <label>
                  Institute Address
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="professionalAddress"
                      value={
                        formData.professionalAddress
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.professionalAddress
                          ? "input-error"
                          : ""
                      }
                    />

                    {errors.professionalAddress && (
                      <span className="error-text">
                        {
                          errors.professionalAddress
                        }
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {
                      formData.professionalAddress
                    }
                  </span>
                )}

              </div>

            </div>

          </div>

        </aside>

        <main className="placement-right-column">

          <section className="placement-info-card">

            <div className="placement-section-heading">

              <img
                src={Personal}
                alt="Personal"
              />

              <h3>
                Personal Information
              </h3>

            </div>

            <div className="placement-personal-grid">

             
              <div className="placement-info-item">

                <label>
                  Name
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={
                        formData.name
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.name
                          ? "input-error"
                          : ""
                      }
                    />

                    {errors.name && (
                      <span className="error-text">
                        {errors.name}
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formData.name}
                  </span>
                )}

              </div>

      
              <div className="placement-info-item">

                <label>
                  Date of birth
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={
                        formData.dateOfBirth
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.dateOfBirth
                          ? "input-error"
                          : ""
                      }
                    />

                    {errors.dateOfBirth && (
                      <span className="error-text">
                        {errors.dateOfBirth}
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formatDate(
                      formData.dateOfBirth
                    )}
                  </span>
                )}

              </div>

              

              <div className="placement-info-item">

                <label>
                  Email
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="email"
                      name="email"
                      value={
                        formData.email
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.email
                          ? "input-error"
                          : ""
                      }
                    />

                    {errors.email && (
                      <span className="error-text">
                        {errors.email}
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formData.email}
                  </span>
                )}

              </div>

            

              <div className="placement-info-item">

                <label>
                  Gender
                </label>

                {isEditing ? (
                  <select
                    name="gender"
                    value={
                      formData.gender
                    }
                    onChange={
                      handleInputChange
                    }
                  >
                    <option value="Female">
                      Female
                    </option>

                    <option value="Male">
                      Male
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                ) : (
                  <span>
                    {formData.gender}
                  </span>
                )}

              </div>

            

              <div className="placement-info-item">

                <label>
                  Phone no
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="tel"
                      name="phone"
                      value={
                        formData.phone
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.phone
                          ? "input-error"
                          : ""
                      }
                    />

                    {errors.phone && (
                      <span className="error-text">
                        {errors.phone}
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formData.phone}
                  </span>
                )}

              </div>


              <div className="placement-info-item full-width">

                <label>
                  Address
                </label>

                {isEditing ? (
                  <>
                    <textarea
                      name="address"
                      value={
                        formData.address
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.address
                          ? "input-error"
                          : ""
                      }
                      rows="3"
                    />

                    {errors.address && (
                      <span className="error-text">
                        {errors.address}
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formData.address}
                  </span>
                )}

              </div>

            </div>

          </section>


          <section className="placement-info-card institute-card">

            <div className="placement-section-heading">

              <img
                src={Institute}
                alt="Institute"
              />

              <h3>
                Institute Details
              </h3>

            </div>

            <div className="placement-institute-grid">



              <div className="placement-info-item">

                <label>
                  College/University
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="college"
                      value={
                        formData.college
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.college
                          ? "input-error"
                          : ""
                      }
                    />

                    {errors.college && (
                      <span className="error-text">
                        {errors.college}
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formData.college}
                  </span>
                )}

              </div>

              <div className="placement-info-item empty-grid-item">
                <label></label>
                <span></span>
              </div>

             

              <div className="placement-info-item">

                <label>
                  Affiliated University
                </label>

                {isEditing ? (
                  <input
                    type="text"
                    name="university"
                    value={
                      formData.university
                    }
                    onChange={
                      handleInputChange
                    }
                  />
                ) : (
                  <span>
                    {formData.university}
                  </span>
                )}

              </div>

             

              <div className="placement-info-item">

                <label>
                  Institution Website
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="website"
                      value={
                        formData.website
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.website
                          ? "input-error"
                          : ""
                      }
                      placeholder="e.g. www.example.com"
                    />

                    {errors.website && (
                      <span className="error-text">
                        {errors.website}
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formData.website}
                  </span>
                )}

              </div>

           

              <div className="placement-info-item">

                <label>
                  Phone no
                </label>

                {isEditing ? (
                  <>
                    <input
                      type="tel"
                      name="institutePhone"
                      value={
                        formData.institutePhone
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.institutePhone
                          ? "input-error"
                          : ""
                      }
                    />

                    {errors.institutePhone && (
                      <span className="error-text">
                        {
                          errors.institutePhone
                        }
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {formData.institutePhone}
                  </span>
                )}

              </div>

             

              <div className="placement-info-item">

                <label>
                  Institution Address
                </label>

                {isEditing ? (
                  <>
                    <textarea
                      name="instituteAddress"
                      value={
                        formData.instituteAddress
                      }
                      onChange={
                        handleInputChange
                      }
                      className={
                        errors.instituteAddress
                          ? "input-error"
                          : ""
                      }
                      rows="3"
                    />

                    {errors.instituteAddress && (
                      <span className="error-text">
                        {
                          errors.instituteAddress
                        }
                      </span>
                    )}
                  </>
                ) : (
                  <span>
                    {
                      formData.instituteAddress
                    }
                  </span>
                )}

              </div>

            </div>

          </section>

          <section className="placement-documents-card">

            <div className="placement-section-heading">

              <img
                src={Document}
                alt="Documents"
              />

              <h3>
                Documents
              </h3>

            </div>

            <div className="placement-document-list">

              {documents.length === 0 ? (
                <div className="placement-no-documents">
                  No documents available.
                </div>
              ) : (
                documents.map((doc) => (
                  <div
                    className="placement-document-item"
                    key={doc.id}
                  >

                    <div className="placement-document-name">

                      <img
                        src={doc.icon}
                        alt={doc.name}
                      />

                      <span>
                        {doc.name}
                      </span>

                    </div>

                    <div className="placement-document-actions">

                      <button
                        type="button"
                        className="placement-view-btn"
                        onClick={() =>
                          handleViewDocument(doc)
                        }
                      >
                        View
                      </button>

                      {isEditing && (
                        <button
                          type="button"
                          className="placement-delete-btn"
                          onClick={() =>
                            handleDeleteDocument(
                              doc.id
                            )
                          }
                        >
                          Delete
                        </button>
                      )}

                    </div>

                  </div>
                ))
              )}

            </div>

         

            {isEditing && (
              <div className="placement-add-document">

                <div className="placement-add-document-title">
                  + Add Document
                </div>

                <div className="placement-file-upload">

                  <input
                    type="file"
                    id="document-upload"
                    className="placement-file-input"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={
                      handleAddDocument
                    }
                  />

                </div>

                {documentError && (
                  <span className="error-text">
                    {documentError}
                  </span>
                )}

                <small className="placement-file-help">
                  PDF, JPG, JPEG or PNG.
                  Maximum 5 MB.
                </small>

              </div>
            )}

          </section>

        </main>


        {isEditing && (
          <div className="placement-profile-actions">

            <button
              type="button"
              className="placement-cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button
              type="button"
              className="placement-save-btn"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>

          </div>
        )}

      </div>

    </div>
  );
};

export default PlacementProfile;