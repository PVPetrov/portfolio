import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import Main from './layout/Main';
import buildRoot from './utils/buildRoot';

import './index.css'

const root = buildRoot();

render(<Root />, root);