import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ButtonProjects from './components/ButtonProjects';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import Projectspage from './pages/Projectspage'; // Zorg ervoor dat je Projectspage importeert

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
                            <About />
                            <Skills />
                            <Projects />
                            <ButtonProjects />
                            <Footer />
                        </>
                    } 
                />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/projects" element={<Projectspage />} /> {/* Voeg de projectpagina route toe */}
            </Routes>
        </Router>
    );
};

export default App;
