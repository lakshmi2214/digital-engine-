import React from "react";
import { Compass, Eye, ShieldCheck, Heart, Sparkles, Users } from "lucide-react";

const values = [
  {
    icon: Compass,
    title: "Bold Strategy",
    description: "We don't follow trends; we define them. Our strategies are built on deep analytics and industry foresight.",
  },
  {
    icon: Sparkles,
    title: "Relentless Creativity",
    description: "Every brand has a story. We tell stories that captivate audiences, inspire loyalty, and drive conversions.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    description: "Transparency and metrics that matter. We measure success by the enterprise growth we build.",
  },
  {
    icon: Heart,
    title: "Partnership Mindset",
    description: "We work as an extension of your leadership team. Your growth challenges are our challenges.",
  },
];

const About = ({ onNavigate }) => {
  return (
    <section id="about" className="about-page fade-in">
      <div className="about-hero">
        <span className="section-badge">
          <Users size={12} style={{ marginRight: 6 }} /> ABOUT US
        </span>
        <h1>We Build Engines of Growth and Innovation.</h1>
        <p className="about-subtitle">
          At Digital Engine, we believe that every great business starts with an idea, and with the right strategy, media, and technology, that idea can become a dominant market leader.
        </p>
      </div>

      <div className="about-mission-vision">
        <div className="vision-box">
          <div className="vision-icon">
            <Eye size={24} />
          </div>
          <h2>Our Vision</h2>
          <p>
            To become India's most comprehensive and trusted growth ecosystem, enabling businesses of all sizes to seamlessly unlock digital, creative, operational, and financial scale under one cohesive roof.
          </p>
        </div>

        <div className="vision-box">
          <div className="vision-icon">
            <Sparkles size={24} />
          </div>
          <h2>Our Mission</h2>
          <p>
            To combine data-driven technology, high-impact storytelling (Asli Kahani), business strategy, and performance-led media execution to accelerate our clients' journey from idea to empire.
          </p>
        </div>
      </div>

      <div className="about-values">
        <div className="values-header">
          <h2>Our Core Pillars</h2>
          <p>The operational principles that guide our consultants and creative specialists every day.</p>
        </div>

        <div className="values-grid">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="value-card" key={index}>
                <div className="value-icon">
                  <Icon size={20} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="about-cta">
        <h2>Want to know how we work?</h2>
        <p>Get in touch with our team of specialists for a consultation session.</p>
        <button className="primary-btn" onClick={() => onNavigate("contact")}>
          Let's Talk
        </button>
      </div>
    </section>
  );
};

export default About;