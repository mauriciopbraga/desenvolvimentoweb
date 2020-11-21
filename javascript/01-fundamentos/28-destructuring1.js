// Criar uma nova variável baseada nos dados fornecidos no objeto

const dados = {
    nome: 'Carlos',
    idade: '45',
    endereco: {
        rua: 'Rua x',
        numero: 00
    }
}

const {nome: n, idade: i} = dados
console.log(n, i)

const {endereco: {rua: ra, numero: num}} = dados
console.log(ra, num)