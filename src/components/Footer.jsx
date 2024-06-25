import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 footer-section">
            <h5>Section</h5>
            <a href="/">Home</a>
            <a href="/">Digital</a>
            <a href="/">Contact</a>
            <a href="/">Gallery</a>
            <a href="/">About</a>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 footer-section">
            <h5>Section</h5>
            <a href="/">Home</a>
            <a href="/">Digital</a>
            <a href="/">Contact</a>
            <a href="/">Gallery</a>
            <a href="/">About</a>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 footer-section">
            <h5>Section</h5>
            <a href="/">Home</a>
            <a href="/">Digital</a>
            <a href="/">Contact</a>
            <a href="/">Gallery</a>
            <a href="/">About</a>
          </div>

          {/* Dummy column */}
          <div className="col-lg-2 col-md-2 col-sm-4"></div>

          <div className="col-lg-4 col-md-4 col-sm-12 footer-about">
            <h1>Happy Travel with Happy Bus</h1>
            <p>Discover the joy of travel with our reliable and comfortable bus services. Your journey, our priority.</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
