import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const UseCases = () => {
  return (
    <>
      <Navbar />
      <div className="use-cases-page">
        <section className="hero bg-primary text-white py-5">
          <div className="container text-center">
            <h1 className="display-4 fw-bold">MoCon Use Cases</h1>
            <p className="lead">Discover How MoCon Transforms Audit and Compliance Across Industries</p>
          </div>
        </section>

        <section className="case-studies py-5">
          <div className="container">
            <div className="row g-4">
              {[
                {
                  icon: "bi-bank",
                  title: "Financial Services",
                  description:
                    "A leading bank reduced audit time by 50% and improved risk detection by 30% using MoCon's AI-driven compliance tools.",
                  link: "/case-study/financial-services",
                },
                {
                  icon: "bi-file-medical", 
                  title: "Healthcare",
                  description:
                    "A healthcare provider achieved post-IPO SOX compliance 60% faster with MoCon's framework generator and integrated GRC platform.",
                  link: "/case-study/healthcare",
                },
                {
                  icon: "bi-shop",
                  title: "Retail",
                  description:
                    "A global retailer streamlined controls compliance across 15+ business processes, cutting audit costs by 35% using MoCon's scalable solutions.",
                  link: "/case-study/retail",
                },
                {
                  icon: "bi-cpu",
                  title: "Technology",
                  description:
                    "A fast-growing SaaS company prepared for SOC 2 certification in half the expected time, accelerating their go-to-market strategy.",
                  link: "/case-study/technology",
                },
              ].map((caseStudy, index) => (
                <div key={index} className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm text-center p-4">
                    <i className={`bi ${caseStudy.icon} display-4 text-primary mb-4`}></i>
                    <h3 className="card-title">{caseStudy.title}</h3>
                    <p className="card-text">{caseStudy.description}</p>
                    <Link to={caseStudy.link} className="btn btn-outline-primary">
                      Read Case Study
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial bg-dark text-white py-5">
          <div className="container">
            <h2 className="text-center mb-5">What Our Clients Say</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <blockquote className="blockquote text-center">
                  <p className="mb-3">
                    "MoCon has revolutionized our approach to SOX compliance. We've cut our audit preparation time in half and have a much clearer view of our risk landscape."
                  </p>
                  <footer className="blockquote-footer mt-3 text-white-50">
                    Silly Boy, CIO at <cite title="Source Title">Tech Innovators Inc.</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="cta py-5 bg-primary text-white text-center">
          <div className="container">
            <h2 className="mb-4">Ready to See MoCon in Action?</h2>
            <Link to="/contact" className="btn btn-light btn-lg">
              Request a Demo
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default UseCases;
