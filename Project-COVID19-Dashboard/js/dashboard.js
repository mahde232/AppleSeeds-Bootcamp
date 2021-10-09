//global parameters
let covid_api_url = 'https://corona-api.com/countries'
let countries_api_URL = 'https://cors-anywhere.herokuapp.com/https://restcountries.herokuapp.com/api/v1' //with proxy, fixes cors problem, but needs to request permission to use first
// let countries_api_URL = 'https://restcountries.herokuapp.com/api/v1' //without proxy, has cors problem
let countriesResult, covidDataResult, chartObject, countries = {}, coronaStats = {}, graphColor = `rgb(40,40,40)`, refetchTime = 300; //this is in seconds

//functions
async function getCountries() {
    console.log('timeSinceCountries=',(timeSinceLastFetch().countries)/1000);
    if (!window.localStorage.getItem(`countriesCleanedData`) || ( (timeSinceLastFetch().countries/1000) >= refetchTime) ) 
    {
        try {
            document.querySelector(`#spinnerContainer`).style.zIndex = 2;
            let countries = await ((await fetch(countries_api_URL)).json())
            document.querySelector(`#spinnerContainer`).style.zIndex = -1;
            countries = countries.map(element => {
                return {
                    name: element.name.common,
                    region: element.region
                }
            })
            window.localStorage.setItem('countriesCleanedData', JSON.stringify(countries))
            window.localStorage.setItem('countriesDataFetchTime', JSON.stringify(Date.now()))
        }
        catch(err) {console.log('Error while pulling countries API, error=',err);}
    }
}
async function getCOVIDData() {
    console.log('timeSinceCovidData=',(timeSinceLastFetch().covidData)/1000);
    if (!window.localStorage.getItem(`covidDataCleaned`) || ( (timeSinceLastFetch().covidData/1000) >= refetchTime) ) 
    {
        try {
            document.querySelector(`#spinnerContainer`).style.zIndex = 2;
            let covidData = (await ((await fetch(covid_api_url)).json())).data;
            document.querySelector(`#spinnerContainer`).style.zIndex = -1;
            covidData = covidData.map(element => {
                return {
                    name: element.name,
                    population: element.population,
                    critical: element.latest_data.critical,
                    deaths: element.latest_data.deaths,
                    recovered: element.latest_data.recovered,
                    confirmed: element.latest_data.confirmed
                }
            })
            window.localStorage.setItem('covidDataCleaned', JSON.stringify(covidData))
            window.localStorage.setItem('covidDataFetchTime', JSON.stringify(Date.now()))
        }
        catch(err) {console.log('Error while pulling covid API, error=',err);}
    }
}
function getContinent(selectedContinent, statistic) {
    let countriesNames = [], countriesStats = []
    for (let i = 0; i < countriesResult.length; i++)
        if (countriesResult[i].region == selectedContinent)
            for (let j = 0; j < covidDataResult.length; j++)
                if (covidDataResult[j].name == countriesResult[i].name && covidDataResult[j] != undefined) {
                    countriesStats.push(covidDataResult[j][statistic])
                    countriesNames.push(countriesResult[i].name);
                }
    return { countriesNames, countriesStats } //send back object containing 2 data arrays
}
function getCountriesInContinent(selectedContinent) {
    let countriesNames = []
    for (let i = 0; i < countriesResult.length; i++)
        if (countriesResult[i].region == selectedContinent)
            countriesNames.push(countriesResult[i].name);
    return countriesNames;
}
function getSpecificCountryData(selectedCountry) {
    for (let j = 0; j < covidDataResult.length; j++)
        if (covidDataResult[j].name == selectedCountry && covidDataResult[j] != undefined)
            return covidDataResult[j];
}
function buildChart(chartType, chosenContinent, statisticType) {
    let dataRes = getContinent(chosenContinent, statisticType)
    if (chartObject)
        chartObject.destroy()
    chartObject = new Chart(document.querySelector('#myChart'), {
        type: chartType,
        data: {
            labels: dataRes.countriesNames,
            datasets: [{
                label: statisticType,
                data: dataRes.countriesStats,
                backgroundColor: generateRandomColors(dataRes.countriesNames.length),
            }]
        },
        options: {
            maintainAspectRatio: false,
            fill: true,
        }
    })
}
function createCountryData(chosenCountry) {
    let countryData = getSpecificCountryData(chosenCountry)
    let str = `<div id='countryPopulation'>Total Population: ${countryData.population}</div>`
    str += `<div id='countryConfirmed'>Confirmed Cases: ${countryData.confirmed}</div>`
    str += `<div id='countryCritical'>Critical Cases: ${countryData.critical}</div>`
    str += `<div id='countryDeaths'>Deaths Cases: ${countryData.deaths}</div>`
    str += `<div id='countryRecovered'>Recovered Cases: ${countryData.recovered}</div>`
    return str;
}
function createCountriesDropdown(chosenContinent) {
    let countriesInContinentData = getCountriesInContinent(chosenContinent)
    let str = '<span>Choose country for individual data:</span>'
    str += `<select name='countries' id='countries-select'>`
    countriesInContinentData.forEach(country => {
        str += `<option value="${country}">${country}</option>`
    });
    str+= `</select>`;
    return str;
}
//useful small functions
function getItemFromLocalStorage(item) {
    return JSON.parse(localStorage.getItem(item))
}
function getItemFromSessionStorage(item) {
    return JSON.parse(sessionStorage.getItem(item))
}
function generateRandomColors(length) {
    let arrayOfColors = []
    for (let i = 0; i < length - 1; i++) //put randomly generated colors for each country point in graph
        arrayOfColors.push(`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`)
    arrayOfColors.unshift(graphColor) //add first manual color
    return arrayOfColors
}
function timeSinceLastFetch() {
    let now = Date.now();
    // console.log(`Date now = ${Date.now()}, date saved = ${window.localStorage.getItem(`countriesDataFetchTime`)}`);
    return {
        countries: (now - window.localStorage.getItem(`countriesDataFetchTime`)),
        covidData: (now - window.localStorage.getItem(`covidDataFetchTime`))
    }
}
//eventListeners + onload
window.onload = async function() {
    await getCountries()
    await getCOVIDData()
    countriesResult = getItemFromLocalStorage('countriesCleanedData');
    covidDataResult = getItemFromLocalStorage('covidDataCleaned');

    //for first startup
    buildChart(document.querySelector("#chart-select").value, document.querySelector("#region-select").value, document.querySelector("#statistic-select").value)
    document.querySelector('#dropdownContainer').innerHTML = createCountriesDropdown(document.querySelector("#region-select").value);
    document.querySelector('#countries-select').addEventListener('change',()=> {
        document.querySelector('#countryDataContainer').innerHTML = createCountryData(document.querySelector('#countries-select').value);
    })
    document.querySelector('#countryDataContainer').innerHTML = createCountryData(document.querySelector('#countries-select').value);
}
document.querySelector('#grabDataBtn').addEventListener('click', async function () {
    buildChart(document.querySelector("#chart-select").value, document.querySelector("#region-select").value, document.querySelector("#statistic-select").value)
    document.querySelector('#dropdownContainer').innerHTML = createCountriesDropdown(document.querySelector("#region-select").value);
    document.querySelector('#countries-select').addEventListener('change',()=> {
        document.querySelector('#countryDataContainer').innerHTML = createCountryData(document.querySelector('#countries-select').value);
    })
    document.querySelector('#countryDataContainer').innerHTML = createCountryData(document.querySelector('#countries-select').value);
})