import React from "react";
import { Route, Routes } from "react-router-dom";
import "./Home.css";
// import Home from "./Pages/Home";
// import Transaction from "./Pages/Transaction";
import Auth from "./components/Auth";
import Home from "./Home";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App
