const Freelancer = () => {
  const services = [
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
    },
    {
      icon: "fa-paintbrush",
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces with modern design principles and user experience focus.",
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"]
    },
    {
      icon: "fa-database",
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, Express, and database management.",
      features: ["API Development", "Database Design", "Authentication", "Server Deployment"]
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO at TechCorp",
      text: "Excellent work! Delivered exactly what we needed ahead of schedule.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      text: "Professional and talented developer. Will definitely work with again!",
      rating: 5
    },
    {
      name: "Michael Brown",
      role: "Startup Founder",
      text: "Transformed our idea into a beautiful, functional website. Highly recommended!",
      rating: 4
    }
  ];

  return (
    <main
      id="freelancer"
      className="container py-5 my-5"
    >
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">
          Freelance <span className="text-primary">Services</span>
        </h1>
        <div className="line mx-auto w-50 w-md-75 w-lg-50"></div>

        <p className="fs-5 w-75 mx-auto">
          I offer professional freelance services to help bring your digital ideas to life.
          From concept to deployment, I ensure high-quality results.
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

      {/* Why Choose Me & Process */}
      <div className="row g-4 mb-5">
        <div className="col-12 col-lg-6">
          <div className="cards p-4 h-100">
            <h3 className="fw-bold mb-4">
              Why <span className="text-primary">Choose Me?</span>
            </h3>
            <div className="d-flex align-items-start mb-3">
              <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                <i className="fa-solid fa-clock text-success"></i>
              </div>
              <div>
                <h5 className="fw-bold">On-Time Delivery</h5>
                <p>I respect deadlines and ensure timely project completion.</p>
              </div>
            </div>
            <div className="d-flex align-items-start mb-3">
              <div className="bg-info bg-opacity-10 p-2 rounded-circle me-3">
                <i className="fa-solid fa-headset text-info"></i>
              </div>
              <div>
                <h5 className="fw-bold">24/7 Support</h5>
                <p>Continuous communication and support throughout the project.</p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <div className="bg-warning bg-opacity-10 p-2 rounded-circle me-3">
                <i className="fa-solid fa-medal text-warning"></i>
              </div>
              <div>
                <h5 className="fw-bold">Quality Assurance</h5>
                <p>Rigorous testing and quality checks before delivery.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="cards p-4 h-100">
            <h3 className="fw-bold mb-4">
              My <span className="text-primary">Process</span>
            </h3>
            <div className="process-step mb-4">
              <div className="d-flex align-items-center mb-2">
                <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: "30px", height: "30px" }}>1</span>
                <h5 className="mb-0 fw-bold">Consultation</h5>
              </div>
              <p>Understanding your requirements and project goals.</p>
            </div>
            <div className="process-step mb-4">
              <div className="d-flex align-items-center mb-2">
                <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: "30px", height: "30px" }}>2</span>
                <h5 className="mb-0 fw-bold">Planning</h5>
              </div>
              <p>Creating project timeline and detailed specifications.</p>
            </div>
            <div className="process-step mb-4">
              <div className="d-flex align-items-center mb-2">
                <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: "30px", height: "30px" }}>3</span>
                <h5 className="mb-0 fw-bold">Development</h5>
              </div>
              <p>Coding and implementing the solution with regular updates.</p>
            </div>
            <div className="process-step">
              <div className="d-flex align-items-center mb-2">
                <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                      style={{ width: "30px", height: "30px" }}>4</span>
                <h5 className="mb-0 fw-bold">Delivery</h5>
              </div>
              <p>Final testing, deployment, and project handover.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="mb-5">
        <h2 className="text-center fw-bold mb-4">
          Client <span className="text-primary">Testimonials</span>
        </h2>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="cards h-100 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" 
                       style={{ width: "50px", height: "50px" }}>
                    <i className="fa-solid fa-user text-primary"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0">{testimonial.name}</h5>
                    <p className="text-muted mb-0">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mb-3">"{testimonial.text}"</p>
                <div className="text-warning">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <i key={i} className="fa-regular fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="text-center">
        <div className="cards p-5">
          <h2 className="fw-bold mb-3">Ready to Start Your Project?</h2>
          <p className="fs-5 mb-4">Let's discuss your ideas and create something amazing together!</p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <a 
              href="#contact" 
              className="btn btn-primary btn-lg fw-bold px-4 py-3"
            >
              <i className="fa-solid fa-envelope me-2"></i>
              Contact Me Now
            </a>
            <button  className="btn btn-outline-primary btn-lg fw-bold px-4 py-3">
              <i className="fa-solid fa-download me-2"></i>
              Download CV
              <a download={``} href=""></a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Freelancer;