import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Saniya Khan. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Saniya-khan68" target="_blank" title="GitHub: saniyakhan">GitHub</a>
          <a href="https://www.linkedin.com/in/saniya-khan-7b2858306/" target="_blank" title="LinkedIn: saniyakhan">LinkedIn</a>
          <a href="mailto:you@example.com" title="Email: you@example.com">Email</a>
        </div>

      </div>
    </footer>
  );
}
