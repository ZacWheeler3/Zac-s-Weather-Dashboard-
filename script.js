var apiKey ="&appid=cf07720502e46b7205f0e6b5ce3e8393";
var baseUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';
var fullUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';

function handleCitySearch(event){
//get value of input field
//build a url by combining baseUrl + input value + api key    
};

searchBtn.addEventListener('click', handleCitySearch);
