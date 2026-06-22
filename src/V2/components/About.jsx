import React from 'react';
import { about } from '../data';
import SectionHeading from './SectionHeading';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about section">
      <div className="section__inner">
        <SectionHeading index={1} label="about" title="About Me" />

        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((para, index) => (
              <p key={index} className="about__paragraph">
                {para}
              </p>
            ))}
          </div>

          <div className="about__stats">
            {about.stats.map((stat) => (
              <div key={stat.label} className="about__stat-card">
                <p className="about__stat-value">{stat.value}</p>
                <p className="about__stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
