// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Add your custom styles here
import Home from "./components/Project/Home";
import NavBar from "./components/Project/Navbar";
import Footer from "./components/Project/Footer";
import HeroSection from "./components/Project/Herosection";
import { LoginForm, RegistrationForm } from "./components/Project/form";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
      ;
    </div>
  );
}

export default App;
