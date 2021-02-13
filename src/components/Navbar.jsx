import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Exercise Tracker
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li class="active">
            <Link to="#" >Home</Link>
          </li>
          <li>
            <Link to="#">Page 1</Link>
          </li>
          <li>
            <Link to="#">Page 2</Link>
          </li>
          <li>
            <Link to="#">Page 3</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
