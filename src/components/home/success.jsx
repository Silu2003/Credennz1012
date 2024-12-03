import React, { useEffect } from "react";

const Success = () => {
  useEffect(() => {
    // Function to handle sliding effect for each row of stories
    const createSlider = (containerId) => {
      const container = document.querySelector(`#${containerId} .ss-stories`);
      const stories = container.querySelectorAll(".ss-story");
      let currentIndex = 0;

      const slideStories = () => {
        currentIndex = (currentIndex + 1) % stories.length;
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
      };

      const interval = setInterval(slideStories, 5000);

      return () => clearInterval(interval); // Cleanup interval on unmount
    };

    // Initialize sliders for each set of stories
    createSlider("stories-container-1");
    createSlider("stories-container-2");
  }, []);

  return (
    <div className="ss-success">
      <div className="section-container">
        <header className="ss-header">
          <p className="ss-header__subtitle">SUCCESS STORIES</p>
          <h1 className="ss-header__title">Unveiling Our Digital Triumphs</h1>
        </header>

        {/* First Row of Stories */}
        <div className="ss-stories-wrapper" id="stories-container-1">
          <div className="ss-stories">
            {/* Original Story */}
            <div className="ss-story">
              <div className="ss-story__content">
                <p className="ss-story__company">GLOBAL VENTURES INC.</p>
                <h3 className="ss-story__title">Data-Driven Dominance</h3>
                <p className="ss-story__description">
                  See the power of data in action as we break down how
                  analytics-driven decisions led to a surge in campaign
                  effectiveness.
                </p>
                <div className="ss-metrics">
                  <div className="ss-metric">900% Increase in ROI</div>
                  <div className="ss-metric">40% decrease in CAC</div>
                </div>
                <a href="#" className="ss-cta">
                  Read full case study
                </a>
              </div>
              <div className="ss-screenshot">
                <img src="img/image1.png" alt="Data Analytics Dashboard" />
              </div>
            </div>

            {/* Duplicate Story */}
            <div className="ss-story">
              <div className="ss-story__content">
                <p className="ss-story__company">STARTUP XYZ</p>
                <h3 className="ss-story__title">Growth Hacking Success</h3>
                <p className="ss-story__description">
                  Learn how growth hacking techniques helped XYZ increase market
                  share and drive substantial revenue.
                </p>
                <div className="ss-metrics">
                  <div className="ss-metric">150% Increase in Engagement</div>
                  <div className="ss-metric">70% Increase in Sales</div>
                </div>
                <a href="#" className="ss-cta">
                  Read full case study
                </a>
              </div>
              <div className="ss-screenshot">
                <img src="img/image1.png" alt="Growth Hacking Dashboard" />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row of Stories */}
        <div className="ss-stories-wrapper" id="stories-container-2">
          <div className="ss-stories">
            {/* Original Story */}

            <div className="ss-story">
              <div className="ss-story__content">
                <p className="ss-story__company">TECH INNOVATE CO.</p>
                <h3 className="ss-story__title">SEO Success Blueprint</h3>
                <p className="ss-story__description">
                  Witness the impact of our SEO strategies as we unveil the rise
                  in organic traffic and search engine rankings for our clients.
                </p>
                <div className="ss-metrics">
                  <div className="ss-metric">260% Increase in ROI</div>
                  <div className="ss-metric">90% Increase in ROAS</div>
                </div>
                <a href="#" className="ss-cta">
                  Read full case study
                </a>
              </div>
              <div className="ss-screenshot">
                <img src="img/image2.png" alt="SEO Dashboard" />
              </div>
            </div>
            {/* Duplicate Story */}
            <div className="ss-story">
              <div className="ss-story__content">
                <p className="ss-story__company">NEXT GEN LLC</p>
                <h3 className="ss-story__title">Innovative Product Launch</h3>
                <p className="ss-story__description">
                  Discover how our strategies helped launch a product with a
                  strong market foothold and customer adoption.
                </p>
                <div className="ss-metrics">
                  <div className="ss-metric">200% Increase in User Base</div>
                  <div className="ss-metric">50% decrease in CPA</div>
                </div>
                <a href="#" className="ss-cta">
                  Read full case study
                </a>
              </div>
              <div className="ss-screenshot">
                <img src="img/image2.png" alt="Product Launch Metrics" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
