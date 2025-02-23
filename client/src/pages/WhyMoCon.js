import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

const WhyMoCon = () => {
  const [animatedStats, setAnimatedStats] = useState(false)

  const benefits = [
    {
      icon: "bi-lightning-charge",
      title: "Accelerated Compliance",
      description: "Reduce compliance time by up to 70% with our AI-driven automation tools.",
      stats: "70%",
      statsLabel: "Faster Compliance",
    },
    {
      icon: "bi-shield-check",
      title: "Enhanced Assurance",
      description: "Gain real-time insights into your risk landscape with predictive analytics.",
      stats: "99.9%",
      statsLabel: "Accuracy Rate",
    },
    {
      icon: "bi-graph-up",
      title: "Scalable Solutions",
      description: "Our platform grows with your business, from startup to enterprise.",
      stats: "3x",
      statsLabel: "Faster Growth",
    },
  ]

  const features = [
    {
      icon: "bi-cpu",
      title: "AI-Powered Automation",
      description: "Leverage machine learning algorithms to automate risk and control frameworks",
      details: [
        "Automated control testing",
        "Real-time risk assessment",
        "Predictive analytics",
        "Smart documentation",
      ],
    },
    {
      icon: "bi-diagram-3",
      title: "Integrated GRC Platform",
      description: "Manage enterprise risk and compliance in one unified platform for seamless operations.",
      details: [
        "Centralized dashboard",
        "Custom workflows",
        "Role-based access",
        "Audit trail",
      ],
    },
    {
      icon: "bi-file-earmark-text",
      title: "Customizable Reporting",
      description: "Generate comprehensive reports tailored to your specific compliance and stakeholder needs.",
      details: [
        "Dynamic templates",
        "Real-time updates",
        "Export options",
        "Stakeholder views",
      ],
    },
    {
      icon: "bi-people",
      title: "Collaborative Workflows",
      description: "Streamline team communication and task management for efficient audit processes.",
      details: [
        "Team coordination",
        "Task automation",
        "Progress tracking",
        "Resource allocation",
      ],
    },
  ]

  const comparisonPoints = [
    {
      feature: "AI-Powered Automation",
      mocon: true,
      others: "Limited",
    },
    {
      feature: "Real-time Risk Assessment",
      mocon: true,
      others: "Delayed",
    },
    {
      feature: "Custom Workflows",
      mocon: true,
      others: "Basic",
    },
    {
      feature: "Integration Capabilities",
      mocon: true,
      others: "Limited",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.querySelector(".benefits")
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setAnimatedStats(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <div className="why-mocon-page">
        <section className="hero bg-primary text-white py-5">
          <div className="container text-center">
            <h1 className="display-4 fw-bold mb-4">Why Choose MoCon?</h1>
            <p className="lead mb-5">Revolutionizing IT Audit and Compliance with AI-Powered Solutions</p>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="d-flex justify-content-center gap-3">
                  <Link
                    to="/contact"
                    className="btn btn-light btn-lg px-5 py-3 rounded-pill hover:transform hover:scale-105 transition-all duration-300"
                  >
                    Schedule Demo
                  </Link>
                  <Link
                    to="/pricing"
                    className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill hover:transform hover:scale-105 transition-all duration-300"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits py-5">
          <div className="container">
            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper mb-4">
                        <i className={`bi ${benefit.icon} display-4 text-primary`}></i>
                      </div>
                      <h3 className="card-title h4 mb-3">{benefit.title}</h3>
                      <p className="card-text text-muted mb-4">{benefit.description}</p>
                      <div className={`stats-counter ${animatedStats ? "counted" : ""}`}>
                        <div className="h2 text-primary mb-1">{benefit.stats}</div>
                        <small className="text-muted">{benefit.statsLabel}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="features py-5" style={{ background: "linear-gradient(to bottom, #f8f9fa, #fff)" }}>
          <div className="container">
            <h2 className="text-center mb-5">Key Features</h2>
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card h-100 border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="card-body text-center p-4">
                      <div className="icon-wrapper mb-4">
                        <i className={`bi ${feature.icon} display-4 text-primary`}></i>
                      </div>
                      <h4 className="card-title mb-3">{feature.title}</h4>
                      <p className="card-text text-muted mb-4">{feature.description}</p>
                      <ul className="list-unstyled text-start">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="mb-2">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="comparison py-5 bg-dark text-white">
          <div className="container">
            <h2 className="text-center mb-5">Why We're Different</h2>
            <div className="table-responsive">
              <table className="table table-dark table-borderless">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="text-center">MoCon</th>
                    <th className="text-center">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((point, index) => (
                    <tr key={index}>
                      <td>{point.feature}</td>
                      <td className="text-center">
                        <i className="bi bi-check-circle-fill text-success"></i>
                      </td>
                      <td className="text-center text-muted">{point.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="cta py-5 bg-primary text-white text-center">
          <div className="container">
            <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Compliance Strategy?</h2>
            <p className="lead mb-4">Join hundreds of companies already using MoCon</p>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="d-flex justify-content-center gap-3">
                  <Link
                    to="/contact"
                    className="btn btn-light btn-lg px-5 py-3 rounded-pill hover:transform hover:scale-105 transition-all duration-300"
                  >
                    Schedule Demo
                  </Link>
                  <Link
                    to="/pricing"
                    className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill hover:transform hover:scale-105 transition-all duration-300"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .icon-wrapper {
          background: linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(100, 255, 218, 0.05) 100%);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .stats-counter {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .stats-counter.counted {
          opacity: 1;
          transform: translateY(0);
        }

        .card {
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .table {
          background: transparent;
        }

        .table th,
        .table td {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .btn-outline-light:hover {
          background: rgba(255, 255, 255, 0.9);
          color: var(--bs-primary);
        }
      `}</style>
    </>
  )
}

export default WhyMoCon