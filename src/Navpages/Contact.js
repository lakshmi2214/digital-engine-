import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle } from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

// Backend 
const contactApiUrl =
  import.meta.env.VITE_CONTACT_API_URL ||
  "http://127.0.0.1:8030/api/digital/leads/";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      message: formData.message.trim(),
    };

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = null;
      const contentType = response.headers.get("content-type") || "";

      if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = text ? { detail: text } : null;
      }

      if (!response.ok) {
        const message =
          data?.detail ||
          (data?.fields ? `Missing: ${data.fields.join(", ")}` : "Failed to submit lead.");
        setErrorMessage(message);
        return;
      }

      console.log("Successfully saved lead in backend:", data);
      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Unable to submit contact request:", error);
      setErrorMessage(
        "Could not connect to the server. Please check if the backend is running."
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
            Book a complimentary growth strategy session. Our team of specialists will analyze your pipeline, brand identity, and positioning to outline an execution roadmap.
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
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={18} />
              </div>
              <div>
                <strong>Visit Headquarters</strong>
                <span>DLF CyberCity, Phase 3, Gurugram, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          {submitted ? (
            <div className="form-success">
              <h2>Thank You!</h2>
              <p>Your strategy request has been submitted successfully. A growth specialist will reach out to you within 24 hours.</p>
              <button
                className="primary-btn"
                onClick={() => {
                  setSubmitted(false);
                }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {errorMessage && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#e53e3e",
                    background: "rgba(229, 62, 62, 0.1)",
                    padding: "10px 14px",
                    borderRadius: "6px",
                    marginBottom: "15px",
                    fontSize: "0.9rem",
                  }}
                >
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="name@company.com"
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
                  <label htmlFor="company">Company / Startup</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="e.g. Acme Corp"
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
                  placeholder="Tell us about your brand challenges or growth goals..."
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
