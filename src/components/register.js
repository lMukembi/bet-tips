import React, { useState } from "react";
import "../css/register.css";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { register } from "../redux/queries/actions/user";

const initialState = {
  phone: "",
  password: "",
};

const Register = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(register(formData));

    navigate(-1);
  };

  const navigate = useNavigate();

  return (
    <form className="register" onSubmit={handleRegister}>
      <div className="register_back" onClick={() => navigate(-1)}>
        <small>
          <IoIosArrowBack className="goback" />
        </small>
        <small>Go back</small>
      </div>
      <h1 className="register_header">BetTips</h1>
      <input
        placeholder="Phone number"
        className="register_phone"
        required
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <input
        placeholder="password"
        className="password"
        required
        type={showPassword ? "text" : "password"}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        value={formData.password}
      />
      <i onClick={handleShowPassword}>
        {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
      </i>
      <button className="register_button">CREATE ACCOUNT</button>
      <p>
        By using this platform I attest that I am at least 18 years old and have
        read and agree to the
        <Link to="/termsofservice" className="tos">
          Terms of Service
        </Link>
        .
      </p>
      <p className="register_info">
        Already have an account?
        <Link to="/login" className="login_on_register">
          Login
        </Link>
        .
      </p>
    </form>
  );
};

export default Register;
