import React from 'react';
import LinkItem from "./LinkItem";
import PropTypes from 'prop-types';

import './index.sass';

const Navigation = ({ links }) => {
  return (
    <div className="navigation">
      {links.map( l => <LinkItem key={l.link} {...l}/> )}
    </div>
  )
}

Navigation.ptopTypes = {
  links: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Navigation
