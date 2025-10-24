import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the form data to your email service
    // For now, we'll just simulate a submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const whatsappMessage = `Hi Sagar! I found your portfolio and would like to connect with you.`;
  const whatsappUrl = `https://wa.me/+916398342469?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section id="contact" className="py-5 modern-contact-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="section-title">Let's Build Something Together</h2>
            <div className="section-line"></div>
            <p className="section-subtitle">
              Ready to start your project? Let's discuss how we can work
              together
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-8 mx-auto">
            <div className="modern-contact-form-container">
              <div className="form-floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
              <form onSubmit={handleSubmit} className="modern-contact-form">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or how I can help you..."
                  ></textarea>
                </div>

                <div className="contact-buttons">
                  <button
                    type="submit"
                    className="modern-contact-btn primary-btn"
                    disabled={isSubmitting}
                  >
                    <span className="btn-content">
                      {isSubmitting ? (
                        <>
                          <div className="loading-spinner"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-envelope btn-icon"></i>
                          Send Message
                        </>
                      )}
                    </span>
                    <div className="btn-bg-effect"></div>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-contact-btn whatsapp-btn"
                  >
                    <span className="btn-content">
                      <i className="bi bi-whatsapp btn-icon"></i>
                      WhatsApp Me
                    </span>
                    <div className="btn-bg-effect"></div>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info & Social Links */}
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="modern-contact-info">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="contact-info-card">
                    <div className="info-icon-wrapper">
                      <i className="bi bi-envelope-fill info-icon"></i>
                    </div>
                    <h5 className="info-title">Email</h5>
                    <p className="info-text">sagarddn1@gmail.com</p>
                    <div className="info-glow"></div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info-card">
                    <div className="info-icon-wrapper">
                      <i className="bi bi-geo-alt-fill info-icon"></i>
                    </div>
                    <h5 className="info-title">Location</h5>
                    <p className="info-text">Dehradun, India</p>
                    <div className="info-glow"></div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info-card">
                    <div className="info-icon-wrapper">
                      <i className="bi bi-clock-fill info-icon"></i>
                    </div>
                    <h5 className="info-title">Response Time</h5>
                    <p className="info-text">Within 24 hours</p>
                    <div className="info-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="row mt-4">
          <div className="col-lg-12 text-center">
            <h5 className="mb-3">Connect with me on</h5>
            <div className="modern-social-links">
              <a
                href="https://github.com/sagar-nautiyal"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-link github"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
                <div className="social-glow"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/sagar-nautiyal-44967417a/"
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-link linkedin"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
                <div className="social-glow"></div>
              </a>
              <a
                href="mailto:sagarddn1@gmail.com"
                className="modern-social-link email"
                title="Email"
              >
                <i className="bi bi-envelope"></i>
                <div className="social-glow"></div>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-social-link whatsapp"
                title="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
                <div className="social-glow"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
