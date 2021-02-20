import React, { useContext } from 'react';
import { LangContext } from '../App/AppProvider';

const LangSelector = () => {
    
    const { langage, changeLang } = useContext(LangContext);

    return (
        <span>
            <button style={{fontWeight: (langage === 'fr' ? 'bold' : 'normal')}} onClick={() => changeLang("fr")}>fr</button> | 
            <button style={{fontWeight: (langage === 'en' ? 'bold' : 'normal')}} onClick={() => changeLang("en")}>en</button>
        </span>
    )
}

export default LangSelector;