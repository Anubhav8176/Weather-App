document.querySelector("#getWeather").addEventListener(
    "click",
    function(){
        let city = document.getElementById("cityInput").value;
        var url = `http://api.weatherapi.com/v1/current.json?key=65370aac83d8458981b180030243108&q=${city}&aqi=no`;

        fetch(url)
        .then(response =>
            response.json()
        )
        .then(data =>
        {
            document.querySelector("#place").textContent = `${data.location.name}, ${data.location.region}, ${data.location.country}`
            document.querySelector("#date").textContent = `Last Updated: ${data.current.last_updated}`
            document.querySelector("#weatherIcon").innerHTML = 
            `<img id="weatherIcon" src=${data.current.condition.icon} alt="Weather Icon!">`
            document.querySelector("#weatherStatus").textContent = `Status: ${data.current.condition.text}`
            document.querySelector("#windSpeed").textContent = `Wind speed: ${data.current.wind_kph} km/h`
        })
    }
)
