import { useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const autoplayConfig = useMemo(() => ({
    delay: isMobile ? 4000 : 2000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  }), [isMobile]);

  const projects = [
    {
      name: "Fitmeter",
      description:
        "It is website where you can check your Body Mass Index(BMI). There is a feature where if you input your weight in KG but want it in pound, you can select pound and it will automatically convert kg into pound and vice-versa and the same feature is also available with Height.",
      githubLink: "https://github.com/NeilSulhyan10/Fitmeter",
      liveDemo: "https://neilsulhyan10.github.io/Fitmeter/",
    },
    {
      name: "IBVL Bug Monitor",
      description:
        "IBVL Bug Tracker is a bug management system which will be used by the IT team of Imperative. It helps in keeping tracks of bugs found in different projects and also helps in communication between a tester and a developer.",
      githubLink: "https://github.com/NeilSulhyan10",
    },
    {
      name: "ABM Audit Tool",
      description:
        "ABM Audit Tool is a software which can be used by Chartered Accountants to have proper flow of communication between auditors and clients regarding any query which comes across auditor during audit reports and also helps Chartered Accountants by providing them facility of a creating a company audit reports and tax audit reports from start to end.",
      githubLink: "https://github.com/NeilSulhyan10",
      liveDemo: "https://abmaudit.in",
    },
    {
      name: "WebMonitor",
      description:
        "WebMonitor is a web application built with Spring Boot and React that tracks the status, SSL details, domain information, and server details of multiple websites. It proactively monitors website uptime and alerts users via email when a site is down, or when SSL certificates or domain registrations are nearing expiration. This ensures timely action to maintain seamless website functionality and security.",
      githubLink: "https://github.com/NeilSulhyan10",
    },
    {
      name: "Vardaan",
      description:
        "Vardaan is a community development platform created with Zilla Parishad Sangli to promote inclusive growth in rural areas. As the frontend developer, I built a responsive interface using React and Tailwind CSS. The platform manages CSR initiatives in education, healthcare, livelihood, infrastructure, and sustainability, facilitating communication between stakeholders, local communities, and government bodies to empower rural society.",
      githubLink: "https://github.com/NeilSulhyan10",
      liveDemo: "https://zpsanglivardaan.in/",
    },
  ];

  return (
    <section className="my-20">
      <h2 className="text-4xl font-bold text-center dark:text-white mb-10">
        Projects
      </h2>
      <div className="overflow-x-hidden scrollbar-hide">
        <div className="flex space-x-6 px-4 snap-x snap-mandatory">
          <Swiper
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            navigation={true}
            spaceBetween={30}
            loop={true}
            autoplay={autoplayConfig}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="snap-start bg-gradient-to-r from-teal-500 to-blue-600 dark:bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-xl p-6 w-80 h-[350px] 2xl:w-[40rem] flex flex-col justify-between flex-shrink-0 ml-8">
                  <h3 className="text-3xl font-semibold mb-2 text-white">
                    {project.name}
                  </h3>
                  <p className="text-white text-sm mb-4 flex-grow overflow-hidden line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500"
                      aria-label="GitHub repository"
                    >
                      <i className="fab fa-github text-3xl"></i>
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400"
                        aria-label="Live demo"
                      >
                        <i className="fas fa-external-link-alt text-3xl"></i>
                      </a>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
