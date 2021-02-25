import React from 'react';
import { Link } from 'react-router-dom';
import './404.scss';

const QuatreCentQuatre = () => (
    <main className="page notfoundPage">
        <p>Il semblerais que vous ne soyiez pas au bon endroit</p>
        <p>Et si on retournais à l'<Link to="/">accueil</Link> ?</p>
    </main>
);

export default QuatreCentQuatre;