import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="pricing-page">
        <section className="hero bg-primary text-white py-5">
          <div className="container">
            <h1 className="display-4 fw-bold">Transparent Pricing</h1>
            <p className="lead">Choose the Right Plan for Your Compliance Needs</p>
          </div>
        </section>

        <section className="pricing-plans py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title text-center">Starter</h3>
                    <div className="price text-center my-4">
                      <span className="display-4 fw-bold">$10,000</span>
                      <span className="text-muted">/month</span>
                    </div>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>Up to 100 controls</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>Basic risk assessment</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>Standard reporting</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>Email support</li>
                    </ul>
                    <div className="text-center mt-4">
                      <Link to="/contact" className="btn btn-outline-primary btn-lg">Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow">
                  <div className="card-body">
                    <h3 className="card-title text-center">Professional</h3>
                    <div className="price text-center my-4">
                      <span className="display-4 fw-bold">$25,000</span>
                      <span className="text-muted">/month</span>
                    </div>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>Up to 500 controls</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>Advanced risk assessment</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>Custom reporting</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>Priority email & phone support</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>API access</li>
                    </ul>
                    <div className="text-center mt-4">
                      <Link to="/contact" className="btn btn-primary btn-lg">Get Started</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="card-title text-center">Enterprise</h3>
                    <div className="price text-center my-4">
                      <span className="h4 fw-bold">Custom Pricing</span>
                    </div>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>Unlimited controls</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>AI-powered risk prediction</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>Advanced analytics & insights</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>24/7 dedicated support</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>Custom integrations</li>
                      <li><i className="bi bi-check-circle-fill text-success me-2"></i>On-premise deployment option</li>
                    </ul>
                    <div className="text-center mt-4">
                      <Link to="/contact" className="btn btn-outline-primary btn-lg">Contact Sales</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <h4>What's included in each plan?</h4>
                <p>Each plan includes core features like control framework generation, periodic risk assessments, and reporting. Higher tiers offer more advanced features and support options.</p>
              </div>
              <div className="col-md-6">
                <h4>Can I upgrade or downgrade my plan?</h4>
                <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
              </div>
              <div className="col-md-6">
                <h4>Is there a free trial available?</h4>
                <p>We offer a 14-day free trial for our Professional plan. Contact our sales team to get started.</p>
              </div>
              <div className="col-md-6">
                <h4>Do you offer discounts for non-profits or educational institutions?</h4>
                <p>Yes, we offer special pricing for non-profits and educational institutions. Please contact our sales team for more information.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta py-5 bg-primary text-white text-center">
          <div className="container">
            <h2 className="mb-4">Ready to Streamline Your Compliance?</h2>
            <Link to="/contact" className="btn btn-light btn-lg">Start Your Free Trial</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pricing;


