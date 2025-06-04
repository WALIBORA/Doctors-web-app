import React from 'react';
import bannerImage from '../assets/stet.jpg';

export default function Banner() {
    return (
        <section className="banner">
            <div className="banner-text">
                <h1>Welcome to my Hospital Booking system</h1>
                <p>Let's get started</p>
            </div>
            <div className="banner-image">
                <img src={bannerImage} alt="Hospital" />
            </div>
        </section>
    );
}
