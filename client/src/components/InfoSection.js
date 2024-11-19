import React from 'react';
import './InfoSection.css';

const InfoSection = ({ sectionId, title, content }) => {
  return (
    <section id={sectionId} className="info-section">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default InfoSection;
