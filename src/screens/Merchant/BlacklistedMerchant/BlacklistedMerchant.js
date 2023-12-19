import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import { FaGripHorizontal } from "react-icons/fa";
import actions from "../../../redux/actions";
import Loader from "../../../components/Loader";
import { BlackListedStatus } from "../../../config/AppConstants";
import ToastNotifiy from "../../../components/Toast/ToastNotifiy";
import { Button, Form, Modal } from "react-bootstrap-v5";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router";
import LocalStorageUtils from "../../../utilities/LocalStorageUtils";

const BlacklistedMerchant = () => {
    const toastRef = useRef();
    const [isLoading, setIsLoading] = useState(true)
    const [merchantList, setMerchantList] = useState([])
    const navigate = useNavigate();

    const [selectedMerchantId, setSelectedMerchantId] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [reason, setReason] = useState('');
    const [reasonValid, setReasonValid] = useState(true);

    const [showUpdateStatusModal, setShowUpdateStatusModal] = useState(false);
    useEffect(() => {
        const getMerchantActiveList = async () => {
            try {
                const res = await actions.getMerchantListAction(BlackListedStatus)
                setMerchantList(res.data);
                setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        getMerchantActiveList()
    }, []);
    const getMerchantActiveList = async () => {
        try {
            const res = await actions.getMerchantListAction(BlackListedStatus)
            setMerchantList(res.data);
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    const handleUpdateStatusModalOpen = (merchantId) => {
        setSelectedMerchantId(merchantId)
        setShowUpdateStatusModal(true);
    }
    const handleUpdateStatusModalClose = () => {
        setShowUpdateStatusModal(false);
         // Reset the form fields
         setSelectedMerchantId()
         setSelectedStatus('');
         setReason('');
         setReasonValid(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform validation for selected status
        if (!selectedStatus) {
            alert('Please select a status.');
            return;
        }
        // Perform validation for reason when "Rejected" or "BlackListedStatus" is selected
        if ((selectedStatus === 'Rejected' || selectedStatus === 'BlackListedStatus') && !reason) {
            setReasonValid(false);
            return;
        }

        try {
            const res = await actions.updateMerchantStatusAction(selectedMerchantId, selectedStatus, reason)
            console.log(res);
            toastRef.current.ToastSuccess("Status updated successfully");
            getMerchantActiveList()
        } catch (error) {
            console.log(error);
            toastRef.current.ToastError("Something went wrong");
        }
       

        // Close the modal
        handleUpdateStatusModalClose();
    };

    const handleViewMerchant = (merchantId) => {
        LocalStorageUtils.setItem('isViewMerchant', 'true');
        LocalStorageUtils.setItem('viewMerchantRedirecte', '/Merchant/Blacklisted');
        navigate('/Merchant/ViewMerchant', { state: { merchantId } });
    }
    return(
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
                                        <h4 className="fw-semibold mb-8">Blacklisted Merchant</h4>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a className="text-muted " href="index-2.html">
                                                        Dashboard
                                                    </a>
                                                </li>
                                                <li className="breadcrumb-item" aria-current="page">
                                                    Merchant
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
                            <div class="px-2 py-2 border-bottom">
                                <h5 class="card-title fw-semibold mb-0 lh-sm">Blacklisted Merchant</h5>
                            </div>
                            <div class="card-body p-2">
                                <div className="table-responsive rounded-2 mb-4">
                                    <table className="table border text-nowrap customize-table mb-0 align-middle">
                                        <thead className="text-dark fs-4">
                                            <tr>
                                                <th>
                                                    <h6 className="fs-4 fw-semibold mb-0">Merchant ID</h6>
                                                </th>
                                                <th>
                                                    <h6 className="fs-4 fw-semibold mb-0">Terminal ID</h6>
                                                </th>
                                                <th>
                                                    <h6 className="fs-4 fw-semibold mb-0">MCC</h6>
                                                </th>
                                                <th>
                                                    <h6 className="fs-4 fw-semibold mb-0">DBAName</h6>
                                                </th>
                                                <th>
                                                    <h6 className="fs-4 fw-semibold mb-0">Action</h6>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {!isLoading ? (
                                                merchantList.length !== 0 ? (
                                                    merchantList?.map(data => (
                                                        <tr>
                                                            <td>
                                                            <span style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }} 
                                                            onClick={()=>{handleViewMerchant(data.merchantId)}}> {data.merchantId}</span>
                                                            </td>
                                                            <td>{data.terminalId}</td>
                                                            <td>{data.mcc}</td>
                                                            <td>{data.dbaname}</td>
                                                            <td>
                                                                <button onClick={()=>{handleUpdateStatusModalOpen(data.merchantId)}} type="button" class="btn mb-1 waves-effect waves-light btn-sm btn-secondary">
                                                                    <FaGripHorizontal style={{ color: 'white' }} />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td className="text-center" colSpan={5}>
                                                            <strong>Data not found</strong>
                                                        </td>
                                                    </tr>
                                                )) : (
                                                <tr>
                                                    <td className="text-center" colSpan={5}>
                                                        <Loader />
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastNotifiy ref={toastRef} />
            <Modal size="lg" show={showUpdateStatusModal} onHide={handleUpdateStatusModalClose}>
                <Modal.Header>
                    <Modal.Title>Update Merchant Status</Modal.Title>
                    <Button variant="danger" onClick={handleUpdateStatusModalClose}>
                        <span>&times;</span>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Stack gap={2} className="col-md-8 mx-auto">
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupStatus">
                                <Form.Label>Select Status</Form.Label>
                                <Form.Select
                                    aria-label="Select status"
                                    value={selectedStatus}
                                    onChange={(e) => setSelectedStatus(e.target.value)}
                                    isInvalid={!selectedStatus}
                                >
                                    <option value="">Select status</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                    <option value="BlackListed">BlackListed</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Please select a status.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupReason">
                                <Form.Label>Enter Reason</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Reason"
                                    value={reason}
                                    onChange={(e) => {
                                        setReason(e.target.value);
                                        setReasonValid(true);
                                    }}
                                    isInvalid={!reasonValid}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a reason.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleUpdateStatusModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default BlacklistedMerchant