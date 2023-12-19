import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router';
import actions from "../../redux/actions";
import ToastNotifiy from '../../components/Toast/ToastNotifiy';
import Header from '../Website/Header';
import Footer from '../Website/Footer';

const Login = () => {
    const toastRef = useRef();
    // const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(() => {
        document.title = 'Minima - Login';
    }, []);
    const handleEmailInput = (e) => {
        setEmail(e.target.value);
        setEmailError(validateEmail(email));
    }
    const handlePasswordInput = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (isFormValid) {

            const fData = new FormData();
            fData.append("email", email);
            fData.append("password", password);
            try {
                const res = await actions.loginAction(fData)
                console.log(res.data);
                toastRef.current.ToastSuccess("Login successful");
                // navigate("/Home")
            } catch (error) {
                console.log(error);
                if(error.response.data.message === "Bad credentials"){
                    toastRef.current.ToastError("Email or password incorrect!");
                }else{
                    toastRef.current.ToastError("Something went wrong");
                }
                
            }
        } else {
            toastRef.current.ToastWarning("Please Fill All Required Fields.", "error");
        }
    }
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email) ? "" : "Invalid email address";
    };
    const validateForm = () => {
        const isEmailValid = !!email;
        const isPasswordValid = !!password;

        setEmailError(isEmailValid ? "" : "Please enter email address");
        setPasswordError(isPasswordValid ? "" : "please enter password");

        return (
            isEmailValid &&
            isPasswordValid
        );
    };
    return (
        <>
            <Header />
            <section className="section" id="features" style={{ paddingBottom: 150 }}>
                <div className="container">
                    <div className="row justify-content-center" style={{ paddingBottom: 40 }}>
                        <div className="col-lg-6">
                            <div className="text-center mb-3 mt-5">
                                <h3 className="text-white">Login Developer Account</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="pt-3 text-light">
                                Login your developer account today to access developer documentation,
                                project upvoting, grant applications and soon, apply to work on Minima
                                Projects.
                            </p>
                            <form onSubmit={handleSubmit}>

                                <div className="form-group pt-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={handleEmailInput} />
                                    <div className="text-end  text-danger">{emailError}</div>

                                </div>
                                <div className="form-group pt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Password*"
                                        value={password}
                                        onChange={handlePasswordInput} />
                                    <div className="text-end  text-danger">{passwordError}</div>

                                </div>

                                <div className="form-group pt-3">
                                    <button
                                        className="btn text-light"
                                        style={{ backgroundColor: "#91919D" }}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/*end container*/}
            </section>
            <ToastNotifiy ref={toastRef} />
            <Footer />
        </>
    )
}

export default Login