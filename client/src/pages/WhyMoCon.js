import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const WhyMoCon = () => {
  return (
    <>
      <Navbar />
      <div className="why-mocon-page">
        <section className="hero bg-primary text-white py-5">
          <div className="container text-center">
            <h1 className="display-4 fw-bold">Why Choose MoCon?</h1>
            <p className="lead">Revolutionizing IT Audit and Compliance with AI-Powered Solutions</p>
          </div>
        </section>

        <section className="benefits py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4">
                  <i className="bi bi-lightning-charge display-4 text-primary mb-4"></i> {/* Increased spacing */}
                  <h3 className="card-title">Accelerated Compliance</h3>
                  <p className="card-text">Reduce compliance time by up to 70% with our AI-driven automation tools.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4">
                  <i className="bi bi-shield-check display-4 text-primary mb-4"></i>
                  <h3 className="card-title">Enhanced Assurance</h3>
                  <p className="card-text">Gain real-time insights into your risk landscape with predictive analytics.</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm text-center p-4">
                  <i className="bi bi-graph-up display-4 text-primary mb-4"></i>
                  <h3 className="card-title">Scalable Solutions</h3>
                  <p className="card-text">Our platform grows with your business, from startup to enterprise.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features py-5 bg-light text-center">
          <div className="container">
            <h2 className="text-center mb-5">Key Features</h2>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="feature-item p-4">
                  <i className="bi bi-cpu display-4 text-primary mb-4"></i>
                  <h4>AI-Powered Automation</h4>
                  <p>Leverage machine learning algorithms to automate risk and control frameworks</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="feature-item p-4">
                  <i className="bi bi-diagram-3 display-4 text-primary mb-4"></i>
                  <h4>Integrated GRC Platform</h4>
                  <p>Manage enterprise risk and compliance in one unified platform for seamless operations.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="feature-item p-4">
                  <i className="bi bi-file-earmark-text display-4 text-primary mb-4"></i>
                  <h4>Customizable Reporting</h4>
                  <p>Generate comprehensive reports tailored to your specific compliance and stakeholder needs.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="feature-item p-4">
                  <i className="bi bi-people display-4 text-primary mb-4"></i>
                  <h4>Collaborative Workflows</h4>
                  <p>Streamline team communication and task management for efficient audit processes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta py-5 bg-primary text-white text-center">
          <div className="container">
            <h2 className="mb-4">Ready to Transform Your Compliance Strategy?</h2>
            <Link to="/pricing" className="btn btn-light btn-lg">
              Get Started Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyMoCon;


