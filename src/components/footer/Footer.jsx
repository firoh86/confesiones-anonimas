import React from 'react';
import '../footer/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__rights">
        <p>
          @SoloConfesionesAnonimas · Comunidad <span>&copy;</span>All rights
          reserved 2020.
        </p>
        <a
          className="footer__link"
          href="https://www.facebook.com/SoloConfesionesAnonimas"
          title="Facebook"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visitanos en Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
