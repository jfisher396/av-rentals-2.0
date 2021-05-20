import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Main from "./pages/Main/Main"
import Projectors from "./pages/Projectors/Projectors"
import Screens from "./pages/Screens/Screens"
import Audio from "./pages/Audio/Audio"
import Computers from "./pages/Computers/Computers"
import Misc from "./pages/Misc/Misc"
import Cart from "./pages/Cart/Cart"
import Register from "./pages/Register/Register"
import "./App.css"
import API from "./utils/API";


function App() {

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    API.getCurrentUser().then((res) => {
      setCurrentUser(res.data.user);
    });
  }, []);

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    API.userLogin(loginFormData)
      .then((res) => {
        console.log("Logged in: ", res.data);
        setLoginFormData({
          email: "",
          password: "",
        });
        API.getCurrentUser().then((res) => {
          console.log(res.data);
          setCurrentUser(res.data.user);
        });
        window.location.reload(false);
      })
      .catch((err) => {
        alert("login failed");
      });
  };

  return (
    <Router>
      <Navbar currentUser={currentUser} loginFormData={loginFormData} inputChange={handleLoginInputChange} loginSubmit={handleLoginFormSubmit}/>
      <Switch>
        <Route path="/projectors">
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
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/">
         <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
