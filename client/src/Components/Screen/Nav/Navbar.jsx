import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" href="#">
                  <NavLink to="/signup" end>
                    Sign-Up
                  </NavLink>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  <NavLink to="/signin" end>
                    Sign-In
                  </NavLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
