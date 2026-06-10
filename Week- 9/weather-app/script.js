document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const searchBtn = document.getElementById('search-btn');
    const locationName = document.getElementById('location-name');
    const weatherDate = document.getElementById('weather-date');
    const currentTemp = document.getElementById('current-temp');
    const weatherDescription = document.getElementById('weather-description');
    const windSpeed = document.getElementById('wind-speed');
    const windDirection = document.getElementById('wind-direction');
    const humidity = document.getElementById('humidity');
    const visibility = document.getElementById('visibility');
    const weatherIcon = document.querySelector('.weather-icon-main');

    // Set current date
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    weatherDate.textContent = new Date().toLocaleDateString('en-US', options);

    // Weather Data Mock (matching the user's initial image)
    const mockData = {
        'hyderabad': {
            location: 'Hyderabad, India',
            temp: 28,
            desc: 'Partly Cloudy',
            wind: '12 km/h',
            dir: '180°',
            hum: '65%',
            vis: '10 km',
            icon: 'fa-cloud-sun'
        },
        'new york': {
            location: 'New York, USA',
            temp: 22,
            desc: 'Clear Sky',
            wind: '8 km/h',
            dir: '45°',
            hum: '40%',
            vis: '15 km',
            icon: 'fa-sun'
        },
        'london': {
            location: 'London, UK',
            temp: 15,
            desc: 'Light Rain',
            wind: '18 km/h',
            dir: '270°',
            hum: '85%',
            vis: '5 km',
            icon: 'fa-cloud-showers-heavy'
        }
    };

    function updateWeather(city) {
        const data = mockData[city.toLowerCase()];
        
        if (data) {
            locationName.textContent = data.location;
            
            // Animate temperature change
            animateValue(currentTemp, parseInt(currentTemp.textContent), data.temp, 500);
            
            weatherDescription.textContent = data.desc;
            windSpeed.textContent = data.wind;
            windDirection.textContent = data.dir;
            humidity.textContent = data.hum;
            visibility.textContent = data.vis;
            
            // Update icon
            weatherIcon.className = `fas ${data.icon} weather-icon-main`;
            
            // Add pulse effect once updated
            weatherIcon.parentElement.classList.add('updated');
            setTimeout(() => weatherIcon.parentElement.classList.remove('updated'), 1000);
        } else {
            alert('City not found in mock data. Try "Hyderabad", "London", or "New York".');
        }
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerText = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    searchBtn.addEventListener('click', () => {
        if (cityInput.value.trim()) {
            updateWeather(cityInput.value.trim());
        }
    });

    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && cityInput.value.trim()) {
            updateWeather(cityInput.value.trim());
        }
    });
});
