import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"; // Optional: Add custom styles for the Navbar

const Navbar = () => {
  const location = useLocation(); // Get the current path for active link styling

  return (
    <nav className="navbar">
      <div className="container-fluid">
        {/* Brand Section */}
        <Link className="navbar-brand" to="/">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Brand</div>
        </Link>
        <hr className="sidebar-divider my-0" />

        {/* Navigation Links */}
        <ul className="left-navbar" id="accordionSidebar">
          {/* Dashboard Link */}
          <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
            <Link className="nav-link" to="/">
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Profile Link */}
          <li className={`nav-item ${location.pathname === "/profile" ? "active" : ""}`}>
            <Link className="nav-link" to="/profile">
              <i className="fas fa-user"></i>
              <span>Profile</span>
            </Link>
          </li>

          {/* Login Link */}
          <li className={`nav-item ${location.pathname === "/login" ? "active" : ""}`}>
            <Link className="nav-link" to="/login">
              <i className="far fa-user-circle"></i>
              <span>Login</span>
            </Link>
          </li>

          {/* Register Link */}
          <li className={`nav-item ${location.pathname === "/register" ? "active" : ""}`}>
            <Link className="nav-link" to="/register">
              <i className="fas fa-user-circle"></i>
              <span>Register</span>
            </Link>
          </li>
        </ul>

        {/* Sidebar Toggle Button */}
        <div className="text-center d-none d-md-inline">
          <button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
