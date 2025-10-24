import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', icon: 'bi-person' },
    { href: '#projects', label: 'Projects', icon: 'bi-code-slash' },
    { href: '#experience', label: 'Experience', icon: 'bi-briefcase' },
    { href: '#skills', label: 'Skills', icon: 'bi-gear' },
    { href: '#contact', label: 'Contact', icon: 'bi-envelope' }
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top modern-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <div className="brand-wrapper">
            <div className="brand-icon">
              <span className="brand-emoji">💻</span>
            </div>
            <div className="brand-text">
              <span className="brand-name">Sagar</span>
              <span className="brand-title">Full Stack Developer</span>
            </div>
          </div>
        </a>
        
        <button 
          className="navbar-toggler modern-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <div className="toggler-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto modern-nav">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <a 
                  className={`nav-link modern-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`} 
                  href={link.href}
                  onClick={() => setIsNavOpen(false)}
                >
                  <i className={`bi ${link.icon} nav-icon`}></i>
                  <span className="nav-text">{link.label}</span>
                  <div className="nav-indicator"></div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;