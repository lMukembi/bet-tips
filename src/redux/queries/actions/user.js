import axios from "axios";
import {
  GET_USER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
} from "../constants/user";

const smartAPI = "http://localhost:8000";

// Register user
export const register = (formData) => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.post(
      `${smartAPI}/api/user/register`,
      {
        password: formData.password,
        phone: formData.phone,
      },
      config
    );

    dispatch({ type: REGISTER_SUCCESS, payload: data });

    localStorage.setItem("userAccount", JSON.stringify(data));

    if (data) {
      alert("Account created successfully.");
    }
    window.location.reload();
  } catch (error) {
    console.log(error);
    if (error) {
      window.location.href = "./register";
      alert("Invalid email or short password.");
    }
  }
};

// Login user
export const login = (formData) => async (dispatch) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const config = {
    headers: headers,
  };

  try {
    const { data } = await axios.post(
      `${smartAPI}/api/user/login`,
      {
        phone: formData.phone,
        password: formData.password,
      },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userAccount", JSON.stringify(data));
    if (data) {
      alert("Logged in successfully.");
    }
    window.location.reload();
  } catch (error) {
    console.log(error);
    if (error) {
      window.location.href = "./login";
      alert("Password or phone is wrong.");
    }
  }
};

// Get user
export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${smartAPI}/api/auth/getUser/${id}`);

    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Logout
export const logout = () => (dispatch) => {
  localStorage.removeItem("userAccount");

  dispatch({ type: LOGOUT });
};
