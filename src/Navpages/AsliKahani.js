import React from "react";
import {
  ArrowRight,
  Mic,
  Play,
  BookOpen,
  FileText,
  Megaphone,
  PlayCircle,
} from "lucide-react";

const mediaCards = [
  {
    icon: BookOpen,
    title: "Business Features",
    text: "Stories that build credibility",
  },
  {
    icon: Mic,
    title: "Founder Interviews",
    text: "Real stories. Real impact.",
  },
  {
    icon: FileText,
    title: "Magazine Coverage",
    text: "Print. Digital. Nationwide.",
  },
  {
    icon: Megaphone,
    title: "Digital PR",
    text: "Reach the right audience.",
  },
  {
    icon: PlayCircle,
    title: "Podcasts & Videos",
    text: "Conversations that inspire.",
  },
];

const AsliKahani = ({ onNavigate }) => {
  return (
    <div className="asli-kahani-page-wrapper fade-in">
      <section className="asli-kahani-page">
        <div className="asli-hero-container">
          <div className="asli-hero-content">
            <div className="asli-top-tag">
              <span className="tag-accent-line"></span>
              <span className="tag-text">
                STORIES &nbsp;/&nbsp; PEOPLE &nbsp;/&nbsp; IMPACT
              </span>
            </div>

            <h1 className="asli-main-heading">
              Real Stories. <br />
              <span className="gradient-text-impact">Bigger Impact.</span>
            </h1>

            <p className="asli-hero-desc">
              Asli Kahani is a registered media house under Digital Engine,
              creating powerful stories through articles, interviews, magazines,
              podcasts and digital content.
            </p>

            <button
              className="explore-btn"
              onClick={() => onNavigate && onNavigate("contact")}
            >
              Explore Asli Kahani <ArrowRight size={16} />
            </button>
          </div>


          <div className="asli-visual-wrapper">

            <div className="pink-glow-bg"></div>


            <svg className="accent-svg-lines" viewBox="0 0 500 400" fill="none">
              <path
                d="M 380 40 Q 440 90 415 150"
                stroke="#60a5fa"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="430" cy="115" r="6" fill="#f43f5e" />
              <path
                d="M 110 220 Q 130 310 200 260"
                stroke="#60a5fa"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="215" cy="265" r="7" fill="#ec4899" />
            </svg>


            <div className="asli-cards-composition">

              <div className="floating-card articles-card">
                <span className="articles-badge">Articles</span>
                <div className="article-snippet">
                  <img
                    src="/aslikahani.jpeg"
                    alt="Author"
                    className="article-img"
                  />
                  <div className="article-lines">
                    <div className="line line-long"></div>
                    <div className="line line-medium"></div>
                    <div className="line line-short"></div>
                    <div className="line line-long"></div>
                    <div className="line line-medium"></div>
                  </div>
                </div>
              </div>


              <div className="main-hero-card">
                <img
                  src="/aslikahani1.jpeg"
                  alt="Asli Kahani Sunset"
                  className="main-hero-img"
                />
                <div className="main-hero-overlay">
                  <div className="hero-text-accent"></div>
                  <h3 className="hero-card-title">ASLI KAHANI</h3>
                </div>
              </div>


              <div className="floating-card videos-card">
                <div className="video-thumb-wrapper">
                  <img
                    src="/aslikahani2.jpeg"
                    alt="Video Thumbnail"
                    className="video-thumb-img"
                  />
                  <div className="play-button-overlay">
                    <div className="play-circle">
                      <Play
                        size={12}
                        fill="#ffffff"
                        color="#ffffff"
                        style={{ marginLeft: 2 }}
                      />
                    </div>
                  </div>
                </div>
                <span className="video-card-label">Videos</span>
              </div>


              <div className="floating-card podcasts-card">
                <div className="podcast-icon-box">
                  <Mic size={20} className="podcast-mic" />
                </div>
                <div className="podcast-info">
                  <div className="podcast-waves">
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                    <span className="wave-bar"></span>
                  </div>
                  <span className="podcast-card-label">Podcasts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="asli-media-section">
        <div className="asli-media-container">

          <div className="asli-media-info">
            <div className="asli-red-badge">
              <span>ASL!</span>
              <span>KAHANI</span>
            </div>
            <div className="asli-media-text">
              <h2 className="asli-red-title">ASLI KAHANI</h2>
              <h4 className="asli-rni-sub">RNI REGISTERED MEDIA HOUSE</h4>
              <p>
                We operate Asli Kahani, a RNI registered media platform that
                builds authority and trust through powerful storytelling,
                interviews and digital PR.
              </p>
            </div>
          </div>


          <div className="asli-cards-grid">
            {mediaCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="asli-feature-card" key={index}>
                  <div className="feature-icon-wrapper">
                    <Icon size={26} className="feature-icon" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsliKahani;
