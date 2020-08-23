const peso1 = 1.0
const peso2 = Number('3.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // isInteger para saber o tipo do número
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.8865
const avaliacao2 = 7.8756

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed serve para determinar o número de casas após o ponto
console.log(media.toString()) // Transformar em string
console.log(media.toString(2)) // Transformar em valor binário
console.log(typeof media)
console.log(typeof Number) // Number é umma função