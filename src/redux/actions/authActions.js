import AuthService from "../../services/AuthService";
import { logoutData, saveUserData } from "../slices/AuthSlice";
import { clearUserListData } from "../slices/UserSlice";
import { store } from "../store";

export function loginAction(data) {
    return new Promise((resolve, rejact) => {
        AuthService.login(data)
            .then((res) => {
                resolve(res)
                store.dispatch(saveUserData(res.data));
                // if(res.data.error === false){
                //     store.dispatch(saveUserData(res.data));
                // }
            }).catch((error) => {
                rejact(error)
            })
    })
}
export function developerRegistrationAction(data) {
    return new Promise((resolve, rejact) => {
        AuthService.developerRegistration(data)
            .then((res) => {
                resolve(res)
            }).catch((error) => {
                rejact(error)
            })
    })
}

export function logoutAction() {
    return new Promise((resolve, rejact) => {
        AuthService.logout()
            .then((res) => {
                resolve(res)
                store.dispatch(logoutData());
                store.dispatch(clearUserListData());

            }).catch((error) => {
                rejact(error)
            })
    })
}

export function verifyLoginUser(token) {
    return new Promise((resolve, rejact) => {
        AuthService.verifyLoginUser(token)
            .then((res) => {
                localStorage.setItem('lastLoginTime', Date.now());
                resolve(res)
                store.dispatch(saveUserData(res.data));
            }).catch((error) => {
                if (error.code === "ERR_NETWORK") {
                    console.log("ERR_NETWORK Error getting form verifyLoginUser response API", error)
                    // eslint-disable-next-line
                    const errorData = {
                        code: error.code,
                        message: error.message
                    }
                    // store.dispatch(saveErrorData(errorData))
                    rejact(error)
                } else if (error.code === "ERR_BAD_REQUEST") {
                    console.log("ERR_BAD_REQUEST Error getting form verifyLoginUser response API", error)
                    // eslint-disable-next-line
                    const errorData = {
                        code: error.code,
                        message: error.message
                    }
                    // store.dispatch(saveErrorData(errorData)) 
                    rejact(error)
                } else {
                    // eslint-disable-next-line
                    const errorData = {
                        code: error.code,
                        message: error.message
                    }
                    // store.dispatch(saveErrorData(errorData))
                    console.log('Error', error.message);
                    rejact(error)
                }


            })
    })
}
