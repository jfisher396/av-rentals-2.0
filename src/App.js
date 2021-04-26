import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/projection">
          <h1>This is the projection page</h1>
        </Route>
        <Route path="/audio">
          <h1>This is the audio page</h1>
        </Route>
        <Route path="/computers">
          <h1>This is the computers page</h1>
        </Route>
        <Route path="/screens">
          <h1>This is the screens page</h1>
        </Route>
        <Route path="/misc">
          <h1>This is the misc page</h1>
        </Route>
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
