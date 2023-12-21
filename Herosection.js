// components/HeroSection.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
   const handleLoginClick = () => {
    navigate("/login");
  };
  return (
    <section className="jumbotron text-center mt-5">
      <div className="container">
        <h1 className="jumbotron-heading">Welcome to Tiffin App</h1>
        <p className="lead text-muted">
          Order delicious and healthy homemade meals online.
        </p>
        <p>
          <button onClick={handleLoginClick}>Go to Register</button>
        </p>
        <img src="/undraw_Cooking_p7m1.png" alt="alt" height="300px"></img>
      </div>
    </section>
  );
}
export default HeroSection;





