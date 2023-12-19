import actions from "../redux/actions";


const verifyLoginUserData = async (token) => {
    try {
        const res = await actions.verifyLoginUser(localStorage.getItem('webToken'))
        return res;
    } catch (error) {
        return error;
    }
}

export const isLoggedIn = async () => {
    if (localStorage.getItem('webToken')) {
        // const lastLoginTime = localStorage.getItem('lastLoginTime');
        try {
            const res = await verifyLoginUserData(localStorage.getItem('webToken'))
            console.log("isLoggedIn", res);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    return false;
}