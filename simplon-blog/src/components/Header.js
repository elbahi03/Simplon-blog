import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">SimplonBlog</Link>
      </h1>

      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <Link to="/creer" onClick={() => setMenuOpen(false)}>Créer</Link>
        <Link to="/lesarticles" onClick={() => setMenuOpen(false)}>Les articles</Link>
        <Link to="/apropos" onClick={() => setMenuOpen(false)}>À propos</Link>
      </nav>

      <div
        className={`burger ${menuOpen ? 'toggle' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
}

export default Header;
