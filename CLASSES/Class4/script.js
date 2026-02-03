const Button = document.getElementById('search');
const locationInput = document.getElementById('inpt');


Button.addEventListener('click', () => {
    const searchTerm = locationInput.value;
    
    if (searchTerm) {

        getWeather(searchTerm);
        locationInput.value = "";
    } else {
        alert("Please enter a city name");
    }
});


async function getWeather(city) {
    
    const url = `https://api.weatherapi.com/v1/current.json?key=550acbe48826487e8a561524263001&q=${city}`;
    
    try {
        const response = await fetch(url);
        const jsondata = await response.json();

        console.log("Weather Data:", jsondata)
        
        console.log("Current Temp:", jsondata.current.temp_c + "°C");
        updateDOM(jsondata);
        
        
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

function updateDOM(jsondata){

        document.querySelector(".temperature").textContent = `${jsondata.current.temp_c} °C`;
        document.querySelector(".location").textContent = jsondata.location.name;
        document.querySelector(".time").textContent = jsondata.location.localtime.split(" ")[1];
        document.querySelector(".day").textContent = new Date(jsondata.location.localtime).toLocaleString("en-US", { weekday: "long" });
        document.querySelector(".date").textContent = jsondata.location.localtime.split(" ")[0];
    
}