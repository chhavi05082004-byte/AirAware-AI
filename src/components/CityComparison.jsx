function CityComparison({ cities }) {
  return (
    <section className="city-comparison">
      <div className="section-heading">
        <p className="section-label">CITY COMPARISON</p>
        <h2>Compare Air Quality</h2>
      </div>

      <div className="comparison-grid">
        {cities.map((city) => (
          <div className="comparison-card" key={city.city}>
            <h3>{city.city}</h3>

            <p className="comparison-aqi">
              AQI: {city.aqi ?? "--"}
            </p>

            <p>
              PM2.5: {city.pm25 ?? "--"} µg/m³
            </p>

            <p>
              PM10: {city.pm10 ?? "--"} µg/m³
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CityComparison;