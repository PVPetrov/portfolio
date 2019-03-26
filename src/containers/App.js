import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Main from '../layout/Main';
import Navigation from '../components/Navigation';
import Router from './Router';
import navRoutes from '../utils/navRoutes';

const App = () => {
  return <Main
    navigation={<Navigation links={navRoutes} /> }
    main={<Router />}
  />
};

export default App;