import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import './home.style.css'
const Home = () => {
    return (
        <>
            <Header />
            <section className="overflow-hidden" id="home">
                <div className="container">
                    <div className="position-relative" style={{ zIndex: 1 }}>
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-xl-5-home col-lg-6-home">
                                <div>
                                    <h1 className="text-light home-heading text-center">
                                        Build on Minima
                                    </h1>
                                    <p className="text-light fs-17 text-center home-heading-dis1">
                                        Secure, decentralized infrastructure with no single point of
                                        failure, making Minima the perfect platform to build a truly
                                        decentralized application.
                                    </p>
                                    <div className="row text-center">
                                        <div className="col-sm-6">
                                            <button className="btn btn-light home-heading-btn1">
                                                Build a MiniDapp
                                            </button>
                                        </div>
                                        <div className="col-sm-6 btn-mt-1">
                                            <button className="btn btn-dark home-heading-btn1">
                                                Community projects
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ paddingTop: "180px" }}>
                                    <h1 className="text-light  home-heading2">Why build on Minima?</h1>
                                    <p className="text-light fs-16 home-heading-dis2">
                                        Lorem ipsum dolor sit amet consectetur. Adipiscing aliquet sit
                                        mauris congue etiam mauris orci enim nibh. Imperdiet feugiat diam
                                        magna ut ut id erat praesent. Pellentesque amet phasellus tellus
                                        quam.Lorem ipsum dolor sit amet consectetur.{" "}
                                    </p>
                                    <div className="row text-center">
                                        <div className="col-sm-6 btn-mt-1">
                                            <button className="btn btn-dark home-heading-btn1">
                                            Grants
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6 col-lg-6-home offset-xl-1">
                                <div className="mt-lg-0 mt-5">
                                    <img
                                        src="assets/images/home-template-image.svg"
                                        alt="home04"
                                        className="home-img"
                                    />
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </div>
                {/*end container*/}
            </section>

            <section
                className="section1"
                id="faq"
                style={{ background: "linear-gradient(to bottom, #17191C 0%, #080A0C 100%)" }}
            >
                <div className="container app-icon-section">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center mb-5 pb-2">
                                <h2 className="text-light">Run a node</h2>
                                <p className="text-muted mt-2">
                                    Become a part of the Minima Network. All it takes is a simple app
                                    download. Choose your platform to get started.
                                </p>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    <div className="row run-code-row">
                        <div className="col-lg-1" />
                        <div className="col-lg-2 run-code-col-lg-2 text-center">
                            <img src="assets/images/icons/windows-md.svg" alt="" />
                            <span className="fs-17 text-light">Windows</span>
                        </div>
                        <div className="col-lg-2 run-code-col-lg-2 text-center">
                            <img src="assets/images/icons/android-md.svg" alt="" />
                            <span className="fs-17">Android</span>
                        </div>
                        <div className="col-lg-2 run-code-col-lg-2 text-center">
                            <img src="assets/images/icons/mac-desktop-md.svg" alt="" />
                            <span className="fs-17">Mac (Desktop)</span>
                        </div>
                        <div className="col-lg-2 run-code-col-lg-2 text-center">
                            <img src="assets/images/icons/linux-desktop-md.svg" alt="" />
                            <span className="fs-17">Linux (Desktop)</span>
                        </div>
                        <div className="col-lg-2 run-code-col-lg-2 text-center">
                            <img src="assets/images/icons/linux-vps-md.svg" alt="" />
                            <span className="fs-17">Linux (VPS)</span>
                        </div>
                        <div className="col-lg-1" />
                    </div>
                    {/*end container*/}
                </div>
            </section>

            <Footer />
        </>
    )
}
export default Home