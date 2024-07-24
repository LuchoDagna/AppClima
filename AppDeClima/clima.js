const urlBase= `https://api.openweathermap.org/data/2.5/weather`
const API_KEY= `e1ea1721fc5bdc0e142057c0cec2b3de`
const diffKelvin = 273.15;
const diffKmh = 3.6

document.getElementById(`searchButton`).addEventListener(`click`,()=>{
    const city = document.getElementById(`cityInput`).value;
    if (city) {
       fetchWeather(city) 
    }
    else{
        alert(`Ingrese una ciudad valida`)
    }
})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divResponseData = document.getElementById(`responseData`)
    divResponseData.innerHTML=``
    const cityName = data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const wind = data.wind.speed
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement(`h2`)
    cityInfo.textContent= `${cityName}, ${countryName}`

    const tempInfo = document.createElement(`p`)
    tempInfo.textContent = `La temperatura es de: ${Math.floor(temp-diffKelvin)}°C`

    const windInfo = document.createElement(`p`)
    windInfo.textContent = `El viento es de ${Math.floor(wind*diffKmh)} Km/h`

    const icoInfo = document.createElement(`img`)
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement(`p`)
    descriptionInfo.textContent= `La descripcion meteorologica es: ${description}`

    divResponseData.appendChild(cityInfo)
    divResponseData.appendChild(tempInfo)
    divResponseData.appendChild(windInfo)
    divResponseData.appendChild(icoInfo)
    divResponseData.appendChild(descriptionInfo)
}