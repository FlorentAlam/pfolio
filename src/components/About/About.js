import React, { useContext, useEffect } from 'react';
import lang from '../../utils/lang';
import { LangContext } from '../App/AppProvider';

import './About.scss';

import Header from './Header';
import Description from './Description';
import Conclusion from './Conclusion';

const About = () => {

    const langage = useContext(LangContext);

    useEffect(() => {
        document.title = lang.page_title.about[langage.langage];
    }, [])

    return(
        <main className="about">
            <Header/>
            <Description/>
            <Conclusion/>
        </main>
    )
};

export default About;