import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Our Services</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Our Doctors</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Register</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Hospitals</a></li>
            </ul>
        </nav>
    );
}
