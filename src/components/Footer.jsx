import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">
              &copy; {currentYear} <strong>Sagar</strong> - Full Stack Developer. 
              Built with <i className="bi bi-heart-fill text-danger"></i> using React.js
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-links">
              <a href="#home" className="text-light text-decoration-none me-3">Home</a>
              <a href="#about" className="text-light text-decoration-none me-3">About</a>
              <a href="#projects" className="text-light text-decoration-none me-3">Projects</a>
              <a href="#contact" className="text-light text-decoration-none">Contact</a>
            </div>
          </div>
        </div>
        
        <hr className="my-3 border-secondary" />
        
        <div className="row">
          <div className="col-12 text-center">
            <div className="footer-social">
              <a 
                href="https://github.com/sagar-nautiyal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light me-3"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/sagar-nautiyal-44967417a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light me-3"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a 
                href="mailto:sagarddn1@gmail.com"
                className="text-light"
                title="Email"
              >
                <i className="bi bi-envelope"></i>
              </a>
            </div>
            <p className="mt-2 mb-0 text-muted small">
              Passionate about creating amazing web experiences
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;