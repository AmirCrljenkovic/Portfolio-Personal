import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToSection from "./components/ScrollToSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ButtonProjects from "./components/ButtonProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projectspage from "./pages/Projectspage";


const App = () => {
    return (
        <Router>
            <Header />
            <ScrollToSection />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <About id="about" />
                            <Skills id="skills" />
                            <Projects id="projects" />
                            <ButtonProjects />
                            <Contact />
                            <Footer />
                        </>
                    }
                />
                <Route path="/projects" element={<Projectspage />} />
            </Routes>
        </Router>
    );
};

export default App;
