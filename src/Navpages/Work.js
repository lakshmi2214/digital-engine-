import React from "react";
import { ArrowUpRight, Shield, Sparkles, Award } from "lucide-react";

const projects = [
  {
    title: "Vanguard Identity",
    category: "Branding & Creative",
    tagline: "Reimagining luxury for the next generation.",
    result: "+140% Brand Engagement",
    description: "Complete visual identity, tone of voice, guidelines, and premium packaging design for a luxury sustainable fashion house.",
    theme: "linear-gradient(135deg, #7c4ddb 0%, #1687f5 100%)",
  },
  {
    title: "Fintech Revolution",
    category: "Digital Transformation",
    tagline: "Rebuilding payment flows for 10M+ users.",
    result: "4.9★ App Store Rating",
    description: "UI/UX strategy, mobile application architecture, and AI-driven fraud detection UI for a leading modern neobank.",
    theme: "linear-gradient(135deg, #18c7b1 0%, #1687f5 100%)",
  },
  {
    title: "HyperScale Campaigns",
    category: "Marketing Growth",
    tagline: "Unlocking organic growth and performance scaling.",
    result: "3.5x Return on Ad Spend (ROAS)",
    description: "Multi-channel media buying, technical SEO optimization, and hyper-targeted conversion rate optimization.",
    theme: "linear-gradient(135deg, #ed438d 0%, #7c4ddb 100%)",
  },
  {
    title: "Rethinking Retail",
    category: "Franchise Development",
    tagline: "Standardizing operations for global scale.",
    result: "45 new locations opened in 12 months",
    description: "Comprehensive operational playbook, training portals, licensing structures, and digital menu integration.",
    theme: "linear-gradient(135deg, #ff9c42 0%, #ed438d 100%)",
  },
  {
    title: "Impact Video Series",
    category: "Video Production",
    tagline: "Visual narratives that spark conversation.",
    result: "12M+ Total Organic Views",
    description: "Cinematic commercial films, brand documentaries, and high-conversion social media video ads.",
    theme: "linear-gradient(135deg, #1687f5 0%, #ff9c42 100%)",
  },
  {
    title: "Capital Ready",
    category: "Investor Readiness",
    tagline: "Crafting narratives that secure funding.",
    result: "$15M Series A Secured",
    description: "Financial modeling, investor deck design, narrative structure coaching, and valuation strategy counseling.",
    theme: "linear-gradient(135deg, #7c4ddb 0%, #18c7b1 100%)",
  },
];

const Work = () => {
  return (
    <section className="work-page fade-in">
      <div className="work-header">
        <span className="section-badge">
          <Award size={12} style={{ marginRight: 6 }} /> OUR WORK
        </span>
        <h1>Creating Empires, One Brand at a Time.</h1>
        <p className="work-subtitle">
          Explore a selection of our recent success stories showing how we combine creativity, strategy, and execution to deliver outstanding results.
        </p>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <div className="work-card" key={index}>
            <div className="work-card-media" style={{ background: project.theme }}>
              <div className="work-card-overlay">
                <span className="project-category">{project.category}</span>
                <span className="project-result">{project.result}</span>
              </div>
              <div className="project-visual-accent">
                <Sparkles size={40} className="visual-sparkle" />
              </div>
            </div>
            <div className="work-card-content">
              <h3>{project.title}</h3>
              <h4>{project.tagline}</h4>
              <p>{project.description}</p>
              <button className="project-link-btn">
                View Case Study <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="work-cta">
        <h2>Ready to build your success story?</h2>
        <p>Let's design and execute a custom strategy for your business scaling goals.</p>
        <button className="primary-btn">Let's Connect</button>
      </div>
    </section>
  );
};

export default Work;
