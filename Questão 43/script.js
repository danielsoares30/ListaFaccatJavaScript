let a = parseInt(prompt("Digite a medida do lado a do triângulo"))
let b = parseInt(prompt("Digite a medida do lado b do triângulo"))
let c = parseInt(prompt("Digite a medida do lado c do triângulo"))

if (a < b + c && b < a + c && c < a + b) {
    if (a == b && b == c) {
        alert("O triângulo é equilátero")
    }
else if (a == b || a == c || b == c) {
    alert("O triângulo é isósceles")}
}
else {
    alert("O triângulo é escaleno")
}