import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";



import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Javier Lavin</div>
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <AiOutlineClose /> : <HiBars3 />}
            </div>


            
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
