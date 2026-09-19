import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchCity from "./components/SearchCity";
import AQICard from "./components/AQICard";
import PollutantCard from "./components/PollutantCard";
import HealthAdvice from "./components/HealthAdvice";
import PredictionCard from "./components/PredictionCard";
import PollutionInfo from "./components/PollutionInfo";
import CityComparison from "./components/CityComparison";
import Footer from "./components/Footer";

import { getAirQuality } from "./utils/aqiApi";
import cityData from "./data/cityData";

import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [airData, setAirData] = useState(null);
  const [comparisonData, setComparisonData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  const currentData =
    cityData.find((item) => item.city === selectedCity) || cityData[0];

  // Fetch selected city's data
  const fetchAirQuality = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getAirQuality(selectedCity);

      console.log("API Data:", data);

      setAirData(data);
      setLastUpdated(data.current?.time || "");
    } catch (err) {
      console.error(err);
      setError("Unable to fetch air quality data.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when city changes
  useEffect(() => {
    fetchAirQuality();
  }, [selectedCity]);

  // Fetch all cities for comparison
  useEffect(() => {
    const fetchAllCities = async () => {
      const results = [];

      for (const city of cityData) {
        try {
          const data = await getAirQuality(city.city);

          results.push({
            city: city.city,
            aqi: data.current?.us_aqi,
            pm25: data.current?.pm2_5,
            pm10: data.current?.pm10
          });
        } catch (err) {
          console.error(`Error fetching ${city.city}`, err);
        }
      }

      setComparisonData(results);
    };

    fetchAllCities();
  }, []);

  // Loading screen
  if (loading && !airData) {
    return (
      <>
        <Navbar />
        <Hero />

        <main className="container loading-container">
          <div className="loader"></div>
          <h2>Fetching Air Quality Data...</h2>
          <p>Please wait a moment.</p>
        </main>

        <Footer />
      </>
    );
  }

  // Error screen
  if (error && !airData) {
    return (
      <>
        <Navbar />
        <Hero />

        <main className="container">
          <h2>Unable to fetch air quality data.</h2>
          <p>Please try selecting the city again.</p>

          <button
            className="refresh-button"
            onClick={fetchAirQuality}
          >
            🔄 Try Again
          </button>
        </main>

        <Footer />
      </>
    );
  }

  const realAQI =
    airData?.current?.us_aqi ?? currentData.aqi;

  return (
    <>
      <Navbar />

      <Hero />

      <main className="container" id="dashboard">

        {/* City Search */}
        <SearchCity
          cities={cityData}
          selectedCity={selectedCity}
          onCityChange={setSelectedCity}
        />

        {/* Last Updated */}
        {lastUpdated && (
          <p className="last-updated">
            🕒 Last Updated:{" "}
            {new Date(lastUpdated).toLocaleString()}
          </p>
        )}

        {/* Refresh Button */}
        <button
          className="refresh-button"
          onClick={fetchAirQuality}
          disabled={loading}
        >
          {loading ? "Refreshing..." : "🔄 Refresh AQI"}
        </button>

        {/* Dashboard */}
        <div className="main-dashboard">

          <AQICard
            data={{
              ...currentData,
              aqi: realAQI
            }}
          />

          <PredictionCard
            hourlyAQI={airData?.hourly?.us_aqi}
          />

        </div>

        {/* Pollutants */}
        <section className="pollution-section">

          <div className="section-heading">
            <p className="section-label">
              AIR POLLUTANTS
            </p>

            <h2>Pollution Breakdown</h2>
          </div>

          <div className="pollutant-grid">

            <PollutantCard
              name="PM2.5"
              value={
                airData?.current?.pm2_5 ??
                currentData.pm25
              }
              unit="µg/m³"
              description="Fine particulate matter"
            />

            <PollutantCard
              name="PM10"
              value={
                airData?.current?.pm10 ??
                currentData.pm10
              }
              unit="µg/m³"
              description="Coarse particulate matter"
            />

            <PollutantCard
              name="CO"
              value={
                airData?.current?.carbon_monoxide ??
                currentData.co
              }
              unit="µg/m³"
              description="Carbon monoxide"
            />

            <PollutantCard
              name="NO₂"
              value={
                airData?.current?.nitrogen_dioxide ??
                currentData.no2
              }
              unit="µg/m³"
              description="Nitrogen dioxide"
            />

            <PollutantCard
              name="SO₂"
              value={
                airData?.current?.sulphur_dioxide ??
                currentData.so2
              }
              unit="µg/m³"
              description="Sulphur dioxide"
            />

            <PollutantCard
              name="O₃"
              value={
                airData?.current?.ozone ??
                currentData.o3
              }
              unit="µg/m³"
              description="Ground-level ozone"
            />

          </div>
        </section>

        {/* Weather */}
        <div className="weather-info">

          <div className="weather-card">
            <h3>🌡️ Temperature</h3>

            <p>
              {airData?.current?.temperature_2m ?? "--"} °C
            </p>
          </div>

          <div className="weather-card">
            <h3>💧 Humidity</h3>

            <p>
              {airData?.current?.relative_humidity_2m ?? "--"} %
            </p>
          </div>

        </div>

        {/* Health Advice */}
        <HealthAdvice aqi={realAQI} />

        {/* Pollution Information */}
        <PollutionInfo />

        {/* City Comparison */}
        <CityComparison cities={comparisonData} />

      </main>

      <Footer />
    </>
  );
}

export default App;
