import React, { useContext } from 'react';
import photo from '../../assets/photo_large_2.jpg';
import lang from '../../utils/lang';
import { LangContext } from '../App/AppProvider';

import plaquette from './plaquette.pdf';

const Description = () => {
    const langage = useContext(LangContext);
    return (
    <div className="about__description">
        <img src={photo} alt="Moi"></img>
        <p>
            {lang.about.firstparagraphe[langage.langage]}
            <b>HTML</b>, <b>CSS</b>, <b>SCSS</b>, <b>JS</b>, <b>React</b>, <b>NodeJs</b><br/>
            {lang.about.occasion[langage.langage]}
            <b>TypeScript</b>, <b>Socket.io</b>, <b>Pixi.js</b>, <b>GSAP</b>, <b>VueJs</b> {lang.about.manyothers[langage.langage]}
            <br/><br/>
            {lang.about.formation[langage.langage]}
            <b>React</b>, <b>TypeScript</b>, <b>NodeJs</b>, Les <b>méthodes Agile</b>, le <b>déploiement sur le Cloud</b>, les <b>mesures de sécurité</b>.
            <br/>
            Vous pourrez trouver la plaquette de la formation ici: <a href={plaquette} download>Plaquette Wild Code School</a>
        </p>
    </div>
)};

export default Description