import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const lesarticles = () => {
    navigate('/lesarticles');
  };

  return (
    <div className="hero" style={{ padding: '40px', backgroundColor: '#eee', textAlign: 'center' }}>
      <div className="hero-content">
        <h1>SimplonBlog</h1>
        <p>Explorez. Partagez. Inspirez le monde avec vos mots.</p>
        <button onClick={lesarticles} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Commencer à lire
        </button>
      </div>
    </div>
  );
}

export default Hero;

