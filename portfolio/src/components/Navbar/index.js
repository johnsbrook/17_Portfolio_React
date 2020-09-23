import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow">
      <Link className="navbar-brand" to="/">
        Iv&aacute;n J. Zapata-Rivera
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link
            className={
              window.location.pathname === "/" ||
              window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
            to="/"
          >
            Home <span class="sr-only">(current)</span>
          </Link>
          <Link
            className={
              window.location.pathname === "/portfolio"
                ? "nav-link active"
                : "nav-link"
            }
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className={
              window.location.pathname === "/github"
                ? "nav-link active"
                : "nav-link"
            }
            to="/github"
          >
            GitHub
          </Link>
          <Link
            className={
              window.location.pathname === "/linkedin"
                ? "nav-link active"
                : "nav-link"
            }
            to="/linkedin"
          >
            LinkedIn
          </Link>
        </div>
      </div>

     
    </nav>
  );
}

export default Navbar;
