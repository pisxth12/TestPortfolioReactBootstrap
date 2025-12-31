import { useState } from "react";
import { skills } from "../data/skill_experance";

const Skill = () => {
  const [selected, setSelected] = useState("");

  const handleClick = (name) => {
    setSelected(name);
  };

  const clearSelected = (e) => {
    e.stopPropagation();
    setSelected("");
  };

  return (
    <main id="skill" className="container py-5 my-5" style={{ minHeight: "100vh" }}>
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">
          My <span className="text-primary">Skills</span> / <span className="text-info">Experience</span>
        </h1>
        <div className="line mx-auto w-50 w-md-75 w-lg-50"></div>
      </div>

      {/* Skills Grid */}
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3 g-md-4">
        {skills.map((s) => (
          <div 
            className="col" 
            key={s.name}
          >
            <article
              onClick={() => handleClick(s.name)}
              className="cards d-flex flex-column align-items-center justify-content-center h-100 p-3 p-md-4 position-relative"
            >
              {/* Skill Logo */}
              <img 
                className="logo w-75 w-md-100 mb-3 mb-md-4" 
                src={s.img} 
                alt={s.name} 
                style={{ maxWidth: "80px", height: "80px", objectFit: "contain" }}
              />
              
              {/* Skill Name */}
              <h5 className="text-center mb-2 mb-md-3 fs-6 fs-md-5 fw-bold">{s.name}</h5>
              
              {/* Skill Level & Experience */}
              <div className="d-flex flex-column align-items-center w-100 mt-auto">
                <div className="w-100 mb-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-info fw-bold fs-6">Level:</span>
                    <span className="text-warning fw-bold fs-6">{s.level}</span>
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold fs-6">{s.experience}</span>
                  </div>
                </div>
              </div>

              {/* Description Overlay */}
              {selected === s.name && (
                <div className="descript position-absolute top-0 start-0 w-100 h-100">
                  <button 
                    onClick={(e) => clearSelected(e)} 
                    className="close-btn"
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </button>
                  <h6 className="mb-3 fw-bold">{s.name}</h6>
                  <p className="mb-0 fs-6">{s.description}</p>
                </div>
              )}
            </article>
          </div>
        ))}
      </div>

      {/* Legend / Info */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="cards p-4">
            <div className="row text-center">
              <div className="col-6 col-md-3 mb-3 mb-md-0">
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <div className="bg-info rounded-circle" style={{ width: "10px", height: "10px" }}></div>
                  <span className="fs-6">Beginner: 1-2 years</span>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-3 mb-md-0">
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <div className="bg-warning rounded-circle" style={{ width: "10px", height: "10px" }}></div>
                  <span className="fs-6">Intermediate: 2-3 years</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <div className="bg-success rounded-circle" style={{ width: "10px", height: "10px" }}></div>
                  <span className="fs-6">Advanced: 3-5 years</span>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="d-flex align-items-center justify-content-center gap-2">
                  <div className="bg-danger rounded-circle" style={{ width: "10px", height: "10px" }}></div>
                  <span className="fs-6">Expert: 5+ years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skill;