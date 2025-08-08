import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        {
            category: 'Programming Languages',
            skills: [
                { name: 'Java', level: 90, stars: 5 },
                { name: 'Python', level: 85, stars: 4 },
                { name: 'C', level: 75, stars: 4 },
            ],
        },
        {
            category: 'MERN Stack',
            skills: [
                { name: 'MongoDB', level: 75, stars: 4 },
                { name: 'Express.js', level: 80, stars: 4 },
                { name: 'React', level: 90, stars: 5 },
                { name: 'Node.js', level: 75, stars: 4 },
            ],
        },
        {
            category: 'Web Development',
            skills: [
                { name: 'JavaScript', level: 90, stars: 5 },
                { name: 'HTML', level: 95, stars: 5 },
                { name: 'CSS', level: 85, stars: 4 },
                { name: 'PHP', level: 75, stars: 4 },
                { name: 'DSA', level: 90, stars: 5 },
            ],
        },
        {
            category: 'Tools & Technologies',
            skills: [
                { name: 'Git', level: 85, stars: 5 },
                { name: 'GitHub', level: 85, stars: 5 },
                { name: 'Postman API', level: 75, stars: 4 },
                { name: 'SQL', level: 80, stars: 4 },
                { name: 'phpMyAdmin', level: 70, stars: 3 },
            ],
        },
    ];

    const radius = 45;
    const circumference = 2 * Math.PI * radius;

    return (
        <div id="skill" className="skills-container">
            <img src="/assets/home-tree1.png" alt="hello" className="LeftsTree" />
            <img src="/assets/home-tree2.png" alt="hello" className="RightsTree" />
            <h2 className="skills-heading">👻 Skills & Spooky Powers 👻</h2>
            <div className="skills-list">
                {skills.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="category-name">{category.category}</h3>
                        <div className="AllSkills">
                            {category.skills.map((skill, skillIndex) => {
                                const offset = circumference - (skill.level / 100) * circumference;

                                return (
                                    <div key={skillIndex} className="skill-item">
                                        <h4 className="skill-name">{skill.name}</h4>
                                        <div className="star-rating">
                                            {Array.from({ length: 5 }, (_, starIndex) => (
                                                <span
                                                    key={starIndex}
                                                    className={`star ${starIndex < skill.stars ? 'filled' : ''}`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <div className="circular-loader">
                                            <svg className="circular-loader-svg" viewBox="0 0 100 100">
                                                <circle className="circle-bg" cx="50" cy="50" r="45" />
                                                <circle
                                                    className="circle-progress"
                                                    cx="50"
                                                    cy="50"
                                                    r="45"
                                                    style={{
                                                        strokeDasharray: circumference,
                                                        strokeDashoffset: offset,
                                                    }}
                                                />
                                            </svg>
                                            <div className="percentage">{skill.level}%</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
