import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      console.log("File uploaded:", files[0].name);
      alert(`File uploaded: ${files[0].name}`);
    }
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      console.log("File selected:", files[0].name);
      alert(`File selected: ${files[0].name}`);
    }
  };

  return (
    <>
      <Navbar />
      <div className="home-page">
        <section className="hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="hero-title">Revolutionize Your Controls Framework</h1>
                <p className="hero-subtitle">AI-Powered GRC Automation for the Modern Enterprise</p>
                <Link to="/why-mocon" className="btn btn-primary btn-lg mt-4">Discover MoCon</Link>
              </div>
              <div className="col-lg-6 text-center">
                <img 
                  src="/images/MoconLogoUse.png" 
                  alt="MoCon Logo"
                  className="img-fluid"
                  style={{ maxWidth: "250px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="upload-section text-center py-5">
          <div className="container">
            <h2 className="fw-bold mb-4">Find Out How we Can Help</h2>
            <p className="lead mb-4">
              See how MoCon can revolutionize your compliance strategy. Upload a file to experience it firsthand.
            </p>
            <div
              className={`drop-zone border p-4 rounded mx-auto ${dragActive ? "drag-active" : ""}`}
              style={{
                maxWidth: "500px",
                border: "2px dashed #64ffda",
                backgroundColor: "transparent"
              }}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <p className="lead">Drag & Drop or Click to Upload</p>
              <input type="file" id="file-upload" hidden onChange={handleFileUpload} />
              <label htmlFor="file-upload" className="btn btn-primary btn-lg">Upload File</label>
            </div>

            <div className="mt-5">
              <h2>Ready to Transform Your GRC Strategy?</h2>
              <p>Let MoCon help with your audit and compliance needs. Focus on business</p>
              <Link to="/pricing" className="btn btn-primary btn-lg mt-3">Get Started</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
