import React, { useContext, useEffect, useRef, useState } from 'react';
import './Portfolio.scss';
import ScrollAnimation from './ScrollAnimation';
import PortfolioItem from './PortfolioItem';
import lang from '../../utils/lang';

import sokoban from '../../assets/sokoban.jpg';
import weello from '../../assets/weello.jpg';
import { LangContext } from '../App/AppProvider';

const projects = [
    {name: "sokoban", img: sokoban, desc: "Un mini jeu qui se joue sur PC avec son smartphone en guise de manette.", techs: ["Typescript", "Pixi.js", "Socket.io"]},
    {name: "weello", img: weello, desc: "Un trello-like", techs: ["React", "Redux", "LocalStorage"]},
    {name: "argonautes", img: weello, desc: "Un projet réalisé dans le cadre l'intégration à la Wild Code School", techs: ["JS", "Node.js", "Express", "Firebase"]}
]

const Portfolio = () => {
    const langage = useContext(LangContext);

    const [selected, setSelected] = useState(0);
    const [animation, setAnimation] = useState(null);
    const scrolledContent = useRef(null);

    useEffect(() => {
            const anim = new ScrollAnimation(scrolledContent.current);
            
            window.addEventListener('mousewheel', () => {
                setSelected(Math.floor(Math.abs(anim.scrollPosition) / (window.innerHeight - 330) ));
            });
            window.addEventListener('keydown', (e) => {
                if(e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Tab'){
                    setSelected(Math.floor(Math.abs(anim.scrollPosition) / (window.innerHeight - 150) ));
                }
            });
            window.addEventListener('scroll', (e) => {
                const actualScroll = window.scrollY;

                setSelected(Math.floor(actualScroll / (window.innerHeight / 1.1)));
            });
    }, [])

    return (
        <main className="page portfolio">
            <div className="content" ref={scrolledContent}>
                {projects.map((projet, index) => <PortfolioItem key={index} selected={selected} index={index} img={projet.img}/>)}
            </div>
            <div className="background">
                <p className="title">{projects[selected].name}</p>
                <p className="description">{ lang.portfolio[projects[selected].name][langage.langage]}</p>
                <p className="tech">{projects[selected].techs.join(', ')}</p>
            </div>
        </main>
    )
};

export default Portfolio;