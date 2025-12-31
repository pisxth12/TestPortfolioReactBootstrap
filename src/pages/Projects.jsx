import React from 'react'

const Projects = () => {
    const projects = [
    {
      icon: "fa-laptop-code",
      title: "Web Development",
      description: "Building responsive and modern websites using React, Bootstrap, and modern web technologies.",
      features: ["Frontend Development", "Responsive Design", "Performance Optimization", "Cross-browser Compatibility"]
    },
    {
      icon: "fa-mobile-screen-button",
      title: "Mobile Development",
      description: "Creating mobile applications with React Native for iOS and Android platforms.",
      features: ["React Native", "iOS & Android", "UI/UX Design", "App Store Deployment"]
    },{
      icon: "fa-mobile-screen-button",
      title: "Mobile Development",
      description: "Creating mobile applications with React Native for iOS and Android platforms.",
      features: ["React Native", "iOS & Android", "UI/UX Design", "App Store Deployment"]
    },{
      icon: "fa-mobile-screen-button",
      title: "Mobile Development",
      description: "Creating mobile applications with React Native for iOS and Android platforms.",
      features: ["React Native", "iOS & Android", "UI/UX Design", "App Store Deployment"]
    },{
      icon: "fa-mobile-screen-button",
      title: "Mobile Development",
      description: "Creating mobile applications with React Native for iOS and Android platforms.",
      features: ["React Native", "iOS & Android", "UI/UX Design", "App Store Deployment"]
    },{
      icon: "fa-mobile-screen-button",
      title: "Mobile Development",
      description: "Creating mobile applications with React Native for iOS and Android platforms.",
      features: ["React Native", "iOS & Android", "UI/UX Design", "App Store Deployment"]
    },
    ]
  return (
    <div id="projects" className='container py-5 my-5'>
        <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">
          My <span className="text-primary">projects</span> / <span className="text-info">Experience</span>
        </h1>
        <div className="line mx-auto w-50 w-md-75 w-lg-50"></div>
      </div>
      {/* projects Section */}
      <div className="row g-4 mb-5">
        {projects.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="cards h-100 d-flex flex-column p-4">
              <div className="text-center mb-4">
                <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="" />
              </div>
              <div className="mt-auto">
                <h6 className="fw-bold mb-3">Key Features:</h6>
                <ul className="list-unstyled">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="fa-solid fa-check text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
