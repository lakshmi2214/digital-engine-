
import React, { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  ChartNoAxesCombined,
  CircleDollarSign,
  Clapperboard,
  Mic,
  Palette,
  Store,
  Target,
  UserRound,
} from "lucide-react";
import logo from "../assets/digital engine.png";

// Services Data
export const leftServices = [
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

export const rightServices = [
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



export default Services;
