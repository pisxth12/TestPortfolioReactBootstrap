import React, { useState } from "react";
import { data } from "../data/my_data";

const Contact = () => {
  const [form , setForm] = useState({name:"", email:"", subject:"", message:""})
  const [loading , setLoading] = useState(false);
  const handleChange = (e) => {
    const {name, value} =  e.target;
    setForm({...form, [name]: value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try{
      await new Promise(resolve => setTimeout(resolve, 2000));
       alert("✅ Message sent successfully! I'll get back to you soon.");
        setForm({
      name: "",
      email: "",
      subject: "",
      message: ""});
    }catch(err){
      console.error(err);
      
    }finally{
      setLoading(false);
    }
  };

  return (
    <main
      id="contact"
      className="container d-flex flex-column flex-lg-row justify-content-between align-items-center py-5"
      style={{ minHeight: "100vh" }}
    >
      <div className="contact-left col-12 col-lg-5 mb-5 mb-lg-0">
        <h1 className="display-4 fw-bold mb-4 text-center text-lg-start">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="fs-5 mb-5 text-center text-lg-start">
          Have a project in mind? Let's work together to bring your ideas to life.
          I'm just a message away!
        </p>
        
        <div className="contact-methods">
          <div className="cards mb-4">
            <div className="card-body p-4">
              <div className="d-flex align-items-center">
                <div className="bg-danger bg-opacity-10 p-3 rounded-circle me-3">
                  <i className="fa-solid fa-envelope text-danger fs-3"></i>
                </div>
                <div>
                  <h5 className="card-title mb-1">Email</h5>
                  <a 
                    href="mailto:pisoth887@gmail.com" 
                    className="card-text text-decoration-none fs-5"
                  >
                    {data.gmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phone */}
          <div className="cards mb-4">
            <div className="card-body p-4">
              <div className="d-flex align-items-center">
                <div className="bg-info bg-opacity-10 p-3 rounded-circle me-3">
                  <i className="fa-solid fa-phone text-info fs-3"></i>
                </div>
                <div>
                  <h5 className="card-title mb-1">Phone</h5>
                  <a 
                    href="tel:+855964245143" 
                    className="card-text text-decoration-none fs-5"
                  >
                    {data.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div className="cards">
            <div className="card-body p-4">
              <div className="d-flex align-items-center">
                <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
                  <i className="fa-solid fa-location-dot text-success fs-3"></i>
                </div>
                <div>
                  <h5 className="card-title mb-1">Location</h5>
                  <p className="card-text fs-5 mb-0">
                    {data.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="social-links mt-5">
          <h5 className="mb-4 text-center text-lg-start">Follow Me</h5>
          <div className="d-flex justify-content-center justify-content-lg-start gap-4">
            <a
              className="text-decoration-none"
              href={data.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook fs-2"></i>
            </a>
            <a
              className="text-decoration-none"
              href={data.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram fs-2"></i>
            </a>
            <a
              className="text-decoration-none"
              href="mailto:pisoth887@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope fs-2"></i>
            </a>
            <a
              className="text-decoration-none"
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github fs-2"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Right Side - Contact Form */}
      <div className="contact-right col-12 col-lg-6">
        <div className="cards p-4 p-lg-5">
          <h2 className="mb-4 text-center text-lg-start">Send Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-4">
              <div className="col-12 col-md-6 mb-3 mb-md-0">
                <div className="form-group">
                  <label htmlFor="name" className="form-label mb-2">
                    Your Name
                  </label>
                  <input
                  value={form.name}
                  onChange={handleChange}
                  name="name"
                    type="text"
                    id="name"
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="email" className="form-label mb-2">
                    Your Email
                  </label>
                  <input
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                    type="email"
                    id="email"
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="form-group mb-4">
              <label htmlFor="subject" className="form-label mb-2">
                Subject
              </label>
              <input
              value={form.subject}
              onChange={handleChange}
              name="subject"
                type="text"
                id="subject"
                className="form-control bg-dark text-white border-secondary"
                placeholder="What is this about?"
                required
              />
            </div>
            
            <div className="form-group mb-4">
              <label htmlFor="message" className="form-label mb-2">
                Message
              </label>
              <textarea
              value={form.message}
              onChange={handleChange}
              name="message"
                id="message"
                rows="5"
                className="form-control bg-dark text-white border-secondary"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            
            <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary btn-lg fw-bold py-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane me-2"></i>
                  Send Message
                </>
              )}
            </button>
          </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;