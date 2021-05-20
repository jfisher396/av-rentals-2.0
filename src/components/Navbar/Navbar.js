import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import LoginForm from "../LoginForm/LoginForm";

function Navbar(props) {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          AV Rentals
        </Link>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/projectors"
                className={ location.pathname === "/projectors" ? "nav-link active" : "nav-link" }
                aria-current="page"
              >
                Projectors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/screens"
                className={location.pathname === "/screens" ? "nav-link active" : "nav-link"}
                aria-current="page"
              >
                Screens
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/computers"
                className={location.pathname === "/computers" ? "nav-link active" : "nav-link"}
                aria-current="page"
              >
                Computers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/audio"
                className={location.pathname === "/audio" ? "nav-link active" : "nav-link"}
                aria-current="page"
              >
                Audio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/misc"
                className={location.pathname === "/misc" ? "nav-link active" : "nav-link"}
                aria-current="page"
              >
                Misc AV
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className={location.pathname === "/cart" ? "nav-link active" : "nav-link"}
                aria-current="page"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
        {props.currentUser ? <span>Logged in as {props.currentUser.email}</span> :
        <div>
        <LoginForm
          loginData={props.loginFormData}
          handleInputChange={props.inputChange}
          loginButton={props.loginSubmit}
        />
        <div className="register-link">
          <p id="register-link-label">Not a registered user?</p>
          <Link to="/register">Register</Link>
        </div>
        </div> 
        }
        
        
      </div>
    </nav>
  );
}

export default Navbar