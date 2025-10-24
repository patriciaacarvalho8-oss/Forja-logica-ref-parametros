function calcular(numero1, numero2, resposta, operador){
    var num1 = parseFloat(document.getElementById(numero1).value)
    var num2 = parseFloat(document.getElementById(numero2).value)
    var resultado

    switch (operador) {
        case '+':
            resultado = num1 + num2
            break;

        case '-':
            resultado = num1 - num2
            break;

        case '*':
            resultado = num1 * num2
            break;

        case '/':
            resultado = num1 / num2
            break

        default:"Operador invalido"
            break;
    }

    document.getElementById(resposta).textContent = resultado
}