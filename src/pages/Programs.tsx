import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import "./Programs.css";
const CLASSROOM_IMG = require("../images/classroom.jpg");

function Programs() {
  return (
    <>
      <Navbar />
      <main className="programs-main">
        <header className="programs-header">
          <h1>Programs</h1>
          <div className="programs-header-img-container">
            <img
              src={CLASSROOM_IMG}
              alt="Classroom"
              className="programs-header-img"
            />
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
                Start coding with Python, the world’s most popular beginner
                language.
              </p>
              <div className="program-card-details">
                <ul>
                  <li>No prior experience required</li>
                  <li>Hands-on projects and games</li>
                  <li>Build a strong foundation in logic and problem solving</li>
                </ul>
              </div>
            </div>
            <div className="program-card program-card-disabled">
              <h2>Web Development</h2>
              <p>
                Learn to build modern websites and web apps from scratch.
              </p>
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
                Explore the fundamentals of computer science and problem solving.
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
