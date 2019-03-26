import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const LinkItem = ({ link, name }) => (
  <div className="link-item">
    <NavLink exact={true} activeClassName="link-active" to={link}>
      <h2 className="link">{name}</h2>
    </NavLink>
  </div>
);

LinkItem.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default LinkItem;
