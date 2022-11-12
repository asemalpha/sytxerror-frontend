import "./ProfilePage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/auth.context";
import { FaUser } from "react-icons/fa";

function ProfilePage() {
  const authData = useContext(AuthContext);

  function handleSubmit(e) {}

  return (
    <div className="Profile">
      <br />
      <h1>
        <FaUser /> {authData.user.name}
      </h1>
      <p>
        Welcome <b>{authData.user.name}</b> <br />
        Your location is <b>{authData.user.location}</b> <br />
        {authData.user.name} is a {authData.user.summary}
      </p>
      <div>
        <span>
          To <b>Create a new job post</b> pleae click on the button below.
          <br />
          To <b>Delete your Profile</b> please use the below link
        </span>
      </div>
      <br />
      <div>
        <Link to="/job/create">
          <FaUser /> Create a job
        </Link>
      </div>
      <br />
      <div>
        <Link to="/user/delete">
          <FaUser /> Delete Profile
        </Link>
      </div>
    </div>
  );
}

export default ProfilePage;
