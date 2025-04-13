let codigo = prompt("Digite o código do empregado: ")
let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))
let anoIngresso = parseInt(prompt("Digite o ano de ingresso na empresa do empregado: "))

let idade = 2025 - anoNascimento
tempoServico = 2025 - anoIngresso

if (idade >= 65 || tempoServico >= 30 || (idade >= 60 && tempoServico >= 25))
    alert("O empregado " + codigo + " pode se aposentar.")
else {
    alert("O empregado " + codigo + " não pode se aposentar.")
}