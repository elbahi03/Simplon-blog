import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: '15px 30px', backgroundColor: '#f2f2f2', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ cursor: 'pointer', margin: 0 }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>SimplonBlog</Link>
      </h1>

      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to="/creer" style={{ textDecoration: 'none', color: '#333' }}>Créer</Link>
        <Link to="/lesarticles" style={{ textDecoration: 'none', color: '#333' }}>Les articles</Link>
        <Link to="/apropos" style={{ textDecoration: 'none', color: '#333' }}>À propos</Link>
      </nav>
    </header>
  );
}

export default Header; 
