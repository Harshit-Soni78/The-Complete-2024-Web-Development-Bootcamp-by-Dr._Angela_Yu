// Import necessary modules
const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config(); // To load environment variables from .env file

// Initialize the Express app
const app = express();
const port = 3000;

// Set up the view engine to use EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Middleware to serve static files (like CSS, if you add any)
app.use(express.static('public'));

// --- ROUTES ---

// GET route to render the main page with the form
app.get('/', (req, res) => {
    // Render the index.ejs view.
    // Pass initial empty values for weather and error.
    res.render('index', { weather: null, error: null });
});

// POST route to handle the form submission
app.post('/', async (req, res) => {
    // Get the city from the form submission
    const city = req.body.city;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;

    if (!apiKey) {
        return res.render('index', {
            weather: null,
            error: 'API Key is missing. Please add OPENWEATHERMAP_API_KEY to your .env file.'
        });
    }

    // API URL to get coordinates for the city name
    const geoApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

    let weatherData = null;
    let error = null;

    try {
        // 1. Get the geographical coordinates (latitude and longitude) for the city
        const geoResponse = await axios.get(geoApiUrl);

        if (geoResponse.data.length === 0) {
            throw new Error(`Could not find location: ${city}. Please try again.`);
        }

        const { lat, lon, name, country } = geoResponse.data[0];

        // 2. Use the coordinates to get the 5-day forecast data (which is on the free tier)
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const weatherResponse = await axios.get(weatherApiUrl);

        // 3. Process the forecast data to find tomorrow's weather
        const forecasts = weatherResponse.data.list;

        // Get tomorrow's date as a string in 'YYYY-MM-DD' format
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDateString = tomorrow.toISOString().split('T')[0];

        // Filter the forecasts to get only those for tomorrow
        const tomorrowsForecasts = forecasts.filter(forecast => {
            return forecast.dt_txt.startsWith(tomorrowDateString);
        });

        if (tomorrowsForecasts.length === 0) {
             throw new Error("Could not retrieve tomorrow's forecast data.");
        }

        // Check if any of tomorrow's forecast periods predict rain
        const willRain = tomorrowsForecasts.some(f => f.weather[0].main === 'Rain');

        // Find a representative forecast for tomorrow (e.g., midday) for details
        const representativeForecast = tomorrowsForecasts.find(f => f.dt_txt.includes("12:00:00")) || tomorrowsForecasts[0];

        weatherData = {
            city: name,
            country: country,
            willRain: willRain,
            description: representativeForecast.weather[0].description,
            temp: representativeForecast.main.temp,
            // Create a summary from the data we have
            summary: `Temperatures will be around ${Math.round(representativeForecast.main.temp)}°C with ${representativeForecast.weather[0].description}.`
        };

    } catch (err) {
        console.error(err);
        // If an error occurs, pass an error message to the view
        if (err.response && err.response.status === 401) {
             error = 'Invalid API Key. Please check your .env file.';
        } else if (err.message.includes('Could not find location')) {
             error = err.message;
        }
        else {
             error = 'Error fetching weather data. Please try again.';
        }
    }

    // Render the index.ejs view with the weather data or an error message
    res.render('index', { weather: weatherData, error: error });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
