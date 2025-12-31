import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const links = [
  { label: "Home", path: "/#home", id: "home" },
  { label: "About", path: "/#about", id: "about" },
  { label: "Skill", path: "/#skill", id: "skill" },
  { label: "Freelancer", path: "/#freelancer", id: "freelancer" },
  { label: "Contact", path: "/#contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="navbar my-nav position-sticky top-0 border-bottom border-body">
      <div className="container-fluid ">
       
        {/* Mobile Menu Button */}
        <div className="d-flex  w-100 justify-content-between align-items-center d-lg-none px-3">
          <h3>Sorn Piseth</h3>
          <button
          className="navbar-toggler  ms-auto border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <i className={`fa-solid fa-${isOpen ? "xmark" : "bars"} text-white fs-4`}></i>
        </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="list-unstyled d-none d-lg-flex justify-content-center align-items-center w-100 my-2">
          {links.map((link) => (
            <li key={link.id} className="px-3">
              <HashLink
                to={link.path}
                scroll={(el) => window.scrollTo(0, el.offsetTop - 70)}
                className={`text-white text-decoration-none my-link fs-5 ${
                  activeLink === link.id ? "active-link" : ""
                }`}
                onClick={() => setActiveLink(link.id)}
              >
                {link.label}
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="d-lg-none position-absolute top-100 start-0 w-100 bg-dark bg-opacity-95 my-nav">
            <ul className="list-unstyled text-center py-3">
              {links.map((link) => (
                <li key={link.id} className="py-2">
                  <HashLink
                    to={link.path}
                    scroll={(el) => window.scrollTo(0, el.offsetTop - 70)}
                    className={`text-white text-decoration-none fs-4 ${
                      activeLink === link.id ? "active-link" : ""
                    }`}
                    onClick={() => {
                      setActiveLink(link.id);
                      setIsOpen(false);
                    }}
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;