import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">
                    Rahman
                </h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="https://github.com/Naimur178" className="footer_link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer_link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.facebook.com/" className="footer_social-link" target='_blank'>
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/" className="footer_social-link" target='_blank'>
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" className="footer_social-link" target='_blank'>
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className="footer_copy">
                    &#169; Crypticalcoder. All rigths reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;