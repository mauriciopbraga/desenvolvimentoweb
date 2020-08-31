const array = [1, 3, 6.5, 67]
console.log(array[1], array[2])
console.log(array[5]) // Irá dar indefinido

array[5] = 7.8
console.log(array)
console.log(array.length) // Dizer quantos elemntos tem no vetor

array.push({id: 1}, true, 'Opa', null) // Adcionar mais elemntos ao vetor
console.log(array)

console.log(array.pop()) // Tira o último valor do array, e exlui

delete array[0] // Deleta um elemnto do array
console.log(array)

console.log(typeof array) // Array é um objeto