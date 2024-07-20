function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

module.exports = { fahrenheitToCelsius, celsiusToFahrenheit };
