"use client"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

const HomePage = () => {
  const [baseUrl, setBaseUrl] = useState("")
  const [dragActive, setDragActive] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const isGitHubPages = window.location.hostname.includes("github.io")
    if (isGitHubPages) {
      setBaseUrl("/boom")
    } else {
      setBaseUrl("")
    }
  }, [])

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      console.log("File uploaded:", files[0].name)
      alert(`File uploaded: ${files[0].name}`)
    }
  }

  const handleFileUpload = (e) => {
    const files = e.target.files
    if (files.length > 0) {
      console.log("File selected:", files[0].name)
      alert(`File selected: ${files[0].name}`)
    }
  }

  const handleImageError = (e) => {
    console.error("Image failed to load:", e.target.src)
    setImageError(true)
    // Try alternative path
    if (e.target.src.includes("/boom/")) {
      e.target.src = e.target.src.replace("/boom/", "/")
    }
  }

  return (
    <>
      <Navbar />
      <div className="home-page">
        {/* Enhanced Hero Section */}
        <section className="hero position-relative overflow-hidden">
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row min-vh-100 align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="display-3 fw-bold mb-4 text-white" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
                  Revolutionize Your Controls Framework
                </h1>
                <p className="lead mb-4 text-white-50 fs-4">AI-Powered GRC Automation for the Modern Enterprise</p>
                <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                  <Link
                    to="/why-mocon"
                    className="btn btn-primary btn-lg px-4 py-3 rounded-pill"
                    style={{
                      background: "linear-gradient(45deg, #64ffda, #48bb78)",
                      border: "none",
                      boxShadow: "0 4px 15px rgba(100, 255, 218, 0.3)",
                    }}
                  >
                    Discover MoCon
                  </Link>
                  <Link to="/contact" className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 text-center mt-5 mt-lg-0">
                <img
                  src={process.env.PUBLIC_URL + "/images/BabyApeSkelly.png" || "/placeholder.svg"}
                  onError={(e) => {
                    console.error("Image load failed, trying fallback")
                    e.target.onerror = null // Prevent infinite loop
                    e.target.src = "/images/BabyApeSkelly.png"
                  }}
                  alt="MoCon Mascot"
                  className="img-fluid"
                  style={{
                    maxWidth: "400px",
                    filter: "drop-shadow(0 0 20px rgba(100, 255, 218, 0.3))",
                    animation: "float 6s ease-in-out infinite",
                  }}
                />
                {imageError && (
                  <div className="text-danger mt-2">Image failed to load. Please check the image path.</div>
                )}
              </div>
            </div>
          </div>
          {/* Gradient overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: "linear-gradient(135deg, rgba(10, 25, 47, 0.95) 0%, rgba(0, 0, 0, 0.9) 100%)",
              zIndex: 1,
            }}
          ></div>
        </section>

        {/* Enhanced Upload Section */}
        <section className="upload-section text-center py-6 position-relative" style={{ background: "#0a192f" }}>
          <div className="container">
            <h2 className="display-4 fw-bold text-white mb-4">Find Out How We Can Help</h2>
            <p className="lead text-white-50 mb-5">
              See how MoCon can revolutionize your compliance strategy. Upload a file to experience it firsthand.
            </p>
            <div
              className={`drop-zone border p-5 rounded-lg mx-auto mb-5 ${dragActive ? "drag-active" : ""}`}
              style={{
                maxWidth: "600px",
                border: "2px dashed #64ffda",
                backgroundColor: "rgba(100, 255, 218, 0.05)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <i className="bi bi-cloud-upload display-1 text-primary mb-4"></i>
              <p className="lead text-white mb-4">Drag & Drop or Click to Upload</p>
              <input type="file" id="file-upload" hidden onChange={handleFileUpload} />
              <label
                htmlFor="file-upload"
                className="btn btn-primary btn-lg px-4 py-3 rounded-pill"
                style={{
                  background: "linear-gradient(45deg, #64ffda, #48bb78)",
                  border: "none",
                  boxShadow: "0 4px 15px rgba(100, 255, 218, 0.3)",
                }}
              >
                Upload File
              </label>
            </div>

            <div className="mt-6">
              <h2 className="display-5 fw-bold text-white mb-4">Ready to Transform Your GRC Strategy?</h2>
              <p className="lead text-white-50 mb-5">
                Let MoCon help with your audit and compliance needs. Focus on business growth.
              </p>
              <Link
                to="/pricing"
                className="btn btn-primary btn-lg px-5 py-3 rounded-pill"
                style={{
                  background: "linear-gradient(45deg, #64ffda, #48bb78)",
                  border: "none",
                  boxShadow: "0 4px 15px rgba(100, 255, 218, 0.3)",
                }}
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Animated background elements */}
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ overflow: "hidden", zIndex: 0 }}>
            <div
              className="position-absolute"
              style={{
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, rgba(100, 255, 218, 0) 70%)",
                top: "10%",
                left: "5%",
                animation: "float 8s ease-in-out infinite",
              }}
            ></div>
            <div
              className="position-absolute"
              style={{
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, rgba(100, 255, 218, 0) 70%)",
                bottom: "10%",
                right: "5%",
                animation: "float 10s ease-in-out infinite",
              }}
            ></div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .py-6 {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }

        .mt-6 {
          margin-top: 5rem;
        }

        .drop-zone:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
        }

        .drag-active {
          background-color: rgba(100, 255, 218, 0.1) !important;
          transform: scale(1.02);
        }
      `}</style>
    </>
  )
}

export default HomePage

