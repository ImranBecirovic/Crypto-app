import React from 'react';
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
                        <li>Home</li>
                        <li>Exchange</li>
                        <li>Value</li>
                        <li>About us</li>
                    </ul>
                </div>
            </div>
        </>
    );
}