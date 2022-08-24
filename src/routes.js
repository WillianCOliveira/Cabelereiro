import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Nav from "./components/header";
import Salao from "./pages/salao";
import Sobrenos from "./pages/sobnos";

const MyRoutes = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path={`salao/:salaoId`} element={<Salao />}></Route>
          <Route path="/sobrenos" element={<Sobrenos />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default MyRoutes;
