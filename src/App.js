import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import NotFound from './components/layout/NotFound';
import NavBar from './components/layout/NavBar';
import Posts from './components/posts/Posts';
import Post from './components/posts/Post';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts/:id" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
