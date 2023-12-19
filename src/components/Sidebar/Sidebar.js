import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineShop } from "react-icons/ai";

const Sidebar = () => {
    const location = useLocation();
    function isActive(pathname) {
        return location.pathname === pathname;
    }
    return (
        <>
            <aside className="left-sidebar">
                {/* Sidebar scroll*/}
                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <Link to="/Admin" className="text-nowrap logo-img">
                            <h4><span style={{color:'#5d87ff'}}>Minima</span> Admin</h4>
                        </Link>
                        <div className="close-btn d-lg-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i className="ti ti-x fs-8 text-muted" />
                        </div>
                    </div>
                    {/* Sidebar navigation*/}
                    <nav className="sidebar-nav scroll-sidebar" data-simplebar>
                        <ul id="sidebarnav">
                            {/* =================== */}
                            {/* Dashboard */}
                            {/* =================== */}
                            <li className="sidebar-item">
                                <Link className={isActive('/Admin/Projects') ? 'sidebar-link active' : 'sidebar-link'} to="/Admin/Projects" aria-expanded="false">
                                    <span>
                                        <AiOutlineShop size={20}/>
                                    </span>
                                    <span className="hide-menu">Projects</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link className={isActive('/Admin/Account') ? 'sidebar-link active' : 'sidebar-link'} to="/Admin/Account"  aria-expanded="false">
                                    <span>
                                    <AiOutlineShop size={20}/>
                                    </span>
                                    <span className="hide-menu">Account</span>
                                </Link>
                            </li>
                            
                        </ul>
                        
                    </nav>
                    <div className="fixed-profile p-3 bg-light-secondary rounded sidebar-ad mt-3">
                        <div className="hstack gap-3">
                            <div className="john-img">
                                <img src="../../dist/images/profile/user-1.jpg" className="rounded-circle" width={40} height={40} alt="" />
                            </div>
                            <div className="john-title">
                                <h6 className="mb-0 fs-4 fw-semibold">Mathew</h6>
                                <span className="fs-2 text-dark">Designer</span>
                            </div>
                            <button className="border-0 bg-transparent text-primary ms-auto" tabIndex={0} type="button" aria-label="logout" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="logout">
                                <i className="ti ti-power fs-6" />
                            </button>
                        </div>
                    </div>
                    {/* End Sidebar navigation */}
                </div>
                {/* End Sidebar scroll*/}
            </aside>
        </>
    )
}

export default Sidebar;