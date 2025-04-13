alert("Idade dos homens e mulheres")

let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem: "))
let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem: "))
let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher: "))
let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher: "))


if (idadeHomem1 > idadeHomem2 & idadeMulher1 > idadeMulher2) {
    alert("A soma da idade do homem mais velho com a mulher mais nova é: " + (idadeHomem1 + idadeMulher2))
    alert("O produto da idade do homem mais novo com a mulher mais velha é: " + idadeHomem2 * idadeMulher1)
}
else if (idadeHomem1 > idadeHomem2 & idadeMulher1 < idadeMulher2) {
    alert("A soma da idade do homem mais velho com a mulher mais nova é: " + (idadeHomem1 + idadeMulher1))
    alert("O produto da idade do homem mais novo com a mulher mais velha é: " + idadeHomem2 * idadeMulher2)
}
else if (idadeHomem1 < idadeHomem2 & idadeMulher1 > idadeMulher2) {
    alert("A soma da idade do homem mais velho com a mulher mais nova é: " + (idadeHomem2 + idadeMulher2))
    alert("O produto da idade do homem mais novo com a mulher mais velha é: " + idadeHomem1 * idadeMulher1)
}
else {
    alert("A soma da idade do homem mais velho com a mulher mais nova é: " + (idadeHomem2 + idadeMulher1))
    alert("O produto da idade do homem mais novo com a mulher mais velha é: " + idadeHomem1 * idadeMulher2)
}