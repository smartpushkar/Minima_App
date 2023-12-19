import { combineReducers } from "redux";
import auth from '../slices/AuthSlice';

const appReducer = combineReducers({
    auth
})

export default appReducer