const notas = [5.5, 8.7, 8.9, 7.4, 4.3]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Fulano',
    sobrenome: 'De tal',
    idade: '28'
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}