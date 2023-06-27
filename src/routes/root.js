import React from "react";
import Landing from "../pages/Landing";
import { Routes, Route, BrowserRouter } from "react-router-dom";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
