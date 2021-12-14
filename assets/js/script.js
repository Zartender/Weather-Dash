function pageInit() {  
  
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

    

        function getWeather(cityName) {
            // Execute a current weather get request from open weather api
            let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
            axios.get(queryURL)
                .then(function (response) {
    
                    todayweatherEl.classList.remove("d-none");
    
                    // Parse response to display current weather
                    const currentDate = new Date(response.data.dt * 1000);
                    const day = currentDate.getDate();
                    const month = currentDate.getMonth() + 1;
                    const year = currentDate.getFullYear();
                    nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
                    let weatherPic = response.data.weather[0].icon;
                    currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
                    currentPicEl.setAttribute("alt", response.data.weather[0].description);
                    currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
                    currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
                    currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";

                     // Get UV Index
                let lat = response.data.coord.lat;
                let lon = response.data.coord.lon;
                let UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
                axios.get(UVQueryURL)
                    .then(function (response) {
                        let UVIndex = document.createElement("span");
                        
                        // When UV Index is good, shows green, when ok shows yellow, when bad shows red
                        if (response.data[0].value < 4 ) {
                            UVIndex.setAttribute("class", "badge badge-success");
                        }
                        else if (response.data[0].value < 8) {
                            UVIndex.setAttribute("class", "badge badge-warning");
                        }
                        else {
                            UVIndex.setAttribute("class", "badge badge-danger");
                        }
                        console.log(response.data[0].value)
                        UVIndex.innerHTML = response.data[0].value;
                        currentUVEl.innerHTML = "UV Index: ";
                        currentUVEl.append(UVIndex);
                    });
                });
            }
        

           



                }
pageInit();
