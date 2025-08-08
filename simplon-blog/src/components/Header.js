import React from 'react';

function Header({ onLogoClick, onAddClick }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo} onClick={onLogoClick}>SimplonBlog</h1>

      <nav style={styles.nav}>
        <button style={styles.iconButton} onClick={onAddClick} title="Ajouter un article">
          📝
        </button>
        <a href="#articles" style={styles.link}>Les articles</a>
        <a href="#about" style={styles.link}>À propos</a>
        <a href="#footer" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#f2f2f2',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    cursor: 'pointer',
    margin: 0
  },
  nav: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center'
  },
  iconButton: {
    fontSize: '20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500'
  }
};

export default Header;
