// Portfolio.js
import React from 'react';
import './Portfolio.css'; // Include fog, ghost animations, and project card effects

const Portfolio = () => {
  const git = 'https://maheshnadendla.github.io';

const projects = [
  { 
    title: "Weather Graph API", 
    image: "product1.jpg", 
    link: `${git}/WeatherAPIGraph`, 
    des: "API to retrieve weather by city name.", 
    lan: "Html, Css, Js, React" 
  },

  { 
      title: "Fest Website", 
      image: "festwebsite.jpg", 
      link: "https://jntuhces-fest-2k25.onrender.com/", 
      des: "College fest events and registrations.", 
      lan: "HTML, CSS, JavaScript, React" 
  },


  { 
    title: "Chat Application", 
    image: "chatapp.jpg", 
    link: `https://chatapp-frontend-5ql0.onrender.com/`, 
    des: "A real-time chat app with messaging.", 
    lan: "MERN Stack, Socket.io" 
  },

  { 
    title: "PHP In-Out Project", 
    image: "phpinout.jpg", 
    link: `https://mahesh-nadendla.infinityfree.me/`, 
    des: "Manage students in-out records.", 
    lan: "PHP, MySQL, HTML, CSS" 
  },


  { 
    title: "Bounce Ball Game", 
    image: "product2.jpg", 
    link: `${git}/BounceBall`, 
    des: "An engaging bouncing ball game.", 
    lan: "Html, Css, Js, React" 
  },
  { 
    title: "IOS Phone Calculator", 
    image: "product3.jpg", 
    link: `${git}/IPhoneCalculator`, 
    des: "iOS-style mobile calculator.", 
    lan: "Html, Css, Js, React" 
  },
  { 
    title: "English Dictionary API", 
    image: "product1.jpg", 
    link: `${git}/Dictionary`, 
    des: "API to get word meanings.", 
    lan: "Html, Css, Js, React" 
  },
  { 
    title: "Snake and Ladder Game", 
    image: "product2.jpg", 
    link: `${git}/SnakeAndLader`, 
    des: "Classic snake and ladder game.", 
    lan: "Html, Css, Js, React" 
  },
  { 
    title: "Tic-Tac-Toe Game", 
    image: "product3.jpg", 
    link: `${git}/Tic-Tac-Toe`, 
    des: "Classic Tic-Tac-Toe with O and X.", 
    lan: "Html, Css, Js, React" 
  },
  { 
    title: "Shopping Cart", 
    image: "product2.jpg", 
    link: `${git}/ClocksCart1`, 
    des: "Cart app for clock sales.", 
    lan: "Html, Css, Js, React" 
  },
  { 
    title: "IOS Phone Calculator", 
    image: "product3.jpg", 
    link: `${git}/Calender`, 
    des: "iOS-style calendar app.", 
    lan: "Html, Css, Js, React" 
  }
];


  console.log(projects[0].link)
  

  return (
    <div id="portfolio" className="portfolio-section Heights ">
      <h2 class="MainHeading">Portfolio</h2>
      <p>Hi, I’m Mahesh, a web developer with a passion for crafting spooky and creative designs.</p>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="overlay">
              <h3>{project.title}</h3>
              <h2>{project.lan}</h2>
              <h1>{project.des}</h1>
            </div>
            <div className="AllButtons">
            <a href={projects[index].link} className="view-project" target="_blank" rel="noopener noreferrer">View Live</a>
              <a href={projects.link} className="view-project">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
