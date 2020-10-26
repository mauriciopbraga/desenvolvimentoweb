// Armazenando função dentro de uma variável
const soma = function(n1, n2){
    console.log(n1 + n2)
}

soma(2, 5)

// Armazenando uma função arrow (=>) dentro de uma variável
const subtracao = (n1, n2) =>{
    return n1 - n2
}

console.log(subtracao(2, 6))

// Retorno imprícito
const multiplicacao = (n1, n2) => n1 * n2 // Executa uma linha da função

console.log(multiplicacao(2, 6))