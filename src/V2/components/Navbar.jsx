import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          AS
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} className="navbar__link">
              <span className="navbar__link-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`navbar__links--mobile ${isOpen ? 'is-open' : ''}`}>
        {links.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__link"
            onClick={handleLinkClick}
          >
            <span className="navbar__link-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
