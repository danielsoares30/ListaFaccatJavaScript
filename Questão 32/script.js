alert("Partida de futebol")

let time1 = prompt("Digite o nome do primeiro time:")
let time2 = prompt("Digite o nome do segundo time:")

let golsTime1 = parseInt(prompt("Digite o número de gols do " + time1 + ":"))
let golsTime2 = parseInt(prompt("Digite o número de gols do " +  time2 + ":"))

if (golsTime1 > golsTime2) {
    alert("O " + time1 + " venceu o " + time2 + " por " + golsTime1 + " a " + golsTime2)
}
else if (golsTime1 = golsTime2) {
    alert("O " + time1 + " empatou com o " + time2 + " por " + golsTime1 + " a " + golsTims2
    )
}
else {
    alert("O " + time2 + " venceu o " + time1 + " por " + golsTime2 + " a " + golsTime1)
}
