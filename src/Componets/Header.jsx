import React from 'react';
import logoImage from '../assets/Log.jpg'; 

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logoImage} alt="Logo" style={{ height: '50px', borderRadius: '10px' }} />
            </div>
            <input
                type="text"
                placeholder="Search..."
                className="header-search-input"
                aria-label="Search"
            />
            <div className="social-media">
                <a href="#" aria-label="Facebook" className="social-link"><i className="bi bi-facebook"></i></a>
                <a href="#" aria-label="Twitter" className="social-link"><i className="bi bi-twitter"></i></a>
                <a href="#" aria-label="Instagram" className="social-link"><i className="bi bi-instagram"></i></a>
                <a href="#" aria-label="WhatsApp" className="social-link"><i className="bi bi-whatsapp"></i></a>
                <a href="#" aria-label="TikTok" className="social-link"><i className="bi bi-tiktok"></i></a>
            </div>
        </header>
    );
}
