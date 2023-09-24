import React from "react";

// This is a Semantic HTML Change (#3, added section element to organize banner content)
function Hero() {
  return (
    <section>
      <div className="hero">
        {/* This is an A11y Change (#1, added alt text for screen readers with modified CSS) */}
        <img
          className="house"
          src="bg.png"
          alt="Background with smartphone and laptop displaying info graphics."
        />
        <h1>Personal Budget</h1>
        <h2>A personal-budget management app</h2>
      </div>
    </section>
  );
}

export default Hero;
