// Tem escopo global, escopo de função e escopo de bloco, ao contrário do var

let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)