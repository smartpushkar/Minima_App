import React from "react";
const Footer = () => {
  return (
    <>
      <>
        {/* START FOOTER */}
        <footer className="bg-dark">
          <div className="container">
            <div className="row py-3">
              <div className="col-lg-6 text-center">
                <h5 className="text-light">Join the conversation</h5>
              </div>
              <div className="col-lg-6 text-center">
                {" "}
                {/* Add the 'text-center' class here */}
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="/" className="social-icon">
                      <img alt="social-icon" src="assets/images/icons/Discord.svg" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="social-icon">
                      <img alt="social-icon" src="assets/images/icons/Twitter.svg" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="/" className="social-icon">
                      <img alt="social-icon" src="assets/images/icons/GitHub.svg" />
                    </a>
                  </li>
                  <li className="list-inline-item mx-2">
                    <a href="/" className="social-icon">
                      <img alt="social-icon" src="assets/images/icons/Telegram.svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* END FOOTER */}
        {/*start back-to-top*/}
        <button onclick="topFunction()" id="back-to-top">
          <i className="mdi mdi-arrow-up" />
        </button>
        {/*end back-to-top*/}
      </>

    </>

  )
}
export default Footer