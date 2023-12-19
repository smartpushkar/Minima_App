import React from "react";
import { Link } from "react-router-dom";
const DeveloperRegistration = () => {
    return(
        <>
        <div
  className="page-wrapper"
  id="main-wrapper"
  data-layout="vertical"
  data-sidebartype="full"
  data-sidebar-position="fixed"
  data-header-position="fixed"
>
  <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
    <div className="d-flex align-items-center justify-content-center w-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-8 col-lg-6 col-xxl-6">
          <div className="card mb-0">
            <div className="card-body">
              <Link to="/"
                className="text-nowrap logo-img text-center d-block mb-5 w-100">
                <h4>Minima</h4>
                {/* <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg" width="180" alt=""> */}
              </Link>
              <div className="position-relative text-center my-4">
                <p className="mb-0 fs-4 px-3 d-inline-block bg-white z-index-5 position-relative">
                  Developer Registration
                </p>
                <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
              </div>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Minima Wallet Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Discord Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Facebook Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Telegram Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Twitter Handle
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                  />
                </div>
                <a
                  href="login.html"
                  className="btn btn-primary w-100 py-8 mb-4 rounded-2"
                >
                  Save
                </a>
                <div className="d-flex align-items-center">
                  <p className="fs-4 mb-0 text-dark">
                    Already have an Account?
                  </p>
                  <Link className="text-primary fw-medium ms-2" to="/Login">
                    Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default DeveloperRegistration