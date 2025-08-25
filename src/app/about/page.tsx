 "use client";
import React from "react";
import "./about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        {/* Profile Image */}
        {/* <div className="about-image">
          <img src="/profile.jpg" alt="Saniya Khan" />
        </div> */}

        {/* About Content */}
        <div className="about-text">
          <h2>About <span>Me</span></h2>
          <h4>Full-Stack Developer | BCA Student</h4>
          <p>
            I am <span>Saniya Khan</span>, a passionate and detail-oriented full-stack developer, 
            currently pursuing my Bachelor of Computer Applications (BCA). 
            With a strong foundation in <b>frontend and backend development</b>, 
            I specialize in building modern, responsive, and user-friendly web applications. 
          </p>
          <p>
            My expertise includes <b>React.js, Next.js, Node.js, and SQL/NoSQL databases</b>. 
            Along with coding, I value clean design and seamless user experience, 
            ensuring that every project I work on is both functional and visually appealing.
          </p>
          <p>
            Currently, I am enhancing my skills in <b>Next.js and full-stack project building</b>, 
            while also exploring opportunities in internships and collaborations to 
            contribute meaningfully in the field of web development.
          </p>

          {/* Download Resume Button */}
          {/* <div className="about-actions">
            <a href="/resume.pdf" target="_blank" className="resume-btn">
              📄 Download Resume
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
