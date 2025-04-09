alert("40 horas de trabalho");

let horasTrabalhadas = parseInt(prompt("Quantas horas você trabalhou no mês?"));
let salarioHora = parseInt(prompt("Qual o valor da sua hora de trabalho?"));
let salarioTotal;

if (horasTrabalhadas > 160) {
    let horaExtras = horasTrabalhadas - 160;
    let valorHoraExtra = salarioHora * 1.5; // 50% a mais
    salarioTotal = (160 * salarioHora) + (horaExtras * valorHoraExtra);
    alert("O seu salário total é: R$ " + salarioTotal.toFixed());
} else {
    salarioTotal = horasTrabalhadas * salarioHora;
    alert("O seu salário total é: R$ " + salarioTotal.toFixed());
}