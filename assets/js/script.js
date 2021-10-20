var APIKey = "a0b0ce6f50e0b65130382561e6a81e57";
var APIKeyTwo = "fa0e5b8eca9488544f4571b9572e84d3";
console.log(APIKey, APIKeyTwo);
var city = document.getElementById("citySearch");
console.log(city);
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
// console.log(queryURL);

// fetch(queryURL);

function concludeSearch(event) {
    event.preventDefault();
    console.log(city.value);
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + APIKey;
    console.log(queryURL);
    fetch(queryURL).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    });
fiveDayFore();
}

function fiveDayFore() {
  
    console.log(city.value);
    var queryURLfive = "http://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&appid=" + APIKeyTwo;
    console.log(queryURLfive);
    fetch(queryURLfive).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    });

}


var buttonSearch = document.getElementById("searchBtn");

buttonSearch.addEventListener("click", concludeSearch);


// cityName.html(data.name + ", " + moment().format("MMM Do YYYY") + "<img src=" + icon + " />");

// {/* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script> */}

// function addToList(name){
    // var list = document.querySelector('.button-list');
    // var button = document.createElement('button');
    // button.innerHTML = name;
    // button.classList.add('btn');
    // button.classList.add('btn-primary');
    // button.addEventListener('click', function(){
    //     updateCity(name);
    // });
    // cityNames.push(name);
    // localStorage.setItem('cityNames', JSON.stringify(cityNames));
    // list.appendChild(button);
// }

