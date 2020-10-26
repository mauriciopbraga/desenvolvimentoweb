var numero1 = 5
let numero2 = 2 // Usar esse

console.log(numero1, numero2);

var numero1 = 30 // JS é estranho. Assim funciona!
// let numero2 = 48; - Gera erro, pois já foi declarado como "let" lá em cima
numero2 = 48 // Assim funciona normal

console.log(numero1, numero2)

// Os dois funcionam normalmente
numero1 = 97
numero2 = 65

console.log(numero1, numero2)

const numero3 = 7

// numero3 = 54; - Dá erro, pois uma constante não pode ser alterada

console.log(numero3)