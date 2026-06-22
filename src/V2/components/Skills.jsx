import React from 'react';
import { skills } from '../data';
import SectionHeading from './SectionHeading';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section__inner">
        <SectionHeading index={2} label="skills" title="Skills & Tools" />

        <div className="skills__grid">
          {skills.map((group) => (
            <div key={group.category} className="skills__card">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__pill">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
