import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./components/account";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Subscribe from "./components/subscribe";

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </Router>
  );
};

export default Paths;
