import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import "./header.css"
import logo from './logo.png';

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="menu">
                    <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/coins">Coins</Link></li>
                         <li><Link to="/excanges">Exchange</Link></li>
                         <li><Link to="/about-us">About us</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}