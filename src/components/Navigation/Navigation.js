import React, { useState } from 'react';
import LangSelector from './LangSelector';
import Menu from './Menu';
import './Navigation.scss';
import { Link } from 'react-router-dom';


const Navigation = () => {
    const [isMenuOpen, toggleMenu] = useState(false);

    return (
    <nav>
        <Link to="/"><h1>Florent <span>alamachere</span></h1></Link>
        <div className="nav__right">
            <LangSelector/>
            <div className="hamburger" role="button" onClick={() => toggleMenu(!isMenuOpen)}>
                <div></div>
                <div></div>
            </div>
        </div>
        <Menu isMenuOpen={isMenuOpen} closeMenu={() => toggleMenu(false)}/>
    </nav>
)}

export default Navigation;