import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../contactus/contactusnav.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  };

  return (
    <div className="nv">
       <header className="contactus-navbar">
        <nav className="contactus-nav-container">
          <div className="logo">Credennz</div>

          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${isOpen ? "active" : ""}`} id="nav-links">
            <li>
              <Link
                to="/home"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Service
              </Link>
            </li>

            {/* Dropdown for Company */}
            <li
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <span className="nav-link" >Company</span>
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <li>
                  <Link
                    to="/about"
                    className="dropdown-link"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company-policy"
                    className="dropdown-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Company Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company-policy"
                    className="dropdown-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
              
            </li>

            <li>
              <Link
                to="/service"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="cmain">
        <div className="stars"></div>
        <div className="contact-form-container">
          <h1 className="contact-form-heading">
            Do you have a project <br /> you need help with?
          </h1>
          <div className="contact-form-info">
            <div className="contact-form-info-item">
              <img
                src="\img\imagexty.svg"
                alt="Phone Icon"
                className="icon-image"
              />
              <div className="sts">
              hello@credennz.com
              </div>
            </div>
            <div className="contact-form-info-item">
              <img
                src="\img\imagextx.svg"
                alt="Phone Icon"
                className="icon-image"
              />
               <div className="sts">
               +917978013108
               </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="contact-form-input-group">
              <input
                type="text"
                placeholder="Name"
                className="contact-form-input"
              />
              <input
                type="email"
                placeholder="Email"
                className="contact-form-input"
              />
            </div>
            <textarea
              placeholder=""
              className="contact-form-textarea"
            ></textarea>
            <button type="submit" className="contact-form-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}