import React from 'react';
import './InfoSection.css';

const InfoSection = ({ sectionId, title, content }) => {
  const formatContent = (text) => {
    return <div dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <section id={sectionId} className="info-section">
      <div className="card">
        {/* <h2>{title}</h2> */}
        {formatContent(content)}
      </div>
    </section>
  );
};

export default InfoSection;
