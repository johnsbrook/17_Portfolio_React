import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";
import "./style.css";


// Initialized the use of fontawesome icons converting <i> tag into <svg> tag when running the code.
dom.watch();
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow">
      <Link className="navbar-brand" to="/">
        Iv&aacute;n J. Zapata-Rivera
      </Link>
      <button
        class="navbar-toggler white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon white pt-2">
        <i class="fas fa-bars"></i>
        </span>
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
            <i class="fas fa-laptop-house"></i> <span class="sr-only">(current)</span>
            &nbsp;
            Home
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link
            className={
              window.location.pathname === "/portfolio"
                ? "nav-link active"
                : "nav-link"
            }
            to="/portfolio"
          >
            <i class="fas fa-grip-horizontal"></i> &nbsp;&nbsp;
            Portfolio
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link
            className={
              window.location.pathname === "/github"
                ? "nav-link active"
                : "nav-link"
            }
            to="/github"
          >
            <i class="fab fa-github"></i> &nbsp;&nbsp;
            GitHub
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
          <Link
            className={
              window.location.pathname === "/linkedin"
                ? "nav-link active"
                : "nav-link"
            }
            to="/linkedin"
          >
            <i class="fab fa-linkedin-in"></i> &nbsp;&nbsp;
            LinkedIn
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
