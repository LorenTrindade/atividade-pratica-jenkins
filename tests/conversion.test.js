const {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require("../src/conversion");

test("convert 32F to 0C", () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test("convert 100C to 212F", () => {
  expect(celsiusToFahrenheit(100)).toBe(212);
});
