alert("Maçã e Morango");

let kgMaca = parseFloat(prompt("Quantos quilos de maçã?"));
let kgMorango = parseFloat(prompt("Quantos quilos de morango?"));

let precoMaca;
let precoMorango;

// Definindo o preço da maçã
if (kgMaca <= 5) {
    precoMaca = 1.80;
} else {
    precoMaca = 1.50;
}

// Definindo o preço do morango
if (kgMorango <= 5) {
    precoMorango = 2.50;
} else {
    precoMorango = 2.20;
}

// Calculando o valor total
let valorTotal = (kgMaca * precoMaca) + (kgMorango * precoMorango);

// Verificando se tem desconto
if ((kgMaca + kgMorango) > 8 || valorTotal > 25) {
    let desconto = valorTotal * 0.10;
    valorTotal = valorTotal - desconto;
}

// Exibindo o valor final
alert("O valor a ser pago: R$ " + valorTotal.toFixed(2));
