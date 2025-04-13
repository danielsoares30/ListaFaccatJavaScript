alert("Preço com combustível");

let litrosVendidos = parseFloat(prompt("Quantos litros foram vendidos?"));
let tipoCombustivel = prompt("Qual o tipo de combustível? (A para álcool e G para gasolina)");

let preco;
let desconto;

if (tipoCombustivel == "A" || tipoCombustivel == "a") {
    preco = 2.90;
    if (litrosVendidos <= 20) {
        desconto = 0.03;
    } else {
        desconto = 0.05;
    }
} else if (tipoCombustivel == "G" || tipoCombustivel == "g") {
    preco = 3.30;
    if (litrosVendidos <= 20) {
        desconto = 0.04;
    } else {
        desconto = 0.06;
    }
} else {
    alert("Tipo de combustível inválido!");
}

if (preco !== undefined && desconto !== undefined) {
    let valorBruto = litrosVendidos * preco;
    let valorDesconto = valorBruto * desconto;
    let valorTotal = valorBruto - valorDesconto;

    alert("O valor total a ser pago é: R$ " + valorTotal.toFixed(2));
}


 