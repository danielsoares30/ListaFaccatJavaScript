alert("Calculando a comissão")

let salarioFixo = parseInt(prompt("Digite o salário fixo do vendedor: "))
let valorVendas = parseInt(prompt("Digite o valor total das vendas:"))

if (valorVendas <= 1500) {
    let comissao = valorVendas * 0.03
    let salarioTotal = salarioFixo + comissao
    alert("O salário total do vendedor é: " + salarioTotal)
}
else {
    let comissao = valorVendas * 0.05
    let salarioTotal = salarioFixo + comissao
    alert("O salário total do vendedor é: " + salarioTotal)
}