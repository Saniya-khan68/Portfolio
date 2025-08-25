 "use client";

import React, { useState } from "react";
import "../contact/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000); // auto hide after 4s
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-wrapper">
        <div className="contact-form-container">
          {submitted && <div className="thankyou-msg">Thank you! Your message has been sent.</div>}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />
            <button type="submit" className="contact-button">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Connect with me</h3>
          <p>Email: saniya.140406@gmail.com</p>
          <p>Phone: +91-8209521365</p>
          <div className="contact-social">
            <a href="https://github.com/Saniya-khan68" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/saniya-khan-7b2858306/" target="_blank">LinkedIn</a>
            {/* <a href="mailto:you@example.com">Email</a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
