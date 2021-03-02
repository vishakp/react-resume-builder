import { combineReducers } from "redux";
import ProfileReducer from './ProfileReducer';

const RootReducer = combineReducers({
    profile: ProfileReducer
})
export default RootReducer