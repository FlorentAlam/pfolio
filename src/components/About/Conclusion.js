import React from 'react';
import { Link } from 'react-router-dom';

const Conclusion = () => (
    <h1 className="about-header">
        <span>Alors ?</span> 
        <span>On se </span>
        <span><Link to="/contact">contacte</Link> ?</span>
    </h1>
);

export default Conclusion;