import React, {useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import Home from "../src/pages/Home";
import Todo from "../src/pages/Todo";
import Navbar from "./components/Navbar";

import {useTranslation} from 'react-i18next';

function App() {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, [])

    const lng = navigator.language;

    return (
        <>
            <Navbar lng={lng} i18n={i18n} t={t}/>
            <Container className="mb-4">
                <Routes>
                    <Route path="/" element={<Home t={t}/>}/>
                    <Route path="/todo" element={<Todo t={t}/>}/>
                </Routes>
            </Container>
        </>

    );
}

export default App;
