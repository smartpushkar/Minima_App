import React from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
    return (
        <>
            <div
                className="page-wrapper"
                id="main-wrapper"
                data-layout="vertical"
                data-sidebartype="full"
                data-sidebar-position="fixed"
                data-header-position="fixed"
            >
                <div className="position-relative overflow-hidden radial-gradient min-vh-100">
                    <div className="position-relative z-index-5">
                        <div className="row">
                            <div className="col-lg-6 col-xl-7 col-xxl-8">
                                <a
                                    href="index.html"
                                    className="text-nowrap logo-img d-block px-4 py-9 w-100"
                                >
                                    <h4>Minima</h4>
                                    {/* <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg" width="180" alt=""> */}
                                </a>
                                <div
                                    className="d-none d-lg-flex align-items-center justify-content-center"
                                    style={{ height: "calc(100vh - 80px)" }}
                                >
                                    <img
                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/login-security.svg"
                                        alt=""
                                        className="img-fluid"
                                        width={500}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5 col-xxl-4">
                                <div className="card mb-0 shadow-none rounded-0 min-vh-100 h-100">
                                    <div className="d-flex align-items-center w-100 h-100">
                                        <div className="card-body">
                                            <div className="mb-5">
                                                <h2 className="fw-bolder fs-7 mb-3">Forgot your password?</h2>
                                                <p className="mb-0 ">
                                                    Please enter the email address associated with your account
                                                    and We will email you a link to reset your password.
                                                </p>
                                            </div>
                                            <form>
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
                                                <a
                                                    href="/"
                                                    className="btn btn-primary w-100 py-8 mb-3"
                                                >
                                                    Forgot Password
                                                </a>
                                                <Link to="/Login"
                                                    className="btn btn-light-primary text-primary w-100 py-8">
                                                    Back to Login
                                                </Link>
                                            </form>
                                        </div>
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
export default ForgotPassword