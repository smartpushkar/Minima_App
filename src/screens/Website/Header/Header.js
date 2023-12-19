import React from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  function isActive(pathname) {
    return location.pathname === pathname;
  }
  return (
    <>
      <>
        {/* START NAVBAR */}
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top sticky">
          <div className="container">
            <span className="navbar-brand">
              <img src="assets/images/minima-logo.svg" alt="" height={27} />
              {/* <h3 class="navbar-brand">Minima</h3> */}
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="mdi mdi-menu text-white" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-navList">
                <li className="nav-item">
                  <Link className={isActive('/BuildDapp') ? 'nav-link active' : 'nav-link'} to="/BuildDapp">
                  Build a Dapp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={isActive('/Grants') ? 'nav-link active' : 'nav-link'} to="/Grants">
                  Grants
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={isActive('/CommunityProjects') ? 'nav-link active' : 'nav-link'} to="/CommunityProjects">
                    Community Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={isActive('/DeveloperLeaderboard') ? 'nav-link active' : 'nav-link'} to="/DeveloperLeaderboard">
                    Developer Leaderboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={isActive('/ProjectLeaderboard') ? 'nav-link active' : 'nav-link'} to="/ProjectLeaderboard">
                    Project Leaderboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={isActive('/DeveloperRegistration') ? 'nav-link active' : 'nav-link'} to="/DeveloperRegistration">
                    Create a Developer Account
                  </Link>
                </li>
               
              </ul>
            </div>
            {/*end collapse*/}
          </div>
          {/*end container*/}
        </nav>
        {/* END NAVBAR */}
      </>

    </>
  )
}
export default Header