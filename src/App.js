import React, { Profiler, useState } from "react";
import {
  Lightbulb,
  Megaphone,
  Users,
  Crown,
  Rocket,
  BriefcaseBusiness,
  Palette,
  ChartNoAxesCombined,
  Newspaper,
  Clapperboard,
  UserRound,
  Store,
  CalendarDays,
  Target,
  CircleDollarSign,
  BookOpen,
  Mic,
  FileText,
  PlayCircle,
  ArrowRight,
  ChevronDown,
  Menu,
} from "lucide-react";
import "./App.css";
import logo from "./assets/digital engine.png";
import About from "./Navpages/About";
import Work from "./Navpages/Work";
import Insights from "./Navpages/Insights";
import Contact from "./Navpages/Contact";

function Logo() {
  return (
    <div className="brand-logo">
      <img src={logo} alt="Digital Engine Logo" className="brand-logo-img" />



    </div>
  );
}

function Navbar({ currentPage, onNavigate }) {
  const handleNavClick = (e, page) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div onClick={(e) => handleNavClick(e, "home")} style={{ cursor: "pointer" }}>
        <Logo />
      </div>

      <nav className="nav-menu">
        <a href="#home" className={currentPage === "home" ? "active" : ""} onClick={(e) => handleNavClick(e, "home")}>
          Home
        </a>
        <a href="#about" className={currentPage === "about" ? "active" : ""} onClick={(e) => handleNavClick(e, "about")}>
          About Us
        </a>
        <a href="#services" className={currentPage === "services" ? "active" : ""} onClick={(e) => handleNavClick(e, "services")}>
          Services
        </a>
        <a href="#asli-kahani" className={currentPage === "asli-kahani" ? "active" : ""} onClick={(e) => handleNavClick(e, "asli-kahani")}>
          Asli Kahani
        </a>
        <a href="#work" className={currentPage === "work" ? "active" : ""} onClick={(e) => handleNavClick(e, "work")}>
          Our Work
        </a>
        <a href="#insights" className={currentPage === "insights" ? "active" : ""} onClick={(e) => handleNavClick(e, "insights")}>
          Insights
        </a>
      </nav>

      <button className="talk-btn" onClick={(e) => handleNavClick(e, "contact")}>
        Let's Talk <ArrowRight size={16} />
      </button>

      <button className="mobile-menu-btn">
        <Menu size={25} />
      </button>
    </header>
  );
}

/* HERO SECTION */
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
      <div className="infinity-image left-image">
        <div className="image-overlay"></div>
      </div>

      <div className="infinity-image right-image">
        <div className="image-overlay"></div>
      </div>

      <svg className="infinity-svg" viewBox="0 0 600 350">
        <defs>
          <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1678ed" />
            <stop offset="25%" stopColor="#9b5bdc" />
            <stop offset="50%" stopColor="#f05b73" />
            <stop offset="75%" stopColor="#ff9c42" />
            <stop offset="100%" stopColor="#16bdb4" />
          </linearGradient>
        </defs>

        <path d="M 185 95 Q 185 55 235 55" fill="none" stroke="#1678ed" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        <circle cx="185" cy="95" r="4" fill="#1678ed" />
        <circle cx="235" cy="55" r="3.5" fill="#1678ed" />

        <path d="M 415 95 Q 415 55 365 55" fill="none" stroke="#ff9c42" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        <circle cx="415" cy="95" r="4" fill="#ff9c42" />
        <circle cx="365" cy="55" r="3.5" fill="#ff9c42" />

        <path d="M 185 255 Q 185 295 235 295" fill="none" stroke="#9b5bdc" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        <circle cx="185" cy="255" r="4" fill="#9b5bdc" />
        <circle cx="235" cy="295" r="3.5" fill="#9b5bdc" />

        <path d="M 415 255 Q 415 295 365 295" fill="none" stroke="#16bdb4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        <circle cx="415" cy="255" r="4" fill="#16bdb4" />
        <circle cx="365" cy="295" r="3.5" fill="#16bdb4" />

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

{/* SERVICES SECTION */ }
const leftServices = [
  { icon: BookOpen, title: "Digital Transformation", text: "Technology | Automation | AI" },
  { icon: Palette, title: "Branding & Creative", text: "Identity | Design | Strategy" },
  { icon: ChartNoAxesCombined, title: "Marketing Growth", text: "Performance | SEO | Social" },
  { icon: Mic, title: "PR & Media", text: "Asli Kahani | Reputation | Coverage" },
  { icon: Clapperboard, title: "Video Production", text: "Films | Ads | Stories" },
];

const rightServices = [
  { icon: UserRound, title: "Business Consulting", text: "Strategy | Scaling | Growth" },
  { icon: Store, title: "Franchise Development", text: "Systems | Expansion | Licensing" },
  { icon: CalendarDays, title: "Events & Experiences", text: "Branding | Activations | Events" },
  { icon: Target, title: "Sales & Lead Generation", text: "Pipeline | Conversion | Revenue" },
  { icon: CircleDollarSign, title: "Investor Readiness", text: "Pitch Deck | Funding | Valuation" },
];

function ServiceItem({ service, side }) {
  const Icon = service.icon;

  return (
    <div className={`service-item ${side}`}>
      {side === "left" && (
        <div className="service-content">
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </div>
      )}

      <div className="service-round-icon">
        <Icon size={21} />
      </div>

      {side === "right" && (
        <div className="service-content">
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </div>
      )}
    </div>
  );
}

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-title">
        <span>WE DON'T OFFER SERVICES.</span>
        <h2>We Build Growth Engines.</h2>
        <p>
          An ecosystem of specialists working together under one roof to solve every
          challenge your business faces on its journey from idea to empire.
        </p>
      </div>

      <div className="services-layout">
        <div className="services-left">
          {leftServices.map((service, index) => (
            <ServiceItem key={index} service={service} side="left" />
          ))}
        </div>

        <div className="services-center">
          <div className="center-ring ring-one"></div>
          <div className="center-ring ring-two"></div>
          <div className="center-logo-box">
            <div className="center-brand">
              DIGITAL<span>ENGINE</span>
            </div>
            <small>IDEA TO EMPIRE</small>
          </div>
        </div>

        <div className="services-right">
          {rightServices.map((service, index) => (
            <ServiceItem key={index} service={service} side="right" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ASLI KAHANI SECTION */
const mediaItems = [
  { icon: BookOpen, title: "Business Features", text: "Stories that build credibility" },
  { icon: Mic, title: "Founder Interviews", text: "Real stories. Real impact." },
  { icon: FileText, title: "Magazine Coverage", text: "Print. Digital. Nationwide." },
  { icon: Megaphone, title: "Digital PR", text: "Reach the right audience." },
  { icon: PlayCircle, title: "Podcasts & Videos", text: "Conversations that inspire." },
];

function AsliKahani() {
  return (
    <section className="asli-section" id="asli-kahani">
      <div className="asli-info">
        <div className="asli-mic">
          <span></span>
        </div>
        <div>
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

/* FOOTER SECTION */
function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-wave"></div>

      <div className="footer-items">
        <div className="footer-item">
          <InfinityIcon size={34} />
          <div>
            <strong>ONE VISION</strong>
            <span>Endless Possibilities</span>
          </div>
        </div>

        <div className="footer-item">
          <Users size={34} />
          <div>
            <strong>ONE TEAM</strong>
            <span>Experts. Specialists.</span>
          </div>
        </div>

        <div className="footer-item">
          <Target size={34} />
          <div>
            <strong>ONE MISSION</strong>
            <span>Your Growth</span>
          </div>
        </div>

        <div className="footer-item">
          <Crown size={34} />
          <div>
            <strong>ONE GOAL</strong>
            <span>Your Empire</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InfinityIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 50 50">
      <path
        d="
        M10 25
        C10 10 30 10 40 25
        C30 40 10 40 10 25
        C10 10 30 10 40 25
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}

/* MAIN APP */
function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <div className="gradient-wave"></div>
            <Services />
            <AsliKahani />
          </>
        );
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
