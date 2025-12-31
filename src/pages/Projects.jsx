import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with cart, payment, and admin panel",
      languages: ["React", "Php", "Laravel", "Tailwind CSS"],
      image: "./sakcoffee.png"
    },
    {
      title: "KDMV",
      description: "Clone UI from KDMV",
      languages: ["React", "Tailwind CSS", "JavaScript"],
      image: "/kdmv.png"
    },
    {
      title: "Shoot",
      description: "Clone UI from Shoot",
      languages: ["React", "Spring Boot", "PostgreSQL"],
      image: "/shoot.png"
    },
    {
      title: "Chipmong",
      description: "While leaning tailwind",
      languages: ["HTML", "CSS", "Tailwind CSS"],
      image: "/chipmong.png"
    },
    {
      title: "egyptTour",
      description: "Just small project while learning Javascrip",
      languages: ["HTML", "CSS", "JavaScript"],
      image: "/egyptTour.png"
    },
    {
      title: "Aviato",
      description: "Clone UI from Aviato using laravel blade",
      languages: ["Laravel Blade", "Bootstrap", "Mysql"],
      image: "/aviato.png"
    },
   
  ];

  return (
    <div id="projects" className='container py-5 my-5'>
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">
          My <span className="text-primary">Projects</span>
        </h1>
        <p className="fs-5 text-muted w-75 mx-auto">
          Here are some of my recent projects showcasing my skills.
        </p>
        <div className="line mx-auto w-50 w-md-75 w-lg-50 mb-4"></div>
      </div>

   
      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="cards h-100 d-flex flex-column overflow-hidden position-relative p-3">
              <div className="overflow-hidden rounded-3 mb-3">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-100"
                  style={{ 
                    height: "180px", 
                    objectFit: "cover"
                  }}
                />
              </div>

              <div className="d-flex flex-column flex-grow-1">
                <h5 className="fw-bold mb-2">{project.title}</h5>
                
                <p className=" mb-3 flex-grow-1 card_description">
                  {project.description}
                </p>

                <div>
                  <div className="d-flex flex-wrap gap-2">
                    {project.languages.map((lang, idx) => (
                      <span 
                        key={idx} 
                        className="badge bg-dark bg-opacity-50 border border-secondary"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="position-absolute top-0 start-0 w-100 h-100 opacity-0 hover-opacity-100 transition-all duration-300 pointer-events-none border border-primary rounded-3"></div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-5">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-outline-primary btn-lg px-4"
        >
          <i className="fa-brands fa-github me-2"></i>
          View More Projects
        </a>
      </div>
    </div>
  )
}

export default Projects

