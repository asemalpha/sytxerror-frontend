import "./ProfilePage.css";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import { FaUser } from "react-icons/fa";

import { deleteUser } from "../../services/profile.service";

function ProfilePage() {
  const [user, setUser] = useState();
  console.log(user);
  const authData = useContext(AuthContext);
  const { logOutUser } = useContext(AuthContext);

  const handleSubmit = () => {
    const { id } = user.id;
    deleteUser(id).then((response) => {
      setUser(response.user.id);
      console.log(user);
      Navigate("../");
      logOutUser();
    });
  };

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
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          <FaUser /> Delete Profile
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
