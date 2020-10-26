// Função sem retorno
function soma(n1, n2){
    console.log(n1 + n2)
}

soma(2, 5) // Resultado normal
soma(2) //  O resultado não é um número
soma(3, 4, 7, 8) // Usa somente os 2 primeiros e ignora o resto
soma() // Resultado não é um número

// Função com retorno
function subtracao(n1, n2 = 0){ // n4 valor padrão caso não tenha nenhum irá usa-lo
    return n1 - n2 // Returna o valor
}

console.log(subtracao(3, 2)) // Resultado normal
console.log(subtracao(2)) // Resulta o 2 porque o parametro 0 foi atribuido a "n4"
console.log(subtracao()) // Não é um número, pois o primeiro valor não foi passado