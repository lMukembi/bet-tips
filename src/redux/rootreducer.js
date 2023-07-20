import { combineReducers } from "redux";

import user from "./queries/reducers/user";

const rootReducer = combineReducers({
  bet_user: user,
});
export default rootReducer;
