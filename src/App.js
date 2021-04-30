import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Main from "./pages/Main/Main"
import Projectors from "./pages/Projectors/Projectors"
import Screens from "./pages/Screens/Screens"
import Audio from "./pages/Audio/Audio"
import Computers from "./pages/Computers/Computers"
import Misc from "./pages/Misc/Misc"
import Cart from "./pages/Cart/Cart"


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/projection">
          <Projectors />
        </Route>
        <Route path="/audio">
          <Audio />
        </Route>
        <Route path="/computers">
          <Computers />
        </Route>
        <Route path="/screens">
          <Screens />
        </Route>
        <Route path="/misc">
         <Misc />
        </Route>
         <Route path="/cart">
          <Cart />
        </Route>
        <Route exact path="/">
         <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
