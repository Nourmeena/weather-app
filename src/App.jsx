import { useEffect, useState } from 'react';
import './index.css';
import './App.css';
import Navbar from '../src/components/Navbar/Navbar';
import TodayInfo from '../src/components/TodayInfo/TodayInfo';
import FiveDayForcast from '../src/components/FiveDayForcast/FiveDayForcast';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Cairo');
  const [fiveDayForecast, setFiveDayForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = (city) => {
    const API_KEY = 'c5249b2b49aa874bb83c5188b9ae95bd';
    const encodedCity = encodeURIComponent(city);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&units=metric&appid=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          setError('City not found. Please enter a valid city name.');
          setWeatherData(null);
          setFiveDayForecast(null);
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Weather Data:', data);
        setWeatherData(data);
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodedCity}&units=metric&appid=${API_KEY}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(forecastData => {
            console.log('5-Day Forecast Data:', forecastData);
            const filteredForecast = filterForecastByDay(forecastData.list);
            setFiveDayForecast({ ...forecastData, list: filteredForecast });
          })
          .catch(error => {
            console.error('Error fetching the 5-day forecast data:', error);
            setError('Failed to fetch 5-day forecast data. Please try again.');
          });
      })
      .catch(error => console.error('Error fetching the weather data:', error));
  };

  const filterForecastByDay = (forecastList) => {
    if (!forecastList || !Array.isArray(forecastList)) {
      console.error('Invalid forecast list:', forecastList);
      return [];
    }

    const uniqueDays = new Set();
    const filteredList = forecastList.filter((item) => {
      const date = item.dt_txt.split(' ')[0];
      if (!uniqueDays.has(date)) {
        uniqueDays.add(date);
        return true;
      }
      return false;
    });
    return filteredList.slice(1, 6); 
  };

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
    setError(null);
  };

  return (
    <div>
      <Navbar searching={handleSearch} />
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div>
          <div className='container'>
            <TodayInfo weatherData={weatherData} />
          </div>
          <div>
            <p className='title'>Five Day Forecast</p>
            <FiveDayForcast fiveDayForecast={fiveDayForecast} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;