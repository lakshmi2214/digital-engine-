import React from "react";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

const articles = [
  {
    title: "The AI Revolution in Branding: How to Not Get Left Behind",
    category: "Branding",
    readTime: "5 min read",
    date: "Aug 24, 2026",
    summary: "Artificial intelligence is changing the way companies create visual styles and brand voices. Discover how to leverage AI without losing human connection.",
    author: "Amit Sharma",
  },
  {
    title: "Scaling to $10M ARR: The Growth Engine Playbook",
    category: "Marketing & Sales",
    readTime: "8 min read",
    date: "Aug 18, 2026",
    summary: "A practical guide to standardizing pipelines, optimizing conversions, and scaling ad campaigns to reach new markets without sacrificing margin.",
    author: "Priya Nair",
  },
  {
    title: "Why SEO Matters More in the Era of Conversational Search",
    category: "SEO & Media",
    readTime: "6 min read",
    date: "Jul 30, 2026",
    summary: "As AI tools answer user queries directly, technical SEO and authority building (Asli Kahani style) are essential to remain discoverable.",
    author: "Rohan Das",
  },
  {
    title: "Cinematic Storytelling: Hooking Customers in Under 3 Seconds",
    category: "Video Production",
    readTime: "4 min read",
    date: "Jul 15, 2026",
    summary: "Short-form video is the king of attention. Learn our structural secrets to editing videos that capture attention and convert viewers into leads.",
    author: "Siddharth Sen",
  },
];

const Insights = () => {
  return (
    <section className="insights-page fade-in">
      <div className="insights-header">
        <span className="section-badge">
          <BookOpen size={12} style={{ marginRight: 6 }} /> OUR INSIGHTS
        </span>
        <h1>Thought Leadership for Digital Growth.</h1>
        <p className="insights-subtitle">
          Expert guides, industry analyses, and tactical tips from our senior consultants on business, strategy, and engineering.
        </p>
      </div>

      <div className="insights-grid">
        {articles.map((article, index) => (
          <article className="insight-card" key={index}>
            <div className="insight-meta">
              <span className="insight-tag">
                <Tag size={12} style={{ marginRight: 4 }} /> {article.category}
              </span>
              <span className="insight-time">
                <Clock size={12} style={{ marginRight: 4 }} /> {article.readTime}
              </span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <div className="insight-footer">
              <span className="insight-author">By {article.author}</span>
              <span className="insight-date">{article.date}</span>
            </div>
            <button className="read-more-btn">
              Read Article <ArrowRight size={14} />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Insights;
