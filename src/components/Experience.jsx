import React, { useState, useEffect } from "react";

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const experiences = [
    {
      id: 1,
      title: "Software Development & Upskilling",
      subtitle: "MERN Stack & Data Structures",
      company: "Coding Ninjas",
      location: "Remote",
      period: "Nov 2024 - Present",
      duration: "Ongoing",
      type: "Learning",
      status: "Current",
      icon: "🎯",
      color: "primary",
      skills: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express",
        "DSA",
        "JavaScript",
      ],
      achievements: [
        "Completed comprehensive MERN stack training program",
        "Solved 500+ Data Structures & Algorithms problems",
        "Built 6+ full-stack projects from scratch",
        "Mastered modern web development practices",
      ],
      highlight: "🚀 Current Focus",
    },
    {
      id: 2,
      title: "Software Developer",
      subtitle: "Full-Stack Development",
      company: "Plugger Technologies Pvt Ltd.",
      location: "Gurgaon, Haryana",
      period: "Nov 2023 - Nov 2024",
      duration: "1 year",
      type: "Full-time",
      status: "Completed",
      icon: "💻",
      color: "success",
      skills: ["React.js", "Laravel", "PHP", "MySQL", "jQuery", "Vite.js"],
      achievements: [
        "Contributed to 3 live fintech products serving 10,000+ users",
        "Built responsive interfaces using React.js and modern frameworks",
        "Developed RESTful APIs with Laravel/PHP/MySQL",
        "Optimized application performance by 30%",
      ],
      highlight: "🏆 Production Impact",
    },
    {
      id: 3,
      title: "Frontend Developer",
      subtitle: "UI/UX Development",
      company: "Hexaware Technologies",
      location: "Navi Mumbai",
      period: "Jul 2022 - Oct 2023",
      duration: "1 year 4 months",
      type: "Full-time",
      status: "Completed",
      icon: "🎨",
      color: "info",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
      achievements: [
        "Designed modern UI for enterprise client applications",
        "Converted legacy Linux terminal apps to React interfaces",
        "Implemented responsive layouts for multiple screen sizes",
        "Enhanced user experience with modern design principles",
      ],
      highlight: "🔄 Digital Transformation",
    },
    {
      id: 4,
      title: "Network Engineer",
      subtitle: "L2 Data & Voice Support",
      company: "Hexaware Technologies",
      location: "Navi Mumbai",
      period: "Jun 2021 - July 2022",
      duration: "1 years",
      type: "Full-time",
      status: "Completed",
      icon: "🌐",
      color: "warning",
      skills: ["VoIP", "SQL", "Network Infrastructure", "Troubleshooting"],
      achievements: [
        "Managed telecommunications infrastructure for enterprise clients",
        "Designed and implemented VoIP systems",
        "Provided L2 technical support ensuring 99.9% uptime",
        "Developed expertise in system troubleshooting",
      ],
      highlight: "🛠️ Technical Foundation",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.dataset.itemId);
            setVisibleItems((prev) => [...new Set([...prev, itemId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = document.querySelectorAll(".timeline-item-wrapper");
    timelineItems.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="experience-header">
          <div className="section-badge">
            <span className="badge-icon">💼</span>
            <span className="badge-text">Journey</span>
          </div>
          <h2 className="experience-title">Work Experience</h2>
          <p className="experience-subtitle">
            My professional journey from network engineering to full-stack
            development, showcasing continuous learning and growth in the tech
            industry.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {/* Current Focus - Full Width */}
          <div className="current-focus-section">
            {experiences
              .filter((exp) => exp.status === "Current")
              .map((exp, index) => (
                <div
                  key={exp.id}
                  className={`timeline-item-wrapper ${
                    visibleItems.includes(exp.id) ? "visible" : ""
                  }`}
                  data-item-id={exp.id}
                  style={{ "--animation-delay": `${index * 0.2}s` }}
                >
                  <article
                    className={`experience-card current-focus-card ${exp.color}`}
                  >
                    {/* Floating Elements */}
                    <div className="floating-element">🚀</div>
                    <div className="floating-element">💡</div>
                    <div className="floating-element">⭐</div>

                    {/* Card Header */}
                    <div className="experience-card-header">
                      <div className="experience-icon-wrapper">
                        <span className="experience-icon">{exp.icon}</span>
                      </div>

                      <div className="experience-meta">
                        <div className="experience-period">
                          <span className="period-text">{exp.period}</span>
                          <span className="duration-badge">{exp.duration}</span>
                        </div>

                        <div className="current-indicator">
                          <span className="current-dot"></span>
                          <span className="current-text">Current Focus</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlight Badge */}
                    <div className="experience-highlight">
                      <span className="highlight-badge">{exp.highlight}</span>
                    </div>

                    {/* Main Content */}
                    <div className="experience-content">
                      <div className="role-info">
                        <h3 className="role-title">{exp.title}</h3>
                        <h4 className="role-subtitle">{exp.subtitle}</h4>
                        <div className="company-info">
                          <span className="company-name">{exp.company}</span>
                          <span className="company-location">
                            <i className="location-icon">📍</i>
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Skills Used */}
                      <div className="skills-section">
                        <h5 className="skills-title">Technologies & Tools</h5>
                        <div className="skills-list">
                          {exp.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="achievements-section">
                        <h5 className="achievements-title">Key Achievements</h5>
                        <ul className="achievements-list">
                          {exp.achievements.map(
                            (achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="achievement-item"
                              >
                                <span className="achievement-bullet">✦</span>
                                <span className="achievement-text">
                                  {achievement}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
          </div>

          {/* Past Experiences - 2 Column Grid */}
          <div className="past-experiences-section">
            <div className="past-experiences-header">
              <h3 className="past-experiences-title">
                <span className="tier-icon">🎯</span>
                Professional Journey
              </h3>
              <p className="past-experiences-subtitle">
                Building expertise through diverse roles and challenges
              </p>
            </div>

            <div className="past-experiences-grid">
              {experiences
                .filter((exp) => exp.status === "Completed")
                .map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`timeline-item-wrapper ${
                      visibleItems.includes(exp.id) ? "visible" : ""
                    }`}
                    data-item-id={exp.id}
                    style={{ "--animation-delay": `${(index + 1) * 0.2}s` }}
                  >
                    <article className={`experience-card ${exp.color}`}>
                      {/* Card Header */}
                      <div className="experience-card-header">
                        <div className="experience-icon-wrapper">
                          <span className="experience-icon">{exp.icon}</span>
                        </div>

                        <div className="experience-meta">
                          <div className="experience-period">
                            <span className="period-text">{exp.period}</span>
                            <span className="duration-badge">
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Highlight Badge */}
                      {exp.highlight && (
                        <div className="experience-highlight">
                          <span className="highlight-badge">
                            {exp.highlight}
                          </span>
                        </div>
                      )}

                      {/* Main Content */}
                      <div className="experience-content">
                        <div className="role-info">
                          <h3 className="role-title">{exp.title}</h3>
                          <h4 className="role-subtitle">{exp.subtitle}</h4>
                          <div className="company-info">
                            <span className="company-name">{exp.company}</span>
                            <span className="company-location">
                              <i className="location-icon">📍</i>
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Skills Used */}
                        <div className="skills-section">
                          <h5 className="skills-title">Technologies & Tools</h5>
                          <div className="skills-list">
                            {exp.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} className="skill-tag">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Achievements */}
                        <div className="achievements-section">
                          <h5 className="achievements-title">
                            Key Achievements
                          </h5>
                          <ul className="achievements-list">
                            {exp.achievements.map(
                              (achievement, achievementIndex) => (
                                <li
                                  key={achievementIndex}
                                  className="achievement-item"
                                >
                                  <span className="achievement-bullet">✦</span>
                                  <span className="achievement-text">
                                    {achievement}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="experience-summary">
          <div className="summary-card">
            <div className="summary-item">
              <span className="summary-number">3+</span>
              <span className="summary-label">Years Experience</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">4</span>
              <span className="summary-label">Companies</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">3</span>
              <span className="summary-label">Live Products</span>
            </div>
            <div className="summary-item">
              <span className="summary-number">500+</span>
              <span className="summary-label">Problems Solved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
