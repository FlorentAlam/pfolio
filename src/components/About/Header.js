import React, { useContext } from 'react';
import lang from '../../utils/lang';
import { LangContext } from '../App/AppProvider';
import './Header.scss';

const Header = () => {
    const langage = useContext(LangContext);
    return (
        <h1 className="about-header">
            <span>{lang.about.whatif[langage.langage]}</span> 
            <span>{lang.about.wework[langage.langage]}</span>
            <span>{lang.about.ensemble[langage.langage]}</span>
        </h1>
    )
};

export default Header;