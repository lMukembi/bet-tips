import {
  GET_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
} from "../constants/user";

const initialState = {
  loading: true,
  userData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, loading: false, userData: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, userData: action.payload };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, userData: action.payload };
    case LOGOUT:
      return {
        ...state,
        userData: {},
        loading: false,
      };

    default:
      return state;
  }
};
