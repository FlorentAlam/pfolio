import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import lang from '../../utils/lang';
import { LangContext } from '../App/AppProvider';

const Menu = ({isMenuOpen, closeMenu}) => {
    const langage = useContext(LangContext);
    
    return (
        <div id="menu" className={`menu menu--${isMenuOpen ? 'opened' : 'closed'}`}>
            <div>
                <ul>
                    <li><a href="https://github.com/FlorentAlam/" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/florent-alamachere/" target="_blank" rel="noreferrer">Linkedin</a></li>
                </ul>
                <ul>
                    <li><Link to="/" onClick={closeMenu}>{lang.navigation.home[langage.langage]}</Link></li>
                    <li><Link to="/portfolio" onClick={closeMenu}>{lang.navigation.work[langage.langage]}</Link></li>
                    <li><Link to="/a-propos" onClick={closeMenu}>{lang.navigation.about[langage.langage]}</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>{lang.navigation.contact[langage.langage]}</Link></li>
                </ul>
            </div>
        </div>
)};

export default Menu;