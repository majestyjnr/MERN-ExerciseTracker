import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="container-fluid text-white">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Exercise Tracker
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li className="active" className="navbar-item">
            <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create-exercises" className="nav-link">Create Exercises</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create-users" className="nav-link">Create Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
