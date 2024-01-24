const express = require("express");
const https = require("https");

const app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/weather", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=7bbdbb107fce3a5fd649254039976e19&units=metric"; // Replace YOUR_API_KEY with your OpenWeatherMap API key

    https.get(url, function(response) {
        let data = '';

        response.on("data", function(chunk) {
            data += chunk;
        });

        response.on("end", function() {
            const weatherData = JSON.parse(data);
            res.send(weatherData);
        });
    }).on("error", function(error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
