var APIKey = "a0b0ce6f50e0b65130382561e6a81e57";
var APIKeyTwo = "fa0e5b8eca9488544f4571b9572e84d3";
console.log(APIKey, APIKeyTwo);
var city = document.getElementById("citySearch");
console.log(city);
//Grabbing value from LS if no vlaue is present assign a blank array instead. 
var localStorageGrab = JSON.parse(localStorage.getItem('cityList')) || [];
console.log("LS array", localStorageGrab);

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
// console.log(queryURL);

// fetch(queryURL);

function concludeSearch(event) {
    event.preventDefault();
    console.log(city.value);
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=" + APIKey;
    console.log(queryURL);
    fetch(queryURL).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        fiveDayFore();
        //Save it to LOCAL STORAGE 
        //previous searched citites 
        localStorageGrab.push(city.value);
        console.log("Appending values to exisiting list", localStorageGrab);
        localStorage.setItem('cityList', JSON.stringify(localStorageGrab))
        //re-render the cityloop 
        cityLoop();
    });

}

function fiveDayFore() {

    console.log(city.value);
    var queryURLfive = "http://api.openweathermap.org/data/2.5/forecast?q=" + city.value + "&appid=" + APIKeyTwo;
    console.log(queryURLfive);
    fetch(queryURLfive).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    });
}

//Render the City List buttons 
function cityLoop() {
    console.log("Previous searched cities", localStorageGrab.length);
    var divElement = document.getElementById("cityListEl");
    var counter = 0;
    //reset the div 
    divElement.innerHTML = '';


    if (localStorageGrab.length <= 5) {
        
        counter = localStorageGrab.length;
    } else {
        //in case array length is > than 5 set the counter MAX value as 5 
        counter = 5;
    }

    //loop to run max 5 times or lesser depending on the array values 
    for (i = 0; i < counter; i++) {
        //grabs each index from an arra
        var arrElement = localStorageGrab[i];
        console.log("City is ", arrElement);

        //creating a tag html element
        var aTagElement = document.createElement("a");
      
        aTagElement.setAttribute("class", "list-group-item list-group-item-action");
        aTagElement.textContent = arrElement;
        console.log("Create a tag", aTagElement);

        divElement.append(aTagElement);

    }
}


//Page load 
cityLoop();

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

