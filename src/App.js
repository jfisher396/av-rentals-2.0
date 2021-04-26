import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart">
          <h1>This is the cart page</h1>
        </Route>
        <Route exact path="/">
          <h1>This is the main page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
