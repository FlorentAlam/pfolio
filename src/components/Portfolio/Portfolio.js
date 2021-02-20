import React, { useContext, useEffect, useRef, useState } from 'react';
import sokoban from '../../assets/sokoban.jpg';
import weello from '../../assets/weello.jpg';
import './Portfolio.scss';
import { LangContext } from '../App/AppProvider';
import lang from '../../utils/lang';

const DELTA = 1000;

const projects = [
    {name: "sokoban", img: sokoban, desc: "Un mini jeu qui se joue sur PC avec son smartphone en guise de manette.", techs: ["Typescript", "Pixi.js", "Socket.io"]},
    {name: "weello", img: weello, desc: "Un trello-like", techs: ["React", "Redux", "LocalStorage"]},
    {name: "argonautes", img: weello, desc: "Un projet réalisé dans le cadre l'intégration à la Wild Code School", techs: ["JS", "Node.js", "Express", "Firebase"]}
]

const Portfolio = () => {
    const langage = useContext(LangContext);

    const [ selected, setSelected ] = useState(0);
    const [timeSinceLastScroll, setTime] = useState(new Date().getTime());

    const keyboardListener = (e) => {
        if(e.keyCode === 37){
            if(selected > 0){
                setSelected(prevSelected => prevSelected - 1);
            }
        } else if (e.keyCode === 39){
            if(selected < projects.length - 1){
                setSelected(prevSelected => prevSelected + 1);
            }
        }
    }

    const scrollListener = (e) => {
        let time = new Date().getTime();
        if(time - timeSinceLastScroll >= DELTA){
            if(e.deltaY < 0){
                if(selected > 0){
                    setSelected(prevSelected => prevSelected - 1);
                }
            } else if (e.deltaY > 0){
                if(selected < projects.length - 1){
                    setSelected(prevSelected => prevSelected + 1);
                }
            }
            setTime(new Date().getTime());
        }
        
    }

    useEffect(() => {
        window.addEventListener('keydown', keyboardListener);
        window.addEventListener('mousewheel', scrollListener);

        return () => {
            window.removeEventListener('keydown', keyboardListener);
            window.removeEventListener('mousewheel', scrollListener);
        }
    }, [timeSinceLastScroll, selected]);

    return (
        <div className="portfolio">
            <div className="portfolio__item-container" style={{transform: `translateX(${- window.innerWidth * selected}px)`}}>
                {projects.map((projet, index) => (
                    <article key={index} style={{transform: `translateX(${index * window.innerWidth}px)`}}>
                        <div className="portfolio__image" style={{backgroundImage: `url(${projet.img})`}}></div>
                        <div>
                            <h2 className="title">{projet.name}</h2>
                            <p className="description">{lang.portfolio[projet.name][langage.langage]}</p>
                            <p className="tech">
                                {projet.techs.map((tech, index) => (
                                    <span>{tech}</span>
                                ))}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
            <div className="portfolio__selected-indicator-container">
                {projects.map((projet, index) => (
                    <div onClick={() => setSelected(index)} className={"portfolio__selected-indicator " + (index === selected ? "selected" : "unselected")}>
                    </div>
                ))}
            </div>
        </div>
    )
    
};

export default Portfolio;