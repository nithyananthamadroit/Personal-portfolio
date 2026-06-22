import React from 'react';
import { projects } from '../data';
import SectionHeading from './SectionHeading';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section__inner">
        <SectionHeading index={3} label="projects" title="Selected Projects" />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card">
              <div className="project-card__header">
                <span className="project-card__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="project-card__title">{project.title}</h3>
              </div>

              <p className="project-card__description">{project.description}</p>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card__links">
                <a href={project.link} className="project-card__link">
                  Live Demo &rarr;
                </a>
                <a href={project.code} className="project-card__link">
                  Source Code &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
