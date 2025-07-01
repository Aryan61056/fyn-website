import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import "./PythonBootcamp.css";
import Day1Img from "../images/projects/Day1.png";
import Day2Img from "../images/projects/Day2.png";
import Day3Img from "../images/projects/Day3.png";
import Day4Img from "../images/projects/Day4.png";
import Day51Img from "../images/projects/Day5-1.png";
import Day53Img from "../images/projects/Day5-3.png";


const days = [
	{
		title: "Day 1: Python Basics",
		icon: "📘",
		objective:
			"Introduce basic Python syntax, input/output, variables, and data types.",
		lesson: [
			"Introduction to programming and why Python is popular",
			"What is Python? History and real-world uses",
			"How to install Python and set up your first program",
			"Printing with print(): syntax, formatting, and best practices",
			"Getting input using input(): interactive programs",
			"Variables: naming rules, assignment, and memory",
			"Data types: integers, floats, strings, and type conversion",
			"Basic math operations (+, -, *, /): order of operations, examples",
			"Hands-on: Try-it-yourself mini exercises after each concept",
			"Common errors and how to fix them (debugging basics)",
		],
		bonus: [
			"Why Python?",
			"How Python is used in everyday technology",
		],
		project: {
			title: "Mad Libs Game",
			description:
				"Students create a short story using inputs (name, animal, color, place). This helps them practice input, string concatenation, and printing. Includes collaborative brainstorming and sharing stories with the class.",
		},
		outcomes: [
			"Confidently write and run basic Python scripts",
			"Understand variables and data types",
			"Collect and use user input in programs",
			"Debug simple errors independently",
		],
	},
	{
		title: "Day 2: Conditionals + Turtle Basics",
		icon: "🐢",
		objective:
			"Learn decision-making with if/else and start using Turtle for visual feedback.",
		lesson: [
			"Recap: Variables and input",
			"if, elif, else statements: syntax and logic",
			"Comparison operators (==, !=, <, >): practical examples",
			"Logical operators (and, or, not): combining conditions",
			"Introduction to the Turtle module: what is Turtle?",
			"Creating a Turtle object and basic commands",
			"Drawing with Turtle: forward(), right(), left(), color()",
			"Hands-on: Predict the output of sample code snippets",
			"Mini-challenge: Write a program with multiple conditions",
		],
		bonus: [
			"Turtle art in pop culture",
			"How graphics make coding fun",
		],
		project: {
			title: "'Guess the Age' with Turtle Reactions",
			description:
				"Students write a program that asks for a user’s age, uses conditionals to print a message, and then uses Turtle to draw a shape or change color based on age category. Includes peer review and sharing creative solutions.",
		},
		outcomes: [
			"Write programs that make decisions based on user input",
			"Use Turtle to create simple graphics",
			"Apply logical thinking to solve problems",
		],
	},
	{
		title: "Day 3: Loops + Turtle Patterns",
		icon: "🔁",
		objective:
			"Learn how to repeat actions using loops and apply them to create shapes with Turtle.",
		lesson: [
			"What is a loop? Why are loops useful?",
			"while loop: syntax, flow, and real-life analogies",
			"for loop: looping through a range, step values",
			"break and continue: controlling loop flow",
			"Combining loops with Turtle for repeated actions",
			"Hands-on: Predict the output of loop code",
			"Mini-challenge: Write a loop to print a pattern",
		],
		bonus: [
			"Cool patterns you can make with code",
			"How loops help automate tasks",
		],
		project: {
			title: "Number Counter & Shape Spinner",
			description:
				"Students input a number, use a for loop to count to that number, then use that number to draw a polygon with Turtle. Visual tie-in: 'The more you count, the more sides your shape has.' Includes group discussion on creative shapes.",
		},
		outcomes: [
			"Use for and while loops to automate tasks",
			"Understand and apply loop control statements",
			"Create dynamic graphics with Turtle and loops",
		],
	},
	{
		title: "Day 4: Lists + Turtle Color Sequences",
		icon: "📋",
		objective:
			"Learn how to store and use multiple values using lists, and visualize sequences with Turtle.",
		lesson: [
			"What is a list? Everyday examples of lists",
			"Creating, accessing (list[0]), and modifying lists",
			"append() and remove(): adding and deleting items",
			"Looping through a list: for item in list",
			"Using lists with Turtle for creative output",
			"Hands-on: Build a list from user input",
			"Mini-challenge: Find the largest/smallest item in a list",
		],
		bonus: [
			"Lists in games and apps",
			"Fun ways to use lists in projects",
		],
		project: {
			title: "'Favorite Colors Spiral'",
			description:
				"Students input 5 favorite colors, stored in a list. Use a for loop to draw a spiral using those colors. Visual tie-in: Each list element becomes one turn of the spiral, using t.color(color). Includes sharing and comparing spirals.",
		},
		outcomes: [
			"Create and manipulate lists in Python",
			"Loop through lists to process data",
			"Combine lists and graphics for creative projects",
		],
	},
	{
		title: "Day 5: Final Adventure Project — Story + Turtle World",
		icon: "🎮",
		objective:
			"Combine everything learned (input, conditionals, loops, lists, turtle) into a text-based + visual game.",
		lesson: [
			"Quick review of all core concepts",
			"How to structure a project using everything together",
			"Planning: brainstorming story ideas and map elements",
			"Writing interactive stories: input, branching, and feedback",
			"Using lists to track inventory or checkpoints",
			"Drawing a map with Turtle: shapes for locations",
			"Testing and debugging your project",
		],
		bonus: [
			"How to show your project to friends",
			"Tips for making your game unique",
		],
		project: {
			title: "Text-Based Adventure with Turtle Map",
			description:
				"Students create a choose-your-own-adventure game. User makes decisions using input. Use conditionals and loops for branching paths. Store inventory or checkpoints in a list. Draw simple map elements using Turtle (e.g., a cave is a triangle, a lake is a blue circle, etc.).",
		},
		outcomes: [
			"Plan and build a complete Python project",
			"Integrate all core programming concepts",
			"Present and explain your code to others",
		],
	},
];

const gallery = [
	{ src: Day1Img, caption: "Day 1: Mad Libs-style Story", dayIdx: 0 },
	{ src: Day2Img, caption: "Day 2: Quiz or Guessing Game", dayIdx: 1 },
	{ src: Day3Img, caption: "Day 3: Number Game or List App", dayIdx: 2 },
	{ src: Day4Img, caption: "Day 4: Turtle Graphics Art", dayIdx: 3 },
	{ src: Day53Img, caption: "Day 5: Final Project Showcase", dayIdx: 4 },
];

function PythonBootcamp() {
	const [expanded, setExpanded] = useState<number | null>(null);
	const [activeGallery, setActiveGallery] = useState<number | null>(null);

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
					<a
						href="http://app.fynacademy.org/signup"
						className="bootcamp-signup-btn"
						target="_blank"
						rel="noopener noreferrer"
					>
						Sign Up for Bootcamp
					</a>
				</header>
				<section className="python-bootcamp-days">
					{days.map((day, idx) => (
						<div
							className={`bootcamp-day${
								expanded === idx ? " expanded" : ""
							}`}
							key={day.title}
							tabIndex={0}
							onClick={() => {
								if (expanded !== idx) {
									setExpanded(idx);
								} else {
									setExpanded(null);
								}
							}}
						>
							<div className="bootcamp-day-header">
								<h2>
									{day.icon} {day.title}
								</h2>
								<span
									className={`dropdown-arrow${
										expanded === idx ? " expanded" : ""
									}`}
									aria-hidden="true"
								>
									▼
								</span>
							</div>
							<div className="bootcamp-day-details">
								<section className="bootcamp-section objective-section">
									<h3>Objective</h3>
									<p>{day.objective}</p>
								</section>
								<section className="bootcamp-section lesson-section">
									<h3>Lesson</h3>
									<ul>
										{day.lesson.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								</section>
								{day.bonus && (
									<section className="bootcamp-section bonus-section">
										<h3>Bonus Topics & Discussion</h3>
										<ul>
											{day.bonus.map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</ul>
									</section>
								)}
								<section className="bootcamp-section project-section">
									<h3>Project: {day.project.title}</h3>
									<p>{day.project.description}</p>
								</section>
								{day.outcomes && (
									<section className="bootcamp-section outcomes-section">
										<h3>Skills & Learning Outcomes</h3>
										<ul>
											{day.outcomes.map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</ul>
									</section>
								)}
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
						{gallery.map((img, idx) => {
							const projectDesc = days[img.dayIdx]?.project?.description;
							return (
								<figure
									className={`gallery-figure${
										activeGallery === idx ? " active" : ""
									}`}
									key={img.caption}
									tabIndex={0}
									onMouseEnter={() => setActiveGallery(idx)}
									onMouseLeave={() => setActiveGallery(null)}
									onFocus={() => setActiveGallery(idx)}
									onBlur={() => setActiveGallery(null)}
									onClick={() =>
										setActiveGallery(activeGallery === idx ? null : idx)
									}
								>
									<img
										className="gallery-img"
										src={img.src}
										alt={img.caption}
									/>
									<figcaption className="gallery-caption">
										{img.caption}
									</figcaption>
									{projectDesc && (
										<div
											className={`gallery-description${
												activeGallery === idx ? " show" : ""
											}`}
										>
											{projectDesc}
										</div>
									)}
								</figure>
							);
						})}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default PythonBootcamp;
