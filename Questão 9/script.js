alert("Reajuste Salarial")

// Pedindo o salário atual do funcionário
let salarioAtual = Number(prompt("Qual o salário atual do funcionário?"))
// pedindo o percentual de reajuste
let percentualReajuste = Number(prompt("Qual o percentual de reajuste?"))


// calculando o novo salário
let novoSalario = salarioAtual + (salarioAtual * percentualReajuste) / 100

// Exibindo o novo salario
alert("O novo salário é: " + novoSalario)
