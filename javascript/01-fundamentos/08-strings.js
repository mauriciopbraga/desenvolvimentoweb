let palavra = 'aleatória'

console.log(palavra.charAt(0)) // Exibe a posição das letras da palavra
console.log(palavra.charCodeAt(2)) // Mostra o valor equivalente na tabela ascii, no caso "e"
console.log(palavra.indexOf("ó")) // Mostra a posição da letra na variável

// Não incluir caracteres
console.log(palavra.substring(1)) // Não inhcluir a letra "a"
console.log(palavra.substring(0, 3)) // Incluir apenas os 3 primeiros caracteres

// Concatenar
console.log('Muito '.concat(palavra).concat(' essa palavra'))
// ou
console.log('Muito ' + palavra + ' essa palavra')
console.log(palavra.replace(5, 'o'))

// Converter em array
console.log('Mauricio, João, Pedro'.split(','))