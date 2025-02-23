import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

const UseCases = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const caseStudies = [
    {
      icon: "bi-bank",
      title: "Financial Services",
      description:
        "A leading bank reduced audit time by 50% and improved risk detection by 30% using MoCon's AI-driven compliance tools.",
      link: "/case-study/financial-services",
      metrics: {
        auditReduction: "50%",
        riskDetection: "30%",
        costSavings: "$2.5M",
      },
    },
    {
      icon: "bi-file-medical",
      title: "Healthcare",
      description:
        "A healthcare provider achieved post-IPO SOX compliance 60% faster with MoCon's framework generator and integrated GRC platform.",
      link: "/case-study/healthcare",
      metrics: {
        complianceSpeed: "60%",
        controlEfficiency: "45%",
        timeToValue: "3 months",
      },
    },
    {
      icon: "bi-shop",
      title: "Retail",
      description:
        "A global retailer streamlined controls compliance across 15+ business processes, cutting audit costs by 35% using MoCon's scalable solutions.",
      link: "/case-study/retail",
      metrics: {
        processesOptimized: "15+",
        costReduction: "35%",
        roi: "280%",
      },
    },
    {
      icon: "bi-cpu",
      title: "Technology",
      description:
        "A fast-growing SaaS company prepared for SOC 2 certification in half the expected time, accelerating their go-to-market strategy.",
      link: "/case-study/technology",
      metrics: {
        certificationTime: "50%",
        processAutomation: "75%",
        marketEntry: "4 months",
      },
    },
  ]

  const testimonials = [
    {
      quote:
        "MoCon has revolutionized our approach to SOX compliance. We've cut our audit preparation time in half and have a much clearer view of our risk landscape.",
      author: "Silly Boy",
      title: "CIO",
      company: "Tech Innovators Inc.",
    },
    {
      quote:
        "The AI-powered risk detection has transformed how we approach compliance. We're catching potential issues before they become problems.",
      author: "Jane Smith",
      title: "Head of Compliance",
      company: "Global Finance Corp",
    },
    {
      quote:
        "Implementation was smooth, and the ROI was evident within months. MoCon's platform has become an integral part of our GRC strategy.",
      author: "Michael Chen",
      title: "Risk Manager",
      company: "Healthcare Solutions",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <>
      <Navbar />
      <div className="use-cases-page">
        <section className="hero bg-primary text-white py-5">
          <div className="container text-center">
            <h1 className="display-4 fw-bold mb-4">MoCon Use Cases</h1>
            <p className="lead mb-4">Discover How MoCon Transforms Audit and Compliance Across Industries</p>
            <div className="row justify-content-center mt-5">
              <div className="col-md-3 text-center">
                <div className="display-4 fw-bold mb-2">500+</div>
                <p className="text-white-50">Companies Served</p>
              </div>
              <div className="col-md-3 text-center">
                <div className="display-4 fw-bold mb-2">45%</div>
                <p className="text-white-50">Average Cost Reduction</p>
              </div>
              <div className="col-md-3 text-center">
                <div className="display-4 fw-bold mb-2">3x</div>
                <p className="text-white-50">Faster Compliance</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-studies py-5">
          <div className="container">
            <div className="row g-4">
              {caseStudies.map((caseStudy, index) => (
                <div key={index} className="col-md-6">
                  <div className="card h-100 border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="card-body p-4">
                      <div className="text-center mb-4">
                        <div className="icon-wrapper mb-3">
                          <i className={`bi ${caseStudy.icon} display-4 text-primary`}></i>
                        </div>
                        <h3 className="card-title h4">{caseStudy.title}</h3>
                      </div>
                      <p className="card-text text-muted">{caseStudy.description}</p>
                      <div className="metrics-grid my-4">
                        {Object.entries(caseStudy.metrics).map(([key, value], i) => (
                          <div key={i} className="metric-item text-center p-2">
                            <div className="h4 mb-1 text-primary">{value}</div>
                            <small className="text-muted text-capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </small>
                          </div>
                        ))}
                      </div>
                      <div className="text-center mt-4">
                        <Link
                          to={caseStudy.link}
                          className="btn btn-outline-primary rounded-pill px-4 hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          Read Case Study
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial py-5" style={{ background: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)" }}>
          <div className="container">
            <h2 className="text-center text-white mb-5">What Our Clients Say</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="testimonial-carousel position-relative">
                  {testimonials.map((testimonial, index) => (
                    <blockquote
                      key={index}
                      className={`blockquote text-center transition-all duration-500 ${
                        index === activeTestimonial ? "opacity-100" : "opacity-0 position-absolute"
                      }`}
                      style={{ top: 0, left: 0, right: 0 }}
                    >
                      <p className="mb-3 text-white">{testimonial.quote}</p>
                      <footer className="blockquote-footer mt-3 text-white-50">
                        {testimonial.author},{" "}
                        <cite title={testimonial.company}>
                          {testimonial.title} at {testimonial.company}
                        </cite>
                      </footer>
                    </blockquote>
                  ))}
                  <div className="testimonial-indicators d-flex justify-content-center gap-2 mt-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`btn btn-sm rounded-circle p-2 ${
                          index === activeTestimonial ? "btn-primary" : "btn-outline-light"
                        }`}
                        onClick={() => setActiveTestimonial(index)}
                      >
                        <span className="visually-hidden">Testimonial {index + 1}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta py-5 bg-primary text-white text-center">
          <div className="container">
            <h2 className="display-5 fw-bold mb-4">Ready to See MoCon in Action?</h2>
            <p className="lead mb-4">Join industry leaders who trust MoCon for their compliance needs</p>
            <div className="d-flex justify-content-center gap-3">
              <Link
                to="/contact"
                className="btn btn-light btn-lg px-5 py-3 rounded-pill hover:transform hover:scale-105 transition-all duration-300"
              >
                Request a Demo
              </Link>
              <Link
                to="/pricing"
                className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill hover:transform hover:scale-105 transition-all duration-300"
              >
                View Pricing
              </Link>
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

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 1rem;
          background: rgba(100, 255, 218, 0.05);
          border-radius: 8px;
          padding: 1rem;
        }

        .testimonial-carousel {
          min-height: 200px;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .btn-outline-primary:hover {
          background: linear-gradient(135deg, #64ffda 0%, #48bb78 100%);
          border-color: transparent;
        }
      `}</style>
    </>
  )
}

export default UseCases