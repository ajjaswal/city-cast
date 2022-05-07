var APIkey = "16db7d4e91ab780f9f9778cedb8d685f";

var cityinput = $('#city-input');
var searchBtn = $('#search-button');
var clearBtn = $('#clear-button');
var pastsearches = $('#past-searches');

var currentCity;

// call openweather api to get data
function getWeather(data) {

    var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${APIkey}`
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            // Current weather, city name, and date
            var currentConditionsEl = $('#currentConditions');
            currentConditionsEl.addClass('border border-primary');

           
            var cityNameEl = $('<h2>');
            cityNameEl.text(currentCity);
            currentConditionsEl.append(cityNameEl);
            
           
            var currentCityDate = data.current.dt;
            currentCityDate = moment.unix(currentCityDate).format("MM/DD/YYYY");
            var currentDateEl = $('<span>');
            currentDateEl.text(` (${currentCityDate}) `);
            cityNameEl.append(currentDateEl);

            // Display city temperature
            var currentCityTemp = data.current.temp;
            var currentTempEl = $('<p>')
            currentTempEl.text(`Temp: ${currentCityTemp}°F`)
            currentConditionsEl.append(currentTempEl);
            
            // Display wind speed
            var currentCityWind = data.current.wind_speed;
            var currentWindEl = $('<p>')
            currentWindEl.text(`Wind: ${currentCityWind} MPH`)
            currentConditionsEl.append(currentWindEl);

            // Display humidity %
            var currentCityHumidity = data.current.humidity;
            var currentHumidityEl = $('<p>')
            currentHumidityEl.text(`Humidity: ${currentCityHumidity}%`)
            currentConditionsEl.append(currentHumidityEl);

            // Display UV
            var currentCityUV = data.current.uvi;
            var currentUvEl = $('<p>');
            var currentUvSpanEl = $('<span>');
            currentUvEl.append(currentUvSpanEl);

            currentUvSpanEl.text(`UV: ${currentCityUV}`)

            currentConditionsEl.append(currentUvEl);

            