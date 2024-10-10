// src/routes/index.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WithSubnavigation from "../components/navigation";
import Home from "../pages/Home";
import FaleConosco from "../pages/FaleConosco";
import QuemSomos from "../pages/Propositos";
import Serviços from "../pages/Serviços";
import Ações from "../pages/Ações";
import Horarios from "../pages/Horarios";

const AppRoutes = () => {
  return (
    <Router>
      <WithSubnavigation />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<FaleConosco />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/serviços" element={<Serviços />} />
        <Route path="/ações" element={<Ações />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
