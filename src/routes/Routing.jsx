import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
};

export default Routing;
