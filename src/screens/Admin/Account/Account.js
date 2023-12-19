import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
const Account = () => {
    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-theme="blue_theme" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <Sidebar />
                <div className="body-wrapper">
                    <Navbar />
                    <div className="container-fluid">
                        <div className="card">
                            <ul
                                className="nav nav-pills user-profile-tab"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link position-relative rounded-0 active d-flex align-items-center justify-content-center bg-transparent fs-3 py-4"
                                        id="pills-account-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-account"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-account"
                                        aria-selected="true"
                                    >
                                        <i className="ti ti-user-circle me-2 fs-6" />
                                        <span className="d-none d-md-block">Account</span>
                                    </button>
                                </li>
                            </ul>
                            <div className="card-body">
                                <div className="tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-account"
                                        role="tabpanel"
                                        aria-labelledby="pills-account-tab"
                                        tabIndex={0}
                                    >
                                        <div className="row">
                                            <div className="col-lg-6 d-flex align-items-stretch">
                                                <div className="card w-100 position-relative overflow-hidden">
                                                    <div className="card-body p-4">
                                                        <h5 className="card-title fw-semibold">Change Profile</h5>
                                                        <p className="card-subtitle mb-4">
                                                            Change your profile picture from here
                                                        </p>
                                                        <div className="text-center">
                                                            <img
                                                                src="assets/images/profile/user-1.jpg"
                                                                alt=""
                                                                className="img-fluid rounded-circle"
                                                                width={120}
                                                                height={120}
                                                            />
                                                            <div className="d-flex align-items-center justify-content-center my-4 gap-3">
                                                                <button className="btn btn-primary">Upload</button>
                                                                <button className="btn btn-outline-danger">Reset</button>
                                                            </div>
                                                            <p className="mb-0">
                                                                Allowed JPG, GIF or PNG. Max size of 800K
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 d-flex align-items-stretch">
                                                <div className="card w-100 position-relative overflow-hidden">
                                                    <div className="card-body p-4">
                                                        <h5 className="mb-4">Total Rewards : $300</h5>
                                                        <h5 className="card-title fw-semibold">Change Password</h5>
                                                        <p className="card-subtitle mb-4">
                                                            To change your password please confirm here
                                                        </p>
                                                        <form>
                                                            <div className="mb-4">
                                                                <label
                                                                    htmlFor="exampleInputPassword1"
                                                                    className="form-label fw-semibold"
                                                                >
                                                                    Current Password
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    id="exampleInputPassword1"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label
                                                                    htmlFor="exampleInputPassword1"
                                                                    className="form-label fw-semibold"
                                                                >
                                                                    New Password
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    id="exampleInputPassword1"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                            <div className="">
                                                                <label
                                                                    htmlFor="exampleInputPassword1"
                                                                    className="form-label fw-semibold"
                                                                >
                                                                    Confirm Password
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    className="form-control"
                                                                    id="exampleInputPassword1"
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="card w-100 position-relative overflow-hidden mb-0">
                                                    <div className="card-body p-4">
                                                        <h5 className="card-title fw-semibold">Personal Details</h5>
                                                        <p className="card-subtitle mb-4">
                                                            To change your personal detail , edit and save from here
                                                        </p>
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="exampleInputPassword1"
                                                                            className="form-label fw-semibold"
                                                                        >
                                                                            First Name
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="exampleInputtext"
                                                                            placeholder="Mathew Anderson"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="exampleInputPassword1"
                                                                            className="form-label fw-semibold"
                                                                        >
                                                                            Last Name
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="exampleInputtext"
                                                                            placeholder="Mathew Anderson"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="exampleInputPassword1"
                                                                            className="form-label fw-semibold"
                                                                        >
                                                                            Email
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            className="form-control"
                                                                            id="exampleInputtext"
                                                                            placeholder="info@modernize.com"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="exampleInputPassword1"
                                                                            className="form-label fw-semibold"
                                                                        >
                                                                            Username
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="exampleInputtext"
                                                                            placeholder="username"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="exampleInputPassword1"
                                                                            className="form-label fw-semibold"
                                                                        >
                                                                            Phone
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="exampleInputtext"
                                                                            placeholder={+1234567890}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="exampleInputPassword1"
                                                                            className="form-label fw-semibold"
                                                                        >
                                                                            Minima Wallet address
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="exampleInputtext"
                                                                            placeholder="Minima Wallet address"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="exampleInputPassword1"
                                                                            className="form-label fw-semibold"
                                                                        >
                                                                            Discord User name
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="exampleInputtext"
                                                                            placeholder="Discord User name"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="exampleInputPassword1"
                                                                            className="form-label fw-semibold"
                                                                        >
                                                                            Twitter handle
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="exampleInputtext"
                                                                            placeholder="Twitter"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="exampleInputPassword1"
                                                                            className="form-label fw-semibold"
                                                                        >
                                                                            Facebook
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="exampleInputtext"
                                                                            placeholder="Facebook"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-4">
                                                                        <label
                                                                            htmlFor="exampleInputPassword1"
                                                                            className="form-label fw-semibold"
                                                                        >
                                                                            Telegram
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="exampleInputtext"
                                                                            placeholder="Telegram"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="d-flex align-items-center justify-content-end mt-4 gap-3">
                                                                        <button className="btn btn-primary">Save</button>
                                                                        <button className="btn btn-light-danger text-danger">
                                                                            Cancel
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
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
export default Account