// import React, { useRef, useState } from 'react';
// import "./login.css"
// import { useNavigate } from 'react-router';
// import actions from "../../redux/actions";
// import { Link } from 'react-router-dom';
// import ToastNotifiy from '../../components/Toast/ToastNotifiy';

// const Login = () => {
//     const toastRef = useRef();
//     const navigate = useNavigate();
//     const userRef = useRef();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await actions.login(email, password);
//             console.log(res);
//             if(res.data.error === false){
//                 localStorage.setItem('webToken', res.data.user.authToken)
//                 localStorage.setItem('role', res.data.user.roleName)
//                 toastRef.current.ToastSuccess("Login Success!");
//                 navigate("/")
//             }else{
//                 toastRef.current.ToastWarning(res.data.message);
//             }
//         } catch (error) {
//             if (error.code === "ERR_NETWORK") {
//                 toastRef.current.ToastError("Server is down");
//                 console.log("Server is down");
//             } else {
//                 toastRef.current.ToastError(error.response.data.message);
//                 console.log("Error rised in login api", error);
//             }
//         }
//     }
//     const handleEmailInput = (e) => setEmail(e.target.value);
//     const handlePasswordInput = (e) => setPassword(e.target.value);
//     return (
//         <>
//             <div
//                 className="page-wrapper"
//                 id="main-wrapper"
//                 data-layout="vertical"
//                 data-sidebartype="full"
//                 data-sidebar-position="fixed"
//                 data-header-position="fixed"
//             >
//                 <div className="position-relative overflow-hidden radial-gradient min-vh-100">
//                     <div className="position-relative z-index-5">
//                         <div className="row">
//                             <div className="col-xl-7 col-xxl-7">
//                                 <Link to="/"
//                                     className="text-nowrap logo-img d-block px-4 py-9 w-100">
//                                     <h3><span style={{color:'#5d87ff'}}>Minima</span></h3>
//                                 </Link>
//                                 <div
//                                     className="d-none d-xl-flex align-items-center justify-content-center"
//                                     style={{ height: "calc(100vh - 80px)" }}
//                                 >
//                                     <img
//                                         src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/login-security.svg"
//                                         alt=""
//                                         className="img-fluid"
//                                         width={500}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="col-xl-5 col-xxl-5">
//                                 <div className="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4">
//                                     <div className="col-sm-8 col-md-6 col-xl-9">
//                                         <h2 className="mb-3 fs-7 fw-bolder">Welcome to Minima</h2>
//                                         <p className=" mb-9">Developer Admin Login</p>

//                                         <form onSubmit={handleSubmit}>
//                                             <div className="mb-3">
//                                                 <label htmlFor="exampleInputEmail1" className="form-label">
//                                                     Email
//                                                 </label>
//                                                 <input
//                                                     type="email"
//                                                     className="form-control"
//                                                     ref={userRef}
//                                                     value={email}
//                                                     onChange={handleEmailInput}
//                                                     placeholder="Your Email"

//                                                     required
//                                                 />
//                                             </div>
//                                             <div className="mb-4">
//                                                 <label htmlFor="exampleInputPassword1" className="form-label">
//                                                     Password
//                                                 </label>
//                                                 <input
//                                                     type="password"
//                                                     className="form-control"
//                                                     ref={userRef}
//                                                     value={password}
//                                                     onChange={handlePasswordInput}
//                                                     placeholder="Your Password"
//                                                 />
//                                             </div>
//                                             <div className="d-flex align-items-center justify-content-between mb-4">
//                                                 <div className="form-check">
//                                                     <input
//                                                         className="form-check-input primary"
//                                                         type="checkbox"
//                                                         defaultValue=""
//                                                         id="flexCheckChecked"
//                                                         defaultChecked=""
//                                                     />
//                                                     <label
//                                                         className="form-check-label text-dark"
//                                                         htmlFor="flexCheckChecked"
//                                                     >
//                                                         Remeber this Device
//                                                     </label>
//                                                 </div>
//                                                 <Link className="text-primary fw-medium"
//                                                     to="/ForgotPassword">
//                                                     Forgot Password ?
//                                                 </Link>
//                                             </div>
//                                             <button type="submit"
//                                                 className="btn btn-primary w-100 py-8 mb-4 rounded-2">
//                                                 Sign In
//                                             </button>
//                                             <div className="d-flex align-items-center justify-content-center">
//                                                 <p className="fs-4 mb-0 fw-medium">New to Minima?</p>
//                                                 <Link className="text-primary fw-medium ms-2" to="/DeveloperRegistration">Create Developer Account</Link>
//                                             </div>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <ToastNotifiy ref={toastRef} />
//         </>
//     )
// }

// export default Login