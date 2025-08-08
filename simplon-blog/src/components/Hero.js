import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();

  const lesarticles = () => {
    navigate('/lesarticles');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>SimplonBlog</h1>
        <p>Explorez. Partagez. Inspirez le monde avec vos mots.</p>
        <button onClick={lesarticles}>
          Commencer à lire
        </button>
      </div>
    </section>
  );
}

export default Hero;
