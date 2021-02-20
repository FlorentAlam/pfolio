import React from 'react';
import photo from '../../assets/photo_large_2.jpg';

const Description = () => (
    <div className="about__description">
        <img src={photo} alt="Photo de moi"></img>
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
            <b>HTML</b>, <b>CSS</b>, <b>SCSS</b>, <b>JS</b>, <b>React</b>, <b>NodeJs</b><br/>
            Et ai déjà eu l'occasion de pratiquer les technologies suivantes :<br/>
            <b>TypeScript</b>, <b>Socket.io</b>, <b>Pixi.js</b>, <b>GSAP</b>, <b>VueJs</b> et bien d'autres.
            <br/><br/>
            La formation aura lieu au sein de la Wild Code School pour la délivrance d'un diplôme enregistré
            au RNCP et qui est équivalent à un Bac+4.
            Les sujets suivant y seront abordés : <br/>
            <b>React</b>, <b>TypeScript</b>, <b>NodeJs</b>, Les <b>méthodes Agile</b>, le <b>déploiement sur le Cloud</b>, les <b>mesures de sécurité</b>,


        </p>
    </div>
);

export default Description