alert("A soma dos dois maiores")

let valor1 = parseInt(prompt("Digite o primeiro valor:"))
let valor2 = parseInt(prompt("Digite o segundo valor:"))
let valor3 = parseInt(prompt("Digite o terceiro valor:"))

if (valor1 > valor2 & valor2 > valor3) {
    alert("A soma dos dois maiores é: " + (valor1+valor2))
}
else if (valor1 > valor2 & valor3 > valor2) {
    alert("A soma dos dois maiores é: " + (valor1 + valor3))
}
else {
    alert("A soma dos dois maiores é: " + (valor2 + valor3))
}