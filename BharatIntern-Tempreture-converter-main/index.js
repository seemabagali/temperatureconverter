let celsiusInput = document.getElementById("celsius");
let fahrenheitInput = document.getElementById("fahrenheit");
let convertCtoFButton = document.getElementById("convert-c-to-f");
let convertFtoCButton = document.getElementById("convert-f-to-c");

convertCtoFButton.addEventListener("click", () => {
    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
});

convertFtoCButton.addEventListener("click", () => {
    let fahrenheit = parseFloat(fahrenheitInput.value);
    let celsius = (fahrenheit - 32) * 5 / 9;
    celsiusInput.value = celsius.toFixed(2);
});

function reset() {
    let celsiusInput = document.getElementById('celsius');
    let fahrenheitInput = document.getElementById('fahrenheit');
    celsiusInput.value = '';
    fahrenheitInput.value = '';
}