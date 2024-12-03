import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Servicenav() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  };
  return (
    <div class="service-nav">
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
      <div class="Service-nav-main">
        <div className="stars"></div>
        <div class="service_content">
          <h1>
            Transformative Solutions
            <br />
            Tailored to Your Needs
          </h1>
          <p>
            Providing personalized technology solutions designed to
            <br /> optimize your business operations and drive innovation
            <br />
            forward.
          </p>
        </div>
      </div>
    </div>
  );
}