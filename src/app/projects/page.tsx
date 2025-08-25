import React from "react";
import '../projects/project.css'

type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "React Component Library",
    description: "A reusable React component library with customizable UI elements for building modern web applications efficiently.",
    link: "https://pixel-ui-library.vercel.app/",
  },
  {
    title: "Future Coding Website",
    description: "A platform for coding enthusiasts offering internships, hackathons, and quizzes, complete with certificates for participants.",
    link: "https://future-coding.vercel.app/",
  },
  {
    title: "Job Board",
    description: "A full-stack job board application enabling job posting, candidate applications, and real-time notifications for employers.",
    link: "https://jobboard-seven-phi.vercel.app/",
  },
];


export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
