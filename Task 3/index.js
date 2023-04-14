 const tempConv = () =>{
    const numberTemp = document.getElementById('num').value;
    const value = document.getElementById('tempDifference').value;
    const celsiusToFahrenheit=(numberTemp)=>{
      let Fahrenheit = ((numberTemp*9/5)+32);
      return Fahrenheit;
    }
    const FahrenheittoCelsius=(numberTemp)=>{
        let Celius = ((numberTemp - 32)*5/9);
        return Celius;
      }
    let result;
    if(value === 'Celius'){
        result = celsiusToFahrenheit(numberTemp);
        document.getElementById('resultCalculator').innerHTML =`${result}Fahrenheit`
    }else{
        result = FahrenheittoCelsius(numberTemp);
        document.getElementById('resultCalculator').innerHTML =`${result}Celsius` 
    }
}