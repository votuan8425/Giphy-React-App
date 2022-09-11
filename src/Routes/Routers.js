import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SearchDetail from "../components/SearchDetail/SearchDetail";
import App from "../App";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<App />} />
      <Route path="/search/:text" element={<SearchDetail />} />
    </Routes>
  );
};

export default Routers;
