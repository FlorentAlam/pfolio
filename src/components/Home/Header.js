import React, { useContext } from 'react';
import lang from '../../utils/lang';
import { LangContext } from '../App/AppProvider';
import './Header.scss';

const Header = () => {
    const langage = useContext(LangContext);
    return (
        <header>
            <p>
                {lang.home.header.first[langage.langage]}<br/>
                {lang.home.header.second[langage.langage]}
            </p>
        </header>
)};

export default Header;