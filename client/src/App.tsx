import React, {useEffect} from 'react';
import './App.css';

import {useTranslation} from 'react-i18next';

function App() {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, [])

    const lng = navigator.language;

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => handleLanguageChange("en")}>English</button>
                <button onClick={() => handleLanguageChange("es")}>Español</button>
                <button onClick={() => handleLanguageChange("pl")}>Polski</button>
                <h2>
                    {t('translations:hello_world')}
                </h2>
                <span>
          Browser Language: {lng}
        </span>
            </header>
        </div>
    );
}

export default App;
