import React, {Component} from 'react';
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Root from './components/Root'
import Temp from './components/Temp'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Link to="/temp">Temp</Link>
          <Link to="/temp/s">Temps</Link>

          <TransitionGroup>
            <CSSTransition timeout={300} classNames='fade'>
              <Switch>
                <Route path="/" exact component={Root}/>
                <Route path="/temp" component={Temp}/>
                <Route path="/about" component={About}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
