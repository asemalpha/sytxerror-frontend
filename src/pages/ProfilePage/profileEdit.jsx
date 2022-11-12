import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import APP_PATHS from "../../app-pathes";
import {
  FaHotel,
  FaLink,
  FaLocationArrow,
  FaChalkboardTeacher,
  FaPaperPlane,
} from "react-icons/fa";

function ProfileEdit() {
  const { user, authenticateUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(user);
  const navigation = useNavigate();

  function handleChange(event) {
    const { value, name } = event.target;

    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    authService
      .editProfile(userData)
      .then((result) => {
        authenticateUser(result.data);
        navigation(APP_PATHS.PROFILE);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          <FaHotel /> Company Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={userData.name}
          />
        </label>
        <br />
        <br />
        <label>
          <FaLink />
          Web Site
          <input
            type="text"
            name="websiteUrl"
            onChange={handleChange}
            value={userData.websiteUrl || ""}
          />
        </label>
        <br />
        <br />
        <label>
          <FaLocationArrow /> Location
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={userData.location || ""}
          />
        </label>
        <br />
        <br />
        <label>
          <FaChalkboardTeacher /> Summary
          <input
            type="text"
            name="summary"
            onChange={handleChange}
            value={userData.summary || ""}
          />
        </label>
        <br />
        <br />
        <button type="submit">
          <FaPaperPlane /> Submit
        </button>
      </form>
    </div>
  );
}
export default ProfileEdit;
