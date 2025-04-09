alert("O preço da maça")

let vendas = parseInt(prompt("Quantas maças você comprou?"))

if (vendas >= 12) {
    let preco = 1.00 * vendas
    alert("O preço total é: " + preco + " reais")
}
else {
    let preco = 1.30 * vendas
    alert("O preço total é: " + preco + " reais")
}
