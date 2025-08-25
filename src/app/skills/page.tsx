import React from "react";
import "../skills/skills.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="scroll-wrapper">
        <div className="scroll-content">
          {skills.map((skill, index) => (
            <span className="scroll-item" key={index}>
              {skill}
            </span>
          ))}
          {/* Duplicate once more for smooth infinite scroll */}
          {skills.map((skill, index) => (
            <span className="scroll-item" key={`dup-${index}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
