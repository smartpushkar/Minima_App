import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Navbar from '../../../components/Navbar/Navbar';
import LocalStorageUtils from '../../../utilities/LocalStorageUtils';
import actions from "../../../redux/actions";

const ViewMerchant = () => {
    const location = useLocation();
    const [merchantDetails, setMerchantDetails] = useState({})

    useEffect(() => {
        const merchantId = location.state && location.state.merchantId;
        if (LocalStorageUtils.getItem('isViewMerchant') === null) {
            window.location.href = '/Merchant/Active';
            return false
        }
        if (LocalStorageUtils.getItem('isViewMerchant') === 'false') {
            window.location.href = LocalStorageUtils.getItem('viewMerchantRedirecte');
            return false
        } else {
            LocalStorageUtils.setItem('isViewMerchant', 'false');
        }
        if (merchantId === null) {
            window.location.href = LocalStorageUtils.getItem('viewMerchantRedirecte');
            return false
        }else{
            const getMerchantDetials = async() => {
                try {
                    const res = await actions.getMerchantByMerchantIdAction(merchantId);
                    console.log(res);
                    setMerchantDetails(res.data);
                } catch (error) {
                    console.log(error);
                }
            }
            getMerchantDetials()

        }
    }, [location]);
    return (
        <>
            <div className="page-wrapper" id="main-wrapper" data-theme="blue_theme" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                <Sidebar />
                <div className="body-wrapper">
                    <Navbar />
                    <div className="container-fluid">
                        <div className="card bg-light-info shadow-none position-relative overflow-hidden">
                            <div className="card-body px-2 py-3">
                                <div className="row align-items-center">
                                    <div className="col-9">
                                        <h4 className="fw-semibold mb-8">Merchant Details</h4>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a className="text-muted " href="index-2.html">
                                                        Dashboard
                                                    </a>
                                                </li>
                                                <li className="breadcrumb-item" aria-current="page">
                                                    Merchant Details
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div className="col-3">
                                        <div className="text-center mb-n5">
                                            {/* <img
                                                src="../../dist/images/breadcrumb/ChatBc.png"
                                                alt=""
                                                className="img-fluid mb-n4"
                                            /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card w-100 position-relative overflow-hidden">
                            <div class="card-body p-2">
                                <div className="table-responsive rounded-2 mb-4">
                                    <table className="table text-nowrap customize-table mb-0 align-middle">
                                        <tbody className="text-dark fs-4">
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Merchant ID: <span className='fw-semibold'>{merchantDetails.merchantId}</span></h6>
                                                </td>
                                                <td>
                                                    <h6 className="mb-0">Terminal ID: <span className='fw-semibold'>{merchantDetails.terminalId}</span></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">DBA Name(Merchant Descriptor): <span className='fw-semibold'>{merchantDetails.dbaname}</span></h6>
                                                </td>
                                                <td>
                                                    <h6 className="mb-0">Acquiring Bank Name: <span className='fw-semibold'>{merchantDetails.acquiringBankName}</span></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Acquring Institution Id : <span className='fw-semibold'>{merchantDetails.acquiringInstitutionId}</span></h6>
                                                </td>
                                                <td>
                                                    <h6 className="mb-0">Services Opted : <span className='fw-semibold'>{merchantDetails.servicesOpted}</span></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Your Bank : <span className='fw-semibold'>{merchantDetails.yourBank}</span></h6>
                                                </td>
                                                <td>
                                                    <h6 className="mb-0">Your Shipping Service Provider : <span className='fw-semibold'>{merchantDetails.yourShippingServiceProvider}</span></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Dispute Reson : <span className='fw-semibold'>{merchantDetails.disputeReason}</span></h6>
                                                </td>
                                                <td>
                                                    <h6 className="mb-0">MCC (Merchant Category Code) : <span className='fw-semibold'>{merchantDetails.mcc}</span></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Nature of Business : <span className='fw-semibold'>{merchantDetails.natureOfBusiness}</span></h6>
                                                </td>
                                                <td>
                                                    <h6 className="mb-0">Customer Service Phone : <span className='fw-semibold'>{merchantDetails.customerServicePhone}</span></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Phone Number : <span className='fw-semibold'>{merchantDetails.phoneNumber}</span></h6>
                                                </td>
                                                <td>
                                                    <h6 className="mb-0">Mobile Number : <span className='fw-semibold'>{merchantDetails.mobileNumber}</span></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0">Payment Processor Name : <span className='fw-semibold'>{merchantDetails.paymentProcessorName}</span></h6>
                                                </td>
                                                <td>
                                                    <h6 className="mb-0">Card Present Transactions : <span className='fw-semibold'>{merchantDetails.cardPresentTransactions}</span></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h6 className="mb-0"> CNP Transactions : <span className='fw-semibold'>{merchantDetails.cnptransactions}</span></h6>
                                                </td>
                                                <td>
                                                    <h6 className="mb-0">Do You Ship Out of the US : <span className='fw-semibold'>{merchantDetails.doYouShipOutOfUS}</span></h6>
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
        </>
    )
}
export default ViewMerchant