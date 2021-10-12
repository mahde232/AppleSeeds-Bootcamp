//TODO: check if location is already added, then dont add it again

//global parameters
let API_key = 'cd902f98a35ef53e153954f49895d14a', arrayOfLocations = [];
//functions
async function getDataByName(searchFieldValue) {
    try {
        const response = await ((await (fetch(buildRequestURLByName(searchFieldValue, API_key)))).json());
        const locationWeatherDetails = {
            name: response.name,
            country: response.sys.country,
            sunset: response.sys.sunset * 1000,
            sunrise: response.sys.sunrise * 1000,
            windSpeed: response.wind.speed,
            minTemperature: response.main.temp_min,
            maxTemperature: response.main.temp_max,
            temperature: response.main.temp,
            feelsLike: response.main.feels_like,
            humidity: response.main.humidity,
            description: response.weather[0].main,
            descriptionExtended: response.weather[0].description
        }
        arrayOfLocations.push(locationWeatherDetails);
        saveArrayToLocalStorage();
        return locationWeatherDetails;
    }
    catch (err) {
        return false;
    }
}
async function getDataByLatLon(latitude, longitude) {
    const response = await ((await (fetch(buildRequestURLByLocation(latitude, longitude, API_key)))).json());
    const locationWeatherDetails = {
        name: response.name,
        country: response.sys.country,
        sunset: response.sys.sunset * 1000,
        sunrise: response.sys.sunrise * 1000,
        windSpeed: response.wind.speed,
        minTemperature: response.main.temp_min,
        maxTemperature: response.main.temp_max,
        temperature: response.main.temp,
        feelsLike: response.main.feels_like,
        humidity: response.main.humidity,
        description: response.weather[0].main,
        descriptionExtended: response.weather[0].description
    }
    return locationWeatherDetails;
}
function buildWeatherHtml(location, hasDeleteBtn = true) {
    let sunrise = new Date(location.sunrise), sunset = new Date(location.sunset);
    let str = `<div class='weatherItem'>`
        str += `<h4>${location.name}, ${location.country}</h4>`
        str += `<div class='temperatureDiv'>`
            str += `<div><span>${location.description}, ${location.descriptionExtended}</span></div>`
            str += `<div class='overview'><span class='tempText'><i class="fas fa-thermometer-half"></i>:</span><span class='tempValue'>${location.temperature}°C</span>, <span class='tempText'><i class="fas fa-tint"></i></span>: <span class='tempValue'>${location.humidity}%</span>, <span class='tempText'><i class="fas fa-wind"></i>: </span><span class='tempValue'>${location.windSpeed} km/h</span></div>`
            str += `<div class='tempsFlex'>`
                str += `<div><span class='tempText'><i class="fas fa-temperature-low"></i>: </span><span class='tempValue'>${location.minTemperature}°C</span></div>`
                str += `<div><span class='tempText'><i class="fas fa-temperature-high"></i>: </span><span class='tempValue'>${location.maxTemperature}°C</span></div>`
            str += `</div>`
        str += `</div>`
        str += `<h5>Sunrise: ${sunrise.getHours() < 10 ? ('0' + sunrise.getHours()) : sunrise.getHours()}:${sunrise.getMinutes() < 10 ? ('0' + sunrise.getMinutes()) : sunrise.getMinutes()}:${sunrise.getSeconds() < 10 ? ('0' + sunrise.getSeconds()) : sunrise.getSeconds()},
        Sunset: ${sunset.getHours() < 10 ? ('0' + sunset.getHours()) : sunset.getHours()}:${sunset.getMinutes() < 10 ? ('0' + sunset.getMinutes()) : sunset.getMinutes()}:${sunset.getSeconds() < 10 ? ('0' + sunset.getSeconds()) : sunset.getSeconds()}</h5>`
        if (hasDeleteBtn) str += `<i class="fas fa-trash-alt ${location.name.split(' ').join('-')} deleteIcon"></i>`
    str += `</div>`;
    return str;
}
function printLocalStorageItems() {
    arrayOfLocations.forEach(location => {
        document.querySelector('#searchResultsArea').innerHTML += buildWeatherHtml(location);
    })
    document.querySelectorAll('.deleteIcon').forEach(element => {
        element.addEventListener('click', deleteParentDiv)
    })
}
//useful small functions
function saveArrayToLocalStorage() {
    window.localStorage.setItem('arrayOfLocations',JSON.stringify(arrayOfLocations));
}
function pullArrayFromLocalStorage() {
    if(window.localStorage.getItem('arrayOfLocations')) //if exists
        return JSON.parse(window.localStorage.getItem('arrayOfLocations'));
    else
    {
        console.log('local storage empty');
        return [];
    }
}
function buildRequestURLByName(locationName, API_key) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cleanUpInput(locationName)}&units=metric&appid=${API_key}`;
}
function buildRequestURLByLocation(latitude, longitude, API_key) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_key}`;
}
function cleanUpInput(locationName) {
    return (locationName.replace(/\s\s+/g, ' ')).trim()
}
function errorFunc(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.")
            break;
    }
}
async function successFunc(location) {
    const data = await getDataByLatLon(location.coords.latitude, location.coords.longitude);
    document.querySelector('#currentLocationArea').innerHTML = buildWeatherHtml(data, false);
}
//event listeners
function handleSearchArea(event) {
    if (event.keyCode === 13) {
        document.querySelector("#searchBtn").click(); //virtual button click
        event.target.value = ''; //clean search area after Enter
    }
}
function deleteParentDiv(event) { 
    const index = arrayOfLocations.findIndex(element => {
        if( element.name.split(' ').join('-') == event.target.classList[2] )
            return true;
    })
    console.log('index=',index);
    console.log('element',arrayOfLocations[index]);
    if(index != -1)
    {
        arrayOfLocations.splice(index,1);
        saveArrayToLocalStorage();
        event.target.parentElement.remove();
    }
}
async function handleSearchBtn(event) {
    event.preventDefault();
    const data = await getDataByName(cleanUpInput(document.querySelector('#searchField').value));
    if (data != false) {
        document.querySelector('#searchResultsArea').innerHTML += buildWeatherHtml(data); //add weather search to list
        document.querySelectorAll('.deleteIcon').forEach(element => {
            element.addEventListener('click', deleteParentDiv)
        })
    }
}
window.onload = function () {
    if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(successFunc, errorFunc)
    else
        console.log('Geolocation is on available on your browser');
    document.querySelector('#searchField').addEventListener('keyup', handleSearchArea);
    document.querySelector('#searchBtn').addEventListener('click', handleSearchBtn);
    arrayOfLocations = pullArrayFromLocalStorage();
    printLocalStorageItems();
}