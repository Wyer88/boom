"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top transition-all duration-300 ${
        isScrolled ? "py-2 bg-black/90 backdrop-blur-md" : "py-4 bg-transparent"
      }`}
      style={{
        transition: "all 0.3s ease",
        zIndex: 1000,
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            background: "linear-gradient(45deg, #64ffda, #48bb78)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "1.5rem",
          }}
        >
          MoCon
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            boxShadow: "none",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {[
              { path: "/", text: "Home" },
              { path: "/why-mocon", text: "Why MoCon?" },
              { path: "/use-cases", text: "Use Cases" },
              { path: "/pricing", text: "Pricing" },
              { path: "/about", text: "About Us" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link px-3 py-2"
                  to={item.path}
                  style={{
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#64ffda"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ""
                  }}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link
                to="/contact"
                className="btn btn-primary px-4"
                style={{
                  background: "linear-gradient(45deg, #64ffda, #48bb78)",
                  border: "none",
                  boxShadow: "0 4px 15px rgba(100, 255, 218, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(100, 255, 218, 0.4)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = ""
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(100, 255, 218, 0.3)"
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



