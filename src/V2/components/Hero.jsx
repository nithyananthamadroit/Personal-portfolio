import React, { useState, useEffect } from 'react';
import { profile, whoami } from '../data';
import '../styles/Hero.css';

function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= whoami.length) return;
    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 350);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">{'// portfolio.init()'}</p>
          <h1 className="hero__title">
            I'm <br /><span className="hero__title-accent">{`{${profile.name}}`}</span>
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero__terminal" aria-hidden="true">
          <div className="hero__terminal-bar">
            <span className="hero__dot hero__dot--red"></span>
            <span className="hero__dot hero__dot--yellow"></span>
            <span className="hero__dot hero__dot--green"></span>
            <span className="hero__terminal-title">whoami.js</span>
          </div>
          <div className="hero__terminal-body">
            <p className="hero__terminal-line">
              <span className="hero__token-fn">const</span> developer = {'{'}
            </p>
            {whoami.map((line, index) => (
              <p
                key={line.key}
                className={`hero__terminal-line hero__terminal-line--indent ${
                  index < visibleLines ? 'is-visible' : ''
                }`}
              >
                <span className="hero__token-key">{line.key}</span>:{' '}
                <span className="hero__token-value">{line.value}</span>
                {index < whoami.length - 1 ? ',' : ''}
              </p>
            ))}
            <p className="hero__terminal-line">{'};'}</p>
            <p className="hero__terminal-cursor">
              <span className="hero__token-fn">&gt;</span> ready_for_work --true
              <span className="hero__blinker">_</span>
            </p>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <span className="hero__scroll-line"></span>
        scroll
      </a>
    </section>
  );
}

export default Hero;
