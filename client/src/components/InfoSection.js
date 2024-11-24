import React from 'react';
import './InfoSection.css';

const InfoSection = ({ sectionId, title, content }) => {
  return (
    <section id={sectionId} className="info-section">
      <h2>{title}</h2>
      <div className="content">
        {content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
