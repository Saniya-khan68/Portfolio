 "use client";
import Link from "next/link";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    // { label: "Education", href: "/#education" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="navbar">
      <nav className="navbar-container">
        {/* Logo */}
        <Link href="/" className="logo gradient-text">
          Saniya Khan
        </Link>

       
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="gradient-text">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

         
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>

     
      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="gradient-text" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
