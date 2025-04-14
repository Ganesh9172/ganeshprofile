import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import profilePic from "./WhatsApp Image 2025-04-14 at 11.30.49 AM.jpeg";

function Home() {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="card animated fadeInUp">
          {/* Profile Picture */}
          <img src={profilePic} alt="Profile" className="profile-pic" />

          <h1 className="name">Ganesh Bhosale</h1>
          <p className="description">
            Aspiring Software Engineer with a strong foundation in full-stack
            development. Passionate about problem-solving, competitive
            programming, and building scalable tech solutions.
          </p>

          <h2 className="section-title">Education</h2>
          <p className="info-item">
            <strong>B.E, Information Technology</strong>
            <br />
            Savitribai Phule Pune University (2023 – 2027)
          </p>

          <h2 className="section-title">Hobbies</h2>
          <p className="info-item">
            <strong>
              <li>Competitive Programming</li>
              <li>Reading</li>
              <li>Music</li>
              </strong> 
                     <br />
          </p>

          <h2 className="section-title">Achievements</h2>
          <p className="info-item">
            Completed a 4-week virtual internship in Web Development with Hex
            Softwares (Sept 10 - Oct 10)
          </p>

          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li>Java, Python, HTML5, CSS</li>
            <li>Data Analysis, SQL</li>
          </ul>

          <Link to="/contact" className="contact-button">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Ganesh</h1>
        <p>
          Email:{" "}
          <a href="mailto:omganeshbhosalepatil@gmail.com">
            omganeshbhosalepatil@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:+8421987447">+91 8421987447</a>
        </p>
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
      </div>
    </div>
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
