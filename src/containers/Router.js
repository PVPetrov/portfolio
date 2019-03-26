import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from './Home';
import Experience from './Experience';
import Education from './Education';
import About from './About';

import './Router.css';

class Router extends PureComponent {
  render(){
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={450} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/experience" component={Experience} />npm
                <Route path="/education" component={Education} />
                <Route path="/about" component={About} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
};

export default withRouter(Router);
