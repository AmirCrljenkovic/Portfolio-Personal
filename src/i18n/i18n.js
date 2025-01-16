// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  nl: {
    translation: {
      nav: {
        home: "Home",
        about: "Over Mij",
        skills: "Vaardigheden",
        projects: "Projecten",
        contact: "Contact",
      },
      hero: {
        greeting: "Hallo, ik ben Amir. Een gepassioneerde Software Developer.",
        typedFront: "Front-end Developer",
        typedMid: "Onderweg naar Full-Stack Developer",
        typedDesign: "Web Designer",
        downloadCV: "Download CV",
        contactMe: "Neem contact op",
      },
      aboutMe: {
        title: "Over Mij",
        text: "Ik ben Amir Crljenkovic, 20 jaar jong en woon in Purmerend. Op dit moment focus ik me op front-end development, maar ik ga graag voor een full-stack toekomst. Naast het bouwen van interactieve webapplicaties luister ik veel muziek en verzamel ik niche parfums. Elke geur heeft z’n eigen karakter—net als iedere regel code.",
        button: "Neem Contact Op",
      },
      skills: {
        title: "Mijn Vaardigheden",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript",
        react: "React",
        tailwind: "Tailwind CSS",
        sass: "SASS",
        vite: "Vite",
        typescript: "TypeScript",
        wordpress: "WordPress",
      },
      projectsSection: {
        title: "Projecten",
        idea: "Het Idee",
        functions: "Functies",
      },
      buttonProjects: {
        label: "Bekijk Alle Projecten",
      },
      contact: {
        title: "Contact",
        name: "Naam",
        email: "E-mail",
        phone: "Telefoonnummer",
        phoneOptional: "Optioneel",
        message: "Bericht",
        send: "Verstuur",
        location: "Purmerend, Nederland",
      },
      footer: {
        rights: "© {{year}} Amir Crljenkovic. Alle rechten voorbehouden.",
      },
    },
  },

  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        greeting: "Hello, I'm Amir. A passionate Software Developer.",
        typedFront: "Front-end Developer",
        typedMid: "On my way to Full-Stack Developer",
        typedDesign: "Web Designer",
        downloadCV: "Download CV",
        contactMe: "Contact Me",
      },
      aboutMe: {
        title: "About Me",
        text: "I'm Amir Crljenkovic, 20 years old and living in Purmerend. Currently focusing on front-end development, but aiming for a full-stack future. Beyond building interactive web applications, I listen to a lot of music and collect niche fragrances. Each scent has its own character—just like every line of code.",
        button: "Contact Me",
      },
      skills: {
        title: "My Skills",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript",
        react: "React",
        tailwind: "Tailwind CSS",
        sass: "SASS",
        vite: "Vite",
        typescript: "TypeScript",
        wordpress: "WordPress",
      },
      projectsSection: {
        title: "Projects",
        idea: "The Idea",
        functions: "Features",
      },
      buttonProjects: {
        label: "View All Projects",
      },
      contact: {
        title: "Contact",
        name: "Name",
        email: "E-mail",
        phone: "Phone Number",
        phoneOptional: "Optional",
        message: "Message",
        send: "Send",
        location: "Purmerend, Netherlands",
      },
      footer: {
        rights: "© {{year}} Amir Crljenkovic. All rights reserved.",
      },
    },
  },

  de: {
    translation: {
      nav: {
        home: "Startseite",
        about: "Über mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
      },
      hero: {
        greeting: "Hallo, ich bin Amir. Ein leidenschaftlicher Softwareentwickler.",
        typedFront: "Front-end Entwickler",
        typedMid: "Auf dem Weg zum Full-Stack Entwickler",
        typedDesign: "Webdesigner",
        downloadCV: "Lebenslauf herunterladen",
        contactMe: "Kontaktiere mich",
      },
      aboutMe: {
        title: "Über mich",
        text: "Ich bin Amir Crljenkovic, 20 Jahre jung und wohne in Purmerend. Zurzeit konzentriere ich mich auf Frontend-Entwicklung, strebe aber eine Full-Stack-Zukunft an. Neben dem Erstellen interaktiver Webanwendungen höre ich viel Musik und sammle Nischendüfte. Jeder Duft hat seinen eigenen Charakter—genau wie jede Codezeile.",
        button: "Kontaktiere mich",
      },
      skills: {
        title: "Meine Fähigkeiten",
        html: "HTML",
        css: "CSS",
        javascript: "JavaScript",
        react: "React",
        tailwind: "Tailwind CSS",
        sass: "SASS",
        vite: "Vite",
        typescript: "TypeScript",
        wordpress: "WordPress",
      },
      projectsSection: {
        title: "Projekte",
        idea: "Die Idee",
        functions: "Funktionen",
      },
      buttonProjects: {
        label: "Alle Projekte ansehen",
      },
      contact: {
        title: "Kontakt",
        name: "Name",
        email: "E-Mail",
        phone: "Telefonnummer",
        phoneOptional: "Optional",
        message: "Nachricht",
        send: "Senden",
        location: "Purmerend, Niederlande",
      },
      footer: {
        rights: "© {{year}} Amir Crljenkovic. Alle Rechte vorbehalten.",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "nl", 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
