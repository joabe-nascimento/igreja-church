// src/routes/index.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WithSubnavigation from "../components/navigation";
import Home from "../pages/Home";
import FaleConosco from "../pages/FaleConosco";

const AppRoutes = () => {
  return (
    <Router>
      <WithSubnavigation />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<FaleConosco />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
