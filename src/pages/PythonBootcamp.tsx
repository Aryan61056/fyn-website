import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import "./PythonBootcamp.css";
import Day1Img from "../images/projects/Day1.png";
import Day2Img from "../images/projects/Day2.png";
import Day3Img from "../images/projects/Day3.png";
import Day4Img from "../images/projects/Day4.png";
import Day51Img from "../images/projects/Day5-1.png";

const days = [
  {
    title: "Day 1: Getting Started with Python",
    recap: "Introduction and setup",
    lesson:
      "Print statements and variables, learn about data types, taking user input, and basic math operations.",
    project: "Create a Mad Libs-style story.",
  },
  {
    title: "Day 2: Making Decisions",
    recap: "Review of variables and data types",
    lesson: "Conditionals (if/else), user input",
    project: "Build a simple quiz or guessing game",
  },
  {
    title: "Day 3: Loops and Lists",
    recap: "Review of conditionals",
    lesson: "For/while loops, lists, and iteration",
    project: "Make a number game or list-based app",
  },
  {
    title: "Day 4: Creative Coding with Turtle",
    recap: "Review of loops and lists",
    lesson: "Introduction to Turtle graphics",
    project: "Draw colorful shapes and patterns",
  },
  {
    title: "Day 5: Final Project & Showcase",
    recap: "Review of Turtle and all concepts",
    lesson: "Combining everything learned",
    project: "Create and present your own mini-game or artwork",
  },
];

const gallery = [
  { src: Day1Img, caption: "Day 1: Mad Libs-style Story" },
  { src: Day2Img, caption: "Day 2: Quiz or Guessing Game" },
  { src: Day3Img, caption: "Day 3: Number Game or List App" },
  { src: Day4Img, caption: "Day 4: Turtle Graphics Art" },
  { src: Day51Img, caption: "Day 5: Final Project Showcase" },
];

function PythonBootcamp() {
  const [expanded, setExpanded] = useState<number | null>(null);

  // Detect mobile
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 768px)").matches;

  const handleExpand = (idx: number) => {
    if (isMobile) {
      setExpanded(expanded === idx ? null : idx);
    }
  };

  return (
    <>
      <Navbar />
      <main className="python-bootcamp-main">
        <header className="python-bootcamp-header">
          <h1>Intro to Python Bootcamp:</h1>
          <p className="python-bootcamp-desc">
            Dive into coding with our beginner-friendly Python Bootcamp! Each day
            features a recap, a hands-on lesson, and a creative project to
            reinforce your learning. Our bootcamp runs from{" "}
            <strong>July 14, 2025 to July 18, 2025.</strong> Every day of the
            bootcamp we will have a class from{" "}
            <strong>5:00 PM to 6:30 PM</strong>. The bootcamp will be held
            online, and will cost <strong>$60</strong>.
          </p>
        </header>
        <section className="python-bootcamp-days">
          {days.map((day, idx) => (
            <div
              className={`bootcamp-day${
                expanded === idx ? " expanded" : ""
              }`}
              key={day.title}
              tabIndex={0}
              onClick={() => handleExpand(idx)}
              onMouseEnter={() => !isMobile && setExpanded(idx)}
              onMouseLeave={() => !isMobile && setExpanded(null)}
            >
              <h2>{day.title}</h2>
              <div className="bootcamp-day-details">
                <ul>
                  <li>
                    <strong>Recap:</strong> {day.recap}
                  </li>
                  <li>
                    <strong>Lesson:</strong> {day.lesson}
                  </li>
                  <li>
                    <strong>Project:</strong> {day.project}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </section>
        <section className="python-bootcamp-gallery">
          <h2 className="gallery-heading">Project Gallery</h2>
          <p className="gallery-desc">
            See some of the creative projects students will build during the
            bootcamp!
          </p>
          <div className="gallery-images">
            {gallery.map((img, idx) => (
              <figure className="gallery-figure" key={img.caption}>
                <img
                  className="gallery-img"
                  src={img.src}
                  alt={img.caption}
                />
                <figcaption className="gallery-caption">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PythonBootcamp;
