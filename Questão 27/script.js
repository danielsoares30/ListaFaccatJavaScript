alert("Positivo, negativo ou zero")

let valor = parseInt(prompt("Digite um número:"))

if (valor > 0) {
    alert("O número " + valor + " é positivo.")
}
else if (valor == 0) {
    alert("O número " + valor + " é zero.")
}
else {
    alert("O número " + valor + " é negativo.")
}