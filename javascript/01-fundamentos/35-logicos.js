/* - Se o trabalho 1 der certo e o trabalho 2 der certo no fim de semana comprarei uma TV de 50" e vou tomar sorvete
- Se apenas um dos dois trabalhos der certo comprarei uma TV de 30" e tomar sorvete
- Se não der certo nenhum trabalho não comprarei a TV e não tomarei o sorvete */

function acoes(trabalho1, trabalho2){
    const tomarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv30 = !!(trabalho1 ^ trabalho2) // bitwise (xor)
    const comprarTv30 = trabalho1 != trabalho2
    const fazerNada = !tomarSorvete

    return{tomarSorvete, comprarTv50, comprarTv30, fazerNada}
}

console.log(acoes(true, true))
console.log(acoes(true, false))
console.log(acoes(false, true))
console.log(acoes(false, false))