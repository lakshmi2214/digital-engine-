import React, { useState } from "react";
import {
  Lightbulb,
  Megaphone,
  Users,
  Crown,
  Rocket,
  BriefcaseBusiness,
  Target,
  BookOpen,
  Mic,
  FileText,
  PlayCircle,
  ArrowRight,
  Menu,
  X,
  Infinity as InfinityIcon,
} from "lucide-react";
import "./App.css";
import logo from "./assets/digital engine.png";
import asliLogo from "./assets/asli_kahani.png";
import About from "./Navpages/About";
import Work from "./Navpages/Work";
import Insights from "./Navpages/Insights";
import Contact from "./Navpages/Contact";
import Services from "./Navpages/Services";

const mediaItems = [
  { icon: BookOpen, title: "Business Features", text: "Stories that build credibility" },
  { icon: Mic, title: "Founder Interviews", text: "Real stories. Real impact." },
  { icon: FileText, title: "Magazine Coverage", text: "Print. Digital. Nationwide." },
  { icon: Megaphone, title: "Digital PR", text: "Reach the right audience." },
  { icon: PlayCircle, title: "Podcasts & Videos", text: "Conversations that inspire." },
];

function Logo() {
  return (
    <div className="brand-logo">
      <img src={logo} alt="Digital Engine Logo" className="brand-logo-img" />
    </div>
  );
}

function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, page) => {
    if (e) e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div onClick={(e) => handleNavClick(e, "home")} style={{ cursor: "pointer" }}>
        <Logo />
      </div>

      <nav className={`nav-menu ${mobileMenuOpen ? "mobile-active" : ""}`}>
        <a
          href="#home"
          className={currentPage === "home" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "home")}
        >
          Home
        </a>

        <a
          href="#about"
          className={currentPage === "about" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "about")}
        >
          About Us
        </a>

        <a
          href="#services"
          className={currentPage === "services" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "services")}
        >
          Services
        </a>

        <a
          href="#asli-kahani"
          className={currentPage === "asli-kahani" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "asli-kahani")}
        >
          Asli Kahani
        </a>

        <a
          href="#work"
          className={currentPage === "work" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "work")}
        >
          Our Work
        </a>

        <a
          href="#insights"
          className={currentPage === "insights" ? "active" : ""}
          onClick={(e) => handleNavClick(e, "insights")}
        >
          Insights
        </a>

        <button
          className="talk-btn mobile-talk-btn"
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Let's Talk <ArrowRight size={16} />
        </button>
      </nav>

      <button className="talk-btn desktop-talk-btn" onClick={(e) => handleNavClick(e, "contact")}>
        Let's Talk <ArrowRight size={16} />
      </button>

      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  );
}

// Hero Section
function Hero({ onNavigate }) {
  const stats = [
    { icon: Rocket, number: "500+", label: "Brands Empowered" },
    { icon: Users, number: "100+", label: "Experts Onboard" },
    { icon: BriefcaseBusiness, number: "15+", label: "Industries Served" },
    { icon: Target, number: "10+", label: "Countries Reached" },
  ];

  return (
    <section className="hero-section" id="home">
      <div className="hero-left">
        <div className="hero-badge">
          INDIA'S MOST COMPLETE BUSINESS GROWTH ECOSYSTEM
        </div>

        <h1>
          From Idea <br />
          to <span>Empire.</span>
        </h1>

        <p className="hero-description">
          We combine creativity, technology, media, strategy and execution to build
          brands that lead, inspire and dominate.
        </p>

        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate("contact")}>
            Start Your Empire <ArrowRight size={18} />
          </button>
          <button className="outline-btn" onClick={() => onNavigate("contact")}>Book Strategy Session</button>
        </div>

        <div className="stats-row">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="stat-box" key={index}>
                <div className="stat-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <strong>{item.number}</strong>
                  <span>{item.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hero-right">
        <InfinityGraphic />
      </div>
    </section>
  );
}

function InfinityGraphic() {
  return (
    <div className="infinity-wrapper">
      <svg className="infinity-svg" viewBox="0 0 600 350">
        <defs>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1678ed" />
            <stop offset="25%" stopColor="#9b5bdc" />
            <stop offset="50%" stopColor="#f05b73" />
            <stop offset="75%" stopColor="#ff9c42" />
            <stop offset="100%" stopColor="#16bdb4" />
          </linearGradient>

          <clipPath id="leftCircleClip">
            <circle cx="200" cy="175" r="84" />
          </clipPath>
          <clipPath id="rightCircleClip">
            <circle cx="400" cy="175" r="84" />
          </clipPath>
        </defs>

        {/* Left Circle Image (Businessman) */}
        <g clipPath="url(#leftCircleClip)">
          <image
            href="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
            x="116"
            y="91"
            width="168"
            height="168"
            preserveAspectRatio="xMidYMid slice"
          />
          <rect
            x="116"
            y="91"
            width="168"
            height="168"
            fill="url(#infinityGradient)"
            opacity="0.15"
          />
        </g>

        {/* Right Circle Image (City Skyline) */}
        <g clipPath="url(#rightCircleClip)">
          <image
            href="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80"
            x="316"
            y="91"
            width="168"
            height="168"
            preserveAspectRatio="xMidYMid slice"
          />
          <rect
            x="316"
            y="91"
            width="168"
            height="168"
            fill="url(#infinityGradient)"
            opacity="0.15"
          />
        </g>

        {/* Curved Connectors meeting in the exact middle */}

        <path d="M 200 50 Q 240 60 300 125" fill="none" stroke="#1678ed" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />
        <circle cx="200" cy="50" r="4" fill="#1678ed" />


        <path d="M 430 50 Q 380 60 300 125" fill="none" stroke="#ff9c42" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />
        <circle cx="430" cy="50" r="4" fill="#ff9c42" />


        <circle cx="300" cy="125" r="4.5" fill="#9b5bdc" />


        <path d="M 200 300 Q 240 290 300 225" fill="none" stroke="#9b5bdc" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />
        <circle cx="200" cy="300" r="4" fill="#9b5bdc" />


        <path d="M 430 300 Q 380 290 300 225" fill="none" stroke="#16bdb4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />
        <circle cx="430" cy="300" r="4" fill="#16bdb4" />


        <circle cx="300" cy="225" r="4.5" fill="#2869ee" />

        <path
          d="
          M100 175
          C100 65 250 65 300 175
          C350 285 500 285 500 175
          C500 65 350 65 300 175
          C250 285 100 285 100 175
          Z
          "
          fill="none"
          stroke="url(#infinityGradient)"
          strokeWidth="20"
          strokeLinecap="round"
        />

        <path
          d="
          M100 175
          C100 65 250 65 300 175
          C350 285 500 285 500 175
          C500 65 350 65 300 175
          C250 285 100 285 100 175
          Z
          "
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          className="infinity-glow-path"
        />
      </svg>

      <div className="visual-point idea-point">
        <div className="point-icon idea-icon">
          <Lightbulb size={21} />
        </div>
        <strong>IDEA</strong>
      </div>

      <div className="visual-point influence-point">
        <div className="point-icon influence-icon">
          <Megaphone size={21} />
        </div>
        <strong>INFLUENCE</strong>
      </div>

      <div className="visual-point identity-point">
        <div className="point-icon identity-icon">
          <Users size={21} />
        </div>
        <strong>IDENTITY</strong>
      </div>

      <div className="visual-point empire-point">
        <div className="point-icon empire-icon">
          <Crown size={21} />
        </div>
        <strong>EMPIRE</strong>
      </div>
    </div>
  );
}



function AsliKahani() {
  return (
    <section className="asli-section" id="asli-kahani">
      <div className="asli-info">
        <div className="asli-logo-box">
          <img src={asliLogo} alt="Asli Kahani Logo" className="asli-logo-img" />
        </div>
        <div className="asli-text-content">
          <h2>ASLI KAHANI</h2>
          <h4>RNI REGISTERED MEDIA HOUSE</h4>
          <p>
            We operate Asli Kahani, a RNI registered media platform that builds authority
            and trust through powerful storytelling, interviews and digital PR.
          </p>
        </div>
      </div>

      <div className="media-grid">
        {mediaItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div className="media-card" key={index}>
              <Icon className="media-card-icon" size={30} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-wave"></div>

      <div className="footer-items">
        <div className="footer-item">
          <InfinityIcon size={32} />
          <div>
            <strong>ONE VISION</strong>
            <span>Endless Possibilities</span>
          </div>
        </div>

        <div className="footer-item">
          <Users size={32} />
          <div>
            <strong>ONE TEAM</strong>
            <span>Experts. Specialists.</span>
          </div>
        </div>

        <div className="footer-item">
          <Target size={32} />
          <div>
            <strong>ONE MISSION</strong>
            <span>Your Growth</span>
          </div>
        </div>

        <div className="footer-item">
          <Crown size={32} />
          <div>
            <strong>ONE GOAL</strong>
            <span>Your Empire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About onNavigate={setCurrentPage} />;
      case "services":
        return <Services />;
      case "asli-kahani":
        return <AsliKahani />;
      case "work":
        return <Work />;
      case "insights":
        return <Insights />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <div className="gradient-wave"></div>
            <Services />
            <AsliKahani />
          </>
        );
    }
  };

  return (
    <div className="website">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
export default App;
