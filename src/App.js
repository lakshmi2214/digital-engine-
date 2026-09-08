import React, { useState, useEffect, useRef } from "react";
import {
  Lightbulb,
  Megaphone,
  Users,
  Crown,
  Rocket,
  BriefcaseBusiness,
  Palette,
  ChartNoAxesCombined,
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
  Menu,
  X,
  ChevronDown,
  Infinity,
} from "lucide-react";
import "./App.css";
import logo from "./assets/digital engine.png";
import asliLogo from "./assets/asli_kahani.png";
import About from "./Navpages/About";
import Work from "./Navpages/Work";
import Insights from "./Navpages/Insights";
import Contact from "./Navpages/Contact";

// Services Data
const leftServices = [
  {
    icon: BookOpen,
    title: "Digital Transformation",
    text: "Technology | Automation | AI",
    color: "#0ba9e8",
    gradient: "linear-gradient(135deg, #0ba9e8, #285be8)",
    shadow: "rgba(11, 169, 232, 0.35)",
  },
  {
    icon: Palette,
    title: "Branding & Creative",
    text: "Identity | Design | Strategy",
    color: "#9b5bdc",
    gradient: "linear-gradient(135deg, #9b5bdc, #7a3ee9)",
    shadow: "rgba(155, 91, 220, 0.35)",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Marketing Growth",
    text: "Performance | SEO | Social",
    color: "#f05b73",
    gradient: "linear-gradient(135deg, #f05b73, #ee5a76)",
    shadow: "rgba(240, 91, 115, 0.35)",
  },
  {
    icon: Mic,
    title: "PR & Media",
    text: "Asli Kahani | Reputation | Coverage",
    color: "#ff9c42",
    gradient: "linear-gradient(135deg, #ff9c42, #fa8c16)",
    shadow: "rgba(255, 156, 66, 0.35)",
  },
  {
    icon: Clapperboard,
    title: "Video Production",
    text: "Films | Ads | Stories",
    color: "#f5a623",
    gradient: "linear-gradient(135deg, #f5a623, #faad14)",
    shadow: "rgba(245, 166, 35, 0.35)",
  },
];

const rightServices = [
  {
    icon: UserRound,
    title: "Business Consulting",
    text: "Strategy | Scaling | Growth",
    color: "#20c997",
    gradient: "linear-gradient(135deg, #20c997, #10b981)",
    shadow: "rgba(32, 201, 151, 0.35)",
  },
  {
    icon: Store,
    title: "Franchise Development",
    text: "Systems | Expansion | Licensing",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #13c2c2)",
    shadow: "rgba(6, 182, 212, 0.35)",
  },
  {
    icon: CalendarDays,
    title: "Events & Experiences",
    text: "Branding | Activations | Events",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6, #1890ff)",
    shadow: "rgba(59, 130, 246, 0.35)",
  },
  {
    icon: Target,
    title: "Sales & Lead Generation",
    text: "Pipeline | Conversion | Revenue",
    color: "#7a3ee9",
    gradient: "linear-gradient(135deg, #7a3ee9, #722ed1)",
    shadow: "rgba(122, 62, 233, 0.35)",
  },
  {
    icon: CircleDollarSign,
    title: "Investor Readiness",
    text: "Pitch Deck | Funding | Valuation",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #ec4899, #eb2f96)",
    shadow: "rgba(236, 72, 153, 0.35)",
  },
];

// Asli Kahani Data
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [asliOpen, setAsliOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setServicesOpen(false);
        setAsliOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (e, page) => {
    if (e) e.preventDefault();
    onNavigate(page);
    setServicesOpen(false);
    setAsliOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleServices = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setServicesOpen((prev) => !prev);
    setAsliOpen(false);
  };

  const toggleAsli = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAsliOpen((prev) => !prev);
    setServicesOpen(false);
  };

  return (
    <header className="navbar" ref={navRef}>
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

        {/* Services Dropdown */}
        <div
          className={`nav-dropdown ${servicesOpen ? "open" : ""}`}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button
            type="button"
            className={`nav-dropdown-toggle ${currentPage === "services" ? "active" : ""}`}
            onClick={(e) => {
              if (window.innerWidth <= 800) {
                toggleServices(e);
              } else {
                handleNavClick(e, "services");
              }
            }}
          >
            <span>Services</span>
            <ChevronDown size={14} className={`dropdown-chevron ${servicesOpen ? "rotate" : ""}`} />
          </button>

          <div className={`dropdown-menu services-dropdown-menu ${servicesOpen ? "show" : ""}`}>
            <div className="dropdown-header">
              <span className="dropdown-title">Our Growth Services</span>
              <span
                className="dropdown-all-link"
                onClick={(e) => handleNavClick(e, "services")}
              >
                Explore All Services →
              </span>
            </div>
            <div className="services-dropdown-grid">
              <div className="dropdown-col">
                {leftServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={idx}
                      className="dropdown-item"
                      onClick={(e) => handleNavClick(e, "services")}
                    >
                      <div className="dropdown-item-icon">
                        <Icon size={16} />
                      </div>
                      <div className="dropdown-item-text">
                        <div className="dropdown-item-title">{service.title}</div>
                        <div className="dropdown-item-desc">{service.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="dropdown-col">
                {rightServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={idx}
                      className="dropdown-item"
                      onClick={(e) => handleNavClick(e, "services")}
                    >
                      <div className="dropdown-item-icon">
                        <Icon size={16} />
                      </div>
                      <div className="dropdown-item-text">
                        <div className="dropdown-item-title">{service.title}</div>
                        <div className="dropdown-item-desc">{service.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Asli Kahani Dropdown */}
        <div
          className={`nav-dropdown ${asliOpen ? "open" : ""}`}
          onMouseEnter={() => setAsliOpen(true)}
          onMouseLeave={() => setAsliOpen(false)}
        >
          <button
            type="button"
            className={`nav-dropdown-toggle ${currentPage === "asli-kahani" ? "active" : ""}`}
            onClick={(e) => {
              if (window.innerWidth <= 800) {
                toggleAsli(e);
              } else {
                handleNavClick(e, "asli-kahani");
              }
            }}
          >
            <span>Asli Kahani</span>
            <ChevronDown size={14} className={`dropdown-chevron ${asliOpen ? "rotate" : ""}`} />
          </button>

          <div className={`dropdown-menu asli-dropdown-menu ${asliOpen ? "show" : ""}`}>
            <div className="dropdown-header">
              <span className="dropdown-title">Media & Storytelling</span>
              <span
                className="dropdown-all-link"
                onClick={(e) => handleNavClick(e, "asli-kahani")}
              >
                View Platform →
              </span>
            </div>
            <div className="asli-dropdown-list">
              {mediaItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="dropdown-item"
                    onClick={(e) => handleNavClick(e, "asli-kahani")}
                  >
                    <div className="dropdown-item-icon mic-tint">
                      <Icon size={16} />
                    </div>
                    <div className="dropdown-item-text">
                      <div className="dropdown-item-title">{item.title}</div>
                      <div className="dropdown-item-desc">{item.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

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



function ServiceItem({ service, side, index, activeHover, onHover, badgeRef }) {
  const Icon = service.icon;
  const isHovered = activeHover === `${side}-${index}`;

  return (
    <div
      className={`service-item ${side} ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => onHover(`${side}-${index}`)}
      onMouseLeave={() => onHover(null)}
    >
      {side === "left" && (
        <div className="service-content">
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </div>
      )}

      <div
        ref={badgeRef}
        className="service-round-icon"
        style={{
          background: service.gradient,
          boxShadow: isHovered
            ? `0 10px 24px ${service.shadow}, 0 0 16px ${service.shadow}`
            : `0 6px 18px ${service.shadow}`,
        }}
      >
        <Icon size={20} />
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
  const [hoveredService, setHoveredService] = useState(null);
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const left0Ref = useRef(null);
  const left1Ref = useRef(null);
  const left2Ref = useRef(null);
  const left3Ref = useRef(null);
  const left4Ref = useRef(null);
  const right0Ref = useRef(null);
  const right1Ref = useRef(null);
  const right2Ref = useRef(null);
  const right3Ref = useRef(null);
  const right4Ref = useRef(null);

  const leftBadgeRefs = [left0Ref, left1Ref, left2Ref, left3Ref, left4Ref];
  const rightBadgeRefs = [right0Ref, right1Ref, right2Ref, right3Ref, right4Ref];

  const [svgData, setSvgData] = useState({ left: [], right: [], width: 0, height: 0 });

  const updateLinePositions = () => {
    if (!containerRef.current || !centerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const centerRect = centerRef.current.getBoundingClientRect();

    if (containerRect.width === 0 || containerRect.height === 0) return;

    const centerX = centerRect.left + centerRect.width / 2 - containerRect.left;
    const centerY = centerRect.top + centerRect.height / 2 - containerRect.top;

    // Outer circle radius where perimeter dots sit
    const outerRadius = 152;

    // Angles in radians for top to bottom
    const angles = [-0.85, -0.42, 0, 0.42, 0.85];
    const midOffsets = [38, 25, 0, 25, 38];

    const left = leftServices.map((service, i) => {
      const badgeEl = leftBadgeRefs[i]?.current;
      if (!badgeEl) return null;
      const bRect = badgeEl.getBoundingClientRect();

      // Start strictly at the right edge of left badge
      const startX = bRect.right - containerRect.left + 1;
      const startY = bRect.top + bRect.height / 2 - containerRect.top;

      const angle = angles[i];
      const endX = centerX - outerRadius * Math.cos(angle);
      const endY = centerY + outerRadius * Math.sin(angle);

      const hasBend = Math.abs(startY - endY) > 3;
      const midX = hasBend ? Math.min(endX - 10, startX + midOffsets[i]) : (startX + endX) / 2;
      const midY = startY;

      return {
        color: service.color,
        startX,
        startY,
        midX,
        midY,
        endX,
        endY,
        hasBend,
      };
    }).filter(Boolean);

    const right = rightServices.map((service, i) => {
      const badgeEl = rightBadgeRefs[i]?.current;
      if (!badgeEl) return null;
      const bRect = badgeEl.getBoundingClientRect();

      // Start strictly at the left edge of right badge
      const startX = bRect.left - containerRect.left - 1;
      const startY = bRect.top + bRect.height / 2 - containerRect.top;

      const angle = angles[i];
      const endX = centerX + outerRadius * Math.cos(angle);
      const endY = centerY + outerRadius * Math.sin(angle);

      const hasBend = Math.abs(startY - endY) > 3;
      const midX = hasBend ? Math.max(endX + 10, startX - midOffsets[i]) : (startX + endX) / 2;
      const midY = startY;

      return {
        color: service.color,
        startX,
        startY,
        midX,
        midY,
        endX,
        endY,
        hasBend,
      };
    }).filter(Boolean);

    setSvgData({
      left,
      right,
      width: containerRect.width,
      height: containerRect.height,
    });
  };

  useEffect(() => {
    updateLinePositions();
    const handleResize = () => updateLinePositions();
    window.addEventListener("resize", handleResize);

    const t1 = setTimeout(updateLinePositions, 60);
    const t2 = setTimeout(updateLinePositions, 250);
    const t3 = setTimeout(updateLinePositions, 600);

    let resizeObserver;
    if (containerRef.current && window.ResizeObserver) {
      resizeObserver = new ResizeObserver(() => {
        updateLinePositions();
      });
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

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

      <div className="services-layout" ref={containerRef}>
        {svgData.width > 0 && (
          <svg
            className="services-svg-connectors"
            width={svgData.width}
            height={svgData.height}
            viewBox={`0 0 ${svgData.width} ${svgData.height}`}
          >
            {svgData.left.map((c, i) => {
              const isHovered = hoveredService === `left-${i}`;
              const pathD = c.hasBend
                ? `M ${c.startX} ${c.startY} L ${c.midX} ${c.midY} L ${c.endX} ${c.endY}`
                : `M ${c.startX} ${c.startY} L ${c.endX} ${c.endY}`;

              return (
                <g key={`left-c-${i}`} className={`connector-group ${isHovered ? "active" : ""}`}>
                  {isHovered && (
                    <path
                      d={pathD}
                      fill="none"
                      stroke={c.color}
                      strokeWidth="5"
                      strokeOpacity="0.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={c.color}
                    strokeWidth={isHovered ? "2.5" : "1.5"}
                    strokeOpacity={isHovered ? "1" : "0.75"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="connector-line"
                  />
                  {c.hasBend && (
                    <circle
                      cx={c.midX}
                      cy={c.midY}
                      r={isHovered ? "4.5" : "3.5"}
                      fill={c.color}
                      className="connector-dot mid-dot"
                    />
                  )}
                  <circle
                    cx={c.endX}
                    cy={c.endY}
                    r={isHovered ? "6" : "5"}
                    fill={c.color}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    className="connector-dot circle-dot"
                  />
                </g>
              );
            })}

            {svgData.right.map((c, i) => {
              const isHovered = hoveredService === `right-${i}`;
              const pathD = c.hasBend
                ? `M ${c.startX} ${c.startY} L ${c.midX} ${c.midY} L ${c.endX} ${c.endY}`
                : `M ${c.startX} ${c.startY} L ${c.endX} ${c.endY}`;

              return (
                <g key={`right-c-${i}`} className={`connector-group ${isHovered ? "active" : ""}`}>
                  {isHovered && (
                    <path
                      d={pathD}
                      fill="none"
                      stroke={c.color}
                      strokeWidth="5"
                      strokeOpacity="0.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                  <path
                    d={pathD}
                    fill="none"
                    stroke={c.color}
                    strokeWidth={isHovered ? "2.5" : "1.5"}
                    strokeOpacity={isHovered ? "1" : "0.75"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="connector-line"
                  />
                  {c.hasBend && (
                    <circle
                      cx={c.midX}
                      cy={c.midY}
                      r={isHovered ? "4.5" : "3.5"}
                      fill={c.color}
                      className="connector-dot mid-dot"
                    />
                  )}
                  <circle
                    cx={c.endX}
                    cy={c.endY}
                    r={isHovered ? "6" : "5"}
                    fill={c.color}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    className="connector-dot circle-dot"
                  />
                </g>
              );
            })}
          </svg>
        )}

        <div className="services-left">
          {leftServices.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              side="left"
              index={index}
              activeHover={hoveredService}
              onHover={setHoveredService}
              badgeRef={leftBadgeRefs[index]}
            />
          ))}
        </div>

        <div className="services-center" ref={centerRef}>
          <div className="center-ring ring-outer"></div>
          <div className="center-ring ring-middle"></div>
          <div className="center-logo-box">
            <img src={logo} alt="Digital Engine" className="services-center-logo" />
            <small className="services-center-tagline">IDEA TO EMPIRE</small>
          </div>
        </div>

        <div className="services-right">
          {rightServices.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              side="right"
              index={index}
              activeHover={hoveredService}
              onHover={setHoveredService}
              badgeRef={rightBadgeRefs[index]}
            />
          ))}
        </div>
      </div>
    </section>
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
          <Infinity size={32} />
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

