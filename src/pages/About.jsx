const About = ({ img, detail, name, age, gender, address, phone, gmail }) => {
  return (
    <main
      id="about"
      className="container d-flex flex-column flex-lg-row justify-content-between align-items-center py-5"
      style={{ minHeight: "100vh" }}
    >
      {/* Image Section with animation */}
      <div className="about-left w-100 w-lg-40 mb-5 mb-lg-0">
        <div className="spin d-flex justify-content-center">
          <img 
            className="my-shadow rounded-5 w-100 w-md-50 w-lg-100 my-img" 
            src={img} 
            alt={`${name}'s profile`} 
          />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="about-right w-100 w-lg-60 ps-lg-5">
        <h1 className="text-center text-lg-start display-4 fw-bold mb-4 position-relative">
          About Me
        </h1>
        <p className="fs-5 text-center text-lg-start mb-5">{detail}</p>
        
        {/* Personal Info Cards - Dark Theme */}
        <div className="row g-4">
          {/* Name Card */}
          <div className="col-12 col-md-6">
            <div className="cards h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fa-solid fa-user text-primary fs-4"></i>
                  </div>
                  <h5 className="card-title mb-0">Name</h5>
                </div>
                <p className="card-text fs-5 fw-medium">{name}</p>
              </div>
            </div>
          </div>
          
          {/* Age Card */}
          <div className="col-12 col-md-6">
            <div className="cards h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-info bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fa-solid fa-cake-candles text-info fs-4"></i>
                  </div>
                  <h5 className="card-title mb-0">Age</h5>
                </div>
                <p className="card-text fs-5 fw-medium">{age} years</p>
              </div>
            </div>
          </div>
          
          {/* Gender Card */}
          <div className="col-12 col-md-6">
            <div className="cards h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-warning bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fa-solid fa-venus-mars text-warning fs-4"></i>
                  </div>
                  <h5 className="card-title mb-0">Gender</h5>
                </div>
                <p className="card-text fs-5 fw-medium">{gender}</p>
              </div>
            </div>
          </div>
          
          {/* Address Card */}
          <div className="col-12 col-md-6">
            <div className="cards h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fa-solid fa-location-dot text-success fs-4"></i>
                  </div>
                  <h5 className="card-title mb-0">Location</h5>
                </div>
                <p className="card-text fs-5 fw-medium">{address}</p>
              </div>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="col-12 col-md-6">
            <div className="cards h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-danger bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fa-solid fa-phone text-danger fs-4"></i>
                  </div>
                  <h5 className="card-title mb-0">Contact</h5>
                </div>
                <a href={`tel:${phone}`} className="card-text fs-5 fw-medium text-decoration-none text-white">
                  {phone}
                </a>
              </div>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="col-12 col-md-6">
            <div className="cards h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-secondary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="fa-solid fa-envelope text-secondary fs-4"></i>
                  </div>
                  <h5 className="card-title mb-0">Email</h5>
                </div>
                <a href={`mailto:${gmail}`} className="card-text fs-5 fw-medium text-decoration-none text-white">
                  {gmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;