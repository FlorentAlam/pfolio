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
            
            <div>
                <div>
                    <img src={photo} alt="Photo de moi"></img>
                    <h2>ça c'est moi</h2>
                </div>
                <p>
                    Depuis 10 ans maintenant j'ai occupé divers postes dans la vente, que ce soit en tant que
                    vendeur ou en tant que manager.<br/>
                    J'opère maintenant à un changement dans ma carrière, pour devenir Concepteur Développeur
                    d'Application.<br/>
                    C'est pour ça que je recherche un poste en contrat de professionalisation, à partir du 12 Avril 
                    et pour une durée d'un an.
                    <br/>
                    <br/>
                    Ceci dis je n'ai pas attendu pour me former, je suis donc complètement opérationnel avec les 
                    technologies suivantes :<br/>
                    HTML, CSS, SCSS, JS, React, NodeJs<br/>
                    Et ai déjà eu l'occasion de pratiquer les technologies suivantes :<br/>
                    Typescript, Socket.io, Pixi.js, GSAP, VueJs et bien d'autres.
                    <br/><br/>
                    La formation aura lieu au sein de la Wild Code School pour la délivrance d'un diplôme enregistré
                    au RNCP et qui est équivalent à un Bac+4.
                    Les sujets suivant y seront abordés : <br/>
                    <b>React</b>, <b>TypeScript</b>, NodeJs, Les méthodes Agile, le déploiement sur le Cloud, les mesures de sécurité,


                </p>
            </div>
            <h1>Alors ?<br/> Qu'est ce que vous attendez ?</h1>
        </main>
    )
};

export default About;