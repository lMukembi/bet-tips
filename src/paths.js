import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./components/account";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Subscribe from "./components/subscribe";
import Predictions from "./components/predictions";

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-account" element={<Account />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/yesterday-predictions" element={<Predictions />} />
      </Routes>
    </Router>
  );
};

export default Paths;
