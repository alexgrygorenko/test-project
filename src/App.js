import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Component1}></Route>
          <Route exact path="/component2" component={Component2}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
