function PredictionCard({ hourlyAQI }) {
  const getTomorrowAQI = () => {
    if (!hourlyAQI || hourlyAQI.length === 0) {
      return "--";
    }

    // Take AQI values from tomorrow
    const tomorrowValues = hourlyAQI.slice(24, 48);

    if (tomorrowValues.length === 0) {
      return "--";
    }

    // Calculate average AQI
    const total = tomorrowValues.reduce(
      (sum, value) => sum + (value || 0),
      0
    );

    return Math.round(total / tomorrowValues.length);
  };

  const predictedAQI = getTomorrowAQI();

  return (
    <div className="prediction-card">
      <p className="section-label">AQI FORECAST</p>

      <h2>Tomorrow's AQI</h2>

      <div className="prediction-number">
        {predictedAQI}
      </div>

      <p>
        Estimated average AQI for tomorrow
        based on the air-quality forecast.
      </p>

      <small>
        Forecast data is provided by the air-quality API.
      </small>
    </div>
  );
}

export default PredictionCard;