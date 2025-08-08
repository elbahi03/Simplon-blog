import React from 'react';

function Footer() {
  return (
    <footer id="footer" style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} SimplonBlog. Tous droits réservés.</p>
      <p>Contact : contact@simplonblog.com</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    marginTop: '40px'
  }
};

export default Footer;
