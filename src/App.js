import React, { Component, Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import PropogateLoader from 'react-spinners';

import CharacterDisplay from './containers/CharacterDisplay';
import CharacterPicker from './containers/CharacterPicker';

//const CharacterPicker = lazy(() => import('./containers/CharacterPicker'));
//onst CharacterDisplay = lazy(() => import('./containers/CharacterDisplay'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* <Suspense fallback={<PropogateLoader size="15" color="red" />}> */}
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={CharacterPicker} />
              {/* <Suspense
                fallback={<div>meh...</div>}
              > */}
                <Route path="/character/:id" component={CharacterDisplay} />
              {/* </Suspense> */}
            </Switch>
          </BrowserRouter>
        {/* </Suspense> */}
      </div>
    );
  }
}

// working though why we need this... getting an error that router expect func, not obj
function FuncWrapper (Component) {
  return (props) => {
    return (
      <Suspense fallback={<PropogateLoader size="15" color="red" />}>
        <Component {...props} />
      </Suspense>
    );
  }
}

export default App;
