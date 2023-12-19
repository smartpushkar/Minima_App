import React, { useEffect, useRef, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { useNavigate } from "react-router";
import ToastNotifiy from '../../../components/Toast/ToastNotifiy';
import actions from "../../../redux/actions";

const DeveloperRegistration = () => {
  const toastRef = useRef();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  useEffect(() => {
    document.title = 'Minima - Developer Registration';
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(email));
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleIsEqualPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return false;
    } else {
      setConfirmPasswordError("");
      return true;
    }
  }
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email) ? "" : "Invalid email address";
  };
  const validateForm = () => {
    const isUsernameValid = !!username;
    const isEmailValid = !!email;
    const isPasswordValid = !!password;
    const isConfirmPasswordValid = !!confirmPassword;

    setUsernameError(isUsernameValid ? "" : "Please enter username");
    setEmailError(isEmailValid ? "" : "Please enter email address");
    setPasswordError(isPasswordValid ? "" : "please enter password");
    setConfirmPasswordError(isConfirmPasswordValid ? "" : "please enter confirm password");

    return (
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    );
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();
    const isEqualPasswordValid = handleIsEqualPassword()
    if (isFormValid && isEqualPasswordValid) {

      const fData = new FormData();
      fData.append("email", email);
      fData.append("username", username);
      fData.append("password", password);
      try {
        const res = await actions.developerRegistrationAction(fData)
        console.log(res.data);
        toastRef.current.ToastSuccess("Registration successful");
        navigate("/Login")
      } catch (error) {
        if(error.response.data.error === true){
          toastRef.current.ToastError(error.response.data.message);
      }else{
          toastRef.current.ToastError("Something went wrong");
      }
      }
    } else {
      toastRef.current.ToastWarning("Please Fill All Required Fields.", "error");
    }
  }
  return (
    <>
      <Header />
      <section className="section" id="features" style={{ paddingBottom: 150 }}>
        <div className="container">
          <div className="row justify-content-center" style={{ paddingBottom: 40 }}>
            <div className="col-lg-6">
              <div className="text-center mb-3 mt-5">
                <h3 className="text-white">Create a Developer Account</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <p className="pt-3 text-light">
                Create your developer account today to access developer documentation,
                project upvoting, grant applications and soon, apply to work on Minima
                Projects.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username*"
                    value={username}
                    onChange={handleUsernameChange} />
                  <div className="text-end  text-danger">{usernameError}</div>
                </div>
                <div className="form-group pt-3">
                  <input type="email"
                    className="form-control"
                    placeholder="Email*"
                    value={email}
                    onChange={handleEmailChange} />
                  <div className="text-end  text-danger">{emailError}</div>
                </div>
                <div className="form-group pt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password*"
                    value={password}
                    onChange={handlePasswordChange} />
                  <div className="text-end  text-danger">{passwordError}</div>
                </div>
                <div className="form-group pt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm Password*"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange} />
                  <div className="text-end  text-danger">{confirmPasswordError}</div>
                </div>
                <div className="form-group pt-3">
                  <button
                    className="btn text-light"
                    style={{ backgroundColor: "#91919D" }}
                  >
                    Create your account
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
export default DeveloperRegistration