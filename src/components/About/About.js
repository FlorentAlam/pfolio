import React, { useContext, useEffect } from 'react';
import lang from '../../utils/lang';
import { LangContext } from '../App/AppProvider';
import photo from '../../assets/photo_jpg.jpg';
import './About.scss';

const About = () => {

    const langage = useContext(LangContext);

    useEffect(() => {
        document.title = lang.page_title.about[langage.langage];
    }, [])

    return(
        <main className="page about">
            <h1>Et si on travaillais ensemble ?</h1>
            {/* <img src={photo}></img> */}
        </main>
    )
};

export default About;