alert("Pode ou não votar?")

let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "))

let idade = 2025 - anoNascimento

if (idade >= 16 ) {
    alert("Pode votar!")
}
else {
    alert("Não pode votar!")
}