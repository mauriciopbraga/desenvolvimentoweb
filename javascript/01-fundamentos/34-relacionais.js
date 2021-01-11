console.log('01)', '1' == 1) // Verdadeiro (dois sinais de = não liga o tipo primitivo do valor) (igual)
console.log('02)', '1' === 1) // Falso (considera que o valor deve ser igual e de mesmo tipo) (restrimante igual)
console.log('03)', '1' != 1) // Falso (realmente os dois valores não são diferentes) (diferença) (Não considera a tipagem do valor)
console.log('04)', '1' !== 1) // Verdadeiro (Os dois valores são diferentes por conta dos seus tipos primitivos) (Restritamente diferente)

// Aqui não tem muito o que fazer só chorar 
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)


// Nesse caso não há diferença entre os operadores
const data1 = new Date(0)
const data2 = new Date(0)
console.log('09)', data1 === data2)
console.log('10)', data1 == data2)
console.log('11)', data1.getTime() === data2.getTime()) // Nesse faz

// Aqui também há restrições
console.log('12', undefined == null)
console.log('13)', undefined === null)