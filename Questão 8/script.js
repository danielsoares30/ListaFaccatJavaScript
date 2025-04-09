// Mensagem inicial
alert("Eleição")

// número total de eleitores
let totalEleitores = prompt("Digite o número total de eleitores:")
// o número de votos brancos
let votosBrancos = prompt("Digite o número de votos brancos:")
// o número de votos nulos
let votosNulos = prompt("Digite o número de votos nulos:")
// o número de votos válidos
let votosValidos = prompt("Digite o número de votos válidos:")

// Calculo do percentual de votos brancos
let percentualBrancos = (votosBrancos / totalEleitores) * 100
// Calculo do percentual de votos nulos
let percentualNulos = (votosNulos / totalEleitores) * 100
// calculo do percentual de votos válidos
let percentualValidos = (votosValidos / totalEleitores) * 100

// Mostrar cada percentual
alert("Percentual de votos brancos: " + percentualBrancos +"%")
alert("Percentual de votos nulos: " + percentualNulos +"%")
alert("Percentual de votos válidos: " + percentualValidos +"%")