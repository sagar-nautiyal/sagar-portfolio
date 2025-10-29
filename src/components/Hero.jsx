import React, { useState } from "react";

// Enhanced Resume Download Button Component
const ResumeDownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState("idle"); // idle, loading, success, error

  const handleDownload = async () => {
    setIsLoading(true);
    setDownloadStatus("loading");

    try {
      // Check if resume file exists
      const response = await fetch("/resume.pdf", { method: "HEAD" });

      if (response.ok) {
        // File exists, proceed with download
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Sagar_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setDownloadStatus("success");
        setTimeout(() => setDownloadStatus("idle"), 3000);
      } else {
        // File doesn't exist, show alternative options
        setDownloadStatus("error");
        setTimeout(() => setDownloadStatus("idle"), 3000);
      }
    } catch (error) {
      setDownloadStatus("error");
      setTimeout(() => setDownloadStatus("idle"), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const getButtonContent = () => {
    switch (downloadStatus) {
      case "loading":
        return (
          <>
            <div
              className="spinner-border spinner-border-sm me-2"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            Preparing...
          </>
        );
      case "success":
        return (
          <>
            <i className="bi bi-check-circle me-2"></i>
            Downloaded!
          </>
        );
      case "error":
        return (
          <>
            <i className="bi bi-exclamation-triangle me-2"></i>
            View on LinkedIn
          </>
        );
      default:
        return (
          <>
            <i className="bi bi-download me-2"></i>
            Download Resume
          </>
        );
    }
  };

  const handleClick = () => {
    if (downloadStatus === "error") {
      // Redirect to LinkedIn if resume not available
      window.open("https://www.linkedin.com/in/sagar-nautiyal-44967417a/", "_blank");
    } else {
      handleDownload();
    }
  };

  return (
    <button
      className={`btn btn-lg me-3 mb-2 resume-download-btn ${
        downloadStatus === "success"
          ? "btn-success"
          : downloadStatus === "error"
          ? "btn-warning"
          : "btn-primary"
      }`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {getButtonContent()}
    </button>
  );
};

const Hero = () => {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "💚" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express", icon: "🚀" },
    { name: "JavaScript", icon: "⚡" },
    { name: "PHP", icon: "🐘" },
    { name: "Laravel", icon: "🔥" },
    { name: "MySQL", icon: "🐬" },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-8 mx-auto text-center">
            <div className="hero-content">
              <div className="hero-greeting">
                <span className="greeting-wave">👋</span>
                <span className="greeting-text">Hello, I'm</span>
              </div>

              <h1 className="hero-title">
                <span className="name-highlight">Sagar</span>
                <br />
                Full Stack Developer
              </h1>

              <p className="lead mb-4">
                Building scalable, secure, and user-centric web applications
                with 3+ years of experience in MERN stack, React, Node.js, and
                modern web technologies.
              </p>

              <div className="hero-buttons mb-5 d-flex flex-wrap justify-content-center">
                <ResumeDownloadButton />
                <a
                  href="https://github.com/sagar-nautiyal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary btn-lg me-3 mb-2"
                >
                  <i className="bi bi-github me-2"></i>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sagar-nautiyal-44967417a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary btn-lg mb-2"
                >
                  <i className="bi bi-linkedin me-2"></i>
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="tech-stack">
                <h5 className="mb-3">Technologies I Use</h5>
                <div className="row justify-content-center">
                  {techStack.map((tech, index) => (
                    <div key={index} className="col-auto mb-2">
                      <span className="badge bg-light text-dark p-2" style={{ fontSize: '0.9rem' }}>
                        <span className="d-inline-block me-1">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
