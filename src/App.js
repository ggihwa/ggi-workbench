import React, {Component, lazy, Suspense} from 'react';
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Root from './components/Root';
import Temp from './components/Temp';
import CSS from './scene/CSS';
import GithubList from './scene/GithubList';
//import About from './components/Temp'

const About = lazy(() => import('./components/About'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/temp">Temp</Link>
          <Link to="/temp/s">Temps</Link>
          <Link to="/about">About</Link>
          <Link to="/css">css</Link>

          <TransitionGroup>
            <CSSTransition timeout={300} classNames="fade">
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  <Route path="/" exact component={Root} />
                  <Route path="/css" exact component={CSS} />
                  <Route path="/temp" component={Temp} />
                  <Route path="/about" component={About} />
                  <Route path="/list" component={GithubList} />
                </Switch>
              </Suspense>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
