import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import { useTranslation } from "react-i18next"; 
import client from "../../contentfulClient";
import Footer from "../components/Footer";

const Projectspage = () => {
  const { t, i18n } = useTranslation(); 
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchParams] = useSearchParams();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.getEntries({
          content_type: "portfolio",
        });

        const formattedProjects = response.items.map((item) => {
          const lang = i18n.language; 

          
          const descriptionField = lang === "nl"
            ? item.fields.description
            : lang === "en"
              ? item.fields.descriptionEn
              : item.fields.descriptionDe;
          const ideaField = lang === "nl"
            ? item.fields.idea
            : lang === "en"
              ? item.fields.ideaEn
              : item.fields.ideaDe;
          const functionsField = lang === "nl"
            ? item.fields.functions
            : lang === "en"
              ? item.fields.functionsEn
              : item.fields.functionsDe;

          return {
            title: item.fields.title,
            projectSlug: item.fields.projectSlug,
            languages: item.fields.languages,
            description: descriptionField,
            idea: ideaField,
            functions: functionsField,
            website: item.fields.website,
            github: item.fields.github,
            slug: item.fields.slug,
            images: item.fields.images
              ? item.fields.images.map((img) => img.fields.file.url)
              : [],
          };
        });

        setProjects(formattedProjects);

       
        const slugQuery = searchParams.get("slug");
        if (slugQuery) {
          const matchedProject = formattedProjects.find(
            (project) => project.projectSlug === slugQuery
          );
          if (matchedProject) {
            setSelectedProject(matchedProject);
          }
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [i18n.language, searchParams]); 

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#121212] text-gray-900 dark:text-white">
      {/* Pagina-titel */}
      <div className="pt-40 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          {t("projectsSection.title")}
        </h1>
      </div>

      
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#282828] rounded-lg shadow-lg cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-xl"
              onClick={() => setSelectedProject(project)}
            >
              {project.images[0] && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="rounded-t-lg w-full object-cover h-40"
                />
              )}
              <div className="p-6">
                <p className="text-sm font-semibold text-[#3C493F] dark:text-[#B3BFB8]">
                  {project.languages}
                </p>
                <h2 className="text-2xl font-bold mt-2 text-black dark:text-white">
                  {project.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto">
          <div className="bg-white dark:bg-[#282828] rounded-lg p-8 relative w-full max-w-4xl max-h-full overflow-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black dark:text-white text-4xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <Slider {...sliderSettings} className="w-full mb-6">
                {(selectedProject.images || []).map((img, idx) => (
                  <div key={idx} className="flex justify-center">
                    <img
                      src={img}
                      alt={`Slide ${idx + 1}`}
                      className="rounded-lg w-full max-h-[70vh] object-contain"
                    />
                  </div>
                ))}
              </Slider>

              <h2 className="text-3xl font-bold mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-lg font-semibold mb-2 text-[#3C493F] dark:text-[#B3BFB8]">
                {selectedProject.languages}
              </p>
              <p className="text-xl mb-6">{selectedProject.description}</p>

              <h3 className="text-2xl font-bold mb-4">
                {t("projectsSection.idea")}
              </h3>
              <p className="text-lg mb-6">{selectedProject.idea}</p>

              <h3 className="text-2xl font-bold mb-4">
                {t("projectsSection.functions")}
              </h3>
              {Array.isArray(selectedProject.functions) ? (
                <ul className="mb-6 text-lg space-y-2">
                  {selectedProject.functions.map((func, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-[#3C493F] dark:text-[#B3BFB8]">
                        •
                      </span>
                      <span>{func}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mb-6 text-lg">{selectedProject.functions}</p>
              )}

              
              <div className="flex space-x-4 mt-4">
                {selectedProject.slug && (
                  <a
                    href={`/projects/${selectedProject.slug}/index.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3C493F] dark:bg-[#B3BFB8] text-white dark:text-black px-6 py-3 rounded-lg text-lg font-bold hover:opacity-80 transition"
                  >
                    {t("buttonProjects.liveView")}
                  </a>
                )}

                {selectedProject.website && (
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3C493F] dark:bg-[#B3BFB8] text-white dark:text-black px-6 py-3 rounded-lg text-lg font-bold hover:opacity-80 transition"
                  >
                    {t("buttonProjects.website")}
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3C493F] dark:bg-[#B3BFB8] text-white dark:text-black px-6 py-3 rounded-lg text-lg font-bold hover:opacity-80 transition"
                  >
                    {t("buttonProjects.github")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projectspage;
