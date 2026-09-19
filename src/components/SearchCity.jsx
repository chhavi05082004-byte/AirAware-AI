import { useState } from "react";

function SearchCity({ cities, selectedCity, onCityChange }) {
  const [searchText, setSearchText] = useState(selectedCity);

  const handleChange = (e) => {
    const value = e.target.value;

    setSearchText(value);

    // Change selected city only when a valid city is entered
    const cityExists = cities.some(
      (city) => city.city.toLowerCase() === value.toLowerCase()
    );

    if (cityExists) {
      const matchedCity = cities.find(
        (city) => city.city.toLowerCase() === value.toLowerCase()
      );

      onCityChange(matchedCity.city);
    }
  };

  return (
    <div className="search-city">
      <label htmlFor="city-search">
        Search City
      </label>

      <input
        id="city-search"
        type="text"
        list="city-list"
        placeholder="Type city name..."
        value={searchText}
        onChange={handleChange}
      />

      <datalist id="city-list">
        {cities.map((city) => (
          <option key={city.city} value={city.city} />
        ))}
      </datalist>
    </div>
  );
}

export default SearchCity;