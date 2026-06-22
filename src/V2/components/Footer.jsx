import React from 'react';
import { profile } from '../data';
import '../styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">
          &copy; {year} {profile.name}. Built with React.
        </p>

        <div className="footer__social">
          <a href={profile.social.github} className="footer__link">
            GitHub
          </a>
          <a href={profile.social.linkedin} className="footer__link">
            LinkedIn
          </a>
          <a href={profile.social.twitter} className="footer__link">
            Twitter
          </a>
        </div>

        <a href="#hero" className="footer__back-to-top">
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}

export default Footer;
