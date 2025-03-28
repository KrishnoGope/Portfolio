import './Navbar.css';
import logo from '../../assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#hero">
          <img src={logo} alt="Logo" className="img-fluid logo" />
        </a>
         {/* Custom Toggle Button */}
         <button 
          className="navbar-toggler custom-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Items */}
        <div className="navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-lg-4 fs-5 fw-medium">
            <li className="nav-item">
              <AnchorLink className="nav-link" href="#hero">Home</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" offset={50} href="#about">About Me</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" offset={50} href="#services">Services</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" offset={50} href="#work">Portfolio</AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink className="nav-link" offset={50} href="#contact">Contact</AnchorLink>
            </li>
          </ul>
        </div>

        {/* Connect Button (Kept Same as Before) */}
        <div className="d-none d-lg-block">
          <AnchorLink 
            className="btn btn-lg text-white fw-semibold px-3 py-1 rounded-pill" 
            offset={50} 
            href="#contact" 
            style={{ background: 'linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.06%)', transition: '0.5s' }}>
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;