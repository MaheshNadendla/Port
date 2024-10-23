// Portfolio.js
import React from 'react';
import './Portfolio.css'; // Include fog, ghost animations, and project card effects

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: 'project1.jpg', link: '/project1' },
    { title: 'Project 2', image: 'project2.jpg', link: '/project2' },
    // More projects
  ];

  return (
    <div id="portfolio" className="portfolio-section spooky-bg">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <a href={project.link} className="view-project">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
