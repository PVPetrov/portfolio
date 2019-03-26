import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Experience = lazy(() => import('./Experience'));
const Education = lazy(() => import('./Education'));
const About = lazy(() => import('./About'));

const Router = () => {
  return (
    <Suspense fallback={<div style={{flex: '1 1 0', background: 'grey'}}>Loading</div>} >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  );
}

export default Router;
