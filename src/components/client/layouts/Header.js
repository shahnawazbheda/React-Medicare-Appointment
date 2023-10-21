import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link href="assets/client/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/client/css/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/client/css/owl.carousel.min.css" rel="stylesheet" />
        <link href="assets/client/css/owl.theme.default.min.css" rel="stylesheet" />
        <link href="assets/client/css/templatemo-medic-care.css" rel="stylesheet" />
      </Helmet>
      <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
        <div className="container">
          <a className="navbar-brand mx-auto d-lg-none" href="index.html">
            Medic Care
            <strong className="d-block">Health Specialist</strong>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse${isNavOpen ? ' show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/timeline" className="nav-link">
                  Timeline
                </Link>
              </li>

              <Link to="/" className="navbar-brand d-none d-lg-block">
                Medic Care
                <strong className="d-block">Health Specialist</strong>
              </Link>

              <li className="nav-item">
                <Link to="/testimonials" className="nav-link">
                  Testimonials
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/booking" className="nav-link">
                  Appointment
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
