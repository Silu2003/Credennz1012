import React from "react";

export default function Footer() {
  return (
    <footer>
      <div class="fcontainer">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Credennz</h3>
            <p id="ftr-setP">Build a powerful systems <br/> with Credennz.</p>
          </div>
          <div class="footer-section">
            <h3>Pages</h3>
            <ul>
              <a href="" className="nav-lin">
                <li>Home</li>
              </a>
              <a href="" className="nav-lin">
                <li>Services</li>
              </a>
              <a href="" className="nav-lin">
                <li>Case Studies</li>
              </a>
              <a href="" className="nav-lin">
                <li>Contact</li>
              </a>
              <a href="" className="nav-lin">
                <li>404</li>
              </a>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contact</h3>
            <p id="ctn">Contact info goes here</p>
          </div>
          <div class="footer-section">
            <h3>Follow us</h3>
            <div class="social-icons">
              <a href="#" class="social-icon" aria-label="Facebook">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/facebook.svg"
                  alt="Facebook"
                />
              </a>
              <a href="#" class="social-icon" aria-label="LinkedIn">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
              <a href="#" class="social-icon" aria-label="Twitter">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/twitter.svg"
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>
        <p id="copy">&copy; Credennz. All rights reserved.</p>
      </div>
    </footer>
  );
}
