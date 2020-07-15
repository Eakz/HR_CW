// https://www.codewars.com/kata/55cb854deb36f11f130000e1/train/javascript
// celsius = (fahrenheit - 32) * (5/9)

function weatherInfo (temp) {
    var c = convertToCelsius(temp)
    if (c < 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
  }
  
  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9);
    return celsius
  }


console.log(weatherInfo(50)) // '10 is above freezing temperature')
console.log(weatherInfo(23)) //  '-5 is freezing temperature')
