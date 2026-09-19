import { getAQIInfo } from "../utils/aqiUtils";

function AQICard({ data }) {
  const aqi = Math.round(data.aqi);
  const info = getAQIInfo(aqi);

  return (
    <div className={`aqi-card ${info.colorClass}`}>
      <p className="section-label">CURRENT AQI</p>

      <h2>{data.city}</h2>

      <div className="aqi-number">
        {aqi}
      </div>

      <h3>{info.category}</h3>

      <p>{info.message}</p>
    </div>
  );
}

export default AQICard;