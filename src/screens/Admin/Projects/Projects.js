import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
const Projects = () => {
    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-theme="blue_theme" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <Sidebar />
                <div className="body-wrapper">
                    <Navbar />
                    <div className="container-fluid">
                        <div className="card bg-light-info shadow-none position-relative overflow-hidden">
                            <div className="card-body px-4 py-3">
                                <div className="row align-items-center">
                                    <div clasFhrefsName="col-9">
                                        <h4 className="fw-semibold mb-8">Project</h4>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <Link className="text-muted " to="/Admin">
                                                        Dashboard
                                                    </Link>
                                                </li>
                                                <li className="breadcrumb-item" aria-current="page">
                                                    Project
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget-content searchable-container list">
                            {/* --------------------- start project ---------------- */}
                            <div className="card card-body">
                                <div className="row">
                                    <div className="col-md-4 col-xl-3">
                                        <form className="position-relative">
                                            <input
                                                type="text"
                                                className="form-control product-search ps-5"
                                                id="input-search"
                                                placeholder="Search Project..."
                                            />
                                            <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                                        </form>
                                    </div>
                                    <div className="col-md-8 col-xl-9 text-end d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
                                        <Link
                                            to="/"
                                            className="btn btn-info d-flex align-items-center"
                                            onclick="openAddProjectModal()"
                                        >
                                            <i className="ti ti-users text-white me-1 fs-5" /> Add Project
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* ---------------------
                        end project
                    ---------------- */}
                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="addProjectModal"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="addprojectModalTitle"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header d-flex align-items-center">
                                            <h5 className="modal-title">Project</h5>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="modal-body">
                                            <div className="add-project-box">
                                                <div className="add-project-content">
                                                    <form id="addprojectModalTitle">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="mb-3 project-name">
                                                                    <input
                                                                        type="text"
                                                                        id="c-name"
                                                                        className="form-control"
                                                                        placeholder="Project Name"
                                                                    />
                                                                    <span className="validation-text text-danger" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="mb-3 project-email">
                                                                    <input
                                                                        type="text"
                                                                        id="c-email"
                                                                        className="form-control"
                                                                        placeholder="Email"
                                                                    />
                                                                    <span className="validation-text text-danger" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="mb-3 project-occupation">
                                                                    <input
                                                                        type="text"
                                                                        id="c-description"
                                                                        className="form-control"
                                                                        placeholder="description"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="mb-3 project-file">
                                                                    <input
                                                                        type="file"
                                                                        id="c-file"
                                                                        className="form-control"
                                                                        accept=".pdf, .doc, .docx"
                                                                    />
                                                                    <span className="validation-text text-danger" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button id="btn-add" className="btn btn-success rounded-pill px-4">
                                                Upload
                                            </button>
                                            <button
                                                className="btn btn-danger rounded-pill px-4"
                                                data-bs-dismiss="modal"
                                            >
                                                {" "}
                                                Discard{" "}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-body">
                                <div className="table-responsive">
                                    <table className="table search-table align-middle text-nowrap">
                                        <thead className="header-item">
                                            <tr>
                                                <th>Project Name</th>
                                                <th>Email</th>
                                                <th>Status</th>
                                                <th>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="search-items">
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="ms-3">
                                                            <div className="user-meta-info">
                                                                <h6 className="user-name mb-0" data-name="Olivia Allen">
                                                                    Frontend Project
                                                                </h6>
                                                                <span
                                                                    className="user-work fs-3"
                                                                    data-occupation="Web Designer"
                                                                >
                                                                    React js
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="usr-email-addr" data-email="allen@mail.com">
                                                        allen@mail.com
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="usr-status" data-status="Sydney, Australia">
                                                        Submitted
                                                    </span>
                                                </td>
                                                <td>
                                                    <span
                                                        className="usr-ph-no"
                                                        data-description="+91 (125) 450-1500"
                                                    >
                                                        This is the Frontend project
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="action-btn">
                                                        <a href="/" className="text-info edit">
                                                            <i className="ti ti-eye fs-5" />
                                                        </a>
                                                        <a
                                                            href="/"
                                                            className="text-dark delete ms-2"
                                                        >
                                                            <i className="ti ti-trash fs-5" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* end row */}
                                            {/* start row */}
                                            <tr className="search-items">
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="ms-3">
                                                            <div className="user-meta-info">
                                                                <h6
                                                                    className="user-name mb-0"
                                                                    data-name="Isabella Anderson"
                                                                >
                                                                    {" "}
                                                                    Backend Project{" "}
                                                                </h6>
                                                                <span
                                                                    className="user-work fs-3"
                                                                    data-occupation="UX/UI Designer"
                                                                >
                                                                    Spring boot
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="usr-email-addr" data-email="anderson@mail.com">
                                                        anderson@mail.com
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="usr-location" data-status="Miami, USA">
                                                        Approved
                                                    </span>
                                                </td>
                                                <td>
                                                    <span
                                                        className="usr-ph-no"
                                                        data-description="+91 (100) 154-1254"
                                                    >
                                                        This is the backend project
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="action-btn">
                                                        <a href="/" className="text-info edit">
                                                            <i className="ti ti-eye fs-5" />
                                                        </a>
                                                        <a
                                                            href="/"
                                                            className="text-dark delete ms-2"
                                                        >
                                                            <i className="ti ti-trash fs-5" />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Projects