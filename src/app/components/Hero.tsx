"use client";
import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const roles = ["Web Developer", "Front-end Developer", "Full Stack Developer","Software developer"];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];

      if (!deleting) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentRole.length) {
           
          setTimeout(() => setDeleting(true), 800);  
        }
      } else {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-intro">Hi, I’m Saniya Khan</h1>
        <h2 className="hero-role">{displayText}<span className="cursor"></span></h2>
         
        <div className="hero-buttons">
          <a href="#projects" className="hero-button">View Projects</a>
          <a href="#contact" className="hero-button outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
