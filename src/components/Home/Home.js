import React, { useContext, useEffect, useRef } from 'react';
import PixiApp from './PixiApp';
import './Home.scss';
import Header from './Header';
import { LangContext } from '../App/AppProvider';
import lang from '../../utils/lang';

const Home = () => {
    const home = useRef(null);
    const langage = useContext(LangContext);
    useEffect(() => {
        let app = new PixiApp(home.current);
        home.current.appendChild(app);
        document.title = lang.page_title.home[langage.langage];
    }, [])

    return (
    <section className="page home" ref={home}>
        <Header/>
    </section>
)}

export default Home;