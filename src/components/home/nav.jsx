import { Link } from "react-router-dom";
import React, { useState } from "react";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevDropdownOpen) => !prevDropdownOpen);
  };

  return (
    <div
      class="bg-image"
      style={{
        backgroundPosition: "center",
        backgroundImage: `url('${process.env.PUBLIC_URL}/img/bgimg.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
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
      <h-main>
        <section class="h-hero">
          <div class="hd">
            <img
              src="/img/ss1.png"
              alt="Graph Icon"
              class="graph-icon graph-icon-1"
            />
            <img
              src="/img/ss2.png"
              alt="Graph Icon"
              class="graph-icon graph-icon-2"
            />
            <h2>HELPING YOU WITH</h2>
            <h1>AI and Tech</h1>
            <p>
              Specializing in crafting data-driven outputs and tech <br />
              development solutions
            </p>
            <button class="cta-btn">Get Quote </button>
          </div>
        </section>
        <section class="services">
          <div class="service-card">
            <img src="/img/ss3.png" alt="Search Icon" class="service-icon" />
            <h3>Lorem Ipsum</h3>
            <p>
              Maximize Visibility and Conversions with Precision-targeted Ads
              through Our Expert Paid Search Campaigns.
            </p>
            <a href="#" class="learn-more">
              Learn more →
            </a>
          </div>
          <div class="service-card">
            <img src="/img/ss4.png" alt="Chart Icon" class="service-icon" />
            <h3>Lorem Ipsum</h3>
            <p>
              Gain Insights and Track Performance with Robust Analytics and
              Reporting.
            </p>
            <a href="#" class="learn-more">
              Learn more →
            </a>
          </div>
          <div class="service-card">
            <img
              src="/img/ss4.png"
              alt="Social Media Icon"
              class="service-icon"
            />
            <h3>Lorem Ipsum</h3>
            <p>Amplify Reach with Strategic Paid Social Media Advertising.</p>
            <a href="#" class="learn-more">
              Learn more →
            </a>
          </div>
        </section>
      </h-main>
    </div>
  );
}
