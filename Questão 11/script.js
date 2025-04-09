alert("Salário de revendores de carros")

let salarioFixo = Number(prompt("Digite o salário fixo do vendedor: "))

let numVendas = Number(prompt("Digite o número de vendas realizadas: "))

let valorVendas = Number(prompt("Digite o valor total das vendas: "))

let comissao_fixa = Number(prompt("Digite o valor da comissão fixa do vendedor:"))


let comissao_vendas = 0.05 * valorVendas



let comissao_total = comissao_fixa + comissao_vendas

let salario_final = salarioFixo + comissao_total

alert("O salário final do vendedor é: " + salario_final.toFixed(3))
