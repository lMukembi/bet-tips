import React, { useState } from "react";
import "../css/login.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { login } from "../redux/queries/actions/user";

const initialState = {
  phone: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login(formData));

    navigate(-1);
  };

  return (
    <form className="login" onSubmit={handleLogin}>
      <div className="about_game_back" onClick={() => navigate(-1)}>
        <small>
          <IoIosArrowBack className="goback" />
        </small>
        <small>Go back</small>
      </div>
      <h1 className="login_header">LOGIN TO SPRIBE AVIATOR</h1>
      <input
        placeholder="Enter phone number"
        className="register_phone"
        required
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <input
        placeholder="Enter password"
        className="password"
        required
        type={showPassword ? "text" : "password"}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        value={formData.password}
      />
      <i onClick={handleShowPassword}>
        {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
      </i>
      <button className="login_button">LOGIN</button>
      <small className="forgot_password_on_login">
        <Link to="/forgotpassword" className="forgot_password_link">
          Forgot password?
        </Link>
      </small>
      <p className="login_info">
        Don’t have an account?
        <Link to="/register" className="register_on_login">
          Register
        </Link>
        .
      </p>
    </form>
  );
};

export default Login;
