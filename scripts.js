var apiKey = "&appid=cf07720502e46b7205f0e6b5ce3e8393";
var baseUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';
var fullUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';
var searchBtn = document.getElementById("search-button");

function getWeatherResults(lat, lon) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cf07720502e46b7205f0e6b5ce3e8393&units=imperial`;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

function handleCitySearch(event) {
    var cityName = $(this).siblings(".city-value").value().trim();
    console.log(cityName);
    var requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=5&appid=cf07720502e46b7205f0e6b5ce3e8393`;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
    var lat = data[0].lat;
    var lon = data[0].lon;
    getWeatherResults(lat, lon);


    //get value of input field
    //build a url by combining baseUrl + input value + api key    
};





searchBtn.addEventListener('click', handleCitySearch);