import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
import Programs from "./pages/Programs";
import PythonBootcamp from "./pages/PythonBootcamp";

const LOGO_SRC = require("./images/FYNTransparentLogo.png");
const CLASSROOM_IMG = require("./images/classroom.jpg");

const TITLE = "Future You Now";

function AnimatedTitle() {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(TITLE.slice(0, i + 1));
      i++;
      if (i === TITLE.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);
  return <h1 className="animated-title">{displayed}</h1>;
}

function useScrollFadeIn(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

function FeaturesSection() {
  const [ref, visible] = useScrollFadeIn(0.18);

  return (
    <section
      ref={ref}
      className={`features-section${visible ? " features-visible" : ""}`}
    >
      <div className="features-header">
        <h2>
          Empowering
          <br />
          young minds
          <br />
          through
          <br />
          technology
        </h2>
        <p>
          Join our interactive coding classes designed for kids and teens. Learn
          real-world skills in a fun and engaging way.
        </p>
      </div>
      <div className="features-cards">
        <div className="feature-card">
          <span className="feature-icon">❝</span>
          <h3>
            Interactive
            <br />
            learning
          </h3>
          <p>
            Our classes are designed to be hands-on, allowing students to learn
            by doing and exploring.
          </p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">👤</span>
          <h3>
            Peer-led
            <br />
            teaching
          </h3>
          <p>
            High school students share their knowledge and experience, making
            lessons relatable and fun.
          </p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">✧</span>
          <h3>
            Project-
            <br />
            based
            <br />
            approach
          </h3>
          <p>
            Students work on real projects, applying their skills to create
            something meaningful.
          </p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">💬</span>
          <h3>
            Beginner-
            <br />
            friendly
          </h3>
          <p>
            Our courses are tailored for those new to coding, ensuring a smooth
            and enjoyable learning experience.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [ref, visible] = useScrollFadeIn(0.13);

  return (
    <section
      ref={ref}
      className={`faq-section${visible ? " faq-visible" : ""}`}
    >
      <div className="faq-header">
        <span className="faq-label">COMMON QUESTIONS</span>
        <h2>Inspiring Future Innovators with Code</h2>
        <p>
          Have questions about our coding bootcamps? Here are some common
          queries answered to help you understand how we empower young learners
          through technology.
        </p>
      </div>
      <div className="faq-grid">
        <div className="faq-card">
          <h3>How is the program organized?</h3>
          <p>
            Our curriculum is interactive and project-focused, emphasizing
            practical skills. Students engage in hands-on tasks and
            collaborative projects.
          </p>
        </div>
        <div className="faq-card">
          <h3>Who is eligible for the bootcamps?</h3>
          <p>
            Our bootcamps welcome elementary and middle school students eager to
            explore technology and learn coding in a dynamic setting.
          </p>
        </div>
        <div className="faq-card">
          <h3>What is the format of the classes?</h3>
          <p>
            Classes are held online, enabling students to learn from home.
            Sessions are led by high school mentors sharing their experiences.
          </p>
        </div>
        <div className="faq-card">
          <h3>What distinguishes this program?</h3>
          <p>
            Our peer-led approach is unique. Students teaching students fosters
            a relatable and supportive environment, enhancing creativity and
            community.
          </p>
        </div>
        <div className="faq-card">
          <h3>How do I register my child?</h3>
          <p>
            Registration is straightforward. Visit our website to enroll in
            upcoming sessions. We offer flexible timings to suit various time
            zones.
          </p>
        </div>
        <div className="faq-card">
          <h3>What materials are included?</h3>
          <p>
            We provide all essential resources, including access to coding tools
            and project templates, ensuring a thorough learning experience.
          </p>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="home-main">
              <section className="intro-row">
                <div className="intro-col">
                  <img
                    src={LOGO_SRC}
                    alt="FYN Logo"
                    className="fyn-logo-fade-large"
                  />
                  <AnimatedTitle />
                  <p className="intro-desc">
                    Personalized tutoring in math, science, and coding—designed
                    to build confidence, spark curiosity, and unlock each
                    student’s full potential. Learn today. Lead tomorrow.
                  </p>
                </div>
                <div className="intro-img-col">
                  <img
                    src={CLASSROOM_IMG}
                    alt="Classroom"
                    className="classroom-img"
                  />
                </div>
              </section>
              <FeaturesSection />
              <FAQSection />
              <Footer />
            </main>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/python-bootcamp" element={<PythonBootcamp />} />
      </Routes>
    </Router>
  );
}

export default App;
