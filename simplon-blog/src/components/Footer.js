import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="footer">
      <p>&copy; {new Date().getFullYear()} SimplonBlog. Tous droits réservés.</p>
      <p>Contact : contact@simplonblog.com</p>
    </footer>
  );
}

export default Footer;
