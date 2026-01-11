function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (location === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "8a81737e6a654574818184937261001";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("weatherResult").innerHTML =
                    "<p>❌ City not found</p>";
                return;
            }

            const temp = data.current.temp_c;
            const condition = data.current.condition.text;
            const humidity = data.current.humidity;
            const city = data.location.name;
            const country = data.location.country;

            document.getElementById("weatherResult").innerHTML = `
                <h3>${city}, ${country}</h3>
                <p>🌡️ Temperature: <strong>${temp}°C</strong></p>
                <p>🌥️ Condition: ${condition}</p>
                <p>💧 Humidity: ${humidity}%</p>
            `;
        })
        .catch(error => {
            console.log(error);
            document.getElementById("weatherResult").innerHTML =
                "<p>⚠️ Error fetching data</p>";
        });
}
