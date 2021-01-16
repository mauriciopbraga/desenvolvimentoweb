function resultado(nota){
    switch(Math.floor(nota)){ // Arrendondar para baixo
        case 10: case 9:
            console.log('Nerd!')
            break
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação!')
            break
        case 3: case 2: case 1:
            console.log('Reprovado!')
            break
        default:
            console.log('Nota inválida!')
    }
}

resultado(10)
resultado(7)
resultado(6)
resultado(2)
resultado(-1)