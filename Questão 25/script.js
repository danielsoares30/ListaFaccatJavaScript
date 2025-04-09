alert("Saldo da conta")

let numeroConta = prompt("Digite o número da conta:")
let saldo = parseFloat(prompt("Digite o saldo da conta:"))
let debito = parseFloat(prompt("Digite o valor do débito:"))
let credito = parseFloat(prompt("Digite o valor do crédito:"))

saldoAtual = saldo - debito + credito

if (saldoAtual < 0) {
    alert("Saldo negativo")
}
else {
    alert("Saldo positivo")
}