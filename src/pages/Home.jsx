import { useEffect, useState } from "react";
import { data } from "../data/my_data";
import About from "./About";
import Skill from "./Skill";
import Freelancer from "./Freelancer";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  const occupation = data.occupation;
  const [showOccupation, setShowOccupation] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setShowOccupation(occupation.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === occupation.length) setIsDeleting(true);
      } else {
        setShowOccupation(occupation.slice(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) setIsDeleting(false);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [index, isDeleting, occupation]);

  return (
    <>
      <main
        id="home"
        className="container d-flex flex-column flex-lg-row justify-content-between align-items-center min-vh-100 py-5"
      >
        {/* Left Content */}
        <div className="left col-12 col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 text-center text-lg-start">
          <h2 className="fw-bold mb-3 mb-md-4">
            Hi, There! <span className="px-2"></span> My Name
            <span className="text-info"> Sorn Piseth</span>
          </h2>
          <h1 className="point display-4 display-md-3 display-lg-2 fw-bold mb-3 mb-md-4">
            Web {showOccupation}
          </h1>
          <p className="fs-5 fs-md-6 fs-lg-5 mb-4 mb-md-5">{data.bio}</p>
          <div className="icon mt-4 d-flex justify-content-center justify-content-lg-start gap-3 gap-md-4">
            <a
              className="text-decoration-none fs-3 fs-md-2"
              href={data.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              className="text-decoration-none fs-3 fs-md-2"
              href={data.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a
              className="text-decoration-none fs-3 fs-md-2"
              href={data.contact.email}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a
              className="text-decoration-none fs-3 fs-md-2"
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="right col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
          <div className="d-flex justify-content-center justify-content-lg-end">
            <img
              className="rounded-circle object-fit-cover my-shadow w-75 w-md-50 w-lg-75 mx-auto"
              src={data.img_developer}
              alt="Developer"
            />
          </div>
        </div>
      </main>

      {/* Other Sections */}
      <div className="container-fluid px-0">
        <About 
          img={data.profile}
          detail={data.personality.about} 
          name={data.name} 
          age={data.age}
          gender={data.gender}
          address={data.address}
          phone={data.contact.phone}
          gmail={data.gmail}
        />
        <Skill />
        <Projects/>
        <Freelancer />
        <Contact />
      </div>
    </>
  );
};

export default Home;