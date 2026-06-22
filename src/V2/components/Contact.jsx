import React, { useState } from 'react';
import { profile } from '../data';
import SectionHeading from './SectionHeading';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sent

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // No backend wired up — replace this with an API call or form service
    // (e.g. Formspree, EmailJS, or your own endpoint) to actually send messages.
    setStatus('sent');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="section__inner">
        <SectionHeading index={6} label="contact" title="Get In Touch" />

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__intro">
              Have a project in mind, a question about a course, or just want to
              say hi? My inbox is open.
            </p>

            <ul className="contact__details">
              <li className="contact__detail-item">
                <span className="contact__detail-label">Email</span>
                <a href={`mailto:${profile.email}`} className="contact__detail-value">
                  {profile.email}
                </a>
              </li>
              <li className="contact__detail-item">
                <span className="contact__detail-label">Location</span>
                <span className="contact__detail-value">{profile.location}</span>
              </li>
            </ul>

            <div className="contact__social">
              <a href={profile.social.github} className="contact__social-link">
                GitHub
              </a>
              <a href={profile.social.linkedin} className="contact__social-link">
                LinkedIn
              </a>
              <a href={profile.social.twitter} className="contact__social-link">
                Twitter
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="contact__input"
                placeholder="Your name"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="contact__input"
                placeholder="you@example.com"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message" className="contact__label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="contact__input contact__textarea"
                placeholder="Tell me a bit about what you need..."
              />
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              Send Message
            </button>

            {status === 'sent' && (
              <p className="contact__status" role="status">
                Thanks! This demo form doesn't send anywhere yet — connect it to
                your backend or a service like Formspree.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
