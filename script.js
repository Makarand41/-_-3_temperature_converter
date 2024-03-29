const temperatureInput = document.getElementById("temperature");
const inputUnitSelect = document.getElementById("inputUnit");
const outputUnitSelect = document.getElementById("outputUnit");
const convertButton = document.getElementById("convert");
const resultDisplay = document.getElementById("result");

convertButton.addEventListener("click", () => {
  const inputTemperature = parseFloat(temperatureInput.value);
  const inputUnit = inputUnitSelect.value;
  const outputUnit = outputUnitSelect.value;

  // Perform conversion based on selected units
  let convertedTemperature;

  // Handle Kelvin conversions separately
  if (inputUnit === "kelvin") {
    if (inputTemperature >= 0) {
      convertedTemperature = inputTemperature - 273.15; // Convert to Celsius first
    } else {
      resultDisplay.textContent = "Invalid temperature (Kelvin must be non-negative)";
      return;
    }
  } else {
    convertedTemperature = inputTemperature;
  }

  // Only convert if the input and output units are different
  if (inputUnit !== outputUnit) {
    if (outputUnit === "fahrenheit") {
      convertedTemperature = convertToFahrenheit(convertedTemperature);
    } else if (outputUnit === "kelvin") {
      convertedTemperature += 273.15;
    }
  }

  // Display the result
  resultDisplay.textContent = `${convertedTemperature.toFixed(2)} ${outputUnit}`;
});

// Conversion function (only needed for Celsius to Fahrenheit now)
function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
