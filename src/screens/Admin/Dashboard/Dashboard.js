import Navbar from "../../../components/Navbar/Navbar"
import Sidebar from "../../../components/Sidebar/Sidebar"

const Dashboard = () => {
    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-theme="blue_theme" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <Sidebar/>
                <div className="body-wrapper">
                    <Navbar/>
                    <div className="container-fluid">
                        {/*  Owl carousel */}
                        <div className="owl-carousel counter-carousel owl-theme">
                            <div className="item">
                                <div className="card border-0 zoom-in bg-light-primary shadow-none">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-user-male.svg" width={50} height={50} className="mb-3" alt="" />
                                            <p className="fw-semibold fs-3 text-primary mb-1"> Employees </p>
                                            <h5 className="fw-semibold text-primary mb-0">96</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card border-0 zoom-in bg-light-warning shadow-none">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-briefcase.svg" width={50} height={50} className="mb-3" alt="" />
                                            <p className="fw-semibold fs-3 text-warning mb-1">Clients</p>
                                            <h5 className="fw-semibold text-warning mb-0">3,650</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card border-0 zoom-in bg-light-info shadow-none">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-mailbox.svg" width={50} height={50} className="mb-3" alt="" />
                                            <p className="fw-semibold fs-3 text-info mb-1">Projects</p>
                                            <h5 className="fw-semibold text-info mb-0">356</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card border-0 zoom-in bg-light-danger shadow-none">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-favorites.svg" width={50} height={50} className="mb-3" alt="" />
                                            <p className="fw-semibold fs-3 text-danger mb-1">Events</p>
                                            <h5 className="fw-semibold text-danger mb-0">696</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card border-0 zoom-in bg-light-success shadow-none">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-speech-bubble.svg" width={50} height={50} className="mb-3" alt="" />
                                            <p className="fw-semibold fs-3 text-success mb-1">Payroll</p>
                                            <h5 className="fw-semibold text-success mb-0">$96k</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card border-0 zoom-in bg-light-info shadow-none">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <img src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-connect.svg" width={50} height={50} className="mb-3" alt="" />
                                            <p className="fw-semibold fs-3 text-info mb-1">Reports</p>
                                            <h5 className="fw-semibold text-info mb-0">59</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Row 1 */}
                        <div className="row">
                            <div className="col-lg-8 d-flex align-items-strech">
                                <div className="card w-100">
                                    <div className="card-body">
                                        <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                                            <div className="mb-3 mb-sm-0">
                                                <h5 className="card-title fw-semibold">Revenue Updates</h5>
                                                <p className="card-subtitle mb-0">Overview of Profit</p>
                                            </div>
                                            <div>
                                                <select className="form-select">
                                                    <option value={1}>March 2023</option>
                                                    <option value={2}>April 2023</option>
                                                    <option value={3}>May 2023</option>
                                                    <option value={4}>June 2023</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-8 col-md-8">
                                                <div id="chart" />
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="d-flex align-items-center mb-4 pb-1">
                                                    <div className="p-8 bg-light-primary rounded-1 me-3 d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-grid-dots text-primary fs-6" />
                                                    </div>
                                                    <div>
                                                        <h4 className="mb-0 fs-7 fw-semibold">$63,489.50</h4>
                                                        <p className="fs-3 mb-0">Total Earnings</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="d-flex align-items-baseline mb-4">
                                                        <span className="round-8 bg-primary rounded-circle me-6" />
                                                        <div>
                                                            <p className="fs-3 mb-1">Earnings this month</p>
                                                            <h6 className="fs-5 fw-semibold mb-0">$48,820</h6>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-baseline mb-4 pb-1">
                                                        <span className="round-8 bg-secondary rounded-circle me-6" />
                                                        <div>
                                                            <p className="fs-3 mb-1">Expense this month</p>
                                                            <h6 className="fs-5 fw-semibold mb-0">$26,498</h6>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-primary w-100">View Full Report</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6 col-sm-12">
                                        {/* Yearly Breakup */}
                                        <div className="card overflow-hidden">
                                            <div className="card-body">
                                                <div className="row align-items-center">
                                                    <div className="col-8">
                                                        <h5 className="card-title mb-9 fw-semibold">Yearly Breakup</h5>
                                                        <h4 className="fw-semibold mb-3">$36,358</h4>
                                                        <div className="d-flex align-items-center mb-3">
                                                            <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                                                <i className="ti ti-arrow-up-left text-success" />
                                                            </span>
                                                            <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                                                            <p className="fs-3 mb-0">last year</p>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-4">
                                                                <span className="round-8 bg-primary rounded-circle me-2 d-inline-block" />
                                                                <span className="fs-2">2023</span>
                                                            </div>
                                                            <div>
                                                                <span className="round-8 bg-light-primary rounded-circle me-2 d-inline-block" />
                                                                <span className="fs-2">2023</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="d-flex justify-content-center">
                                                            <div id="breakup" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6 col-sm-12">
                                        {/* Monthly Earnings */}
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row alig n-items-start">
                                                    <div className="col-8">
                                                        <h5 className="card-title mb-9 fw-semibold"> Monthly Earnings </h5>
                                                        <h4 className="fw-semibold mb-3">$6,820</h4>
                                                        <div className="d-flex align-items-center pb-1">
                                                            <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                                                                <i className="ti ti-arrow-down-right text-danger" />
                                                            </span>
                                                            <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                                                            <p className="fs-3 mb-0">last year</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="d-flex justify-content-end">
                                                            <div className="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                                                                <i className="ti ti-currency-dollar fs-6" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="earning" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Row 2 */}
                        <div className="row">
                            {/* Employee Salary */}
                            <div className="col-lg-4 d-flex align-items-strech">
                                <div className="card w-100">
                                    <div className="card-body">
                                        <div>
                                            <h5 className="card-title fw-semibold mb-1">Employee Salary</h5>
                                            <p className="card-subtitle mb-0">Every month</p>
                                            <div id="salary" className="mb-7 pb-8" />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="bg-light-primary rounded me-8 p-8 d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-grid-dots text-primary fs-6" />
                                                    </div>
                                                    <div>
                                                        <p className="fs-3 mb-0 fw-normal">Salary</p>
                                                        <h6 className="fw-semibold text-dark fs-4 mb-0">$36,358</h6>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <div className="bg-light rounded me-8 p-8 d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-grid-dots text-muted fs-6" />
                                                    </div>
                                                    <div>
                                                        <p className="fs-3 mb-0 fw-normal">Profit</p>
                                                        <h6 className="fw-semibold text-dark fs-4 mb-0">$5,296</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Project */}
                            <div className="col-lg-4">
                                <div className="row">
                                    {/* Customers */}
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body pb-0 mb-xxl-4 pb-1">
                                                <p className="mb-1 fs-3">Customers</p>
                                                <h4 className="fw-semibold fs-7">36,358</h4>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-arrow-down-right text-danger" />
                                                    </span>
                                                    <p className="text-dark fs-3 mb-0">+9%</p>
                                                </div>
                                            </div>
                                            <div id="customers" />
                                        </div>
                                    </div>
                                    {/* Projects */}
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <p className="mb-1 fs-3">Projects</p>
                                                <h4 className="fw-semibold fs-7">78,298</h4>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-arrow-up-left text-success" />
                                                    </span>
                                                    <p className="text-dark fs-3 mb-0">+9%</p>
                                                </div>
                                                <div id="projects" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Comming Soon */}
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-7 pb-2">
                                            <div className="me-3 pe-1">
                                                <img src="/assets/images/profile/user-1.jpg" className="shadow-warning rounded-2" alt="" width={72} height={72} />
                                            </div>
                                            <div>
                                                <h5 className="fw-semibold fs-5 mb-2"> Super awesome, Vue coming soon! </h5>
                                                <p className="fs-3 mb-0">22 March, 2023</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <ul className="hstack mb-0">
                                                <li className="ms-n8">
                                                    <a href="/" className="me-1">
                                                        <img src="/assets/images/profile/user-2.jpg" className="rounded-circle border border-2 border-white" width={44} height={44} alt="" />
                                                    </a>
                                                </li>
                                                <li className="ms-n8">
                                                    <a href="/" className="me-1">
                                                        <img src="/assets/images/profile/user-3.jpg" className="rounded-circle border border-2 border-white" width={44} height={44} alt="" />
                                                    </a>
                                                </li>
                                                <li className="ms-n8">
                                                    <a href="/" className="me-1">
                                                        <img src="/assets/images/profile/user-4.jpg" className="rounded-circle border border-2 border-white" width={44} height={44} alt="" />
                                                    </a>
                                                </li>
                                                <li className="ms-n8">
                                                    <a href="/" className="me-1">
                                                        <img src="/assets/images/profile/user-5.jpg" className="rounded-circle border border-2 border-white" width={44} height={44} alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <a href="/" className="bg-light rounded py-1 px-8 d-flex align-items-center text-decoration-none">
                                                <i className="ti ti-message-2 fs-6 text-primary" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Selling Products */}
                            <div className="col-lg-4 d-flex align-items-strech">
                                <div className="card bg-primary border-0 w-100">
                                    <div className="card-body pb-0">
                                        <h5 className="fw-semibold mb-1 text-white card-title"> Best Selling Products </h5>
                                        <p className="fs-3 mb-3 text-white">Overview 2023</p>
                                        <div className="text-center mt-3">
                                            <img src="/assets/images/backgrounds/piggy.png" className="img-fluid" alt="" />
                                        </div>
                                    </div>
                                    <div className="card mx-2 mb-2 mt-n2">
                                        <div className="card-body">
                                            <div className="mb-7 pb-1">
                                                <div className="d-flex justify-content-between align-items-center mb-6">
                                                    <div>
                                                        <h6 className="mb-1 fs-4 fw-semibold">MaterialPro</h6>
                                                        <p className="fs-3 mb-0">$23,568</p>
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-light-primary text-primary fw-semibold fs-3">55%</span>
                                                    </div>
                                                </div>
                                                <div className="progress bg-light-primary" style={{ height: '4px' }}>
                                                    <div className="progress-bar w-50" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-6">
                                                    <div>
                                                        <h6 className="mb-1 fs-4 fw-semibold">Flexy Admin</h6>
                                                        <p className="fs-3 mb-0">$23,568</p>
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-light-secondary text-secondary fw-bold fs-3">20%</span>
                                                    </div>
                                                </div>
                                                <div className="progress bg-light-secondary" style={{ height: '4px' }}>
                                                    <div className="progress-bar bg-secondary w-25" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Row 3 */}
                        <div className="row">
                            {/* Weekly Stats */}
                            <div className="col-lg-4 d-flex align-items-strech">
                                <div className="card w-100">
                                    <div className="card-body">
                                        <h5 className="card-title fw-semibold">Weekly Stats</h5>
                                        <p className="card-subtitle mb-0">Average sales</p>
                                        <div id="stats" className="my-4" />
                                        <div className="position-relative">
                                            <div className="d-flex align-items-center justify-content-between mb-7">
                                                <div className="d-flex">
                                                    <div className="p-6 bg-light-primary rounded me-6 d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-grid-dots text-primary fs-6" />
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1 fs-4 fw-semibold">Top Sales</h6>
                                                        <p className="fs-3 mb-0">Johnathan Doe</p>
                                                    </div>
                                                </div>
                                                <div className="bg-light-primary badge">
                                                    <p className="fs-3 text-primary fw-semibold mb-0">+68</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-7">
                                                <div className="d-flex">
                                                    <div className="p-6 bg-light-success rounded me-6 d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-grid-dots text-success fs-6" />
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1 fs-4 fw-semibold">Best Seller</h6>
                                                        <p className="fs-3 mb-0">MaterialPro Admin</p>
                                                    </div>
                                                </div>
                                                <div className="bg-light-success badge">
                                                    <p className="fs-3 text-success fw-semibold mb-0">+68</p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex">
                                                    <div className="p-6 bg-light-danger rounded me-6 d-flex align-items-center justify-content-center">
                                                        <i className="ti ti-grid-dots text-danger fs-6" />
                                                    </div>
                                                    <div>
                                                        <h6 className="mb-1 fs-4 fw-semibold">Most Commented</h6>
                                                        <p className="fs-3 mb-0">Ample Admin</p>
                                                    </div>
                                                </div>
                                                <div className="bg-light-danger badge">
                                                    <p className="fs-3 text-danger fw-semibold mb-0">+68</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Top Performers */}
                            <div className="col-lg-8 d-flex align-items-strech">
                                <div className="card w-100">
                                    <div className="card-body">
                                        <div className="d-sm-flex d-block align-items-center justify-content-between mb-7">
                                            <div className="mb-3 mb-sm-0">
                                                <h5 className="card-title fw-semibold">Top Performers</h5>
                                                <p className="card-subtitle mb-0">Best Employees</p>
                                            </div>
                                            <div>
                                                <select className="form-select">
                                                    <option value={1}>March 2023</option>
                                                    <option value={2}>April 2023</option>
                                                    <option value={3}>May 2023</option>
                                                    <option value={4}>June 2023</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table align-middle text-nowrap mb-0">
                                                <thead>
                                                    <tr className="text-muted fw-semibold">
                                                        <th scope="col" className="ps-0">Assigned</th>
                                                        <th scope="col">Project</th>
                                                        <th scope="col">Priority</th>
                                                        <th scope="col">Budget</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="border-top">
                                                    <tr>
                                                        <td className="ps-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 pe-1">
                                                                    <img src="/assets/images/profile/user-1.jpg" className="rounded-circle" width={40} height={40} alt="" />
                                                                </div>
                                                                <div>
                                                                    <h6 className="fw-semibold mb-1">Sunil Joshi</h6>
                                                                    <p className="fs-2 mb-0 text-muted">Web Designer</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0 fs-3">Elite Admin</p>
                                                        </td>
                                                        <td>
                                                            <span className="badge fw-semibold py-1 w-85 bg-light-primary text-primary">Low</span>
                                                        </td>
                                                        <td>
                                                            <p className="fs-3 text-dark mb-0">$3.9K</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="ps-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 pe-1">
                                                                    <img src="/assets/images/profile/user-2.jpg" className="rounded-circle" width={40} height={40} alt="" />
                                                                </div>
                                                                <div>
                                                                    <h6 className="fw-semibold mb-1">John Deo</h6>
                                                                    <p className="fs-2 mb-0 text-muted"> Web Developer </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0 fs-3">Flexy Admin</p>
                                                        </td>
                                                        <td>
                                                            <span className="badge fw-semibold py-1 w-85 bg-light-warning text-warning">Medium</span>
                                                        </td>
                                                        <td>
                                                            <p className="fs-3 text-dark mb-0">$24.5K</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="ps-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 pe-1">
                                                                    <img src="/assets/images/profile/user-3.jpg" className="rounded-circle" width={40} height={40} alt="" />
                                                                </div>
                                                                <div>
                                                                    <h6 className="fw-semibold mb-1">Nirav Joshi</h6>
                                                                    <p className="fs-2 mb-0 text-muted">Web Manager</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0 fs-3">Material Pro</p>
                                                        </td>
                                                        <td>
                                                            <span className="badge fw-semibold py-1 w-85 bg-light-info text-info">High</span>
                                                        </td>
                                                        <td>
                                                            <p className="fs-3 text-dark mb-0">$12.8K</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="ps-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 pe-1">
                                                                    <img src="/assets/images/profile/user-4.jpg" className="rounded-circle" width={40} height={40} alt="" />
                                                                </div>
                                                                <div>
                                                                    <h6 className="fw-semibold mb-1">Yuvraj Sheth</h6>
                                                                    <p className="fs-2 mb-0 text-muted"> Project Manager </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="mb-0 fs-3">Xtreme Admin</p>
                                                        </td>
                                                        <td>
                                                            <span className="badge fw-semibold py-1 w-85 bg-light-success text-success">Low</span>
                                                        </td>
                                                        <td>
                                                            <p className="fs-3 text-dark mb-0">$4.8K</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border-0 ps-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 pe-1">
                                                                    <img src="/assets/images/profile/user-5.jpg" className="rounded-circle" width={40} height={40} alt="" />
                                                                </div>
                                                                <div>
                                                                    <h6 className="fw-semibold mb-1">Micheal Doe</h6>
                                                                    <p className="fs-2 mb-0 text-muted"> Content Writer </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="border-0">
                                                            <p className="mb-0 fs-3">Helping Hands WP Theme</p>
                                                        </td>
                                                        <td className="border-0">
                                                            <span className="badge fw-semibold py-1 w-85 bg-light-danger text-danger">High</span>
                                                        </td>
                                                        <td className="border-0">
                                                            <p className="fs-3 text-dark mb-0">$9.3K</p>
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
                </div>
            </div>
        </>
    )
}

export default Dashboard