export function getAQIInfo(aqi) {
  if (aqi <= 50) {
    return {
      category: "Good",
      message: "Air quality is good.",
      colorClass: "aqi-good"
    };
  }

  if (aqi <= 100) {
    return {
      category: "Satisfactory",
      message: "Air quality is satisfactory.",
      colorClass: "aqi-satisfactory"
    };
  }

  if (aqi <= 200) {
    return {
      category: "Moderate",
      message: "Air quality is moderate.",
      colorClass: "aqi-moderate"
    };
  }

  if (aqi <= 300) {
    return {
      category: "Poor",
      message: "Air quality is poor.",
      colorClass: "aqi-poor"
    };
  }

  if (aqi <= 400) {
    return {
      category: "Very Poor",
      message: "Air quality is very poor.",
      colorClass: "aqi-very-poor"
    };
  }

  return {
    category: "Severe",
    message: "Air quality is severe.",
    colorClass: "aqi-severe"
  };
}

export function predictAQI(aqi) {
  const change = Math.floor(Math.random() * 31) - 15;
  return Math.max(0, aqi + change);
}