alert("Questão 41")

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))
let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios: "))

let media = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7

if (media >= 9) {
    alert("Nota A")
}
else if (media >= 7.5 && media < 9) {
    alert("Nota B")
}
else if (media >= 6 && media < 7.5) {
    alert("Nota C")
}
else {
    alert("Nota D")
}