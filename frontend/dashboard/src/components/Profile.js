import React, { useState } from "react";
import "../styles/Profile.css"; // Optional: Custom styles for the profile page

const Profile = () => {
  const [profileData, setProfileData] = useState({
    username: "johndoe",
    email: "johndoe@example.com",
    firstName: "John",
    lastName: "Doe",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving profile changes
    console.log("Profile updated with data:", profileData);
  };

  return (
    <div className="container">
      <div className="card shadow-lg o-hidden border-0 my-5">
        <div className="card-body p-5">
          <h2 className="text-center">Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                value={profileData.username}
                onChange={handleChange}
                disabled
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                className="form-control"
                type="text"
                id="firstName"
                name="firstName"
                value={profileData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                className="form-control"
                type="text"
                id="lastName"
                name="lastName"
                value={profileData.lastName}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
