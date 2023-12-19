// import React, { useRef, useState } from 'react';
// import "./login.css"
// import { useNavigate } from 'react-router';
// import actions from "../../redux/actions";
// // import ToastNotifiy from "../../components/Toast/ToastNotifiy"
// import { toast } from "react-toastify";

// const Login1 = () => {
//     // const toastRef = useRef();
//     const navigate = useNavigate();
//     const userRef = useRef();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await actions.login(email, password);
//             localStorage.setItem('webToken', res.data.authToken)
//             localStorage.setItem('role', res.data.roleName)
//             toast("Login Success!");
//             console.log("Login Success!");
//             navigate('/mastercom/documentation/api-reference2')
//         } catch (error) {
//             if (error.code === "ERR_NETWORK") {
//                 toast("Server is down");
//                 console.log("Server is down");
//             } else {
//                 toast(error.response.data.message);
//                 console.log("Error rised in login api", error);
//             }
//         }
//     }
//     const handleEmailInput = (e) => setEmail(e.target.value);
//     const handlePasswordInput = (e) => setPassword(e.target.value);
//     return (
//         <>
//             <div class="container">
//                 <div class="row justify-content-center mt-5">
//                     <div class="col-lg-4 col-md-6 col-sm-6">
//                         <div class="card shadow">
//                             <div class="card-title text-center border-bottom">
//                                 <h2 class="p-3">Login</h2>
//                             </div>
//                             <div class="card-body">
//                                 <form onSubmit={handleSubmit}>
//                                     <div class="mb-4">
//                                         <label class="form-label">Username/Email</label>
//                                         <input type="text" class="form-control"
//                                             ref={userRef}
//                                             value={email}
//                                             onChange={handleEmailInput}
//                                             placeholder="Your Email"
//                                             required />
//                                     </div>
//                                     <div class="mb-4">
//                                         <label for="password" class="form-label">Password</label>
//                                         <input type="password" class="form-control"
//                                             ref={userRef}
//                                             value={password}
//                                             onChange={handlePasswordInput}
//                                             placeholder="Your Password"
//                                             required />
//                                     </div>
//                                     <div class="mb-4">
//                                         <input type="checkbox" class="form-check-input" id="remember" />
//                                         <label for="remember" class="form-label">Remember Me</label>
//                                     </div>
//                                     <div class="d-grid">
//                                         <button type="submit" class="btn btn-primary">Login</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <ToastNotifiy ref={toastRef} /> */}
//             </div>
            
//         </>
//     )
// }

// export default Login1