import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom'

import reducers from './reducers';
import Posts from './containers/Posts'
import NavBar from './components/NavBar';

// Apply Thunk middleware
const middleware = applyMiddleware(thunk);
// Create enhancer
const enhancer = compose(middleware, (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// Create store
const store = createStore(reducers, enhancer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <NavBar />
            <Posts />
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
