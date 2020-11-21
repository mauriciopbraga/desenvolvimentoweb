console.log(Math.ceil(6.1)) // . para puxar uma função

const obj = {}
obj.nome = 'Carro'
console.log(obj.nome)

function objeto(nome){
    this.nome = nome // Ficar público
}

const objeto1 = new objeto('Mesa')
const objeto2 = new objeto('Toalha')
console.log(objeto1.nome)
console.log(objeto2.nome)