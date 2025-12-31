const Freelancer = () => {
  const services = [
    {
      icon: "fa-laptop-code",
      title: "Web Development",
      description: "Building responsive websites using HTML, CSS, JavaScript, React, and modern web technologies.",
      features: ["Frontend Development", "Responsive Design", "Performance Optimization", "Cross-browser Compatibility"]
    },
    {
      icon: "fa-store",
      title: "Small E-commerce",
      description: "Creating simple online stores with product listings, cart functionality, and checkout systems.",
      features: ["Product Management", "Shopping Cart", "User Authentication", "Basic Payment Integration"]
    },
    {
      icon: "fa-paintbrush",
      title: "UI/UX Design",
      description: "Designing clean, user-friendly interfaces with modern design principles.",
      features: ["Wireframing", "Prototyping", "Responsive Layouts", "User-Centric Design"]
    },
    {
      icon: "fa-code",
      title: "Website Maintenance",
      description: "Updating existing websites, fixing bugs, and adding new features to keep your site running smoothly.",
      features: ["Bug Fixes", "Content Updates", "Performance Tuning", "Security Updates"]
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "Understanding your requirements and planning the project approach."
    },
    {
      step: 2,
      title: "Design & Development",
      description: "Creating the design and coding the solution with your feedback."
    },
    {
      step: 3,
      title: "Testing & Refinement",
      description: "Thorough testing and making improvements based on results."
    },
    {
      step: 4,
      title: "Launch & Support",
      description: "Deploying the project and providing post-launch support."
    }
  ];

  const skills = [
    { name: "HTML/CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "React", level: 70 },
    { name: "Bootstrap", level: 80 },
    { name: "PHP/Laravel", level: 70 },
    { name: "Git/GitHub", level: 70 }
  ];

  return (
    <main
      id="freelancer"
      className="container py-5 my-5"
    >
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">
          My <span className="text-primary">Services</span>
        </h1>
        <div className="line mx-auto w-50 w-md-75 w-lg-50"></div>
        <p className="fs-5 w-75 mx-auto">
          I specialize in building responsive websites and small e-commerce solutions. 
          Currently expanding my skills through personal projects and freelance work.
        </p>
      </div>

      {/* Services Section */}
      <div className="row g-4 mb-5">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="cards h-100 d-flex flex-column p-4">
              <div className="text-center mb-4">
                <div className="bg-primary bg-opacity-10 d-inline-flex p-3 rounded-circle mb-3">
                  <i className={`fa-solid ${service.icon} text-primary fs-2`}></i>
                </div>
                <h4 className="fw-bold mb-3">{service.title}</h4>
                <p className="mb-4">{service.description}</p>
              </div>
              <div className="mt-auto">
                <h6 className="fw-bold mb-3">What I Offer:</h6>
                <ul className="list-unstyled">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="fa-solid fa-check text-success me-2"></i>
                      <small>{feature}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

   



      {/* CTA Section */}
      <div className="text-center">
        <div className="cards p-5">
          <h2 className="fw-bold mb-3">Let's Build Something Together!</h2>
          <p className="fs-5 mb-4">
            I'm eager to take on new challenges and help bring your ideas to life. 
            Even small projects help me grow as a developer.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <a 
              href="#contact" 
              className="btn btn-primary btn-lg fw-bold px-4 py-3"
            >
              <i className="fa-solid fa-envelope me-2"></i>
              Discuss Your Project
            </a>
            <a 
              href="/cv.pdf" 
              download="SORN_PISETH_CV.pdf"
              className="btn btn-outline-primary btn-lg fw-bold px-4 py-3 text-decoration-none"
            >
              <i className="fa-solid fa-download me-2"></i>
              Download CV
            </a>
          </div>
          <p className="mt-3 text-secondary">
            <small>Perfect for: Students, Startups, Small Businesses, Personal Projects</small>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Freelancer;