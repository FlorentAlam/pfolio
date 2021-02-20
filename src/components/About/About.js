import React, { useContext, useEffect } from 'react';
import lang from '../../utils/lang';
import { LangContext } from '../App/AppProvider';

const About = () => {

    const langage = useContext(LangContext);

    useEffect(() => {
        document.title = lang.page_title.about[langage.langage];
    }, [])

    return(
        <main className="page">

        </main>
    )
};

export default About;