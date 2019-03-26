import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.sass';

const Page = ({ children = null, calsses = "" }) => (
  <div className={classNames("page", calsses)}>{children}</div>
);

Page.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
}

export default Page;
