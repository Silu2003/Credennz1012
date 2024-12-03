import React from "react";

export default function Footerhero() {
  return (
    <div>
      <section
        class="fhero-section"
        style={{
          backgroundPosition: "center",
          background: `url('${process.env.PUBLIC_URL}/img/img.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="container">
          <div class="fhero-content">
            <h1>
              Take your business to <br /> the next level.
            </h1>
            <p>
              Get more insights and reports for your startup and improve the
              <br /> customer relationships.
            </p>
            <a href="#" class="cta-button">
              Contact us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
