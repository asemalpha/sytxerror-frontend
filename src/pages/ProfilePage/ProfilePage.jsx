import "./ProfilePage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function ProfilePage() {
  const authData = useContext(AuthContext);

  return (
    <div className="Profile">
      <h1>{authData.user.name} page</h1>
      <p>
        Welcome <b>{authData.user.name}</b>
        Your location is <b>{authData.user.location}</b>
        {authData.user.name} is a {authData.user.summary}
      </p>
      <div>
        <span>
          To <b>Create a new job post</b> pleae click on the button below.
        </span>
      </div>
      <div>
        <Link to="/job/create">Create a job</Link>
      </div>
    </div>
  );
}

export default ProfilePage;
