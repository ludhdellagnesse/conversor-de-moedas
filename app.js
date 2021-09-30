function converter(){
    let ValorEmDolar = document.querySelector("#valor").value
    let ValorEmDolarNumerico = parseFloat (ValorEmDolar)
    let CotacaoEmDolar= 5
    let ValorEmReal = ValorEmDolarNumerico * CotacaoEmDolar
    document.querySelector ("#ValorConvertido").innerHTML= "O Resultado em Real é R$" + ValorEmReal
}
