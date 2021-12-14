    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPicEl = document.getElementById("current-pic");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    var fivedayEl = document.getElementById("fiveday-header");
    var todayweatherEl = document.getElementById("today-weather");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    // Assigning a unique API to a variable
    // API key for weather.
    const APIKey = "a0b0ce6f50e0b65130382561e6a81e57";
    // API key for 3-5 day forecast.
    const APIKeyTwo = "fa0e5b8eca9488544f4571b9572e84d3";
    console.log(APIKey, APIKeyTwo);

    function pageInit() {};




buttonSearch.addEventListener("click", concludeSearch);



