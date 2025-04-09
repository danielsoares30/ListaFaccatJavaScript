alert("Estoque de produtos")

let quantidadeMaxima = parseInt(prompt("Digite a quantidade máxima em estoque"))
let quantidadeMinima = parseInt(prompt("Digite a quantidade mínima em estoque"))
let quantidadeAtual = parseInt(prompt('Digite a quantidade atual em estoque:'))

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2

if (quantidadeAtual >= quantidadeMaxima) {
    alert("Não efetuar compra")
}
else {
    alert("Efetuar compra")
}