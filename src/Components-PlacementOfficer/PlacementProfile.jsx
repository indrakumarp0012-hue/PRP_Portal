import React, { useEffect, useRef, useState } from "react";
import "./PlacementProfile.css";
import Search from "../assets/PlacementProfileAssets/Search.png";
import Notification from "../assets/PlacementProfileAssets/Notification.png";
import Message from "../assets/PlacementProfileAssets/Message.png";
import Profile1 from "../assets/PlacementProfileAssets/Profile1.png";
import Profile2 from "../assets/PlacementProfileAssets/Profile2.png";
import Editprofile from "../assets/PlacementProfileAssets/EditProfile.png";
import Professional from "../assets/PlacementProfileAssets/Professional.png";
import Personal from "../assets/PlacementProfileAssets/Personal.png";
import Institute from "../assets/PlacementProfileAssets/Institute.png";
import Document from "../assets/PlacementProfileAssets/Document.png";
import Employee from "../assets/PlacementProfileAssets/Employee.png";

const COUNTRY_CODES = [
  {
    code: "+91",
    flag: "🇮🇳",
    label: "India",
  },
  {
    code: "+1",
    flag: "🇺🇸",
    label: "USA/Canada",
  },
  {
    code: "+44",
    flag: "🇬🇧",
    label: "UK",
  },
  {
    code: "+61",
    flag: "🇦🇺",
    label: "Australia",
  },
  {
    code: "+971",
    flag: "🇦🇪",
    label: "UAE",
  },
  {
    code: "+65",
    flag: "🇸🇬",
    label: "Singapore",
  },
  {
    code: "+49",
    flag: "🇩🇪",
    label: "Germany",
  },
  {
    code: "+81",
    flag: "🇯🇵",
    label: "Japan",
  },
];

const initialFormData = {
  name: "Priyanka J",
  dateOfBirth: "October 14, 1988",
  email: "priya5@eduhire.com",
  gender: "Female",

  phoneCountryCode: "+1",
  phone: "(555) 012-3456",

  address: "745 ECR road, Chennai - 100010",

  college: "Govt. Eng. College, CBE",
  affiliatedUniversity: "Anna University",
  website: "www.gec.in",

  institutionPhoneCountryCode: "+1",
  institutionPhone: "(555) 012-3456",
  institutionAddress: "745 ECR road, Coimbatore - 100010",

  employeeId: "PO-2024-2349",
  joinedOn: "Apr 15, 2024",
  designation: "Placement Officer",
  experience: "6+ years",
  professionalAddress: "745 OMR road, Chennai - 105215",
};
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_REGEX = /^\+?[\d\s()-]{7,20}$/;

const WEBSITE_REGEX =
  /^(https?:\/\/)?([\w-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/;


const ALLOWED_DOCUMENT_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
];

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
];

const initialDocuments = [
  {
    id: 1,
    name: "Employee ID Card",
    fileName: "Employee_ID_Card.pdf",
  },
  {
    id: 2,
    name: "Appointment Letter",
    fileName: "Appointment_Letter.pdf",
  },
  {
    id: 3,
    name: "Certificates",
    fileName: "Certificates.pdf",
  },
];

const initialNotifications = [
  {
    id: 1,
    text: "New placement drive scheduled for Aug 20.",
  },
  {
    id: 2,
    text: "3 students updated their resumes.",
  },
];

const initialMessages = [
  {
    id: 1,
    text: "HR Manager: Please confirm interview slots.",
  },
];

const PlacementOffProfile = () => {

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    ...initialFormData,
  });

  const [savedFormData, setSavedFormData] = useState({
    ...initialFormData,
  });

  const [errors, setErrors] = useState({});

  const [documents, setDocuments] = useState([
    ...initialDocuments,
  ]);

  const [savedDocuments, setSavedDocuments] = useState([
    ...initialDocuments,
  ]);

  const [documentError, setDocumentError] = useState("");


  const [profilePicture, setProfilePicture] =
    useState(Profile1);

  const [
    isProfilePictureDeleted,
    setIsProfilePictureDeleted,
  ] = useState(false);

  const [previewPicture, setPreviewPicture] =
    useState(null);

  const [previewDeleted, setPreviewDeleted] =
    useState(false);

  const [profilePictureError, setProfilePictureError] =
    useState("");

  const [notifications] = useState(
    initialNotifications
  );

  const [messages] = useState(initialMessages);

  const [
    isNotificationsOpen,
    setIsNotificationsOpen,
  ] = useState(false);

  const [
    isMessagesOpen,
    setIsMessagesOpen,
  ] = useState(false);

  const notificationsRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setIsNotificationsOpen(false);
      }

      if (
        messagesRef.current &&
        !messagesRef.current.contains(event.target)
      ) {
        setIsMessagesOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleToggleNotifications = () => {
    setIsNotificationsOpen(
      (previous) => !previous
    );

    setIsMessagesOpen(false);
  };


  const handleToggleMessages = () => {
    setIsMessagesOpen(
      (previous) => !previous
    );

    setIsNotificationsOpen(false);
  };

  const committedProfileImage =
    isProfilePictureDeleted
      ? null
      : profilePicture;

  const displayedProfileImage = isEditing
    ? previewPicture
      ? previewPicture
      : previewDeleted
      ? null
      : committedProfileImage
    : committedProfileImage;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => {
      if (!previous[name]) {
        return previous;
      }

      const nextErrors = {
        ...previous,
      };

      delete nextErrors[name];

      return nextErrors;
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth =
        "Date of birth is required.";
    } else if (
      Number.isNaN(Date.parse(formData.dateOfBirth))
    ) {
      newErrors.dateOfBirth =
        "Enter a valid date.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !EMAIL_REGEX.test(formData.email.trim())
    ) {
      newErrors.email =
        "Enter a valid email address.";
    }

    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone =
        "Phone number is required.";
    } else if (
      !PHONE_REGEX.test(formData.phone.trim())
    ) {
      newErrors.phone =
        "Enter a valid phone number.";
    }

    if (!formData.address.trim()) {
      newErrors.address =
        "Address is required.";
    }

    if (!formData.college.trim()) {
      newErrors.college =
        "College/University is required.";
    }

    if (!formData.affiliatedUniversity.trim()) {
      newErrors.affiliatedUniversity =
        "Affiliated University is required.";
    }

    if (
      formData.website.trim() &&
      !WEBSITE_REGEX.test(formData.website.trim())
    ) {
      newErrors.website =
        "Enter a valid website.";
    }

    if (!formData.institutionPhone.trim()) {
      newErrors.institutionPhone =
        "Institution phone number is required.";
    } else if (
      !PHONE_REGEX.test(
        formData.institutionPhone.trim()
      )
    ) {
      newErrors.institutionPhone =
        "Enter a valid phone number.";
    }

    if (!formData.institutionAddress.trim()) {
      newErrors.institutionAddress =
        "Institution address is required.";
    }

    if (!formData.employeeId.trim()) {
      newErrors.employeeId =
        "Employee ID is required.";
    }

    if (!formData.joinedOn.trim()) {
      newErrors.joinedOn =
        "Joined On is required.";
    }

    if (!formData.designation.trim()) {
      newErrors.designation =
        "Designation is required.";
    }

    if (!formData.experience.trim()) {
      newErrors.experience =
        "Experience is required.";
    }

    if (!formData.professionalAddress.trim()) {
      newErrors.professionalAddress =
        "Institute address is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleEditClick = () => {
    setIsEditing(true);
    setErrors({});
    setDocumentError("");
    setProfilePictureError("");
    setPreviewPicture(null);
    setPreviewDeleted(false);
  };


  const handleSave = () => {
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    const nextProfilePicture =
      previewPicture || profilePicture;

    const nextIsProfilePictureDeleted =
      previewPicture
        ? false
        : previewDeleted
        ? true
        : isProfilePictureDeleted;

    setSavedFormData({
      ...formData,
    });

    setSavedDocuments([
      ...documents,
    ]);

    if (previewPicture) {
      setProfilePicture(previewPicture);
    }

    setIsProfilePictureDeleted(
      nextIsProfilePictureDeleted
    );

    setPreviewPicture(null);
    setPreviewDeleted(false);
    setProfilePictureError("");
    setDocumentError("");
    setErrors({});
    setIsEditing(false);
  };


  const handleCancel = () => {
    setFormData({
      ...savedFormData,
    });

    setDocuments([
      ...savedDocuments,
    ]);

    setErrors({});
    setDocumentError("");
    setPreviewPicture(null);
    setPreviewDeleted(false);
    setProfilePictureError("");
    setIsEditing(false);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setProfilePictureError(
        "Please select an image."
      );

      return;
    }

    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      setProfilePictureError(
        "Only JPG and PNG images are allowed."
      );

      event.target.value = "";

      return;
    }

  
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewPicture(reader.result);
      setPreviewDeleted(false);
      setProfilePictureError("");
    };

    reader.onerror = () => {
      setProfilePictureError(
        "Unable to read the selected image."
      );
    };

    reader.readAsDataURL(file);

    event.target.value = "";
  };

  const handleDeleteProfilePicture = () => {
    setPreviewPicture(null);
    setPreviewDeleted(true);
    setProfilePictureError("");
  };


  const handleViewDocument = (document) => {
    if (document.url) {
      window.open(
        document.url,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      alert(
        `${document.name} is available in the profile.`
      );
    }
  };


  const handleDeleteDocument = (documentId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this document?"
    );

    if (!confirmed) {
      return;
    }

    setDocuments(
      (previousDocuments) =>
        previousDocuments.filter(
          (document) =>
            document.id !== documentId
        )
    );
  };

  const handleAddDocument = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setDocumentError(
        "Please select a file."
      );

      return;
    }

    if (
      !ALLOWED_DOCUMENT_TYPES.includes(file.type)
    ) {
      setDocumentError(
        "Only PDF, JPG, and PNG files are allowed."
      );

      event.target.value = "";

      return;
    }

   
    const newDocument = {
      id: Date.now(),
      name: file.name,
      fileName: file.name,
      url: URL.createObjectURL(file),
    };

    setDocuments(
      (previousDocuments) => [
        ...previousDocuments,
        newDocument,
      ]
    );

    setDocumentError("");

    event.target.value = "";
  };

  return (
    <main className="placementOffProfileMain">
      <div className="placementOffProfileContent">

        <header className="placementOffProfileHeader">

          <div className="placementOffProfileSearchBar">
            <img
              src={Search}
              alt="Search"
              className="placementOffProfileSearchIcon"
            />

            <input
              type="text"
              placeholder="Search companies, drives..."
              className="placementOffProfileSearchInput"
            />
          </div>

          <div className="placementOffProfileHeaderRight">

          

            <div
              className="placementOffProfileIconButton"
              ref={notificationsRef}
            >
              <img
                src={Notification}
                alt="Notifications"
                className="placementOffProfileHeaderIcon"
                onClick={handleToggleNotifications}
              />

              {notifications.length > 0 && (
                <span className="placementOffProfileBadge">
                  {notifications.length}
                </span>
              )}

              {isNotificationsOpen && (
                <div className="placementOffProfileDropdownPanel">
                  {notifications.map(
                    (notification) => (
                      <div
                        key={notification.id}
                        className="placementOffProfileDropdownItem"
                      >
                        {notification.text}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

          

            <div
              className="placementOffProfileIconButton"
              ref={messagesRef}
            >
              <img
                src={Message}
                alt="Messages"
                className="placementOffProfileHeaderIcon"
                onClick={handleToggleMessages}
              />

              {messages.length > 0 && (
                <span className="placementOffProfileBadge">
                  {messages.length}
                </span>
              )}

              {isMessagesOpen && (
                <div className="placementOffProfileDropdownPanel">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className="placementOffProfileDropdownItem"
                    >
                      {message.text}
                    </div>
                  ))}
                </div>
              )}
            </div>

           

            <div className="placementOffProfileUser">

              {displayedProfileImage ? (
                <img
                  src={displayedProfileImage}
                  alt="Priyanka"
                  className="placementOffProfileUserImage"
                />
              ) : (
                <div
                  className="placementOffProfileUserImage placementOffProfilePhotoPlaceholder"
                  role="img"
                  aria-label="No profile photo"
                >
                  👤
                </div>
              )}

              <div className="placementOffProfileUserInfo">
                <span className="placementOffProfileUserName">
                  Priyanka
                </span>

                <span className="placementOffProfileUserRole">
                  Placement Officer
                </span>
              </div>

            </div>

          </div>
        </header>

        <div className="placementOffProfileTitleSection">

          <h1 className="placementOffProfileTitle">
            My Profile
          </h1>

          <p className="placementOffProfileSubtitle">
            Manage your personal information,
            preferences &amp; view your
            performance.
          </p>

        </div>


        <div className="placementOffProfileGrid">


          <div className="placementOffProfileLeftColumn">

           

            <div className="placementOffProfileProfileCardWrapper">

              <div className="placementOffProfileProfileCard">

                <img
                  src={Profile2}
                  alt=""
                  className="placementOffProfileProfileCardImage"
                />

                <div className="placementOffProfilePhotoWrapper">

                  {displayedProfileImage ? (
                    <img
                      src={displayedProfileImage}
                      alt="Priyanka - Placement Officer"
                      className="placementOffProfilePhotoCircle"
                    />
                  ) : (
                    <div
                      className="placementOffProfilePhotoCircle placementOffProfilePhotoPlaceholder"
                      role="img"
                      aria-label="No profile photo"
                    >
                      👤
                    </div>
                  )}

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
                        accept="image/jpeg,image/png"
                        onChange={
                          handleProfilePictureChange
                        }
                        className="placementOffProfilePhotoEditInput"
                      />
                    </label>
                  )}

                </div>

                <h2 className="placementOffProfileProfileCardName">
                  {savedFormData.name}
                </h2>

                <p className="placementOffProfileProfileCardRole">
                  {savedFormData.designation}
                </p>

              </div>

              {!isEditing && (
                <button
                  type="button"
                  className="placementOffProfileEditButton"
                  onClick={handleEditClick}
                >
                  <img
                    src={Editprofile}
                    alt="Edit Profile"
                    className="placementOffProfileEditIcon"
                  />

                  Edit Profile
                </button>
              )}

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

            </div>


            <div
              className={`placementOffProfileCard placementOffProfileProfessionalCard ${
                isEditing
                  ? "placementOffProfileEditingCard"
                  : ""
              }`}
            >

              <div className="placementOffProfileCardHeader">

                <img
                  src={Professional}
                  alt="Professional Information"
                  className="placementOffProfileCardHeaderIcon"
                />

                <h3 className="placementOffProfileCardTitle">
                  Professional Information
                </h3>

              </div>

              <div className="placementOffProfileFieldStack">

              

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Employee Id
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="employeeId"
                        value={formData.employeeId}
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.employeeId && (
                        <span className="placementOffProfileError">
                          {errors.employeeId}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.employeeId}
                    </span>
                  )}

                </div>

               

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Joined On
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="joinedOn"
                        value={formData.joinedOn}
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.joinedOn && (
                        <span className="placementOffProfileError">
                          {errors.joinedOn}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.joinedOn}
                    </span>
                  )}

                </div>

               

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Designation
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.designation && (
                        <span className="placementOffProfileError">
                          {errors.designation}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.designation}
                    </span>
                  )}

                </div>

                

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Experience
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.experience && (
                        <span className="placementOffProfileError">
                          {errors.experience}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.experience}
                    </span>
                  )}

                </div>

               

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Institute Address
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="professionalAddress"
                        value={
                          formData.professionalAddress
                        }
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.professionalAddress && (
                        <span className="placementOffProfileError">
                          {errors.professionalAddress}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.professionalAddress}
                    </span>
                  )}

                </div>

              </div>
            </div>

          </div>


          <div className="placementOffProfileRightColumn">


            <div
              className={`placementOffProfileCard placementOffProfilePersonalCard ${
                isEditing
                  ? "placementOffProfileEditingCard"
                  : ""
              }`}
            >

              <div className="placementOffProfileCardHeader">

                <img
                  src={Personal}
                  alt="Personal Information"
                  className="placementOffProfileCardHeaderIcon"
                />

                <h3 className="placementOffProfileCardTitle">
                  Personal Information
                </h3>

              </div>

              <div className="placementOffProfileFieldGrid placementOffProfileFieldGridThree">

             

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Name
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.name && (
                        <span className="placementOffProfileError">
                          {errors.name}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.name}
                    </span>
                  )}

                </div>

               

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Date of birth
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="placementOffProfileInput"
                        placeholder="October 14, 1988"
                      />

                      {errors.dateOfBirth && (
                        <span className="placementOffProfileError">
                          {errors.dateOfBirth}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.dateOfBirth}
                    </span>
                  )}

                </div>

              

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Email
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.email && (
                        <span className="placementOffProfileError">
                          {errors.email}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.email}
                    </span>
                  )}

                </div>

              </div>

              <div className="placementOffProfileFieldGrid placementOffProfileFieldGridThree">

            

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Gender
                  </span>

                  {isEditing ? (
                    <>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="placementOffProfileSelect"
                      >
                        <option value="">
                          Select gender
                        </option>

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

                      {errors.gender && (
                        <span className="placementOffProfileError">
                          {errors.gender}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.gender}
                    </span>
                  )}

                </div>

            

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Phone no
                  </span>

                  {isEditing ? (
                    <>
                      <div className="placementOffProfilePhoneRow">

                        <select
                          name="phoneCountryCode"
                          value={
                            formData.phoneCountryCode
                          }
                          onChange={handleChange}
                          className="placementOffProfileSelect placementOffProfileCountryCodeSelect"
                        >
                          {COUNTRY_CODES.map(
                            (country) => (
                              <option
                                key={country.code}
                                value={country.code}
                              >
                                {country.flag}{" "}
                                {country.code}
                              </option>
                            )
                          )}
                        </select>

                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="placementOffProfileInput"
                        />

                      </div>

                      {errors.phone && (
                        <span className="placementOffProfileError">
                          {errors.phone}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.phoneCountryCode}{" "}
                      {formData.phone}
                    </span>
                  )}

                </div>

              </div>

           

              <div className="placementOffProfileFieldGrid placementOffProfileFieldGridOne">

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Address
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.address && (
                        <span className="placementOffProfileError">
                          {errors.address}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.address}
                    </span>
                  )}

                </div>

              </div>

            </div>

            <div
              className={`placementOffProfileCard placementOffProfileInstituteCard ${
                isEditing
                  ? "placementOffProfileEditingCard"
                  : ""
              }`}
            >

              <div className="placementOffProfileCardHeader">

                <img
                  src={Institute}
                  alt="Institute Details"
                  className="placementOffProfileCardHeaderIcon"
                />

                <h3 className="placementOffProfileCardTitle">
                  Institute Details
                </h3>

              </div>

            

              <div className="placementOffProfileFieldGrid placementOffProfileFieldGridOne">

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    College/University
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.college && (
                        <span className="placementOffProfileError">
                          {errors.college}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.college}
                    </span>
                  )}

                </div>

              </div>

            

              <div className="placementOffProfileFieldGrid placementOffProfileFieldGridTwo">

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Affiliated University
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="affiliatedUniversity"
                        value={
                          formData.affiliatedUniversity
                        }
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.affiliatedUniversity && (
                        <span className="placementOffProfileError">
                          {
                            errors.affiliatedUniversity
                          }
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {
                        formData.affiliatedUniversity
                      }
                    </span>
                  )}

                </div>

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Institution Website
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.website && (
                        <span className="placementOffProfileError">
                          {errors.website}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {formData.website}
                    </span>
                  )}

                </div>

              </div>

            

              <div className="placementOffProfileFieldGrid placementOffProfileFieldGridTwo">

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Phone no
                  </span>

                  {isEditing ? (
                    <>
                      <div className="placementOffProfilePhoneRow">

                        <select
                          name="institutionPhoneCountryCode"
                          value={
                            formData.institutionPhoneCountryCode
                          }
                          onChange={handleChange}
                          className="placementOffProfileSelect placementOffProfileCountryCodeSelect"
                        >
                          {COUNTRY_CODES.map(
                            (country) => (
                              <option
                                key={country.code}
                                value={country.code}
                              >
                                {country.flag}{" "}
                                {country.code}
                              </option>
                            )
                          )}
                        </select>

                        <input
                          type="text"
                          name="institutionPhone"
                          value={
                            formData.institutionPhone
                          }
                          onChange={handleChange}
                          className="placementOffProfileInput"
                        />

                      </div>

                      {errors.institutionPhone && (
                        <span className="placementOffProfileError">
                          {
                            errors.institutionPhone
                          }
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {
                        formData.institutionPhoneCountryCode
                      }{" "}
                      {formData.institutionPhone}
                    </span>
                  )}

                </div>

                <div className="placementOffProfileField">

                  <span className="placementOffProfileFieldLabel">
                    Institution Address
                  </span>

                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        name="institutionAddress"
                        value={
                          formData.institutionAddress
                        }
                        onChange={handleChange}
                        className="placementOffProfileInput"
                      />

                      {errors.institutionAddress && (
                        <span className="placementOffProfileError">
                          {
                            errors.institutionAddress
                          }
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="placementOffProfileFieldValue">
                      {
                        formData.institutionAddress
                      }
                    </span>
                  )}

                </div>

              </div>

            </div>


            <div className="placementOffProfileCard placementOffProfileDocumentsCard">

              <div className="placementOffProfileCardHeader">

                <img
                  src={Document}
                  alt="Documents"
                  className="placementOffProfileCardHeaderIcon"
                />

                <h3 className="placementOffProfileCardTitle">
                  Documents
                </h3>

              </div>

              <div className="placementOffProfileDocumentList">

                {documents.length > 0 &&
                  documents.map((document) => (
                    <div
                      className="placementOffProfileDocumentItem"
                      key={document.id}
                    >

                      <div className="placementOffProfileDocumentInfo">

                        <img
                          src={Employee}
                          alt="Document"
                          className="placementOffProfileDocumentIcon"
                        />

                        <span className="placementOffProfileDocumentName">
                          {document.name}
                        </span>

                      </div>

                      <div className="placementOffProfileDocumentActions">

                        <button
                          type="button"
                          className="placementOffProfileViewButton"
                          onClick={() =>
                            handleViewDocument(
                              document
                            )
                          }
                        >
                          View
                        </button>

                        {isEditing && (
                          <button
                            type="button"
                            className="placementOffProfileDeleteButton"
                            onClick={() =>
                              handleDeleteDocument(
                                document.id
                              )
                            }
                          >
                            Delete
                          </button>
                        )}

                      </div>

                    </div>
                  ))}

              </div>

            

              {isEditing && (
                <div className="placementOffProfileAddDocument">

                  <label
                    htmlFor="placementOffProfileDocumentInput"
                    className="placementOffProfileFieldLabel"
                  >
                    + Add Document
                  </label>

                  <input
                    id="placementOffProfileDocumentInput"
                    type="file"
                    accept="application/pdf,image/jpeg,image/png"
                    onChange={handleAddDocument}
                    className="placementOffProfileDocumentFileInput"
                  />

                  {documentError && (
                    <span className="placementOffProfileDocumentError">
                      {documentError}
                    </span>
                  )}

                </div>
              )}

            </div>

          </div>
        </div>

        {isEditing && (
          <div className="placementOffProfileActions">

            <button
              type="button"
              className="placementOffProfileCancelButton"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button
              type="button"
              className="placementOffProfileSaveButton"
              onClick={handleSave}
            >
              Save Changes
            </button>

          </div>
        )}

      </div>
    </main>
  );
};

export default PlacementOffProfile;