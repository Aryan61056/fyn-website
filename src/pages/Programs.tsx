import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import "./Programs.css";
const FLIER_IMG = require("../images/pythonPoster.png");

function Programs() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="programs-main">
        <header className="programs-header">
          <h1>Programs</h1>
          <div className="programs-header-img-container">
            <img
              src={FLIER_IMG}
              alt="Classroom"
              className="programs-header-img"
            />
            <p className="programs-image-desc">
              Enroll for our Python Bootcamp today! Beginner-friendly, teaches
              the basic concepts and how to make drawings with Turtle.
              <br />
              <span>
                <button
                  className="learn-more-btn"
                  type="button"
                  onClick={() => navigate("/python-bootcamp")}
                >
                  Learn More
                </button>
              </span>
            </p>
          </div>
          <div className="programs-description-block">
            <h2 className="programs-description-heading">Why FYN Programs?</h2>
            <p className="programs-description">
              FYN offers a variety of programs designed to introduce students to
              the world of technology and coding. Our bootcamps are
              beginner-friendly, project-based, and led by passionate mentors.
              Students gain real-world skills, build confidence, and join a
              supportive learning community.
            </p>
          </div>
        </header>
        <section className="programs-cards-section">
          <div className="programs-cards">
            <div className="program-card">
              <h2>Intro to Python</h2>
              <p>
                Join our beginner-friendly Python bootcamp from July 14, 2025 to July
                18, 2025. Students will learn the foundations, conditionals, loops,
                lists and the Turtle graphics library.
              </p>
              <button
                className="learn-more-btn"
                type="button"
                onClick={() => navigate("/python-bootcamp")}
              >
                Learn More
              </button>
            </div>
            <div className="program-card program-card-disabled">
              <h2>Web Development</h2>
              <p>Learn to build modern websites and web apps from scratch.</p>
              <div className="program-card-details">
                <ul>
                  <li>HTML, CSS, and JavaScript basics</li>
                  <li>Responsive design and interactive features</li>
                  <li>Publish your own website</li>
                </ul>
              </div>
              <div className="programs-coming-soon-on-card">
                More to come soon!
              </div>
            </div>
            <div className="program-card program-card-disabled">
              <h2>Computer Science</h2>
              <p>
                Explore the fundamentals of computer science and problem
                solving.
              </p>
              <div className="program-card-details">
                <ul>
                  <li>Algorithms and data structures</li>
                  <li>Critical thinking and creativity</li>
                  <li>Prepare for advanced coding and competitions</li>
                </ul>
              </div>
              <div className="programs-coming-soon-on-card">
                More to come soon!
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Programs;
