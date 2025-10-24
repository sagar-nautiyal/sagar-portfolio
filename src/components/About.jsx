import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 modern-about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="about-content">
              <h3 className="mb-4">From Network Engineer to Full Stack Developer</h3>
              <p className="lead mb-4">
                I'm a passionate Full Stack Developer with over 3 years of diverse experience 
                spanning network engineering, frontend development, and backend engineering.
              </p>
              <p className="mb-4">
                My journey began as a Network Engineer at Hexaware Technologies, where I gained 
                expertise in VoIP systems, SQL, and system troubleshooting. I then transitioned 
                into Frontend Development, delivering responsive, user-centric interfaces using 
                React.js, JavaScript, HTML5, CSS3, and Bootstrap for enterprise clients.
              </p>
              <p className="mb-4">
                As a Software Developer at Plugger Technologies, I contributed to three live 
                fintech products, building scalable RESTful APIs with Laravel/PHP/MySQL and 
                developing modern, responsive front-end solutions with React.js, Vite.js, and jQuery.
              </p>
              <p className="mb-4">
                Currently, I'm focused on mastering the MERN stack (MongoDB, Express.js, React.js, Node.js) 
                and strengthening my Data Structures & Algorithms problem-solving skills through 
                Coding Ninjas, having built multiple full-stack projects including e-commerce platforms, 
                social media clones, and LMS prototypes.
              </p>
              
              <div className="row mt-4">
                <div className="col-md-6">
                  <ul className="list-unstyled about-list">
                    <li><i className="bi bi-check-circle text-primary me-2"></i> 3+ Years Experience</li>
                    <li><i className="bi bi-check-circle text-primary me-2"></i> MERN Stack Expert</li>
                    <li><i className="bi bi-check-circle text-primary me-2"></i> 500+ DSA Problems Solved</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled about-list">
                    <li><i className="bi bi-check-circle text-primary me-2"></i> Fintech Experience</li>
                    <li><i className="bi bi-check-circle text-primary me-2"></i> Full Stack Projects</li>
                    <li><i className="bi bi-check-circle text-primary me-2"></i> Cloud Deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="about-image">
              <div className="developer-avatar">
                {/* Animated Developer Avatar */}
                <div className="avatar-container">
                  <div className="avatar-circle">
                    <div className="avatar-face">
                      <div className="avatar-eyes">
                        <span className="eye left">👁️</span>
                        <span className="eye right">👁️</span>
                      </div>
                      <div className="avatar-smile">😊</div>
                    </div>
                    <div className="avatar-hair">💻</div>
                  </div>
                  
                  {/* Floating Code Elements */}
                  <div className="floating-elements">
                    <span className="code-element" style={{"--delay": "0s"}}>{'{ }'}</span>
                    <span className="code-element" style={{"--delay": "0.5s"}}>{'< />'}</span>
                    <span className="code-element" style={{"--delay": "1s"}}>⚡</span>
                    <span className="code-element" style={{"--delay": "1.5s"}}>🚀</span>
                    <span className="code-element" style={{"--delay": "2s"}}>💡</span>
                    <span className="code-element" style={{"--delay": "2.5s"}}>🔥</span>
                  </div>
                  
                  {/* Coding Animation */}
                  <div className="typing-indicator">
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p className="typing-text">Building amazing things...</p>
                  </div>
                </div>
                
                {/* Skills Orbit */}
                <div className="skills-orbit">
                  <div className="orbit-item" style={{"--orbit-delay": "0s"}}>⚛️</div>
                  <div className="orbit-item" style={{"--orbit-delay": "1s"}}>🟢</div>
                  <div className="orbit-item" style={{"--orbit-delay": "2s"}}>🍃</div>
                  <div className="orbit-item" style={{"--orbit-delay": "3s"}}>🔷</div>
                </div>
                
                {/* Alternative: You can uncomment this for a GIF option */}
                {/* 
                <div className="gif-avatar">
                  <img 
                    src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
                    alt="Coding Animation"
                    className="coding-gif"
                  />
                  <div className="gif-overlay">
                    <span className="developer-title">Full Stack Developer</span>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;