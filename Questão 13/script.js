alert("Média de nota escolar");

// Pedindo as notas e convertendo para número
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));
let nota4 = Number(prompt("Digite a quarta nota: "));

// Calculando a média
let media = (nota1 + nota2 + nota3 + nota4) / 4;

// Exibindo a média
alert("A média do aluno é: " + media.toFixed(2));


