alert("Aluno aprovado ou reprovado?")
// Pedindo as notas ao usuário
let nota1 = parseInt(prompt("Digite a primeira nota: "))
let nota2 = parseInt(prompt("Digite a segunda nota: "))
// Calculando a média
let media = (nota1 + nota2) / 2

if (media >= 6) {
    alert("Aluno aprovado!")
}
else{
    alert("Aluno reprovado!")
}
