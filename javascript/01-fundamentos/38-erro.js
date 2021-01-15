function tratarErro(erro){
    //throw new Error('Mensagem')
    throw 120
}

function imprimirNomeCaps(obj){
    try{
        console.log(obj.name.toUpperCase() + '!')
    } catch(e){
        tratarErro(e)
    } finally{
        console.log('Final')
    }
}

const obj = {nome: 'Mauricio'}
imprimirNomeCaps(obj)