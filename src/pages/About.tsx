import React from "react";
import "./About.css";
import team1 from "../images/team/team1.jpg";
import team2 from "../images/team/team2.jpg";
import team3 from "../images/team/team3.jpg";
import team4 from "../images/team/team4.jpg";
import Footer from "../components/Footer";
import logo from "../images/FYNTransparentLogo.png";
import teaching from "../images/MxrMarsPics IMG 3497.jpeg";
import PythonBootcampBanner from "../components/PythonBootcampBanner";

function About() {
  return (
    <>
      <main className="about-main">
        <section className="about-fyn-section">
          <div className="about-fyn-content">
            <h1 className="about-fyn-title">What is FYN?</h1>
            <p className="about-fyn-desc">
              FYN (Future You Now) is a student-led initiative dedicated to empowering young minds through accessible, high-quality education in coding, math, and science. Our mission is to inspire, teach, and support the next generation of innovators by providing engaging programs, hands-on learning, and a supportive community.
            </p>
          </div>
          <div className="about-fyn-image">
            <img src={teaching} alt="FYN Teaching" className="about-fyn-teaching-img about-fyn-teaching-img-cropped" />
          </div>
        </section>
        <PythonBootcampBanner />
        <h1 className="about-team-title">Meet the FYN Team:</h1>
        <div className="about-team-grid">
          <a
            href="https://www.instagram.com/xrnsv15/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-team-card"
          >
            <img src={team1} alt="Arnav Gupta" className="about-team-img" />
            <div className="about-team-name">Arnav Gupta</div>
            <div className="about-team-desc">
              Leads instruction and built the FYN website to power our programs
              from the ground up.
            </div>
          </a>
          <a
            href="https://www.instagram.com/yoshiii.20/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-team-card"
          >
            <img src={team2} alt="Moksh Joshi" className="about-team-img" />
            <div className="about-team-name">Moksh Joshi</div>
            <div className="about-team-desc">
              Manages outreach, and helps grow FYN’s presence through social
              media and marketing.
            </div>
          </a>
          <a
            href="https://www.instagram.com/juice_ap1/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-team-card"
          >
            <img src={team3} alt="Aryan Patel" className="about-team-img" />
            <div className="about-team-name">Aryan Patel</div>
            <div className="about-team-desc">
              Helps design curriculum and teaches coding sessions with clarity
              and expertise.
            </div>
          </a>
          <a
            href="https://www.instagram.com/aaravmishra2009/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-team-card"
          >
            <img src={team4} alt="Aarav Mishra" className="about-team-img" />
            <div className="about-team-name">Aarav Mishra</div>
            <div className="about-team-desc">
              Supports curriculum development and oversees FYN’s financial
              planning.
            </div>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
