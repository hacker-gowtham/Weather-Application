function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const weatherInfo = document.getElementById('weatherInfo');
    const location = locationInput.value.trim();
    const apiKey = '392fc1012b577ad74205cec8fae914d2'; 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
      
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const weatherDescription = data.weather[0].description;

        
        weatherInfo.innerHTML = `
          <h2>${location}</h2>
          <p>Temperature: ${temperature}°C</p>
          <p>Humidity: ${humidity}%</p>
          <p>Wind Speed: ${windSpeed} m/s</p>
          <p>Weather Description: ${weatherDescription}</p>
        `;
      })
      .catch(error => {
        console.log(error);
        weatherInfo.innerHTML = 'Error retrieving weather data.';
      });
  }
