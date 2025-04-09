alert("3 valores (maior deles)")

let valor1 = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite o segundo valor: "))
let valor3 = parseInt(prompt("Digite o terceiro valor: "))

if (valor1 > valor2 & valor1 > valor3) {
    alert("O maior valor é: " + valor1)
}
else if (valor2 > valor1 & valor2 > valor3) {
    alert("O maior valor é: " + valor2)
}
else {
    alert("O maior valor é: " + valor3)
}