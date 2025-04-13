let nomeProduto = prompt("Digite o nome do produto: ");
let quantidadeProduto = parseInt(prompt("Digite a quantidade do produto: "));
let valorProduto = parseFloat(prompt("Digite o valor do produto: "));

let valorTotal = quantidadeProduto * valorProduto;

if (quantidadeProduto <= 5) {
    let valorDesconto = valorTotal * 0.02;
    let totalFinal = valorTotal - valorDesconto;
    alert("O valor total é: " + totalFinal.toFixed(2));
} else if (quantidadeProduto > 5 && quantidadeProduto <= 10) {
    let valorDesconto = valorTotal * 0.03;
    let totalFinal = valorTotal - valorDesconto;
    alert("O valor total é: " + totalFinal.toFixed(2));
} else {
    let valorDesconto = valorTotal * 0.05;
    let totalFinal = valorTotal - valorDesconto;
    alert("O valor total é: " + totalFinal.toFixed(2));
}
