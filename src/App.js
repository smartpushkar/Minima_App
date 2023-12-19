import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { isLoggedIn } from "./utilities/utils";
import { useEffect } from "react";
import Login from './screens/Login';
import NoAccess from "./screens/NoAccess";
import { ToastContainer } from "react-toastify";
import Dashboard from "./screens/Admin/Dashboard/Dashboard";

import Home from "./screens/Website/Home";
import CommunityProjects from "./screens/Website/CommunityProjects";
import DeveloperLeaderboard from "./screens/Website/DeveloperLeaderboard";
import ProjectLeaderboard from "./screens/Website/ProjectLeaderboard";
import DeveloperRegistration from "./screens/Website/DeveloperRegistration";
import BuildDapp from "./screens/Website/BuildDapp";
import Grants from "./screens/Website/Grants";

const useAuth = () => {
  const loggedIn = isLoggedIn();
  if (loggedIn) {
    return true;
  }
  return false;
}

const PrivateRoute = () => {
  const auth = useAuth();
  useEffect(() => {
    if (auth) {
      console.log("User is logged in");
    }
  }, [auth]);
  return auth ? <Outlet /> : <Navigate to="/login" />
};

// const PublicRoute = () => {
//   const auth = useAuth();
//   console.log("public route");
//   return auth ? <Navigate to="/Home" /> : <Navigate to="/Login" />;
// };

const App = () => {
  const auth = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home/>}/>
          <Route path='/Admin/' element={<Dashboard />} />
        </Route>
        <Route path="*" element={
          auth ? (
            <Navigate to="/NoAccess" />
          ) : (
            <Navigate to="/Login" />
          )
        } />
        {/* <Route path="/" element={<PublicRoute />} > */}
        <Route path="/assets/*" element={<NoAccess/>}/>
        <Route path="/NoAccess" element={<NoAccess />} />
        <Route path="/Login" element={<Login />} />

        <Route path="/BuildDapp" element={<BuildDapp />} />
        <Route path="/Grants" element={<Grants />} />
        <Route path="/CommunityProjects" element={<CommunityProjects />} />
        <Route path="/DeveloperLeaderboard" element={<DeveloperLeaderboard />} />
        <Route path="/ProjectLeaderboard" element={<ProjectLeaderboard />} />
        <Route path="/DeveloperRegistration" element={<DeveloperRegistration />} />
        {/* </Route> */}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;