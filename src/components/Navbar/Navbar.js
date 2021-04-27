import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">AV Rentals</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/projection" className="nav-link active" aria-current="page">Projectors</Link>
            </li>
            <li className="nav-item">
              <Link to="/screens" className="nav-link active" aria-current="page">Screens</Link>
            </li>
            <li className="nav-item">
              <Link to="/computers" className="nav-link active" aria-current="page">Computers</Link>
            </li>
            <li className="nav-item">
              <Link to="/audio" className="nav-link active" aria-current="page">Audio</Link>
            </li>
            <li className="nav-item">
              <Link to="/misc" className="nav-link active" aria-current="page">Misc AV</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link active" aria-current="page">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
