let teste = false
console.log(teste)

teste = 1
console.log(!teste); // ! significa negação
console.log(!!teste) // !! significa dupla negação, ou seja, voltará ao valor original

// Valores verdadeiros
console.log(!!5) // Número natural
console.log(!!-1) // Número inteiro
console.log(!!1.5) // Número real
console.log(!!' ') // String
console.log(!![]) // Array
console.log(!!{}) // Objeto
console.log(!!Infinity) // Infinito
console.log(!!(teste = true)) // Variável 

// Valores falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(teste = false))

// Operação lógica com OU 
console.log(!!('' || null || 'Olá')) // Mostra o valor verdadeiro (tabela verdade e pá)

// Se for digitado o nome imprimir na tela, caso não seja localizado o nome imprimir DESCONHECIDO
nome = 'Mauricio'

console.log(nome || 'Desconhecido')