let inicioJogo = parseFloat(prompt("Digite que horas começou a partida: "))
let fimJogo = parseFloat(prompt("Digite o horário que terminou a partida"))

let duracaoJogo = (fimJogo - inicioJogo)
if (duracaoJogo <0) {
    duracaoJogo = duracaoJogo + 24
}
alert(duracaoJogo + ":00 de jogo")