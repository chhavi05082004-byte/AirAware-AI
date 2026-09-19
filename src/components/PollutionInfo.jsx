function PollutionInfo() {
  return (
    <section className="pollution-info">
      <div className="section-heading">
        <p className="section-label">POLLUTION AWARENESS</p>
        <h2>Pollution Causes & Safety Tips</h2>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <h3>🚗 Vehicle Pollution</h3>
          <p>
            Vehicle exhaust releases harmful gases and particulate matter
            into the air.
          </p>
        </div>

        <div className="info-card">
          <h3>🏭 Industrial Pollution</h3>
          <p>
            Factories and industries can release smoke and pollutants
            into the atmosphere.
          </p>
        </div>

        <div className="info-card">
          <h3>🔥 Burning Waste</h3>
          <p>
            Burning garbage and other materials can produce harmful
            smoke and particles.
          </p>
        </div>

        <div className="info-card">
          <h3>🌳 Plant More Trees</h3>
          <p>
            Trees and green spaces can help improve the local environment
            and reduce some air pollution.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PollutionInfo;