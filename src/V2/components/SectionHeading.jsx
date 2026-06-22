import React from 'react';
import '../styles/SectionHeading.css';

function SectionHeading({ index, title, label }) {
  return (
    <div className="section-heading">
      <p className="section-heading__tag">
        {'// '}
        {String(index).padStart(2, '0')}_{label}
      </p>
      <h2 className="section-heading__title">{title}</h2>
    </div>
  );
}

export default SectionHeading;
