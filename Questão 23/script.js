alert("Peso ideal")

let nome = (prompt("Digite seu nome:"))
let sexo = (prompt("Digite seu sexo:"))
let altura = parseFloat(prompt("Digite sua altura:"))

if (sexo == "masculino" || sexo == "Masculino") {
    let pesoIdeal = (72.7 * altura) - 58 
    alert("Seu peso ideal é: " + pesoIdeal)
}
else if (sexo == "feminino") {
    let pesoIdeal = (62.1 * altura) - 44.7
    alert("Seu peso ideal é: " + pesoIdeal)
}
else {
    alert("Sexo inválido, por favor digite masculino ou feminino")
}
