function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-tag">SMART AIR QUALITY MONITORING</p>

        <h1>
          Breathe Smarter with
          <span> AI-Powered Air Insights</span>
        </h1>

        <p>
          Monitor air pollution, understand AQI levels and receive smart
          health recommendations for cleaner and safer living.
        </p>

        <a href="#dashboard" className="primary-btn">
          Check Air Quality
        </a>
      </div>

      <div className="hero-circle">
        <div>
          <span>LIVE</span>
          <h2>AQI</h2>
          <p>Air Quality Intelligence</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;