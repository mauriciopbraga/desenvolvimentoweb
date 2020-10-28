const mensagem = 'E aí' // Contexto léxico

function exec(){
    const mensagem = 'oi' // Contexto léxico 2
    return mensagem
}

// Objetos sao grupos aninhados de pares valor

const pessoa = {
    nome: 'Mauricio',
    idade: 18,
    peso: 50,
    endereco:{
        rua: 'xxxx',
        numero: 123
    }
}

console.log(mensagem)
console.log(exec())
console.log(pessoa)