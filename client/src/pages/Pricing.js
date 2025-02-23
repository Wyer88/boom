import { Link } from "react-router-dom"
import { useState } from "react"
import Navbar from "../components/Navbar"

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const pricingTiers = [
    {
      name: "Starter",
      price: isAnnual ? 8000 : 10000,
      features: [
        "Up to 100 controls",
        "Basic risk assessment",
        "Standard reporting",
        "Email support",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline-primary",
    },
    {
      name: "Professional",
      price: isAnnual ? 20000 : 25000,
      popular: true,
      features: [
        "Up to 500 controls",
        "Advanced risk assessment",
        "Custom reporting",
        "Priority email & phone support",
        "API access",
      ],
      buttonText: "Get Started",
      buttonVariant: "primary",
    },
    {
      name: "Enterprise",
      price: null,
      features: [
        "Unlimited controls",
        "AI-powered risk prediction",
        "Advanced analytics & insights",
        "24/7 dedicated support",
        "Custom integrations",
        "On-premise deployment option",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline-primary",
    },
  ]

  const faqs = [
    {
      question: "What's included in each plan?",
      answer:
        "Each plan includes core features like control framework generation, periodic risk assessments, and reporting. Higher tiers offer more advanced features and support options.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "We offer a 14-day free trial for our Professional plan. Contact our sales team to get started.",
    },
    {
      question: "Do you offer discounts for non-profits or educational institutions?",
      answer:
        "Yes, we offer special pricing for non-profits and educational institutions. Please contact our sales team for more information.",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="pricing-page">
        <section className="hero bg-primary text-white py-5">
          <div className="container text-center">
            <h1 className="display-4 fw-bold mb-4">Transparent Pricing</h1>
            <p className="lead mb-5">Choose the Right Plan for Your Compliance Needs</p>
            
            {/* Pricing Toggle */}
            <div className="pricing-toggle d-inline-flex align-items-center gap-3 bg-black/20 p-2 rounded-pill">
              <span className={`cursor-pointer ${!isAnnual ? 'text-white' : 'text-white/60'}`} 
                    onClick={() => setIsAnnual(false)}>
                Monthly
              </span>
              <div className="form-check form-switch mb-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="pricingToggle"
                  checked={isAnnual}
                  onChange={(e) => setIsAnnual(e.target.checked)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <span className={`cursor-pointer ${isAnnual ? 'text-white' : 'text-white/60'}`} 
                    onClick={() => setIsAnnual(true)}>
                Annual (20% off)
              </span>
            </div>
          </div>
        </section>

        <section className="pricing-plans py-5">
          <div className="container">
            <div className="row g-4">
              {pricingTiers.map((tier, index) => (
                <div key={index} className="col-md-4">
                  <div 
                    className={`card h-100 border-0 shadow-sm transition-all duration-300 hover:transform hover:scale-105 ${
                      tier.popular ? 'shadow-lg border-primary' : ''
                    }`}
                  >
                    {tier.popular && (
                      <div 
                        className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary px-3 py-2"
                        style={{ marginTop: '-10px' }}
                      >
                        Most Popular
                      </div>
                    )}
                    <div className="card-body">
                      <h3 className="card-title text-center">{tier.name}</h3>
                      <div className="price text-center my-4">
                        {tier.price ? (
                          <>
                            <span className="display-4 fw-bold">${tier.price.toLocaleString()}</span>
                            <span className="text-muted">/{isAnnual ? 'year' : 'month'}</span>
                          </>
                        ) : (
                          <span className="h4 fw-bold">Custom Pricing</span>
                        )}
                      </div>
                      <ul className="list-unstyled">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="mb-2">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="text-center mt-4">
                        <Link
                          to="/contact"
                          className={`btn btn-${tier.buttonVariant} btn-lg px-4 py-2 rounded-pill`}
                        >
                          {tier.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq py-5" style={{ background: 'linear-gradient(to bottom, #f8f9fa, #fff)' }}>
          <div className="container">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <div className="row g-4 justify-content-center">
              {faqs.map((faq, index) => (
                <div key={index} className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 hover:shadow-md transition-all duration-300">
                    <div className="card-body">
                      <h4 className="card-title h5 mb-3">
                        <i className="bi bi-question-circle text-primary me-2"></i>
                        {faq.question}
                      </h4>
                      <p className="card-text text-muted mb-0">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta py-5 bg-primary text-white text-center">
          <div className="container">
            <h2 className="mb-4">Ready to Streamline Your Compliance?</h2>
            <p className="lead mb-4">Join thousands of companies already using MoCon</p>
            <Link 
              to="/contact" 
              className="btn btn-light btn-lg px-5 py-3 rounded-pill hover:transform hover:scale-105 transition-all duration-300"
            >
              Start Your Free Trial
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        .pricing-toggle .form-check-input:checked {
          background-color: #64ffda;
          border-color: #64ffda;
        }
        
        .card {
          transition: all 0.3s ease;
        }
        
        .card:hover {
          transform: translateY(-5px);
        }

        .badge {
          z-index: 1;
        }

        .cursor-pointer {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Pricing