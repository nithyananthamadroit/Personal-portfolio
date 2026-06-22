import React from 'react';
import { gallery } from '../data';
import SectionHeading from './SectionHeading';
import '../styles/Gallery.css';

function Gallery() {
  return (
    <section id="gallery" className="gallery section">
      <div className="section__inner">
        <SectionHeading index={5} label="gallery" title="Gallery" />

        <div className="gallery__grid">
          {gallery.map((item, index) => (
            <figure key={index} className="gallery__item">
              <div className="gallery__placeholder">
                <span className="gallery__placeholder-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <figcaption className="gallery__caption">{item.caption}</figcaption>
            </figure>
          ))}
        </div>

        <p className="gallery__hint">
          {'// Replace each gallery__placeholder block with an <img /> tag pointing'}
          {' to your own photo.'}
        </p>
      </div>
    </section>
  );
}

export default Gallery;
