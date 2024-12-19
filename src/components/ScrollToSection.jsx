import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;

        if (hash) {

            const sectionId = hash.substring(1);
            scroller.scrollTo(sectionId, {
                smooth: true,
                duration: 500,
                offset: -80,
            });
        } else if (location.pathname === "/") {

            const heroElement = document.getElementById("hero");
            if (heroElement) {
                heroElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [location]);

    return null;
};

export default ScrollToSection;
