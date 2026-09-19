export const cityCoordinates = {
  Delhi: {
    latitude: 28.6139,
    longitude: 77.2090
  },

  Mumbai: {
    latitude: 19.0760,
    longitude: 72.8777
  },

  Bengaluru: {
    latitude: 12.9716,
    longitude: 77.5946
  },

  Hyderabad: {
    latitude: 17.3850,
    longitude: 78.4867
  },

  Chennai: {
    latitude: 13.0827,
    longitude: 80.2707
  },

  Kolkata: {
    latitude: 22.5726,
    longitude: 88.3639
  },

  "Greater Noida": {
    latitude: 28.4744,
    longitude: 77.5040
  },

  Pune: {
    latitude: 18.5204,
    longitude: 73.8567
  },

  Jaipur: {
    latitude: 26.9124,
    longitude: 75.7873
  },

  Lucknow: {
    latitude: 26.8467,
    longitude: 80.9462
  },

  Chandigarh: {
    latitude: 30.7333,
    longitude: 76.7794
  },

  Ahmedabad: {
    latitude: 23.0225,
    longitude: 72.5714
  }
};

export async function getAirQuality(city) {
  const location = cityCoordinates[city];

  if (!location) {
    throw new Error("City not found");
  }

  const url =
    `https://air-quality-api.open-meteo.com/v1/air-quality` +
    `?latitude=${location.latitude}` +
    `&longitude=${location.longitude}` +
    `&current=us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,temperature_2m,relative_humidity_2m` +
    `&hourly=us_aqi` +
    `&forecast_days=2` +
    `&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch air quality data");
  }

  return await response.json();
}