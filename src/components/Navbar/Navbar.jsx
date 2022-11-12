import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import {
  FaEdit,
  FaHome,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        {" "}
        <FaHome /> SytxError
      </Link>

      <Link to="/job/all">
        <FaSearch /> Jobs
      </Link>

      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>
            <FaSignOutAlt /> Logout
          </button>

          <Link to="/profile">
            <FaUser /> Profile
          </Link>

          <Link to="/profile/edit">
            {" "}
            <FaEdit /> Edit Profile
          </Link>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <FaUser />
            Sign Up
          </Link>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
