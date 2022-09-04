import React, { useState, useEffect } from 'react';
import logo from '../assets/brand.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  let prevScrollPos = window.pageYOffset;

  const responsiveNav = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      document.getElementById('navbar').style.top = '0';
      document.getElementById('navbar').style.opacity = '1';
    } else {
      document.getElementById('navbar').style.top = '-100px';
      document.getElementById('navbar').style.opacity = '0';
    }
    prevScrollPos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', responsiveNav);

    return () => {
      window.removeEventListener('scroll', responsiveNav);
    };
  }, []);

  const collapseNavbar = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById('navbarNavDropdown').classList.remove('show');
  };

  return (
    <nav
      id="navbar"
      className="navbar navbar-index navbar-expand-lg navbar-light py-3 bg-white py-md-4"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="komodo os" draggable="false" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end text-center"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav fw-bold">
            <li className="nav-item py-2 py-lg-0 mx-0 mx-md-4">
              <Link
                className="nav-link"
                to="/changelog"
                onClick={() => collapseNavbar()}
              >
                Changelog
              </Link>
            </li>
            <li className="nav-item py-2 py-lg-0 mx-0 mx-md-4">
              <Link
                className="nav-link"
                to="/donate"
                onClick={() => collapseNavbar()}
              >
                Donate
              </Link>
            </li>
            <li className="nav-item py-2 py-lg-0 mx-0 mx-md-4">
              <Link
                className="nav-link"
                to="/team"
                onClick={() => collapseNavbar()}
              >
                Team
              </Link>
            </li>
            <li className="nav-item d-inline d-lg-none py-2 py-lg-0 mx-0 mx-md-4">
              <Link
                className="nav-link"
                to="/download"
                onClick={() => collapseNavbar()}
              >
                Download
              </Link>
            </li>
            <li className="nav-item d-none d-lg-inline">
              <Link
                className="nav-link btn btn-primary btn-donate px-4"
                to="/download"
                onClick={() => collapseNavbar()}
              >
                Download
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
