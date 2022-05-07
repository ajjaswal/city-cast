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

