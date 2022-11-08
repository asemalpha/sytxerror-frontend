import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import APP_PATHS from "../../app-pathes";

function ProfileEdit() {
  const { user, authenticateUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(user);
  const navigation = useNavigate();

  function handleChange(event) {
    const { value, name } = event.target;
    console.log(userData);
    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    authService
      .post("/profile/edit", userData)
      .then((result) => {
        console.log(result);
        authenticateUser(result.data);
        navigation(APP_PATHS.PROFILE);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={userData.companyName}
          />
        </label>
        <label>
          Web Site
          <input
            type="text"
            name="website"
            onChange={handleChange}
            value={userData.website}
          />
        </label>
        <label>
          Location
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={userData.location}
          />
        </label>
        <label>
          Summary
          <input
            type="text"
            name="summary"
            onChange={handleChange}
            value={userData.summary}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default ProfileEdit;
