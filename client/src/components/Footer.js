import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer
      className="footer mt-auto py-5"
      style={{
        background: "linear-gradient(to top, #0a192f 0%, rgba(10, 25, 47, 0.9) 100%)",
        borderTop: "1px solid rgba(100, 255, 218, 0.1)",
      }}
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5
              className="mb-3"
              style={{
                background: "linear-gradient(45deg, #64ffda, #48bb78)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              MoCon
            </h5>
            <p className="text-white-50">Revolutionizing financial controls with AI-powered automation.</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { to: "/", text: "Home" },
                { to: "/why-mocon", text: "Why MoCon?" },
                { to: "/use-cases", text: "Use Cases" },
                { to: "/pricing", text: "Pricing" },
                { to: "/about", text: "About Us" },
              ].map((link, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={link.to}
                    className="text-white-50 text-decoration-none"
                    style={{ transition: "all 0.3s ease" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#64ffda"
                      e.currentTarget.style.paddingLeft = "10px"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = ""
                      e.currentTarget.style.paddingLeft = ""
                    }}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="text-white mb-3">Contact Us</h5>
            <p className="text-white-50 mb-1">
              <i className="bi bi-envelope me-2"></i>
              captainSwag@mocon.com
            </p>
            <p className="text-white-50">
              <i className="bi bi-telephone me-2"></i>
              (952) 420-6969
            </p>
            <div className="mt-4">
              {[
                { icon: "bi-linkedin", href: "#", label: "LinkedIn" },
                { icon: "bi-twitter", href: "#", label: "Twitter" },
                { icon: "bi-github", href: "#", label: "GitHub" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white-50 text-decoration-none me-3"
                  aria-label={social.label}
                  style={{ transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#64ffda"
                    e.currentTarget.style.transform = "translateY(-3px)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ""
                    e.currentTarget.style.transform = ""
                  }}
                >
                  <i className={`bi ${social.icon} fs-5`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-4 mb-3" style={{ borderColor: "rgba(100, 255, 218, 0.1)" }} />
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="text-white-50 mb-0">&copy; {new Date().getFullYear()} MoCon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


