import React, { useState } from 'react';

export const LangContext = React.createContext('fr');

const AppProvider = (props) => {
    const [lang, updateLang] = useState('fr');

    const changeLang = (selectedLang) => {
        updateLang(selectedLang);
    }

    return (
    <LangContext.Provider value={{langage: lang, changeLang}}>
        {props.children}
    </LangContext.Provider>
)};
export default AppProvider;