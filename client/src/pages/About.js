import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <section className="hero bg-primary text-white py-5">
          <div className="container">
            <h1 className="display-4 fw-bold">About MoCon</h1>
            <p className="lead">Revolutionizing financial controls with AI-powered automation.</p>
          </div>
        </section>

        <section className="our-story py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="mb-4">Our Story</h2>
                <p>
                  MoCon was established in 2025 by a seasoned financial risk consultant and former IT audit professional.
                  After a decade of guiding companies through financial statement audits and developing robust control frameworks,
                  he recognized the potential of LLMs and AI to streamline audit processes, mitigate financial controls risk, and foster sustainability.
                  His innovative solution gave rise to Modern Controls – MoCon.
                </p>
                <p>
                  Soon, MoCon will be trusted by companies worldwide, from startups to Fortune 500 enterprises,
                  to streamline their financial statement audits and compliance efforts and reduce 2nd line of defense efforts.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/MoconLogoUse.png`} 
                  height="300" 
                  width="300" 
                  alt="MoCon Logo" 
                  className="img-fluid rounded shadow" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Adjusted Background for Readability */}
        <section className="our-values py-5 bg-dark text-white">
          <div className="container">
            <h2 className="text-center mb-5">Our Values</h2>
            <div className="row g-4">
              {[
                { icon: "bi-lightbulb", title: "Innovation", text: "We push the boundaries of GRC technology." },
                { icon: "bi-shield-check", title: "Integrity", text: "We uphold the highest standards of ethics." },
                { icon: "bi-people", title: "Customer-Centric", text: "Our customers' success is our top priority." },
              ].map((value, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm bg-light text-dark">
                    <div className="card-body text-center">
                      <i className={`bi ${value.icon} display-4 text-primary mb-3`}></i>
                      <h3 className="card-title">{value.title}</h3>
                      <p className="card-text">{value.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team py-5">
          <div className="container">
            <h2 className="text-center mb-5">Meet Our Leadership</h2>
            <div className="row g-4">
              {[
                { name: "A Wyer", role: "CEO & Founder", img: `${process.env.PUBLIC_URL}/images/Wyer_About.png` },
                { name: "Fable", role: "Chief Technology Officer", img: `${process.env.PUBLIC_URL}/images/Fable_About.png` },
                { name: "Benson", role: "Chief Compliance Officer", img: `${process.env.PUBLIC_URL}/images/Benson_About.png` },
              ].map((leader, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <img src={leader.img} height="300" width="300" alt={leader.name} className="card-img-top" />
                    <div className="card-body text-center">
                      <h3 className="card-title">{leader.name}</h3>
                      <p className="card-text">{leader.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta py-5 bg-primary text-white text-center">
          <div className="container">
            <h2 className="mb-4">Ready to Join the MoCon Family?</h2>
            <Link to="/contact" className="btn btn-light btn-lg">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
