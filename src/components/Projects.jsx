import React, { useState, useEffect } from "react";

// ProjectCard Component
const ProjectCard = ({ project, index, visibleProjects }) => (
  <div
    className={`project-card-wrapper ${project.tier} ${
      visibleProjects.includes(project.id) ? "visible" : ""
    }`}
    data-project-id={project.id}
    style={{ "--animation-delay": `${index * 0.1}s` }}
  >
    <article className="project-card">
      {/* Project Header */}
      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          {project.hasLiveDemo && (
            <div className="project-status">
              <span
                className={`status-indicator ${project.status.toLowerCase()}`}
              >
                <span className="status-dot"></span>
                {project.status}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Project Highlight for Featured */}
      {project.highlight && (
        <div className="project-highlight">
          <span className="highlight-badge">{project.highlight}</span>
        </div>
      )}

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {/* Tech Stack */}
        <div className="tech-stack">
          {project.tech.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Actions */}
      <div className="project-actions">
        {project.hasLiveDemo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn primary"
          >
            <span className="btn-icon">🌐</span>
            <span className="btn-text">Live Demo</span>
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`project-btn ${
            project.hasLiveDemo ? "secondary" : "primary"
          }`}
        >
          <span className="btn-icon">🐙</span>
          <span className="btn-text">GitHub</span>
        </a>
      </div>

      {/* Subtle Background Pattern */}
      <div className="project-pattern">
        <div className="pattern-dot"></div>
        <div className="pattern-dot"></div>
        <div className="pattern-dot"></div>
      </div>
    </article>
  </div>
);

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  const featuredProjects = [
    {
      id: 1,
      title: "SmartLMS",
      description:
        "A comprehensive Learning Management System with interactive features, user authentication, course management, and progress tracking for modern education",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack Application",
      status: "Live",
      hasLiveDemo: true,
      github: "https://github.com/sagar-nautiyal/smartLMS.git",
      demo: "https://smartlms-demo.vercel.app",
      icon: "🎓",
      tier: "featured",
      highlight: "🚀 Production Ready",
    },
    {
      id: 2,
      title: "TaskPro",
      description:
        "Real-time task management application with WebSocket integration, team collaboration, notifications, and project tracking features",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "Real-Time Web App",
      status: "Live",
      hasLiveDemo: true,
      github: "https://github.com/sagar-nautiyal/taskPro.git",
      demo: "https://taskpro-live.herokuapp.com",
      icon: "📋",
      tier: "featured",
      highlight: "⚡ Real-Time",
    },
    {
      id: 3,
      title: "StoreFleet",
      description:
        "Enterprise-grade e-commerce backend API with advanced security, payment integration, inventory management, and RESTful architecture",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "Backend API",
      status: "Development",
      hasLiveDemo: false,
      github: "https://github.com/sagar-nautiyal/storefleet.git",
      icon: "🛒",
      tier: "featured",
      highlight: "🔐 Enterprise Security",
    },
  ];

  const secondaryProjects = [
    {
      id: 4,
      title: "Easily",
      description:
        "Modern job portal platform connecting employers and job seekers with advanced search and matching algorithms",
      tech: ["React", "Laravel", "MySQL", "Bootstrap"],
      category: "Platform",
      status: "Development",
      hasLiveDemo: false,
      github: "https://github.com/sagar-nautiyal/Easily.git",
      icon: "💼",
      tier: "secondary",
    },
    {
      id: 5,
      title: "PostAway API",
      description:
        "Social media backend API with posts, comments, user management, and content moderation features",
      tech: ["Node.js", "Express", "MongoDB"],
      category: "Social Media API",
      status: "Development",
      hasLiveDemo: false,
      github: "https://github.com/sagar-nautiyal/POSTAWAY.git",
      icon: "📱",
      tier: "secondary",
    },
    {
      id: 6,
      title: "Expense Tracker",
      description:
        "Personal finance management app with real-time analytics, budget tracking, and data visualization",
      tech: ["React", "Firebase", "Bootstrap"],
      category: "Finance App",
      status: "Development",
      hasLiveDemo: false,
      github: "https://github.com/sagar-nautiyal/Expense-tracker.git",
      icon: "💰",
      tier: "secondary",
    },
  ];

  const additionalProjects = [
    {
      id: 7,
      title: "BusyBuy",
      description:
        "React-based e-commerce demo with shopping cart, product filtering, and checkout flow",
      tech: ["React", "Context API", "CSS3"],
      category: "E-commerce Demo",
      status: "Development",
      hasLiveDemo: false,
      github: "https://github.com/sagar-nautiyal/BusyBuy.git",
      icon: "🛍️",
      tier: "additional",
    },
    {
      id: 8,
      title: "CryptoTracker",
      description:
        "Cryptocurrency price tracking application with real-time market data and price alerts",
      tech: ["HTML5", "CSS3", "JavaScript", "API Integration"],
      category: "Vanilla JS App",
      status: "Development",
      hasLiveDemo: false,
      github: "https://github.com/sagar-nautiyal/crypto-tracker.git",
      icon: "₿",
      tier: "additional",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(entry.target.dataset.projectId);
            setVisibleProjects((prev) => [...new Set([...prev, projectId])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll(".project-card-wrapper");
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header">
          <div className="section-badge">
            <span className="badge-icon">🚀</span>
            <span className="badge-text">Portfolio</span>
          </div>
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            A comprehensive showcase of my development journey, from enterprise
            applications to learning experiments, demonstrating growth in
            full-stack technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="projects-section-tier">
          <div className="tier-header">
            <h3 className="tier-title">
              <span className="tier-icon">⭐</span>
              Featured Projects
            </h3>
            <p className="tier-description">
              My most significant and impactful projects
            </p>
          </div>
          <div className="projects-grid featured-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                visibleProjects={visibleProjects}
              />
            ))}
          </div>
        </div>

        {/* Secondary Projects */}
        <div className="projects-section-tier">
          <div className="tier-header">
            <h3 className="tier-title">
              <span className="tier-icon">🚀</span>
              Core Projects
            </h3>
            <p className="tier-description">
              Solid implementations showcasing various technologies
            </p>
          </div>
          <div className="projects-grid secondary-grid">
            {secondaryProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + featuredProjects.length}
                visibleProjects={visibleProjects}
              />
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <div className="projects-section-tier">
          <div className="tier-header">
            <h3 className="tier-title">
              <span className="tier-icon">💡</span>
              Learning Projects
            </h3>
            <p className="tier-description">
              Educational builds and experimental implementations
            </p>
          </div>
          <div className="projects-grid additional-grid">
            {additionalProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={
                  index + featuredProjects.length + secondaryProjects.length
                }
                visibleProjects={visibleProjects}
              />
            ))}
          </div>
        </div>

        {/* Simplified grid section - delete everything from here until Bottom CTA */}
        <div style={{ display: "none" }}>
          {[].map((project, index) => (
            <div
              key={project.id}
              className={`project-card-wrapper ${
                visibleProjects.includes(project.id) ? "visible" : ""
              }`}
              data-project-id={project.id}
              style={{ "--animation-delay": `${index * 0.1}s` }}
            >
              <article className="project-card">
                {/* Project Header */}
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <div className="project-meta">
                    <span className="project-category">{project.category}</span>
                    {project.hasLiveDemo && (
                      <div className="project-status">
                        <span
                          className={`status-indicator ${project.status.toLowerCase()}`}
                        >
                          <span className="status-dot"></span>
                          {project.status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="tech-stack">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="project-actions">
                  {project.hasLiveDemo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn primary"
                    >
                      <span className="btn-icon">🌐</span>
                      <span className="btn-text">Live Demo</span>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-btn ${
                      project.hasLiveDemo ? "secondary" : "primary"
                    }`}
                  >
                    <span className="btn-icon">�</span>
                    <span className="btn-text">GitHub</span>
                  </a>
                </div>

                {/* Subtle Background Pattern */}
                <div className="project-pattern">
                  <div className="pattern-dot"></div>
                  <div className="pattern-dot"></div>
                  <div className="pattern-dot"></div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="projects-cta">
          <p className="cta-text">Interested in collaborating on a project?</p>
          <a href="#contact" className="cta-button">
            <span className="cta-icon">💬</span>
            <span className="cta-label">Let's Talk</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
