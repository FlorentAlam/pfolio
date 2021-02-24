import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import lang from '../../utils/lang';
import { LangContext } from '../App/AppProvider';

const Conclusion = () => {
    const langage = useContext(LangContext);

    const content = useRef(null);

    const [isActive, setActive] = useState(false);

    useEffect(() => {
        const {top} = content.current.getBoundingClientRect();

        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if(!isActive){
                if(window.scrollY >= top) setActive(true);
            }
        })
    }, [isActive]);

    return(
    <h1 className={"about-large-text about-conclusion " + (isActive ? "conclusion--active" : "")} ref={content}>
        <span>{lang.about.alors[langage.langage]}</span> 
        <span>{lang.about.dowe[langage.langage]}</span>
        <span><Link to="/contact">{lang.about.contact[langage.langage]}</Link> ?</span>
    </h1>
)};

export default Conclusion;