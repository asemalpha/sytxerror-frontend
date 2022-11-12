import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Job from "./pages/Job/Job";
import CreateApplication from "./pages/Job/application";

import ProfileEdit from "./pages/ProfilePage/profileEdit";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import CreateJob from "./pages/Job/createJob";
import APP_PATHS from "./app-pathes";
import SingleJob from "./pages/Job/SingleJob";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/job" element={<Job />} />

        <Route path="/job/application" element={<application />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <IsPrivate>
              <ProfileEdit />
            </IsPrivate>
          }
        />
        <Route
          path="/job/create"
          element={
            <IsPrivate>
              <CreateJob />
            </IsPrivate>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        <Route path={APP_PATHS.SINGLE_JOB} element={<SingleJob />} />
      </Routes>
    </div>
  );
}

export default App;
