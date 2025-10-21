import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Profile</h1>
      <p>Select a section below:</p>
      <nav>
        <Link to="details" style={{ marginRight: "10px" }}>
          Profile Details
        </Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* Nested Routes Render Here */}
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;

//ProfileDetails, ProfileSettings