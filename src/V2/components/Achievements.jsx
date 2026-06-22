import React from 'react';
import { achievements } from '../data';
import SectionHeading from './SectionHeading';
import '../styles/Achievements.css';

function Achievements() {
  return (
    <section id="achievements" className="achievements section">
      <div className="section__inner">
        <SectionHeading index={4} label="achievements" title="Achievements" />

        <div className="achievements__timeline">
          {achievements.map((item) => (
            <div key={item.title} className="achievement-item">
              <div className="achievement-item__marker">
                <span className="achievement-item__year">{item.year}</span>
              </div>
              <div className="achievement-item__content">
                <h3 className="achievement-item__title">{item.title}</h3>
                <p className="achievement-item__detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
