function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unitSelect = document.getElementById("unitSelect").value;
    let convertedTemperature;
    if (isNaN(temperatureInput)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }
    if (unitSelect === "celsius") {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
        document.getElementById("result").innerText = `${temperatureInput} Celsius = ${convertedTemperature.toFixed(2)} Fahrenheit`;
    } else if (unitSelect === "fahrenheit") {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
        document.getElementById("result").innerText = `${temperatureInput} Fahrenheit = ${convertedTemperature.toFixed(2)} Celsius`;
    } else if (unitSelect === "kelvin") {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        document.getElementById("result").innerText = `${temperatureInput} Kelvin = ${convertedTemperature.toFixed(2)} Celsius`;
    }
}
