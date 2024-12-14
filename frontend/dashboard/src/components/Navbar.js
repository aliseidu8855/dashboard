import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Optional: Add custom styles for the Navbar

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="container-fluid">
        {/* Brand Section */}
        <Link className="navbar-brand" to="/">
          <div>
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div>Brand</div>
        </Link>
        <hr className="sidebar-divider my-0" />

        {/* Navigation Links */}
        <ul className="left-navbar" id="accordionSidebar">
          {/* Dashboard Link */}
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Profile Link */}
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <i className="fas fa-user"></i>
              <span>Profile</span>
            </Link>
          </li>

          {/* Login Link */}
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <i className="far fa-user-circle"></i>
              <span>Login</span>
            </Link>
          </li>

          {/* Register Link */}
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              <i className="fas fa-user-circle"></i>
              <span>Register</span>
            </Link>
          </li>
        </ul>

      </div>
      <span className="active-nav"></span>
    </nav>
  );
};

export default Navbar;
