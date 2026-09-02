import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import profilePic from "./WhatsApp Image 2025-04-14 at 11.30.49 AM.jpeg";

function Home() {
  return (
    <main className="hero" role="main">
      <div className="overlay">
        <article className="card animated fadeInUp">
          {/* Profile Picture */}
          <img
            src={profilePic}
            alt="Ganesh Bhosale - profile"
            className="profile-pic"
            loading="lazy"
          />

          <h1 className="name">Ganesh Bhosale</h1>
          <p className="description">
            Aspiring Software Engineer with a strong foundation in full-stack
            development. Passionate about problem-solving, competitive
            programming, and building scalable tech solutions.
          </p>

          <section aria-labelledby="education">
            <h2 id="education" className="section-title">Education</h2>
            <p className="info-item">
              <strong>B.E, Information Technology</strong>
              <br />
              Savitribai Phule Pune University (2023 – 2027)
            </p>
          </section>

          <section aria-labelledby="hobbies">
            <h2 id="hobbies" className="section-title">Hobbies</h2>
            <ul className="info-item">
              <li>Competitive Programming</li>
              <li>Reading</li>
              <li>Music</li>
            </ul>
          </section>

          <section aria-labelledby="achievements">
            <h2 id="achievements" className="section-title">Achievements</h2>
            <p className="info-item">
              Completed a 4-week virtual internship in Web Development with Hex
              Softwares (Sept 10 - Oct 10)
            </p>
          </section>

          <section aria-labelledby="skills">
            <h2 id="skills" className="section-title">Skills</h2>
            <ul className="skills-list">
              <li>Java</li>
              <li>Python</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Data Analysis</li>
              <li>SQL</li>
            </ul>
          </section>

          <Link to="/contact" className="contact-button" aria-label="Contact Ganesh">
            Contact Me
          </Link>
        </article>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="contact-page" role="main">
      <div className="contact-card">
        <h1>Contact Ganesh</h1>
        <p>
          Email:{" "}
          <a href="mailto:omganeshbhosalepatil@gmail.com">omganeshbhosalepatil@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+918421987447">+91 8421987447</a>
        </p>
        <Link to="/" className="back-button" aria-label="Back to Home">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
