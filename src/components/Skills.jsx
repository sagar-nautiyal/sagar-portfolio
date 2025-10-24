import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const skillCategories = [
    {
      name: 'Frontend',
      icon: '🎨',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      skills: [
        { name: 'React.js', level: 90, icon: '⚛️', experience: '2+ years' },
        { name: 'JavaScript', level: 85, icon: '⚡', experience: '3+ years' },
        { name: 'HTML5/CSS3', level: 95, icon: '🌐', experience: '3+ years' },
        { name: 'Bootstrap', level: 80, icon: '📱', experience: '2+ years' },
        { name: 'jQuery', level: 75, icon: '💫', experience: '2+ years' }
      ]
    },
    {
      name: 'Backend',
      icon: '⚙️',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      skills: [
        { name: 'Node.js', level: 85, icon: '💚', experience: '2+ years' },
        { name: 'Express.js', level: 80, icon: '🚀', experience: '2+ years' },
        { name: 'PHP', level: 75, icon: '🐘', experience: '2+ years' },
        { name: 'Laravel', level: 70, icon: '🔥', experience: '1+ years' },
        { name: 'RESTful APIs', level: 85, icon: '🔗', experience: '2+ years' }
      ]
    },
    {
      name: 'Database',
      icon: '🗄️',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      skills: [
        { name: 'MongoDB', level: 80, icon: '🍃', experience: '2+ years' },
        { name: 'MySQL', level: 85, icon: '🐬', experience: '2+ years' },
        { name: 'Database Design', level: 75, icon: '📊', experience: '2+ years' }
      ]
    },
    {
      name: 'Tools & Others',
      icon: '🛠️',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: '🐙', experience: '3+ years' },
        { name: 'Vite.js', level: 75, icon: '⚡', experience: '1+ years' },
        { name: 'DSA', level: 70, icon: '🧮', experience: '1+ years' },
        { name: 'VoIP Systems', level: 80, icon: '📞', experience: '2+ years' },
        { name: 'Network Config', level: 75, icon: '🌐', experience: '2+ years' }
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({ ...skill, category: category.name, categoryIcon: category.icon, categoryColor: category.color }))
  );

  const filteredSkills = activeCategory === 'All' ? allSkills : 
    allSkills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = parseInt(entry.target.dataset.skillIndex);
            setVisibleItems(prev => [...new Set([...prev, skillIndex])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillItems = document.querySelectorAll('.skill-card-wrapper');
    skillItems.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredSkills]);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="skills-header">
          <div className="section-badge">
            <span className="badge-icon">🚀</span>
            <span className="badge-text">Expertise</span>
          </div>
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-subtitle">
            Proficient in modern web technologies with hands-on experience in full-stack development, 
            from responsive frontends to scalable backend systems.
          </p>
        </div>

        {/* Category Filter */}
        <div className="skills-filter">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${activeCategory === 'All' ? 'active' : ''}`}
              onClick={() => setActiveCategory('All')}
            >
              <span className="tab-icon">🌟</span>
              <span className="tab-text">All Skills</span>
            </button>
            {skillCategories.map((category, index) => (
              <button 
                key={index}
                className={`filter-tab ${activeCategory === category.name ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.name)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-text">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`}
              className={`skill-card-wrapper ${visibleItems.includes(index) ? 'visible' : ''}`}
              data-skill-index={index}
              style={{ '--animation-delay': `${index * 0.1}s` }}
            >
              <div className="skill-card">
                {/* Floating Elements */}
                <div className="skill-float-element">✨</div>
                <div className="skill-float-element">💫</div>
                
                {/* Skill Icon */}
                <div className="skill-icon-wrapper">
                  <span className="skill-icon">{skill.icon}</span>
                </div>

                {/* Skill Info */}
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-experience">{skill.experience}</p>
                  
                  {/* Progress Bar */}
                  <div className="skill-progress">
                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          background: skill.categoryColor
                        }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="skill-category">
                    <span className="category-badge" style={{ background: skill.categoryColor }}>
                      {skill.categoryIcon} {skill.category}
                    </span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="skill-hover-effect"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="skills-stats">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🚀</div>
              <div className="stat-content">
                <span className="stat-number">8+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🧮</div>
              <div className="stat-content">
                <span className="stat-number">500+</span>
                <span className="stat-label">Problems Solved</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-content">
                <span className="stat-number">3</span>
                <span className="stat-label">Live Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;