# 🌍 AirAware AI

### Smart Air Pollution & AQI Monitoring System

AirAware AI is a web-based air quality monitoring system built using **React.js**.  
It provides real-time air quality information, pollutant details, AQI forecasting, health recommendations, and city-wise air quality comparison.

---

## 🚀 Features

- 🌫️ Real-time AQI monitoring
- 🏙️ Search and select different cities
- 📊 AQI category and status
- 💨 PM2.5 and PM10 monitoring
- 🏭 CO, NO₂, SO₂ and O₃ pollutant information
- 🌡️ Current temperature
- 💧 Humidity information
- 🔮 AQI forecast for the next day
- ❤️ Health and safety recommendations
- 🏙️ Compare air quality between different cities
- 🔄 Refresh latest air quality data
- 📱 Responsive design for mobile and desktop
- 🌐 Data fetched from Open-Meteo Air Quality API

---

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### API
- Open-Meteo Air Quality API

### Tools
- VS Code
- Git
- GitHub
- Vercel

---

## 📁 Project Structure

```text
airaware-ai/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── SearchCity.jsx
│   │   ├── AQICard.jsx
│   │   ├── PollutantCard.jsx
│   │   ├── HealthAdvice.jsx
│   │   ├── PredictionCard.jsx
│   │   ├── PollutionInfo.jsx
│   │   ├── CityComparison.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── cityData.js
│   │
│   ├── utils/
│   │   ├── aqiUtils.js
│   │   └── aqiApi.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md