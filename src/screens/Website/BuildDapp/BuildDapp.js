import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import './BuildDapp.style.css'
const BuildDapp = () => {
    const isMobile = window.innerWidth <= 767;
    return (
        <>
            <div>

            </div>
            <Header />
            {isMobile ? (
                // This is mobile view code 
                <section class="section1" id="home">
                    <div className="container mt-5 mb-5">
                        <div className="position-relative" style={{ zIndex: 1 }}>
                            <div className="row align-items-center">
                                <div className="col-lg-6 offset-xl-1">
                                    <div className="mt-lg-0 my-5 mx-5">
                                        <img
                                            src="assets/images/build-dapp-image.svg"
                                            alt="home04"
                                            width={243}
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div>
                                        <h1 className="text-light text-center" style={{ fontSize: '32px' }}>
                                            Learn to build a MiniDapp
                                        </h1>
                                        <p className="text-light fs-17 text-center">
                                            The front-end for MiniDapps can be written using the widely known JavaScript, HTML and CSS. Minima’s
                                            KISS scripting language is Turing-Complete, allowing for powerful smart contract driven applications.
                                        </p>
                                        <button className="btn btn-light" style={{ width: '100%' }}>
                                            Build on Minima
                                        </button>
                                        <button className="btn bg-dark text-light mt-2" style={{ width: '100%', border: '1px solid white', borderColor: 'white' }}>
                                            Community projects
                                        </button>
                                    </div>
                                </div>

                            </div>
                            {/*end row*/}
                        </div>
                    </div>
                    {/*end container*/}
                </section>
            ) : (
                // This is desktop view code 
                <section class="section1" id="home">
                    <div className="container mt-5">
                        <div className="position-relative" style={{ zIndex: 1 }}>
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div>
                                        <h1 className="text-light " style={{ fontSize: '56px' }}>
                                            Learn to build a MiniDapp
                                        </h1>
                                        <p className="text-light fs-17">
                                            The front-end for MiniDapps can be written using the widely known JavaScript, HTML and CSS. Minima’s
                                            KISS scripting language is Turing-Complete, allowing for powerful smart contract driven applications.
                                        </p>
                                        <button className="btn btn-light">
                                            Read the docs
                                        </button>
                                    </div>
                                </div>
                                {/*end col*/}
                                <div className="col-lg-6 offset-xl-1">
                                    <div className="mt-lg-0 mt-5">
                                        <img
                                            src="assets/images/build-dapp-image.svg"
                                            alt="home04"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*end row*/}
                        </div>
                    </div>
                    {/*end container*/}
                </section>
            )}


            <section className="section" id="features">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="mb-5">
                                <h3 className="text-white heading-builddapp">Developer tutorials</h3>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="row">
                        <div className="col-lg-6 col-md-5">
                            <div className="row">
                                <div className="col-sm-12 d-flex-custom heading-builddapp">
                                    <img src="assets/images/getting-started-image.svg" alt="getting-started"/>
                                    <div>
                                        <h4 className="align-middle px-1 heading-builddapp-text">Getting started</h4>
                                        <h5 className="align-middle text-dark px-1 heading-builddapp-date">July 2023</h5>
                                        <p className="px-1">Lorem ipsum dolor sit amet consectetur. Euismod porttitor aliquam massa pretium sapien fermentum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="row">
                                <div className="col-sm-12 d-flex-custom heading-builddapp">
                                    <img src="assets/images/getting-started-image.svg" alt="getting-started"/>
                                    <div>
                                        <h4 className="align-middle px-1 heading-builddapp-text">Building a MIniDapp</h4>
                                        <h5 className="align-middle text-dark px-1 heading-builddapp-date">July 2023</h5>
                                        <p className="px-1">Lorem ipsum dolor sit amet consectetur. Euismod porttitor aliquam massa pretium sapien fermentum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-5">
                            <div className="row">
                                <div className="col-sm-12 d-flex-custom heading-builddapp">
                                    <img src="assets/images/getting-started-image.svg" alt="getting-started"/>
                                    <div>
                                        <h4 className="align-middle px-1 heading-builddapp-text">Deploying a MiniDapp</h4>
                                        <h5 className="align-middle text-dark px-1 heading-builddapp-date">July 2023</h5>
                                        <p className="px-1">Lorem ipsum dolor sit amet consectetur. Euismod porttitor aliquam massa pretium sapien fermentum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="row">
                                <div className="col-sm-12 d-flex-custom heading-builddapp">
                                    <img src="assets/images/getting-started-image.svg" alt="getting-started"/>
                                    <div>
                                        <h4 className="align-middle px-1 heading-builddapp-text">Smart Contracts</h4>
                                        <h5 className="align-middle text-dark px-1 heading-builddapp-date">July 2023</h5>
                                        <p className="px-1">Lorem ipsum dolor sit amet consectetur. Euismod porttitor aliquam massa pretium sapien fermentum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center mb-3 mt-3">
                                <h3 className="text-white">Smart contract examples</h3>
                            </div>
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button
                                            className="accordion-button collapsed bg-dark text-white"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOne"
                                        >
                                            Timelock contract
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseOne"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body bg-dark text-white pt-1">
                                            <hr />
                                            <p>This ensures that coins can only be spent when the transaction is signed by
                                                the owner and the current block is greater than a defined block height.</p>
                                            <div className="accordion-cmd-section">
                                                <div className="cmd-text p-2">RETURN SIGNEDBY(0xFF) AND @BLOCK GT 100</div>
                                                <h6 className="cmd-button p-2 mb-0">Copy<img src="assets/images/icons/copy-icon.svg" alt="copy-icon" /></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button
                                            className="accordion-button collapsed bg-dark text-white"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                        >
                                            SlowCash
                                        </button>
                                    </h2>

                                    <div
                                        id="flush-collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#accordionFlushExample"
                                    >

                                        <div className="accordion-body bg-dark text-white pt-1">
                                            <hr />
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                            beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button
                                            className="accordion-button collapsed bg-dark text-white"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseThree"
                                        >
                                            Multi-sig contract
                                        </button>
                                    </h2>
                                    <div
                                        id="flush-collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body bg-dark text-white pt-1">
                                            <hr />
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                            beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3">
                                    <h2 className="accordion-header" id="flush-CustomTokensExchangeContract">
                                        <button
                                            className="accordion-button collapsed bg-dark text-white"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#CustomTokensExchangeContract"
                                            aria-expanded="false"
                                            aria-controls="CustomTokensExchangeContract"
                                        >
                                            Custom Tokens Exchange Contract
                                        </button>
                                    </h2>
                                    <div
                                        id="CustomTokensExchangeContract"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-CustomTokensExchangeContract"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body bg-dark text-white pt-1">
                                            <hr />
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                            beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3">
                                    <h2 className="accordion-header" id="flush-FlashLoans">
                                        <button
                                            className="accordion-button collapsed bg-dark text-white"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#FlashLoans"
                                            aria-expanded="false"
                                            aria-controls="FlashLoans"
                                        >
                                            Flash Loans
                                        </button>
                                    </h2>
                                    <div
                                        id="FlashLoans"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-FlashLoans"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body bg-dark text-white pt-1">
                                            <hr />
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                            beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3">
                                    <h2 className="accordion-header" id="flush-MASTContract">
                                        <button
                                            className="accordion-button collapsed bg-dark text-white"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#MASTContract"
                                            aria-expanded="false"
                                            aria-controls="MASTContract"
                                        >
                                            MAST Contract
                                        </button>
                                    </h2>
                                    <div
                                        id="MASTContract"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-MASTContract"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body bg-dark text-white pt-1">
                                            <hr />
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                            beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3">
                                    <h2 className="accordion-header" id="flush-VestingContract">
                                        <button
                                            className="accordion-button collapsed bg-dark text-white"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#VestingContract"
                                            aria-expanded="false"
                                            aria-controls="VestingContract"
                                        >
                                            Vesting Contract
                                        </button>
                                    </h2>
                                    <div
                                        id="VestingContract"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="flush-VestingContract"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body bg-dark text-white pt-1">
                                            <hr />
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                            helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                            beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                </div>
                {/*end container*/}
            </section>
            <Footer />
        </>
    )
}
export default BuildDapp