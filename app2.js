function ConverterTemperaturas(){
    let TemperaturaEmCelcius = document.querySelector('#temperaturaEmCelcius').value ;
    let CelciusConvertido = parseFloat(TemperaturaEmCelcius);

    let TemperaturaEmKelvin = CelciusConvertido + 273
    let TemperaturaEmFarenheit = 1.8 * CelciusConvertido +32

    document.querySelector('#ResultadoEmKelvin').innerHTML = "Kelvin: " + TemperaturaEmKelvin
    document.querySelector('#ResultadoEmFarenheit').innerHTML = "Farenheit:" + TemperaturaEmFarenheit
}