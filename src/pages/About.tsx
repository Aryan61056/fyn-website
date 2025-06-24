import React from 'react';
import './About.css';
import team1 from '../images/team/team1.jpg';
import team2 from '../images/team/team2.jpg';
import team3 from '../images/team/team3.jpg';
import team4 from '../images/team/team4.jpg';

function About() {
  return (
    <main className="about-main">
      <h1 className="about-team-title">Meet the FYN Team:</h1>
      <div className="about-team-grid">
        <a
          href="https://www.instagram.com/xrnsv15/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-team-card"
        >
          <img
            src={team1}
            alt="Arnav Gupta"
            className="about-team-img"
          />
          <div className="about-team-name">Arnav Gupta</div>
          <div className="about-team-desc">
            Leads instruction and built the FYN website to power our programs from the ground up.
          </div>
        </a>
        <a
          href="https://www.instagram.com/yoshiii.20/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-team-card"
        >
          <img
            src={team2}
            alt="Moksh Joshi"
            className="about-team-img"
          />
          <div className="about-team-name">Moksh Joshi</div>
          <div className="about-team-desc">
            Manages outreach, and helps grow FYN’s presence through social media and marketing.
          </div>
        </a>
        <a
          href="https://www.instagram.com/juice_ap1/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-team-card"
        >
          <img
            src={team3}
            alt="Aryan Patel"
            className="about-team-img"
          />
          <div className="about-team-name">Aryan Patel</div>
          <div className="about-team-desc">
            Helps design curriculum and teaches coding sessions with clarity and expertise.
          </div>
        </a>
        <a
          href="https://www.instagram.com/aaravmishra2009/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-team-card"
        >
          <img
            src={team4}
            alt="Aarav Mishra"
            className="about-team-img"
          />
          <div className="about-team-name">Aarav Mishra</div>
          <div className="about-team-desc">
            Supports curriculum development and oversees FYN’s financial planning.
          </div>
        </a>
      </div>
    </main>
  );
}

export default About;
