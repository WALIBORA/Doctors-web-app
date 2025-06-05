import './App.css';
import React, { useState } from 'react';
import RegistrationForm from './Componets/RegistrationForm';
import Login from './Componets/Login';
import Header from './Componets/Header';
import Navbar from './Componets/Navbar';
import Banner from './Componets/Banner';

export default function App() {
    const [view, setView] = useState('register');

    const handleNavClick = (newView) => {
        setView(newView);
    };

    return(
        <div>
            <Header />
            <Navbar onNavClick={handleNavClick} /> 
            {view === 'register' && <RegistrationForm onSwitchView={setView} />}
            {view !== 'register' && view !== 'login' && <Banner />}
            {view === 'login' && <Login onSwitchView={setView} />}
            {/* Add other views as needed */}
        </div>
    )
    
}
