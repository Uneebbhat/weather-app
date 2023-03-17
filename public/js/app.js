const url = 'https://api.weatherbit.io/v2.0/current?key=80f3ba7ec6ae405989399d9706796e49&city=New%20York%20City,NY';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const card = document.querySelector('.weather-card');
        const city = card.querySelector('.city');
        const temperature = card.querySelector('.temperature');
        const humidity = card.querySelector('.humidity');
        const windSpeed = card.querySelector('.wind-speed');

        city.textContent = data.data[0].city_name;
        temperature.textContent = `${data.data[0].temp}°C`;
        humidity.textContent = `Humidity: ${data.data[0].rh}%`;
        windSpeed.textContent = `Wind Speed: ${data.data[0].wind_spd} m/s`;

    });