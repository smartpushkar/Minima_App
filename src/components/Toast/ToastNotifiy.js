import React, { forwardRef, useImperativeHandle } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const ToastNotifiy = (props, ref) => {

    useImperativeHandle(
        ref,
        () => ({
            ToastSuccess(txt) {
                toast.success(txt, {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            },
            ToastError(txt) {
                toast.error(txt, {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            },
            ToastErrorLong(txt, ms) {
                toast.error(txt, {
                    position: "top-right",
                    autoClose: ms ===  undefined ? 2000 : ms,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            },
            ToastInfo(txt) {
                toast.info(txt, {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            },
            ToastWarning(txt) {
                toast.warn(txt, {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }),
    )

    return (
        <div>
            {/* <ToastContainer /> */}
        </div>
    );
}

export default forwardRef(ToastNotifiy)
