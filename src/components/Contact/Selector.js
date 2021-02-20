import React, { useState } from 'react';
import './Selector.scss';

const Selector = ({options, selectedOption, onChange}) => {
    const [isSelectorOpen, toggleSelector] = useState(false);

    return (
        <div className="selector">
            {isSelectorOpen && (
                <ul className="options">
                    {options.map((opt, index) => <li key={opt} onClick={() => {onChange(index); toggleSelector(false)}}>{opt}</li>)}
                </ul>
            )}
            <span className="option" onClick={() => toggleSelector(true)}>
                {options[selectedOption]}
            </span>
        </div>
    )
};

export default Selector;