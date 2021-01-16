Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const resultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('Nerd!')
    }
    else if(nota.entre(7, 8.99)){
        console.log('Aprovado!')
    }
    else if(nota.entre(4, 6.99)){
        console.log('Burro! Recuperação')
    }
    else if(nota.entre(0, 3.99)){
        console.log('Reprovado!')
    }
    else{
        console.log('Nota inválida!')
    }
}

resultado(10)
resultado(7)
resultado(6)
resultado(2)
resultado(-1)