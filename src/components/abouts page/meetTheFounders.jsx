// MeetTheFounders.js

import React from "react";
import "./MeetTheFounders.css";

const founders = [
  {
    id: 1,
    name: "Founder 1",
    role: "CEO & Co-founder",
    bio: "Tech visionary with 15+ years experience in software development.",
    imageUrl: "img/img-1.jpg",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Founder 2",
    role: "CTO & Co-founder",
    bio: "AI researcher and engineering leader specializing in ML.",
    imageUrl: "img/img-2.jpg",
    socialLinks: {
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Founder 3",
    role: "COO & Co-founder",
    bio: "Operations expert with extensive business experience.",
    imageUrl: "img/img3.jpg",
    socialLinks: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Founder 4",
    role: "CFO & Co-founder",
    bio: "Financial strategist with venture capital background.",
    imageUrl: "img/img-4.webp",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
];

const FounderCard = ({ founder }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className="mf-founder-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="mf-founder-image">
        <img
          src={founder.imageUrl}
          alt={founder.name}
          style={{ transform: hover ? "scale(1.1)" : "scale(1)" }}
          loading="lazy"
        />
      </div>
      <div className="mf-founder-info">
        <h3>{founder.name}</h3>
        <p className="mf-role">{founder.role}</p>
        <p className="mf-bio">{founder.bio}</p>
        <div className="mf-social-media">
          {Object.entries(founder.socialLinks).map(([platform, link]) => (
            <a
              key={platform}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <i className={`fa-brands fa-${platform}`}></i> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const MeetTheFounders = () => {
  return (
    <div className="mf-container">
      <div className="mf-section-header">
        <h3>Meet The Founders</h3>
        <p>
          Meet our passionate team of founders who are dedicated to bringing
          innovation and excellence to our company.
        </p>
      </div>
      <div className="mf-founders-grid">
        {founders.map((founder) => (
          <FounderCard key={founder.id} founder={founder} />
        ))}
      </div>
    </div>
  );
};

export default MeetTheFounders;
