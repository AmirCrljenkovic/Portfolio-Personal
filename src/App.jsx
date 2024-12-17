import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About'; // Importeer de About Me sectie
import Skills from './components/Skills'; // Importeer de Skills Sectie
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
                            <About /> {/* About Me Sectie */}
                            <Skills /> {/* Skills Sectie toegevoegd */}
                        </>
                    } 
                />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
};

export default App;
