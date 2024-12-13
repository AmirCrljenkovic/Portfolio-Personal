import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'; // Importeer de About Me sectie
import ContactPage from './pages/ContactPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <>
                            <Hero />
                            <About /> {/* Voeg de About Me sectie toe */}
                        </>
                    } 
                />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default App;
