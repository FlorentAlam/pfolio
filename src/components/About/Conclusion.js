import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import lang from '../../utils/lang';
import { LangContext } from '../App/AppProvider';

const Conclusion = () => {
    const langage = useContext(LangContext);

    return(
    <h1 className="about-large-text about-conclusion">
        <span>{lang.about.alors[langage.langage]}</span> 
        <span>{lang.about.dowe[langage.langage]}</span>
        <span><Link to="/contact">{lang.about.contact[langage.langage]}</Link> ?</span>
    </h1>
)};

export default Conclusion;