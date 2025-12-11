import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">

        <NavLink className="navbar-brand fw-bold" to="/">
          BookStore
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Books
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/add">
                Add Book
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
