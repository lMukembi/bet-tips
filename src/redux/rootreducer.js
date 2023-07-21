import { combineReducers } from "redux";

import user from "./queries/reducers/user";

const rootReducer = combineReducers({
  User: user,
});
export default rootReducer;
