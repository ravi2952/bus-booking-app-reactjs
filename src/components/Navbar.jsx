import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            RAV <span>Transports</span>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="https://www.google.com/maps?q=VELMURUGAN%20TOWERS%2C%20C%20E%20B%20Colony%2C%20Periyapatti%2C%20Tamil%20Nadu%20637001" target="blank">
                  Locate us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
