export default function Projects() {
    const projects = [
      {
        name: 'Fitmeter',
        description: 'It is website where you can check your Body Mass Index(BMI). There is a feature where if you input your weight in KG but want it in pound, you can select pound and it will automatically convert kg into pound and vice-versa and the same feature is also available with Height.',
        githubLink: 'https://github.com/NeilSulhyan10/Fitmeter',
        liveDemo: 'https://neilsulhyan10.github.io/Fitmeter/',
      },
      {
        name: 'IBVL Bug Monitor',
        description: 'IBVL Bug Tracker is a bug management system which will be used by the IT team of Imperative. It helps in keeping tracks of bugs found in different projects and also helps in communication between a tester and a developer.',
        githubLink: 'https://github.com/NeilSulhyan10',
      },
      {
        name: 'ABM Audit Tool',
        description: 'ABM Audit Tool is a software which can be used by Chartered Accountants to have proper flow of communication between auditors and clients regarding any query which comes across auditor during audit reports and also helps Chartered Accountants by providing them facility of a creating a company audit reports and tax audit reports from start to end.',
        githubLink: 'https://github.com/NeilSulhyan10',
        liveDemo: 'https://abmaudit.in',
      },
      {
        name: 'WebMonitor',
        description: 'WebMonitor is a web application built with Spring Boot and React that tracks the status, SSL details, domain information, and server details of multiple websites. It proactively monitors website uptime and alerts users via email when a site is down, or when SSL certificates or domain registrations are nearing expiration. This ensures timely action to maintain seamless website functionality and security.',
        githubLink: 'https://github.com/NeilSulhyan10',
      },
    ];
  
    return (
      <section className="my-20">
        <h2 className="text-4xl font-bold text-center dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <div
            key={index}
            className="bg-gradient-to-r from-teal-500 to-blue-600 dark:bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg shadow-xl p-6 transition-transform transform hover:scale-105"
          >
              <h3 className="text-2xl font-semibold mb-2 text-white text-center">{project.name}</h3>
              <p className="text-white text-center mb-4">{project.description}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-500"
                >
                  <i className="fab fa-github text-3xl"></i>
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  <i className="fas fa-external-link-alt text-3xl"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  