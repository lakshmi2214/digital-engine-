import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle } from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

// Ensure this matches your running Django port (8020)
const contactApiUrl =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACT_API_URL) ||
  (typeof process !== "undefined" && process.env?.REACT_APP_CONTACT_API_URL) ||
  "http://127.0.0.1:8020/api/digital/leads/";

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((currentData) => ({
      ...currentData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.detail || "Failed to submit. Please try again.");
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage(
        err.message || "Could not connect to the server. Please check your backend."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page fade-in">
      <div className="contact-container">
        <div className="contact-info-panel">
          <span className="section-badge">
            <MessageSquare size={12} style={{ marginRight: 6 }} /> LET'S TALK
          </span>
          <h1>Let's Start Your Empire.</h1>
          <p className="contact-desc">
            Book a complimentary growth strategy session. Our team of specialists
            will analyze your pipeline, brand identity, and positioning to outline
            an execution roadmap.
          </p>

          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <Mail size={18} />
              </div>
              <div>
                <strong>Email Us</strong>
                <a href="mailto:growth@digitalengine.in">growth@digitalengine.in</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Phone size={18} />
              </div>
              <div>
                <strong>Call Us</strong>
                <a href="tel:+919876543210">+6366333444</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={18} />
              </div>
              <div>
                <strong>Headquarters</strong>
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          {submitted ? (
            <div className="success-message">
              <h3>Thank You!</h3>
              <p>Your request has been received. Our team will contact you shortly.</p>
              <button
                type="button"
                className="primary-btn"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lead-form">
              <h2>Schedule Consultation</h2>
              <p>Fill out the form below and we'll be in touch within 24 hours.</p>

              {errorMessage && (
                <div className="error-banner" style={{ color: "#ef4444", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "6px" }}>
                  <AlertCircle size={16} /> {errorMessage}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 99999 99999"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter Your Company Name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">How can we help you grow?</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="How we can help you grow?"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="primary-btn submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Request Growth Session"} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
