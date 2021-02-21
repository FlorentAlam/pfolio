import sokoban from '../../assets/sokoban.jpg';
import weello from '../../assets/weello.jpg';
import argonautes from '../../assets/argonaute.jpg';

export const projects = [
    {
        name: "sokoban", 
        img: sokoban, 
        techs: ["Typescript", "Pixi.js", "Socket.io", "NodeJs", "Express"],
        url: "https://soko-ban.herokuapp.com/",
        github: "https://github.com/FlorentAlam/soko-ban"
    },
    {
        name: "weello", 
        img: weello, 
        techs: ["React", "Redux", "LocalStorage"],
        url: "https://florentalam.github.io/weello/",
        github: "https://github.com/FlorentAlam/weello"
    },
    {
        name: "argonautes", 
        img: argonautes, 
        techs: ["JS", "Node.js", "Express", "Firebase"],
        url: "https://les-argonautes-wild.herokuapp.com/",
        github: "https://github.com/FlorentAlam/Les-argonautes"
    }
]