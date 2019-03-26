import React from 'react';

import './index.sass';

const Section = ({ value, description }) => {
  return (
    <div className="section">
      <div className="value">{value}</div>
      <div className="description">{description}</div>
    </div>
  );
}

export default Section;
