alert("O valor crescente: ")
// pedindo 2 valores pro usuário
let valor1 = parseInt(prompt("Digite o primeiro valor:"))
let valor2 = parseInt(prompt("Digite o segundo valor:"))

// verificando qual valor é maior
if (valor1 > valor2) {
    alert("A ordem crescente é : " + valor2 + ", " + valor1)
}
else {
    alert("A ordem crescente é : " + valor1  + ", " + valor2)
}