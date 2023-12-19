import { createSlice } from "@reduxjs/toolkit";


const RoleSlice = createSlice({
    name: 'roleListData',
    initialState: {
        roleListData:[],
    },
    reducers: {
        saveRoleListData: (state, action) => {
            state.roleListData = action.payload;
        },
        deleteRoleListData : (state, action) =>{
            state.roleListData = {};
        }
        
    }
})

export const { saveRoleListData, deleteRoleListData} = RoleSlice.actions
export default RoleSlice.reducer