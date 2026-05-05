function convertTemp() {

    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unit").value;
    let result = "";

    if (isNaN(temp)) {
        document.getElementById("result").innerHTML = "Please enter a valid number!";
        return;
    }

    if (unit === "C") {
        let f = (temp * 9/5) + 32;
        let k = temp + 273.15;
        result = "Fahrenheit: " + f.toFixed(2) + " °F <br> Kelvin: " + k.toFixed(2) + " K";
    }

    else if (unit === "F") {
        let c = (temp - 32) * 5/9;
        let k = c + 273.15;
        result = "Celsius: " + c.toFixed(2) + " °C <br> Kelvin: " + k.toFixed(2) + " K";
    }

    else if (unit === "K") {
        let c = temp - 273.15;
        let f = (c * 9/5) + 32;
        result = "Celsius: " + c.toFixed(2) + " °C <br> Fahrenheit: " + f.toFixed(2) + " °F";
    }

    document.getElementById("result").innerHTML = result;
}