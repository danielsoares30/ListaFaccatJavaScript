alert("Custo de fábrica do carro")
// Pedindo o custo de fabrica
let custoFabrica = Number(prompt("Digite o custo de fábrica do carro:"))

// variavel do custo da distribuidora
let custoDistribuidora = 0.28 * custoFabrica

// variavel do imposto
let imposto = 0.45 * custoFabrica

// variavel do custo total para o consumidor
let custoTotal = custoFabrica + custoDistribuidora + imposto

// Exibindo o custo total para o consumidor
alert("O custo total para o consumidor é: " + custoTotal.toFixed(3))