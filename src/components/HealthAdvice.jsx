import { getAQIInfo } from "../utils/aqiUtils";

function HealthAdvice({ aqi }) {
  const info = getAQIInfo(aqi);

  let recommendations = [];

  if (aqi <= 50) {
    recommendations = [
      "Air quality is good.",
      "You can enjoy outdoor activities.",
      "No special precautions are required."
    ];
  } else if (aqi <= 100) {
    recommendations = [
      "Air quality is satisfactory.",
      "Sensitive people should reduce prolonged outdoor activities.",
      "Normal outdoor activities are generally fine."
    ];
  } else if (aqi <= 200) {
    recommendations = [
      "Consider wearing a mask outdoors.",
      "Reduce prolonged outdoor activities.",
      "Sensitive people should take extra care."
    ];
  } else if (aqi <= 300) {
    recommendations = [
      "Wear a mask when going outside.",
      "Avoid unnecessary outdoor activities.",
      "Keep doors and windows closed when pollution is high."
    ];
  } else {
    recommendations = [
      "Avoid outdoor activities as much as possible.",
      "Wear a protective mask if you must go outside.",
      "Keep doors and windows closed.",
      "Follow local health guidance."
    ];
  }

  return (
    <section className="health-advice">
      <div className="section-heading">
        <p className="section-label">AI HEALTH ADVICE</p>
        <h2>What should you do?</h2>
      </div>

      <div className="advice-box">
        <h3>{info.category} AQI</h3>

        <ul>
          {recommendations.map((item, index) => (
            <li key={index}>💡 {item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HealthAdvice;