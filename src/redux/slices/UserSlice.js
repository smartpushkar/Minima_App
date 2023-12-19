import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name: 'userListData',
    initialState: {
        userListData:[],
    },
    reducers: {
        saveUserListData: (state, action) => {
            console.log("save uer list", action.payload);
            state.userListData = action.payload;
        },
        addNewUserData: (state, action) => {
            state.userListData.push(action.payload);
        },
        deleteUserDataByClientId: (state, action) => {
            const nextUserItem = state.userListData.filter(
                (userItem) => userItem.clientId !== action.payload
              );
              state.userListData = nextUserItem;
        },
        deleteUserData: (state, action) => {
            const nextUserItem = state.userListData.filter(
                (userItem) => userItem.userId !== action.payload
              );
              state.userListData = nextUserItem;
        },
        clearUserListData : (state, action) =>{
            state.userListData = {};
        }
        
    }
})

export const { saveUserListData, addNewUserData, deleteUserDataByClientId, deleteUserData, clearUserListData} = UserSlice.actions
export default UserSlice.reducer