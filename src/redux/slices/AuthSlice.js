import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'userData',
    initialState: {
        userData:{},
        isLoggedIn: false
    },
    reducers: {
        saveUserData: (state, action) => {
            state.userData = action.payload;
            state.isLoggedIn = true
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem('lastLoginTime', Date.now());
        },
        logoutData : (state, action) =>{
            state.userData = {};
            state.isLoggedIn = false
            localStorage.removeItem('webToken');
            localStorage.setItem('isLoggedIn', false);
            localStorage.removeItem('role');
            localStorage.removeItem('lastLoginTime');
            
        }
        
    }
})

export const { saveUserData, logoutData } = authSlice.actions
export default authSlice.reducer