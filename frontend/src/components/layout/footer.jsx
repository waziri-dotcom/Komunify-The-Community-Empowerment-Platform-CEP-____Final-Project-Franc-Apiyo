import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-section brand">
                    <h3>Komunify</h3>
                    <p>Connecting communities, building connections.</p>
                </div>

                {/* Quick Links */}
                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div className="footer-section resources">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms & Conditions</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-section social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="#facebook" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#twitter" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#linkedin" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>&copy; {currentYear} Komunify. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;