
import about from "./images/Mountain.jpg";
import approach from "./images/Approach.jpg";
import Video1 from "./videos/video1.mp4";
import gallery1 from "./images/gallery1.jpg";
import gallery2 from "./images/gallery2.jpg";
import gallery3 from "./images/gallery3.jpg";
import gallery4 from "./images/gallery4.jpg";
import gallery5 from "./images/gallery5.jpg";
import gallery6 from "./images/gallery6.jpg";

import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

import { useEffect, useState } from "react";
import "./App.css";

// ==========================================
// PERSPECTIVES GALLERY SECTION
// ==========================================

function PerspectivesSection() {
  return (
    <section className="perspectives-section" id="gallery">
      <div className="perspectives-heading">
        <div>
          <span className="perspectives-eyebrow">PERSPECTIVES</span>

          <h2>Land, Seen Clearly</h2>

          <p>
            A closer look at the landscape, access and open surroundings.
          </p>
        </div>

        <span className="perspectives-location">
          AERIAL JOURNAL · TAMIL NADU
        </span>
      </div>

      <div className="perspectives-grid">
        <div className="perspective-card perspective-large">
          <img src={gallery1} alt="Plotted landscape" />
          <span>PLOTTED LANDSCAPE</span>
        </div>

        <div className="perspective-card">
          <img src={gallery2} alt="Road access" />
          <span>ROAD ACCESS</span>
        </div>

        <div className="perspective-card">
          <img src={gallery3} alt="Open surroundings" />
          <span>OPEN SURROUNDINGS</span>
        </div>

        <div className="perspective-card perspective-wide">
          <img src={gallery4} alt="Plot layout" />
          <span>PLOT LAYOUT</span>
        </div>

        <div className="perspective-card perspective-bottom-wide">
          <img src={gallery5} alt="Land development layout" />
          <span>PLOT LAYOUT</span>
        </div>

        <div className="perspective-card">
          <img src={gallery6} alt="Development view" />
          <span>DEVELOPMENT VIEW</span>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// FEATURED LANDS SECTION
// ==========================================

function FeaturedLandsLocations({ projects = [] }) {
  const featuredProjects = projects.slice(0, 3);

  const featuredContent = [
    {
      image:
        image1,
      description:
        "Spacious plotted layout with direct 4Oft blacktop road,panoramic mountain vistas, and perennial sweet groundwater table.",
    },
    {
      image:
        image2,
      description:
        "Connected growth corridor with high appreciation potential. Fully fenced perimeter, solar avenue streetlights, and rapid expressway access.",
    },
    {
      image:
        image3,
      description:
        "Spacious plotted landscape ideal for estate living or farmhouse construction with rich alluvium fertile soil and reliable water supply.",
    },
  ];

  const badges = [
    ["DTCP APPROVED", "FAST SELLING"],
    ["CLEAR TITLE", "PRIME GROWTH"],
    ["READY REGISTRATION", "HIGH YIELD"],
  ];

  // Replace this placeholder with your actual WhatsApp number.
  const whatsappNumber = "91XXXXXXXXXX";

  const formatPrice = (price) => {
    if (!price) return "Contact for price";

    return `₹${Number(price).toLocaleString("en-IN")} Onwards`;
  };

  return (
    <section className="featured-lands-section" id="lands">
      <div className="featured-lands-container">
        <div className="featured-heading">
          <div>
            <span className="featured-eyebrow">
              SELECTED OPPORTUNITIES
            </span>

            <h2>
              Explore Our Featured
              <br />
              Lands
            </h2>

            <p>
              Discover thoughtfully selected land destinations
              surrounded by nature, peaceful surroundings and
              opportunities for your future.
            </p>
          </div>

          <div className="featured-heading-note">
            Explore our featured land destinations and discover
            the possibilities of your next investment.
          </div>
        </div>

        <div className="featured-land-grid">
          {featuredProjects.map((project, index) => {
            const content = featuredContent[index];

            return (
              <article className="featured-land-card" key={project.id}>
                {/* IMAGE SECTION */}
                <div className="featured-land-image">
                  <img
                    src={content?.image}
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85";
                    }}
                  />

                  {/* BADGES */}
                  <div className="featured-badges">
                    {(badges[index] || [
                      "FEATURED",
                      "GROWTH AREA",
                    ]).map((badge, badgeIndex) => (
                      <span
                        className={
                          badgeIndex === 0
                            ? "badge-yellow"
                            : "badge-white"
                        }
                        key={badge}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* LOCATION */}
                  <div className="featured-image-location">
                    {project.location}
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="featured-land-content">
                  <h3>{project.title}</h3>

                  <p className="featured-land-description">
                    {content?.description || project.description}
                  </p>

                  <div className="featured-land-details">
                    <div>
                      <span>PLOT DIMENSIONS</span>

                      <strong>
                        {project.plot_size || "Contact for details"}
                        {project.plot_size_unit
                          ? ` ${project.plot_size_unit}`
                          : ""}
                      </strong>
                    </div>

                    <div>
                      <span>STARTING PRICE</span>

                      <strong>{formatPrice(project.price)}</strong>
                    </div>
                  </div>

                  <a
                    className="featured-whatsapp-button"
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello, I am interested in ${project.title}. Please share more details.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>◉</span>
                    WhatsApp
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {featuredProjects.length === 0 && (
          <p className="featured-empty">
            No land projects are currently available.
          </p>
        )}
      </div>
    </section>
  );
}
// ==========================================
// LAND LOCATIONS DATA
// ==========================================

const locations = [
  {
    number: "01",
    name: "Coimbatore",
    description:
      "Open landscape with mountain views",
  },
  {
    number: "02",
    name: "Chennai Outskirts",
    description:
      "Connected growth corridor",
  },
  {
    number: "03",
    name: "Madurai",
    description:
      "Spacious plotted landscape",
  },
];


// ==========================================
// MAIN APP COMPONENT
// ==========================================

function App() {
  // ==========================================
  // WHATSAPP CONFIGURATION
  // ==========================================

  const whatsappNumber = "91XXXXXXXXXX";

  const whatsappMessage = encodeURIComponent(
    "Hello Aruvi Lands, I am interested in your land projects."
  );

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // ==========================================
  // LAND ENQUIRY FORM SUBMISSION
  // ==========================================

  const handleEnquirySubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const mobile = formData.get("mobile");
    const location = formData.get("location");
    const plotSize = formData.get("plotSize");
    const message = formData.get("message");

    const enquiryMessage = `
Hello Aruvi Lands,

I would like to enquire about your land projects.

Name: ${name}
Mobile Number: ${mobile}
Preferred Location: ${location || "Not specified"}
Required Plot Size: ${plotSize || "Not specified"}

Message: ${message || "No additional message"}

Please share more details.

Thank you.
    `;

    const enquiryLink =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        enquiryMessage
      )}`;

    window.open(enquiryLink, "_blank");
    event.currentTarget.reset();
  };

  // ==========================================
  // LAND PROJECTS STATE
  // ==========================================

  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState("");

  // PROJECT FILTER STATES
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedPlotSize, setSelectedPlotSize] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");

  // ==========================================
  // FETCH LAND PROJECTS FROM MYSQL API
  // ==========================================

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL;

        const response = await fetch(
          `${API_URL}/api/lands`
        );
        if (!response.ok) {
          throw new Error("Unable to load land projects.");
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error(
            result.message || "Unable to load projects."
          );
        }

        setProjects(
          Array.isArray(result.data) ? result.data : []
        );
      } catch (error) {
        console.error("Projects API error:", error);
        setProjectsError(error.message);
      } finally {
        setProjectsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // ==========================================
  // FILTER LAND PROJECTS
  // ==========================================

  const filteredProjects = projects.filter((project) => {
    const locationMatch =
      selectedLocation === "All" ||
      project.location === selectedLocation;

    const sizeMatch =
      selectedPlotSize === "All" ||
      String(project.plot_size) === selectedPlotSize;

    const availabilityMatch =
      selectedAvailability === "All" ||
      String(project.status || "Available").toLowerCase() ===
      selectedAvailability.toLowerCase();

    return locationMatch && sizeMatch && availabilityMatch;
  });

  return (
    <main>
      {/* =====================================
          HEADER
      ====================================== */}

      <header className="site-header">
        <a href="#home" className="brand">
          <span className="brand-icon">♧</span>

          <span className="brand-name">
            <strong>Aruvi</strong>
            <small>LANDS</small>
          </span>
        </a>

        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#lands">Lands</a>
          <a href="#locations">Locations</a>
          <a href="#why-us">Why Us</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#enquiry">Enquiry</a>
        </nav>

        <a
          className="header-enquiry"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          <span>☏</span> WhatsApp Enquiry
        </a>
      </header>

      {/* =====================================
          HERO SECTION
      ====================================== */}

      <section className="hero-section" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="eyebrow">
            <span></span>
            PREMIUM LAND OPPORTUNITIES
          </div>

          <h1>
            Find the Right Land
            <br />
            <em>for Your Future</em>
          </h1>

          <p className="hero-description">
            Thoughtfully selected plots in promising Tamil Nadu locations—
            <br className="desktop-break" />
            presented with clear information and built for long-term value.
          </p>

          <div className="hero-buttons">
            <a href="#lands" className="explore-button">
              Explore Lands <span>→</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="hero-whatsapp"
            >
              <span>☏</span> WhatsApp Enquiry
            </a>
          </div>
        </div>

        {/* HERO INFORMATION */}
        <div className="hero-info">
          <div>
            <small>LOCATION</small>
            <strong>Tamil Nadu</strong>
          </div>

          <div>
            <small>PLOT SIZES</small>
            <strong>
              Multiple
              <br />
              options
            </strong>
          </div>

          <div>
            <small>ROAD ACCESS</small>
            <strong>
              Details
              <br />
              available
            </strong>
          </div>

          <div>
            <small>AVAILABILITY</small>
            <strong>Enquire now</strong>
          </div>
        </div>
      </section>

      {/* =====================================
          STATISTICS SECTION
      ====================================== */}

      <section className="stats-section">
        <div className="stat-item">
          <strong>06+</strong>
          <span>LAND PROJECTS</span>
        </div>

        <div className="stat-item">
          <strong>03</strong>
          <span>KEY LOCATIONS</span>
        </div>

        <div className="stat-item">
          <strong>80+</strong>
          <span>PLOT OPTIONS</span>
        </div>

        <div className="stat-item">
          <strong>10+</strong>
          <span>YEARS OF EXPERIENCE</span>
        </div>
      </section>

      {/* =====================================
          ABOUT ARUVI LANDS
      ====================================== */}

      <section className="about-section" id="about">
        <div className="about-container">
          {/* LEFT SIDE - CONTENT */}
          <div className="about-content">
            <div className="about-eyebrow">
              <span></span>
              -WHO WE ARE — ABOUT ARUVI LANDS
            </div>

            <h2>
              Curating Secure, High-Value
              Land Across Tamil Nadu's
              Rising Corridors
            </h2>

            <p>
              Founded on the belief that buying land should be
              free from uncertainty, Aruvi Lands bridges the gap
              between raw potential and verified security.
              We identify strategically positioned land parcels
              nestled along thriving expressways, agricultural
              belts, and emerging urban corridors across
              Coimbatore, Madurai, and the Chennai peripheries.
            </p>

            <p>
              Every site under our umbrella undergoes exhaustive
              30-year legal vetting, revenue department parent
              document validation, and DTCP/RERA approvals before
              you ever step foot on the soil. We don't just sell
              plots; we establish clear, peaceful legacy holdings
              for generations.
            </p>

            <div className="about-trust-grid">
              <div className="about-trust-card">
                <div className="trust-icon">✓</div>
                <h3>100% CLEAR TITLES</h3>
                <p>
                  Flawless 30-year legal documentation
                  and applicable revenue approvals.
                </p>
              </div>

              <div className="about-trust-card">
                <div className="trust-icon">⌁</div>
                <h3>BLACKTOP ROADS</h3>
                <p>
                  30ft–40ft engineered roadways
                  with curb drains and trees.
                </p>
              </div>

              <div className="about-trust-card">
                <div className="trust-icon">₹</div>
                <h3>TRANSPARENT PRICING</h3>
                <p>
                  Direct pricing with no hidden
                  registration or liaison overheads.
                </p>
              </div>

              <div className="about-leadership-card">
                <div className="leadership-icon">A</div>

                <div className="leadership-content">
                  <span>LEADERSHIP COMMITMENT</span>

                  <blockquote>
                    "Land is the truest sanctuary. We treat each
                    buyer's investment as our family's own."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="about-image-wrapper">
            <img
              src={about}
              alt="Beautiful green agricultural land and landscape"
              className="about-image"
            />

            <div className="about-image-tag">
              <span>CERTIFIED PROMISE</span>
              <p>
                Every parcel is backed by physical
                demarcation stones and title insurance
                scrutiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED LANDS */}
      <FeaturedLandsLocations projects={projects} />

      {/* LOCATIONS SECTION */}
      <section className="land-locations-section" id="locations">
        <div className="land-locations-container">

          {/* LEFT MAP */}
          <div className="location-map-panel">
            <div className="location-map">

              <svg
                className="location-route"
                viewBox="0 0 300 260"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M55 65 C110 20, 220 35, 230 115 S150 190, 125 220"
                  fill="none"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
              </svg>

              <div className="map-pin coimbatore-pin">
                <span>📍</span>
                <small>Coimbatore</small>
              </div>

              <div className="map-pin chennai-pin">
                <span>📍</span>
                <small>Chennai Outskirts</small>
              </div>

              <div className="map-pin madurai-pin">
                <span>📍</span>
                <small>Madurai</small>
              </div>

            </div>

            <span className="map-caption">
              TAMIL NADU · LOCATION NETWORK
            </span>
          </div>

          {/* RIGHT CONTENT */}
          <div className="location-content">

            <span className="location-eyebrow">
              PLACED FOR POSSIBILITY
            </span>

            <h2>
              Land in Locations
              <br />
              That Move Forward
            </h2>

            <p className="location-intro">
              Our focus is on growth corridors and established
              regional centres, with project-specific landmarks
              and access information shared transparently
              during enquiry.
            </p>

            <div className="location-list">
              {locations.map((location) => (
                <div
                  className="location-list-item"
                  key={location.number}
                >
                  <span className="location-number">
                    {location.number}
                  </span>

                  <div>
                    <h3>{location.name}</h3>
                    <p>{location.description}</p>
                  </div>

                  <span className="location-arrow">›</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
          ARUVI APPROACH
      ====================================== */}

      <section className="aruvi-approach-section section-spacing">
        <div className="approach-container">
          {/* LEFT SIDE - HEADING + IMAGE */}
          <div className="approach-left">
            <span className="approach-eyebrow">
              THE ARUVI APPROACH
            </span>

            <h2>
              Confidence at Every
              <br />
              Step
            </h2>

            <div className="approach-image-wrapper">
              <img
                src={approach}
                alt="Green land representing Aruvi Lands"
                className="approach-image"
              />

              <div className="approach-image-tag">
                <p>
                  Land decisions deserve
                  clarity, context and
                  time.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - SIX DETAILS */}
          <div className="approach-content">
            <div className="approach-list">
              <div className="approach-item">
                <span className="approach-number">01</span>
                <h3>Verified Land</h3>
              </div>

              <div className="approach-item">
                <span className="approach-number">02</span>
                <h3>Prime Locations</h3>
              </div>

              <div className="approach-item">
                <span className="approach-number">03</span>
                <h3>Clear Documentation</h3>
              </div>

              <div className="approach-item">
                <span className="approach-number">04</span>
                <h3>Good Road Connectivity</h3>
              </div>

              <div className="approach-item">
                <span className="approach-number">05</span>
                <h3>Transparent Process</h3>
              </div>

              <div className="approach-item">
                <span className="approach-number">06</span>
                <h3>Long-Term Value</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          CURRENT SELECTION - LAND PROJECTS
      ====================================== */}

      <section className="selection-section" id="current-selection">
        <div className="selection-container">
          <div className="selection-heading">
            <span className="selection-eyebrow">
              CURRENT SELECTION
            </span>

            <h2>
              Find a Plot That Fits
              <br />
              Your Requirement
            </h2>
          </div>

          {/* FILTERS */}
          <div className="selection-filters">
            <div className="filter-group">
              <label htmlFor="locationFilter">LOCATION</label>

              <select
                id="locationFilter"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="All">All</option>

                {[...new Set(
                  projects.map((p) => p.location).filter(Boolean)
                )].map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="sizeFilter">PLOT SIZE</label>

              <select
                id="sizeFilter"
                value={selectedPlotSize}
                onChange={(e) => setSelectedPlotSize(e.target.value)}
              >
                <option value="All">All</option>

                {[...new Set(
                  projects
                    .map((p) => p.plot_size)
                    .filter(
                      (value) =>
                        value !== null &&
                        value !== undefined &&
                        value !== ""
                    )
                )].map((size) => (
                  <option key={size} value={String(size)}>
                    {size} sq.ft
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="availabilityFilter">
                AVAILABILITY
              </label>

              <select
                id="availabilityFilter"
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
              >
                <option value="All">All</option>

                {[...new Set(
                  projects.map((p) => p.status || "Available")
                )].map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* PROJECT LOADING */}
          {projectsLoading && (
            <p className="selection-message">
              Loading land projects...
            </p>
          )}

          {/* PROJECT ERROR */}
          {!projectsLoading && projectsError && (
            <p className="selection-error">
              {projectsError}
            </p>
          )}

          {/* PROJECT LIST */}
          {!projectsLoading && !projectsError && (
            <div className="selection-project-list">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <article
                    className="selection-project-card"
                    key={project.id}
                  >
                    {/* PROJECT IMAGE */}
                    <div className="selection-project-image">
                      <img
                        src={
                          typeof project.image_url === "string" &&
                            project.image_url.trim() !== ""
                            ? project.image_url.startsWith("http")
                              ? project.image_url
                              : `${API_URL}${project.image_url.startsWith("/")
                                ? project.image_url
                                : `/uploads/${project.image_url}`
                                }`
                            : "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=85"
                        }
                        alt={project.title}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=85";
                        }}
                      />
                    </div>

                    {/* PROJECT DETAILS */}
                    <div className="selection-project-details">
                      <span className="selection-project-location">
                        {project.location}
                      </span>

                      <h3>{project.title}</h3>

                      <p>
                        {project.plot_size
                          ? `${project.plot_size} ${project.plot_size_unit || "sq.ft"
                        }`
                          : "Multiple plot sizes"}

                        <span> · </span>

                        {project.status || "Available"}
                      </p>
                    </div>

                    {/* ENQUIRY BUTTON */}
                    <div className="selection-project-action">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>☏</span>
                        Enquire
                      </a>
                    </div>
                  </article>
                ))
              ) : (
                <div className="selection-empty">
                  No projects match your selected requirements.
                </div>
              )}
            </div>
          )}
        </div>
      </section>



      {/* =====================================
          PERSPECTIVES GALLERY
      ====================================== */}

      <PerspectivesSection />

      {/* =====================================
          LAND ENQUIRY SECTION
      ====================================== */}

      <section className="land-enquiry-section" id="enquiry">
        <div className="land-enquiry-container">
          {/* LEFT SIDE - VIDEO */}
          <div className="land-enquiry-image">
            <video
              className="land-enquiry-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={Video1} type="video/mp4" />
              Your browser does not support video playback.
            </video>

            <div className="land-enquiry-image-content">
              <span>BEGIN A CONVERSATION</span>

              <h2>
                Tell us what you're
                <br />
                looking for.
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE - ENQUIRY FORM */}
          <div className="land-enquiry-content">
            <span className="land-enquiry-eyebrow">
              LAND ENQUIRY
            </span>

            <h2>Your requirement, in a few details</h2>

            <form
              className="land-enquiry-form"
              onSubmit={handleEnquirySubmit}
            >
              {/* NAME + MOBILE */}
              <div className="enquiry-form-row">
                <div className="enquiry-field">
                  <label htmlFor="enquiryName">Name *</label>

                  <input
                    type="text"
                    id="enquiryName"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enquiryMobile">
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    id="enquiryMobile"
                    name="mobile"
                    placeholder="Enter mobile number"
                    pattern="[6-9][0-9]{9}"
                    maxLength="10"
                    required
                  />
                </div>
              </div>

              {/* LOCATION + PLOT SIZE */}
              <div className="enquiry-form-row">
                <div className="enquiry-field">
                  <label htmlFor="enquiryLocation">
                    Any preferred location
                  </label>

                  <select
                    id="enquiryLocation"
                    name="location"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select location
                    </option>

                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Pollachi">Pollachi</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Chennai Outskirts">
                      Chennai Outskirts
                    </option>
                    <option value="Sulur">Sulur</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="enquiry-field">
                  <label htmlFor="enquiryPlotSize">
                    Required Plot Size
                  </label>

                  <input
                    type="text"
                    id="enquiryPlotSize"
                    name="plotSize"
                    placeholder="Example: 1200 sq.ft"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div className="enquiry-field">
                <label htmlFor="enquiryMessage">Message</label>

                <textarea
                  id="enquiryMessage"
                  name="message"
                  rows="4"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              {/* WHATSAPP BUTTON */}
              <button
                type="submit"
                className="enquiry-submit-button"
              >
                <span>☏</span>
                Send Enquiry on WhatsApp
              </button>

              <p className="enquiry-note">
                Submitting opens WhatsApp with your details
                pre-filled. You can review the message
                before sending.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================
          HERO VIDEO SECTION
      ====================================== */}

      <section className="hero-video-section">
        <video
          className="hero-background-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={Video1} type="video/mp4" />
        </video>

        <div className="hero-video-overlay"></div>

        <div className="hero-video-content">
          <span>A PLACE FOR WHAT COMES NEXT</span>

          <h1>
            Your Next Chapter Could
            <br />
            Start Here.
          </h1>

          <div className="hero-video-buttons">
            <a href="#lands" className="hero-explore-btn">
              Explore Lands
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="hero-whatsapp-btn"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          FOOTER
      ====================================== */}

      <footer className="site-footer" id="contact">
        {/* COMPANY */}
        <div className="footer-company">
          <a href="#home" className="brand">
            <span className="brand-icon">♧</span>

            <span className="brand-name">
              <strong>Aruvi</strong>
              <small>LANDS</small>
            </span>
          </a>

          <p>
            Thoughtfully selected land and plotted
            <br />
            opportunities across Tamil Nadu.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3>QUICK LINKS</h3>

          <a href="#home">Home</a>
          <a href="#lands">Featured Lands</a>
          <a href="#why-us">Why Us</a>
          <a href="#gallery">Gallery</a>
        </div>

        {/* LOCATIONS */}
        <div>
          <h3>LOCATIONS</h3>

          <p>Coimbatore</p>
          <p>Chennai Outskirts</p>
          <p>Madurai</p>
        </div>

        {/* CONTACT */}
        <div>
          <h3>CONTACT</h3>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Enquiry
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            <span>☏</span> Contact details on request
          </a>

          <p>Website and social links can be added when available.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
