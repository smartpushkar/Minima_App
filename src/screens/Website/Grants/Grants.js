import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import './grants.style.css'
const Grants = () => {
    const isMobile = window.innerWidth <= 767;
    return (
        <>
            <div>

            </div>
            <Header />
            <section className="section grants-bg-style" id="features">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-5">
                                <h3 className="text-white text-grants-heading">Building the future</h3>
                                <p className="mt-4 fs-5 text-center text-light">Unlock 1 Million Minima coins in our category-based Grants Program</p>
                                <div className="row header-row">
                                    <div className="header-btn1">
                                        <button className="btn btn-light ">Submit proposal</button>
                                    </div>
                                    <div className="header-btn2">
                                        <button className="btn text-light" style={{ border: '2px solid white' }}>Build a MiniDapp</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="row">

                    </div>
                </div>
            </section>

            {isMobile ? (
                // This is mobile view code 
                <section className="section" id="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 text-center">
                                <img src="assets/images/circle-grants.svg" width={240} alt="circle-grants"/>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-5 text-center">
                                <h2 className="text-light">The Minima Grants Program</h2>
                                <p className="text-light">
                                    Welcome to the Minima Grants Program, an initiative designed to foster innovation and drive the development of groundbreaking projects on the Minima Blockchain.
                                </p>
                                <p className="text-light">
                                    We are excited to invite talented teams and individuals to submit their proposals and join us in shaping the future of blockchain technology.
                                </p>
                                <p className="text-light">
                                    With a focus on six key categories, we aim to support projects in the fields of DeFi, Stable Coins, Automotive, Logistics, Telecommunications, and Gaming.
                                </p>
                            </div>


                        </div>
                    </div>
                    {/*end container*/}
                </section>
            ) : (
                // This is desktop view code 
                <section className="section" id="features">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mt-5">
                                <h1 className="text-light">The Minima Grants Program</h1>
                                <p className="text-light">
                                    Welcome to the Minima Grants Program, an initiative designed to foster innovation and drive the development of groundbreaking projects on the Minima Blockchain.
                                    We are excited to invite talented teams and individuals to submit their proposals and join us in shaping the future of blockchain technology.
                                    With a focus on six key categories, we aim to support projects in the fields of DeFi, Stable Coins, Automotive, Logistics, Telecommunications, and Gaming.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <img src="assets/images/circle-grants.svg" alt="circle-grants"/>
                            </div>

                        </div>
                    </div>
                    {/*end container*/}
                </section>
            )}

            <section className="section" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center mb-3 mt-2">
                                <h3 className="text-white">1 Million coins</h3>
                                <p className="coin-section-des text-light">
                                    Each category offers an exciting reward of 1 Million Minima coins to successful grant applicants. This generous funding aims to support your project's development and accelerate its growth within the Minima ecosystem.
                                </p>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 text-center pt-2">
                                    <button className="btn btn-light" style={{ width: '180px' }}>Submit proposal</button>
                                </div>
                                <div className="col-lg-3 text-center pt-2">
                                    <button className="btn btn-dark" style={{ width: '180px' }}>Build</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="section" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center mb-3 mt-2">
                                <h3 className="text-white">The categories</h3>
                                <p className="coin-section-des text-light">
                                    Choose from six exciting categories with high growth and innovation potential:
                                </p>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4">
                                    <div className="card p-3" style={{ width: '100%', backgroundColor: '#17191C' }}>
                                        <div className="d-flex justify-content-center align-items-center pt-4">
                                            <img src="assets/images/stablecoins-img.svg" className="" style={{ width: '230px' }} alt="stablecoins" />
                                        </div>
                                        <span className="text-light">01</span>
                                        <h4 className="text-light">Stablecoins</h4>
                                        <p className="text-light" style={{ height: '145px' }}>Develop stable coin solutions that ensure stability, security, and accessibility for users, fostering trust in digital currencies.</p>
                                        <button className="btn btn-light mb-5">Submit Proposal</button>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card p-3" style={{ width: '100%', backgroundColor: '#17191C' }}>
                                        <div className="d-flex justify-content-center align-items-center pt-4">
                                            <img src="assets/images/automotive-img.svg" className="" style={{ width: '230px' }} alt="automotive" />
                                        </div>
                                        <span className="text-light">02</span>
                                        <h4 className="text-light">Automotive</h4>
                                        <p className="text-light" style={{ height: '145px' }}>Construct novel applications that enhance the future of transportation, ranging from ride-sharing platforms to autonomous vehicle management systems.</p>
                                        <button className="btn btn-dark mb-5">Submit Proposal</button>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card p-3" style={{ width: '100%', backgroundColor: '#17191C' }}>
                                        <div className="d-flex justify-content-center align-items-center pt-4">
                                            <img src="assets/images/defi-img.svg" className="" style={{ width: '230px' }} alt="defi" />
                                        </div>
                                        <span className="text-light">03</span>
                                        <h4 className="text-light">Defi</h4>
                                        <p className="text-light" style={{ height: '145px' }}>Explore the possibilities of decentralized finance on the Minima Blockchain. Build innovative solutions that redefine the way we lend, borrow, and trade.</p>
                                        <button className="btn btn-dark mb-5">Submit Proposal</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center pt-4">
                                <div className="col-lg-4">
                                    <div className="card p-3" style={{ width: '100%', backgroundColor: '#17191C' }}>
                                        <div className="d-flex justify-content-center align-items-center pt-4">
                                            <img src="assets/images/telecommunications-img.svg" className="" style={{ width: '230px' }} alt="telecommunications" />
                                        </div>
                                        <span className="text-light">04</span>
                                        <h4 className="text-light">Telecommunications</h4>
                                        <p className="text-light" style={{ height: '145px' }}>Harness the power of the Minima Blockchain to innovate in the realm of telecommunications, enabling secure communication, data sharing, and decentralized networks.</p>
                                        <button className="btn btn-dark mb-5">Submit Proposal</button>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card p-3" style={{ width: '100%', backgroundColor: '#17191C' }}>
                                        <div className="d-flex justify-content-center align-items-center pt-4">
                                            <img src="assets/images/gaming-img.svg" className="" style={{ width: '230px' }} alt="gaming" />
                                        </div>
                                        <span className="text-light">05</span>
                                        <h4 className="text-light">Gaming</h4>
                                        <p className="text-light" style={{ height: '145px' }}>Merge the worlds of blockchain and gaming to create immersive experiences, in-game economies, and novel gameplay mechanics.</p>
                                        <button className="btn btn-dark mb-5">Submit Proposal</button>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card p-3" style={{ width: '100%', backgroundColor: '#17191C' }}>
                                        <div className="d-flex justify-content-center align-items-center pt-4">
                                            <img src="assets/images/logistics-img.svg" className="" style={{ width: '230px' }} alt="logistics" />
                                        </div>
                                        <span className="text-light">06</span>
                                        <h4 className="text-light">Logistics</h4>
                                        <p className="text-light" style={{ height: '145px' }}>Revolutionize supply chains and logistics management by leveraging the transparency, immutability, and efficiency of the Minima Blockchain.</p>
                                        <button className="btn btn-dark mb-5">Submit Proposal</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="section" id="features" style={{ width: '100%', backgroundColor: '#17191C' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 mx-5  mb-3 mt-2">
                            <div className="text-center">
                                <h2 className="text-white">Application process</h2>
                                <p className="mt-4 text-light-200">
                                    To apply for a grant, teams are required to submit a comprehensive proposal for evaluation by the Minima team.
                                    The proposal should outline your project's objectives, technical implementation plan, and potential impact within the selected category.
                                </p>
                                <p className="mx-5 text-light-200">
                                    Upon approval, successful applicants will receive a comprehensive set of tools, documentation, and resources to help navigate the Minima Blockchain effectively.
                                </p>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12 mt-5">
                                    <div className="left-line">
                                        <h5 className="text-white">Mentorship and guidance</h5>
                                    </div>
                                    <p className="mt-3 text-light-200">
                                        Throughout the program, you'll have access to a diverse range of industry experts and mentors who will offer guidance and support to refine your ideas and help you overcome technical challenges.
                                    </p>

                                    <div className="left-line">
                                        <h5 className="text-white">Timeline</h5>
                                    </div>
                                    <p className="mt-3 text-light-200">
                                    The Minima Grants Program does not impose a strict timeline, allowing you to work at your own pace and allocate the necessary time to create innovative solutions. We understand that groundbreaking projects require dedication and creativity, and we encourage you to focus on delivering exceptional results.
                                    </p>

                                    <div className="left-line">
                                        <h5 className="text-white">Judging criteria</h5>
                                    </div>
                                    <p className="mt-3 text-light-200">
                                    Projects will be evaluated based on criteria such as technical complexity, innovation, potential impact, user experience, and adherence to the subject vertical. The Minima team will conduct a fair and unbiased assessment of each submission.
                                    </p>

                                    <div className="left-line">
                                        <h5 className="text-white">Networking opportunities </h5>
                                    </div>
                                    <p className="mt-3 text-light-200">
                                    Connect with fellow developers, blockchain enthusiasts, and industry professionals from around the world. Forge lasting relationships, collaborate on future projects, and expand your professional network.
                                    </p>
                                </div>
                                <div className="col-lg-12 mt-4 text-center">
                                    <btton className="btn btn-light">Submit Proposal</btton>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
export default Grants