import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-5 bg-black text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>MoCon</h5>
            <p>Revolutionizing financial controls with AI-powered automation.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/why-mocon">Why MoCon?</Link></li>
              <li><Link to="/use-cases">Use Cases</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: captainSwag@mocon.com</p>
            <p>Phone: (952) 420-6969</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2025 MoCon. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



