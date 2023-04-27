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
            var card = $("<div>").addClass("card").attr("style","width:20vw");
            var cardTitle = $("<h3>").addClass("card-title").text(data.name);
            var cardBody = $("<div>").addClass("card-body");
            var tempEl = $("<p>").addClass("card-text").text("TEMP: " + data.main.temp.toFixed(0)+ "F")
            $(".weather").append(card.append(cardTitle, cardBody, tempEl))
        //     <div class="row row-cols-1 row-cols-md-3 g-4">
        // <div class="col">
        //   <div class="card h-100">
        //     <div class="card-body">
        //       <h5 class="card-title">Card title</h5>
        //       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //     </div>
        //   </div>
        // </div>
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